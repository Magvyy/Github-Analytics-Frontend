import env from "@/env/env.json";
import { apiCall } from "@/src/shared/services/apiCall";

export const logout = async () => {
        await apiCall("/auth/logout");
        window.location.href = "/";
}