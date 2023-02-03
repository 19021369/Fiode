// Layouts
import {HeaderOnly} from '~/components/Layout';

import Home from '~/pages/Home';
import Destinations from '~/pages/Destinations';
import Upload from '~/pages/Upload';

// PublicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/destinations', component: Destinations },
    { path: '/upload', component: Upload, layout: HeaderOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
