const { fastn, binding } = require('../../fastn')

const menuItems = (app) => ({
  left: [{
    href: '/how-it-works',
    title: 'How it works'
  }, {
    href: '/pricing',
    title: 'Pricing'
  }, {
    href: '/support',
    title: 'Support'
  }],

  notLoggedIn: [{
    href: '/login',
    title: 'Login'
  }, {
    href: '/register',
    title: 'Register'
  }],

  loggedIn: app.state.user && [{
    href: '/my-account',
    title: app.state.user.email
  }]
})

function createMenuItem (app) {
  return function (menuItem) {
    menuItem = menuItem.get('item')
    return fastn('li',
      fastn('a', {
        href: menuItem.href,
        class: binding('route', route =>
          route.startsWith(menuItem.href) ? 'active' : ''
        ).attach(app.state)
      }, menuItem.title)
    )
  }
}

module.exports = function (app) {
  return fastn('header', { class: 'site-header' },
    fastn('nav',
      fastn('a', {
        href: '/',
        class: 'logo'
      }, 'bitabase'),

      fastn('ul:list', {
        class: 'left',
        items: menuItems(app).left,
        template: createMenuItem(app)
      }),

      fastn('templater', {
        data: binding('user'),
        template: (user) => {
          return fastn('ul:list', {
            class: 'right',
            items: user.get('item') ? menuItems(app).loggedIn : menuItems(app).notLoggedIn,
            template: createMenuItem(app)
          })
        }
      })
    )
  )
}