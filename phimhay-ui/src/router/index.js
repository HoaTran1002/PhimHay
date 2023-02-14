import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';

const publicRouter = [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
    { path: '/Profile', component: Profile },
];

export { publicRouter };
