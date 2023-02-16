// Layouts
import {HeaderOnly} from '~/components/Layout';

import Home from '~/pages/Home';
import Destinations from '~/pages/Destinations';

// PublicRoutes
const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly},
    { path: '/destinations', component: Destinations, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
