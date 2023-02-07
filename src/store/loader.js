import {defineStore} from "pinia";
export const useLoaderStore = defineStore("useLoaderStore", {
      state: ()=> {
            return {
                  isLoading: false
            }
      }
})