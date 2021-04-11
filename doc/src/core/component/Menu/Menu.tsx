import * as React from 'react'
import {HTMLProps, ReactNode} from 'react'
import {createStyles, Icon, makeStyles, Switch, Theme} from '@material-ui/core'
import {useTheme, useToggleTheme} from '../../theme/ThemeContext'
import {DownloadIcon, GitHubIcon, Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarItem} from 'mui-extension'
import packageJson from '../../../../package.json'
import {NavLink as Link, useLocation} from 'react-router-dom'

const useStyles = makeStyles((t: Theme) => createStyles({
  avatar: {
    background: t.palette.divider,
    margin: 'auto',
  },
  itemI: {
    marginLeft: 'auto',
    color: t.palette.text.disabled,
  },
  version: {
    textAlign: 'center',
    color: t.palette.text.disabled,
    fontSize: t.typography.caption.fontSize,
    letterSpacing: 1
  }
}))

interface IProps {
  basePath?: string
  className?: string
}

interface MenuItemProps extends HTMLProps<any> {
  to: string
  icon?: string | ReactNode
  large?: boolean
}

export const MenuItem = ({to, ...otherProps}: MenuItemProps) => {
  const {pathname} = useLocation()
  return (
    <Link to={to}>
      <SidebarItem active={pathname === to} {...otherProps}/>
    </Link>
  )
}


export const Menu = ({className, basePath = ''}: IProps) => {
  const classes = useStyles()
  const isDarkTheme = useTheme()
  const toggleDarkTheme = useToggleTheme()
  const path = (page: string) => basePath + page

  return (
    <Sidebar className={className}>
      <SidebarHeader>
        <MenuItem to={path('/home')} icon="home" large>Home</MenuItem>
        <MenuItem to={path('/install')} icon={<DownloadIcon/>} large>Installation</MenuItem>
        <a href="https://github.com/alexandreannic/mui-extension">
          <SidebarItem
            icon={<GitHubIcon/>}
            target="_blank"
            large>
            GitHub
            <Icon className={classes.itemI}>open_in_new</Icon>
          </SidebarItem>
        </a>
      </SidebarHeader>
      <SidebarBody>
        <MenuItem to={path('/stepper')}>ExpensionStepper</MenuItem>
        <MenuItem to={path('/autocomplete')}>Autocomplete</MenuItem>
        <MenuItem to={path('/btn')}>Btn</MenuItem>
        <MenuItem to={path('/btn-uploader')}>BtnUploader</MenuItem>
        <MenuItem to={path('/txt')}>Txt</MenuItem>
        <MenuItem to={path('/confirm')}>Confirm</MenuItem>
        <MenuItem to={path('/panel')}>Panel</MenuItem>
        <MenuItem to={path('/alert')}>Alert</MenuItem>
        <MenuItem to={path('/icons')}>Icons</MenuItem>
        <MenuItem to={path('/fender')}>Fender</MenuItem>
        <MenuItem to={path('/toast')}>Toast</MenuItem>
        <MenuItem to={path('/global-progress')}>GlobalProgress</MenuItem>
        <MenuItem to={path('/animate')}>Animate</MenuItem>
        <MenuItem to={path('/table-sort')}>TableSort</MenuItem>
        <MenuItem to={path('/input-date')}>InputDate</MenuItem>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem icon="brightness_3">
          Night mode
          <Switch
            color="primary"
            className={classes.itemI}
            checked={isDarkTheme}
            onChange={toggleDarkTheme}/>
        </SidebarItem>
      </SidebarFooter>
      <SidebarFooter>
        <div className={classes.version}>v{packageJson.dependencies['mui-extension']}</div>
      </SidebarFooter>
    </Sidebar>
  )
}
