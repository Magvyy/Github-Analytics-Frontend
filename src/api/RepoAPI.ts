import { defaultUser, type UserResponse } from "./UserAPI"


export interface RepoResponse {
        id: number
        name: string
        created: string
        updated: string
        pushed: string
        owner: UserResponse
}

export const defaultRepo: RepoResponse = {
        id: 0,
        name: "N/A",
        created: "N/A",
        updated: "N/A",
        pushed: "N/A",
        owner: defaultUser
}