export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn) {
    return navigateTo({
      path: "/sign-in",
      query: { redirect: to.fullPath },
    });
  }
});
