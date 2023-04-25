import { useLocation } from "react-router-dom"

export const getParams = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { search } = useLocation()
    let pageporp: { [x: string]: string } = {},
        pageporparr = search && search.split("?")[1].split("&")
    pageporparr &&
        pageporparr.forEach(i => {
            let [key, value] = i.split("=")
            pageporp[key as string] = value as string
        })
    return pageporp;
}