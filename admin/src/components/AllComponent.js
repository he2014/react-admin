import asyncComponent from "./publicComponent/asyncComponent"//异步加载

import Home from "./home/Home"
import Userdetail from "./pages/users/Userdetail";
import Usermessage from "./pages/users/Usermessage";
import Chatmonitor from "./pages/monitor/Chatmonitor";
import Videomonitor from "./pages/monitor/Videomonitor"
// const Home = asyncComponent(() => import("./home/Home"))
// const Userdetail = asyncComponent(() => import("./pages/users/Userdetail"))
// const Usermessage = asyncComponent(() => import("./pages/users/Usermessage"))
// const Chatmonitor = asyncComponent(() => import("./pages/monitor/Chatmonitor"))
// const Videomonitor = asyncComponent(() => import("./pages/monitor/Videomonitor"))


export default {
    Home, Userdetail, Usermessage, Chatmonitor, Videomonitor

}

