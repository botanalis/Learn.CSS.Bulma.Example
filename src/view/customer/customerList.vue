<template>
  <div>
    <h1 class="title">Customers</h1>
  </div>
</template>

<script>
export default {
  name: "customerList",
  data(){
    return {
      //Form表單
      urlParame:{
        //關鍵字
        searchTerm: "",
      }
    }
  },
  methods:{
    //分頁URL
    handlePage(page, limit){
      if (this.urlParame.searchTerm){
        this.$router.push({ name: "customerList", query: {Page: page, Limit: limit, Key: this.urlParame.searchTerm}}).catch(()=>{});
      }else{
        this.$router.push({ name: "customerList", query: {Page: page, Limit: limit}}).catch(()=>{});
      }
    },
    async List(){
      console.log('getList');
    },
  },
  async created(){
    console.log(this.$route.query);
    if (this.$route.query.Page && this.$route.query.Limit){
      //搜尋條件[關鍵字]
      //搜尋條件[關鍵字]
      if (this.$route.query.Key){
        this.urlParame.searchTerm = this.$route.query.Key;
        this.setSearchTerm(this.$route.query.Key);
      }
      this.setPageSize(this.$route.query.Limit);
      this.setCurrentPage(this.$route.query.Page);

      if (this.$store.state.query.isAction){
        this.urlParame.searchTerm = this.$store.state.constructor.searchTerm;
      }

      this.List();

    }else {
      //未帶分頁資訊
      this.handlePage(1,5);
    }
  }
}
</script>

<style scoped>

</style>
