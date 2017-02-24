var frontMatter = require('front-matter')
var markdownIt = require('markdown-it')
var objectAssign = require('object-assign')
const prismjs = require('prismjs')
const babel = require('babel-core');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-bash');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var React = require('react');


var highlight = function (str, lang) {
  const langClass = `language-${lang}`;
  const classes = langClass +' mdc-elevation--z1 mdc-elevation-transition';
  if (lang  && prismjs.languages[lang]) {
    try {
      const html = prismjs.highlight(str, prismjs.languages[lang]);
      return `<pre class='${classes}'><code class='${langClass}'>${html}</code></pre>`;
    } catch (_error) {
      console.log(_error);
      return '';
    }
  } else if(lang === 'react-snippet'){
    return `<pre></pre><div id='${str.trim()}'></div>`;
  }
  return ''
}

var md = markdownIt({
  highlight,
  html: true,
  linkify: true,
  typographer: true,
});

md.renderer.rules.heading_open  = function (tokens, idx, options, env, renderer) { 
  const token = tokens[idx];
  const tag = token.tag;
  const className = headings[tag];
  return '<'+tag+' class="'+className+'">'; 
};

const headings = {
  'h1': 'mdc-typography--display3',
  'h2': 'mdc-typography--display2',
  'h3': 'mdc-typography--display1',
  'h4': 'mdc-typography--headline',
  'h5': 'mdc-typography--title',
};

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
