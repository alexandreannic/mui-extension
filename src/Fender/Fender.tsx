import * as React from 'react'
import {ReactNode} from 'react'
import {CircularProgress, createStyles, Icon, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {colorError, colorSuccess, colorWarning} from '../core/style/color'
import {makeStyles} from '@material-ui/core'

type State = 'loading' | 'error' | 'empty' | 'success' | 'warning';

export interface FenderProps {
  children?: ReactNode,
  type?: State
  icon?: string
  iconSize?: number
  className?: string
  style?: object
  title?: ReactNode
  description?: ReactNode,
}

const useStyles = (iconSize: number) => makeStyles((t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: colorError
  },
  empty: {
    color: t.palette.text.disabled
  },
  warning: {
    color: colorWarning
  },
  success: {
    color: colorSuccess
  },
  iContainer: {
    height: iconSize + 10,
    marginTop: t.spacing(1),
    lineHeight: 1,
  },
  i: {
    fontSize: `${iconSize}px !important`,
  },
  p: {
    marginTop: t.spacing(1),
  },
  title: {
    fontSize: 24,
  },
  description: {},
}))

export const Fender = ({children, icon, iconSize = 100, type = 'empty', className, style, title, description}: FenderProps) => {

  const classes = useStyles(iconSize)()

  const getIcon = () => {
    if (icon) return renderIcon(icon)
    switch (type) {
      case 'empty':
        return renderIcon('do_not_disturb')
      case 'error':
        return renderIcon('error_outline')
      case 'success':
        return renderIcon('check_circle_outline')
      case 'warning':
        return renderIcon('warning')
      case 'loading':
        return <CircularProgress size={iconSize - 10}/>
    }
  }

  const renderIcon = (name: string) => <Icon className={classes.i}>{name}</Icon>

  return (
    <div className={classNames(classes.root, className)} style={style}>
      <div>
        <div className={classNames(classes.iContainer, classes[type])}>{getIcon()}</div>
        <div className={classes.p}>
          {title && <div className={classes.title}>{title}</div>}
          {description && <div className={classes.description}>{description}</div>}
          {children}
        </div>
      </div>
    </div>
  )
}
