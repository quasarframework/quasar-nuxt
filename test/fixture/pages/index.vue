<template>
<div class="test">
  <div>Works!</div>
  <div>
    <q-btn color="primary" label="Btn" />
  </div>
  <div>
    <q-icon name="star" color="yellow-7" size="100px" />
    <q-search v-model="input" clearable />
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      input: 'Quasar'
    }
  }
}
</script>

<style>
.test {
  padding: 25px;
}
.test > div {
  margin-top: 15px;
}
</style>
