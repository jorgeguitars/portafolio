<template>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <section id="home"
        class="lg:h-[85vh] flex items-center bg-hero-light dark:bg-hero-dark py-32 lg:py-0 overflow-hidden dark:bg-black">
        <div class="container mx-auto h-full">
            <div class="flex flex-col lg:flex-row items-center h-full pt-8">
                <div class="flex-1 flex flex-col items-center lg:items-start">
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                        Hola, Soy Jorge!
                    </p>
                    <h1
                        class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        Soy programador de Software.
                    </h1>
                    <br>
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                        Soy programador de software con experiencia en desarrollar soluciones eficientes y escalables.
                        Mi enfoque está en crear aplicaciones que no solo cumplan con las expectativas técnicas,
                        sino que también proporcionen una excelente experiencia de usuario. Trabajo con tecnologías
                        modernas para asegurar que cada proyecto sea robusto, seguro y fácil de mantener.
                        Me apasiona enfrentar desafíos complejos y convertir ideas en realidad a través del código.
                    </p>
                    <br> <br>
                    <button class="btn btn-md md:btn-lg transition-all bg-dark-blue text-white rounded-full" style="font-family: 'Roboto', sans-serif;">
                        Trabaja conmigo!!
                    </button>
                    <br>
                </div>
                <div class="flex flex-1 justify-center items-center h-full mt-8 lg:mt-0">
                    <img :src="image" alt="Logo"
                        class="h-90 w-90 lg:h-[30rem] lg:w-[30rem] rounded-full object-cover">
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
      background-color: #002FA7; /* Azul oscuro */
    }
    button:hover {
      background-color: #03C03C; /* Verde al pasar el ratón */
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
        --color-header-light: #f0f0f0;
        /* Color claro para el header */
        --color-header-dark: #1a1a1a;
        /* Color oscuro para el header */
        --color-hero-light: #ffffff;
        /* Color claro para el hero */
        --color-hero-dark: #2c2c2c;
        /* Color oscuro para el hero */
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
