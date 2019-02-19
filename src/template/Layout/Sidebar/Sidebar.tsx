import * as React from 'react'
import {ReactNode} from 'react'
import {SwipeableDrawer, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {sidebarWith} from '../Layout'
import {Header} from '../Header/Header'
import {useLayoutContext} from '../LayoutContext'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    width: sidebarWith,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
  },
}))

interface IProps {
  className?: string
  children?: ReactNode
}

export const Sidebar = ({children, className}: IProps) => {
  // @ts-ignore
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