<template>
    <v-main id="content">
        <Header/>
      <v-flex align-self-center>
    <v-btn-toggle
      class="ma-2 text-center"
      color="#004D40"
      group
      dark
      dense
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
      color="#008080"
      rounded
      dark
      right
      >Go</v-btn>
    </v-flex>
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
            @click="showCertificate = false; selectedCertificate=''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="showCertificate = false"
          >
            Save
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
            @click="showStage = false; selectedStage=''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="showStage = false"
          >
            Save
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
            @click="showLanguage = false; selectedLanguage=''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="showLanguage = false"
          >
            Save
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
            @click="showLocation = false; enteredLocation=''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="showLocation = false"
          >
            Save
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
            @click="showMaxFees = false; enteredMaxFees=''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="showMaxFees = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
      <v-container id="container" class="mt-10 mb-10">
        <span class="teal--text text-h5 text-center" v-if="flag">
            Customize your filter ...
          </span>
          <span class="teal--text text-h5 text-center" v-if="! flag">
            Filter results
          </span>
          <SchoolCard
          v-for="i in Schools.length"
          :key="i"
          :school="Schools[i-1]"
          :AddToFav="true"
          />
      </v-container>
      <Footer v-if="! flag"/>
    </v-main>
</template>

<script>
import axios from 'axios';
import VueNumericInput from 'vue-numeric-input';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SchoolCard from '@/components/SchoolCard.vue';

export default {
  name: 'FilterResults',
  components: {
    Header,
    SchoolCard,
    Footer,
    VueNumericInput,
  },
  data() {
    return {
      Schools: {},
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
      flag: true,
    };
  },
  methods: {
    Filtering() {
      if (!(this.enteredMaxFees === '' && this.selectedLanguage === '' && this.enteredLocation === '' && this.selectedCertificate === '' && this.selectedStage === '')) {
        axios.post('http://127.0.0.1:8000/api/schools/filter',
          {
            MaxFees: this.enteredMaxFees,
            Language: this.selectedLanguage,
            Address: this.enteredLocation,
            Certificate: this.selectedCertificate,
            Stage: this.selectedStage,
          },
          { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' } })
          .then((response) => {
            this.Schools = response.data;
            this.flag = false;
          });
      }
    },
  },
};
</script>
<style scoped>

</style>>
