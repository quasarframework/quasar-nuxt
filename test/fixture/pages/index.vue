<template>
  <div>
    <div class="layout-padding">
      <div class="bg-secondary text-white">
        Model: <em>{{ model }}</em>
      </div>
      <div class="bg-secondary text-white">
        Formatted: <em>{{ modelFormatted }}</em>
      </div>

      <q-datetime format="YYYY-MMMM-dddd Do Qo Q" v-model="model" type="date" align="right" />
      @input<q-datetime @change="value => log('@change', value)" @input="value => log('@input', value)" stack-label="Stack Label" v-model="model" type="date" clearable @focus="log('Xfocus')" @blur="log('Xblur')" />
      @change<q-datetime :value="model" @change="value => { model = value; log('@change', value) }" @input="value => log('@input', value)" stack-label="Stack Label" type="date" clearable />

      <q-datetime @change="value => log('@change', value)" @input="value => log('@input', value)" stack-label="Stack Label" v-model="model" type="date" clearable />
      <q-datetime float-label="Float Label" v-model="model" type="date" />
      <q-datetime hide-underline float-label="Float Label (hide underline)" v-model="model" type="date" />

      <q-datetime default-view="month" v-model="model" type="date" float-label="Default view" />
      <q-datetime inverted v-model="model" type="date" />
      <q-datetime inverted color="secondary" stack-label="Stack Label" v-model="model" type="date" />
      <q-datetime inverted-light color="amber" float-label="Float Label" v-model="model" type="date" />
      <q-datetime inverted-light color="white" :dark="false" float-label="Float Label" v-model="model" type="date" />

      <div class="caption">Format Model</div>
      <div class="bg-secondary text-white">
        Model: <em>{{ modelVar }}</em> <strong>{{ modelVarType }}</strong>
      </div>
      <div class="bg-secondary text-white">
        Formatted: <em>{{ modelVarFormatted }}</em>
      </div>
      <q-datetime @change="value => log('@change', value)" @input="value => log('@input', value)" v-model="modelVar" type="date" clearable stack-label="Format Model 'auto'" format-model="auto" />
      <q-datetime @change="value => log('@change', value)" @input="value => log('@input', value)" v-model="modelVar" type="date" clearable stack-label="Format Model 'date'" format-model="date" />
      <q-datetime @change="value => log('@change', value)" @input="value => log('@input', value)" v-model="modelVar" type="date" clearable stack-label="Format Model 'number'" format-model="number" />
      <q-datetime @change="value => log('@change', value)" @input="value => log('@input', value)" v-model="modelVar" type="date" clearable stack-label="Format Model 'string'" format-model="string" />

      <q-datetime :value="model" @change="val => { model = val; log('@change', val) }" @input="value => log('@input', value)" type="date" clearable />

      <q-datetime minimal v-model="model" type="time" />

      <div class="caption">Time 24hr Format (force)</div>
      <q-datetime minimal v-model="model" type="time" format24h />

      <div class="caption">Date & Time</div>
      <q-datetime minimal @change="value => log('@change', value)" v-model="model" type="datetime" />

      <div class="caption">Default Selection</div>
      <q-datetime v-model="model" :default-value="defaultValue" type="datetime" />
      <q-datetime v-model="model" :default-value="defaultValue" type="time" />

      <div class="caption">With explicit popover</div>
      <q-datetime v-model="model" popover type="date" float-label="Pick Date" />
      <q-datetime v-model="model" popover type="time" float-label="Pick Time" />
      <q-datetime v-model="model" popover type="datetime" float-label="Pick DateTime" />

      <div class="caption">With explicit modal</div>
      <q-datetime v-model="model" modal type="date" float-label="Pick Date" />
      <q-datetime v-model="model" modal type="time" float-label="Pick Time" />
      <q-datetime v-model="model" modal type="datetime" float-label="Pick DateTime" />

      <div class="caption">With Label</div>
      <q-datetime v-model="model" type="date" label="Pick Date" />

      <div class="caption">With Placeholder</div>
      <q-datetime v-model="model" type="date" placeholder="Pick Date" />

      <div class="caption">With Static Label</div>
      <q-datetime v-model="model" type="date" static-label="Party Date" />

      <div class="caption">Disabled State</div>
      <q-datetime disable v-model="model" type="datetime" />

      <div class="caption">Error State</div>
      <q-datetime error v-model="model" type="datetime" />

      <div class="caption">Min & Max</div>
      <q-datetime type="datetime" v-model="minMaxModel" :min="min" :max="max" />

      <div class="caption">Inside of a List</div>
      <q-list>
        <q-list-header>Date or Time</q-list-header>
        <q-item>
          <q-item-side icon="access_time" />
          <q-item-main>
            <q-datetime v-model="model" type="time" />
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side icon="update" />
          <q-item-main>
            <q-datetime v-model="model" type="date" />
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-list-header>Date & Time</q-list-header>
        <q-item>
          <q-item-side icon="notifications" />
          <q-item-main>
            <q-datetime v-model="model" type="datetime" />
          </q-item-main>
        </q-item>
      </q-list>

      <q-datetime-picker v-model="model" type="date" @change="value => log('@change', value)" @input="value => log('@input', value)" />
      <br><br>
      <q-datetime-picker default-view="year" :value="model" type="date" @change="value => { model = value; log('@change', value) }" @input="value => log('@input', value)" />

      <q-datetime-picker v-model="model" type="time" />

      <q-datetime v-model="model" type="datetime" />
      <div class="bg-black q-pa-md">
        <q-datetime dark v-model="model" type="datetime" />
        <q-datetime-picker class="q-my-md" dark v-model="model" type="datetime" />
        <q-datetime-picker class="q-my-md" dark color="primary" v-model="model" type="datetime" />
        <q-datetime-picker class="q-my-md" dark color="secondary" v-model="model" type="datetime" />
        <q-datetime-picker class="q-my-md" dark color="amber" v-model="model" type="datetime" />
      </div>

      <div class="caption">Time 24hr Format (force)</div>
      <q-datetime-picker v-model="model" type="time" format24h />

      <div class="caption">Date & Time</div>
      @input<q-datetime-picker @input="value => log('@input', value)" @change="value => log('@change', value)" color="secondary" v-model="model" type="datetime" />
      @change<q-datetime-picker :value="model" @input="value => log('@input', value)" @change="value => { model = value; log('@change', value) }" color="secondary" type="datetime" />

      <div class="caption">Date - Monday as First</div>
      <q-datetime-picker v-model="model" :first-day-of-week="1" type="date" />
      <div class="caption">Date - Saturday as First</div>
      <q-datetime-picker v-model="model" :first-day-of-week="6" type="date" />

      <div class="caption">Disabled State</div>
      <q-datetime-picker disable v-model="model" type="datetime" />

      <div class="caption">Readonly State</div>
      <q-datetime-picker readonly v-model="model" type="datetime" />
      <div class="caption">Min & Max</div>
      <q-datetime-picker type="datetime" v-model="minMaxModel" :min="min" :max="max" />
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'

const day = '2016-10-24T10:40:14.674Z'

export default {
  data () {
    return {
      model: '2016-09-18T10:45:00.000Z',
      // model: undefined,
      modelVar: undefined,
      // model: 0,
      defaultValue: '2016-09-18T10:45:00.000Z',

      format: 'MMMM D, YYYY [at] h:mm [[]a[\\]]',

      minMaxModel: date.formatDate(day),

      min: date.subtractFromDate(day, {days: 5}),
      max: date.addToDate(day, {days: 4, month: 1, minutes: 10})
    }
  },
  computed: {
    modelFormatted () {
      return date.formatDate(this.model, this.format)
    },
    modelVarFormatted () {
      return date.formatDate(this.modelVar, this.format)
    },
    modelVarType () {
      return typeof this.modelVar
    }
  },
  methods: {
    log (name, data) {
      console.log(name, JSON.stringify(data))
    }
  }
}
</script>
