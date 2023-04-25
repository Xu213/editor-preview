/**
 * @description 自定义标题组件
 */

import { BasePlugin, getSchemaTpl } from "amis-editor"
import schema from './schema.json'

export default class SchemaSlotPlugin extends BasePlugin {
    rendererName = "schema-slot"

    searchKeywords = "手机导图"

    // 暂时只支持这个，配置后会开启代码编辑器
    $schema = "/schemas/UnkownSchema.json"

    // 用来配置名称和描述
    name = "手机导图"
    description = "四 图标文字导航"
	

    // tag，决定会在哪个 tab 下面显示的
    tags = ["手机导图"]

    // 图标
    icon = "far fa-file-word"

    // 拖入组件里面时的初始数据
    scaffold = schema
    
    // 用来生成预览图的
    previewSchema = {
        ...schema,
    }
    // 右侧面板相关
    panelTitle = "手机导图"
    panelBodyCreator(context: { id: any }) {
        return [
            getSchemaTpl("tabs", [
                {
                    title: "常规",
                    body: [
                        getSchemaTpl("switch", {
                            name: "showAbout",
                            label: "隐藏标题",
                        }),
                    ],
                },
                {
                    title: "接口",
                    body: [
                        getSchemaTpl("api", {
                            name: "api",
                            label: "接口地址",
                            description:
                                " 接口存在跨域问题，需要后端代理，请在此填写接口地址",
                        }),
                    ],
                },
                {
                    title: "外观",
                    body: [getSchemaTpl("className")],
                },
            ]),
        ]
    }
}
