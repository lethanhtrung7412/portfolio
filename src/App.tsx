import { ModeToggle, ThemeProvider } from "@/components/theme"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle/>
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      
    </ThemeProvider>
    </>
  )
}

export default App
