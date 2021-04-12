import {createStyles, Icon, Theme} from '@material-ui/core'
import * as React from 'react'
import {useLayoutContext} from '../LayoutContext'
import classNames from 'classnames'
import {IconBtn} from '../../../IconBtn/IconBtn'
import {makeStyles} from '@material-ui/core'

export const headerHeight = 52

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    paddingRight: t.spacing(2),
    paddingLeft: t.spacing(1) + 2,
    background: t.palette.background.paper,
  },
  hidden: {
    visibility: 'hidden' as any,
  },
  title: {
    flex: 1,
    fontSize: t.typography.h6.fontSize,
  }
}))

export const Header = ({className}: any) => {
  const classes = useStyles()
  const {title, isMobileWidth, isMobileSidebarOpened, toggleMobileSidebar} = useLayoutContext()
  return (
    <header className={classNames(classes.root, className)}>
      <IconBtn onClick={toggleMobileSidebar} className={isMobileWidth ? '' : classes.hidden}>
        <Icon>{isMobileSidebarOpened ? 'clear' : 'menu'}</Icon>
      </IconBtn>
      <div className={classes.title}>{title}</div>
    </header>
  )
}
