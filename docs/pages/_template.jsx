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
    const isIntroductionActive = this.props.location.pathname==='/';
    const componentLinks = config.components.map(({name, path}) => { 
      const isActive = this.props.location.pathname===path;
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
            <ListGroup>
              <Navigation>
                <Link 
                  to={prefixLink('/')} 
                  selected={ isIntroductionActive }
                >
                  {'Introduction'}
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
