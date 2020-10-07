<template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="100" >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item link>
            <v-spacer></v-spacer>
            <v-icon @click='HideUserDrawer()'>mdi-menu-right</v-icon>
          </v-list-item>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="item"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>

<script>
export default {
  name: 'UserDrawer',
  data: () => ({
    drawer: false,
    item: 0,
    items: [
      { text: 'My profile', icon: 'mdi-account' },
      { text: 'Favorites', icon: 'mdi-star' },
      { text: 'Logout', icon: 'mdi-arrow-right-bold' },
    ],
  }),
  props: {
    drawer: Boolean,
  },
  methods: {
    HideUserDrawer() {
      this.$emit('HideUserDrawer');
    },
  },
};
</script>
