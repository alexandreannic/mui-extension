import * as React from 'react'
import {createStyles, Icon, Theme} from '@material-ui/core'
import {Btn, ExpensionStep, ExpensionStepper} from 'mui-extension'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    border: '1px solid ' + t.palette.divider,
    borderRadius: 4
  }
}))

export const ExpensionStepperDemoAccordion = () => {
  const classes = useStyles()
  return (
    <ExpensionStepper position={1} free className={classes.root}>
      <ExpensionStep label="Third-party access" component={<StepAccess/>}/>
      <ExpensionStep label="My devices" component={<StepDevices/>}/>
    </ExpensionStepper>
  )
}

const StepDevices = () => {
  return (
    <>
      <p style={{marginTop: 0}}>
        Listen to your music from any computer as well as up to ten devices. Uploading or downloading music using Music
        Manager or Google Play Music for Chrome counts towards your device limit. You can deauthorize four devices per
        year.
      </p>
      <Row icon="phone_android" label="samsung SM-G935F" date="August 28, 2018"/>
      <Row icon="phone_android" label="LGE LG-H870DS" date="July 3, 2018"/>
      <Row icon="laptop" label="Computer App" date="June 10, 2018"/>
    </>
  )
}

const StepAccess = () => {
  return (
    <p style={{marginTop: 0}}>
      Your account is vulnerable to malicious activity because you’re allowing apps & devices that use less secure
      sign-in technology to access your account. You should turn off this type of access.
    </p>
  )
}

const useRowStyles = makeStyles((t: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: t.spacing(2),
    paddingBottom: t.spacing(2),
    '&:not(:last-of-type)': {
      marginBottom: t.spacing(2),
      borderBottom: `1px solid ${t.palette.divider}`
    }
  },
  icon: {
    color: t.palette.text.secondary
  },
  content: {
    flex: 1,
    marginLeft: t.spacing(2),
    marginRight: t.spacing(2),
  },
  label: {
    fontWeight: 'bold'
  },
  desc: {
    fontSize: t.typography.caption.fontSize,
    color: t.typography.caption.color,
  }
}))

const Row = (({icon, label, date}: any) => {
  const classes = useRowStyles()
  return (
    <div className={classes.root}>
      <Icon className={classes.icon}>{icon}</Icon>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.desc}>Last accessed: {date}</div>
      </div>
      <div>
        <Btn color="primary" variant="outlined">Deauthorize</Btn>
      </div>
    </div>
  )
})
