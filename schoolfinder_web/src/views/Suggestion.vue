<template>
<v-main id="content">
      <v-container id="container" class="mt-10 mb-10">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="School name"
      required
    ></v-text-field>

    <v-text-field
      v-model="address"
      :counter="100"
      :rules="addressRules"
      label="Location"
      required
    ></v-text-field>
  <v-row justify="center" no-gutters>
    <v-btn
      :disabled="!valid"
      color="#008080"
      dark
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>
    <v-btn
      color="#008080"
      dark
      class="text-center mr-4"
      @click="reset"
    >
      Reset
    </v-btn>
    <v-btn
      color="#008080"
      dark
      class="text-center mr-4"
      @click="resetAndBack"
    >
      Back to Homepage
    </v-btn>
  </v-row>
  </v-form>
</v-container>
</v-main>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'School name is required',
      (v) => (v && v.length <= 30) || 'Name must be less than 30 characters',
    ],
    address: '',
    addressRules: [
      (v) => !!v || 'Address is required',
      (v) => (v && v.length <= 100) || 'Name must be less than 100 characters',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$router.push('/home');
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetAndBack() {
      this.$refs.form.reset();
      this.$router.push('/home');
    },
  },
};
</script>
<style scoped>
#content {
  background-color: #008080;
}
#container {
  background-color: #eeeeee;
  border-radius: 50px;
  width: 80%;
}
</style>>
