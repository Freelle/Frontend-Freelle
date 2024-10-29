import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import UserService from '@/services/user';

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    users: []
  });

  const users = computed(() => state.users);

  const getAllUsers = async () => {
    const data = await UserService.getAllUsers();
    state.users = data.results;
  };


  return { users, getAllUsers };
});
