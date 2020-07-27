import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import COLORS from '../../utils/colors';
import select from '../../images/select.svg';
import image from '../../images/projects/project_1.jpg';
import './Project.css';
import Button from '../Button';

const styles = {
  navigation: {
    height: '100%',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    textTransform: 'uppercase',
    fontSize: '.7rem',
    display: 'flex',
  },
  link: {
    height: '100%',
    padding: '0 20px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  activeLink: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    fontWeight: '700',
    padding: '0 20px',
    borderBottom: `4px solid ${COLORS.SECENDARY}`,
  },
  linkStyle: {
    textDecoration: 'none',
    color: COLORS.ACCENT,
  },
  between: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  flexCenter: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  flexCenterColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  projectTitle: {
    width: '100%',
    fontFamily: 'Abril Fatface',
    fontSize: '6rem',
    padding: '2rem 0',
  },
  projectSubTitle: {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  projectDescription: {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    color: COLORS.GRAY,
    fontWeight: 300,
  },
  projectImage: {
    width: '80%',
  },
  selectImage: {
    height: '5rem',
  },
  h100: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: '.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gridTemplateRows: '100%',
  },
};

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const path = `/project/${this.props.project.id}`;
    const { classes } = this.props;
    return (
      <div className={classes.between}>
        <div className={classes.grid}>
          <div className={classes.flexCenterColumn}>
            <div className={classes.h100}>
              <div className={classes.projectTitle}>
                <div className="mask three">{this.props.project.title}</div>
              </div>
              <div className={classes.projectSubTitle}>
                {this.props.project.subtitle}
              </div>
              <div className={classes.projectDescription}>
                {this.props.project.description}
              </div>
            </div>
          </div>
          {/*<div className={classes.flexCenter}>*/}
          {/*  <img className={classes.projectImage} src={image} alt="" />*/}
          {/*</div>*/}
        </div>
        <Button to={path}>View +</Button>
        <img className={classes.selectImage} src={select} alt="" />
      </div>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);
