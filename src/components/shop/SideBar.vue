<template>
  <div>
    <div class="">
      <div class="w-full">
        <InputDiv placeholder="Search products..." iconName="io-search"/>
      </div>
      <div>
        <p class="text-gray1 text-xl py-1 py-3">Categories</p>
        <div>
          <!-- <p class="underline">All Categories</p> -->
          <ul class="text-gray1">
            <li>All Categories</li>
            <li>Decor</li>
            <li>Fashion</li>
            <li>Men</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputDiv from '../Reuseables/InputDiv.vue';
export default {
  components:{
    InputDiv,
  }
}
</script>

<style>

</style>
