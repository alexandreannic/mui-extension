import {Panel, PanelBody} from 'mui-extension'
import * as React from 'react'
import {useState} from 'react'
import {Divider, Icon, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, MenuItem, Select, Switch} from '@material-ui/core'
import {Txt, TxtProps} from './Txt'

const sizes = ['default', 'big', 'title', 'small']
const colors = ['primary', 'secondary', 'disabled', 'hint', 'default', 'error']

const SugarSelect = ({value, onChange, values}: {value?: string, onChange: (value: any) => void, values: string[]}) => (
  <Select value={value} onChange={e => onChange(e.target.value as string)} style={{minWidth: 200,}}>
    {values.map(_ => <MenuItem key={_} value={_}>{_}</MenuItem>)}
  </Select>
)

const Item = ({icon, label, children}: any) => (
  <ListItem>
    <ListItemAvatar>
      <Icon color="primary">{icon}</Icon>
    </ListItemAvatar>
    <ListItemText primary={label}/>
    <ListItemSecondaryAction>
      {children}
    </ListItemSecondaryAction>
  </ListItem>
)

export const TxtDemoCustom = () => {
  const [link, setLink] = useState(false)
  const [block, setBlock] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [loading, setLoading] = useState(false)
  const [bold, setBold] = useState(true)
  const [gutter, setGutter] = useState(false)
  const [italic, setItalic] = useState(false)
  const [size, setSize] = useState<TxtProps['size']>('big')
  const [color, setColor] = useState<TxtProps['color']>('default')
  return (
    <div>
      <List>
        <Item label="Link" icon="palette">
          <Switch color="primary" checked={link} onChange={() => setLink(_ => !_)}/>
        </Item>
        <Item label="Loading">
          <Switch color="primary" checked={loading} onChange={() => setLoading(_ => !_)}/>
        </Item>
        <Item label="Size">
          <SugarSelect value={size} onChange={setSize} values={sizes}/>
        </Item>
        <Item label="Color">
          <SugarSelect value={color} onChange={setColor} values={colors}/>
        </Item>
        <Divider variant="inset"/>
        <Item label="Italic" icon="format_clear">
          <Switch color="primary" checked={italic} onChange={() => setItalic(_ => !_)}/>
        </Item>
        <Item label="Bold">
          <Switch color="primary" checked={bold} onChange={() => setBold(_ => !_)}/>
        </Item>
        <Item label="Uppercase">
          <Switch color="primary" checked={uppercase} onChange={() => setUppercase(_ => !_)}/>
        </Item>
        <Divider variant="inset"/>
        <Item label="Bottom gutter" icon="vertical_distribute">
          <Switch color="primary" checked={gutter} onChange={() => setGutter(_ => !_)}/>
        </Item>
        <Item label="Block">
          <Switch color="primary" checked={block} onChange={() => setBlock(_ => !_)}/>
        </Item>
      </List>
      <Panel>
        <PanelBody>
          <Txt
            bold={bold}
            skeleton={loading && 30}
            block={block}
            size={size}
            color={color}
            italic={italic}
            uppercase={uppercase}
            gutterBottom={gutter}
            link={link}>Account</Txt>
          {!block && ' '}Apps and devices that use less secure sign-in technology are blocked.
        </PanelBody>
      </Panel>
    </div>
  )
}
