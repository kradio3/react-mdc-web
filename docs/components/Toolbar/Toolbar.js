import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import {Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle} from '../../../src/Toolbar';
import { colors, activeColors } from 'utils/colors'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Logo from '../Logo';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

const AppToolbar = ({ className, title, ...otherProps }) => (
  <Toolbar
    fixed
    style = {{
      paddingLeft: '16px',
      zIndex: 2,
    }}
  >
    <ToolbarRow>
      <ToolbarSection 
        align="start"
      >
        <Logo/>
        <ToolbarTitle>
          <Link
            to={prefixLink('/')}
            style={{ color: colors.fg }}
            className="site-title"
          >
            {title}
          </Link>
        </ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection 
        align="end"
      >
        <a
          style={{
            color: colors.fg,
            textDecoration: 'none',
          }}
          href="https://github.com/kradio3/react-mdc-web"
        >
          Github
        </a>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
AppToolbar.propTypes = propTypes;
export default AppToolbar;
