<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import Hero from '@/Components/Frontend/Hero.vue';
import Promote from'@/Components/Frontend/Promote.vue';
import About from '@/Components/Frontend/About.vue';
import Skills from '@/Components/Frontend/Skills.vue';

defineProps({
    skills: Object,
});
</script>

<template>
    <Head>
        <title>Bienvenido a mi portafolio</title>
    </Head>

    <FrontendLayout>
        <!-- Hero primary -->
    <Hero />
        <!-- Promote tail-100  -->
    <Promote />
        <!-- About Secondary -->
    <About />
        <!-- Skill tail-100 -->
    <Skills :skills="skills" />
        <!-- Portafolio primary -->
        <!-- Services secondary color-->
        <!-- Contact primary-->
    </FrontendLayout>
</template>


