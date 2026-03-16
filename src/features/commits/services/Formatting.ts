import { Interval } from "@/src/api/AnalyticsAPI"

export const format = (interval: Interval, value: string) => {
    switch (interval) {
        case Interval.DAY:
            return toDate(value);
        case Interval.WEEK:
            return toWeek(value);
        case Interval.MONTH:
            return toMonth(value);
        case Interval.YEAR:
            return toYear(value);
    }
}

const toDate = (value: string) => {
    return new Date(value).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })
}

const toWeek = (value: string) => {
    return value.split(" ")[0] + " week " + value.split(" ")[1];   
}

const toMonth = (value: string) => {
    return value;
}

const toYear = (value: string) => {
    return value;
}