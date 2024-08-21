<script setup>
</script>

<template>
    <footer class="bg-light-secondary dark:bg-dark-secondary py-12">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div class="flex items-center space-x-6">
                    <!-- Imagen -->
                    <img class="h-8 w-auto" img :src="logo" alt="laraveller.com" />

                    <!-- Texto de derechos de autor -->
                    <p class="text-opacity-80 text-[15px] text-light-primary dark:text-white">
                        &copy; 2024 Jorge Alexander Mora
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  data() {
    return {
      logo: '/images/logo.png'
    }
  }
}
</script>

