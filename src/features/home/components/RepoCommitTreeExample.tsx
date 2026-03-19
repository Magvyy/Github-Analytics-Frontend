import type { RepoResponse } from "@/src/api/RepoAPI";
import { RepoCommitTree } from "../../repos";
import type { CommitTree } from "@/src/api/CommitAPI";
import type { UserResponse } from "@/src/api/UserAPI";

const exampleAuthor: UserResponse = {
    id: 5234712386,
    name: "Sarah Dev"
};

const exampleCommitter: UserResponse = {
    id: 645637453,
    name: "John Ops"
};

const exampleRepo: RepoResponse = {
    id: 6387621905,
    name: "my-app",
    created: "2023-01-01T00:00:00Z",
    updated: "2023-01-01T00:00:00Z",
    pushed: "2023-01-01T00:00:00Z",
    owner: exampleAuthor
};

export const exampleCommitTree: CommitTree[] = [
    {
        commit: {
            id: "a1b2c3d",
            created: "2024-01-01T09:00:00Z",
            message: "Initial commit",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "b2c3d4e",
                created: "2024-01-02T10:00:00Z",
                message: "Add project scaffold",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            },
            {
                id: "c3d4e5f",
                created: "2024-01-02T11:00:00Z",
                message: "Add CI/CD pipeline config",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "b2c3d4e",
            created: "2024-01-02T10:00:00Z",
            message: "Add project scaffold",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "d4e5f6g",
                created: "2024-01-03T09:00:00Z",
                message: "Set up authentication module",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            },
            {
                id: "e5f6g7h",
                created: "2024-01-03T10:30:00Z",
                message: "Add database models",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "c3d4e5f",
            created: "2024-01-02T11:00:00Z",
            message: "Add CI/CD pipeline config",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "f6g7h8i",
                created: "2024-01-04T08:00:00Z",
                message: "Add Docker configuration",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "d4e5f6g",
            created: "2024-01-03T09:00:00Z",
            message: "Set up authentication module",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "g7h8i9j",
                created: "2024-01-05T09:00:00Z",
                message: "Implement JWT token handling",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            },
            {
                id: "h8i9j0k",
                created: "2024-01-05T11:00:00Z",
                message: "Add OAuth2 provider support",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "e5f6g7h",
            created: "2024-01-03T10:30:00Z",
            message: "Add database models",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "i9j0k1l",
                created: "2024-01-06T09:00:00Z",
                message: "Add migration scripts",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "f6g7h8i",
            created: "2024-01-04T08:00:00Z",
            message: "Add Docker configuration",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "j0k1l2m",
                created: "2024-01-06T14:00:00Z",
                message: "Add Kubernetes manifests",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "g7h8i9j",
            created: "2024-01-05T09:00:00Z",
            message: "Implement JWT token handling",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "k1l2m3n",
                created: "2024-01-07T10:00:00Z",
                message: "Add token refresh logic",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "h8i9j0k",
            created: "2024-01-05T11:00:00Z",
            message: "Add OAuth2 provider support",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "l2m3n4o",
                created: "2024-01-07T13:00:00Z",
                message: "Add Google OAuth integration",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            },
            {
                id: "m3n4o5p",
                created: "2024-01-07T15:00:00Z",
                message: "Add GitHub OAuth integration",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "i9j0k1l",
            created: "2024-01-06T09:00:00Z",
            message: "Add migration scripts",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "n4o5p6q",
                created: "2024-01-08T09:00:00Z",
                message: "Seed initial data",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "j0k1l2m",
            created: "2024-01-06T14:00:00Z",
            message: "Add Kubernetes manifests",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "o5p6q7r",
                created: "2024-01-08T11:00:00Z",
                message: "Configure horizontal pod autoscaling",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "k1l2m3n",
            created: "2024-01-07T10:00:00Z",
            message: "Add token refresh logic",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "p6q7r8s",
                created: "2024-01-09T09:00:00Z",
                message: "Fix token expiry edge case",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "l2m3n4o",
            created: "2024-01-07T13:00:00Z",
            message: "Add Google OAuth integration",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "q7r8s9t",
                created: "2024-01-09T11:00:00Z",
                message: "Handle Google token revocation",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "m3n4o5p",
            created: "2024-01-07T15:00:00Z",
            message: "Add GitHub OAuth integration",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "r8s9t0u",
                created: "2024-01-09T14:00:00Z",
                message: "Sync GitHub user metadata on login",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "n4o5p6q",
            created: "2024-01-08T09:00:00Z",
            message: "Seed initial data",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "s9t0u1v",
                created: "2024-01-10T09:00:00Z",
                message: "Add test fixtures",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "o5p6q7r",
            created: "2024-01-08T11:00:00Z",
            message: "Configure horizontal pod autoscaling",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "t0u1v2w",
                created: "2024-01-10T11:00:00Z",
                message: "Add resource limits to all containers",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "p6q7r8s",
            created: "2024-01-09T09:00:00Z",
            message: "Fix token expiry edge case",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "u1v2w3x",
                created: "2024-01-11T09:00:00Z",
                message: "Merge auth fixes into main",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "q7r8s9t",
            created: "2024-01-09T11:00:00Z",
            message: "Handle Google token revocation",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "u1v2w3x",
                created: "2024-01-11T09:00:00Z",
                message: "Merge auth fixes into main",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "r8s9t0u",
            created: "2024-01-09T14:00:00Z",
            message: "Sync GitHub user metadata on login",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "u1v2w3x",
                created: "2024-01-11T09:00:00Z",
                message: "Merge auth fixes into main",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "s9t0u1v",
            created: "2024-01-10T09:00:00Z",
            message: "Add test fixtures",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "v2w3x4y",
                created: "2024-01-11T13:00:00Z",
                message: "Write unit tests for auth module",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
    {
        commit: {
            id: "u1v2w3x",
            created: "2024-01-11T09:00:00Z",
            message: "Merge auth fixes into main",
            repo: exampleRepo,
            author: exampleAuthor,
            committer: exampleCommitter,
        },
        children: [
            {
                id: "w3x4y5z",
                created: "2024-01-12T09:00:00Z",
                message: "Release v1.0.0",
                repo: exampleRepo,
                author: exampleAuthor,
                committer: exampleCommitter,
            }
        ]
    },
];

export function RepoCommitTreeExample() {

    return (
        <RepoCommitTree
            data={exampleCommitTree}
        />
    )
}