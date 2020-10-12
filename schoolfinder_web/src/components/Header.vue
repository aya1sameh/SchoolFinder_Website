<template>
  <nav>
    <v-toolbar
      dark
      color="#004D40"
    >
      <v-toolbar-title>School Finder</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row >
      <v-col
          cols="12"
          sm="12">
          <br />
      <v-text-field
        justify="space-around"
        v-model="searched"
        solo
        label="Search"
        light
      >
      </v-text-field>
      </v-col>
      </v-row>
      <v-btn icon @click="Search()">
      <v-icon>mdi-magnify</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row
      align="center"
      justify="space-around"
      >
    <v-btn text>
      Home
    </v-btn>
    <v-btn text @click="GoToAbout()">
      About
    </v-btn>
    <v-btn text>
      Suggestions
    </v-btn>
    <v-btn text @click="filter = !filter">
      Filter
    </v-btn>
    <v-btn text>
      Compare
    </v-btn>
  </v-row>
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-flex xs12 offset-xs4>
    <v-btn-toggle
      class="ma-2 text-center"
      color="#004D40"
      group
      v-if="filter"
    >
    <v-btn @click="showMaxFees = !showMaxFees">
      Max Fees
    </v-btn>
    <v-btn @click="showLanguage = !showLanguage">
      Language
    </v-btn>
    <v-btn @click="showCertificate = !showCertificate">
      Certificate
    </v-btn>
    <v-btn @click="showLocation = !showLocation">
      Address
    </v-btn>
    <v-btn @click="showStage = !showStage">
      Stage
    </v-btn>
    </v-btn-toggle>
    <v-btn @click="Filtering()"
      class="text-center"
      color="#004D40"
      rounded
      dark
      v-if="filter">Go</v-btn>
    </v-flex>
    <v-navigation-drawer v-model="drawer" app class="white" right>
      <UserDrawer @HideUserDrawer="drawer = !drawer"></UserDrawer>
    </v-navigation-drawer>
    <v-row justify="center">
    <v-dialog
      v-model="showCertificate"
      scrollable
      max-width="300px"
    >
      <v-card>
        <v-card-title>Select Certificate</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 200px;">
          <v-radio-group
            v-model="selectedCertificate"
            column
          >
            <v-radio
              label="National"
              value="National"
            ></v-radio>
            <v-radio
              label="IGCSE"
              value="IGCSE"
            ></v-radio>
            <v-radio
              label="SAT"
              value="SAT"
            ></v-radio>
            <v-radio
              label="IB"
              value="IB"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="showCertificate = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="showStage"
      scrollable
      max-width="300px"
    >
      <v-card>
        <v-card-title>Select Stage</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 200px;">
          <v-radio-group
            v-model="selectedStage"
            column
          >
            <v-radio
              label="nursery"
              value="nursery"
            ></v-radio>
            <v-radio
              label="KG"
              value="KG"
            ></v-radio>
            <v-radio
              label="Primary"
              value="Primary"
            ></v-radio>
            <v-radio
              label="Secondary"
              value="Secondary"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="showStage = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-row justify="center">
    <v-dialog
      v-model="showLanguage"
      scrollable
      max-width="300px"
    >
      <v-card>
        <v-card-title>Select Language</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 200px;">
          <v-radio-group
            v-model="selectedLanguage"
            column
          >
            <v-radio
              label="Arabic"
              value="Arabic"
            ></v-radio>
            <v-radio
              label="French"
              value="French"
            ></v-radio>
            <v-radio
              label="English"
              value="English"
            ></v-radio>
            <v-radio
              label="German"
              value="German"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="showLanguage = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-row justify="center">
    <v-dialog
      v-model="showLocation"
      scrollable
      max-width="300px"
    >
      <v-card>
        <v-card-title>Select Location</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 100px;">
          <v-text-field
            v-model="enteredLocation"
            label="City"
            append-icon="mdi-map-marker"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="showLocation = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-row justify="center">
    <v-dialog
      v-model="showMaxFees"
      scrollable
      max-width="300px"
    >
      <v-card>
        <v-card-title>Select Maximum fees</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 100px;">
          <vue-numeric-input
          v-model="enteredMaxFees"
          :min="100"
          :max="10000000"
          :step="100">
          </vue-numeric-input>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="showMaxFees = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <span>{{searchResults}}</span>
  <span>{{searched}}</span>
  </nav>
</template>

<script>
import VueNumericInput from 'vue-numeric-input';
import axios from 'axios';
import UserDrawer from './UserDrawer.vue';

export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    filter: false,
    showCertificate: false,
    selectedCertificate: '',
    showLanguage: false,
    selectedLanguage: '',
    showStage: false,
    selectedStage: '',
    showLocation: false,
    enteredLocation: '',
    showMaxFees: false,
    enteredMaxFees: '',
    searched: '',
    searchResults: '',
  }),
  components: {
    UserDrawer,
    VueNumericInput,
  },
  rules: {
    required: (value) => !!value || 'Required.',
  },
  methods: {
    GoToAbout() {
      this.$router.push('about');
    },
    Search() {
      if (!(this.searched === '')) {
        axios.post('http://127.0.0.1:8000/api/schools/search', { name: this.searched }, { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' } })
          .then((response) => {
            this.searchResults = response;
          });
      }
    },
  },
};
</script>
