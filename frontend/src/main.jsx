// import { StrictMode } from 'react'
import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDom from "react-dom/client"
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// import { BrowserRouter } from 'react-router-dom'

// const theme = extendTheme({}) // creates a default theme to avoid crashes

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <ChakraProvider theme={theme}>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   </StrictMode>
// )
