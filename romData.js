// スマゴニ 関節マスターデータ（学会基準準拠）
const ROM_MASTER_DATA = {
    upper: {
        name: "上肢 (うで)",
        joints: {
            shoulder: {
                name: "肩関節",
                movements: {
                    flexion: {
                        name: "屈曲 (前方挙上)",
                        baseAxis: "体幹軸（肥満者の場合は肩峰を通る床への垂直線）",
                        moveAxis: "上腕骨",
                        normalValue: "180°",
                        helpText: "💡【触知のコツ】患者さんを椅子に真っ直ぐ座らせ、体幹が前後に傾かないように注意します。スマホの側面を、二の腕（上腕骨）の外側にピタッと沿わせるように当てると正確に測れます！"
                    },
                    extension: {
                        name: "伸展 (後方挙上)",
                        baseAxis: "体幹軸（肥満者の場合は肩峰を通る床への垂直線）",
                        moveAxis: "上腕骨",
                        normalValue: "50°",
                        helpText: "💡【触知のコツ】体が前にのめり込みやすいので注意。体幹軸に対して、腕を後ろに引いた角度を測定します。"
                    }
                }
            }
        }
    },
    lower: {
        name: "下肢 (あし)",
        joints: {
            knee: {
                name: "膝関節",
                movements: {
                    flexion: {
                        name: "屈曲 (曲げる)",
                        baseAxis: "大腿骨",
                        moveAxis: "腓骨（腓骨頭と外果を通る線）",
                        normalValue: "130°",
                        helpText: "💡【触知のコツ】ベッドに仰向けになってもらい、股関節と膝を曲げていきます。スマホは、すねの外側（外くるぶしと膝の外側の出っ張りを結ぶ線）に合わせます。"
                    },
                    extension: {
                        name: "伸展 (伸ばす / 構造的制限)",
                        baseAxis: "大腿骨",
                        moveAxis: "腓骨（腓骨頭と外果を通る線）",
                        normalValue: "0°",
                        helpText: "💡【触知のコツ】膝がしっかりとベッドに押し付けられている（真っ直ぐ伸びている）状態を測ります。床と水平なら0°です。"
                    }
                }
            }
        }
    }
};