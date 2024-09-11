<template>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <section id="home"
        class="lg:h-[85vh] flex items-center bg-hero-light dark:bg-hero-dark py-32 lg:py-0 overflow-hidden dark:bg-black">
        <div class="container mx-auto h-full">
            <div class="flex flex-col lg:flex-row items-center h-full pt-8">
                <div class="flex-1 flex flex-col items-center lg:items-start">
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                        style="font-family: 'Poppins', sans-serif;">
                        Hola, Soy Jorge!
                    </p>
                    <h1
                        class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        Soy programador de Software.
                    </h1>
                    <br>
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                        style="font-family: 'Poppins', sans-serif;">
                        Soy programador de software con experiencia en desarrollar soluciones eficientes y escalables.
                        Mi enfoque está en crear aplicaciones que no solo cumplan con las expectativas técnicas,
                        sino que también proporcionen una excelente experiencia de usuario. Trabajo con tecnologías
                        modernas para asegurar que cada proyecto sea robusto, seguro y fácil de mantener.
                        Me apasiona enfrentar desafíos complejos y convertir ideas en realidad a través del código.
                    </p>
                    <br> <br>
                    <a href="#contact"
                        class="btn btn-md md:btn-lg transition-all bg-dark-blue text-white rounded-full font-roboto">
                        ¡Contáctame!
                    </a>

                    <br>
                    <div class="pt-12">
                        <h5 class="text-lg items-center text-black dark:text-white mb-2">
                            Sígueme en
                        </h5>
                        <div class="flex items-center mb-6">
                            <!-- Ícono de GitHub -->
                            <a class="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 text-black hover:bg-[#6e5494] hover:border-[#6e5494] dark:hover:bg-[#6e5494] dark:hover:border-[#6e5494] mr-3 sm:mr-4"
                                href="https://github.com/jorgeguitars">
                                <svg class="w-[28px] h-[28px] text-gray-800 dark:text-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.792 8.207 11.387.6.11.793-.26.793-.578v-2.257c-3.338.725-4.043-1.417-4.043-1.417-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.239 1.84 1.239 1.07 1.834 2.807 1.304 3.492.996.109-.774.42-1.305.763-1.604-2.664-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.398 3.004-.403 1.02.005 2.047.137 3.005.403 2.292-1.553 3.299-1.23 3.299-1.23.655 1.653.243 2.873.119 3.176.768.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.92.432.372.814 1.106.814 2.228v3.293c0 .32.192.694.8.577C20.565 21.791 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>

                            <!-- Ícono de LinkedIn -->
                            <a class="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 text-black hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:border-blue-700 mr-3 sm:mr-4"
                                href="https://www.linkedin.com/in/jorge-alexander-mora/">
                                <svg class="w-[28px] h-[28px] text-gray-800 dark:text-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.852 0-2.135 1.445-2.135 2.94v5.666h-3.554V9h3.413v1.561h.048c.475-.899 1.635-1.849 3.367-1.849 3.601 0 4.266 2.37 4.266 5.452v6.288zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM6.673 20.452H3v-11.43h3.673v11.43zM22.225 0H1.771C.792 0 0 .773 0 1.728v20.543C0 23.226.793 24 1.771 24h20.451c.978 0 1.771-.774 1.771-1.729V1.728C23.997.773 23.203 0 22.225 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
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
        background-color: #002FA7;
        /* Azul oscuro */
    }

    button:hover {
        background-color: #03C03C;
        /* Verde al pasar el ratón */
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
