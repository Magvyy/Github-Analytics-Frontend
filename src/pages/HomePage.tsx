import { RepoCommitsPieChartExample, RepoCommitTreeExample, UserCommitsPerDayBarChartExample } from "@/src/features/home";


export default function HomePage() {
    
    return (
        <div className="flex flex-col gap-6">
            <UserCommitsPerDayBarChartExample/>
            <RepoCommitsPieChartExample/>
            <RepoCommitTreeExample/>
        </div>
    )
}