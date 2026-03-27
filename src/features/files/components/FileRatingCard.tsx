import type { FileDetails } from "@/src/api/CommitAPI";
import { FileCode } from "./FileCode";


interface FileRatingCardProps {
    details: FileDetails
}
export function FileRatingCard({ details }: FileRatingCardProps) {
    const temp = details.fileName.split("/");
    const fileName = temp[temp.length - 1];
    
    return (
        <div className="flex flex-col w-[800px] py-6 gap-4 rounded-2xl ring-1 ring-foreground/10">
            <div className="flex flex-col px-6 items-start">
                <p>{fileName}</p>
                {(details.rating != null) && 
                    <>
                        <p>Feedback from {details.rating.model}</p>
                        <p>{details.rating.feedback}</p>
                        <div className="flex gap-2 justify-center">
                            {<p>Quality: {details.rating.quality}</p>}
                            <p>Complexity: {details.rating.complexity}</p>
                            <p>Readability: {details.rating.readability}</p>
                        </div>
                    </>
                }
            </div>
            <div className="max-w-[800px] overflow-auto">
                <div className="w-fit p-2 text-left w-fit">
                    <FileCode code={details.patch}/>
                </div>
            </div>
        </div>
    )
}