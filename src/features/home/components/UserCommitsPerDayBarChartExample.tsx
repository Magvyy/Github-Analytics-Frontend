import { Interval, type UserCommitsPerInterval } from "@/src/api/AnalyticsAPI"
import { UserCommitsPerIntervalBarChart } from "../../commits"
import { useState } from "react";

export const description = "An interactive bar chart"

const data: Record<string, UserCommitsPerInterval[]> = {
  "day": [
    {interval: '2024-04-01', label: 'date', user_name: 'User', author_commits: 405, committer_commits: 60},
    {interval: '2024-04-02', label: 'date', user_name: 'User', author_commits: 399, committer_commits: 230},
    {interval: '2024-04-03', label: 'date', user_name: 'User', author_commits: 245, committer_commits: 395},
    {interval: '2024-04-04', label: 'date', user_name: 'User', author_commits: 339, committer_commits: 247},
    {interval: '2024-04-05', label: 'date', user_name: 'User', author_commits: 499, committer_commits: 160},
    {interval: '2024-04-06', label: 'date', user_name: 'User', author_commits: 368, committer_commits: 89},
    {interval: '2024-04-07', label: 'date', user_name: 'User', author_commits: 200, committer_commits: 92},
    {interval: '2024-04-08', label: 'date', user_name: 'User', author_commits: 166, committer_commits: 147},
    {interval: '2024-04-09', label: 'date', user_name: 'User', author_commits: 197, committer_commits: 480},
    {interval: '2024-04-10', label: 'date', user_name: 'User', author_commits: 294, committer_commits: 408},
    {interval: '2024-04-11', label: 'date', user_name: 'User', author_commits: 252, committer_commits: 92},
    {interval: '2024-04-12', label: 'date', user_name: 'User', author_commits: 60, committer_commits: 250},
    {interval: '2024-04-13', label: 'date', user_name: 'User', author_commits: 301, committer_commits: 318},
    {interval: '2024-04-14', label: 'date', user_name: 'User', author_commits: 436, committer_commits: 187},
    {interval: '2024-04-15', label: 'date', user_name: 'User', author_commits: 174, committer_commits: 397},
    {interval: '2024-04-16', label: 'date', user_name: 'User', author_commits: 62, committer_commits: 138},
    {interval: '2024-04-17', label: 'date', user_name: 'User', author_commits: 92, committer_commits: 75},
    {interval: '2024-04-18', label: 'date', user_name: 'User', author_commits: 232, committer_commits: 411},
    {interval: '2024-04-19', label: 'date', user_name: 'User', author_commits: 485, committer_commits: 249},
    {interval: '2024-04-20', label: 'date', user_name: 'User', author_commits: 254, committer_commits: 278},
    {interval: '2024-04-21', label: 'date', user_name: 'User', author_commits: 343, committer_commits: 472},
    {interval: '2024-04-22', label: 'date', user_name: 'User', author_commits: 179, committer_commits: 386},
    {interval: '2024-04-23', label: 'date', user_name: 'User', author_commits: 66, committer_commits: 372},
    {interval: '2024-04-24', label: 'date', user_name: 'User', author_commits: 446, committer_commits: 384},
    {interval: '2024-04-25', label: 'date', user_name: 'User', author_commits: 468, committer_commits: 159},
    {interval: '2024-04-26', label: 'date', user_name: 'User', author_commits: 186, committer_commits: 88},
    {interval: '2024-04-27', label: 'date', user_name: 'User', author_commits: 179, committer_commits: 87},
    {interval: '2024-04-28', label: 'date', user_name: 'User', author_commits: 322, committer_commits: 59},
    {interval: '2024-04-29', label: 'date', user_name: 'User', author_commits: 140, committer_commits: 167},
    {interval: '2024-04-30', label: 'date', user_name: 'User', author_commits: 90, committer_commits: 219},
    {interval: '2024-05-01', label: 'date', user_name: 'User', author_commits: 403, committer_commits: 66},
    {interval: '2024-05-02', label: 'date', user_name: 'User', author_commits: 351, committer_commits: 141},
    {interval: '2024-05-03', label: 'date', user_name: 'User', author_commits: 415, committer_commits: 162},
    {interval: '2024-05-04', label: 'date', user_name: 'User', author_commits: 120, committer_commits: 433},
    {interval: '2024-05-05', label: 'date', user_name: 'User', author_commits: 274, committer_commits: 301},
    {interval: '2024-05-06', label: 'date', user_name: 'User', author_commits: 334, committer_commits: 57},
    {interval: '2024-05-07', label: 'date', user_name: 'User', author_commits: 261, committer_commits: 250},
    {interval: '2024-05-08', label: 'date', user_name: 'User', author_commits: 423, committer_commits: 175},
    {interval: '2024-05-09', label: 'date', user_name: 'User', author_commits: 211, committer_commits: 221},
    {interval: '2024-05-10', label: 'date', user_name: 'User', author_commits: 286, committer_commits: 431},
    {interval: '2024-05-11', label: 'date', user_name: 'User', author_commits: 83, committer_commits: 261},
    {interval: '2024-05-12', label: 'date', user_name: 'User', author_commits: 232, committer_commits: 273},
    {interval: '2024-05-13', label: 'date', user_name: 'User', author_commits: 259, committer_commits: 334},
    {interval: '2024-05-14', label: 'date', user_name: 'User', author_commits: 433, committer_commits: 418},
    {interval: '2024-05-15', label: 'date', user_name: 'User', author_commits: 285, committer_commits: 182},
    {interval: '2024-05-16', label: 'date', user_name: 'User', author_commits: 94, committer_commits: 492},
    {interval: '2024-05-17', label: 'date', user_name: 'User', author_commits: 81, committer_commits: 68},
    {interval: '2024-05-18', label: 'date', user_name: 'User', author_commits: 148, committer_commits: 296},
    {interval: '2024-05-19', label: 'date', user_name: 'User', author_commits: 289, committer_commits: 86},
    {interval: '2024-05-20', label: 'date', user_name: 'User', author_commits: 129, committer_commits: 382},
    {interval: '2024-05-21', label: 'date', user_name: 'User', author_commits: 247, committer_commits: 414},
    {interval: '2024-05-22', label: 'date', user_name: 'User', author_commits: 323, committer_commits: 243},
    {interval: '2024-05-23', label: 'date', user_name: 'User', author_commits: 294, committer_commits: 227},
    {interval: '2024-05-24', label: 'date', user_name: 'User', author_commits: 193, committer_commits: 436},
    {interval: '2024-05-25', label: 'date', user_name: 'User', author_commits: 304, committer_commits: 263},
    {interval: '2024-05-26', label: 'date', user_name: 'User', author_commits: 267, committer_commits: 126},
    {interval: '2024-05-27', label: 'date', user_name: 'User', author_commits: 304, committer_commits: 457},
    {interval: '2024-05-28', label: 'date', user_name: 'User', author_commits: 468, committer_commits: 249},
    {interval: '2024-05-29', label: 'date', user_name: 'User', author_commits: 437, committer_commits: 331},
    {interval: '2024-05-30', label: 'date', user_name: 'User', author_commits: 258, committer_commits: 153},
    {interval: '2024-05-31', label: 'date', user_name: 'User', author_commits: 95, committer_commits: 326},
    {interval: '2024-06-01', label: 'date', user_name: 'User', author_commits: 291, committer_commits: 120},
    {interval: '2024-06-02', label: 'date', user_name: 'User', author_commits: 468, committer_commits: 408},
    {interval: '2024-06-03', label: 'date', user_name: 'User', author_commits: 316, committer_commits: 53},
    {interval: '2024-06-04', label: 'date', user_name: 'User', author_commits: 281, committer_commits: 412},
    {interval: '2024-06-05', label: 'date', user_name: 'User', author_commits: 206, committer_commits: 178},
    {interval: '2024-06-06', label: 'date', user_name: 'User', author_commits: 488, committer_commits: 432},
    {interval: '2024-06-07', label: 'date', user_name: 'User', author_commits: 358, committer_commits: 247},
    {interval: '2024-06-08', label: 'date', user_name: 'User', author_commits: 407, committer_commits: 261},
    {interval: '2024-06-09', label: 'date', user_name: 'User', author_commits: 119, committer_commits: 84},
    {interval: '2024-06-10', label: 'date', user_name: 'User', author_commits: 59, committer_commits: 190},
    {interval: '2024-06-11', label: 'date', user_name: 'User', author_commits: 119, committer_commits: 261},
    {interval: '2024-06-12', label: 'date', user_name: 'User', author_commits: 470, committer_commits: 195},
    {interval: '2024-06-13', label: 'date', user_name: 'User', author_commits: 419, committer_commits: 331},
    {interval: '2024-06-14', label: 'date', user_name: 'User', author_commits: 173, committer_commits: 217},
    {interval: '2024-06-15', label: 'date', user_name: 'User', author_commits: 249, committer_commits: 180},
    {interval: '2024-06-16', label: 'date', user_name: 'User', author_commits: 166, committer_commits: 200},
    {interval: '2024-06-17', label: 'date', user_name: 'User', author_commits: 190, committer_commits: 275},
    {interval: '2024-06-18', label: 'date', user_name: 'User', author_commits: 430, committer_commits: 237},
    {interval: '2024-06-19', label: 'date', user_name: 'User', author_commits: 323, committer_commits: 497},
    {interval: '2024-06-20', label: 'date', user_name: 'User', author_commits: 487, committer_commits: 364},
    {interval: '2024-06-21', label: 'date', user_name: 'User', author_commits: 387, committer_commits: 178},
    {interval: '2024-06-22', label: 'date', user_name: 'User', author_commits: 297, committer_commits: 397},
    {interval: '2024-06-23', label: 'date', user_name: 'User', author_commits: 104, committer_commits: 417},
    {interval: '2024-06-24', label: 'date', user_name: 'User', author_commits: 320, committer_commits: 152},
    {interval: '2024-06-25', label: 'date', user_name: 'User', author_commits: 261, committer_commits: 364},
    {interval: '2024-06-26', label: 'date', user_name: 'User', author_commits: 80, committer_commits: 291},
    {interval: '2024-06-27', label: 'date', user_name: 'User', author_commits: 214, committer_commits: 470},
    {interval: '2024-06-28', label: 'date', user_name: 'User', author_commits: 200, committer_commits: 479},
    {interval: '2024-06-29', label: 'date', user_name: 'User', author_commits: 437, committer_commits: 327},
    {interval: '2024-06-30', label: 'date', user_name: 'User', author_commits: 332, committer_commits: 466}
  ],
  "week": [
    {interval: '2024 14', label: 'week', user_name: 'User', author_commits: 2621, committer_commits: 1420},
    {interval: '2024 15', label: 'week', user_name: 'User', author_commits: 1714, committer_commits: 2132},
    {interval: '2024 16', label: 'week', user_name: 'User', author_commits: 1647, committer_commits: 2009},
    {interval: '2024 17', label: 'week', user_name: 'User', author_commits: 1807, committer_commits: 1316},
    {interval: '2024 18', label: 'week', user_name: 'User', author_commits: 1987, committer_commits: 1379},
    {interval: '2024 19', label: 'week', user_name: 'User', author_commits: 1755, committer_commits: 1945},
    {interval: '2024 20', label: 'week', user_name: 'User', author_commits: 1459, committer_commits: 1924},
    {interval: '2024 21', label: 'week', user_name: 'User', author_commits: 1932, committer_commits: 2166},
    {interval: '2024 22', label: 'week', user_name: 'User', author_commits: 2333, committer_commits: 1640},
    {interval: '2024 23', label: 'week', user_name: 'User', author_commits: 1918, committer_commits: 1804},
    {interval: '2024 24', label: 'week', user_name: 'User', author_commits: 1786, committer_commits: 1659},
    {interval: '2024 25', label: 'week', user_name: 'User', author_commits: 2348, committer_commits: 2242},
  ],
  "month": [
    {interval: '2024 may', label: 'month', user_name: 'User', author_commits: 8282, committer_commits: 7162},
    {interval: '2024 june', label: 'month', user_name: 'User', author_commits: 8189, committer_commits: 8308},
    {interval: '2024 june', label: 'month', user_name: 'User', author_commits: 8360, committer_commits: 8563}
  ],
  "year": [
    {interval: '2024', label: 'year', user_name: 'User', author_commits: 24831, committer_commits: 24033}
  ]
}

export function UserCommitsPerDayBarChartExample() {
    const [interval, setInterval] = useState<Interval>(Interval.DAY);

    return (
      <UserCommitsPerIntervalBarChart
        data={data[interval as string]}
        interval={interval}
        setInterval={setInterval}
      />
    )
}
