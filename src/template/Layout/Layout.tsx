import * as React from 'react'
import {ReactChild, ReactNode} from 'react'
import {Theme} from '@material-ui/core'
import {MobileHeader} from './MobileHeader/MobileHeader'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

export const sidebarWith = 220

const useStyles = makeStyles((t: Theme) => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  rootDesktop: {
    marginLeft: sidebarWith,
  },
}))

interface IProps {
  title?: string
  children?: ReactChild
  mobileBreakpoint?: number
  sidebar?: ReactNode
}

export const Layout = ({title, mobileBreakpoint, children, sidebar}: IProps) => {
  return (
    <div>
      <LayoutUsingContext sidebar={sidebar}>
        {children}
      </LayoutUsingContext>
    </div>
  )
}

const LayoutUsingContext = ({children, sidebar: Sidebar}: any) => {
  // @ts-ignore
  const classes = useStyles()
  const isMobileWidth = false
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