
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { CommitRole, Interval, type UserCommitsPerInterval } from "@/src/api/AnalyticsAPI"
import { format } from "../services/Formatting"
import { IntervalSelector } from "./IntervalSelector"
import { CommitRoleSelector } from "../../repos/components/CommitRoleSelector"
import { useState } from "react"



const chartConfig: ChartConfig = {
  views: {
    label: "Commits",
  }
}
interface chartDataProps {
	interval: string
	commits: Number
}


interface UserCommitsPerIntervalBarChartProps {
    interval: Interval
    setInterval: React.Dispatch<React.SetStateAction<Interval>>
    data: UserCommitsPerInterval[]
}
export function UserCommitsPerIntervalBarChart({ interval, setInterval, data }: UserCommitsPerIntervalBarChartProps) {
    const [role, setRole] = useState<CommitRole>(CommitRole.AUTHOR);
    const dataKey = role + "_commits";

	const chartData: chartDataProps[] = [];
	data.forEach((sample: UserCommitsPerInterval) => {
        chartData.push({
            interval: sample["interval"],
            commits: sample[dataKey as keyof UserCommitsPerInterval] as Number
        });
	});
    let userName = data[0].user_name;
    chartConfig[userName] = {
        label: userName.replace("_", " "),
        color: `var(--chart-1)`
    };
    
    return (
        <Card className="py-0">
            <CardHeader className="grid grid-cols-[1fr_1fr_1fr_auto_1fr_1fr_1fr] border-b p-4">
                <CommitRoleSelector
                    role={role}
                    setRole={setRole}
                    className="col-1"
                />
                <IntervalSelector
                    interval={interval}
                    setInterval={setInterval}
                    className="col-2"
                />
                <CardTitle className="col-4">User Commits Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                        left: 12,
                        right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="interval"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                return format(interval, value);
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return format(interval, value);
                                    }}
                                />
                            }
                        />
                        <Bar dataKey={"commits"} fill={`var(--chart-1)`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
