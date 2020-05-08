# Attention!
Not enough development time to finalize this. This Quasar project has been discontinued until further notice.

![Quasar Framework logo](https://cdn.rawgit.com/quasarframework/quasar-art/863c14bd/dist/svg/quasar-logo-full-inline.svg)

# Quasar Framework

> Build responsive websites, PWAs, hybrid mobile Apps (that look native!) and Electron apps using same code, powered with Vue.

# quasar-nuxt (WORK IN PROGRESS)
<a href="https://badge.fury.io/js/quasar-framework" target="_blank"><img src="https://badge.fury.io/js/quasar-nuxt.svg"></a>
[![Join the chat at https://discord.gg/5TDhbDg](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/5TDhbDg)
<a href="http://forum.quasar-framework.org" target="_blank"><img src="https://img.shields.io/badge/community-forum-brightgreen.svg"></a>

> Nuxt Module for Quasar Framework

## Supporting Quasar
Quasar Framework is an MIT-licensed open source project. Its ongoing development is made possible thanks to the support by these awesome [backers](https://github.com/rstoenescu/quasar-framework/blob/dev/backers.md). If you'd like to join them, check out [Quasar Framework's Patreon campaign](https://www.patreon.com/quasarframework).

### Proudly sponsored by:

[![Truelogic](http://quasar-framework.org/images/logo_truelogic.png)](http://truelogic.com)

## Setup
- Add `quasar-nuxt` dependency using yarn or npm to your project
- Add `quasar-nuxt` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'quasar-nuxt'
  ],

  quasar: {
    // ... config
  }
}
```

## Dependencies
- stylus
- stylus-loader

These should be installed using the usual `yarn add` or `npm install` methods into your NUXT project.

## Notes
During the installation process, `quasar-nuxt` will automagically generate the necessary stylus files in order for you to be able to fully customise the look and feel of Quasar and import Quasar variables into your NUXT components. These files can be located at `~assets/quasar/app.styl` and `~assets/quasar/themes/*` so as to remain in-line with the cli starter kit folder structure.

```css
<style lang="styl">
@import '~variables'
h1
  color: $red-5
</style>
```

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `yarn dev` or `npm run dev`

## Documentation

Head on to the Quasar Framework official website: [http://quasar-framework.org](http://quasar-framework.org)

## Stay in Touch

For latest releases and announcements, follow on Twitter: [@quasarframework](https://twitter.com/quasarframework)

## Community Forum

Head on to the official community forum: [http://forum.quasar-framework.org](http://forum.quasar-framework.org)

## License

[MIT License](./LICENSE)

Copyright (c) Razvan Stoenescu <razvan.stoenescu@gmail.com>
