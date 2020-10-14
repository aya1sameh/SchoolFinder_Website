<template>
  <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
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
