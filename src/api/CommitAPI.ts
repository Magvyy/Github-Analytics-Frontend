import type { RepoResponse } from "./RepoAPI"
import type { UserResponse } from "./UserAPI"


export interface CommitResponse {
        id: string
        created: string
        message: string
        repo: RepoResponse
        author: UserResponse
        committer: UserResponse
}

export interface CommitTree {
        commit: CommitResponse
        children: CommitResponse[]
}