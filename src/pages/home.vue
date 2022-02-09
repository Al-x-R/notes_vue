<template>
<div class="wrapper">
  <div class="container">
    <HelloWorld msg="Welcome" />
    <Form />
    <List :items="notes" />
  </div>
</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Form from '../components/Notes/Form';
import List from '../components/Notes/List';
export default {
  name: 'home',
  components: {
    List,
    Form,
    HelloWorld
  },
  data() {
    return {
      notes: ['task1', 'task2', 'task3']
    }
  }
};
</script>

<style scoped>

</style>