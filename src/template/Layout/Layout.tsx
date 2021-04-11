import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme} from '@material-ui/core'
import {MobileHeader} from './MobileHeader/MobileHeader'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core'
import {LayoutProvider, useLayoutContext} from './LayoutContext'

export const sidebarWith = 220

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  rootDesktop: {
    marginLeft: sidebarWith,
  },
}))

export interface LayoutProps {
  title?: string
  children?: ReactNode
  mobileBreakpoint?: number
  sidebar?: ReactNode
}

export const Layout = ({title, mobileBreakpoint, children, sidebar}: LayoutProps) => {
  return (
    <LayoutProvider title={title} mobileBreakpoint={mobileBreakpoint}>
      <LayoutUsingContext sidebar={sidebar}>
        {children}
      </LayoutUsingContext>
    </LayoutProvider>
  )
}

const LayoutUsingContext = ({children, sidebar: Sidebar}: any) => {
  const classes = useStyles()
  const {isMobileWidth} = useLayoutContext()
  return (
    <>
      <MobileHeader/>
      <div className={classNames(classes.root, !isMobileWidth && classes.rootDesktop)}>
        {Sidebar && <Sidebar/>}
        {children}
      </div>
    </>
  )
}
