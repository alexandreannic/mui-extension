import * as React from 'react'
import {Button, CircularProgress, createStyles, fade, Icon, makeStyles, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {ButtonProps} from '@material-ui/core/Button'
import {colorError} from '../core/style/color'

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
  },
  error_text: {
    color: colorError,
  },
  error_outlined: {
    color: colorError,
    borderColor: fade(colorError, .4),
  },
  error_contained: {
    background: colorError,
    color: 'white',
  },
}))

export interface BtnProps extends Omit<ButtonProps, 'color'> {
  loading?: boolean
  icon?: string
  iconAfter?: string
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'error'
}

export const Btn = ({loading, children, disabled, icon, iconAfter, color, ...props}: BtnProps) => {
  const classes = useStyles({})
  return (
    <Button
      {...props}
      color={color === 'error' ? 'default' : color}
      className={classNames(color === 'error' && (classes['error_' + props.variant]))}
      disabled={disabled || loading}
    >
      <div className={classNames(classes.label, loading && classes.labelHidden)}>
        {icon && <Icon className={classes.icon}>{icon}</Icon>}
        {children}
        {iconAfter && <Icon className={classNames(classes.icon, classes.iconAfter)}>{iconAfter}</Icon>}
      </div>
      {loading && <CircularProgress size={24} className={classes.progress}/>}
    </Button>
  )
}
