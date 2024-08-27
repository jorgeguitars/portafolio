<script setup>
import Project from './Project.vue';
import { ref } from 'vue';

const props = defineProps({
    skills: Object,
    projects: Object
});

const filteredProjects = ref(props.projects.data);
const selectedSkill = ref("Todos");

const filterProjects = (id) => {
    if (id === "Todos") {
        filteredProjects.value = props.projects.data;
        selectedSkill.value = id;
    } else {
        filteredProjects.value = props.projects.data.filter(project => {
            return project.skill.id === id;
        });
        selectedSkill.value = id;
    }
};
</script>

<template>
    <div class="container mx-auto">
        <nav class="mb-12 border-b-2 border-gray-300 dark:border-dark-navy-100">
            <ul class="flex flex-col lg:flex-row justify-evenly items-center">
                <li class="cursor-pointer capitalize m-4">
                    <button @click="filterProjects('Todos')"
                        class="inline-block text-center px-4 py-2 rounded-md"
                        :class="selectedSkill === 'Todos' ? 'bg-indigo-500 text-white border-2 border-indigo-600' : 'bg-[#c7d2fe] text-black hover:bg-indigo-500 hover:text-white border border-transparent'"
                        :style="selectedSkill === 'Todos' ? '' : 'background-color: #c7d2fe; color: black;'">
                        Todos
                    </button>
                </li>
                <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">
                    <button @click="filterProjects(projectSkill.id)"
                        class="inline-block text-center px-4 py-2 rounded-md"
                        :class="selectedSkill === projectSkill.id ? 'bg-indigo-500 text-white border-2 border-indigo-600' : 'bg-[#c7d2fe] text-black hover:bg-indigo-500 hover:text-white border border-transparent'"
                        :style="selectedSkill === projectSkill.id ? '' : 'background-color: #c7d2fe; color: black;'">
                        {{ projectSkill.name }}
                    </button>
                </li>
            </ul>
        </nav>
        <section class="grid gap-y-12 lg:grid-cols-3 lg:gap-8">
            <Project v-for="project in filteredProjects" :key="project.id" :project="project" />
        </section>
    </div>
</template>
