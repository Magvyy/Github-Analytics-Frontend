import type { RepoResponse } from "./RepoAPI"
import type { UserResponse } from "./UserAPI"


export interface CommitResponse {
        id: number
        created: string
        repo: RepoResponse
        author: UserResponse
        committer: UserResponse
}