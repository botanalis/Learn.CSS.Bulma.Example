<template>
  <div>
    <Header />
    <section class="section">
      <div class="columns">
        <!--左邊欄位-->
        <Menu />
        <!--右邊欄位-->
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./shared/header";
import Menu from "./shared/menu";

export default {
  name: "demo",
  components:{
    Header,
    Menu
  }
}
</script>

<style scoped>

</style>
