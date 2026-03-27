import env from "@/env/env.json";

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const apiCall = async <T> (endpoint: string, setData?: React.Dispatch<React.SetStateAction<T>>, setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> => {
    try {
        const response = await fetch(env.backend + endpoint, {
            credentials: "include",
            method: "GET"
        });
        await sleep(1000);
        const statusCategory = response.status.toString().charAt(0);
        if (response.status === 401) {
            window.location.href = env.backend + "/oauth2/authorization/github"
            return;
        }
        switch (statusCategory) {
            case '2':
                console.log(response.statusText);
                if (setData) {
                    setData(await response.json())
                    setIsLoading!(false);
                };
                return;
            case '4':
                console.log(response.statusText);
                return;
            case '5':
                console.log(response.statusText);
                return;
        }
        return;
    } catch (e) {
        console.log(e);
    }
}