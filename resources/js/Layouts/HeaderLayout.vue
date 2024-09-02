<script setup>
import { ref } from 'vue';
const showMobileMenu = ref(false);
</script>

<template>
    <nav class="bg-light-navy-20 dark:bg-black border-light-navy-20 dark:border-black text-light-primary dark:text-white p-6">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="logo" class="h-14" alt="Desarrollo Logo" />
                <span class="self-center text-3xl font-bold whitespace-nowrap text-light-primary dark:text-white">Jorge Mora</span>
            </a>
            <button @click="showMobileMenu = !showMobileMenu" type="button"
                class="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" :aria-expanded="showMobileMenu.toString()">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }" class="w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col md:flex-row md:space-x-10 rtl:space-x-reverse mt-4 md:mt-0 p-0 border border-gray-100 rounded-lg md:border-0 dark:bg-black dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="flex items-center py-3 px-5 text-light-primary dark:text-white bg-light-tail-200 dark:bg-dark-navy-100 rounded-md font-bold text-xl md:text-2xl relative group transform transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white">
                            <span>Home</span>
                            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center py-3 px-5 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-blue-200 focus:outline-none active:bg-blue-300 relative group transform transition-transform duration-500 hover:rotate-6 hover:scale-105 text-xl md:text-2xl">
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center py-3 px-5 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-blue-200 focus:outline-none active:bg-blue-300 relative group transform transition-transform duration-500 hover:rotate-6 hover:scale-105 text-xl md:text-2xl">
                            <span>Services</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center py-3 px-5 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-blue-200 focus:outline-none active:bg-blue-300 relative group transform transition-transform duration-500 hover:rotate-6 hover:scale-105 text-xl md:text-2xl">
                            <span>Pricing</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center py-3 px-5 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:bg-blue-200 focus:outline-none active:bg-blue-300 relative group transform transition-transform duration-500 hover:rotate-6 hover:scale-105 text-xl md:text-2xl">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Estilos para la selección de texto */
::selection {
    background-color: #c7d2fe; /* Color de fondo de la selección en modo claro */
    color: #000000; /* Color del texto de la selección en modo claro */
}

.dark ::selection {
    background-color: #1f2937; /* Color de fondo de la selección en modo oscuro */
    color: #e5e7eb; /* Color del texto de la selección en modo oscuro */
}

/* Agrega animaciones con @keyframes si es necesario */
@keyframes rotate {
    0% { transform: rotate(0); }
    50% { transform: rotate(15deg); }
    100% { transform: rotate(0); }
}

@keyframes scale {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
</style>

<script>
export default {
    data() {
        return {
            logo: '/images/logo.png'
        }
    }
}
</script>
