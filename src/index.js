import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"
import { UserProvider } from "./context/UserContext"
import Routing from "./Routing"
import "./styles/index.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DF6B57",
    },
  },
})

ReactDOM.render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={2000} closeButton={false} />
      <Routing />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root")
)
