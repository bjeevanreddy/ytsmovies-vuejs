import Home from './pages/Home.vue';
import Series from './pages/Series.vue';
import Movie from './pages/Movie.vue';
// import MovieInfo from './components/MovieInfo.vue';
export default
[
    {
        path:'/',
        component:Home
    },{
        path:'/movies',
        component: Movie
    },
    {
        path:'/series',
        component:Series
    }

]
    
