<template>
  <div>
    <h2>Home</h2>
    <nav>
      <router-link to="/home/users">Registered Users</router-link>
      <router-link to="/home/company-info">Company Info</router-link>
      <router-link to="/home/movies">Movie List</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>
