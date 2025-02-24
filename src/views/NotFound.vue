<template>
  <div class="bg-[url('/not-found.jpg')] h-[100vh] relative pl-7 pt-8">
    <RouterLink to="/">
      <img src="/logo.png" alt="Logo"/>
    </RouterLink>
    <div class="absolute top-[50%] -translate-y-[50%] left-[10%]">
      <div class="w-fit text-center">
        <p class="text-7xl text-lightBlack">Oops!</p>
        <p class="text-7xl py-6 text-lightBlack">Page not found!</p>
        <div class="flex gap-[5px] justify-center pt-6">
          <p>PLEASE GO BACK TO </p>
          <RouterLink to="/">
            <span class="underline">HOMEPAGE</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
