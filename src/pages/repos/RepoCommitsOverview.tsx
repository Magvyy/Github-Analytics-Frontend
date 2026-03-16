import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import env from "@/env/env.json";
import RepoCommitsPieChart from "@/src/features/repos/components/RepoCommitsPieChart"
import type { RepoResponse } from "@/src/api/RepoAPI";
import type { RepoCommitsPerUser } from "@/src/api/AnalyticsAPI";

export default function RepoCommitsOverview() {
	const { repoId } = useParams();
	const [aggregates, setAggregates] = useState<RepoCommitsPerUser[]>([]);
	const [repo, setRepo] = useState<RepoResponse>();

	useEffect(() => {
		const fetchCommits = async () => {
			let response = await fetch(env.backend + `/repos/${repoId}/aggregates`, {
				credentials: "include",
				method: "GET"
			});
			setAggregates(await response.json());
		}
		const fetchRepo = async () => {
			let response = await fetch(env.backend + `/repos/${repoId}`, {
				credentials: "include",
				method: "GET"
			});
			setRepo(await response.json());
		}
		fetchCommits();
		fetchRepo();
	}, [])

    return (
		<RepoCommitsPieChart
			repo={repo}
			aggregates={aggregates}
		/>
    )
}