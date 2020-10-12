<template>
  <v-content id="content">
    <Header></Header>
    <v-container id="container">
      <!--School Name-->
      <div id="schoolname">
        <h1 class="display-3 color=blue text-color=white">{{ school.name }}</h1>
      </div>

      <!--School Header part-->
      <v-layout row left wrap justify-space-around>
        <!--School Images carousels-->
        <v-flex xs8 md4>
          <v-carousel class="mt-md-4 mb-md-1 mx-md-3">
            <v-carousel-item
              v-for="(image, i) in school.gallery"
              :key="i"
              :src="image"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>

          <v-card-actions class="justify-center">
            <v-btn
              depressed
              class="mx-2 mb-2 transparent grey--text text--darken-2"
              @click="viewGallery"
            >
              <span left> View Gallery </span>
              <v-icon right>arrow_forward_ios</v-icon>
            </v-btn>
          </v-card-actions>
        </v-flex>

        <!--School Header -->
        <v-flex xs8 md8>
          <!--Establishment Year-->
          <v-row wrap align="center">
            <v-flex xs12 md6 class="px-md-8 mt-md-5 my-md-4">
              <span class="display-2 bold">Since </span>
              <span class="display-1"> {{ school.estiblashingYear }} </span>
            </v-flex>

            <!--Rating and rated by -->
            <v-flex xs12 md6 class="px-md-3 py-md-3 my-md-4">
              <span class="grey--text text--darken-2">
                {{ school.rating }}/10</span
              >

              <v-rating
                background-color="grey darken-2"
                color="blue-grey-lighten-1"
                half-increments
                length="5"
                readonly
                size="32"
                value="2.5"
              >
              </v-rating>

              <span class="grey--text text--darken-2 caption mr-2 align-right">
                ({{ school.ratedBy }})
              </span>
            </v-flex>

            <!--School description-->
            <v-flex xs12 class="pl-8">
                <v-flex xs12 md-8 class="">
                    <h1 class="display-2">Description</h1>
                    <p class="grey--text text--darken-2">{{ school.description }}</p>
                  </v-flex>
            </v-flex>

            <!-- Buttons (Add to Favs - Add Review - Add Post)-->
            <v-flex xs12 md4 class="ml-8 mr-2">
              <v-btn rounded outlined class="blue-grey darken-1 white--text">
                <v-icon left>favorite</v-icon>
                <span right>Add to Favourites</span>
              </v-btn>
            </v-flex>

            <v-flex xs12 md3 class="ml-xs-8 mx-md-2">
              <v-btn rounded outlined class="blue-grey darken-1 white--text">
                <v-icon left>add</v-icon>
                <span right>Add Review</span>
              </v-btn>
            </v-flex>

            <v-flex xs12 md3 class="mx-2">
              <v-btn rounded outlined class="blue-grey darken-1 white--text">
                <v-icon left>post_add</v-icon>
                <span right>Add Post</span>
              </v-btn>
            </v-flex>
          </v-row>
        </v-flex>
      </v-layout>

      <!--School Details-->
      <v-layout row wrap justify-space-around>
        <!--School Facilities-->
        <v-flex xs8 md4> </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components:{Header},
  data() {
    return {
      school: {
        name: 'Dar el Tarbyah Language School',
        stages: ['Prepartory', 'Secondary'],
        certificates: ['National'],
        gender: 'Boys only',
        mainLanguage: 'Enlgish',
        addresss: '2 Haroun street, El dokki, Giza',
        phoneNumber: '0112727282',
        AnnualFees: 10000,
        description: 'This is a wonderful school that welcomes blablbla',
        estiblashingYear: 1982,
        gallery: [
          'https://www.unicef.org/egypt/sites/unicef.org.egypt/files/styles/hero_desktop/public/NB6A5607.jpg?itok=23BXTLfN',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT77nP7RcM2VsfbXUSJZFZFUwQ78P6GGJEbnA&usqp=CAU',
        ],
        facilities: [{ type: 'Lab', number: 5, description: 'Playing area' }],
        externalUrls: null,
        rating: 8,
        ratedBy: 500,
      },
    };
  },
  methods: {
    viewGallery() {},
  },
};
</script>

<style scoped>
</style>
