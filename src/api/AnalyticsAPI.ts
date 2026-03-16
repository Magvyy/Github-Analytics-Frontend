

export interface RepoCommitsPerUser {
        user_name: string
        repo_name: string
        commits: number
}

export enum Interval {
        DAY = "day",
        WEEK = "week",
        MONTH = "month",
        YEAR = "year"
}

export interface UserCommitsPerInterval {
        interval: string
        label: string
        user_name: string
        commits: number
}