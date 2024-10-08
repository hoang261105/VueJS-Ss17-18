<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <router-link exact-active-class="active" to="/admin"
        >Dashboard</router-link
      >
      <router-link active-class="active" to="/admin/users">User</router-link>
      <router-link active-class="active" to="/admin/products"
        >Product</router-link
      >
      <router-link active-class="active" to="/admin/settings"
        >Setting</router-link
      >
    </nav>
    <router-view v-slot="{ Component }">
      <Suspense>
        <template #default>
          <component :is="Component"></component>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>
<script setup></script>
<style>
.active {
  background: red;
}
</style>
