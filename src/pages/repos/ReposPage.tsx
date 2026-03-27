import { useEffect, useState } from "react"

import type { RepoResponse } from "@/src/api/RepoAPI"
import { RepoItems } from "@/src/features/repos";
import { apiCall } from "@/src/shared/services/apiCall";
import Loader from "@/src/shared/components/Loader";


export default function ReposPage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
	const [repos, setRepos] = useState<RepoResponse[]>([]);

	useEffect(() => {
		apiCall(`/repos`, setRepos, setIsLoading);
	}, [])

    return (
		isLoading ? <Loader/> :
		<div className="w-full flex flex-col items-center">
			<RepoItems
				repos={repos}
			/>
		</div>
    )
}