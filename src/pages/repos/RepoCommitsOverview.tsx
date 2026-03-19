import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import env from "@/env/env.json";
import RepoCommitsPieChart from "@/src/features/repos/components/RepoCommitsPieChart"
import { defaultRepo, type RepoResponse } from "@/src/api/RepoAPI";
import { type RepoCommitsPerUser } from "@/src/api/AnalyticsAPI";
import type { CommitTree } from "@/src/api/CommitAPI";
import { RepoCommitTree } from "@/src/features/repos";

export default function RepoCommitsOverview() {
	const { repoId } = useParams();
	const [repo, setRepo] = useState<RepoResponse>(defaultRepo);
	const [repoCommitsPerUser, setRepoCommitsPerUser] = useState<RepoCommitsPerUser[]>([]);
	const [tree, setTree] = useState<CommitTree[]>([]);

	useEffect(() => {
		const fetchRepo = async () => {
			let response = await fetch(env.backend + `/repos/${repoId}`, {
				credentials: "include",
				method: "GET"
			});
			setRepo(await response.json());
		}
		const fetchRepoCommitsPerUser = async () => {
			let response = await fetch(env.backend + `/repos/${repoId}/per-user`, {
				credentials: "include",
				method: "GET"
			});
			setRepoCommitsPerUser(await response.json());
		}
		const fetchRepoCommitTree = async () => {
			let response = await fetch(env.backend + `/repos/${repoId}/commit-tree`, {
				credentials: "include",
				method: "GET"
			});
			setTree(await response.json());
		}
		fetchRepo();
		fetchRepoCommitsPerUser();
		fetchRepoCommitTree();
	}, []);

    return (
		<>
			<RepoCommitsPieChart
				repo={repo}
				data={repoCommitsPerUser}
			/>
			<RepoCommitTree
				data={tree}
			/>
		</>
    )
}