import type { UserResponse } from "./UserAPI"


export interface RepoResponse {
        id: number
        name: string
        created: string
        updated: string
        pushed: string
        owner: UserResponse
}