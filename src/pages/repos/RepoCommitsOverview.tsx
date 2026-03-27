import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import RepoCommitsPieChart from "@/src/features/repos/components/RepoCommitsPieChart"
import { defaultRepo, type RepoResponse } from "@/src/api/RepoAPI";
import { type RepoCommitsPerUser } from "@/src/api/AnalyticsAPI";
import type { CommitTreeNode } from "@/src/api/CommitAPI";
import { RepoCommitTree } from "@/src/features/repos";
import { apiCall } from "@/src/shared/services/apiCall";

export default function RepoCommitsOverview() {
	const { id } = useParams();

    const [repoLoading, setRepoLoading] = useState<boolean>(true);
	const [repo, setRepo] = useState<RepoResponse>(defaultRepo);
	
    const [repoCommitsLoading, setRepoCommitsLoading] = useState<boolean>(true);
	const [repoCommitsPerUser, setRepoCommitsPerUser] = useState<RepoCommitsPerUser[]>([]);
	
    const [treeLoading, setTreeLoading] = useState<boolean>(true);
	const [tree, setTree] = useState<CommitTreeNode[]>([]);

	useEffect(() => {
		apiCall(`/repos/${id}`, setRepo, setRepoLoading);
		apiCall(`/repos/${id}/per-user`, setRepoCommitsPerUser, setRepoCommitsLoading);
		apiCall(`/repos/${id}/commit-tree`, setTree, setTreeLoading);
	}, []);

    return (
		<>
			<RepoCommitsPieChart
				repo={repo}
				repoLoading={repoLoading}
				data={repoCommitsPerUser}
				dataLoading={repoCommitsLoading}
			/>
			<RepoCommitTree
				data={tree}
				dataLoading={treeLoading}
			/>
		</>
    )
}