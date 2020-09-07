<template>
  <div>
    <h1 class="title">Books</h1>

    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>6</strong> books
          </p>
        </div>

        <p class="level-item">
          <a href="" class="button is-success">New</a>
        </p>

        <div class="level-item is-hidden-tablet-only">
          <div class="field has-addons">
            <p class="control">
              <input type="text" class="input" placeholder="Book name, ISBN..." >
            </p>
            <p class="control">
              <button class="button" >Search</button>
            </p>
          </div>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          Order by
        </div>
        <div class="level-item">
          <div class="select">
            <select>
              <option>Publish date</option>
              <option>Price</option>
              <option>Page count</option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns is-multiline">
      <div class="column is-12-tablet is-6-desktop is-4-widescreen" v-for="book in list" v-bind:key="book.id">
        <article class="box">
          <div class="media">
            <aside class="media-left">
              <img v-bind:src="book.imgUrl" width="80">
            </aside>
            <div class="media-content">
              <p class="title is-5 is-spaced is-marginless">
                <a href="edit-book.html">{{book.name}}</a>
              </p>
              <p class="subtitle is-marginless">
                ${{book.price}}
              </p>
              <div class="content is-small">
                {{ book.pages }} pages
                <br>
                ISBN: {{book.isbn}}
                <br>
                <a href="user.html">Edit</a>
                <span>·</span>
                <a>Delete</a>
                <p></p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <page-controls></page-controls>
  </div>
</template>

<script>

import PageControls from "../../components/pagination/pageControls";

export default {
  name: "bookList",
  components:{
    PageControls,
  },
  data(){
    return {
      list: [
        { id: 1, name: 'TensorFlow For Machine Intelligence', price: 22.99, pages: 270, isbn: '9781939902351', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
        { id: 2, name: 'Docker in Production', price: 22.99, pages: 156, isbn: '9781939902184', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
        { id: 3, name: 'Developing a Gulp.js Edge', price: 22.99, pages: 134, isbn: '9781939902146', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
        { id: 4, name: 'Learning Swift', price: 22.99, pages: 342, isbn: '9781939902115', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
        { id: 5, name: 'Choosing a JavaScript Framework', price: 22.99, pages: 96, isbn: '9781939902092', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
        { id: 6, name: 'Deconstructing Google Cardboard Apps', price: 22.99, pages: 178, isbn: '9781939902245', imgUrl: 'https://picsum.photos/seed/picsum/162/210'}
      ]
    }
  },
  computed:{

  },
  methods: {


  }
}
</script>

<style scoped>

</style>
