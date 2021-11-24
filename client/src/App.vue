<template>
  <v-app>
    <SideBar />
    <v-main>
      <EmployeeTable />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import EmployeeTable from '@/components/EmployeeTable.vue';
export default {
  name: 'App',
  components: {
    SideBar,
    EmployeeTable,
  },
};
</script>
<style type="text/css" scoped></style>
