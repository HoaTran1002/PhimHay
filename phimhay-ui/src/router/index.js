import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import ShortVideos from '~/pages/ShortVideos';
import Upload from '~/pages/Upload';

const publicRouter = [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
    { path: '/Profile', component: Profile, layout: null },
    { path: '/Upload', component: Upload },
    { path: '/ShortVideos', component: ShortVideos },
];

export { publicRouter };
