<% if (options.supportIE) { %>
import 'quasar-framework/dist/quasar.ie.polyfills'
<% }

let importStatement, useStatement = [ `config: ${JSON.stringify(options.framework.config)}` ]

if (options.framework.i18n) { %>
import lang from 'babel-loader!quasar-framework/i18n/<%= options.framework.i18n %>'
<%
  useStatement.push('i18n: lang')
}

if (options.framework.iconSet) { %>
import iconSet from 'babel-loader!quasar-framework/icons/<%= options.framework.iconSet %>'
<%
  useStatement.push('iconSet: iconSet')
}

if (options.framework === 'all' || options.framework.all) {
  importStatement = ', * as All'
  useStatement.push(
    'components: All',
    'directives: All',
    'plugins: All'
  )
}
else {
  importStatement = []

  ;['components', 'directives', 'plugins'].forEach(type => {
    if (options.framework[type]) {
      let items = options.framework[type].filter(item => item)
      if (items.length > 0) {
        useStatement.push(type + ': {' + items.join(',') + '}')
        importStatement = importStatement.concat(items)
      }
    }
  })
}
%>

import Vue from 'vue'
import Quasar<%= importStatement || '' %> from 'quasar-framework/dist/quasar.<%= options.theme %>.esm'

export default ({ app, req, res }) => {
  const opts = <%= '{' + useStatement.join(',') + '}' %>

  if (process.server) {
    function setBodyClasses (cls) {
      app.head.bodyAttrs = app.head.bodyAttrs || {}
      app.head.bodyAttrs['class'] = app.head.bodyAttrs['class']
        ? app.head.bodyAttrs['class'] + ' ' + cls.join(' ')
        : cls.join(' ')
    }

    function setHtmlAttrs (attrs) {
      app.head.htmlAttrs = app.head.htmlAttrs || {}
      Object.assign(app.head.htmlAttrs, attrs)
    }

    opts.cfg.ssr = { req, res, setBodyClasses, setHtmlAttrs }
  }

  Vue.use(Quasar, opts)
}
