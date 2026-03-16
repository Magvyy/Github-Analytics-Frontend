import { ItemGroup } from "@/components/ui/item";
import type { RepoResponse } from "@/src/api/RepoAPI";
import RepoItem from "./RepoItem";


interface RepoItemsProps {
	repos: RepoResponse[]
}
export function RepoItems({ repos }: RepoItemsProps) {

    return (
		<div className="flex w-full max-w-md flex-col gap-6">
			<ItemGroup className="gap-4">
				{repos.map(repo => (
					<RepoItem
						key={repo.name}
						repo={repo}
					/>
				))}
			</ItemGroup>
		</div>
    )
}