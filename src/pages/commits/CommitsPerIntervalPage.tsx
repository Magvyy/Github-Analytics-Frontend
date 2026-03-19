import { useEffect, useState } from "react"

import env from "@/env/env.json";
import { UserCommitsPerIntervalBarChart } from "@/src/features/commits";
import { Interval, type UserCommitsPerInterval} from "@/src/api/AnalyticsAPI";


export default function CommitsPerIntervalPage() {
    const [data, setData] = useState<UserCommitsPerInterval[]>([]);
    const [interval, setInterval] = useState<Interval>(Interval.DAY);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(env.backend + `/commits/${interval}`, {
                credentials: "include",
                method: "GET"
            });
            setData(await response.json());
        }
        fetchData();
    }, [interval]);

    if (data.length <= 0) return;

    return (
        <div>
            <UserCommitsPerIntervalBarChart
                interval={interval}
                setInterval={setInterval}
                data={data}
            />
        </div>
    )
}