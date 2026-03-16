import { Interval } from "@/src/api/AnalyticsAPI"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"


const items = [
    // { label: "Select an interval", value: null },
    { label: "Per day", value: Interval.DAY },
    { label: "Per week", value: Interval.WEEK },
    { label: "Per month", value: Interval.MONTH },
    { label: "Per year", value: Interval.YEAR }
]

interface IntervalSelectorProps {
    interval: Interval
    setInterval: React.Dispatch<React.SetStateAction<Interval>>
    className?: string
}
export function IntervalSelector({ interval, setInterval, className }: IntervalSelectorProps) {

    return (
        <Select defaultValue={interval} onValueChange={(newInterval: Interval) => setInterval(newInterval)}>
            <SelectTrigger className={cn(
                "w-[180px]",
                className
            )}>
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}