import env from "@/env/env.json";

export const logout = async () => {
        await fetch(env.backend + "/auth/logout", {
                credentials: "include",
                method: "GET"
        });
        window.location.href = "/";
}