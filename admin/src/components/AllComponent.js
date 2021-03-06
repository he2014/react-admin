import Loadable from 'react-loadable';
import Loading from './Loading';

const Home = Loadable({
    loader: () => import("./home/Home"),
    loading: Loading,
});
const Userdetail = Loadable({
    loader: () => import("./pages/users/Userdetail"),
    loading: Loading,
});
const Usermessage = Loadable({
    loader: () => import("./pages/users/Usermessage"),
    loading: Loading
});
const Chatmonitor = Loadable({
    loader: () => import("./pages/monitor/Chatmonitor"),
    loading: Loading
});
const Videomonitor = Loadable({
    loader: () => import("./pages/monitor/Videomonitor"),
    loading: Loading
});
const DynamicTable = Loadable({
    loader: () => import("./pages/datas/DynamicTable"),
    loading: Loading
});
const Echarts = Loadable({
    loader: () => import("./pages/datas/Echarts"),
    loading: Loading
});



export default {
    Home, Userdetail, Usermessage, Chatmonitor, Videomonitor, DynamicTable,
    Echarts


}

