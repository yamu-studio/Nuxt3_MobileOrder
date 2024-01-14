export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["assets/scss/index.scss", "@fortawesome/fontawesome-free/css/all.css"],
  modules: [
    // '@nuxt/test-utils/module'
    [
      "@pinia/nuxt",
      "@pinia-plugin-persistedstate/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  piniaPersistedState: {
    storage: "localStorage",
    debug: true,
  },
  imports: {
    dirs: ["stores"],
  },
});
