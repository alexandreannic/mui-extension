import * as React from 'react'
import {Page as MxPage} from 'mui-extension'
import {createStyles, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    paddingLeft: t.spacing(1),
    paddingRight: t.spacing(1),
    minWidth: 0,
    marginBottom: t.spacing(2),
    maxWidth: 800,
  }
}))

export const Page = ({className, children, style}: any) => {
  const classes = useStyles()
  return (
    <MxPage className={classNames(className, classes.root)} style={style}>{children}</MxPage>
  )
}
