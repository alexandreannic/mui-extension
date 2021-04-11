import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {createStyles, Theme} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core'
import classNames from 'classnames'
// @ts-ignore
import Logo from '../../asset/logo.png'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    height: '100vh',
    marginTop: '-52px !important', // TODO Hack to fix 100vh when mobile header appear
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: `0 ${t.spacing(2)}px !important`,
    flexDirection: 'column',
  },
  logo: {
    height: 150,
  },
  logoLight: {
    filter: 'invert(1)',
  }
}))

export const Home = () => {
  const classes = useStyles()
  const theme = useTheme() as Theme
  return (
    <Page className={classes.root}>
      <div>
        <img src={Logo} className={classNames(classes.logo, theme.palette.type === 'dark' && classes.logoLight)}/>
        <PageTitle>Mui-eXtension</PageTitle>
        Set of UI components based on Material-UI.
      </div>
    </Page>
  )
}
