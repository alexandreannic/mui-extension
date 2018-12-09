import {createStyles, Icon, Theme, withStyles} from '@material-ui/core'
import * as React from 'react'
import {useSidebarContext} from '../LayoutContext'
import classNames from 'classnames'
import IconBtn from '../../../../../lib/IconBtn/IconBtn'
import {useIsMobileWidth} from '../../../useIsMobileWidth'

export const heightHeight = 42

const styles = (t: Theme) => createStyles({
  root: {
    height: heightHeight,
    display: 'flex',
    alignItems: 'center',
    paddingRight: t.spacing.unit * 2,
    paddingLeft: t.spacing.unit + 2,
    paddingTop: t.spacing.unit,
    paddingBottom: t.spacing.unit,
    background: t.palette.background.paper,
  },
  hidden: {
    visibility: 'hidden',
  },
  title: {
    flex: 1,
    fontSize: t.typography.title.fontSize,
  }
})

export const Header = withStyles(styles)(({classes, className}: any) => {
  const {isMobileSidebarOpened, toggleMobileSidebar} = useSidebarContext()
  const isMobileWidth = useIsMobileWidth()

  return (
    <header className={classNames(classes.root, className)}>
      <IconBtn onClick={toggleMobileSidebar} className={!isMobileWidth && classes.hidden}>
        <Icon>{isMobileSidebarOpened ? 'clear' : 'menu'}</Icon>
      </IconBtn>
      <div className={classes.title}>
        Mui-extension
      </div>
    </header>
  )
})
