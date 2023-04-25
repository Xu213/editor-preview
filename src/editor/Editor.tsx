import * as React from "react"
import { Editor, ShortcutKey } from "amis-editor"
// import { __uri } from "amis-core"
import "amis-ui/lib/themes/default.css"
import "amis-ui/lib/themes/cxd.css"
import "./fontawesome-free/all.min.css"
import "./fontawesome-free/v4-shims.css"
import "./style.css" // demo样式文件
import "amis-editor-core/lib/style.css"
import registerCompoments from "../customComponents/register"

import CrudJson from "../tpl/crud.json"
import EmtyJson from "../tpl/emty.json"

import { getJson, saveJson } from "../api"
import { getParams } from "../router/utils/getParams"
// import { useEffect } from "react"

let defaultJson: any = CrudJson

registerCompoments() //注册自定义组件

function XEditor() {

    
    let params = getParams();
    
    if(params?.id){

        getJson(params.id).then((res: any) => {
            defaultJson = res
            console.log("getJson", res)
            localStorage.setItem(
                "editting_schema",
                JSON.stringify(defaultJson)
            )
        })
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [jsonID, _] = React.useState(params?.id || 'sdfsdfsdfsfdsdf')

    const [preview, setPreview] = React.useState(
        localStorage.getItem("editting_preview") ? true : false
    )
    const [isMobile, setIsMobile] = React.useState(
        [null, "true", true].includes(
            localStorage.getItem("editting_preview_mobile")
        )
            ? true
            : false
    )
    const [schema, setSchema] = React.useState(
        localStorage.getItem("editting_schema")
            ? JSON.parse(localStorage.getItem("editting_schema") || "")
            : defaultJson
    )

    const handleChange = (value: any) => {
        localStorage.setItem("editting_schema", JSON.stringify(value))

        setSchema(value)
    }

    const onSave = () => {
        const curSchema = schema
        localStorage.setItem("editting_schema", JSON.stringify(curSchema))
        saveJson(jsonID, curSchema).then((res: any) => {
            defaultJson = res
            console.log("getJson", res)
            localStorage.setItem("editting_schema", JSON.stringify(defaultJson))
        })
    }

    const handlePreviewChange = (preview: boolean) => {
        localStorage.setItem("editting_preview", preview ? "true" : "")

        setPreview(!!preview)
    }

    const togglePreview = () => {
        handlePreviewChange(!preview)
    }

    const handleMobileChange = (isMobile: boolean) => {
        localStorage.setItem("editting_preview_mobile", isMobile ? "true" : "")

        setIsMobile(!!isMobile)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const clearCache = () => {
        localStorage.removeItem("editting_schema")

        setSchema(EmtyJson)
    }


    
    return (
        <div className="Editor-Demo">
            <div className="Editor-header">
                <div className="Editor-title">页面ID:{jsonID}</div>
                <div className="Editor-view-mode-group-container">
                    <div className="Editor-view-mode-group">
                        <div
                            className={`Editor-view-mode-btn ${
                                !isMobile ? "is-active" : ""
                            }`}
                            onClick={() => {
                                // alert("请使用移动端！")
                                handleMobileChange(false)
                            }}
                        >
                            PC
                        </div>
                        <div
                            className={`Editor-view-mode-btn ${
                                isMobile ? "is-active" : ""
                            }`}
                            onClick={() => {
                                handleMobileChange(true)
                            }}
                        >
                            移动
                        </div>
                    </div>
                </div>

                <div className="Editor-header-actions">
                    <ShortcutKey />
                    {/* margin-left-space  */}
                    <div
                        className={`header-action-btn preview-btn  margin-left-space`}
                        onClick={() => {
                            clearCache()
                        }}
                    >
                        清空
                    </div>
                    <div
                        className={`header-action-btn  margin-left-space`}
                        onClick={() => {
                            togglePreview()
                        }}
                    >
                        {preview ? "编辑" : "预览"}
                    </div>
                </div>
            </div>
            <div className="Editor-inner">
                <Editor
                    preview={preview}
                    isMobile={isMobile}
                    value={schema}
                    onChange={handleChange}
                    onPreview={handlePreviewChange}
                    onSave={onSave}
                    className="is-fixed"
                    theme="cxd"
                    showCustomRenderersPanel={true}
                    // plugins={plugins}
                    // iframeUrl={'/examples/editor.html'}
                    // eslint-disable-next-line no-restricted-globals
                    $schemaUrl={`${location.protocol}//${location.host}/schema.json`}
                />
            </div>
        </div>
    )
}

export default XEditor
