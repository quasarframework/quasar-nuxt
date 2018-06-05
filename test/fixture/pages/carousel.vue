<template>
  <div class="layout-padding docs-carousel" style="max-width: 700px">
    <div class="caption">
      Basic Carousel. No controls. Just swipe between slides or
      use you mouse to drag slides to left or right.
    </div>
    <q-carousel class="text-white">
      <q-carousel-slide class="bg-primary">
        {{ lorem }}
      </q-carousel-slide>
      <q-carousel-slide class="bg-secondary">
        Slide 2
      </q-carousel-slide>
      <q-carousel-slide class="bg-tertiary">
        Slide 3
      </q-carousel-slide>
    </q-carousel>

    <div class="caption">Carousel with a base color, Arrows, Quick Navigation, and slides with images.</div>
    <q-carousel
      color="white"
      arrows
      quick-nav
      height="300px"
    >
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
    </q-carousel>

    <div class="caption">Thumbnails</div>
    <q-carousel
      color="white"
      arrows
      quick-nav
      height="300px"
      :thumbnails="[
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg',

        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg'
      ]"
    >
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />

      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
    </q-carousel>

    <div class="caption">Thumbnails - horizontal</div>
    <q-carousel
      color="white"
      arrows
      quick-nav
      height="300px"
      :thumbnails="[
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg',

        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg',
        'https://i1.trekearth.com/photos/13324/mountain.jpg'
      ]"
      thumbnails-horizontal
    >
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />

      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
    </q-carousel>

    <div class="caption">Example creating custom captions for each slide.</div>
    <q-carousel
      color="white"
      arrows
      height="400px"
    >
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">First stop</div>
          <div class="q-headline">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">Second stop</div>
          <div class="q-headline">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">Third stop</div>
          <div class="q-headline">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="caption">Carousel with infinite scroll, auto-play and custom Quick Navigation icon. Second slide has a Youtube video.</div>
    <q-carousel
      color="white"
      arrows
      quick-nav
      quick-nav-icon="favorite"
      infinite
      autoplay
      height="300px"
    >
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide>
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </q-carousel-slide>
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />
    </q-carousel>

    <div class="caption">
      Carousel with custom Quick Navigation and different type of slides content,
      including a vertical scrolling slide (third one).
    </div>
    <q-carousel
      color="white"
      quick-nav
      height="300px"
    >
      <q-carousel-slide class="text-white bg-primary row flex-center">
        <div class="q-display-2">First Slide</div>
      </q-carousel-slide>
      <q-carousel-slide class="text-white bg-secondary row flex-center">
        <div class="q-display-2">Second Slide</div>
      </q-carousel-slide>
      <q-carousel-slide class="text-white bg-primary">
        <div v-for="n in 7" :key="`custom-${n}`" class="q-ma-sm">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg" />
      <q-carousel-slide>
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </q-carousel-slide>
      <q-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/5/59/Cumulus_mountain.jpg" />
      <q-carousel-slide img-src="https://i1.trekearth.com/photos/13324/mountain.jpg" />

      <q-carousel-control slot="control-nav" slot-scope="carousel" :offset="[18, 52]">
        <q-btn
          @click="carousel.previous"
          :disable="!carousel.canGoToPrevious"
          color="amber" text-color="black"
          icon="keyboard_arrow_left"
          round dense
          class="q-mr-small"
        />
        <q-btn
          @click="carousel.next"
          :disable="!carousel.canGoToNext"
          color="amber" text-color="black"
          icon="keyboard_arrow_right"
          round dense
        />
      </q-carousel-control>

      <q-btn
        slot="quick-nav"
        slot-scope="props"
        color="white"
        flat
        dense
        :label="`${props.slide + 1}`"
        @click="props.goToSlide()"
        :class="{inactive: !props.current}"
      />
    </q-carousel>

    <div class="caption">
      Carousel with a model (<q-chip small color="primary">{{ slide }}</q-chip>)
      and some custom controls: an autoplay button, a progressbar showing Carousel progress
      and a fullscreen toggle button.
      <br>
      Controlling from outside of Carousel:
      <q-btn
        rounded
        color="primary"
        @click="slide = 1"
        icon="arrow_downward"
        label="Navigate to second slide"
        class="q-ml-sm"
      />
    </div>
    <q-carousel
      v-model="slide"
      color="amber"
      quick-nav
      infinite
      :autoplay="autoplay"
      height="400px"
    >
      <q-carousel-slide
        v-for="n in 7" :key="`car-${n}`"
        class="flex flex-center"
        :class="`bg-${colors[n % 5]}`"
      >
        <div class="text-center">
          <div class="q-display-3">Slide {{ n }}</div>
          <div>Slides can contain any content.</div>
        </div>
      </q-carousel-slide>

      <q-carousel-control
        slot="control"
        position="top-right"
        :offset="[18, 18]"
        class="text-white"
        style="background: rgba(0, 0, 0, .3); padding: 4px; border-radius: 4px"
      >
        <q-toggle dark color="amber" v-model="autoplay" label="Auto Play" />
      </q-carousel-control>

      <q-carousel-control
        slot="control-button"
        slot-scope="carousel"
        position="bottom-right"
        :offset="[18, 22]"
      >
        <q-btn
          round dense push
          color="amber"
          :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="carousel.toggleFullscreen()"
        />
      </q-carousel-control>

      <q-carousel-control slot="control-progress" slot-scope="carousel" position="bottom" :offset="[42, 100]">
        <q-progress :percentage="carousel.percentage" stripe color="amber" :animate="autoplay" />
      </q-carousel-control>
    </q-carousel>

    <div class="caption">
      Custom easing animation.
    </div>
    <q-carousel
      class="text-white"
      :easing="overshoot"
      infinite
      autoplay
      arrows
      color="white"
      height="250px"
    >
      <q-carousel-slide
        v-for="n in 7" :key="`anim-${n}`"
        class="flex flex-center"
        :class="`bg-${colors[n % 5]}`"
      >
        <div class="q-display-3">Slide {{ n }}</div>
      </q-carousel-slide>
    </q-carousel>

    <div class="caption">
      Launch Carousel on Fullscreen. Useful for creating Wizards.
    </div>
    <q-btn color="primary" class="glossy" @click="modal = true">
      Launch
    </q-btn>
    <q-modal v-model="modal" maximized>
      <q-carousel
        color="white"
        arrows
        quick-nav
        class="text-white full-height"
      >
        <q-carousel-slide
          v-for="n in 7" :key="`full-${n}`"
          class="flex flex-center"
          :class="`bg-${colors[n % 5]}`"
        >
          <div class="q-display-3">Step {{ n }}</div>
        </q-carousel-slide>

        <q-carousel-control
          slot="control-full"
          slot-scope="carousel"
          position="bottom-right"
          :offset="[18, 22]"
        >
          <q-btn
            rounded push
            color="amber"
            icon="close"
            label="Close me"
            @click="modal = false"
          />
        </q-carousel-control>
      </q-carousel>
    </q-modal>
  </div>
</template>

<script>
import { easing } from 'quasar'

export default {
  data: () => ({
    slide: 1,
    autoplay: true,
    lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum! Repellendus sed totam earum exercitationem, veritatis rerum? Aliquid.',
    overshoot: easing.overshoot,
    colors: [
      'primary',
      'secondary',
      'yellow',
      'red',
      'orange',
      'grey-2'
    ],
    modal: false
  })
}
</script>

