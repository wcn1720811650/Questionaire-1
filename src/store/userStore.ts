import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () =>
        (
            {
                username:'',
                password:'',
                token:''
            }
        ),

    actions: {
        setToken(token:string) {
            this.token = token
        },
    },
})