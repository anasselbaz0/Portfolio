import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import COLORS from '../../utils/colors';
import Project from '../../components/Project/Project';
import projects from '../../data/projects';

const styles = {
  page: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  project: {
    height: '80vh',
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectsCarousell: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  projectButton: {
    padding: '1rem 1rem',
    margin: '0 .5rem',
    background: COLORS.BLUE_1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    // border: '.5px solid #aaa',
    '&:hover': {
      background: COLORS.BLUE_2,
    },
  },
};

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedProject: '',
    };
  }

  render() {
    const { classes } = this.props;
    let selectedProject = projects[projects.length - 1];
    projects.forEach(project => {
      if (project.title === this.state.selectedProject)
        selectedProject = project;
    });
    return (
      <div className={classes.page}>
        <div className={classes.project}>
          <Project project={selectedProject} />
        </div>

        <div className={classes.projectsCarousell}>
          {projects.map(project => (
            <div
              key={project.id}
              className={classes.projectButton}
              onClick={() => this.setState({ selectedProject: project.title })}
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ProjectsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(ProjectsPage));
