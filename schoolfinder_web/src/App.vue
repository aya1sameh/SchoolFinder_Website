<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  #content {
  color: #009688;
  background-color: #008080;
}
#container {
  background-color: #eeeeee;
  border-radius: 40px;
  width: 90%;
}
#SchoolFinder {
  color: #009688;
}
</style>
