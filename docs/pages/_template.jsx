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
import 'css/mdc.dialog.min.css'
import 'css/main.css'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
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
        />
        <Content>
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
  },
})
