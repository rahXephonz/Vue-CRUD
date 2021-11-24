<template>
  <div>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <a href="/" style="color: #fff"
        ><v-toolbar-title class="font-bold"
          >Employee Management</v-toolbar-title
        ></a
      >
    </v-app-bar>

    <!-- Drawwer -->
    <v-navigation-drawer v-model="drawer" absolute temporary dark>
      <!-- Avatar Admin -->
      <v-row justify="center" class="mt-5">
        <v-col cols="7">
          <v-avatar size="130">
            <img
              src="https://avatars.githubusercontent.com/u/77242429?v=4"
              alt="admin"
            />
          </v-avatar>
        </v-col>
      </v-row>

      <!-- Nama Admin -->
      <v-row justify="center" class="mt-n1">
        <v-col cols="9">
          <p class="text-white">Nikolai Konzvelyzakov</p>
        </v-col>
      </v-row>

      <!-- Navigasi -->
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.route"
            style="margin: 10px 0px"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                style="font-size: 15px"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          icon: 'mdi-book-open',
          title: 'List Employee',
          route: '/employee-table',
        },
        {
          icon: 'mdi-account',
          title: 'Employee Registration',
          route: '/register-new-employee',
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
