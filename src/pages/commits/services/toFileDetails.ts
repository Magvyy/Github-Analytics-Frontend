import type { FileDetails, FileDetailsFlat } from "@/src/api/CommitAPI"


export const toFileDetails = (flat: FileDetailsFlat): FileDetails => {
    return {
        fileName: flat.file_name,
        changes: flat.changes,
        additions: flat.additions,
        deletions: flat.deletions,
        rating: flat.quality != null ? {
                quality: flat.quality!,
                complexity: flat.complexity!,
                readability: flat.readability!,
                feedback: flat.feedback!,
                model: flat.model!
        } : undefined,
        patch: flat.patch
    }
}