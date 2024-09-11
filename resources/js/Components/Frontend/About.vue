<template>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <section id="about" class="bg-hero-light dark:bg-hero-dark py-32 dark:bg-black">
        <div class="container mx-auto px-4">
            <div class="flex flex-col xl:flex-row gap-24 items-center xl:items-start">
                <div class="flex justify-center w-full xl:w-1/2">
                    <img :src="work" class="object-cover w-full h-auto rounded-2xl xl:max-w-screen-lg"
                        alt="Profile" />
                </div>

                <div class="flex flex-col items-center text-center xl:items-start xl:text-left xl:w-1/2">
                    <h2 class="mb-3 text-4xl lg:text-5xl text-accent text-indigo-600 font-poppins">
                        Sobre mí
                    </h2>
                    <p
                        class="mb-3 text-2xl lg:text-3xl mb-4 text-accent text-light-primary dark:text-white font-poppins">
                        Desarrollador Web
                    </p>
                    <hr class="mb-3 opacity-90 dark:opacity-5" />
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                        ¡Hola! Soy un desarrollador web con una sólida experiencia en la creación de sitios web y
                        aplicaciones funcionales y atractivas.
                        Mi objetivo es unirme a un equipo dinámico donde pueda aplicar mis habilidades técnicas y mi
                        pasión por el desarrollo web para contribuir al éxito de la empresa. <br /><br />
                    </p>
                    <p
                        class="mb-3 text-2xl lg:text-3xl mb-4 text-accent text-light-primary dark:text-white font-poppins">
                        Mi enfoque
                    </p>
                    <hr class="mb-3 opacity-90 dark:opacity-5" />
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                        Soy especialista en desarrollo tanto frontend como backend, utilizando tecnologías modernas como
                        HTML5, CSS3 y JavaScript. En el frontend, trabajo con frameworks como React y Angular,
                        mientras que en el backend me especializo en Node.js, Laravel y PHP.
                        Estoy comprometido con el aprendizaje continuo y la adaptación a nuevas tecnologías,
                        asegurándome de que mis habilidades siempre estén actualizadas.<br /><br />
                    </p>
                    <p
                        class="mb-3 text-2xl lg:text-3xl mb-4 text-accent text-light-primary dark:text-white font-poppins">
                        ¿Por qué Elegirme?
                    </p>
                    <hr class="mb-3 opacity-90 dark:opacity-5" />
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                        Soy una persona comprometida, detallista y siempre busco mantenerme actualizado con las últimas
                        tendencias y tecnologías en el desarrollo web.
                        Mi objetivo es ofrecer soluciones a medida que no solo cumplan con los requisitos técnicos, sino
                        que también aporten valor y mejoren la experiencia del usuario.
                        Estoy entusiasmado por la oportunidad de aportar mis habilidades y conocimientos a un equipo de
                        desarrollo web innovador y colaborativo.
                        Si estás buscando un desarrollador web dedicado y creativo, ¡me encantaría hablar
                        contigo!.<br />
                    </p>
                    <div class="mt-6">
                        <a href="#contact"
                            class="btn btn-md md:btn-lg transition-all bg-dark-blue text-white rounded-full font-roboto">
                            ¡Contáctame!
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .bg-dark-blue {
        background-color: #002FA7;
        /* Azul oscuro */
    }

    button:hover {
        background-color: #03C03C;
        /* Verde al pasar el ratón */
    }

    .font-poppins {
        font-family: 'Poppins', sans-serif;
    }

    .font-roboto {
        font-family: 'Roboto', sans-serif;
    }
</style>

<script>
    export default {
        data() {
            return {
                work: '/images/work.jpeg',
            };
        },
    }
</script>
