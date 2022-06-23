TheHeader = {
  template: `
    <header>
      <router-link to="/">
        <img src="./assets/img/logo.png" alt="Logo" />
      </router-link>

      <router-link to="/create-client" class="header-btn">
        Registrar Cliente
      </router-link>
    </header>
    `,
};

Vue.component("the-header", TheHeader);
