<template>
    <section class="section dark:border-dark-navy-100 py-12">
        <div class="container mx-auto max-w-4xl px-4">
            <!-- Sección de Títulos y Descripción -->
            <div class="flex flex-col items-center text-center mb-12">
                <h2 class="section-title block text-indigo-600 text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                    Qué hago para los clientes
                </h2>
                <p class="subtitle text-lg text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <!-- Tarjetas -->
            <div class="grid lg:grid-cols-4 gap-8">
              <!-- Tarjeta 1: Web Design (Azul) -->
              <div class="bg-[#c7d2fe] dark:bg-indigo-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M3 3h18v18H3V3z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 9h18M3 15h18" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Web Design
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300">
                        Diseño y desarrollo de interfaces web adaptadas a las necesidades del cliente.
                    </p>
                </div>
                <!-- Tarjeta 2: Desarrollo de Software (Verde) -->
                <div class="bg-[#d4f8d4] dark:bg-green-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M6 4h12v16H6V4zm2 2v12h8V6H8z" />
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Desarrollo de Software
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300">
                        Creación de soluciones personalizadas con enfoque en la eficiencia y escalabilidad.
                    </p>
                </div>
                <!-- Tarjeta 3: Mantenimiento (Dorado) -->
                <div class="bg-[#f8e5a0] dark:bg-yellow-600 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M13 4a1 1 0 00-1 1v3h-3a1 1 0 00-1 1v3a1 1 0 001 1h3v3a1 1 0 001 1h3a1 1 0 001-1v-3h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3V5a1 1 0 00-1-1h-3z" />
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Mantenimiento
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300">
                        Soporte y mantenimiento de aplicaciones para asegurar su correcto funcionamiento.
                    </p>
                </div>
                <!-- Tarjeta 4: Consultoría (Azul claro) -->
                <div class="bg-[#d0e7ff] dark:bg-blue-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
                    <div class="text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center mb-6 text-[28px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M6 2h12v20H6V2zm2 2v16h8V4H8z" />
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Consultoría
                    </h4>
                    <p class="text-gray-700 dark:text-gray-300">
                        Asesoría para mejorar la estrategia tecnológica y optimizar recursos.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
