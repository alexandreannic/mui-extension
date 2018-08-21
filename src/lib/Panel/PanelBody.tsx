import * as React from 'react';
import {ReactNode} from 'react';
import withStyles from '@material-ui/core/es/styles/withStyles';
import {createStyles, Theme, WithStyles} from '@material-ui/core';

const styles = (t: Theme) => createStyles({
  root: t.mixins.gutters({
    paddingTop: t.spacing.unit * 2,
    paddingBottom: t.spacing.unit * 2,
    '&:last-child': {
      paddingBottom: t.spacing.unit * 3,
    },
  }),
});


interface PanelBodyProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}


class PanelBody extends React.Component<PanelBodyProps, {}> {

  render() {
    const {children, classes, className} = this.props;
    return (
      <div className={`${classes.root} ${className || ''}`}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(PanelBody);
