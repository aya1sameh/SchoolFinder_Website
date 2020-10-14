<template>
  <v-card height="48">
    <v-footer>
    <v-col
      class="text-center teal--text"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>School Finder</strong>
    </v-col>
  </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
