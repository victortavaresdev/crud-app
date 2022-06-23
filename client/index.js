const Home = { template: "<app-home />" };
const Client = { template: "<app-client />" };
const Create = { template: "<app-create />" };

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/client/:id",
    component: Client,
  },
  {
    path: "/create-client",
    component: Create,
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router: router,
});
