<template>
  <div>
    <q-layout :view="view" @scroll="onScroll">
      <q-layout-header v-model="header" :reveal="headerReveal">
        <q-toolbar :inverted="$q.theme === 'ios'">
          <q-btn flat round dense icon="menu" @click="left = !left" />
          <q-toggle v-model="extraRow" color="amber" dark />
          <q-toolbar-title>
            Header
            <span slot="subtitle">The Subtiiiitleeee</span>
          </q-toolbar-title>
          <q-btn round dense flat class="relative-position q-mr-md" icon="announcement">
            <q-chip dense square floating color="red">1</q-chip>
          </q-btn>
          <q-color hide-underline :dark="$q.theme === 'mat'" v-model="mainColor" />
          <q-toggle v-model="toggle" color="amber" dark />
          <q-btn flat round dense icon="menu" @click="right = !right" />
        </q-toolbar>
        <q-toolbar v-if="extraRow" :inverted="$q.theme === 'ios'">
          <q-btn flat round dense icon="menu" @click="left = !left" />
          <q-toolbar-title>
            Header
            <span slot="subtitle">The Subtiiiitleeee</span>
          </q-toolbar-title>
          <q-btn flat round dense icon="menu" @click="right = !right" />
        </q-toolbar>
        <q-tabs :inverted="$q.theme === 'ios'">
          <q-route-tab slot="title" icon="view_quilt" to="/layout-quick/default" replace hide="icon" label="Default" />
          <q-route-tab slot="title" icon="view_day" to="/layout-quick/a" replace hide="label" label="A" />
          <q-route-tab slot="title" icon="view_day" to="/layout-quick/b" replace label="B" />
          <q-route-tab slot="title" icon="input" to="/layout-quick/c" replace label="C" />
        </q-tabs>
      </q-layout-header>

      <q-layout-footer v-model="footer" :reveal="footerReveal">
        <q-toolbar :inverted="$q.theme === 'ios'">
          <q-btn flat round dense icon="menu" @click="left = !left" />
          <q-toolbar-title>
            Footer
          </q-toolbar-title>
          <q-btn flat round dense icon="menu" @click="right = !right" />
        </q-toolbar>
        <q-toolbar :inverted="$q.theme === 'ios'">
          <q-btn flat round dense icon="menu" @click="left = !left" />
          <q-toolbar-title>
            Footer
          </q-toolbar-title>
          <q-btn flat round dense icon="menu" @click="right = !right" />
        </q-toolbar>
      </q-layout-footer>

      <q-layout-drawer
        v-model="right"
        side="right"
        :overlay="rightOverlay"
        :behavior="rightBehavior"
        :breakpoint="rightBreakpoint"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit" :thumb-style="{right: '4px', borderRadius: '2px', background: 'blue', opacity: .6, width: '4px'}">
          <q-btn to="/layout-quick/a">Go to A</q-btn>
          <q-btn to="/layout-quick/b">Go to B</q-btn>
          <q-btn to="/layout-quick/c">Go to C</q-btn>

          <br><br>fffdfs
          {{ right }}
          <q-input v-model="inp" />

          <q-btn to="/layout-quick/a" replace>Replace Go to A</q-btn>
          <q-btn to="/layout-quick/b" replace>Replace Go to B</q-btn>
          <q-btn to="/layout-quick/c" replace>Replace Go to C</q-btn>
          <div v-for="n in 60" :key="n">{{ n }} Left drawer</div>
        </q-scroll-area>
      </q-layout-drawer>

      <!--
        @mouseover="leftMini = false"
        @mouseout="leftMini = true"
        ...or
        @click.capture="e => {
          if (leftMini) {
            leftMini = false
            e.preventDefault()
            e.stopPropagation()
          }
        }"
      -->
      <q-page-container>
        <q-layout-drawer
          side="left"
          :mini="leftMini"
          @click.capture="e => {
            if (leftMini) {
              leftMini = false
              e.preventDefault()
              e.stopPropagation()
            }
          }"
          v-model="left"
          :overlay="leftOverlay"
          :behavior="leftBehavior"
          :breakpoint="leftBreakpoint"
          :content-style="{'font-size': '16px'}"
        >
          <!--
        <div slot="mini">
          <q-btn
            class="q-mini-drawer-hide"
            icon="keyboard_arrow_right"
            @click="goMini"
          />
          <div>mini</div>
        </div>
        -->
          <q-btn
            class="q-mini-drawer-hide"
            icon="keyboard_arrow_left"
            @click="leftMini = true"
          />
          <div class="q-mini-drawer-hide">Maxi only</div>
          <div class="q-mini-drawer-only">Mini only</div>
          <q-collapsible
            icon="perm_identity"
            label="With a model and events"
          >
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, fuga voluptatem! Debitis, numquam! Velit excepturi harum sint explicabo, rerum dolores illum nihil aperiam praesentium, consectetur delectus sapiente in sed provident.</div>
          </q-collapsible>
          <q-list link no-border>
            <q-list-header>Folders</q-list-header>
            <q-item to="/layout-quick/a" replace>
              <q-item-side icon="folder" inverted color="primary" />
              <q-item-main>
                <q-item-tile label>Link A</q-item-tile>
                <q-item-tile sublabel>February 22, 2016</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" color="green" />
            </q-item>
            <q-item to="/layout-quick/b" replace>
              <q-item-side icon="folder" inverted color="secondary" />
              <q-item-main>
                <q-item-tile label>Link B</q-item-tile>
                <q-item-tile sublabel>March 1st, 2017</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" />
            </q-item>
            <q-item to="/layout-quick/c" replace>
              <q-item-side icon="folder" inverted color="amber" />
              <q-item-main>
                <q-item-tile label>Link C</q-item-tile>
                <q-item-tile sublabel>Latest</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" />
            </q-item>
            <q-item-separator />
            <q-list-header>Files</q-list-header>
            <q-item>
              <q-item-side icon="assignment" inverted color="grey-6" />
              <q-item-main>
                <q-item-tile label>Expenses spreadsheet</q-item-tile>
                <q-item-tile sublabel>March 2nd, 2016</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" />
            </q-item>
            <q-item>
              <q-item-side icon="place" inverted color="grey-6" />
              <q-item-main>
                <q-item-tile label>Places to visit</q-item-tile>
                <q-item-tile sublabel>February 22, 2016</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" color="amber" />
            </q-item>
            <q-item>
              <q-item-side icon="library_music" inverted color="grey-6" />
              <q-item-main>
                <q-item-tile label>My favorite song</q-item-tile>
                <q-item-tile sublabel>Singing it all day</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" />
            </q-item>
            <q-item>
              <q-item-side icon="videogame_asset" inverted color="grey-6" />
              <q-item-main>
                <q-item-tile label>Quasar Game</q-item-tile>
                <q-item-tile sublabel>Have fun while building apps</q-item-tile>
              </q-item-main>
              <q-item-side right icon="info" />
            </q-item>

            <q-item-separator />
            <q-list-header>People</q-list-header>
            <q-item>
              <q-item-side avatar="/statics/boy-avatar.png" />
              <q-item-main>
                <q-item-tile label>John</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-item-tile icon="chat_bubble" color="green" />
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side avatar="/statics/boy-avatar.png" />
              <q-item-main>
                <q-item-tile label>Jim</q-item-tile>
                <q-item-tile sublabel>Javascript wiz kid</q-item-tile>
              </q-item-main>
              <q-item-side right icon="chat_bubble" />
            </q-item>
            <q-item>
              <q-item-side avatar="/statics/boy-avatar.png" />
              <q-item-main>
                <q-item-tile label>Jake</q-item-tile>
                <q-item-tile sublabel>Passionate about Quasar</q-item-tile>
              </q-item-main>
              <q-item-side right icon="chat_bubble" />
            </q-item>
          </q-list>
        </q-layout-drawer>

        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <q-page padding class="bg-teal-2">
            <div>Page B</div>

            <br>

            <q-btn @click="$router.push('/layout-quick/a')">Go to A</q-btn>
            <q-btn @click="$router.push('/layout-quick/b')">Go to B</q-btn>
            <q-btn @click="$router.push('/layout-quick/c')">Go to C</q-btn>

            <br><br>

            <q-btn @click="$router.replace('/layout-quick/a')">Replace Go to A</q-btn>
            <q-btn @click="$router.replace('/layout-quick/b')">Replace Go to B</q-btn>
            <q-btn @click="$router.replace('/layout-quick/c')">Replace Go to C</q-btn>

            <q-page-sticky position="top-right">
              <div class="fit bg-secondary flex items-center">
                <q-toolbar color="secondary">
                  <q-btn flat round dense icon="map" />
                  <q-toolbar-title>Title</q-toolbar-title>
                </q-toolbar>
              </div>
            </q-page-sticky>
            <q-page-sticky position="bottom-right">
              <div class="fit bg-tertiary flex items-center">
                <q-toolbar color="tertiary">
                  <q-btn flat round dense icon="map" />
                  <q-toolbar-title>Title</q-toolbar-title>
                </q-toolbar>
              </div>
            </q-page-sticky>
            <q-page-sticky position="bottom-left">
              <q-toolbar color="amber" text-color="black">
                <q-btn flat round dense icon="map" />
                <q-toolbar-title>Title</q-toolbar-title>
              </q-toolbar>
            </q-page-sticky>
            <!--<q-page-sticky position="top-left">
              <q-toolbar color="purple">
                <q-btn flat round dense icon="map" />
                <q-toolbar-title>Title</q-toolbar-title>
              </q-toolbar>
            </q-page-sticky>-->
          </q-page>
        </transition>
        <div class="fixed-bottom-right bg-grey-5 q-pa-sm z-max" style="bottom: 8px; right: 8px;">
          <q-toggle v-model="showConfig" label="Config" />
        </div>
      </q-page-container>
    </q-layout>

    <div class="fixed-center bg-amber z-fullscreen" v-if="showConfig">
      <div class="row no-wrap">
        <div class="col gutter-xs q-ma-xs">
          <div>
            <q-toggle v-model="header" label="Header" />
          </div>
          <div>
            <q-toggle v-model="headerReveal" label="Header Reveal" />
          </div>
          <div class="q-mt-sm">
            <q-toggle v-model="left" label="Left Drawer" />
          </div>
          <div>
            <q-toggle v-model="leftOverlay" label="Left as Overlay" />
          </div>
          <div>
            <q-select v-model="leftBehavior" :options="drawerBehaviorOptions" />
          </div>
          <div>
            <q-input type="number" align="right" prefix="Bkpt" placeholder="Bkpt" v-model="leftBreakpoint" />
          </div>
        </div>
        <div class="col gutter-xs q-ma-xs">
          <div>
            <q-toggle v-model="footer" label="Footer" />
          </div>
          <div>
            <q-toggle v-model="footerReveal" label="Footer Reveal" />
          </div>
          <div class="q-mt-sm">
            <q-toggle v-model="right" label="Right Drawer" />
          </div>
          <div>
            <q-toggle v-model="rightOverlay" label="Right as Overlay" />
          </div>
          <div>
            <q-select v-model="rightBehavior" :options="drawerBehaviorOptions" />
          </div>
          <div>
            <q-input type="number" align="right" prefix="Bkpt" placeholder="Bkpt" v-model="rightBreakpoint" />
          </div>
        </div>
      </div>

      <div class="row justify-center q-mt-big">
        <q-chip color="primary">
          view: {{ view }}
        </q-chip>
      </div>
      <div class="flex justify-center">
        <div style="min-width: 400px; max-width: 90vw">
          <div class="doc-layout-grid row justify-center">
            <div class="doc-row-definition row flex-center no-border">
              Header
            </div>
            <div class="col column group flex-center">
              <q-radio color="orange" v-model="topleft" val="l" label="l" />
              <q-radio color="orange" v-model="topleft" val="h" label="h" />
            </div>
            <div class="col column group flex-center">
              <q-radio v-model="topcenter" val="h" label="h" />
              <q-radio v-model="topcenter" val="H" label="H" />
            </div>
            <div class="col column group flex-center">
              <q-radio color="secondary" v-model="topright" val="r" label="r" />
              <q-radio color="secondary" v-model="topright" val="h" label="h" />
            </div>
          </div>
          <q-card-separator />

          <div class="doc-layout-grid row justify-center">
            <div class="doc-row-definition row flex-center no-border">
              Middle
            </div>
            <div class="col column group flex-center">
              <q-radio color="orange" v-model="middleleft" val="l" label="l" />
              <q-radio color="orange" v-model="middleleft" val="L" label="L" />
            </div>
            <div class="col column group flex-center">
              <q-radio v-model="middlecenter" val="p" label="p" />
            </div>
            <div class="col column group flex-center">
              <q-radio color="secondary" v-model="middleright" val="r" label="r" />
              <q-radio color="secondary" v-model="middleright" val="R" label="R" />
            </div>
          </div>
          <q-card-separator />

          <div class="doc-layout-grid row justify-center">
            <div class="doc-row-definition row flex-center no-border">
              Footer
            </div>
            <div class="col column group flex-center">
              <q-radio color="orange" v-model="bottomleft" val="l" label="l" />
              <q-radio color="orange" v-model="bottomleft" val="f" label="f" />
            </div>
            <div class="col column group flex-center">
              <q-radio v-model="bottomcenter" val="f" label="f" />
              <q-radio v-model="bottomcenter" val="F" label="F" />
            </div>
            <div class="col column group flex-center">
              <q-radio color="secondary" v-model="bottomright" val="r" label="r" />
              <q-radio color="secondary" v-model="bottomright" val="f" label="f" />
            </div>
          </div>
          <q-toggle v-model="leftMini" label="Left mini drawer" />
          <q-toggle v-model="rightMini" label="Right mini drawer" />
        </div>
      </div>
    </div>
    <q-modal minimized v-model="toggle" :content-css="{padding: '50px', minWidth: '50vw'}">
      <h4>Basic Modal</h4>
      <p v-for="n in 25" :key="`basic-${n}`">Scroll down to close</p>
      <q-btn color="primary" @click="toggle = false">Close</q-btn>
    </q-modal>
  </div>
</template>

<script>
import { colors } from 'quasar'

export default {
  data () {
    const v = 'lHh LpR fFf'
    return {
      mainColor: '#027be3',
      extraRow: true,

      toggle: false,
      header: true,
      footer: true,
      left: true,
      right: true,

      headerReveal: false,
      footerReveal: false,
      leftOverlay: false,
      rightOverlay: false,
      leftBehavior: 'default',
      rightBehavior: 'default',
      leftBreakpoint: 992,
      rightBreakpoint: 992,
      leftMini: true,
      rightMini: false,

      scrolling: true,

      topleft: v[0],
      topcenter: v[1],
      topright: v[2],
      middleleft: v[4],
      middlecenter: v[5],
      middleright: v[6],
      bottomleft: v[8],
      bottomcenter: v[9],
      bottomright: v[10],
      drawerBehaviorOptions: [
        { label: 'Behave Normal', value: 'default' },
        { label: 'Behave Mobile', value: 'mobile' },
        { label: 'Behave Desktop', value: 'desktop' }
      ],

      showConfig: true,
      inp: ''
    }
  },
  computed: {
    view () {
      const
        top = `${this.topleft}${this.topcenter}${this.topright}`,
        middle = `${this.middleleft}${this.middlecenter}${this.middleright}`,
        bottom = `${this.bottomleft}${this.bottomcenter}${this.bottomright}`

      return `${top} ${middle} ${bottom}`
    }
  },
  watch: {
    mainColor (v) {
      colors.setBrand(`primary`, v)
    }
  },
  methods: {
    onScroll (data) {
      // console.log('scroll', data.position)
    },
    goMini () {
      console.log('goMini')
      this.rightMini = true
    },
    goNormal (e) {
      if (this.rightMini) {
        console.log('goNormal')
        this.rightMini = false
        e.preventDefault()
        e.stopPropagation()
      }
      else {
        console.log('goNormal abort')
      }
    }
  }
}
</script>
