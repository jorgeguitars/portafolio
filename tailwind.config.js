import defaultTheme from 'tailwindcss/defaultTheme';
const colors = require("tailwindcss/colors");
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
content: [
'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
'./storage/framework/views/*.php',
'./resources/views/**/*.blade.php',
'./resources/js/**/*.vue',
],

theme: {

fontFamily: {
primary:"Playfair Display",
body: "work Sans"
},
container:{
padding:{
DEFAULT: "1rem",
lg: "3rem"
},
},
extend:{

colors: {
        'light-navy-200': '#F0F4F8',  // Fondo claro del header
        'light-primary': '#1F2937',   // Texto del header en modo claro
        'light-secondary': '#cbd5e1', // Enlaces del header en modo claro
        'dark-navy-200': '#1C1D24',   // Fondo oscuro del nav y header
        'dark-navy-90': '#2D2D2D',    // Borde del header en modo oscuro
        'dark-secondary': '#1C1D24', // Fondo del header en modo oscuro
        'dark-primary': '#FFFFFF',    // Texto del header en modo oscuro
        'text-accent': '#F59E0B',     // Color de acento para enlaces en modo oscuro
        'btn-primary-light': '#3B82F6', // Botón principal en modo claro
        'btn-primary-dark': '#F97316',  // Botón principal en modo oscuro
        'btn-hover-light': '#2563EB', // Hover del botón en modo claro
        'btn-hover-dark': '#F97316',  // Hover del botón en modo oscuro
        'custom-light': '#c7d2fe', // Color personalizado

accent:{
DEFAULT:"ac6b34",
hover: "#925a2b",
},
paragraph: "878e99",
blue: colors.blue,
indigo: colors.indigo,
green: colors.green,
red: colors.red
},
},
},

plugins: [forms],
};
