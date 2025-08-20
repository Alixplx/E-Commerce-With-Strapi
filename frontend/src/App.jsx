import { ThemeProvider } from "@emotion/react"
import Header1 from "./Components/header/Header1"
import Header2 from "./Components/header/Header2"
import Header3 from "./Components/header/Header3"
import { ColorModeContext, useMode } from "./theme"
import { Box, CssBaseline } from "@mui/material"
import Hero from "./Components/hero/Hero"
import Icons from "./Components/hero/Icons"
import Main from "./Components/main/Main"
import Footer from "./Components/footer/Footer"
import Scroll from "./Components/scroll/Scroll"


function App() {

  const [theme, colorMode] = useMode()

  return (
    
    <>
      
      <ColorModeContext.Provider value={colorMode}>
      
        <ThemeProvider theme={theme}>

          <CssBaseline />

          <Header1 />
          <Header2 />
          <Header3 />

          <Box bgcolor={theme.palette.bg.main}>

            <Hero />
            <Icons />
            <Main />
            <Footer />
          </Box>

          <Scroll />
        </ThemeProvider>
      
      </ColorModeContext.Provider>


    </>
  )
}

export default App