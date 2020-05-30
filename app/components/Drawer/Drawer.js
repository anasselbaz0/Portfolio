import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';

const styles = {
  drawer: {
    width: '150px',
    height: '100vh',
    paddingTop: '56px',
    backgroundColor: COLORS.BLUE_1,
    position: 'absolute',
    top: '0',
    zIndex: '2020',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    textTransform: 'uppercase',
    fontSize: '1rem',
  },
  links: {
    marginTop: '16px',
  },
  link: {
    padding: '15px 0',
    paddingLeft: '20px',
    fontWeight: '600',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  },
  activeLink: {
    fontWeight: '700',
    padding: '15px 0',
    paddingLeft: '10px',
    borderLeft: `10px solid ${COLORS.SECENDARY}`,
    background: 'rgba(255, 255, 255, 0.3)',
  },
  linkStyle: {
    textDecoration: 'none',
    color: COLORS.ACCENT,
  },
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['home', 'projects', 'about', 'resume', 'contact me'],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.drawer}>
        <div className={classes.links}>
          {this.state.links.map(link => {
            const uri = `/${link.replace(/ /g, '')}`;
            if (link === 'home')
              return (
                <Link key={link} className={classes.linkStyle} to="/">
                  <div
                    className={
                      this.props.pathname === '/'
                        ? classes.activeLink
                        : classes.link
                    }
                  >
                    {link}
                  </div>
                </Link>
              );
            return (
              <Link key={link} className={classes.linkStyle} to={uri}>
                <div
                  className={
                    this.props.pathname === `/${link.replace(/ /g, '')}`
                      ? classes.activeLink
                      : classes.link
                  }
                >
                  {link}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps)(withStyles(styles)(connect()(Drawer)));
