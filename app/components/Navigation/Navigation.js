import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';

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
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['home', 'projects', 'resume', 'contact me'],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.navigation}>
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
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

export default connect(mapStateToProps)(
  withStyles(styles)(connect()(Navigation)),
);
