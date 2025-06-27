import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from "./components/sections/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
        <NavigationMenuDemo />
      </div>
    </ThemeProvider>
    
  )
}

export default App