<script setup>
    import Project from './Project.vue';
    import { ref } from 'vue';


    const props = defineProps({
        skills: Object,
        projects: Object
    })

    const filteredProjects = ref(props.projects.data);
    const filterProjects = (id) => {
        if (id === "Todos") {
            filteredProjects.value = props.projects.data

        } else {
            filteredProjects.value = props.projects.data.filter(project => {
                return project.skill.id === id;

            })
        }
    }
</script>
<template>
    <div class="container mx-auto">
        <nav class="mb-12 border-b-2 border-light-tail-100 dark:border-dark-navy-100">
            <ul class="flex flex-col lg:flex-row justify-evenly items-center">
                <li class="cursor-pointer capitalize m-4">

                    <button @click="filterProjects('Todos')"
                        class="flex text-center px-4 py-2 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-800 dark:text-gray-200">
                        Todos
                    </button>
                </li>
                <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">

                    <button @click="filterProjects(projectSkill.id)"
                        class="flex text-center px-4 py-2 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-800 dark:text-gray-200">
                        {{ projectSkill . name }}
                    </button>
                </li>
            </ul>
        </nav>
        <section class="grid gap-y-12 lg:grid-cols-3 lg:gap-8">
            <Project v-for="project in filteredProjects" :key="project.id" :project="project" />

        </section>
    </div>
</template>

