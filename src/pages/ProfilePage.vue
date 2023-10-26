<template>
  <div class="container-fluid">
    <section class="row p-3">
      <div class="col-4">
        <img class="profile-img" :src="profile?.picture" :alt="profile?.name">
      </div>
      <div class="col-8">
        <h1>{{ profile?.name }}</h1>

      </div>
    </section>
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import { profilesService } from "../services/ProfilesService"
import BlogCard from "../components/BlogCard.vue";
export default {
  setup() {
    onMounted(() => {
      getProfileById();
      getBlogsByProfileId();
    });
    const route = useRoute();
    async function getProfileById() {
      try {
        const profileId = route.params.profileId;
        logger.log('profile id:', profileId);
        await profilesService.getProfileById(profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function getBlogsByProfileId() {
      try {
        const profileId = route.params.profileId;
        await profilesService.getBlogsByProfileId(profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
};
</script>


<style lang="scss" scoped>
.profile-img {
  height: 25vh;
  width: 25vh;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
</style>