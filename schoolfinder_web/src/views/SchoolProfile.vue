<template>
  <v-container id="container">
    <!--school Name-->
    <div id="schoolname">
        <h1 class="display-3 color=blue text-color=white">{{ school.name }}</h1>
    </div>

  <!--School Main info part-->
    <v-layout row left wrap justify-space-around>
      <!--School Images carousels-->
      <v-flex xs8 md4>
        <v-carousel class="mt-4 mb-1 mx-3" >
          <v-carousel-item
            v-for="(image, i) in school.gallery"
            :key="i"
            :src="image"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>

        <v-card-actions class="justify-center">
          <v-btn class="mx-2 mb-2" @click="viewGallery">
            <span left> View Gallery </span>
            <v-icon right>arrow_forward_ios</v-icon>
          </v-btn>
        </v-card-actions>

      </v-flex>

      <v-flex xs8 md8>
      <!--School Header -->
      <!--Establishment Year-->
      <v-flex xs6 md4 class="px-6 pt-8 my-4">
         <span class="display-2 bold">Since </span>
        <span class="display-1"> {{ school.estiblashingYear }} </span>
      </v-flex>

      <v-flex xs6 md4 class="py-3 my-4">
        <!--Rating and rated by -->
        <span class="grey--text text--darken-2"> {{ school.rating }}/10</span>

        <v-rating
          background-color="grey lighten-1"
          color="blue"
          half-increments
          length="5"
          readonly
          size="32"
          value="2.5"
        >
        </v-rating>

        <span left class="grey--text text--darken-2 caption mr-2">
          ({{ school.ratedBy }})
        </span>
      </v-flex>

      <!--School description-->
      <v-flex xs12 md8 class="px-6">
        <h1 class="display-2">Description</h1>
        <p>{{ school.description }}</p>
      </v-flex>

        <!-- Buttons (Add to Favs - Add Review - Add Post)-->
        <v-flex xs4 md2>
          <v-btn>
            <v-icon left>favorite</v-icon>
            <span right>Add to Favourites</span>
          </v-btn>
        </v-flex>

        <v-flex xs4 md2>
          <v-btn>
            <v-icon left>add</v-icon>
            <span right>Add Review</span>
          </v-btn>
        </v-flex>

        <v-flex xs4 md2>
          <v-btn>
            <v-icon left>post_add</v-icon>
            <span right>Add Post</span>
          </v-btn>
        </v-flex>
      </v-flex>
    </v-layout>

    <!--School Details-->
    <v-layout row wrap justify-space-around>
      <!--School Facilities-->
      <v-flex xs8 md4> </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      school: {
        name: 'Dar el Tarbyah Language School',
        stages: ['Prepartory', 'Secondary'],
        certificates: ['National'],
        gender: 'Mix',
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
  #schoolHeaderElement{
    margin: 4;
    padding:3;
  }
</style>
