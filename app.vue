<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
      <UNotifications :toaster="{ position: 'top-0 right-0' }" />
    </NuxtLayout> </UApp
  >de
</template>
<script setup lang="ts">
useServerSeoMeta({});
useHead({});
</script>
