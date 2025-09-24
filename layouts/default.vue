<template>
  <div class="relative min-h-screen">
    <div class="fixed left-0 right-0 z-11 w-full">
      <LayoutHeader />
    </div>
    <div class="relative top-17.5 sm:top-29.5 md:top-35.5 right-0 left-0 w-full">
      <slot />
      <LayoutFooter />
    </div>
  </div>
</template>
