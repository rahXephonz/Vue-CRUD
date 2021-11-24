<template>
  <v-container>
    <v-row>
      <!-- 1 row 12 column -->
      <v-col cols="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search employees, or department in here"
          style="font-weight: bold"
        ></v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="employees"
          :search="search"
          style="font-weight: bold"
        >
          <!-- Actions colom -->
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon class="mr-2"> mdi-pencil </v-icon>
            <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'ID',
          //value will reference in table
          value: 'id',
        },
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Departement / Origin',
          value: 'departement',
        },
        {
          text: 'Actions',
          value: 'actions',
        },
      ],
      // Employees data dummies
      employees: [
        {
          id: 1,
          name: 'Kaminohara Shouko',
          gender: 'Female',
          departement: 'Data Analyst',
          about:
            'She is a perfect analyst in bussinest also she is a software engineer at Kovikov.jp',
        },
        {
          id: 2,
          name: 'Takuya Matsuyama',
          gender: 'Male',
          departement: 'Software Engineer',
          about:
            'Takuya is a freelance and a full-stack developer based in Osaka.',
        },
        {
          id: 3,
          name: 'Dan Abramov',
          gender: 'Male',
          departement: 'Software Engineer',
          about:
            'Dan is a software engineer at React.js and facebook he also work in Facebook Open Source',
        },
        {
          id: 4,
          name: 'Resi Respati',
          gender: 'Male',
          departement: 'Senior FrontEnd Developer',
          about:
            'Resir is a senior frontend devs and passionate with proficient with css and js framework he work in Kata.ai',
        },
        {
          id: 5,
          name: 'Ryan Dahl',
          gender: 'Male',
          departement: 'Software Engineer',
          about: 'Ryan Dahl is a founder node.js he is a brilliant person',
        },
      ],
    };
  },
  methods: {
    deleteItem(item) {
      this.selectedItemIndex = this.employees.indexOf(item);
      // Use sweetalert2
      this.$swal({
        title: 'Are you sure want to delete?',
        icon: 'error',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteItemConfirm();
          this.$swal('Succes, user was deleted!', '', 'success');
        } else if (result.isDenied) {
          this.$swal('Changes are not saved', '', 'info');
        }
      });
    },
    deleteItemConfirm() {
      this.employees.splice(this.selectedItemIndex, 1);
    },
  },
};
</script>
