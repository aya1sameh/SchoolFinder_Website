<template>
  <v-card
    class="mx-auto"
    max-width="600"
    elevation="5"
    outlined
    shaped
    ><v-list-item three-line>
      <v-list-item-content>
        <v-row>
          <v-col cols="12" sm="6" md="5">
            <v-img
              id="avatar"
              class="preview"
              rounded
              :src="schoolimage"
              color="#009688"
            ></v-img>
          </v-col>
          <v-col>
            <v-btn text :to="`/school/${school.id}`">{{ school.name }}</v-btn>
          </v-col>
        </v-row>
        <v-list-item-title class="headline mb-2">
          Description
        </v-list-item-title>
        <v-list-item-subtitle>{{ school.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-row align="center" justify="center">
        <v-col>
          <h4>Rating: {{ school.rating }}/10</h4>
        </v-col>
        <v-col>
        <v-rating
          color="green"
          half-increments
          length="5"
          readonly
          size="25"
          :value="school.rating/2"
        ></v-rating>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-btn
            v-if="!AddToFav"
            @click="$emit('removefromfav',school.id)"
            dark
            rounded
            color="red"
            small
            style="width: 200px"
          >
            Remove from Favourites
          </v-btn>
          <v-btn
            v-else
            @click="$emit('addtofav',school.id)"
            dark
            rounded
            color="#546E7A"
            small
            style="width: 180px"
          >
          <v-icon
          dark
          left
        >
          mdi-heart
        </v-icon>
            Add to Favourites
          </v-btn>
          </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import schoolfinderlogo from '../assets/SchoolFinderLogo.png';

export default {
  props: {
    school: Object,
    AddToFav: Boolean,
  },
  data() {
    return {
      TempImage: schoolfinderlogo,
    };
  },
  computed: {
    schoolimage() {
      if (this.school.gallery) return `http://127.0.0.1:8000/${this.school.gallery[0]}`;
      return this.TempImage;
    },
  },
};
</script>

<style scoped>
#avatar {
  border-radius: 50%;
  border: solid 2px #009688;
  max-width: 100px;
  max-height: 100px;
}
.preview {
    background-color:  #eeeeee;
    max-width: 100%;
    max-height: 100%;
}
</style>
