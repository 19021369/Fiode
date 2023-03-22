// Layouts
import Home from '~/pages/Home';
import Destinations from '~/pages/Destinations';
import Regions from '~/pages/Regions';
import FestivalsNEvents from '~/pages/FestivalsnEvents';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import SearchResults from '~/pages/SearchResults';
import Destination from '~/pages/Destination';
import Region from '~/pages/Region';
import Profile from '~/pages/Profile';
import FestivalsnEvent from '~/pages/Event';
import Blogs from '~/pages/Blogs';
import BlogPages from '~/pages/Blog';
import CreateBlogs from '~/pages/CreateBlogs';
// PublicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/destinations', component: Destinations },
    { path: '/regions', component: Regions },
    { path: '/festivals&events',component: FestivalsNEvents },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/searchresults/', component: SearchResults},
    { path: '/profile', component: Profile},
    { path: '/blogs', component: Blogs},
    { path: '/searchresults/:searcharea', component: SearchResults},
    { path: '/destinations/:destinationName', component: Destination},
    { path: '/regions/:regionName', component: Region},
    { path: '/festivals&events/:month/:eventName',component: FestivalsnEvent},
    { path: '/blogs/:blogName', component: BlogPages},
    { path: '/blogs/create', component: CreateBlogs},



]

const privateRoutes = [];

export { publicRoutes, privateRoutes };
