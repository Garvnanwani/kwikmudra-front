import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
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
      <Routing />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root")
)
