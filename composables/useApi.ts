export const useApi = () => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();

  const getHeaders = () => {
    const headers: any = {};
    if (authStore.token) {
      headers["Authorization"] = `Bearer ${authStore.token}`;
    }
    return headers;
  };

  // Products
  const getAllProducts = async () => {
    try {
      const data = await $fetch(`${config.public.apiBase}/products`);
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const getProductById = async (id: number) => {
    try {
      const data = await $fetch(`${config.public.apiBase}/products/${id}`);
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const getProductsByCategory = async (categoryId: number) => {
    try {
      const data = await $fetch(
        `${config.public.apiBase}/products/category/${categoryId}`
      );
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  // Categories
  const getAllCategories = async () => {
    try {
      const data = await $fetch(`${config.public.apiBase}/categories`);
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  // Cart
  const getCart = async () => {
    try {
      const data = await $fetch(`${config.public.apiBase}/cart`, {
        headers: getHeaders(),
      });
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const addToCart = async (productId: number, quantity: number = 1) => {
    try {
      const data = await $fetch(`${config.public.apiBase}/cart`, {
        method: "POST",
        headers: getHeaders(),
        body: { productId, quantity },
      });
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const updateCartItem = async (cartItemId: number, quantity: number) => {
    try {
      const data = await $fetch(
        `${config.public.apiBase}/cart/${cartItemId}?quantity=${quantity}`,
        {
          method: "PUT",
          headers: getHeaders(),
        }
      );
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const removeFromCart = async (cartItemId: number) => {
    try {
      const data = await $fetch(`${config.public.apiBase}/cart/${cartItemId}`, {
        method: "DELETE",
        headers: getHeaders(),
      });
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  // Wishlist
  const getWishlist = async () => {
    try {
      const data = await $fetch(`${config.public.apiBase}/wishlist`, {
        headers: getHeaders(),
      });
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const addToWishlist = async (productId: number) => {
    try {
      const data = await $fetch(
        `${config.public.apiBase}/wishlist/${productId}`,
        {
          method: "POST",
          headers: getHeaders(),
        }
      );
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const removeFromWishlist = async (productId: number) => {
    try {
      const data = await $fetch(
        `${config.public.apiBase}/wishlist/${productId}`,
        {
          method: "DELETE",
          headers: getHeaders(),
        }
      );
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  // Orders
  
  const createOrder = async (shippingAddress: string, phoneNumber: string) => {
    try {
      const data = await $fetch(`${config.public.apiBase}/orders`, {
        method: "POST",
        headers: getHeaders(),
        body: { shippingAddress, phoneNumber },
      });
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  const getMyOrders = async () => {
    try {
      const data = await $fetch(`${config.public.apiBase}/orders`, {
        headers: getHeaders(),
      });
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  };

  return {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getAllCategories,
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    createOrder,
    getMyOrders,
  };
};
