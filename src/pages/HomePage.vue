<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-12 d-flex align-items-center p-2">
        <p>New Post</p>
        <button data-bs-toggle="modal" data-bs-target="#newBlogModal" class="btn btn-outline-primary ms-2">+</button>
      </div>
      <div v-for="blog in blogs" :key="blog.id" class="col-8 p-4">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
  <NewBlogModal />
</template>

<script>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService";
import { AppState } from "../AppState.js"
import BlogCard from "../components/BlogCard.vue";
import NewBlogModal from "../components/NewBlogModal.vue";

export default {
  setup() {
    onMounted(() => {
      getBlogs();
    });
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard, NewBlogModal }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

p {
  margin-bottom: 0;
}
</style>
