
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
import { Interval, type UserCommitsPerInterval } from "@/src/api/AnalyticsAPI"
import { format } from "../services/Formatting"
import { IntervalSelector } from "./IntervalSelector"



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
	const chartData: chartDataProps[] = [];
	data.forEach((sample) => {
        chartData.push({
            interval: sample["interval"],
            commits: sample.commits
        });
	});
    let userName = data[0].user_name;
    chartConfig[userName] = {
        label: userName.replace("_", " "),
        color: `var(--chart-1)`
    };

    return (
        <Card className="py-0">
            <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
                <div className="grid grid-cols-[1fr_auto_1fr] w-full gap-1 px-4 py-4">
                    <IntervalSelector
                        interval={interval}
                        setInterval={setInterval}
                        className="col-1"
                    />
                    <CardTitle className="col-2">User Commits Activity</CardTitle>
                </div>
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
                        <Bar dataKey="commits" fill={`var(--chart-3)`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
