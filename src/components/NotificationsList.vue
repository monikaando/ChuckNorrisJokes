<template>
  <div class="notifications-list me-2">
    <NotificationMesage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NotificationMesage from "./NotificationMesage";

export default {
  components: {
    NotificationMesage,
  },
  computed: {
    ...mapGetters(["notifications"]),
  },
};
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 20px;
  right: 0;
  width: 320px;
}
</style>