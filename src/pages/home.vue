<template>
<div class="wrapper">
  <div class="container">
    <HelloWorld msg="Welcome" />
    <Form />
  </div>
</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Form from '../components/Notes/Form';
export default {
  name: 'home',
  components: {
    Form,
    HelloWorld
  }
};
</script>

<style scoped>

</style>