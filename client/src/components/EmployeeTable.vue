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
import axios from 'axios';

export default {
  mounted() {
    axios
      .get('http://localhost:5000/api/employees/')
      .then((response) => {
        this.employees = response.data;
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  },
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
      // Employees data  will be forced if we using axios to get the data in db
      employees: [],
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
          const deleteEmployee = this.employees[this.selectedItemIndex];
          axios
            .delete(`http://localhost:5000/api/employees/${deleteEmployee.id}`)
            .then((response) => {
              this.employees.splice(this.selectedItemIndex, 1);
              console.log(response.data);
            })
            .catch((error) => console.log(error));
          this.$swal('Succes, user was deleted!', '', 'success');
        } else if (result.isDenied) {
          this.$swal('Changes are not saved', '', 'info');
        }
      });
    },
  },
};
</script>
