import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as any,
    token: null as string | null,
    isLoggedIn: false,
  }),
  actions: {
    // Đăng ký
    async register(name: string, email: string, password: string) {
      const config = useRuntimeConfig();

      try {
        const response: any = await $fetch(
          `${config.public.apiBase}/auth/register`,
          {
            method: "POST",
            body: { name, email, password },
          }
        );

        this.user = response;
        this.token = response.token;
        this.isLoggedIn = true;

        const tokenCookie = useCookie("token");
        const userCookie = useCookie("user");
        tokenCookie.value = response.token;
        userCookie.value = JSON.stringify(response);

        return { success: true, data: response };
      } catch (error: any) {
        return {
          success: false,
          error: error.data?.message || error.message || "Đăng ký thất bại",
        };
      }
    },

    // Đăng nhập
    async login(email: string, password: string) {
      const config = useRuntimeConfig();

      try {
        const response: any = await $fetch(
          `${config.public.apiBase}/auth/login`,
          {
            method: "POST",
            body: { email, password },
          }
        );

        this.user = response;
        this.token = response.token;
        this.isLoggedIn = true;

        const tokenCookie = useCookie("token");
        const userCookie = useCookie("user");
        tokenCookie.value = response.token;
        userCookie.value = JSON.stringify(response);

        return { success: true, data: response };
      } catch (error: any) {
        return {
          success: false,
          error: error.data?.message || error.message || "Đăng nhập thất bại",
        };
      }
    },
    // Đăng xuất
    logout() {
      this.user = null;
      this.token = null;
      this.isLoggedIn = false;

      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");
      tokenCookie.value = null;
      userCookie.value = null;

      navigateTo("/");
    },

    // Khôi phục session
    initAuth() {
      const tokenCookie = useCookie("token");
      const userCookie = useCookie("user");

      if (tokenCookie.value && userCookie.value) {
        try {
          this.token = tokenCookie.value;
          this.user = JSON.parse(userCookie.value as string);
          this.isLoggedIn = true;
        } catch (error) {
          this.logout();
        }
      }
    },
  },
  getters: {
    getUserName: (state) => state.user?.name || "Guest",
    getUserEmail: (state) => state.user?.email || "",
    getUserRole: (state) => state.user?.role || "USER",
  },
});
