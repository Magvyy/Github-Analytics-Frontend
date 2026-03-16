
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { cn } from "@/lib/utils";

import type { RepoResponse } from "@/src/api/RepoAPI";



interface RepoItemProps {
    repo: RepoResponse
    className?: string
}
export default function RepoItem({ repo, className }: RepoItemProps) {


    return (
        <Item key={repo.name} variant="outline" role="listitem"
            className={cn(
                "w-full",
                className
            )}
        >
            <ItemContent>
                <ItemTitle className="line-clamp-1">
                    {repo.name} -{" "}
                    <span className="text-muted-foreground">{repo.owner.name}</span>
                </ItemTitle>
                <ItemDescription>{repo.owner.name}</ItemDescription>
            </ItemContent>
        </Item>
    )
}