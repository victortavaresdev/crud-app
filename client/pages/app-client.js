AppClient = {
  template: `
      <section>
        <the-title :title="title"></the-title>

        <div class="modal-update" v-show="modalUpdate">
          <div class="modal-update-box">
            <p>Atualizar dados do cliente</p>
            <form @submit.prevent>
              <input type="text" v-model="client.first_name"  name="firstName" aria-label="primeiro nome" placeholder="Nome" required />
              <input type="text" v-model="client.last_name"  name="lastName" aria-label="sobrenome" placeholder="Sobrenome" required />
              <input type="email" v-model="client.email" name="email" aria-label="email" placeholder="Email" required />
              <input type="text" v-model="client.phone" name="phone" aria-label="telefone" placeholder="Telefone" required />
              <input type="text" v-model="client.cpf"  name="cpf" aria-label="cpf" placeholder="CPF" required />
              <input type="text" v-model="client.avatar"  name="avatar" aria-label="avatar" placeholder="Avatar URL" required />
              <div class="modal-update-btn-group">
                <button @click="updateClient(); toggleModalUpdate();">ATUALIZAR</button>
                <button @click="toggleModalUpdate">CANCELAR</button>
              </div>
            </form>
          </div>
        </div>

        <div class="modal-delete" v-show="modalDelete">
          <div class="modal-delete-box">
            <p>Tem certeza que deseja remover esse cliente?</p>
            <div class="modal-delete-btn-group">
              <button @click="deleteClient">SIM, DELETE!</button>
              <button @click="toggleModalDelete">CANCELAR</button>
            </div>
          </div>
        </div>

        <the-loading v-if="loading"></the-loading>

        <div class="user-container" v-else>
          <img src="../assets/icons/edit.png" alt="Update Icon" class="edit-icon" @click="toggleModalUpdate" />
          <img src="../assets/icons/delete.png" alt="Delete Icon" class="delete-icon" @click="toggleModalDelete" />

          <div class="user-avatar">
            <img :src="client.avatar" :alt="client.first_name" />
          </div>
          <div class="user-info">
            <p> <span>Nome:</span> {{client.first_name}} {{client.last_name}}</p>
            <p> <span>Telefone:</span> {{client.phone}}</p>
            <p> <span>CPF:</span> {{client.cpf}}</p>
            <p> <span>Email:</span> {{client.email}}</p>
          </div>
        </div>
      </section>
      `,
  data() {
    return {
      client: {},
      loading: null,
      modalUpdate: false,
      modalDelete: false,
      title: "Informações do Cliente",
    };
  },
  methods: {
    async fetchClientInfo() {
      try {
        this.loading = true;
        const clientId = this.$route.params.id;
        const BASE_URL = `http://localhost:3000/clients/${clientId}`;
        const response = await fetch(BASE_URL);
        const data = await response.json();

        this.client = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async updateClient() {
      try {
        const updatedClientData = {
          first_name: this.client.first_name,
          last_name: this.client.last_name,
          email: this.client.email,
          phone: this.client.phone,
          cpf: this.client.cpf,
          avatar: this.client.avatar,
        };
        const clientId = this.$route.params.id;
        const BASE_URL = `http://localhost:3000/clients/${clientId}`;

        const response = await fetch(BASE_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedClientData),
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteClient() {
      try {
        const clientId = this.$route.params.id;
        const BASE_URL = `http://localhost:3000/clients/${clientId}`;
        const response = await fetch(BASE_URL, {
          method: "DELETE",
        });

        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    toggleModalDelete() {
      this.modalDelete = !this.modalDelete;
    },
    toggleModalUpdate() {
      this.modalUpdate = !this.modalUpdate;
    },
  },
  mounted: function () {
    this.fetchClientInfo();
  },
};

Vue.component("app-client", AppClient);
