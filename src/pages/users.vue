<template>
  <div v-for="user in getUsers" :key="user.id">
   <router-link :to="{ name: 'user', params: { id: user.id } }">
    <p>{{ user.name }} {{ user.admin ? '- is admin' : '- not admin' }}</p>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'users',
  computed: {
    getUsers() {
      return this.$store.getters.getAllUsers;
    },
  }
};
</script>

<style scoped>

</style>