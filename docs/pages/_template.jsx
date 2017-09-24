import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'
import {
  Drawer,
  DrawerSpacer,
  Navigation,
  NavigationItem,
  ListGroup,
  ListDivider,
} from '../../src'
import Toolbar from 'components/Toolbar';
import Layout from 'components/Layout';
import Content from 'components/Content';

// Import styles.
import '../../node_modules/material-components-web/dist/material-components-web.css';
import 'prismjs/themes/prism-okaidia.css'
import 'css/main.css'

export default class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  }

  componentWillMount() {
    // See the counterpart that sets the cookie in ToolbarBase
    const mode = document.cookie.replace(/(?:(?:^|.*;\s*)toolbar-mode\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    var toolbarMode = {}
    if (mode == 'normal') {
      toolbarMode = {
        fixed: false,
        waterfall: false,
        flexible: false,
        flexibleDefaultBehavior: false,
        fixedLastRowOnly: false
      };
    } else if (mode == 'waterfall-flexible') {
      toolbarMode = {
        fixed: true,
        waterfall: true,
        flexible: true,
        flexibleDefaultBehavior: true,
        fixedLastRowOnly: false
      };
    } else if (mode == 'waterfall-flexible-fixedLastRowOnly') {
      toolbarMode = {
        fixed: true,
        waterfall: true,
        flexible: true,
        flexibleDefaultBehavior: true,
        fixedLastRowOnly: true
      };
    } else if (mode == 'waterfall') {
      toolbarMode = {
        fixed: true,
        waterfall: true,
        flexible: false,
        flexibleDefaultBehavior: false,
        fixedLastRowOnly: false
      };
    } else if (mode == 'flexible') {
      toolbarMode = {
        fixed: false,
        waterfall: false,
        flexible: true,
        flexibleDefaultBehavior: false,
        fixedLastRowOnly: false
      };
    } else { // default is fixed
      toolbarMode = {
        fixed: true,
        waterfall: false,
        flexible: false,
        flexibleDefaultBehavior: false,
        fixedLastRowOnly: false
      };
    }

    this.setState({toolbarMode: toolbarMode});
  }

  render () {
    const isIntroductionActive = this.props.location.pathname===prefixLink('/');
    const isThemingActive = this.props.location.pathname===prefixLink('/theming/');
    const componentLinks = config.components.map(({name, path}) => {
      const isActive = this.props.location.pathname===prefixLink(path);
      return (
        <Link
          key={name}
          to={prefixLink(path)}
          selected={ isActive }
        >
          {name}
        </Link>
      ) });

    return (
      <Layout>
        <Toolbar 
          title={config.siteTitle}
          toolbarMode={this.state.toolbarMode}
        />
        <Content fixed={this.state.toolbarMode.fixed}>
          <Drawer
            permanent
            style={{height: 'inherit', minHeight: '100%'}}
          >
            <ListGroup>
              <Navigation>
                <Link
                  to={prefixLink('/')}
                  selected={ isIntroductionActive }
                >
                  {'Introduction'}
                </Link>
                <Link
                  to={prefixLink('/theming/')}
                  selected={ isThemingActive }
                >
                  {'Theming'}
                </Link>
              </Navigation>
              <ListDivider/>
              <Navigation>
                {componentLinks}
              </Navigation>
            </ListGroup>
          </Drawer>
          <main style={{padding: '16px', flex: '1'}}>
            {this.props.children}
          </main>
        </Content>
      </Layout>
    )
  }
}
