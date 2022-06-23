AppCreate = {
  template: `
        <section>
          <the-title :title="title"></the-title>

          <div v-show="message" class="message">
            <p>{{ message }}</p>
          </div>

          <div class="form-container">
            <form @submit.prevent="createClient" class="form-createclient">
              <input type="text" v-model="firstName" name="firstName" aria-label="primeiro nome" placeholder="Nome" required />
              <input type="text" v-model="lastName" name="lastName" aria-label="sobrenome" placeholder="Sobrenome" required />
              <input type="email" v-model="email" name="email" aria-label="email" placeholder="Email" required />
              <input type="text" v-model="phone" name="phone" aria-label="telefone" placeholder="Telefone" required />
              <input type="text" v-model="cpf" name="cpf" aria-label="cpf" placeholder="CPF" required />
              <input type="text" v-model="avatar" name="avatar" aria-label="avatar" placeholder="Avatar URL" required />
              <button>Criar</button>
            </form>
          </div>
        </section>
        `,
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cpf: "",
      avatar: "",
      title: "Registrar Cliente",
      message: "",
    };
  },
  methods: {
    async createClient() {
      const BASE_API = "http://localhost:3000/clients";

      const clientData = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        phone: this.phone,
        cpf: this.cpf,
        avatar: this.avatar,
      };

      const response = await fetch(BASE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phone = "";
      this.cpf = "";
      this.avatar = "";

      this.message = "Cliente cadastrado com sucesso!";
      setTimeout(() => (this.message = ""), 3000);
    },
  },
};

Vue.component("app-create", AppCreate);
