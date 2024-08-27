<script setup>
import { Link } from "@inertiajs/inertia";
defineProps({
    project: Object
})
</script>

<template>
    <a :href="project.Project_url" class="group flex flex-col items-center text-center cursor-pointer">
        <div class="mb-6">
            <img class="rounded-2xl h-56" :src="project.image" :alt="project.name" />
        </div>
        <span class="group-hover:text-light-tail-500 capitalize text-accent text-sm mb-3">
            {{ project.skill.name }}
        </span>
        <h3 class="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-2xl font-semibold capitalize">
            {{ project.name }}
        </h3>
    </a>
</template>
