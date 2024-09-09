<script setup>
    import {
        ref
    } from 'vue';
    import {
        useForm
    } from '@inertiajs/vue3';

    const showMessagge =ref(false);

    const form = useForm({
        name: "",
        email: "",
        body: ""
    });

    function setShowMessage(value){
        showMessagge.value=value;
    }

    function cleanForm(){
        form.reset();
        setShowMessage(true)
        setTimeout(()=>setShowMessage(false),2000)

    }
    const submit = () => {
        form.post(route('contact'), {
            onSuccess: () => cleanForm(),
            preserveScroll: true,
            onError: () => {
                console.log(form.errors);
            }
        });
    };
</script>

<template>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <section id="portafolio" class="bg-hero-light dark:bg-hero-dark py-32 dark:bg-black">
        <div class="container mx-auto">
            <div class="flex flex-col items-center text-center mb-12">
                <h2 class="section-title text-indigo-600 dark:text-indigo-300">
                    Contáctame
                </h2>
                <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                    style="font-family: 'Poppins', sans-serif;">
                    Estoy aquí para ayudarte y explorar oportunidades de colaboración. Ya sea que quieras discutir un
                    proyecto, solicitar información adicional sobre mis servicios o simplemente conectar, estaré
                    encantado de escuchar tus ideas.
                </p>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-8">
                <div class="flex flex-1 flex-col space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    <div class="flex flex-col space-y-6 mb-8">
                        <!-- Información de Contacto -->
                        <div class="flex items-start space-x-4">
                            <div
                                class="bg-light-accent dark:bg-dark-accent rounded-sm w-12 h-12 flex items-center justify-center text-xl text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-body text-xl mb-1 text-gray-800 dark:text-gray-100">
                                    ¿Tienes alguna pregunta?
                                </h4>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Estoy aquí para ayudarte.
                                </p>
                                <div class="text-indigo-600 dark:text-indigo-400">
                                    <p class="mb-1">Envíame un correo electrónico a</p>
                                    <a href="mailto:jorgeguitars@hotmail.com"
                                        class="text-indigo-600 dark:text-indigo-400">jorgeguitars@hotmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div
                                class="bg-light-accent dark:bg-dark-accent rounded-sm w-12 h-12 flex items-center justify-center text-xl text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-body text-xl mb-1 text-gray-800 dark:text-gray-100">
                                    Ubicación actual
                                </h4>
                                <p class="text-gray-700 dark:text-gray-300">
                                    Bogotá, Colombia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submit" class="space-y-8 w-full max-w-md">
                    <div v-if="showMessagge"
                     class="m-2 p-4 bg-green-500 dark:bg-green-600 text-white dark:text-gray-100 rounded-lg">
                     Gracias por contactarme.
                     </div>

                    <div class="flex flex-col space-y-4">
                        <!-- Campo Nombre -->
                        <div>
                            <input v-model="form.name" type="text" placeholder="Tu nombre"
                                class="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4">
                            <!-- Mostrar el mensaje de error si existe -->
                            <p v-if="form.errors.name" class="text-red-500 text-sm mt-1">{{ form . errors . name }}</p>
                        </div>

                        <!-- Campo Correo -->
                        <div>
                            <input v-model="form.email" type="email" placeholder="Tu correo electrónico"
                                class="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4">
                            <!-- Mostrar el mensaje de error si existe -->
                            <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{ form . errors . email }}</p>
                        </div>

                        <!-- Campo Mensaje -->
                        <div>
                            <textarea v-model="form.body" placeholder="Tu mensaje"
                                class="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 h-32"></textarea>
                            <!-- Mostrar el mensaje de error si existe -->
                            <p v-if="form.errors.body" class="text-red-500 text-sm mt-1">{{ form . errors . body }}</p>
                        </div>

                        <!-- Botón Enviar -->
                        <button type="submit"
                            class="bg-indigo-600 dark:bg-indigo-400 text-white rounded-md py-2 px-4 hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
