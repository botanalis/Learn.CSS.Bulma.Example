<template>
  <div>
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <!--Logo,品牌理念-->
        <a class="navbar-item">
          <img src="../assets/logo.png">
        </a>
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <!--選單-->
        <div class="navbar-start">
          <div class="navbar-item">
            <div>
              <small>Publishing at the speed of technology</small>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Root Admin
            </div>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-user-circle-o"></i>
                  </span>
                  Profile
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-bug"></i>
                  </span>
                  Report bug
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-sign-out"></i>
                  </span>
                  Sing Out
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="columns">
        <!--左邊欄位-->
        <div class="column is-4-table is-3-desktop is-2-widescreen">
          <nav class="menu">
            <p class="menu-label">
              Menu
            </p>
            <ul class="menu-list">
              <li>
                <a href="">
                  <span class="icon">
                    <i class="fa fa-tachometer"></i>
                  </span>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="" class="is-active">
                  <span class="icon">
                    <i class="fa fa-book"></i>
                  </span>
                  Books
                </a>
              </li>
              <li>
                <a href="">
                  <span class="icon">
                  <i class="fa fa-address-book"></i>
                </span>
                  Customers
                </a>
              </li>
              <li>
                <a href="">
                  <span class="icon">
                    <i class="fa fa-file-text-o"></i>
                  </span>
                  Orders
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!--右邊欄位-->
        <div class="column"></div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
name: "demo"
}
</script>

<style scoped>

</style>
