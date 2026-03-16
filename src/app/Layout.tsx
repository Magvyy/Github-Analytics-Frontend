import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/src/features/navbar"


interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {

    return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main className="h-[100vh] w-[100vw] flex flex-col p-2">
                <NavBar/>
                {children}
            </main>
        </ThemeProvider>
    )
}
