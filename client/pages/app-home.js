AppHome = {
  template: `
      <main>
        <the-title :title="title"></the-title>

        <the-loading v-if="loading"></the-loading>

        <div class="users-container" v-else>
          <ul>
            <li v-for="user in users" :key="user.id" class="user-item" > 
              <div>
                <img :src="user.avatar" :alt="user.first_name" />
              </div>
              <div>
                <p>{{user.first_name}} {{user.last_name}}</p>
                <span>{{user.email}}</span>
              </div>
              <router-link :to="/client/ + user.id" >
                INFO
              </router-link>
            </li>
          </ul>
        </div>
      </main>
      `,
  data() {
    return {
      users: null,
      loading: null,
      title: "Lista de Clientes",
    };
  },
  methods: {
    async fetchClients() {
      try {
        this.loading = true;
        const BASE_URL = "http://localhost:3000/api/clients";
        const response = await fetch(BASE_URL);
        const data = await response.json();

        this.users = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted: function () {
    this.fetchClients();
  },
};

Vue.component("app-home", AppHome);
