import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  page: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  project: {
    flex: '1',
  },
  projectsCarousell: {
    height: '30%',
  },
};

function ProjectsPage(props) {
  const { classes } = props;
  return (
    <div className={classes.page}>
      <div className={classes.project}>Project component</div>
      <div className={classes.projectsCarousell}>Carousell of projects</div>
    </div>
  );
}

ProjectsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(ProjectsPage));
