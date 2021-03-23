<template>
  <div>
    <h3 class="mt-2 text-left">Users</h3>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">username</th>
              <th scope="col">id</th>
              <th scope="col">role</th>
              <th scope="col">active</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id" class="table-secondary">
              <th scope="row">{{user.username}}</th>
              <td>{{user._id}}</td>
              <td>{{user.role}}</td>
              <td>
                <button
                  @click="deActive()"
                  class="btn"
                  :class="user.active ? 'btn-success' : 'btn-danger'">
                  {{user.active}}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>
<script>
const API_URL_USERS = 'http://localhost:5000/api/v1/users/';

export default {
  data: () => ({
    users: [],
  }),
  async mounted() {
    const response = await fetch(API_URL_USERS, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    const users = await response.json();
    this.users = users;
  },
};
</script>
