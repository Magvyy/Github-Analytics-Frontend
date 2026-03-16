import { useEffect, useState } from "react"

import env from "@/env/env.json";
import type { RepoResponse } from "@/src/api/RepoAPI"
import { RepoItems } from "@/src/features/repos";


export default function ReposPage() {
	const [repos, setRepos] = useState<RepoResponse[]>([]);

	useEffect(() => {
		const fetchRepos = async () => {
			let response = await fetch(env.backend + `/repos`, {
				credentials: "include",
				method: "GET"
			});
			setRepos(await response.json());
		}
		fetchRepos();
	}, [])

    return (
		<div className="w-full flex flex-col items-center">
			<RepoItems
				repos={repos}
			/>
		</div>
    )
}