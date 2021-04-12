import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, LinearProgress, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import classNames from 'classnames'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: t.spacing(2),
    border: `1px solid ${t.palette.divider}`
  },
  loader: {
    marginBottom: -5,
  },
  hover: {
    cursor: 'pointer',
    transition: t.transitions.create('all'),
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: t.shadows[4],
    }
  }
}))

export interface PanelProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  loading?: boolean
  hoverable?: boolean
  children?: ReactNode
  className?: string
}

export const Panel = ({className, hoverable, loading, children, ...other}: PanelProps) => {
  const classes = useStyles()
  return (
    <div className={classNames(classes.root, hoverable && classes.hover, className)} {...other}>
      {loading && <LinearProgress className={classes.loader}/>}
      {children}
    </div>
  )
}
