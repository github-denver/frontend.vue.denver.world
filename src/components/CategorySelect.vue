<!-- prettier-ignore -->
<template>
  <section>
    <div class="select_global">
      <label for="select" class="label_local">
        <span class="text_local">{{ category.text }}</span>
        <span class="ico_global ico_arrow"></span>
      </label>

      <select name="category" class="select_local" v-on:change="onChange" v-model="category.value">
        <optgroup v-for="(item, index) in select.data" v-bind:label="`${item.optgroup.text}`" v-bind:key="index">
          <option v-for="(item, index) in select.data[index].optgroup.option" v-bind:value="item.value" v-bind:key="index">{{ item.text }}</option>
        </optgroup>
      </select>
    </div><!-- // select_global -->
  </section>
</template>

<script>
// prettier-ignore
export default {
  name: 'CategorySelect',
  props: {
    select: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      category: {
        text: '',
        value: ''
      }
    }
  },
  created() {
    this.category.value = this.select.category
    console.log('[CategorySelect.vue] created() → this.category.value: ', this.category.value)

    this.onChange()
  },
  methods: {
    onChange() {
      console.log('[CategorySelect.vue] methods() → onChange() → this.category.value: ', this.category.value)
      console.log('[CategorySelect.vue] methods() → onChange() → this.category.text: ', this.category.text)

      loop: for (let i in this.select.data) {
        for (let j in this.select.data[i].optgroup.option) {
          if (this.category.value === this.select.data[i].optgroup.option[j].value) {
            console.log(`[CategorySelect.vue] ${i}. methods() → onChange() → this.select.data[${i}].optgroup.option[${j}].text: `, this.select.data[i].optgroup.option[j].text)

            this.category.text = this.select.data[i].optgroup.option[j].text
            console.log('[CategorySelect.vue] methods() → onChange() → this.category.text: ', this.category.text)

            this.category.value = this.select.data[i].optgroup.option[j].value
            console.log('[CategorySelect.vue] methods() → onChange() → this.category.value: ', this.category.value)

            break loop
          }
        }
      }

      console.log('[CategorySelect.vue] methods() → onChange() → this.category: ', this.category)

      this.$emit('parentChange', this.category)
    }
  }
}
</script>
