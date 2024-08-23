<script setup>
import Projects from './Projects.vue'; // Importa el componente

defineProps({
    skills: Object,
    projects: Object
})
</script>

<template>
  <section id="portafolio" class="bg-hero-light dark:bg-hero-dark py-32 dark:bg-black">
    <div class="container mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2 class="section-title block text-indigo-600 text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
          Mi último trabajo
        </h2>
        <p class="subtitle text-black dark:text-white">
            En mi proyecto más reciente, trabajé en [breve descripción del proyecto: qué hiciste, tecnologías utilizadas, resultados obtenidos].
            Este proyecto me permitió [destacar habilidades específicas, logros, o resultados importantes].
            Fue una experiencia enriquecedora que demuestra mi capacidad para [resaltar habilidades o competencias clave].
        </p>
      </div>
    </div>
    <!-- Utiliza el componente importado -->
    <Projects :skills="skills" :projects="projects" />
  </section>
</template>


