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
              <span
                style="
                  text-decoration: underline 3px yellow;
                  text-underline-offset: 5px;
                "
                class="blue--text px-5"
              >
                Talent
              </span>
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

    <!-- Three Card Case Studies -->
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
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
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
