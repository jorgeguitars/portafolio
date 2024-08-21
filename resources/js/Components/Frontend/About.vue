<template>
    <section id="about" class="bg-hero-light dark:bg-hero-dark py-32 dark:bg-black">
        <div class="container mx-auto">
            <div class="flex flex-col xl:flex-row gap-24 items-center xl:items-start">
                <div class="flex justify-center xl:justify-start w-full">
          <img :src="work" class="object-cover max-w-[1132px] w-full h-auto rounded-2xl" alt="Profile" />
        </div>
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div class="flex flex-col">
                        <h2 class="block text-indigo-600 text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                            Sobre mí
                        </h2>
                        <p
                            class="mb-3 text-2xl lg:text-3xl mb-4 text-accent text-light-primary dark:text-white dark:text-custom-light">
                            Desarrollador Web</p>
                        <hr class="mb-3 opacity-90 dark:opacity-5" />
                        <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            ¡Hola! Soy un desarrollador web con una sólida experiencia en la creación de sitios web y
                            aplicaciones funcionales y atractivas.
                            Mi objetivo es unirme a un equipo dinámico donde pueda aplicar mis habilidades técnicas y mi
                            pasión por el desarrollo web para contribuir al éxito de la empresa. <br />
                            <br />
                        </p>
                        <p
                            class="mb-3 text-2xl lg:text-3xl mb-4 text-accent text-light-primary dark:text-white dark:text-custom-light">
                            Mi enfoque</p>
                        <hr class="mb-3 opacity-90 dark:opacity-5" />
                        <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            Me especializo en el desarrollo tanto frontend como backend,
                            utilizando tecnologías modernas como HTML5, CSS3, JavaScript y frameworks como React y
                            Angular para el frontend, y Node.js,
                            Django y Laravel para el backend.
                            Estoy comprometido con el aprendizaje continuo y la adaptación a nuevas tecnologías para
                            asegurarme de que mis habilidades estén siempre actualizadas.<br /><br />
                        </p>
                        <p class="mb-3 text-2xl lg:text-3xl mb-4 text-accent text-light-primary dark:text-white">¿Por
                            qué Elegirme?</p>
                        <hr class="mb-3 opacity-90 dark:opacity-5" />
                        <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            Soy una persona comprometida, detallista y siempre busco mantenerme actualizado con las
                            últimas tendencias y tecnologías en el desarrollo web.
                            Mi objetivo es ofrecer soluciones a medida que no solo cumplan con los requisitos técnicos,
                            sino que también aporten valor y mejoren la experiencia del usuario.
                            Estoy entusiasmado por la oportunidad de aportar mis habilidades y conocimientos a un equipo
                            de desarrollo web innovador y colaborativo.
                            Si estás buscando un desarrollador web dedicado y creativo, ¡me encantaría hablar
                            contigo!.<br />
                        </p>
                    </div>
                </div>
                <div>
                <button class="btn btn-md md:btn-lg transition-all bg-dark-blue text-white rounded-full">
                        Contactame!!
              </button>
            </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
  .bg-dark-blue {
    background-color: #002FA7; /* Azul oscuro */
}
button:hover {
    background-color: #03C03C ; /* Azul más claro al pasar el ratón */
}

</style>

<script>
    export default {
        data() {
            return {
                work: '/images/work.jpeg',
            }
        }
    }
</script>
