import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'
import { 
  Elevation,
  Drawer,
  DrawerSpacer,
  Navigation,
  NavigationItem,
} from 'react-mdc-web/lib'
import Toolbar from 'components/Toolbar';
import Layout from 'components/Layout';
import Content from 'components/Content';

// Import styles.
import 'prismjs/themes/prism-okaidia.css'
import 'css/main.css'

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const examplesActive = includes(this.props.location.pathname, '/examples/')
    const componentLinks = config.components.map(({name, path}) => (
      <Link 
        key={name}
        to={prefixLink(path)} 
      >
        {name}
      </Link>
    ));

    return (
      <Layout>
        <Toolbar>
          <Link
            to={prefixLink('/')}
            style={{ color: colors.fg }}
            className="mdc-typography--title site-title"
          >
            {config.siteTitle}
          </Link>
          <a
            style={{
              float: 'right',
              color: colors.fg,
              textDecoration: 'none',
              marginLeft: rhythm(1/2),
            }}
            href="https://github.com/kradio3/react-mdc-web"
          >
            Github
          </a>
        </Toolbar>
        <Content>
          <Drawer 
            permanent 
            style={{height: 'inherit', minHeight: '100%'}}
          >
            <Navigation>
              {componentLinks}
            </Navigation>
          </Drawer>
          <main style={{padding: '16px', flex: '1'}}>
            {this.props.children}
          </main>
        </Content>
      </Layout>
    )
  },
})
