<template>
  <div>
    <Hero></Hero>
    <div class="row">
      <ProductsTable></ProductsTable>
      <ProductsForm></ProductsForm>
    </div>
    <UsersTable></UsersTable>
  </div>
</template>
<script>
import Hero from '@/components/Hero.vue';
import ProductsTable from '@/components/ProductsTable.vue';
import UsersTable from '@/components/UsersTable.vue';
import ProductsForm from '@/components/ProductsForm.vue';

export default {
  components: {
    Hero,
    ProductsTable,
    UsersTable,
    ProductsForm,
  },
};
</script>
<style>
.table-responsive {
  max-height: 260px;
}
</style>
