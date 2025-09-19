export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("token");
  const config = useRuntimeConfig();

  const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    };

    if (token.value) {
      headers.Authorization = `${token.value}`;
    }

    try {
      const response = await fetch(`${config.public.API_URL}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  return {
    provide: {
      api: apiFetch,
    },
  };
});
