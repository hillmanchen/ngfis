var plugins = {
  define : require('../plugins/postprocessor/define.js'),
  //uaeConf : require('../plugins/prepackager/uae-conf.js'),
  //frameworkConf : require('../plugins/prepackager/framework-conf.js')
};

module.exports = {
  project: {
    fileType: {},
    exclude: /(node_modules\/.*)|(bower_modules\/.*)|(dist\/.*)/
  },
  modules: {
    parser: {
    },
    lint: {
      js: 'jshint'
    },
    postprocessor: {
      js: [
        plugins.define
      ]
    },
    prepackager: [],
    postpackager: [],
    //deploy: []
  },
  urlPrefix: '',
  framework: {
    //cache: true,
    urlPattern: '/%s',
    comboPattern: '/co??%s'
  },
  roadmap: {
    path: [
      {
        reg: /.*\.tpl\.html$/,
        release: false
      },
      {
        reg : '**.md',
        isHtmlLike : true,
        release : false
      },
      {
        reg : /\.inline\.\w+$/i,
        release : false
      },
      {
        reg : /^\/components\/(.*)\.(styl|css)$/i,
        id : '${name}/${version}/lib/$1.css',
        isMod : true,
        useSprite : true,
        useHash : false,
        url : '${urlPrefix}/${name}/${version}/lib/$1.$2',
        release : '/public/${name}/${version}/lib/$1.$2'
      },
      {
        reg : /^\/components\/(.*\.js)$/i,
        id : '${name}/${version}/lib/$1',
        isMod : true,
        useHash : false,
        url : '${urlPrefix}/${name}/${version}/lib/$1',
        release : '/public/${name}/${version}/lib/$1'
      },
      {
        reg : /^\/components\/(.*)$/i,
        url : '${urlPrefix}/${name}/${version}/lib/$1',
        release : '/public/${name}/${version}/lib/$1'
      },
      {
        reg : /^\/views\/(.*\.(?:html?|js))$/,
        useCache : false,
        isViews : true,
        url : '${urlPrefix}/${name}/${version}/$1',
        release : '/public/${name}/${version}/$1'
      },
      {
        reg : /^\/views\/(.*)$/,
        useSprite : true,
        isViews : true,
        url : '${urlPrefix}/${name}/${version}/$1',
        release : '/public/${name}/${version}/$1'
      },
      {
        reg : 'map.json',
        release : false
      },
      {
        reg : '**',
        useHash : false,
        useCompile : false
      }
    ]
  }
};