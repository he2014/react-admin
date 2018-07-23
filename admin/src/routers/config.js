// import React from "react"
import ComponentsAll from "../components/AllComponent"
export default {
    menus: [
        { key: '/admin/home', title: "首页", icon: "bars", component: ComponentsAll.Home },
        {
            key: "/admin/user", title: "用户管理", inco: "profile",
            subs: [
                { key: "/admin/user/msg", title: "用户详情", component: ComponentsAll.Usermessage },
                { key: "/admin/user/detail", title: "用户详情", component: ComponentsAll.Userdetail }
            ]
        },
        {
            key: "/admin/monitor", title: "监控中心", icon: "video-camera",
            subs: [
                { key: "/admin/monitor/video", title: "视频监控", component: ComponentsAll.Videomonitor },
                { key: "/admin/monitor/chat", title: "语聊监控", component: ComponentsAll.Chatmonitor }
            ]
        }


    ]

}