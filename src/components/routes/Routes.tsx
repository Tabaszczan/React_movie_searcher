import Home from '../../views/home/Home'
import Search from '../../views/search/Search'
import Movie from '../../views/movie/Movie'
import Favorites from '../../views/favorites/Favorites'
const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        component: Home,
    },
    {
        path: '/search',
        sidebarName: 'Search',
        component: Search,
    },
    {
        path: '/favorites',
        sidebarName: 'Favorites',
        component: Favorites,
    },
    {
        path: '/movie',
        sidebarName: 'Movie',
        component: Movie,
    },
];
export default Routes;