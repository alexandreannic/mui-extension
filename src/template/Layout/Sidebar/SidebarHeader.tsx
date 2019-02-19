import * as React from 'react'
import {ReactNode} from 'react'
import {Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    paddingTop: t.spacing.unit / 2,
    paddingBottom: t.spacing.unit / 2,
    borderTop: '1px solid ' + t.palette.divider,
    borderBottom: '1px solid ' + t.palette.divider,
  },
}))

interface IProps {
  className?: string
  children?: ReactNode
}

export const SidebarHeader = ({className, children}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <header className={classNames(classes.root, className)}>
      {children}
    </header>
  )
}