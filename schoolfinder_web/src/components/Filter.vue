<template>
    <v-btn-toggle
      class="ma-2 text-center"
      color="#004D40"
      group
      v-if="filter"
    >
    <v-btn>
      Max Fees
    </v-btn>
    <v-btn>
      Language
    </v-btn>
    <v-btn>
      Certificate
    </v-btn>
    <v-btn>
      Address
    </v-btn>
    <v-btn>
      Stage
    </v-btn>
    </v-btn-toggle>
</template>

<script>
export default {
  name: 'Filter',
  data: () => ({
    item: 0,
    items: [
      { text: 'My profile', icon: 'mdi-account' },
      { text: 'Favorites', icon: 'mdi-star' },
      { text: 'Logout', icon: 'mdi-arrow-right-bold' },
    ],
  }),
};
</script>
