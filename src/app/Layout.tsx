import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/src/features/navbar"


interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {

    return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main className="min-h-[100vh] w-[100vw] max-w-full flex flex-col p-4">
                <NavBar/>
                <div className="w-full mt-[70px] flex-1 flex flex-col gap-10">
                    {children}
                </div>
            </main>
        </ThemeProvider>
    )
}
