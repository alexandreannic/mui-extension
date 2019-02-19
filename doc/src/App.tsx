import * as React from 'react'
import {Theme} from '@material-ui/core'
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
import {Redirect, Switch, withRouter} from 'react-router'
import {Menu} from './core/component/Menu/Menu'
import {Layout} from '../../src/template/Layout/index'
import {css} from './core/theme/style'
import {makeStyles} from '@material-ui/styles'
import {Install} from './pages/Install/Install'

const useStyles = makeStyles((t: Theme) => ({
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
    h1: t.typography.h4,
    h2: {
      ...t.typography.h6,
      marginBottom: t.spacing.unit * 2,
      marginTop: t.spacing.unit * 3,
    },
    p: {
      ...t.typography.body1,
      textAlign: 'justify',
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
  // @ts-ignore
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
        <Route path="/animate" component={AnimateDemo}/>
        <Redirect exact from="/" to="/home"/>
      </Switch>
    </Layout>
  )
}

export default App