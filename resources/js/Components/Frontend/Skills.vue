<script setup>
  defineProps ({
    skills: Object,
  });
</script>

<template>
    <section class="w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-8 lg:px-8 bg-[#c7d2fe]">
        <div class="container mx-auto">
            <div class="grid grid-cols-8 md:grid-flow-col">
                <div class="flex items-center justify-center" v-for="skill in skills.data" :key="skill.id">
                    <img :src="skill.image" :alt="skill.name"  class="lg:h-20" />

                </div>
            </div>
        </div>

    </section>

</template>
