<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import Hero from '@/Components/Frontend/Hero.vue';
import Promote from'@/Components/Frontend/Promote.vue';
import About from '@/Components/Frontend/About.vue';
import Skills from '@/Components/Frontend/Skills.vue';
import Portafolio from '@/Components/Frontend/Portafolio.vue';
import Services from '@/Components/Frontend/Services.vue';
import ContactMe from '@/Components/Frontend/ContactMe.vue';

defineProps({
    skills: Object,
    projects: Object
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
    <Portafolio :skills="skills" :projects="projects" />
        <!-- Services secondary color-->
    <Services />
        <!-- Contact primary-->
    <ContactMe />
    </FrontendLayout>
</template>


