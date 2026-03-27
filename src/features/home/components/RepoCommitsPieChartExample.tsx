import type { RepoResponse } from "@/src/api/RepoAPI";
import type { UserResponse } from "@/src/api/UserAPI";
import RepoCommitsPieChart from "../../repos/components/RepoCommitsPieChart";
import type { RepoCommitsPerUser } from "@/src/api/AnalyticsAPI";

const user1: UserResponse = {
    id: 1,
    name: "User_1"
}

const repo: RepoResponse = {
    id: 1,
    name: "Github Repo",
    created: "2026-03-13T12:00:00",
    updated: "2026-03-13T12:00:00",
    pushed: "2026-03-13T12:00:00",
    owner: user1
}

const data: RepoCommitsPerUser[] = [
    {
        user_name: "User 1",
        repo_name: "Github Repo",
        author_commits: 275,
        committer_commits: 100
    },
    {
        user_name: "User 2",
        repo_name: "Github Repo",
        author_commits: 200,
        committer_commits: 173
    },
    {
        user_name: "User 3",
        repo_name: "Github Repo",
        author_commits: 187,
        committer_commits: 187
    },
    {
        user_name: "User 4",
        repo_name: "Github Repo",
        author_commits: 173,
        committer_commits: 200
    },
    {
        user_name: "User 5",
        repo_name: "Github Repo",
        author_commits: 100,
        committer_commits: 275
    },
]

export function RepoCommitsPieChartExample() {

    return (
        <RepoCommitsPieChart
            repo={repo}
            repoLoading={false}
            data={data}
            dataLoading={false}
        />
    )
}