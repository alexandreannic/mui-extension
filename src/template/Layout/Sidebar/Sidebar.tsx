import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, makeStyles, SwipeableDrawer, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {sidebarWith} from '../Layout'
import {Header} from '../Header/Header'
import {useLayoutContext} from '../LayoutContext'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    width: sidebarWith,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
  },
}))

export interface SidebarProps {
  className?: string
  children?: ReactNode
}

export const Sidebar = ({children, className}: SidebarProps) => {
  const classes = useStyles()
  const {isMobileWidth, isMobileSidebarOpened, openMobileSidebar, closeMobileSidebar} = useLayoutContext()
  const opened = !isMobileWidth || isMobileSidebarOpened

  return (
    <SwipeableDrawer
      open={opened}
      onOpen={openMobileSidebar}
      onClose={closeMobileSidebar}
      variant={isMobileWidth ? 'temporary' : 'permanent'}>
      <>
        <div className={classNames(classes.root, className)}>
          <Header/>
          {children}
        </div>
      </>
    </SwipeableDrawer>
  )
}
