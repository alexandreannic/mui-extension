import * as React from 'react'
import {ReactNode} from 'react'
import {CircularProgress, Icon, IconButton, IconButtonProps, Tooltip} from '@material-ui/core'


export interface IconBtnProps extends IconButtonProps {
  loading?: boolean
  icon?: string
  children: ReactNode
  tooltip?: string
}

export const IconBtn = ({icon, loading, children, disabled, tooltip, ...props}: IconBtnProps) => {
  const btn = (
    <IconButton {...props} disabled={disabled || loading}>
      {loading
        ? <CircularProgress size={24}/>
        : <>{icon ? <Icon>{icon}</Icon> : children}</>
      }
    </IconButton>
  )
  if (tooltip) {
    return <Tooltip title={tooltip}>{btn}</Tooltip>
  } else {
    return btn
  }
}
