import component from "*.vue";
import QuestionairePage from '../layouts/QuestionairePage.vue'

import RegisterPage from '../layouts/RegisterPage.vue'
import TestPage from '../layouts/TestPage.vue'

const routes = [
    {
        path:"/question",
        component: QuestionairePage
    },

    {
        path:"/register",
        component: RegisterPage
    },

    {
        path:"/test",
        component: TestPage
    },

]

export default routes;