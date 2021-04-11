import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Divider, Icon, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: t.mixins.gutters({
    display: 'flex',
    alignItems: 'center',
    color: t.palette.text.secondary,
    background: t.palette.type === 'light' ? t.palette.grey[100] : t.palette.grey[900],
    paddingRight: t.spacing(1) + 'px !important',
    order: -1, // To be positioned before loader,
    height: 48,
  }) as any,
  icon: {
    marginRight: t.spacing(2),
  },
  content: {
    flex: 1,
  },
}))

export interface PanelHeadProps {
  icon?: string;
  children?: ReactNode;
  action?: any;
  className?: string;
}

export const PanelHead = ({className, icon, children, action}: PanelHeadProps) => {
  const classes = useStyles()
  return (
    <>
      <div className={`${classes.root} ${className || ''}`}>
        {icon &&
        <Icon className={classes.icon}>{icon}</Icon>
        }
        <div className={classes.content}>{children}</div>
        <div>
          {action}
        </div>
      </div>
      <Divider/>
    </>
  )
}
