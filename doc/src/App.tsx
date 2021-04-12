import * as React from 'react'
import {createStyles, Theme} from '@material-ui/core'
import PanelDemo from './examples/Panel/PanelDemo'
import BtnDemo from './examples/Btn/BtnDemo'
import AlertDemo from './examples/Alert/AlertDemo'
import IconsDemo from './examples/Icons/IconsDemo'
import ExpensionStepperDemo from './examples/ExpensionStepper/ExpensionStepperDemo'
import FenderDemo from './examples/Fender/FenderDemo'
import InputDateDemo from './examples/InputDate/InputDateDemo'
import ChipUploaderDemo from './examples/BtnUploader/BtnUploaderDemo'
import AutocompleteDemo from './examples/Autocomplete/AutocompleteDemo'
import ConfirmDemo from './examples/Confirm/ConfirmDemo'
import ToastDemo from './examples/Toast/ToastDemo'
import AnimateDemo from './examples/Animate/AnimateDemo'
import TableSortDemo from './examples/TableSort/TableSortDemo'
import {Route} from 'react-router-dom'
import GlobalProgressDemo from './examples/GlobalProgress/GlobalProgressDemo'
import {Home} from './pages/Home/Home'
import {Redirect, Switch} from 'react-router-dom'
import {Layout} from 'mui-extension'
import {makeStyles} from '@material-ui/core'
import {Install} from './pages/Install/Install'
import {TxtDemo} from './examples/Txt/TxtDemo'
import {Menu} from './core/component/Menu/Menu'

const useStyles = makeStyles((t: Theme) => createStyles({
  '@global': {
    body: {
      fontFamily: t.typography.fontFamily,
      background: t.palette.background.paper,
      margin: 0,
      color: t.palette.text.primary,
    },
    ul: {
      marginTop: '.5em'
    },
    h1: {...t.typography.h4, fontSize: 36},
    h2: {
      fontSize: 26,
      fontWeight: 400,
      marginBottom: t.spacing(2),
      marginTop: t.spacing(3),
    },
    h3: {
      fontWeight: 400,
    },
    p: {
      color: t.palette.text.secondary,
      ...t.typography.body1,
      textAlign: 'justify',
    },
    code: {
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    ':focus': {
      outline: 0,
    },
  },
  title: {
    whiteSpace: 'nowrap'
  }
}))

const App = () => {
  useStyles()
  return (
    <Layout sidebar={Menu} title="Mui-eXtension">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/install" component={Install}/>
        <Route path="/panel" component={PanelDemo}/>
        <Route path="/btn" component={BtnDemo}/>
        <Route path="/confirm" component={ConfirmDemo}/>
        <Route path="/btn-uploader" component={ChipUploaderDemo}/>
        <Route path="/alert" component={AlertDemo}/>
        <Route path="/icons" component={IconsDemo}/>
        <Route path="/stepper" component={ExpensionStepperDemo}/>
        <Route path="/fender" component={FenderDemo}/>
        <Route path="/toast" component={ToastDemo}/>
        <Route path="/global-progress" component={GlobalProgressDemo}/>
        <Route path="/input-date" component={InputDateDemo}/>
        <Route path="/autocomplete" component={AutocompleteDemo}/>
        <Route path="/table-sort" component={TableSortDemo}/>
        <Route path="/txt" component={TxtDemo}/>
        <Route path="/animate" component={AnimateDemo}/>
        <Redirect exact from="/" to="/home"/>
      </Switch>
    </Layout>
  )
}

export default App
