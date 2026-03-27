import { Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import type { RepoResponse } from "@/src/api/RepoAPI"
import { CommitRole, type RepoCommitsPerUser } from "@/src/api/AnalyticsAPI"
import { CommitRoleSelector } from "./CommitRoleSelector"
import { useState } from "react"
import Loader from "@/src/shared/components/Loader"

const chartConfig: ChartConfig = {
	commits: {
		label: "Commits"
	}
}

interface chartDataProps {
	user: string
	commits: Number
	fill: string
}

interface RepoCommitsPieChartProps {
    repo: RepoResponse
    repoLoading: boolean
    data: RepoCommitsPerUser[]
    dataLoading: boolean
}
export default function RepoCommitsPieChart({ repo, repoLoading, data, dataLoading }: RepoCommitsPieChartProps) {
    const [role, setRole] = useState<CommitRole>(CommitRole.AUTHOR);
    const dataKey = role + "_commits";
    
	const chartData: chartDataProps[] = [];
	data.forEach((sample, index) => {
        let userName = sample.user_name.replaceAll(" ", "_");
        let commits = sample[dataKey as keyof RepoCommitsPerUser] as Number;
        if (commits === 0) return;
		chartData.push({
			user: userName,
            commits: commits,
			fill: `var(--color-${userName})`
		})
		chartConfig[userName] = {
			label: sample.user_name,
			color: `var(--chart-${index % 5 + 1})`
		};
	});

    const includeLegend = (chartData.length < 10);

    return (
        <Card className="flex flex-col">
            <CardHeader className="grid grid-cols-[1fr_auto_1fr] border-b p-4">
                <CommitRoleSelector
                    role={role}
                    setRole={setRole}
                    className="col-1"
                />
                {repoLoading ?
                    <Loader/> :
                    <CardTitle className="col-2">{repo?.name} - Commits Distribution</CardTitle>
                }
                </CardHeader>
            <CardContent className="flex-1 pb-0 flex flex-col items-center">
                {dataLoading ?
                    <Loader/> :
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-square max-h-[300px] w-full pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                    >
                        <PieChart className="lg:flex flex-row">
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie
                                data={chartData}
                                dataKey="commits"
                                labelLine={false}
                                label={({ payload, ...props }) => {
                                    return (
                                        <text
                                            cx={props.cx}
                                            cy={props.cy}
                                            x={props.x}
                                            y={props.y}
                                            textAnchor={props.textAnchor}
                                            dominantBaseline={props.dominantBaseline}
                                            fill="var(--foreground)"
                                        >
                                            {payload.commits}
                                        </text>
                                    )
                                }}
                                nameKey="user"
                            />
                            {includeLegend && 
                                <ChartLegend
                                    content={<ChartLegendContent nameKey="user" />}
                                    className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                                />
                            }
                        </PieChart>
                    </ChartContainer>
                }
            </CardContent>
        </Card>
    )
}