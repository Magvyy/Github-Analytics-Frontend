import { CommitRole } from "@/src/api/AnalyticsAPI"

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
    { label: "Author", value: CommitRole.AUTHOR },
    { label: "Committer", value: CommitRole.COMMITTER }
]

interface CommitRoleSelectorProps {
    role: CommitRole
    setRole: React.Dispatch<React.SetStateAction<CommitRole>>
    className?: string
}
export function CommitRoleSelector({ role, setRole, className }: CommitRoleSelectorProps) {

    return (
        <Select value={role} onValueChange={(newRole: CommitRole | null) => {if (newRole != null) setRole(newRole)}}>
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