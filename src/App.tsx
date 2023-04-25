// import './App.css';
import { BrowserRouter } from "react-router-dom"
import { onRouteBefore, routes } from "./router"
import RouterGuard from "./router/guard"


function App() {
    return (
        <>
            <BrowserRouter>
                <RouterGuard routers={routes} onRouterBefore={onRouteBefore} />
            </BrowserRouter>
        </>
    )
}
console.log(document.cookie);
export default App
