import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// import Editor from "./editor/Editor"
// import Preview from "./preview/Preview"
import reportWebVitals from "./reportWebVitals"
import "amis/sdk/iconfont.css"
import "amis/lib/themes/cxd.css"
import "amis/lib/helper.css"

import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/css/v4-shims.css"

import "amis-editor-core/lib/style.css"

// console.log(process.env.AMIS_TYPE)
// if (process.env.AMIS_TYPE === "editor")
//     ReactDOM.render(<Editor />, document.getElementById("root"))
// if (process.env.AMIS_TYPE === "preview")
//     ReactDOM.render(<Preview />, document.getElementById("root"))
ReactDOM.render(<App />, document.getElementById("root"))

reportWebVitals()
