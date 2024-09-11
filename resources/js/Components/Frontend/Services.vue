<script setup>
</script>
<template>
    <section id="services" class="section dark:border-dark-navy-100 py-12">
        <div class="container mx-auto max-w-4xl px-4">
            <!-- Sección de Títulos y Descripción -->
            <div class="flex flex-col items-center text-center mb-12">
                <h2 class="mb-3 text-4xl lg:text-5xl text-accent text-indigo-600" style="font-family: 'Poppins', sans-serif;">
                    Qué hago para los clientes
                </h2>
                <br>
                <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                    Como ingeniero de software, me dedico a diseñar y desarrollar soluciones tecnológicas que permiten a las empresas optimizar sus procesos y alcanzar sus objetivos con mayor eficiencia.
                    Desde la creación de aplicaciones web y móviles personalizadas hasta la integración de sistemas complejos,
                    trabajo estrechamente con mis clientes para entender sus necesidades y ofrecerles soluciones robustas, escalables y seguras.
                    Mi enfoque se centra en la calidad, la innovación y la satisfacción del cliente, asegurando que cada proyecto entregue un valor tangible y sostenible.
                </p>
            </div>
            <!-- Tarjetas -->
            <div class="grid lg:grid-cols-4 gap-8">
                <!-- Tarjeta 1: Web Design (Azul) -->
                <div class="bg-[#c7d2fe] dark:bg-indigo-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <!-- Ícono Realista para Web Design -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M3 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm2 0v16h14V4H5zM4 6h14v10H4V6z"/>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Web Design
                    </h4>
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                        Diseño y desarrollo de interfaces web adaptadas a las necesidades del cliente.
                    </p>
                </div>
                <!-- Tarjeta 2: Desarrollo de Software (Verde) -->
                <div class="bg-[#d4f8d4] dark:bg-green-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <!-- Ícono Realista para Desarrollo de Software -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M4 6h16M4 12h16M4 18h16M4 6h16M4 18h16M4 12h16M8 6h8m-8 6h8m-8 6h8"/>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Desarrollo de Software
                    </h4>
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                        Creación de soluciones personalizadas con enfoque en la eficiencia y escalabilidad.
                    </p>
                </div>
                <!-- Tarjeta 3: Mantenimiento (Dorado) -->
                <div class="bg-[#f8e5a0] dark:bg-yellow-600 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <!-- Ícono Realista para Mantenimiento -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M4 10v6M4 10l-2-2m2 2l2-2m2 12V6m0 16h12M8 6v12m4-12v12m4-12v12"/>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Mantenimiento
                    </h4>
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                        Soporte y mantenimiento de aplicaciones para asegurar su correcto funcionamiento.
                    </p>
                </div>
                <!-- Tarjeta 4: Consultoría (Azul claro) -->
                <div class="bg-[#d0e7ff] dark:bg-blue-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <!-- Ícono Realista para Consultoría -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M12 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm8-2h-2c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2zm-4 4c0 2.21 1.79 4 4 4h2c0-2.21-1.79-4-4-4h-2zm0 0H8v-2h2v2z"/>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Consultoría
                    </h4>
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style="font-family: 'Poppins', sans-serif;">
                        Asesoría para mejorar la estrategia tecnológica y optimizar recursos.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
