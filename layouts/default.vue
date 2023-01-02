<template>
  <v-app app>
    <!-- Navbar -->
    <v-app-bar flat color="transparent" height="80px" absolute>
      <v-row align="center" justify="center">
        <v-col cols="2" class="pa-none">
          <NuxtLink to="/about">
            <v-img src="./logo2.png" width="1500px" />
          </NuxtLink>
        </v-col>
        <v-col class="d-flex justify-space-around">
          <v-toolbar-title
            ><v-tabs dark color="yellow" background-color="transparent" v-model="tab">
              <v-tab to="/">Home</v-tab>
              <v-tab to="/about">About</v-tab>
              <v-tab to="/services">Services</v-tab>
              <v-tab to="/portfolio">Portfolio</v-tab>
              <v-tab to="/contact">Contact</v-tab>
            </v-tabs></v-toolbar-title
          >
        </v-col>
        <v-col cols="2" class="d-flex justify-end">
          <v-btn
            v-for="(site, index) in socialSites"
            :href="site.link"
            target="_blank"
            lg
            :key="index"
            icon
            color="white"
          >
            <v-icon size="30px">
              {{ site.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Nuxt Main View Container -->
    <v-main style="background: linear-gradient(rgba(0, 0, 0, 0.5)">
      <Nuxt />
    </v-main>

    <!-- Right Side Drawer -->
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Footer -->

    <v-footer color="grey" class="grey darken-4 white--text" height="395">
      <v-row>
        <v-col
          class="d-flex justify-center align-center"
          align="center"
          cols="4"
        >
          <v-tabs
            dark
            background-color="grey darken-4"
            class=""
            color="blue"
            hide-slider
            v-model="tab"
            vertical
          >
            <v-tab to="/">Home</v-tab>
            <v-tab to="/about">About</v-tab>
            <v-tab to="/services">Services</v-tab>
            <v-tab to="/portfolio">Portfolio</v-tab>
            <v-tab to="/contact">Contact</v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="4" align="center" class="pt-10">
          <v-card flat color="grey darken-4">
            <v-img src="./footerLogo.png" height="135px" width="260px" />
            <v-btn
              to="/contact"
              color="white"
              class="mt-7"
              rounded
              outlined
              label="yes"
              >Book a Consultation</v-btn
            >
          </v-card>
        </v-col>
        <v-col
          class="d-flex justify-center align-center pt-8"
          align="center"
          cols="4"
        >
          <v-card flat color="grey darken-4">
            <v-list color="grey darken-4" dark two-line>
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
          </v-card>
        </v-col>
        <v-col cols="12" class="text-center text-body-1"
          ><v-card dark flat color="grey darken-4"
            ><span>
              <v-card-text>
                <v-btn
                  v-for="(site, index) in socialSites"
                  :href="site.link"
                  target="_blank"
                  :key="index"
                  class="mx-4 blue--text"
                  icon
                >
                  <v-icon size="35px">
                    {{ site.icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>
              Gifted Software &copy;
              {{ new Date().getFullYear() }}</span
            ></v-card
          ></v-col
        >
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      tab: 'null',
      socialSites: [
        { icon: 'mdi-facebook', link: 'https://facebook.com/giftedsoftware' },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/company/giftedsoftware',
        },
        {
          icon: 'mdi-instagram',
          link: 'https://instagram.com/gifted_software',
        },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
