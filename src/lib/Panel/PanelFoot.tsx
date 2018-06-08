import * as React from 'react';
import withStyles from '@material-ui/core/es/styles/withStyles';
import {CardActions, Theme, WithStyles} from '@material-ui/core';
import {ReactNode} from 'react';


const styles = (t: Theme) => ({
});

interface PanelFootProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}

class PanelFoot extends React.Component<PanelFootProps, {}> {

  render() {
    const {children, classes, className} = this.props;
    return (
      <CardActions className={`${className || ''}`}>
        {children}
      </CardActions>
     );
  }
}


export default withStyles(styles)(PanelFoot);
