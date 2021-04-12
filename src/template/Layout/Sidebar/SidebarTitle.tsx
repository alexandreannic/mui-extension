import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    fontWeight: t.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: t.palette.text.disabled,
    marginBottom: t.spacing(2),
  }
}))

export interface SidebarTitleProps {
  children: ReactNode
}

export const SidebarTitle = ({children}: SidebarTitleProps) => {
  const classes = useStyles()
  return (
    <Typography variant="caption" noWrap className={classes.root}>{children}</Typography>
  )
}
