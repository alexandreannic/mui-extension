import * as React from 'react'
import classNames from 'classnames'
import {createStyles, makeStyles, Theme} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    color: t.palette.primary.main,
    textDecoration: 'underline',
  }
}))

export const A = ({children, className, ...props}: any) => {
  const css = useStyles()
  return (
    <a {...props} className={classNames(className, css.root)}>{children}</a>
  )
}
