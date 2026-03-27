


export enum Change {
    ADDED = "added",
    DELETED = "deleted",
    UNCHANGED = "unchanged"
}

export const FormatPatch = (patch: string) => {
    const header = patch.split("\n")[0].replace("-", "").replace("+", "");
    const after = header.split(" ")[2];
    const start: number = parseInt(after.split(",")[0]);

    console.log(patch)

    return patch.replaceAll(/@@.*@@/g, '').split("\n")
        .filter((line: string, index) => index !== 0)
        .map((line: string, index: number) => {
            return [`${start + index} `.padEnd(5) + line.replace(/[+-]/, ''), (line.charAt(0) === '+') ? Change.ADDED : line.charAt(0) === '-' ? Change.DELETED : Change.UNCHANGED];
        });
}