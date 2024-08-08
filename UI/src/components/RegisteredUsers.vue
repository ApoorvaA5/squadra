<template>
    <div>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Profession</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.profession }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="editingUser">
        <h3>Edit User</h3>
        <form @submit.prevent="updateUser">
          <div>
            <label>Name</label>
            <input type="text" v-model="editingUser.name">
          </div>
          <div>
            <label>Phone</label>
            <input type="text" v-model="editingUser.phone">
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        editingUser: null
      };
    },
    async created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        const response = await axios.get('http://localhost:3000/api/users');
        this.users = response.data;
      },
      editUser(user) {
        this.editingUser = { ...user };
      },
      async updateUser() {
        await axios.put(`http://localhost:3000/api/users/${this.editingUser._id}`, {
          name: this.editingUser.name,
          phone: this.editingUser.phone
        });
        this.fetchUsers();
        this.editingUser = null;
      },
      async deleteUser(id) {
        await axios.delete(`http://localhost:3000/api/users/${id}`);
        this.fetchUsers();
      }
    }
  };
  </script>
  