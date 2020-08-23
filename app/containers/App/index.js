import React from 'react';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import COLORS from '../../utils/colors';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import GlobalStyle from '../../global-styles';
import ResumePage from '../ResumePage/ResumePage';
import ContactPage from '../ContactPage/ContactPage';
import { Route, Switch } from 'react-router-dom';
import PersistentNavigation from '../../components/Navigation/Navigation';

const styles = {
  application: {
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.AppBackground,
    flex: 1,
    // position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '64px'
  },
  content: {
    // paddingTop: '8vh',
    height: '100%',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      {/*<Masthead />*/}
      <PersistentNavigation content={
        <div className={classes.application}>
          <div className={classes.content}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/resume" component={ResumePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <GlobalStyle />
        </div>
      }/>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
