import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/RentalCar/', component:()=>import('/src/components/Auth/SignIn.vue')},
    {path: '/RentalCar/signup', component:()=>import('/src/components/Auth/SignUp.vue')},
    {path: '/RentalCar/home', component:()=>import('/src/components/Home.vue')},
    {path: '/RentalCar/overview', component:()=>import('/src/components/CarsOverview.vue')},
    {path: '/RentalCar/book', component:()=>import('/src/components/BookCar.vue')},
    {path: '/RentalCar/review', component:()=>import('/src/components/ReviewSummary.vue')},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})