<template>
    <section id="home"
        class="lg:h-[85vh] flex items-center bg-hero-light dark:bg-hero-dark py-32 lg:py-0 overflow-hidden dark:bg-black">
        <div class="container mx-auto h-full">
            <div class="flex flex-col lg:flex-row items-center h-full pt-8">
                <div class="flex-1 flex flex-col items-center lg:items-start">
                    <p class="text-lg text-accent text-md mb-[22px] text-light-primary dark:text-white">
                        Hola, Soy Jorge!
                    </p>
                    <h1
                        class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        Soy programador de Software.
                    </h1>
                    <p class="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-light-primary dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
                        malesuada.
                    </p>
                    <button class="btn btn-md md:btn-lg transition-all bg-dark-blue text-white rounded-full">
                        Trabaja conmigo!!
                    </button>
                </div>
                <div class="flex flex-1 justify-center items-center h-full mt-8 lg:mt-0">
                    <img :src="image" alt="Logo" class="h-90 w-90 lg:h-[30rem] lg:w-[30rem] rounded-full object-cover">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    // No necesitas agregar nada aquí por ahora si no tienes lógica específica.
</script>

<style scoped>
.bg-dark-blue {
    background-color: #1e3a8a; /* Azul oscuro */
}
button:hover {
    background-color: #2563eb; /* Azul más claro al pasar el ratón */
}
/* Estilos para el header y el hero */
#main-header {
    background-color: var(--color-header-light);
    transition: background-color 0.3s;
}

#home {
    background-color: var(--color-hero-light);
    transition: background-color 0.3s;
}

@media (prefers-color-scheme: dark) {
    #main-header {
        background-color: var(--color-header-dark);
    }

    #home {
        background-color: var(--color-hero-dark);
    }
}

/* Definición de variables de colores */
:root {
    --color-header-light: #f0f0f0; /* Color claro para el header */
    --color-header-dark: #1a1a1a; /* Color oscuro para el header */
    --color-hero-light: #ffffff; /* Color claro para el hero */
    --color-hero-dark: #2c2c2c; /* Color oscuro para el hero */
}

/* Puedes ajustar estos colores según tus necesidades */
</style>

<script>
export default {
  data() {
    return {
      logo: '/images/logo.png',
      image: '/images/image.jpeg',
    }
  }
}
</script>
