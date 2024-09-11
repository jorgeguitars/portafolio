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
                <h2 class="mb-3 text-4xl lg:text-5xl text-accent text-indigo-600"
                    style="font-family: 'Poppins', sans-serif;">
                    Mi último trabajo
                </h2>
                <br>
                <section class="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">

                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                        style="font-family: 'Poppins', sans-serif;">
                        En mi último rol, presté servicios profesionales en el desarrollo de software para la
                        implementación y el mantenimiento adaptativo y evolutivo de los módulos de <strong>ELECTRICOS Y
                            ELECTRÓNICOS RPCAEE</strong> y  <strong>EXPORTADORES
                            POLICÍA ANTINARCÓTICOS</strong> en la <strong>Ventanilla Única de Comercio Exterior
                            (VUCE)</strong>. Este proyecto fue crucial para la optimización y modernización de los
                        procesos de comercio exterior.
                    </p>

                    <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
                        style="font-family: 'Poppins', sans-serif;">
                        Responsabilidades y logros
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"
                                style="font-family: 'Poppins', sans-serif;">
                                Desarrollo de módulos
                            </h4>
                            <p class="text-gray-700 dark:text-gray-300" style="font-family: 'Poppins', sans-serif;">
                                Implementé y mantuve módulos específicos dentro del sistema VUCE, asegurando que se
                                ajustaran a los requisitos técnicos y regulatorios del comercio exterior.
                            </p>
                        </div>
                        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"
                                style="font-family: 'Poppins', sans-serif;">
                                Mantenimiento adaptativo
                            </h4>
                            <p class="text-gray-700 dark:text-gray-300" style="font-family: 'Poppins', sans-serif;">
                                Realicé ajustes y mejoras continuas para adaptar el sistema a los cambios en la
                                normativa y las necesidades emergentes de los usuarios.
                            </p>
                        </div>
                        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"
                                style="font-family: 'Poppins', sans-serif;">
                                Evolución del software
                            </h4>
                            <p class="text-gray-700 dark:text-gray-300" style="font-family: 'Poppins', sans-serif;">
                                Desarrollé nuevas funcionalidades para mejorar la eficiencia y la usabilidad del
                                sistema, incorporando tecnologías modernas para optimizar el rendimiento y la seguridad.
                            </p>
                        </div>
                        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"
                                style="font-family: 'Poppins', sans-serif;">
                                Colaboración
                            </h4>
                            <p class="text-gray-700 dark:text-gray-300" style="font-family: 'Poppins', sans-serif;">
                                Trabajé estrechamente con otros desarrolladores, analistas y stakeholders para
                                garantizar una integración fluida y un alto nivel de satisfacción del cliente.
                            </p>
                        </div>
                    </div>

                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
                        style="font-family: 'Poppins', sans-serif;">
                        Este trabajo me permitió aplicar mis habilidades en desarrollo de software y gestión de
                        proyectos, mientras contribuía a la mejora de un sistema clave para el comercio exterior.
                    </p>
                </section>

            </div>
            <br>
        </div>
        <!-- Utiliza el componente importado -->
        <Projects :skills="skills" :projects="projects" />
    </section>
</template>
