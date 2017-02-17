import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data;
    const title = post.title ? `${post.title} | ${config.headerTitle}` : `${config.headerTitle}`;

    return (
      <DocumentTitle title={title}>
        <div className="markdown">
          <h1 className="mdc-typography--display3 page-title">{post.title}
          <div className="mdc-typography--subheading2">{post.description}</div>
        </h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  },
})
