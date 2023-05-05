import type SerializedAppState from "./ComfyApp"

const defaultGraph: SerializedAppState = {
    createdBy: "ComfyBox",
    version: 1,
    workflow: {
        last_node_id: 75,
        last_link_id: 101,
        nodes: [
            {
                id: 19,
                type: "ui/slider",
                pos: [
                    21.195500000002912,
                    238.6263000000003
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 0,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            18
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 8,
                    min: 0,
                    max: 100,
                    step: 0.5,
                    precision: 0
                },
                widgets_values: [
                    "8.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 8,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 20,
                type: "ui/combo",
                pos: [
                    21.195500000002912,
                    258.62630000000024
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 1,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            19
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Combo",
                properties: {
                    defaultValue: "euler",
                    values: [
                        "euler",
                        "euler_ancestral",
                        "heun",
                        "dpm_2",
                        "dpm_2_ancestral",
                        "lms",
                        "dpm_fast",
                        "dpm_adaptive",
                        "dpmpp_2s_ancestral",
                        "dpmpp_sde",
                        "dpmpp_2m",
                        "ddim",
                        "uni_pc",
                        "uni_pc_bh2"
                    ]
                },
                widgets_values: [
                    "euler"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "euler",
                shownOutputProperties: {}
            },
            {
                id: 21,
                type: "ui/combo",
                pos: [
                    21.195500000002912,
                    278.6263000000003
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 2,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            20
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Combo",
                properties: {
                    defaultValue: "karras",
                    values: [
                        "karras",
                        "normal",
                        "simple",
                        "ddim_uniform"
                    ]
                },
                widgets_values: [
                    "karras"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "karras",
                shownOutputProperties: {}
            },
            {
                id: 22,
                type: "ui/slider",
                pos: [
                    21.195500000002912,
                    358.6263000000003
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 3,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            21
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 1,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    precision: 0
                },
                widgets_values: [
                    "1.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 1,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 33,
                type: "ui/text",
                pos: [
                    -347.6124999999959,
                    309.06430000000114
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 4,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            30
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Text",
                properties: {
                    defaultValue: "",
                    multiline: true
                },
                widgets_values: [
                    "masterpiece, best quality, 1girl, dress, space opera, portrait, planet landscape, starry sky"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "masterpiece, best quality, 1girl, dress, space opera, portrait, planet landscape, starry sky",
                shownOutputProperties: {}
            },
            {
                id: 35,
                type: "ui/text",
                pos: [
                    -346.40249999999617,
                    399.8143000000014
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 5,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            31
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Text",
                properties: {
                    defaultValue: "",
                    multiline: true
                },
                widgets_values: [
                    "worst quality, bad quality, nsfw"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "worst quality, bad quality, nsfw",
                shownOutputProperties: {}
            },
            {
                id: 45,
                type: "ui/text",
                pos: [
                    537.2416,
                    196.97919999999982
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 6,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            43
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Text",
                properties: {
                    defaultValue: "ComfyUI",
                    multiline: false
                },
                widgets_values: [
                    "ComfyUI"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "ComfyUI",
                shownOutputProperties: {}
            },
            {
                id: 34,
                type: "CLIPTextEncode",
                pos: [
                    -216,
                    376
                ],
                size: [
                    216.60000000000002,
                    46
                ],
                flags: {},
                order: 23,
                mode: 0,
                inputs: [
                    {
                        name: "text",
                        type: "string",
                        link: 31,
                        config: {
                            defaultValue: "",
                            multiline: true
                        },
                        serialize: true
                    },
                    {
                        name: "clip",
                        type: "CLIP",
                        link: 100,
                        color_off: "orange",
                        color_on: "orange"
                    }
                ],
                outputs: [
                    {
                        name: "CONDITIONING",
                        type: "CONDITIONING",
                        links: [
                            32
                        ],
                        color_off: "orange",
                        color_on: "orange",
                        slot_index: 0
                    }
                ],
                title: "CLIPTextEncode",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 18,
                type: "ui/slider",
                pos: [
                    23.09800000000005,
                    221.662
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 7,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            17
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 20,
                    min: 1,
                    max: 10000,
                    step: 1,
                    precision: 0
                },
                widgets_values: [
                    "20.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 20,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 39,
                type: "ui/slider",
                pos: [
                    -348.53590000000014,
                    532.0385000000008
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 8,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            38,
                            83
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 1,
                    min: 1,
                    max: 64,
                    step: 1,
                    precision: 0
                },
                widgets_values: [
                    "4.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 4,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 66,
                type: "basic/string",
                pos: [
                    -1159.8159275999997,
                    161.70724299999867
                ],
                size: [
                    210,
                    38
                ],
                flags: {},
                order: 9,
                mode: 0,
                inputs: [],
                outputs: [
                    {
                        name: "string",
                        type: "string",
                        links: [
                            78
                        ],
                        slot_index: 0
                    }
                ],
                title: "Const String",
                properties: {
                    value: "randomize"
                }
            },
            {
                id: 57,
                type: "ui/combo",
                pos: [
                    -1213.4681676,
                    392.2234730000002
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 10,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            55,
                            79
                        ],
                        slot_index: 0
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Combo",
                properties: {
                    defaultValue: "randomize",
                    values: [
                        "fixed",
                        "increment",
                        "decrement",
                        "randomize"
                    ]
                },
                widgets_values: [
                    "randomize"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "randomize",
                shownOutputProperties: {}
            },
            {
                id: 56,
                type: "utils/value_control",
                pos: [
                    -1087.4681676000018,
                    324.22347300000024
                ],
                size: [
                    151.2,
                    126
                ],
                flags: {},
                order: 34,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: 68
                    },
                    {
                        name: "trigger",
                        type: -1,
                        link: 73,
                        shape: 1
                    },
                    {
                        name: "action",
                        type: "string",
                        link: 55,
                        config: {
                            defaultValue: "randomize",
                            values: [
                                "fixed",
                                "increment",
                                "decrement",
                                "randomize"
                            ]
                        }
                    },
                    {
                        name: "min",
                        type: "number",
                        link: 69
                    },
                    {
                        name: "max",
                        type: "number",
                        link: 70
                    },
                    {
                        name: "step",
                        type: "number",
                        link: 88
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "*",
                        links: [
                            67
                        ],
                        slot_index: 0
                    }
                ],
                title: "Comfy.ValueControl",
                properties: {
                    value: 572904899609889,
                    action: "randomize",
                    min: 0,
                    max: 18446744073709552000,
                    step: 1
                }
            },
            {
                id: 63,
                type: "utils/selector2",
                pos: [
                    -661.4681676000001,
                    131.22347299999896
                ],
                size: [
                    140,
                    66
                ],
                flags: {},
                order: 35,
                mode: 0,
                inputs: [
                    {
                        name: "select",
                        type: "boolean",
                        link: 74
                    },
                    {
                        name: "true",
                        type: "*",
                        link: 75
                    },
                    {
                        name: "false",
                        type: "*",
                        link: 86,
                        slot_index: 2
                    }
                ],
                outputs: [
                    {
                        name: "out",
                        type: "*",
                        links: [
                            87,
                            88
                        ],
                        slot_index: 0
                    }
                ],
                title: "Comfy.Selector2",
                properties: {
                    value: null
                }
            },
            {
                id: 36,
                type: "EmptyLatentImage",
                pos: [
                    -218.53589999999943,
                    468.03850000000097
                ],
                size: [
                    216.60000000000002,
                    66
                ],
                flags: {},
                order: 28,
                mode: 0,
                inputs: [
                    {
                        name: "width",
                        type: "number",
                        link: 93,
                        config: {
                            min: 64,
                            max: 8192,
                            step: 8,
                            precision: 0,
                            defaultValue: 512
                        },
                        serialize: true
                    },
                    {
                        name: "height",
                        type: "number",
                        link: 94,
                        config: {
                            min: 64,
                            max: 8192,
                            step: 8,
                            precision: 0,
                            defaultValue: 512
                        },
                        serialize: true
                    },
                    {
                        name: "batch_size",
                        type: "number",
                        link: 38,
                        config: {
                            min: 1,
                            max: 64,
                            step: 1,
                            precision: 0,
                            defaultValue: 1
                        },
                        serialize: true
                    }
                ],
                outputs: [
                    {
                        name: "LATENT",
                        type: "LATENT",
                        links: [
                            39
                        ],
                        color_off: "orange",
                        color_on: "orange",
                        slot_index: 0
                    }
                ],
                title: "EmptyLatentImage",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 38,
                type: "ui/slider",
                pos: [
                    -349.5359000000001,
                    510.0385000000006
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 30,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: 91
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            90,
                            94
                        ],
                        slot_index: 0
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 512,
                    min: 64,
                    max: 8192,
                    step: 8,
                    precision: 0
                },
                widgets_values: [
                    "512.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 512,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 37,
                type: "ui/slider",
                pos: [
                    -350.5359000000001,
                    487.0385000000008
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 29,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: 92
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            89,
                            93
                        ],
                        slot_index: 0
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 512,
                    min: 64,
                    max: 8192,
                    step: 8,
                    precision: 0
                },
                widgets_values: [
                    "512.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 512,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 62,
                type: "ui/button",
                pos: [
                    -646.5358999999994,
                    528.0385000000008
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 11,
                mode: 0,
                inputs: [],
                outputs: [
                    {
                        name: "clicked",
                        type: -2,
                        links: [
                            95
                        ],
                        shape: 1,
                        slot_index: 0
                    },
                    {
                        name: "isClicked",
                        type: "boolean",
                        links: null
                    }
                ],
                title: "UI.Button",
                properties: {
                    defaultValue: false,
                    message: "bang"
                },
                widgets_values: [
                    "false"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: false,
                shownOutputProperties: {}
            },
            {
                id: 75,
                type: "ui/combo",
                pos: [
                    -329.6916311399999,
                    184.27962460075804
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 12,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "string",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "string",
                        links: [
                            97
                        ]
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    }
                ],
                title: "UI.Combo",
                properties: {
                    defaultValue: "AbyssOrangeMix2_nsfw.safetensors",
                    values: [
                        "AbyssOrangeMix2_nsfw.safetensors",
                        "refslaveV2_v2.safetensors"
                    ]
                },
                widgets_values: [
                    "refslaveV2_v2.safetensors"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: "refslaveV2_v2.safetensors",
                shownOutputProperties: {}
            },
            {
                id: 70,
                type: "basic/watch",
                pos: [
                    -494.46816760000047,
                    153.2234729999992
                ],
                size: [
                    140,
                    26
                ],
                flags: {
                    collapsed: true
                },
                order: 36,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: 0,
                        link: 87,
                        label: "1.000"
                    }
                ],
                outputs: [],
                title: "Watch",
                properties: {
                    value: 1
                }
            },
            {
                id: 67,
                type: "math/operation",
                pos: [
                    -632.1603378,
                    295.01834139999994
                ],
                size: [
                    140,
                    46
                ],
                flags: {},
                order: 19,
                mode: 0,
                inputs: [
                    {
                        name: "A",
                        type: "number,array,object",
                        link: 85
                    },
                    {
                        name: "B",
                        type: "number",
                        link: 83
                    }
                ],
                outputs: [
                    {
                        name: "=",
                        type: "number",
                        links: [
                            86
                        ],
                        slot_index: 0
                    }
                ],
                title: "Operation",
                properties: {
                    A: 1,
                    B: 4,
                    OP: "+"
                }
            },
            {
                id: 69,
                type: "basic/integer",
                pos: [
                    -889.9041880999993,
                    298.8132760000001
                ],
                size: [
                    210,
                    38
                ],
                flags: {},
                order: 13,
                mode: 0,
                inputs: [],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            85
                        ],
                        label: "1",
                        slot_index: 0
                    }
                ],
                title: "Const Integer",
                properties: {
                    value: 1
                }
            },
            {
                id: 16,
                type: "KSampler",
                pos: [
                    186.09800000000004,
                    158.662
                ],
                size: [
                    161.2,
                    206
                ],
                flags: {},
                order: 26,
                mode: 0,
                inputs: [
                    {
                        name: "model",
                        type: "MODEL",
                        link: 98,
                        color_off: "orange",
                        color_on: "orange"
                    },
                    {
                        name: "seed",
                        type: "number",
                        link: 80,
                        config: {
                            min: 0,
                            max: 18446744073709552000,
                            step: 1,
                            precision: 0,
                            defaultValue: 0
                        },
                        serialize: true
                    },
                    {
                        name: "steps",
                        type: "number",
                        link: 17,
                        config: {
                            min: 1,
                            max: 10000,
                            step: 1,
                            precision: 0,
                            defaultValue: 20
                        },
                        serialize: true
                    },
                    {
                        name: "cfg",
                        type: "number",
                        link: 18,
                        config: {
                            min: 0,
                            max: 100,
                            step: 0.5,
                            precision: 0,
                            defaultValue: 8
                        },
                        serialize: true
                    },
                    {
                        name: "sampler_name",
                        type: "string",
                        link: 19,
                        config: {
                            values: [
                                "euler",
                                "euler_ancestral",
                                "heun",
                                "dpm_2",
                                "dpm_2_ancestral",
                                "lms",
                                "dpm_fast",
                                "dpm_adaptive",
                                "dpmpp_2s_ancestral",
                                "dpmpp_sde",
                                "dpmpp_2m",
                                "ddim",
                                "uni_pc",
                                "uni_pc_bh2"
                            ],
                            defaultValue: "euler"
                        },
                        serialize: true
                    },
                    {
                        name: "scheduler",
                        type: "string",
                        link: 20,
                        config: {
                            values: [
                                "karras",
                                "normal",
                                "simple",
                                "ddim_uniform"
                            ],
                            defaultValue: "karras"
                        },
                        serialize: true
                    },
                    {
                        name: "positive",
                        type: "CONDITIONING",
                        link: 33,
                        color_off: "orange",
                        color_on: "orange"
                    },
                    {
                        name: "negative",
                        type: "CONDITIONING",
                        link: 32,
                        color_off: "orange",
                        color_on: "orange"
                    },
                    {
                        name: "latent_image",
                        type: "LATENT",
                        link: 39,
                        color_off: "orange",
                        color_on: "orange"
                    },
                    {
                        name: "denoise",
                        type: "number",
                        link: 21,
                        config: {
                            min: 0,
                            max: 1,
                            step: 0.01,
                            precision: 0,
                            defaultValue: 1
                        },
                        serialize: true
                    }
                ],
                outputs: [
                    {
                        name: "LATENT",
                        type: "LATENT",
                        links: [
                            40
                        ],
                        color_off: "orange",
                        color_on: "orange",
                        slot_index: 0
                    }
                ],
                title: "KSampler",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 40,
                type: "VAEDecode",
                pos: [
                    380.0980000000001,
                    158.662
                ],
                size: [
                    140,
                    46
                ],
                flags: {},
                order: 31,
                mode: 0,
                inputs: [
                    {
                        name: "samples",
                        type: "LATENT",
                        link: 40,
                        color_off: "orange",
                        color_on: "orange"
                    },
                    {
                        name: "vae",
                        type: "VAE",
                        link: 101,
                        color_off: "orange",
                        color_on: "orange"
                    }
                ],
                outputs: [
                    {
                        name: "IMAGE",
                        type: "IMAGE",
                        links: [
                            44
                        ],
                        color_off: "orange",
                        color_on: "orange",
                        slot_index: 0
                    }
                ],
                title: "VAEDecode",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 74,
                type: "CheckpointLoaderSimple",
                pos: [
                    -199,
                    161
                ],
                size: [
                    184.79999999999998,
                    66
                ],
                flags: {},
                order: 18,
                mode: 0,
                inputs: [
                    {
                        name: "ckpt_name",
                        type: "string",
                        link: 97,
                        config: {
                            values: [
                                "AbyssOrangeMix2_nsfw.safetensors",
                                "refslaveV2_v2.safetensors"
                            ],
                            defaultValue: "AbyssOrangeMix2_nsfw.safetensors"
                        },
                        widgetNodeType: "ui/combo",
                        serialize: true,
                        defaultWidgetNode: null
                    }
                ],
                outputs: [
                    {
                        name: "MODEL",
                        type: "MODEL",
                        links: [
                            98
                        ],
                        slot_index: 0
                    },
                    {
                        name: "CLIP",
                        type: "CLIP",
                        links: [
                            99,
                            100
                        ],
                        slot_index: 1
                    },
                    {
                        name: "VAE",
                        type: "VAE",
                        links: [
                            101
                        ],
                        slot_index: 2
                    }
                ],
                title: "CheckpointLoaderSimple",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 32,
                type: "CLIPTextEncode",
                pos: [
                    -218,
                    285
                ],
                size: [
                    212.10067125600108,
                    46
                ],
                flags: {},
                order: 22,
                mode: 0,
                inputs: [
                    {
                        name: "text",
                        type: "string",
                        link: 30,
                        config: {
                            defaultValue: "",
                            multiline: true
                        },
                        serialize: true
                    },
                    {
                        name: "clip",
                        type: "CLIP",
                        link: 99,
                        color_off: "orange",
                        color_on: "orange"
                    }
                ],
                outputs: [
                    {
                        name: "CONDITIONING",
                        type: "CONDITIONING",
                        links: [
                            33
                        ],
                        color_off: "orange",
                        color_on: "orange",
                        slot_index: 0
                    }
                ],
                title: "CLIPTextEncode",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 71,
                type: "actions/swap",
                pos: [
                    -526,
                    464
                ],
                size: [
                    140,
                    66
                ],
                flags: {
                    collapsed: false
                },
                order: 37,
                mode: 0,
                inputs: [
                    {
                        name: "A",
                        type: "*",
                        link: 89
                    },
                    {
                        name: "B",
                        type: "*",
                        link: 90
                    },
                    {
                        name: "swap",
                        type: -1,
                        link: 95,
                        shape: 1
                    }
                ],
                outputs: [
                    {
                        name: "B",
                        type: "*",
                        links: [
                            91
                        ],
                        slot_index: 0
                    },
                    {
                        name: "A",
                        type: "*",
                        links: [
                            92
                        ],
                        slot_index: 1
                    }
                ],
                title: "Comfy.SwapAction",
                properties: {}
            },
            {
                id: 53,
                type: "ui/slider",
                pos: [
                    295.11095999999947,
                    515.1384599999993
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 14,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: null
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            66
                        ],
                        slot_index: 0
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: [],
                        shape: 1,
                        slot_index: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 0,
                    min: 0,
                    max: 10,
                    step: 1,
                    precision: 1
                },
                widgets_values: [
                    "6.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 6,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 48,
                type: "ui/button",
                pos: [
                    300.11095999999947,
                    548.1384599999991
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: true
                },
                order: 15,
                mode: 0,
                inputs: [],
                outputs: [
                    {
                        name: "event",
                        type: -2,
                        links: [
                            47,
                            62
                        ],
                        shape: 1,
                        slot_index: 0
                    },
                    {
                        name: "isClicked",
                        type: "boolean",
                        links: null,
                        slot_index: 1
                    }
                ],
                title: "UI.Button",
                properties: {
                    defaultValue: false,
                    message: "bang"
                },
                widgets_values: [
                    "false"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: false,
                shownOutputProperties: {}
            },
            {
                id: 54,
                type: "ui/slider",
                pos: [
                    643.110959999998,
                    508.1384599999991
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: true
                },
                order: 25,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: 52
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: null
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: null
                    },
                    {
                        name: "max",
                        type: "number",
                        links: null
                    },
                    {
                        name: "step",
                        type: "number",
                        links: null
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 0,
                    min: 0,
                    max: 10,
                    step: 1,
                    precision: 1
                },
                widgets_values: [
                    "6.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 6,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 64,
                type: "basic/CompareValues",
                pos: [
                    -927.8971031999996,
                    152.4356894999996
                ],
                size: [
                    210,
                    78
                ],
                flags: {},
                order: 17,
                mode: 0,
                inputs: [
                    {
                        name: "A",
                        type: 0,
                        link: 78
                    },
                    {
                        name: "B",
                        type: 0,
                        link: 79
                    }
                ],
                outputs: [
                    {
                        name: "true",
                        type: "boolean",
                        links: [
                            74
                        ],
                        slot_index: 0
                    },
                    {
                        name: "false",
                        type: "boolean",
                        links: null
                    }
                ],
                title: "GenericCompare",
                properties: {
                    A: "randomize",
                    B: "randomize",
                    OP: "==",
                    enabled: true
                }
            },
            {
                id: 17,
                type: "ui/slider",
                pos: [
                    -884,
                    405
                ],
                size: [
                    210,
                    158
                ],
                flags: {
                    collapsed: false
                },
                order: 27,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: "number",
                        link: 67,
                        slot_index: 0
                    }
                ],
                outputs: [
                    {
                        name: "value",
                        type: "number",
                        links: [
                            68,
                            80
                        ],
                        slot_index: 0
                    },
                    {
                        name: "changed",
                        type: -2,
                        links: null,
                        shape: 1
                    },
                    {
                        name: "min",
                        type: "number",
                        links: [
                            69
                        ],
                        slot_index: 2
                    },
                    {
                        name: "max",
                        type: "number",
                        links: [
                            70
                        ],
                        slot_index: 3
                    },
                    {
                        name: "step",
                        type: "number",
                        links: [
                            75
                        ],
                        slot_index: 4
                    },
                    {
                        name: "precision",
                        type: "number",
                        links: null
                    }
                ],
                title: "UI.Slider",
                properties: {
                    defaultValue: 0,
                    min: 0,
                    max: 18446744073709552000,
                    step: 1,
                    precision: 0
                },
                widgets_values: [
                    "572904899609889.000"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: 572904899609889,
                shownOutputProperties: {
                    min: {
                        type: "number",
                        index: 2
                    },
                    max: {
                        type: "number",
                        index: 3
                    },
                    step: {
                        type: "number",
                        index: 4
                    },
                    precision: {
                        type: "number",
                        index: 5
                    }
                }
            },
            {
                id: 55,
                type: "actions/after_queued",
                pos: [
                    -1305,
                    308
                ],
                size: [
                    193.2,
                    46
                ],
                flags: {},
                order: 16,
                mode: 0,
                inputs: [],
                outputs: [
                    {
                        name: "afterQueued",
                        type: -2,
                        links: [
                            73
                        ],
                        shape: 1,
                        slot_index: 0
                    },
                    {
                        name: "prompt",
                        type: "*",
                        links: null
                    }
                ],
                title: "Comfy.AfterQueuedAction",
                properties: {
                    prompt: null
                }
            },
            {
                id: 44,
                type: "SaveImage",
                pos: [
                    646.0979999999996,
                    152.662
                ],
                size: [
                    186.4,
                    73.27554697882186
                ],
                flags: {},
                order: 32,
                mode: 0,
                inputs: [
                    {
                        name: "images",
                        type: "IMAGE",
                        link: 44,
                        color_off: "orange",
                        color_on: "orange",
                        slot_index: 0
                    },
                    {
                        name: "filename_prefix",
                        type: "string",
                        link: 43,
                        config: {
                            defaultValue: "ComfyUI",
                            multiline: false
                        },
                        serialize: true
                    }
                ],
                outputs: [
                    {
                        name: "output",
                        type: "OUTPUT",
                        links: [
                            46
                        ],
                        slot_index: 0
                    }
                ],
                title: "SaveImage",
                properties: {},
                color: "#432",
                bgColor: "#653"
            },
            {
                id: 50,
                type: "actions/copy",
                pos: [
                    409.0980000000001,
                    485.662
                ],
                size: [
                    210,
                    78
                ],
                flags: {
                    collapsed: false
                },
                order: 21,
                mode: 0,
                inputs: [
                    {
                        name: "",
                        type: "*",
                        link: 66
                    },
                    {
                        name: "copy",
                        type: -1,
                        link: 62,
                        shape: 1
                    }
                ],
                outputs: [
                    {
                        name: "",
                        type: "*",
                        links: [
                            50,
                            52
                        ],
                        slot_index: 0
                    }
                ],
                title: "Comfy.CopyAction",
                properties: {
                    value: 6
                }
            },
            {
                id: 47,
                type: "ui/gallery",
                pos: [
                    625.0979999999996,
                    298.662
                ],
                size: [
                    210,
                    58
                ],
                flags: {},
                order: 33,
                mode: 0,
                inputs: [
                    {
                        name: "images",
                        type: "OUTPUT",
                        link: 46
                    }
                ],
                outputs: [],
                title: "UI.Gallery",
                properties: {
                    defaultValue: []
                },
                widgets_values: [
                    "Images: 4"
                ],
                color: "#223",
                bgColor: "#335",
                comfyValue: [],
                shownOutputProperties: {}
            },
            {
                id: 52,
                type: "basic/watch",
                pos: [
                    637,
                    551
                ],
                size: [
                    140,
                    26
                ],
                flags: {},
                order: 24,
                mode: 0,
                inputs: [
                    {
                        name: "value",
                        type: 0,
                        link: 50,
                        label: "null",
                        slot_index: 0
                    }
                ],
                outputs: [],
                title: "Watch",
                properties: {
                    value: 1
                }
            },
            {
                id: 49,
                type: "events/log",
                pos: [
                    374,
                    612
                ],
                size: [
                    140,
                    26
                ],
                flags: {
                    collapsed: true
                },
                order: 20,
                mode: 0,
                inputs: [
                    {
                        name: "event",
                        type: -1,
                        link: 47,
                        shape: 1
                    }
                ],
                outputs: [],
                title: "Log Event",
                properties: {}
            }
        ],
        links: [
            [
                17,
                18,
                0,
                16,
                2,
                "number"
            ],
            [
                18,
                19,
                0,
                16,
                3,
                "number"
            ],
            [
                19,
                20,
                0,
                16,
                4,
                "string"
            ],
            [
                20,
                21,
                0,
                16,
                5,
                "string"
            ],
            [
                21,
                22,
                0,
                16,
                9,
                "number"
            ],
            [
                30,
                33,
                0,
                32,
                0,
                "string"
            ],
            [
                31,
                35,
                0,
                34,
                0,
                "string"
            ],
            [
                32,
                34,
                0,
                16,
                7,
                "CONDITIONING"
            ],
            [
                33,
                32,
                0,
                16,
                6,
                "CONDITIONING"
            ],
            [
                38,
                39,
                0,
                36,
                2,
                "number"
            ],
            [
                39,
                36,
                0,
                16,
                8,
                "LATENT"
            ],
            [
                40,
                16,
                0,
                40,
                0,
                "LATENT"
            ],
            [
                43,
                45,
                0,
                44,
                1,
                "string"
            ],
            [
                44,
                40,
                0,
                44,
                0,
                "IMAGE"
            ],
            [
                46,
                44,
                0,
                47,
                0,
                "OUTPUT"
            ],
            [
                47,
                48,
                0,
                49,
                0,
                -1
            ],
            [
                50,
                50,
                0,
                52,
                0,
                "*"
            ],
            [
                52,
                50,
                0,
                54,
                0,
                "number"
            ],
            [
                55,
                57,
                0,
                56,
                2,
                "string"
            ],
            [
                62,
                48,
                0,
                50,
                1,
                -1
            ],
            [
                66,
                53,
                0,
                50,
                0,
                "*"
            ],
            [
                67,
                56,
                0,
                17,
                0,
                "number"
            ],
            [
                68,
                17,
                0,
                56,
                0,
                "number"
            ],
            [
                69,
                17,
                2,
                56,
                3,
                "number"
            ],
            [
                70,
                17,
                3,
                56,
                4,
                "number"
            ],
            [
                73,
                55,
                0,
                56,
                1,
                -1
            ],
            [
                74,
                64,
                0,
                63,
                0,
                "boolean"
            ],
            [
                75,
                17,
                4,
                63,
                1,
                "*"
            ],
            [
                78,
                66,
                0,
                64,
                0,
                "string"
            ],
            [
                79,
                57,
                0,
                64,
                1,
                "string"
            ],
            [
                80,
                17,
                0,
                16,
                1,
                "number"
            ],
            [
                83,
                39,
                0,
                67,
                1,
                "number"
            ],
            [
                85,
                69,
                0,
                67,
                0,
                "number,array,object"
            ],
            [
                86,
                67,
                0,
                63,
                2,
                "*"
            ],
            [
                87,
                63,
                0,
                70,
                0,
                "*"
            ],
            [
                88,
                63,
                0,
                56,
                5,
                "number"
            ],
            [
                89,
                37,
                0,
                71,
                0,
                "*"
            ],
            [
                90,
                38,
                0,
                71,
                1,
                "*"
            ],
            [
                91,
                71,
                0,
                38,
                0,
                "number"
            ],
            [
                92,
                71,
                1,
                37,
                0,
                "number"
            ],
            [
                93,
                37,
                0,
                36,
                0,
                "number"
            ],
            [
                94,
                38,
                0,
                36,
                1,
                "number"
            ],
            [
                95,
                62,
                0,
                71,
                2,
                -1
            ],
            [
                97,
                75,
                0,
                74,
                0,
                "string"
            ],
            [
                98,
                74,
                0,
                16,
                0,
                "MODEL"
            ],
            [
                99,
                74,
                1,
                32,
                1,
                "CLIP"
            ],
            [
                100,
                74,
                1,
                34,
                1,
                "CLIP"
            ],
            [
                101,
                74,
                2,
                40,
                1,
                "VAE"
            ]
        ],
        groups: [],
        config: {},
        extra: {},
        version: 10
    },
    layout: {
        root: "0",
        allItems: {
            0: {
                dragItem: {
                    type: "container",
                    id: "0",
                    attrs: {
                        title: "Container",
                        showTitle: false,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [
                    "1",
                    "2"
                ]
            },
            1: {
                dragItem: {
                    type: "container",
                    id: "1",
                    attrs: {
                        title: "Container",
                        showTitle: false,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "16",
                    "33",
                    "41",
                    "52"
                ],
                parent: "0"
            },
            2: {
                dragItem: {
                    type: "container",
                    id: "2",
                    attrs: {
                        title: "Container",
                        showTitle: false,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "37",
                    "35",
                    "27"
                ],
                parent: "0"
            },
            10: {
                dragItem: {
                    type: "widget",
                    id: "10",
                    nodeId: 17,
                    attrs: {
                        title: "seed",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "48"
            },
            11: {
                dragItem: {
                    type: "widget",
                    id: "11",
                    nodeId: 18,
                    attrs: {
                        title: "steps",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "54"
            },
            12: {
                dragItem: {
                    type: "widget",
                    id: "12",
                    nodeId: 19,
                    attrs: {
                        title: "cfg",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "54"
            },
            13: {
                dragItem: {
                    type: "widget",
                    id: "13",
                    nodeId: 20,
                    attrs: {
                        title: "sampler_name",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "53"
            },
            14: {
                dragItem: {
                    type: "widget",
                    id: "14",
                    nodeId: 21,
                    attrs: {
                        title: "scheduler",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "53"
            },
            15: {
                dragItem: {
                    type: "widget",
                    id: "15",
                    nodeId: 22,
                    attrs: {
                        title: "denoise",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "54"
            },
            16: {
                dragItem: {
                    type: "container",
                    id: "16",
                    attrs: {
                        title: "KSampler",
                        showTitle: true,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "48",
                    "53",
                    "54"
                ],
                parent: "1"
            },
            26: {
                dragItem: {
                    type: "widget",
                    id: "26",
                    nodeId: 33,
                    attrs: {
                        title: "text",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "27"
            },
            27: {
                dragItem: {
                    type: "container",
                    id: "27",
                    attrs: {
                        title: "Conditioning",
                        showTitle: true,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "26",
                    "28"
                ],
                parent: "2"
            },
            28: {
                dragItem: {
                    type: "widget",
                    id: "28",
                    nodeId: 35,
                    attrs: {
                        title: "text",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "27"
            },
            30: {
                dragItem: {
                    type: "widget",
                    id: "30",
                    nodeId: 37,
                    attrs: {
                        title: "width",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "47"
            },
            31: {
                dragItem: {
                    type: "widget",
                    id: "31",
                    nodeId: 38,
                    attrs: {
                        title: "height",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "47"
            },
            32: {
                dragItem: {
                    type: "widget",
                    id: "32",
                    nodeId: 39,
                    attrs: {
                        title: "batch_size",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "33"
            },
            33: {
                dragItem: {
                    type: "container",
                    id: "33",
                    attrs: {
                        title: "EmptyLatentImage",
                        showTitle: true,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "32",
                    "47"
                ],
                parent: "1"
            },
            34: {
                dragItem: {
                    type: "widget",
                    id: "34",
                    nodeId: 45,
                    attrs: {
                        title: "filename_prefix",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "35"
            },
            35: {
                dragItem: {
                    type: "container",
                    id: "35",
                    attrs: {
                        title: "SaveImage",
                        showTitle: true,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "34"
                ],
                parent: "2"
            },
            37: {
                dragItem: {
                    type: "widget",
                    id: "37",
                    nodeId: 47,
                    attrs: {
                        title: "Widget",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "2"
            },
            38: {
                dragItem: {
                    type: "widget",
                    id: "38",
                    nodeId: 48,
                    attrs: {
                        title: "copy",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "41"
            },
            39: {
                dragItem: {
                    type: "widget",
                    id: "39",
                    nodeId: 53,
                    attrs: {
                        title: "value",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "41"
            },
            40: {
                dragItem: {
                    type: "widget",
                    id: "40",
                    nodeId: 54,
                    attrs: {
                        title: "Widget",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "41"
            },
            41: {
                dragItem: {
                    type: "container",
                    id: "41",
                    attrs: {
                        title: "Copy Test",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [
                    "39",
                    "38",
                    "40"
                ],
                parent: "1"
            },
            42: {
                dragItem: {
                    type: "widget",
                    id: "42",
                    nodeId: 57,
                    attrs: {
                        title: "action",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "48"
            },
            46: {
                dragItem: {
                    type: "widget",
                    id: "46",
                    nodeId: 62,
                    attrs: {
                        title: "Swap W/H",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "47"
            },
            47: {
                dragItem: {
                    type: "container",
                    id: "47",
                    attrs: {
                        title: "Size",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [
                    "30",
                    "46",
                    "31"
                ],
                parent: "33"
            },
            48: {
                dragItem: {
                    type: "container",
                    id: "48",
                    attrs: {
                        title: "Seed",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [
                    "10",
                    "42"
                ],
                parent: "16"
            },
            51: {
                dragItem: {
                    type: "widget",
                    id: "51",
                    nodeId: 75,
                    attrs: {
                        title: "ckpt_name",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [],
                parent: "52"
            },
            52: {
                dragItem: {
                    type: "container",
                    id: "52",
                    attrs: {
                        title: "CheckpointLoaderSimple",
                        showTitle: true,
                        direction: "vertical",
                        classes: ""
                    }
                },
                children: [
                    "51"
                ],
                parent: "1"
            },
            53: {
                dragItem: {
                    type: "container",
                    id: "53",
                    attrs: {
                        title: "Sampler",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [
                    "13",
                    "14"
                ],
                parent: "16"
            },
            54: {
                dragItem: {
                    type: "container",
                    id: "54",
                    attrs: {
                        title: "CFG/Steps",
                        showTitle: true,
                        direction: "horizontal",
                        classes: ""
                    }
                },
                children: [
                    "15",
                    "12",
                    "11"
                ],
                parent: "16"
            }
        },
        currentId: 55
    },
    canvas: {
        offset: [
            1330.0317691440027,
            -30.42057086300209
        ],
        scale: 0.9090909090909101
    }
}

const blankGraph: SerializedAppState = {
    createdBy: "ComfyBox",
    version: 1,
    workflow: {
        last_node_id: 0,
        last_link_id: 0,
        nodes: [],
        links: [],
        groups: [],
        config: {},
        extra: {},
        version: 0
    },
    panes: {}
}

export default defaultGraph;
export { blankGraph }
