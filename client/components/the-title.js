TheTitle = {
  template: `
    <div class="title-container">
      <h1>{{ title }}</h1>
    </div>
    `,
  props: {
    title: String,
  },
};

Vue.component("the-title", TheTitle);
