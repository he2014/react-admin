// import React from "react"

export default {
    menus: [
        { key: '/admin/home', title: "Home", component: "Home", hide: true },
        {
            key: "/admin/user", title: "用户管理", icon: "profile",
            subs: [
                { key: "/admin/user/msg", title: "用户详情", component: "Usermessage" },
                { key: "/admin/user/detail", title: "用户详情", component: "Userdetail" }
            ]
        },
        {
            key: "/admin/monitor", title: "监控中心", icon: "video-camera",
            subs: [
                { key: "/admin/monitor/video", title: "视频监控", component: "Videomonitor" },
                { key: "/admin/monitor/chat", title: "语聊监控", component: "Chatmonitor" }
            ]
        }


    ]

}