import * as React from 'react'
import {ReactNode} from 'react'
import {CircularProgress, Icon, IconButton} from '@material-ui/core'
import {IconButtonProps} from '@material-ui/core'


export interface IconBtnProps extends IconButtonProps {
  loading?: boolean
  icon?: string
  children: ReactNode
}

export const IconBtn = ({icon, loading, children, disabled, ...props}: IconBtnProps) => {
  return (
    <IconButton {...props} disabled={disabled || loading}>
      {loading
        ? <CircularProgress size={24}/>
        : <>{icon ? <Icon>{icon}</Icon> : children}</>
      }
    </IconButton>
  )
}
