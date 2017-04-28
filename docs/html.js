import PropTypes from 'prop-types';
import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import { colors } from 'utils/colors'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: PropTypes.string,
  },
  render () {
    const title = DocumentTitle.rewind()
    let css = null;
    if (process.env.NODE_ENV === 'production') {
      css=(
        <link 
          rel="stylesheet" 
          type="text/css" 
          href={prefixLink('/css/styles.css')}
        />
      )
    }

    return (
      <html lang="en"> 
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700" rel="stylesheet"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          {css}
          <script dangerouslySetInnerHTML={{ __html:`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-92225084-1', 'auto');
            ga('send', 'pageview');
            `}}/>

        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html:`
                {
                  "@context": "http://schema.org",
                  "@type": "SoftwareSourceCode",
                  "name": "React-mdc-web",
                  "url": "https://kradio3.github.io/react-mdc-web/",
                  "isBasedOn": ["react", "material-components-web"],
                  "codeRepository": "https://github.com/kradio3/react-mdc-web",
                  "programmingLanguage": ["es6", "jsx"],
                  "about": "Set of material design components for React",
                  "keywords": "react, material, design, components, web"
                }
              `}}
            />
          </body>
        </html>
    )
  },
})
