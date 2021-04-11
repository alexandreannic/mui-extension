import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {muiTheme} from './core/theme/mui-theme'
import reportWebVitals from './reportWebVitals'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const Root = () => {
  const isDarkTheme = useTheme()
  const theme = createMuiTheme(muiTheme(isDarkTheme))
  /*
  Trigger an error when opening Autocomplete panel.
  It will be fixed at Material-UI 5
  https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode

  <React.StrictMode>
  */
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <ThemeContextProvider>
    <HashRouter basename="">
      <Root/>
    </HashRouter>
  </ThemeContextProvider>,
  document.getElementById('app-root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
