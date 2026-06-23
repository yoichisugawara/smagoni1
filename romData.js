// スマゴニ 関節マスターデータ（学会基準・完全準拠版）
const ROM_MASTER_DATA = {
    upper: {
        name: "上肢 (うで・手)",
        joints: {
            shoulder: {
                name: "肩関節",
                movements: {
                    flexion: {
                        name: "屈曲 (前方挙上)",
                        baseAxis: "体幹軸（肥満者の場合は肩峰を通る床への垂直線）",
                        moveAxis: "上腕骨",
                        normalValue: "180°",
                        helpText: "💡【触知のコツ】背もたれから少し離して真っ直ぐ座らせます。体幹が前後左右に代償運動（のめり込みや捻り）を起こさないよう、骨盤や胸郭を軽く固定すると正確に測れます。"
                    },
                    extension: {
                        name: "伸展 (後方挙上)",
                        baseAxis: "体幹軸（肥満者の場合は肩峰を通る床への垂直線）",
                        moveAxis: "上腕骨",
                        normalValue: "50°",
                        helpText: "💡【触知のコツ】腕を後ろに引く際、体が前に倒れやすいので注意。スマホの側面を上腕骨の外側にしっかり合わせます。"
                    },
                    abduction: {
                        name: "外転 (側方挙上)",
                        baseAxis: "体幹軸への平行線（背部から測定する場合は脊柱への平行線）",
                        moveAxis: "上腕骨",
                        normalValue: "180°",
                        helpText: "💡【触知のコツ】手のひらを前に向けた状態（外旋位）で腕を横から挙げていきます。体幹が反対側に傾かないように注意してください。"
                    },
                    adduction: {
                        name: "内転",
                        baseAxis: "体幹軸への平行線",
                        moveAxis: "上腕骨",
                        normalValue: "75°",
                        helpText: "💡【触知のコツ】腕を体の前に通して内側に動かします。体幹が前後に回旋しないよう注意しましょう。"
                    },
                    external_rotation: {
                        name: "外旋",
                        baseAxis: "前腕軸（上腕を体幹に接し、肘関節を直角に屈曲した肢位）",
                        moveAxis: "前腕軸",
                        normalValue: "60°",
                        helpText: "💡【触知のコツ】脇をしっかり締め、肘を90度に曲げた状態で、前腕を外側に開いていきます。スマホの側面を前腕の背側に当てて測定します。"
                    },
                    internal_rotation: {
                        name: "内旋",
                        baseAxis: "前腕軸（上腕を体幹に接し、肘関節を直角に屈曲した肢位）",
                        moveAxis: "前腕軸",
                        normalValue: "80°",
                        helpText: "💡【触知のコツ】脇を締めて肘を90度に曲げた状態から、前腕をお腹の方へ近づけます。肩が前に浮き上がってこないよう手で抑えると良いです。"
                    }
                }
            },
            elbow: {
                name: "肘関節",
                movements: {
                    flexion: {
                        name: "屈曲 (曲げる)",
                        baseAxis: "上腕骨",
                        moveAxis: "橈骨",
                        normalValue: "145°",
                        helpText: "💡【触知のコツ】前腕を回外位（手のひらを上にした状態）で測定します。スマホの側面を前腕の外側（橈骨側）に沿わせます。"
                    },
                    extension: {
                        name: "伸展 (伸ばす)",
                        baseAxis: "上腕骨",
                        moveAxis: "橈骨",
                        normalValue: "0°",
                        helpText: "💡【触知のコツ】肘を最大限に真っ直ぐ伸ばした状態です。過伸展（反りすぎる）する場合は、マイナス表記や5°などと記録することがあります。"
                    }
                }
            },
            forearm: {
                name: "前腕",
                movements: {
                    pronation: {
                        name: "回内 (内側にひねる)",
                        baseAxis: "上腕骨（肘関節を直角に屈曲し、手指を伸展した肢位）",
                        moveAxis: "手背の横径（手首のやや手前）",
                        normalValue: "90°",
                        helpText: "💡【触知のコツ】肘を90度に曲げて脇を締め、手のひらを下に向ける動きです。スマホを手首の甲側にピタッと水平に当てて傾きを測ります。"
                    },
                    supination: {
                        name: "回外 (外側にひねる)",
                        baseAxis: "上腕骨（肘関節を直角に屈曲し、手指を伸展した肢位）",
                        moveAxis: "手掌の横径（手首のやや手前）",
                        normalValue: "90°",
                        helpText: "💡【触知のコツ】手のひらを上に向ける動きです。スマホを手首の掌側（手のひら側）の平らな面に当てて傾きを測定します。"
                    }
                }
            },
            wrist: {
                name: "手関節 (手首)",
                movements: {
                    flexion: {
                        name: "屈曲 (掌屈)",
                        baseAxis: "橈骨",
                        moveAxis: "第2中手骨",
                        normalValue: "90°",
                        helpText: "💡【触知のコツ】手首を手のひら側に曲げます。スマホの側面を、人差し指の付け根の骨（第2中手骨）の延長線上に合わせると測定しやすいです。"
                    },
                    extension: {
                        name: "伸展 (背屈)",
                        baseAxis: "橈骨",
                        moveAxis: "第2中手骨",
                        normalValue: "70°",
                        helpText: "💡【触知のコツ】手首を甲側に反らせます。指先が丸まらないように、指を真っ直ぐ伸ばした状態で手首の角度を追います。"
                    }
                }
            }
        }
    },
    lower: {
        name: "下肢 (あし・足首)",
        joints: {
            hip: {
                name: "股関節",
                movements: {
                    flexion: {
                        name: "屈曲 (太ももを上げる)",
                        baseAxis: "体幹軸への平行線",
                        moveAxis: "大腿骨（大転子と大腿骨外側上顆を通る線）",
                        normalValue: "125°",
                        helpText: "💡【触知のコツ】仰向けで膝を曲げながら太ももをお腹に近づけます。骨盤が後傾（ベッドに沈み込む）し始める手前までが純粋な股関節の動きです。"
                    },
                    extension: {
                        name: "伸展 (足を後ろに振る)",
                        baseAxis: "体幹軸への平行線",
                        moveAxis: "大腿骨（大転子と大腿骨外側上顆を通る線）",
                        normalValue: "15°",
                        helpText: "💡【触知のコツ】うつ伏せで行います。骨盤が浮いてきたり、腰が反ってしまったりしやすいので、反対側の骨盤を手でしっかり押さえます。"
                    },
                    abduction: {
                        name: "外転 (足を横に開く)",
                        baseAxis: "両側の上前腸骨棘を結ぶ線への垂直線",
                        moveAxis: "大腿骨（上前腸骨棘より大腿骨の中央を通る線）",
                        normalValue: "45°",
                        helpText: "💡【触知のコツ】仰向けで行います。骨盤が一緒に傾いて逃げてしまいやすいので、骨盤が動き出す直前までの角度をスマホで追います。"
                    },
                    adduction: {
                        name: "内転",
                        baseAxis: "両側の上前腸骨棘を結ぶ線への垂直線",
                        moveAxis: "大腿骨",
                        normalValue: "20°",
                        helpText: "💡【触知のコツ】反対側の足を少し外側に避けておき、測定する足を内側にクロスさせます。骨盤の傾きに注意します。"
                    },
                    external_rotation: {
                        name: "外旋 (外ひねり)",
                        baseAxis: "大腿骨の垂直軸（股・膝関節を直角に屈曲した肢位）",
                        moveAxis: "腓骨軸（腓骨頭と外果を通る線）",
                        normalValue: "45°",
                        helpText: "💡【触知のコツ】椅子に座った状態で、すねを内側に回す（股関節自体は外にひねられる）動きです。スマホの側面をすねの外側に当てて測定します。"
                    },
                    internal_rotation: {
                        name: "内旋 (内ひねり)",
                        baseAxis: "大腿骨の垂直軸（股・膝関節を直角に屈曲した肢位）",
                        moveAxis: "腓骨軸（腓骨頭と外果を通る線）",
                        normalValue: "45°",
                        helpText: "💡【触知のコツ】椅子に座った状態で、すねを外側に振る（股関節自体は内にひねられる）動きです。臀部が椅子から浮かないよう注意します。"
                    }
                }
            },
            knee: {
                name: "膝関節",
                movements: {
                    flexion: {
                        name: "屈曲 (曲げる)",
                        baseAxis: "大腿骨",
                        moveAxis: "腓骨（腓骨頭と外果を通る線）",
                        normalValue: "130°",
                        helpText: "💡【触知のコツ】仰向けで、股関節も一緒に曲げながら膝を深く曲げていきます。スマホの側面を、すねの外側（外くるぶしと膝の外側の出っ張りを結ぶ線）にピタッと合わせます。"
                    },
                    extension: {
                        name: "伸展 (伸ばす)",
                        baseAxis: "大腿骨",
                        moveAxis: "腓骨（腓骨頭と外果を通る線）",
                        normalValue: "0°",
                        helpText: "💡【触知のコツ】ベッドに足がピタッと真っ直ぐ押し付けられている状態です。床と水平であれば0°になります。浮いてしまう場合は「制限あり」となります。"
                    }
                }
            },
            ankle: {
                name: "足関節 (足首)",
                movements: {
                    flexion: {
                        name: "屈曲 (底屈 / 下に曲げる)",
                        baseAxis: "腓骨への垂直線",
                        moveAxis: "第5中足骨",
                        normalValue: "45°",
                        helpText: "💡【触知のコツ】アクセルペダルを踏み込むように足首を下へ伸ばします。スマホの外側を小指の側面の骨（第5中足骨）に沿わせて傾きを測ります。"
                    },
                    extension: {
                        name: "伸展 (背屈 / 上に反らす)",
                        baseAxis: "腓骨への垂直線",
                        moveAxis: "第5中足骨",
                        normalValue: "20°",
                        helpText: "💡【触知のコツ】足首を手前に反らせます。膝を軽く曲げた状態（軽度屈曲位）で測るのが、ふくらはぎの筋肉の突っ張りを防ぐ基本ルールです。"
                    }
                }
            }
        }
    },
    trunk: {
        name: "体幹 (首・こし)",
        joints: {
            neck: {
                name: "頸椎 (くび)",
                movements: {
                    flexion: {
                        name: "前屈 (顎を引く)",
                        baseAxis: "肩峰を通る床への垂直線",
                        moveAxis: "外耳孔と鼻腔の底を結ぶ線",
                        normalValue: "60°",
                        helpText: "💡【触知のコツ】首を前に倒します。背中が丸まってしまわないよう、椅子に深く腰掛けた状態で頭の傾きを測定します。"
                    },
                    extension: {
                        name: "後屈 (上を向く)",
                        baseAxis: "肩峰を通る床への垂直線",
                        moveAxis: "外耳孔と鼻腔の底を結ぶ線",
                        normalValue: "50°",
                        helpText: "💡【触知のコツ】頭を後ろに反らせます。口が開いて代償してしまいやすいので、軽く口を閉じた状態で測定するように声かけをします。"
                    }
                }
            },
            lumbar: {
                name: "胸腰椎 (せぼね・こし)",
                movements: {
                    flexion: {
                        name: "前屈 (お辞儀)",
                        baseAxis: "仙骨背面",
                        moveAxis: "第7頸椎棘突起と第1仙椎棘突起を結ぶ線",
                        normalValue: "45°",
                        helpText: "💡【触知のコツ】立った状態、または椅子に座ってお辞儀をします。スマホの背面を背中の中心線に合わせて傾きを測定します。"
                    },
                    extension: {
                        name: "後屈 (後ろに反る)",
                        baseAxis: "仙骨背面",
                        moveAxis: "第7頸椎棘突起と第1仙椎棘突起を結ぶ線",
                        normalValue: "30°",
                        helpText: "💡【触知のコツ】骨盤（仙骨）が前に突き出ないように手で軽く固定しながら、上半身を後ろに反らせます。"
                    }
                }
            }
        }
    }
};