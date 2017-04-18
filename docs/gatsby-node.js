import ExtractTextPlugin from 'extract-text-webpack-plugin';
//var sm = require('sitemap');
import fs from 'fs-extra-promise';
import sitemap from 'sitemap';

export const modifyWebpackConfig = (config, stage) => {
  config.removeLoader('css');
  if(stage === 'develop') {
    config.loader('css', function(cfg) {
      cfg.test = /\.css$/;
      cfg.loader = 'style!css';
      return cfg;
    });
  } else {
    config.loader('css', function(cfg) {
      cfg.test = /\.css$/;
      cfg.loader =  ExtractTextPlugin.extract('css');
      return cfg;
    });
  }

  config.removePlugin('extract-text');
  config.plugin(
    'extract-text',
    ExtractTextPlugin,
    ["css/styles.css", { allChunks: true }]
  );
  return config;
}

const pagesToSitemap = pages => {
  const urls = pages.map((p) => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'weekly',
        priority: 0.5,
      }
    }
  })
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined)
}

const generateSiteMap = pages => {
  const map = sitemap.createSitemap({
    hostname: 'https://kradio3.github.io/react-mdc-web',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    map.toString()
  )
}

export const postBuild = (pages,callback) => {
  generateSiteMap(pages);
  callback();
}
