<template>
  <div>
    <button :class="variant ? variant : 'blackButton'" :type="type ? type : 'button'">
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['name', 'type'],
}
</script>

<style>
.blackButton {
  background: #333;
  color: white;
  padding: 10px 40px;
}
</style>
