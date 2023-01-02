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
              We utilize next-next generation technology to deliver software
              products that will meet and your exceed expectations while
              deploying on time.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
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
