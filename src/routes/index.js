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

// PublicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/destinations', component: Destinations },
    { path: '/regions', component: Regions },
    { path: '/festivals&events',component: FestivalsNEvents },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/searchresults/', component: SearchResults},
    { path: '/searchresults/:searcharea', component: SearchResults},
    { path: '/destinations/:destinationName', component: Destination},
    { path: '/regions/:regionName', component: Region},
    

]

const privateRoutes = [];

export { publicRoutes, privateRoutes };
