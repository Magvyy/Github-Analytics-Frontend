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

export interface CommitTreeNode {
        commit: Omit<CommitResponse, "repo">
        children: string[]
}

export interface CommitRating {
        quality: number
        complexity: number
        readability: number
}

export interface FileDetailsFlat {
        file_name: string
        changes: number
        additions: number
        deletions: number
        quality?: number
        complexity?: number
        readability?: number
        feedback?: string
        model?: string
        patch: string
        
}

export interface FileDetails {
        fileName: string
        changes: number
        additions: number
        deletions: number
        rating?: {
                quality: number
                complexity: number
                readability: number
                feedback: string
                model: string
        }
        patch: string
}

export interface CommitDetails {
        id: string
        created: string
        message: string
        rating: CommitRating | undefined
        file_ratings: FileDetailsFlat[]
}

export const defaultCommit: CommitDetails = {
        id: "N/A",
        created: "N/A",
        message: "N/A",
        rating: {
                quality: 0,
                complexity: 0,
                readability: 0
        },
        file_ratings: [{
                file_name: "N/A",
                changes: 0,
                additions: 0,
                deletions: 0,
                patch: "N/A"
        }]
}