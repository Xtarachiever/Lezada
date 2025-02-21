<template>
  <div>
    <button :class="[variant ? variant : 'blackButton', moreStylings]" :type="type ? type : 'button'">
      <v-icon :name="iconName" v-if="iconName"></v-icon>
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['name', 'type', 'variant','moreStylings','iconName'],
}
</script>

<style>
.blackButton {
  background: #333;
  color: white;
  padding: 10px 40px;
}
</style>
