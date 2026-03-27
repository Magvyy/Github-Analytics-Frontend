import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "@/env/env.json";
import { type CommitDetails, type FileDetails, type FileDetailsFlat } from "@/src/api/CommitAPI";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FileRatingCard } from "@/src/features/files";
import { toFileDetails } from "../services/toFileDetails";
import { apiCall } from "@/src/shared/services/apiCall";
import Loader from "@/src/shared/components/Loader";




export default function CommitOverviewPage() {
	const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
	const [commit, setCommit] = useState<CommitDetails | undefined>(undefined);

	useEffect(() => {
        apiCall(`/commits/${id}`, setCommit, setIsLoading);
	}, []);

    const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
        return (
            <SyntaxHighlighter style={monokai}>
                {code}
            </SyntaxHighlighter>
        );
    };


    return (
        isLoading ?
            <Loader/> :
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="flex w-fit flex-col justify-center gap-4 p-6 bg-card rounded-2xl ring-1 ring-foreground/10">
                    {(commit === undefined)
                        ? 
                        <div>...</div>
                        : 
                        <div className="flex flex-col gap-10">
                            <div>
                                <h1>Commit: {commit?.id}</h1>
                                <h2>Created: {(commit.created != "N/A") ? new Date(commit.created).toUTCString() : new Date().toUTCString()}</h2>
                                <h2>Message: {commit.message}</h2>
                                {(commit.rating != null) && 
                                    <div className="flex gap-2 justify-center">
                                        <h2>Quality: {commit.rating.quality}</h2>
                                        <h2>Complexity: {commit.rating.complexity}</h2>
                                        <h2>Readability: {commit.rating.readability}</h2>
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                {commit.file_ratings.map((file: FileDetailsFlat) => 
                                    <FileRatingCard
                                        key={file.file_name}
                                        details={toFileDetails(file)}
                                    />
                                )}
                            </div>
                        </div>}
                </div>
            </div>
    )
}