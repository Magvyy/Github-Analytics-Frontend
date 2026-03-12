

export function formatTime(datetime: string) {
    let date = datetime.split("T")[0];
    let time = datetime.split("T")[1];

    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];

    let hour = time.split(":")[0];
    let minute = time.split(":")[1];
    let second = time.split(":")[2];

    return `${hour}:${minute}:${second} ${day}.${month}.${year}`
}