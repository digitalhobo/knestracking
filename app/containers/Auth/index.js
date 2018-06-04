import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    height: '100%',
  },
  textField: {
    display: 'flex',
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Auth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems='center' justify='center' className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color='textSecondary'>
              Login
            </Typography>
            <form noValidate autoComplete='off'>
              <TextField
                type='text'
                id='username'
                label='Enter Username'
                placeholder='Username'
                margin='normal'
                className={classes.textField}
              />
              <TextField
                type='password'
                id='password'
                label='Enter Password'
                placeholder='Password'
                margin='normal'
                className={classes.textField}
              />
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(Auth);
