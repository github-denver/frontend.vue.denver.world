<template>
  <select-component :attribute="{ className: 'category' }">
    <label for="category">
      <span class="text">{{ category.text }}</span>
      <span class="icon"></span>
    </label>

    <select name="category" @change="onChange" v-model="category.value">
      <optgroup v-for="(item, index) in select.data" :label="`${item.optgroup.text}`" :key="index">
        <option v-for="(item, index) in select.data[index].optgroup.option" :value="item.value" :key="index">{{ item.text }}</option>
      </optgroup>
    </select>
  </select-component>
</template>

<script>
export default {
  name: 'Select',
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
    console.log('[Select.vue] created() → this.category.value: ', this.category.value)

    this.onChange()
  },
  methods: {
    onChange() {
      console.log('[Select.vue] methods() → onChange() → this.category.value: ', this.category.value)
      console.log('[Select.vue] methods() → onChange() → this.category.text: ', this.category.text)

      loop: for (let i in this.select.data) {
        for (let j in this.select.data[i].optgroup.option) {
          if (this.category.value === this.select.data[i].optgroup.option[j].value) {
            console.log(
              `[Select.vue] ${i}. methods() → onChange() → this.select.data[${i}].optgroup.option[${j}].text: `,
              this.select.data[i].optgroup.option[j].text
            )

            this.category.text = this.select.data[i].optgroup.option[j].text
            console.log('[Select.vue] methods() → onChange() → this.category.text: ', this.category.text)

            this.category.value = this.select.data[i].optgroup.option[j].value
            console.log('[Select.vue] methods() → onChange() → this.category.value: ', this.category.value)

            break loop
          }
        }
      }

      console.log('[Select.vue] methods() → onChange() → this.category: ', this.category)

      this.$emit('parentChange', this.category)
    }
  }
}
</script>
