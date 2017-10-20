import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import {Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon} from '../../../src/Toolbar';
import { colors, activeColors } from 'utils/colors'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Logo from '../Logo';


export default class AppToolbar extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    toolbarMode: PropTypes.object
  }

  render() {
    const { className, title, toolbarMode, ...otherProps } = this.props;

    return <Toolbar
        fixed = {toolbarMode.fixed}
        waterfall = {toolbarMode.waterfall}
        flexible = {toolbarMode.flexible}
        fixedLastRowOnly = {toolbarMode.fixedLastRowOnly}
        flexibleDefaultBehavior = {toolbarMode.flexibleDefaultBehavior}
        style = {{
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
        ref={(node) => { this.node = node; }}
      >
        <ToolbarRow>
          <ToolbarSection
            align="start"
          >
            <ToolbarIcon menu={true}>
              <Logo/>
            </ToolbarIcon>
            <ToolbarTitle style={{lineHeight: "36px"}}>
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
            <ToolbarIcon>
              <a
                style={{
                  color: colors.fg,
                }}
                href="https://github.com/kradio3/react-mdc-web"
              >
                Github
              </a>
            </ToolbarIcon>
          </ToolbarSection>
        </ToolbarRow>
        {toolbarMode.fixedLastRowOnly &&
          <ToolbarRow>
            <ToolbarSection>
              The last row
            </ToolbarSection>
          </ToolbarRow>
        }
    </Toolbar>
  }
}
