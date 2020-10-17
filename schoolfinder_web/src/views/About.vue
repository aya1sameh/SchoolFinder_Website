<template>
  <div class="about">
    <Header/>
    <h1 class="text-center">About Us</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'about',
  components: {
    Header,
    Footer,
  },
};
</script>
