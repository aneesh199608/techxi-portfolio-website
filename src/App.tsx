import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from "./components/sections/Navbar"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <NavigationMenuDemo />
    </div>
  )
}

export default App