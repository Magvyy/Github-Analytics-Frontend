import { RepoCommitTree } from "../../repos";
import type { CommitTreeNode } from "@/src/api/CommitAPI";
import type { UserResponse } from "@/src/api/UserAPI";

const exampleAuthor: UserResponse = {
    id: 5234712386,
    name: "Sarah Dev"
};

const exampleCommitter: UserResponse = {
    id: 645637453,
    name: "John Ops"
};

export const exampleCommitTree: CommitTreeNode[] = [
    {
        commit: {
            id: "a1b2c3d",
            created: "2024-01-01T09:00:00Z",
            message: "Initial commit",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            "b2c",
            "c3d4e5f"
        ]
    },
    {
        commit: {
            id: "b2c3d4e",
            created: "2024-01-02T10:00:00Z",
            message: "Add project scaffold",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            "d4e",
            "e5f6g7h"
        ]
    },
    {
        commit: {
            id: "c3d4e5f",
            created: "2024-01-02T11:00:00Z",
            message: "Add CI/CD pipeline config",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            "f6g"
        ]
    },
    {
        commit: {
            id: "d4e5f6g",
            created: "2024-01-03T09:00:00Z",
            message: "Set up authentication module",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "g7h8i9j",
                "h8i9j0k"
        ]
    },
    {
        commit: {
            id: "e5f6g7h",
            created: "2024-01-03T10:30:00Z",
            message: "Add database models",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "i9j0k1l"
        ]
    },
    {
        commit: {
            id: "f6g7h8i",
            created: "2024-01-04T08:00:00Z",
            message: "Add Docker configuration",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "j0k1l2m"
        ]
    },
    {
        commit: {
            id: "g7h8i9j",
            created: "2024-01-05T09:00:00Z",
            message: "Implement JWT token handling",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "k1l2m3n"
        ]
    },
    {
        commit: {
            id: "h8i9j0k",
            created: "2024-01-05T11:00:00Z",
            message: "Add OAuth2 provider support",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "l2m3n4o",
                "m3n4o5p"
        ]
    },
    {
        commit: {
            id: "i9j0k1l",
            created: "2024-01-06T09:00:00Z",
            message: "Add migration scripts",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "n4o5p6q"
        ]
    },
    {
        commit: {
            id: "j0k1l2m",
            created: "2024-01-06T14:00:00Z",
            message: "Add Kubernetes manifests",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "o5p6q7r"
        ]
    },
    {
        commit: {
            id: "k1l2m3n",
            created: "2024-01-07T10:00:00Z",
            message: "Add token refresh logic",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "p6q7r8s"
        ]
    },
    {
        commit: {
            id: "l2m3n4o",
            created: "2024-01-07T13:00:00Z",
            message: "Add Google OAuth integration",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "q7r8s9t"
        ]
    },
    {
        commit: {
            id: "m3n4o5p",
            created: "2024-01-07T15:00:00Z",
            message: "Add GitHub OAuth integration",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "r8s9t0u"
        ]
    },
    {
        commit: {
            id: "n4o5p6q",
            created: "2024-01-08T09:00:00Z",
            message: "Seed initial data",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "s9t0u1v"
        ]
    },
    {
        commit: {
            id: "o5p6q7r",
            created: "2024-01-08T11:00:00Z",
            message: "Configure horizontal pod autoscaling",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "t0u1v2w"
        ]
    },
    {
        commit: {
            id: "p6q7r8s",
            created: "2024-01-09T09:00:00Z",
            message: "Fix token expiry edge case",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "u1v2w3x"
        ]
    },
    {
        commit: {
            id: "q7r8s9t",
            created: "2024-01-09T11:00:00Z",
            message: "Handle Google token revocation",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "u1v2w3x"
        ]
    },
    {
        commit: {
            id: "r8s9t0u",
            created: "2024-01-09T14:00:00Z",
            message: "Sync GitHub user metadata on login",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "u1v2w3x",
        ]
    },
    {
        commit: {
            id: "s9t0u1v",
            created: "2024-01-10T09:00:00Z",
            message: "Add test fixtures",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "v2w3x4y"
        ]
    },
    {
        commit: {
            id: "u1v2w3x",
            created: "2024-01-11T09:00:00Z",
            message: "Merge auth fixes into main",
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
                "w3x4y5z"
        ]
    },
];

export function RepoCommitTreeExample() {

    return (
        <RepoCommitTree
            data={exampleCommitTree}
            dataLoading={false}
        />
    )
}