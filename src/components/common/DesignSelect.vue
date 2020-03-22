<template>
  <div
    :class="['group_select', attribute.className ? attribute.className : '']"
  >
    <label for="category" class="label_local">
      <span class="text_local">{{ category.text }}</span>
      <span class="icon_global icon_arrow"></span>
    </label>

    <select
      name="category"
      class="select_local"
      @change="onChange"
      v-model="category.value"
    >
      <optgroup
        v-for="(item, index) in select.data"
        :label="`${item.optgroup.text}`"
        :key="index"
      >
        <option
          v-for="(item, index) in select.data[index].optgroup.option"
          :value="item.value"
          :key="index"
          >{{ item.text }}</option
        >
      </optgroup>
    </select>
  </div>
  <!-- // group_select -->
</template>

<script>
export default {
  name: 'DesignSelect',
  props: {
    attribute: {
      type: Object,
      required: true
    },
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

    this.onChange()
  },
  methods: {
    onChange() {
      loop: for (let i in this.select.data) {
        for (let j in this.select.data[i].optgroup.option) {
          if (
            this.category.value === this.select.data[i].optgroup.option[j].value
          ) {
            // console.log(`[Select.vue] ${i}. methods() → onChange() → this.select.data[${i}].optgroup.option[${j}].text: `, this.select.data[i].optgroup.option[j].text)

            this.category.text = this.select.data[i].optgroup.option[j].text
            // console.log('[Select.vue] methods() → onChange() → this.category.text: ', this.category.text)

            this.category.value = this.select.data[i].optgroup.option[j].value
            // console.log('[Select.vue] methods() → onChange() → this.category.value: ', this.category.value)

            break loop
          }
        }
      }

      console.log(
        '[Select.vue] methods() → onChange() → this.category: ',
        this.category
      )

      this.$emit('parentChange', this.category)
    }
  }
}
</script>
