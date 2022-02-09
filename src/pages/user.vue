<template>
  <div>
    <p>{{ getUser.name }}</p>
    <p>{{ getUser.admin ? 'is Admin' : 'not admin' }}</p>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      userId: this.$route.params.id
    };
  },
  computed: {
    getUser() {
      const id = this.userId;
      return this.$store.getters.getUserById(id);
    },
  }
};
</script>

<style scoped>

</style>