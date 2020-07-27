import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import COLORS from '../../utils/colors';
import Masthead from '../../components/Masthead/Masthead';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import GlobalStyle from '../../global-styles';
import ResumePage from '../ResumePage/ResumePage';

const styles = {
  application: {
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.AppBackground,
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    paddingTop: '8vh',
    height: '100vh',
    // width: '80%',
    // maxWidth: '1200px',
    // margin: 'auto',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Masthead />
      <div className={classes.application}>
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <GlobalStyle />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
