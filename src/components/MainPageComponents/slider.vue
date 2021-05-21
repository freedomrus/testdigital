<template>
  <hooper :settings="hooperSettings">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    ...

    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-progress slot="hooper-addons"></hooper-progress>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true
      }
    };
  }
};
</script>