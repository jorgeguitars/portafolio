<script setup>
import Projects from './Projects.vue'; // Importa el componente

defineProps({
    skills: Object,
    projects: Object
})
</script>

<template>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <section id="portafolio" class="bg-hero-light dark:bg-hero-dark py-32 dark:bg-black">
    <div class="container mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2 class="mb-3 text-4xl lg:text-5xl text-accent text-indigo-600" style="font-family: 'Poppins', sans-serif;">
          Mi último trabajo
        </h2>
        <br>
        <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
            En mi proyecto más reciente, trabajé en [breve descripción del proyecto: qué hiciste, tecnologías utilizadas, resultados obtenidos].
            Este proyecto me permitió [destacar habilidades específicas, logros, o resultados importantes].
            Fue una experiencia enriquecedora que demuestra mi capacidad para [resaltar habilidades o competencias clave].
        </p>
      </div>
      <br>
    </div>
    <!-- Utiliza el componente importado -->
    <Projects :skills="skills" :projects="projects" />
  </section>
</template>


