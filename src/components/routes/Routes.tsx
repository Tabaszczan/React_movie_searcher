import Home from '../../views/home/Home'
import Search from '../../views/search/Search'

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
];
export default Routes;