<template>
  <section class="row p-3 card">
    <div class="col-12 d-flex align-items-center justify-content-between">
      <router-link :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
        <div class="text-center">

          <img class="avatarPicture rounded-circle" :src="blog.creator.picture" :alt="blog.creator.name">
          <p>{{ blog.creator.name }}</p>
        </div>
      </router-link>
      <div>
        <h4><b>{{ blog.title }}</b></h4>
        <p>{{ blog.body }}</p>
      </div>
      <div>
        <img class="img-fluid" :src="blog.imgUrl" :alt="blog.title">
      </div>
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from "../models/Blog";
export default {
  props: {
    blog: { type: Blog, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 35vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.avatarPicture {
  height: 10vh;
  width: 10vh;
  object-fit: cover;
  object-position: center;
}
</style>