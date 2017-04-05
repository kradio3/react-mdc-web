import React, { PropTypes } from 'react';
import classnames from 'classnames';
import {Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle} from '../../../src/Toolbar';
import { colors, activeColors } from 'utils/colors'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

const AppToolbar = ({ className, title, ...otherProps }) => (
  <Toolbar
    fixed
    style = {{
      paddingLeft: '72px',
      zIndex: 2,
    }}
  >
    <ToolbarRow>
      <ToolbarSection 
        align="start"
      >
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
