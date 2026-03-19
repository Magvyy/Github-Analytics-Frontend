

export interface RepoCommitsPerUser {
        user_name: string
        repo_name: string
        author_commits: number
        committer_commits: number
}

export enum Interval {
        DAY = "day",
        WEEK = "week",
        MONTH = "month",
        YEAR = "year"
}


export enum CommitRole {
        COMMITTER = "committer",
        AUTHOR = "author"
}

export interface UserCommitsPerInterval {
        interval: string
        label: string
        user_name: string
        author_commits: number
        committer_commits: number
}