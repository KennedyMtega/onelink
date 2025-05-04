export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt', '@nuxtjs/color-mode'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
        preference: 'light',
        fallback: 'light',
        storageKey: 'onelink-color-mode'
    },
})
