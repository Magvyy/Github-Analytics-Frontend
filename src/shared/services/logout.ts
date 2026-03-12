import env from "@/env/env.json";

console.log(env.backend + "/auth/logout");

export const logout = async () => {
        await fetch(env.backend + "/auth/logout", {
                credentials: "include",
                method: "GET"
        });
        window.location.href = "/";
}