import { useRoutes } from "react-router-dom"
import { MetaRule, onRouteBeforeRule, RouteObjectRule } from "./guard"
import { getParams } from "./utils/getParams"
interface MetaRuleDefine extends MetaRule {
    auth?: boolean
}

interface RouterRule extends RouteObjectRule {
    meta?: MetaRuleDefine
}

export const routes: RouterRule[] = [
    {
        path: "/*",
        redirect: "/preview",
    },
    {
        path: "/editor",
        meta: {
            auth: false,
            title: "editor",
        },
        page: () => import("../editor/Editor"),
    },
    {
        path: "/preview",
        meta: {
            auth: false,
            title: "preview",
        },
        page: () => import("../preview/Preview"),
    },
    {
        path: "/404",
        meta: {
            auth: false,
            title: "404",
        },
        page: () => import("../error/404"),
    },
]

// 根据路径获取路由
const checkAuth = (routers: Array<RouteObjectRule>, path: string): any => {
    for (const data of routers) {
        if (data.path === path) return data
        if (data.children) {
            const res = checkAuth(data.children, path)
            if (res) return res
        }
    }
    return null
}

// 单个页面鉴权
export const checkRouterAuth = (path: string) => checkAuth(routes, path)

// 全局路由守卫
export const onRouteBefore: onRouteBeforeRule = (meta, to) => {
    const { auth, title } = meta
    let params = getParams();
    
    if (title) {
        document.title = title || "App"
    }
    // return to;
    // 权限验证
    console.log(params)
    if (auth) {
        if (params?.id) {
            return to
        } else {
            return "/404"
        }
    }
    return to

    // return (auth && !localStorage.getItem('access_token')) ? '/login' : to;
}

const Routes = () => useRoutes(routes)

export default Routes
