<template>
<div class="wrapper">
  <div class="container">
    <HelloWorld msg="Welcome" />
  </div>
</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script>

<style scoped>

</style>