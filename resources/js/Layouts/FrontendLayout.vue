<script setup>
import Footer from '@/Components/Frontend/Footer.vue';
import HeaderLayout from '@/Components/Frontend/Header.vue';
</script>
<template>
<div class="bg-slate-200 dark:bg-black">
    <!--Header-->
    <HeaderLayout />
    <main class="min-h-screen">
        <slot />
    </main>
    <!--Footer-->
    <Footer />

</div>
</template>
