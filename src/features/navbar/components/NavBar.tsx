import { logout } from "../services/logout"
import env from "@/env/env.json"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"

export function NavBar() {
    

    return (
        <NavigationMenu className="min-w-full flex-0 p-2" id="navbar">
            <NavigationMenuList className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <NavigationMenuLink
                        onClick={() => window.location.href = "/"}
                    >Home
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        onClick={() => window.location.href = "/repos"}
                    >Repos
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        onClick={() => window.location.href = "/commits"}
                    >Commits
                    </NavigationMenuLink>
                </div>
                <div className="flex flex-row gap-2">
                    <NavigationMenuLink
                        onClick={() => window.location.href = env.backend + "/oauth2/authorization/github"}
                    >Login
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        onClick={() => logout()}
                    >Logout
                    </NavigationMenuLink>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}