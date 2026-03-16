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
import type { RepoCommitsPerUser } from "@/src/api/AnalyticsAPI"

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
    repo?: RepoResponse
    aggregates: RepoCommitsPerUser[]
}
export default function RepoCommitsPieChart({ repo, aggregates }: RepoCommitsPieChartProps) {
	const chartData: chartDataProps[] = [];
	aggregates.forEach((aggregate, index) => {
        let userName = aggregate.user_name;
		chartData.push({
			user: userName,
			commits: aggregate.commits,
			fill: `var(--color-${userName})`
		})
		chartConfig[userName] = {
			label: userName.replace("_", " "),
			color: `var(--chart-${index % 5 + 1})`
		};
	});

    const includeLegend = (chartData.length < 6);

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{repo?.name} - Commits Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
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
                                    fill="hsla(var(--foreground))"
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
            </CardContent>
            {/* <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    )
}