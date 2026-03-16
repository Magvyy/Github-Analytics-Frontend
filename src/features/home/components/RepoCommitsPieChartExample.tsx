import type { RepoResponse } from "@/src/api/RepoAPI";
import type { UserResponse } from "@/src/api/UserAPI";
import RepoCommitsPieChart from "../../repos/components/RepoCommitsPieChart";
import type { RepoCommitsPerUser } from "@/src/api/AnalyticsAPI";

const user1: UserResponse = {
    id: 1,
    name: "User_1"
}

const user2: UserResponse = {
    id: 2,
    name: "User_2"
}

const user3: UserResponse = {
    id: 3,
    name: "User_3"
}

const user4: UserResponse = {
    id: 4,
    name: "User_4"
}

const user5: UserResponse = {
    id: 5,
    name: "User_5"
}

const repo: RepoResponse = {
    id: 1,
    name: "Github Repo",
    created: "2026-03-13T12:00:00",
    updated: "2026-03-13T12:00:00",
    pushed: "2026-03-13T12:00:00",
    owner: user1
}

const aggregates: RepoCommitsPerUser[] = [
    {
        user_name: "User_1",
        repo_name: "Github Repo",
        commits: 275
    },
    {
        user_name: "User_2",
        repo_name: "Github Repo",
        commits: 200
    },
    {
        user_name: "User_3",
        repo_name: "Github Repo",
        commits: 187
    },
    {
        user_name: "User_4",
        repo_name: "Github Repo",
        commits: 173
    },
    {
        user_name: "User_5",
        repo_name: "Github Repo",
        commits: 100
    },
]

export function RepoCommitsPieChartExample() {

    return (
        <RepoCommitsPieChart
            repo={repo}
            aggregates={aggregates}
        />
    )
}