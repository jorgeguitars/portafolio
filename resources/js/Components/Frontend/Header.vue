<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showMobileMenu = ref(false);
const scrollBg = ref(false);
const activeIndex = ref(0);

const menuItems = [
  { name: 'Home', href: '#home', color: '#3498db' },
  { name: 'Acerca de mí', href: '#about', color: '#adf5d7' },
  { name: 'Portafolio', href: '#portafolio', color: '#d8d7d7' },
  { name: 'Servicios', href: '#services', color: '#16a085' },
  { name: 'Contacto', href: '#contact', color: '#c2b0f2' }
];

const setScrollBg = (value) => {
  scrollBg.value = value;
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const handleMenuItemClick = () => {
  showMobileMenu.value = false;
  activeIndex.value = menuItems.findIndex(item => item.href === event.target.getAttribute('href'));
};

const handleClickOutside = (event) => {
  const menu = document.getElementById('navbar-default');
  const button = document.querySelector('[aria-controls="navbar-default"]');
  if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
    showMobileMenu.value = false;
  }
};

onMounted(() => {
  const handleScroll = () => {
    setScrollBg(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", handleClickOutside);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("click", handleClickOutside);
  });
});

const logo = '/images/logo.png';
</script>

<template>
  <nav class="w-full fixed top-0 z-10 bg-light-navy-20 dark:bg-black border-light-navy-20 dark:border-black text-light-primary dark:text-white p-6"
       :class="{
         'bg-[#DBDBE7] dark:bg-[#0F141D]': scrollBg,
         'bg-[#C3C3D7] dark:bg-black': !scrollBg
       }">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="logo" class="h-14" alt="Desarrollo Logo" />
        <span class="self-center text-3xl font-bold whitespace-nowrap text-light-primary dark:text-white">Jorge Mora</span>
      </a>
      <button @click="toggleMobileMenu" type="button"
              class="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default" :aria-expanded="showMobileMenu.toString()">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <transition name="fade">
        <div :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }" class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col md:flex-row md:space-x-12 rtl:space-x-reverse mt-4 md:mt-0 p-0 border border-gray-100 rounded-lg md:border-0 dark:bg-black dark:border-gray-700">
            <li v-for="(item, index) in menuItems" :key="index" class="relative group">
              <a @click="handleMenuItemClick"
                 :href="item.href"
                 :class="['flex items-center py-3 px-5 rounded-md text-xl md:text-2xl transition-transform duration-300 ease-in-out', { 'text-indigo-600 md:text-indigo-500': activeIndex === index }]">
                {{ item.name }}
              </a>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
/* Estilos generales */
body {
  font-family: 'PT Sans', Arial, Verdana;
  background-color: #eee;
}

/* Estilos para la selección de texto */
::selection {
  background-color: #c7d2fe; /* Color de fondo de la selección en modo claro */
  color: #000000; /* Color del texto de la selección en modo claro */
}

.dark ::selection {
  background-color: #1f2937; /* Color de fondo de la selección en modo oscuro */
  color: #e5e7eb; /* Color del texto de la selección en modo oscuro */
}

/* Animaciones de escala e inclinación */
@keyframes scaleUp {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes tilt {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
}

@keyframes slideIn {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10%);
    opacity: 0;
  }
}

/* Animación en los elementos del menú */
.group:hover a {
  animation: tilt 0.3s ease-in-out;
}

/* Espaciado entre elementos del menú en desktop */
.md\\:space-x-12 > li {
  padding: 0 1.5rem; /* Ajusta según sea necesario */
}

/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active en <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
