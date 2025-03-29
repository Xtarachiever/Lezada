<template>
  <div>
    <button :class="[variant ? variant : 'blackButton hover:border hover:bg-transparent hover:text-lightBlack transition-all', moreStylings,'group']" :type="type ? type : 'button'">
      <v-icon :name="iconName" v-if="iconName" :class="iconColor"></v-icon>
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['name', 'type', 'variant','moreStylings','iconName','iconColor'],
}
</script>

<style>
.blackButton {
  background: #333;
  color: white;
  padding: 10px 40px;
}
</style>
