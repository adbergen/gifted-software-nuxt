<template>
  <div>
    <!-- Landing Section -->
    <section class="landing-background pt-16 mb-16">
      <v-row align="center" class="pt-16">
        <v-col cols="12" class="pt-16">
          <v-card flat color="transparent pt-16">
            <v-card-title
              class="headline text-h2 pb-0 white--text justify-center font-weight-bold pt-16"
            >
              Where
              <vue-typed-js
                :strings="['Talent', 'Creativity', 'Quality']"
                :loop="true"
                :startDelay="1500"
                :typeSpeed="100"
                :smartBackspace="true"
                :backSpeed="100"
                :backDelay="500"
              >
                <span
                  style="
                    text-decoration: underline 3px yellow;
                    text-underline-offset: 5px;
                  "
                  class="blue--text px-5 typing"
                >
                </span>
              </vue-typed-js>
              Meets Technology
            </v-card-title>
            <v-card-title
              class="text-h5 justify-center white--text font-weight-bold subheading"
            >
              Designing and developing superior digital products to enhance
              organizations
            </v-card-title>
            <v-card-text class="text-center pt-16">
              <v-btn to="/contact" color="yellow" outlined large rounded
                >Book a Consultation</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- 4 Service Cards -->
    <section class="pa-16">
      <v-row class="px-16 pb-16">
        <v-col class="my-16 text-h4 black--text" align="center" cols="12">
          Our Services
        </v-col>
        <v-col cols="3">
          <v-card class="mx-5 text-center transparent elevation-0">
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-icon color="blue" size="60px"> mdi-draw </v-icon>
            </v-card-text>
            <v-card-title class="justify-center text-h5 black--text pt-0 pb-5">
              Custom Web Design
            </v-card-title>
            <v-card-text class="grey--text text-h6 text-center">
              Creative and Inspirational website designs imagined into reality.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-5 text-center transparent elevation-0">
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-icon color="blue" size="60px"> mdi-xml </v-icon>
            </v-card-text>
            <v-card-title class="justify-center text-h5 black--text pt-0 pb-5">
              Custom Web Development
            </v-card-title>
            <v-card-text class="grey--text text-h6 text-center">
              Your site is custom developed for your organization
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-5 text-center transparent elevation-0">
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-icon color="blue" size="60px"> mdi-face-agent </v-icon>
            </v-card-text>
            <v-card-title class="justify-center text-h5 black--text pt-0 pb-5">
              Website Support
            </v-card-title>
            <v-card-text class="grey--text text-h6 text-center">
              24/7 support for all your website needs, including security
              updates, patching, general site updates, and hosting.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-5 text-center transparent elevation-0">
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-icon color="blue" size="60px">
                mdi-lightbulb-on-outline
              </v-icon>
            </v-card-text>
            <v-card-title class="justify-center text-h5 black--text pt-0 pb-5">
              Product Development
            </v-card-title>
            <v-card-text class="grey--text text-h6 text-center">
              We utilize next generation technology to deliver software
              products that will meet and exceed expectations while
              deploying on time.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Three Card Section -->
    <section
      class="px-5 px-sm-16 px-md-16 px-lg-16 px-xl-16 pb-16 grey lighten-3"
    >
      <v-row class="px-5 px-sm-16 px-md-16 px-lg-16 px-xl-16 pb-10">
        <v-col
          class="text-h4 py-16"
          align="center"
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          Case Studies
        </v-col>
        <!-- Study: Murphy Septic Inspect -->
        <v-col cols="12" sm="4" md="4" lg="4" xl="4">
          <v-card class="mx-0 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 text-center">
            <v-img
              class="white--text align-end"
              src="https://ak.picdn.net/shutterstock/videos/12647681/thumb/10.jpg"
              alt="House"
            />
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-avatar size="60px" color="blue">
                <v-icon size="30px" dark> mdi-toilet </v-icon>
              </v-avatar>
            </v-card-text>
            <v-card-title class="justify-center text-h5 pt-0 pb-10">
              Murphy Septic Inspect
            </v-card-title>
            <v-card-text class="black--text text-body-1">
              An onsite wastewater treatment and disposal system, or Septic
              System, may be the most expensive component of your home. For home
              sellers, a pre-listing inspection can ensure that there are no
              surprises once the home is put on the market.
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue" text>See Case Study</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Study: Surgeon Hunter -->
        <v-col cols="12" sm="4" md="4" lg="4" xl="4">
          <v-card class="mx-0 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 text-center">
            <v-img
              class="white--text align-end"
              src="https://ak.picdn.net/shutterstock/videos/12647681/thumb/10.jpg"
              alt="House"
            />
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-avatar size="60px" color="blue">
                <v-icon size="30px" dark> mdi-medical-bag </v-icon>
              </v-avatar>
            </v-card-text>
            <v-card-title class="justify-center text-h5 pt-0 pb-10">
              Surgeon Hunter
            </v-card-title>
            <v-card-text class="black--text text-body-1">
              Feel confident choosing Murphy's Septic Inspections. Buying or
              selling, we do not offer any type of septic repair work so you do
              not have to worry about Murphy's finding problems that don't
              exist. Don't hesitate to reach out to us regarding any questions
              or concerns.
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue" text>See Case Study</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Study: Meka Alarms -->
        <v-col cols="12" sm="4" md="4" lg="4" xl="4">
          <v-card class="mx-0 mx-sm-5 mx-md-5 mx-lg-5 mx-xl-5 text-center">
            <v-img
              class="white--text align-end"
              src="https://ak.picdn.net/shutterstock/videos/12647681/thumb/10.jpg"
              alt="House"
            />
            <v-card-text
              style="transform: translateY(-50%)"
              class="text-center pb-0"
            >
              <v-avatar size="60px" color="blue">
                <v-icon size="30px" dark> mdi-shield-home </v-icon>
              </v-avatar>
            </v-card-text>
            <v-card-title class="justify-center text-h5 pt-0 pb-10">
              Meka Alarms
            </v-card-title>
            <v-card-text class="black--text text-body-1">
              Feel confident choosing Murphy's Septic Inspections. Buying or
              selling, we do not offer any type of septic repair work so you do
              not have to worry about Murphy's finding problems that don't
              exist. Don't hesitate to reach out to us regarding any questions
              or concerns.
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue" text>See Case Study</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Contact Us -->
    <section class="px-5 px-sm-16 px-md-16 px-lg-16 px-xl-16 pb-16">
      <v-row class="px-5 px-sm-16 px-md-16 px-lg-16 px-xl-16 pb-10">
        <v-col
          class="text-h4 py-16"
          align="center"
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          Talk to us and get your project moving! </v-col
        ><!-- Contact Details Column -->
        <v-col
          cols="12"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          class="pa-5 pa-sm-16 pa-md-16 pa-lg-16 pa-xl-16"
        >
          <div class="px-0 px-sm-10 px-md-10 px-lg-10 px-xl-10">
            <v-card-title
              class="text-center justify-center text-h5 pb-8"
              style="word-break: break-word"
              >Contact Us</v-card-title
            >
            <v-list two-line>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue"> mdi-phone </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>(732) 610-0542</v-list-item-title>
                  <v-list-item-subtitle>Phone</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider color="yellow" inset></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue"> mdi-email </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>info@giftedsoftware.com</v-list-item-title>
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider color="yellow" inset></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue"> mdi-map-marker </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Yardley, PA</v-list-item-title>
                  <v-list-item-subtitle>Location</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <!-- Contact Details Column -->
        <v-col
          cols="12"
          sm="8"
          md="8"
          lg="8"
          xl="8"
          class="pa-5 pa-sm-16 pa-md-16 pa-lg-16 pa-xl-16"
        >
          <div class="px-0 px-sm-10 px-md-10 px-lg-10 px-xl-10">
            <v-card-title
              class="text-center justify-center text-h5 pb-8"
              style="word-break: break-word"
              >Send us a message</v-card-title
            >
            <form class="px-12">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                :error-messages="phoneErrors"
                label="Phone Number"
                required
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
              ></v-text-field>
              <v-btn
                dark
                block
                color="blue"
                class="mr-4 mt-2"
                @click.prevent="submit(name, email, phone, message)"
              >
                submit
              </v-btn>
              <v-alert v-if="successAlert" class="mt-5" type="success">
                Thanks for filling out our form!
              </v-alert>
              <v-alert v-if="errorAlert" class="mt-5" type="error">
                Please fix the errors above before submitting!
              </v-alert>
            </form>
            <div class="text-center pt-4 text-body-1 px-10">
              Our team will respond within 24 hours.
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { VueTypedJs } from 'vue-typed-js'

export default {
  name: 'Index',
  mixins: [validationMixin],
  components: { VueTypedJs },
  validations: {
    name: { required },
    email: { required, email },
    phone: { required },
  },

  data: () => ({
    name: '',
    email: '',
    phone: '',
    successAlert: false,
    errorAlert: false,
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Phone number is required')
      return errors
    },
  },
  methods: {
    async submit(name, email, phone) {
      this.$v.$touch()
      try {
        if (!this.$v.$error) {
          this.errorAlert = false
          this.$fire.database
            .ref('users')
            .push()
            .set({
              name: name,
              email: email,
              phone: phone,
            })
            .then((this.successAlert = true))
            .finally(
              setTimeout(() => {
                this.successAlert = false
              }, 5000)
            )
        } else {
          // handle error case
          this.errorAlert = true
        }
      } catch (err) {
        // handle errors
      }
    },
  },
}
</script>

<style scoped>
.landing-background {
  border-bottom-right-radius: 50% 15%;
  border-bottom-left-radius: 50% 15%;
  height: 800px;
  background-color: #2234ae;
  background-image: linear-gradient(315deg, #0342fd 0%, #191714 90%);
}
</style>
