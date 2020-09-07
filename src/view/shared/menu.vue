<template>
  <div class="column is-4-table is-3-desktop is-2-widescreen">
    <nav class="menu">
      <p class="menu-label">
        Menu
      </p>
      <ul class="menu-list">
        <li>
          <router-link v-bind:to="{name: 'dashboard'}">
                  <span class="icon">
                    <i class="fa fa-tachometer"></i>
                  </span>
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="{name: 'bookList'}" class="is-active">
                  <span class="icon">
                    <i class="fa fa-book"></i>
                  </span>
            Books
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="{name: 'customerList'}">
                  <span class="icon">
                  <i class="fa fa-address-book"></i>
                </span>
            Customers
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="{name: 'orderList'}">
                  <span class="icon">
                    <i class="fa fa-file-text-o"></i>
                  </span>
            Orders
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>

</style>
