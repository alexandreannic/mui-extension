import * as React from 'react'
import {Button, CircularProgress, Icon, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {ButtonProps} from '@material-ui/core/Button'
import {createStyles, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: '16px !important',
    lineHeight: '16px !important',
    fontSize: '22px !important',
    marginRight: t.spacing(1)
  },
  iconAfter: {
    marginRight: 0,
    marginLeft: t.spacing(1),
  },
  labelHidden: {
    visibility: 'hidden',
  }
}))

export interface BtnProps extends ButtonProps {
  loading?: boolean
  icon?: string
  iconAfter?: string
}

export const Btn = ({loading, children, disabled, icon, iconAfter, ...props}: BtnProps) => {
  const classes = useStyles({})
  return (
    <Button {...props} disabled={disabled || loading}>
      <div className={classNames(classes.label, loading && classes.labelHidden)}>
        {icon && <Icon className={classes.icon}>{icon}</Icon>}
        {children}
        {iconAfter && <Icon className={classNames(classes.icon, classes.iconAfter)}>{iconAfter}</Icon>}
      </div>
      {loading && <CircularProgress size={24} className={classes.progress}/>}
    </Button>
  )
}
