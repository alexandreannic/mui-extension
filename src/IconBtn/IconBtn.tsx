import * as React from 'react'
import {forwardRef, ReactNode} from 'react'
import {CircularProgress, Icon, IconButton, IconButtonProps} from '@material-ui/core'


export interface IconBtnProps extends IconButtonProps {
  loading?: boolean
  icon?: string
  children: ReactNode
  tooltip?: string
}

export const IconBtn = forwardRef(({icon, loading, children, disabled, ...props}: IconBtnProps, ref: any) => {
  return (
    <IconButton {...props} disabled={disabled || loading} ref={ref}>
      {loading
        ? <CircularProgress size={24}/>
        : <>{icon ? <Icon>{icon}</Icon> : children}</>
      }
    </IconButton>
  )
})
