import { useEffect, useState } from "react"

import { UserCommitsPerIntervalBarChart } from "@/src/features/commits";
import { Interval, type UserCommitsPerInterval} from "@/src/api/AnalyticsAPI";
import { apiCall } from "@/src/shared/services/apiCall";
import Loader from "@/src/shared/components/Loader";


export default function CommitsPerIntervalPage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<UserCommitsPerInterval[]>([]);
    const [interval, setInterval] = useState<Interval>(Interval.DAY);

    useEffect(() => {
        apiCall(`/commits/by-interval/${interval}`, setData, setIsLoading);
    }, [interval]);

    return (
        isLoading ?
            <Loader/> :
            <UserCommitsPerIntervalBarChart
                interval={interval}
                setInterval={setInterval}
                data={data}
            />
    )
}