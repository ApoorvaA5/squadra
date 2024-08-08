<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div>
        <label>Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" v-model="phone" required />
      </div>
      <div>
        <label>Profession:</label>
        <input type="text" v-model="profession" required />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserSignup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      phone: '',
      profession: ''
    };
  },
  methods: {
    async signup() {
      try {
        await axios.post('http://localhost:3000/api/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          profession: this.profession
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Signup failed: ' + error.message);
      }
    }
  }
};
</script>
