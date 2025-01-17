// クエリパラメータを取得する関数
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryObj = {};
    params.forEach((value, key) => {
        queryObj[key] = value;
    });
    return queryObj;
}

// 診断結果を生成する関数
function generateResult() {
    const queryParams = getQueryParams();

    // 条件キーを生成（クエリパラメータを順番通りに連結）
    const conditionKey = [
        queryParams.q1,
        queryParams.q2,
        queryParams.q3,
        queryParams.q4,
        queryParams.q5,
        queryParams.q6,
        queryParams.q7,
        queryParams.q8
    ].join("-");

    // ワインデータ
    const wineData = {
  "1-1-0-0-1-1-1-1": {
    "title": "メルロワイン",
    "description": "メルロワインはフルーティーで滑らかな赤ワインで、ベリーやプラムの香りが特徴。タンニンが柔らかく、飲みやすいため初心者にもおすすめです。赤身肉やチーズとも相性抜群で、親しみやすいワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4a5OOL1",
                    "image": "https://m.media-amazon.com/images/I/51uF0VyShbL._AC_UY436_FMwebp_QL65_.jpg",
                    "productName": "ベリンジャー・ヴィンヤーズ ファウンダース・エステート・メルロー",
                    "region": "アメリカ",
                    "price": "¥2,185"
                },
                {
                    "url": "https://amzn.to/427XNtg",
                    "image": "https://m.media-amazon.com/images/I/61Jjt66zSZL._AC_UY436_FMwebp_QL65_.jpg",
                    "productName": "カルヴィソン セレクション・メルロー",
                    "region": "フランス",
                    "price": "¥1,399"
                },
                {
                    "url": "https://amzn.to/40njowm",
                    "image": "https://m.media-amazon.com/images/I/414Yv+Rd4RS._AC_UY436_FMwebp_QL65_.jpg",
                    "productName": "ロバート・モンダヴィ プライベート・セレクション ラム・バレルエイジド メルロー",
                    "region": "アメリカ",
                    "price": "¥2,625"
                },
                {
                    "url": "https://amzn.to/4j5MDLx",
                    "image": "https://m.media-amazon.com/images/I/61RjiIQaTyL._AC_UY436_FMwebp_QL65_.jpg",
                    "productName": "ブリー レッド メルロー",
                    "region": "フランス",
                    "price": "¥1,980"
                },
                {
                    "url": "https://amzn.to/401sYn2",
                    "image": "https://m.media-amazon.com/images/I/41lDAgCqg2L._AC_UY436_FMwebp_QL65_.jpg",
                    "productName": "アルマドール・メルロー",
                    "region": "チリ",
                    "price": "¥2,983"
                }
    ]
  },
  "1-2-0-0-1-1-1-1": {
    "title": "メルロワイン",
    "description": "メルロワインはフルーティーで滑らかな赤ワインで、ベリーやプラムの香りが特徴。タンニンが柔らかく、飲みやすいため初心者にもおすすめです。赤身肉やチーズとも相性抜群で、親しみやすいワインです。",
     "amazonLinks": [
                {
                    "url": "https://amzn.to/40r2flj",
                    "image": "https://m.media-amazon.com/images/I/41blCi3QlnS._AC_SX679_.jpg",
                    "productName": "ダックホーン デコイ・メルロー",
                    "region": "アメリカ",
                    "price": "¥3,500"
                },
                {
                    "url": "https://amzn.to/4fXUqbo",
                    "image": "https://m.media-amazon.com/images/I/41R-MWS6JUL._AC_SY879_.jpg",
                    "productName": "カモミ メルロー 2022",
                    "region": "アメリカ",
                    "price": "¥3,020"
                },
                {
                    "url": "https://amzn.to/4j6DOkt",
                    "image": "https://m.media-amazon.com/images/I/61vl0d284tL._AC_SY879_.jpg",
                    "productName": "シャトー・メルシャン 椀子メルロー",
                    "region": "日本",
                    "price": "¥4,806"
                },
                {
                    "url": "https://amzn.to/3DR4OED",
                    "image": "https://m.media-amazon.com/images/I/61neQlJBbkL._AC_SY879_.jpg",
                    "productName": "ディ レナルド ジャスト ミー メルロー 2020",
                    "region": "イタリア",
                    "price": "¥4,280"
                },
                {
                    "url": "https://amzn.to/4h6Y3gc",
                    "image": "https://m.media-amazon.com/images/I/61iT1u+JySL._AC_SY879_.jpg",
                    "productName": "シルバーパーム メルロー",
                    "region": "アメリカ",
                    "price": "¥4,230"
                }
    ]
  },
  "1-3-0-0-1-1-1-1": {
    "title": "メルロワイン",
    "description": "メルロワインはフルーティーで滑らかな赤ワインで、ベリーやプラムの香りが特徴。タンニンが柔らかく、飲みやすいため初心者にもおすすめです。赤身肉やチーズとも相性抜群で、親しみやすいワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4030Pw4",
                    "image": "https://m.media-amazon.com/images/I/51Tj2B+yRcL._AC_SY879_.jpg",
                    "productName": "ベリンジャー　ナパ・ヴァレー メルロー",
                    "region": "アメリカ",
                    "price": "¥6,761"
                },
                {
                    "url": "https://amzn.to/3C2dkjv",
                    "image": "https://m.media-amazon.com/images/I/61XX9Us46BL._AC_SY879_.jpg",
                    "productName": "プピーユ2019",
                    "region": "フランス",
                    "price": "¥5,580"
                },
                {
                    "url": "https://amzn.to/4adDD2S",
                    "image": "https://m.media-amazon.com/images/I/31DpbRKTM2L._AC_.jpg",
                    "productName": "レコール No.41 エステート メルロー",
                    "region": "アメリカ",
                    "price": "¥8,000"
                },
                {
                    "url": "https://amzn.to/3DMtON3",
                    "image": "https://m.media-amazon.com/images/I/31ceMiSbAyL._AC_.jpg",
                    "productName": "シャトー トロンコワ ラランド 2011",
                    "region": "フランス",
                    "price": "¥6,864"
                },
                {
                    "url": "https://amzn.to/3WenTHf",
                    "image": "https://m.media-amazon.com/images/I/51QCLrtWOJL._AC_SY879_.jpg",
                    "productName": "トレフェッセン エステート メルロー ナパ ヴァレー 2021",
                    "region": "アメリカ",
                    "price": "¥9,770"
                }
    ]
  },
  "1-4-0-0-1-1-1-1": {
    "title": "メルロワイン",
    "description": "メルロワインはフルーティーで滑らかな赤ワインで、ベリーやプラムの香りが特徴。タンニンが柔らかく、飲みやすいため初心者にもおすすめです。赤身肉やチーズとも相性抜群で、親しみやすいワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3W9ielK",
                    "image": "https://m.media-amazon.com/images/I/61syUVRVx6L._AC_SY879_.jpg",
                    "productName": "シャトー・メルシャン 桔梗ヶ原メルロー 2015",
                    "region": "日本",
                    "price": "¥14,380"
                },
                {
                    "url": "https://amzn.to/429vP03",
                    "image": "https://m.media-amazon.com/images/I/51QVOrkXF-L._AC_SY879_.jpg",
                    "productName": "シャトー グラシア 2015",
                    "region": "フランス",
                    "price": "¥17,740"
                },
                {
                    "url": "https://amzn.to/4afkLRe",
                    "image": "https://m.media-amazon.com/images/I/416YmnBSgdL._AC_SY879_.jpg",
                    "productName": "バーン オー ブリオン 1998",
                    "region": "フランス",
                    "price": "¥29,410"
                },
                {
                    "url": "https://amzn.to/4aezPy9",
                    "image": "https://m.media-amazon.com/images/I/41HDpwem5cL._AC_SY879_.jpg",
                    "productName": "パルメイヤー メルロ ナパ ヴァレー 2021",
                    "region": "アメリカ",
                    "price": "¥22,290"
                },
                {
                    "url": "https://amzn.to/4aeaDId",
                    "image": "https://m.media-amazon.com/images/I/51mUhKY8w1L._AC_SY879_.jpg",
                    "productName": "シャトー パヴィ マカン 2004",
                    "region": "フランス",
                    "price": "¥21,110"
                }
    ]
  },
  "1-5-0-0-1-1-1-1": {
    "title": "メルロワイン",
    "description": "メルロワインはフルーティーで滑らかな赤ワインで、ベリーやプラムの香りが特徴。タンニンが柔らかく、飲みやすいため初心者にもおすすめです。赤身肉やチーズとも相性抜群で、親しみやすいワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Pv79re",
                    "image": "https://m.media-amazon.com/images/I/51TT6rThTjL._AC_SY879_.jpg",
                    "productName": "シャトー パヴィ マカン 1998",
                    "region": "フランス",
                    "price": "¥32,560"
                },
                {
                    "url": "https://amzn.to/429vP03",
                    "image": "https://m.media-amazon.com/images/I/51QVOrkXF-L._AC_SY879_.jpg",
                    "productName": "シャトー ラ ミッション オー ブリオン 2010",
                    "region": "フランス",
                    "price": "¥95,190"
                },
                {
                    "url": "https://amzn.to/4gFbgwV",
                    "image": "https://m.media-amazon.com/images/I/412UtvxwzGL._AC_SX679_.jpg",
                    "productName": "トリロジー ド ル パン 2013",
                    "region": "フランス",
                    "price": "¥92,400"
                },
                {
                    "url": "https://amzn.to/42e1sWt",
                    "image": "https://m.media-amazon.com/images/I/51Jms1TLBnL._AC_SY879_.jpg",
                    "productName": "コングスガード メルロー ナパ ヴァレー 2019",
                    "region": "アメリカ",
                    "price": "¥48,160"
                },
                {
                    "url": "https://amzn.to/4fXWikq",
                    "image": "https://m.media-amazon.com/images/I/41Shd2c6aML._AC_SY879_.jpg",
                    "productName": "ル プティ シュヴァル 2010",
                    "region": "フランス",
                    "price": "¥36,260"
                }
    ]
  },
  "1-1-0-0-1-1-1-2": {
    "title": "ニューワールド・カベルネ・ソーヴィニヨンワイン",
    "description": "ニューワールドのカベルネ・ソーヴィニヨンワインは、豊かな果実味と力強い味わいが特徴で、黒ベリーやカシスの香りにスパイスやオークの風味が加わります。タンニンがしっかりしており、深みのあるワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PuMtQk",
                    "image": "https://m.media-amazon.com/images/I/41uhLAJeQ9L._AC_SY879_.jpg",
                    "productName": "MONTES クラシック・シリーズ カベルネソーヴィニヨン",
                    "region": "チリ",
                    "price": "¥1,760"
                },
                {
                    "url": "https://amzn.to/3Wg6UUH",
                    "image": "https://m.media-amazon.com/images/I/41NznAGConL._AC_SX679_.jpg",
                    "productName": "ロス ヴァスコス カベルネ・ソーヴィニヨン",
                    "region": "チリ",
                    "price": "¥1,904"
                },
                {
                    "url": "https://amzn.to/3PuDiPL",
                    "image": "https://m.media-amazon.com/images/I/51rxQe3e1EL._AC_SY879_.jpg",
                    "productName": "カーサ・マデロ・カベルネ・ソーヴィニヨン",
                    "region": "メキシコ",
                    "price": "¥2,703"
                },
                {
                    "url": "https://amzn.to/3DNwf2d",
                    "image": "https://m.media-amazon.com/images/I/51PJ1Y0Vx+L._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・カベルネ・ソーヴィニヨン",
                    "region": "アメリカ",
                    "price": "¥2,185"
                },
                {
                    "url": "https://amzn.to/3DZjC3P",
                    "image": "https://m.media-amazon.com/images/I/51Ty9bxtIwL._AC_SX679_.jpg",
                    "productName": "カーニヴォ バーボンバレル カベルネ ソーヴィニヨン",
                    "region": "アメリカ",
                    "price": "¥2,670"
                }
    ]
  },
  "1-2-0-0-1-1-1-2": {
    "title": "ニューワールド・カベルネ・ソーヴィニヨンワイン",
    "description": "ニューワールドのカベルネ・ソーヴィニヨンワインは、豊かな果実味と力強い味わいが特徴で、黒ベリーやカシスの香りにスパイスやオークの風味が加わります。タンニンがしっかりしており、深みのあるワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/429HmN4",
                    "image": "https://m.media-amazon.com/images/I/71IXSlY-U4L._AC_SX679_.jpg",
                    "productName": "G'dayWine ラニスター リザーブマリーランズ カベルネ・ソーヴィニヨン",
                    "region": "オーストラリア",
                    "price": "¥5,000"
                },
                {
                    "url": "https://amzn.to/4jdLwcS",
                    "image": "https://m.media-amazon.com/images/I/510Upv1MJwL._AC_SY879_.jpg",
                    "productName": "ヘスコレクション カリフォルニア・カベルネ・ソーヴィニヨン",
                    "region": "アメリカ",
                    "price": "¥4,600"
                },
                {
                    "url": "https://amzn.to/422rsnw",
                    "image": "https://m.media-amazon.com/images/I/51TERMQTSQL._AC_SY879_.jpg",
                    "productName": "【イーター】カベルネ ソーヴィニヨン ナパ ヴァレー",
                    "region": "アメリカ",
                    "price": "¥3,480"
                },
                {
                    "url": "https://amzn.to/4aaXPlU",
                    "image": "https://m.media-amazon.com/images/I/516ByTOimCL._AC_SX679_.jpg",
                    "productName": "かみのやま産 カベルネ ソーヴィニヨン 2019",
                    "region": "日本",
                    "price": "¥4,400"
                },
                {
                    "url": "https://amzn.to/4fR5LKb",
                    "image": "https://m.media-amazon.com/images/I/61Hcs1w7o6L._AC_SY879_.jpg",
                    "productName": "キャノンボール カベルネソーヴィニヨン",
                    "region": "アメリカ",
                    "price": "¥3,473"
                }
    ]
  },
  "1-3-0-0-1-1-1-2": {
    "title": "ニューワールド・カベルネ・ソーヴィニヨンワイン",
    "description": "ニューワールドのカベルネ・ソーヴィニヨンワインは、豊かな果実味と力強い味わいが特徴で、黒ベリーやカシスの香りにスパイスやオークの風味が加わります。タンニンがしっかりしており、深みのあるワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4h1AJAE",
                    "image": "https://m.media-amazon.com/images/I/41j3406xx8L._AC_SX679_.jpg",
                    "productName": "サン・スペリー・カベルネ・ソーヴィニヨン",
                    "region": "アメリカ",
                    "price": "¥8,328"
                },
                {
                    "url": "https://amzn.to/42aQ6T8",
                    "image": "https://m.media-amazon.com/images/I/411qgLpgLFL._AC_SY879_.jpg",
                    "productName": "ジラード カベルネ ソーヴィニョン ナパ ヴァレー 2021",
                    "region": "アメリカ",
                    "price": "¥5,340"
                },
                {
                    "url": "https://amzn.to/4h1AIwq",
                    "image": "https://m.media-amazon.com/images/I/51q4EBG3TqL._AC_SY879_.jpg",
                    "productName": "フレイムツリー SRS ウィリヤブラップ カベルネ・ソーヴィニヨン",
                    "region": "オーストラリア",
                    "price": "¥9,900"
                },
                {
                    "url": "https://amzn.to/3DRImuW",
                    "image": "https://m.media-amazon.com/images/I/31rPov4KPDL._AC_.jpg",
                    "productName": "アンティス [2013]",
                    "region": "チリ",
                    "price": "¥7,550"
                },
                {
                    "url": "https://amzn.to/3DPXbyd",
                    "image": "https://m.media-amazon.com/images/I/41Oq-Ogy+XL._AC_SY879_.jpg",
                    "productName": "グレネリー レディメイ レッド 2017",
                    "region": "南アフリカ",
                    "price": "¥6,850"
                }
    ]
  },
  "1-4-0-0-1-1-1-2": {
    "title": "ニューワールド・カベルネ・ソーヴィニヨンワイン",
    "description": "ニューワールドのカベルネ・ソーヴィニヨンワインは、豊かな果実味と力強い味わいが特徴で、黒ベリーやカシスの香りにスパイスやオークの風味が加わります。タンニンがしっかりしており、深みのあるワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3C3o9BT",
                    "image": "https://m.media-amazon.com/images/I/3160rhXpQxL._AC_.jpg",
                    "productName": "ライオン テイマー カベルネ ソーヴィニヨン ザ ヘス コレクション",
                    "region": "アメリカ",
                    "price": "¥11,000"
                },
                {
                    "url": "https://amzn.to/4jd2eJ3",
                    "image": "https://m.media-amazon.com/images/I/41PyvbolH+S._AC_SY879_.jpg",
                    "productName": "シルヴァラード カベルネソーヴィニヨン ソロ スタッグス・リープ ディストリクト",
                    "region": "アメリカ",
                    "price": "¥17,325"
                },
                {
                    "url": "https://amzn.to/40b1HyO",
                    "image": "https://m.media-amazon.com/images/I/51H8sZt7skL._AC_SY879_.jpg",
                    "productName": "セーニャ 2009",
                    "region": "チリ",
                    "price": "¥27,280"
                },
                {
                    "url": "https://amzn.to/3PRflT7",
                    "image": "https://m.media-amazon.com/images/I/51ylqMUj40L._AC_SY879_.jpg",
                    "productName": "スカーレット カベルネ ソーヴィニヨン 2018",
                    "region": "アメリカ",
                    "price": "¥17,630"
                },
                {
                    "url": "https://amzn.to/3PtEKSq",
                    "image": "https://m.media-amazon.com/images/I/418KUE1bzQL._AC_SX679_.jpg",
                    "productName": "ケイマス・ヴィンヤーズ カベルネ・ソーヴィニヨン",
                    "region": "アメリカ",
                    "price": "¥16,820"
                }
    ]
  },
  "1-5-0-0-1-1-1-2": {
    "title": "ニューワールド・カベルネ・ソーヴィニヨンワイン",
    "description": "ニューワールドのカベルネ・ソーヴィニヨンワインは、豊かな果実味と力強い味わいが特徴で、黒ベリーやカシスの香りにスパイスやオークの風味が加わります。タンニンがしっかりしており、深みのあるワインです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PACuIY",
                    "image": "https://m.media-amazon.com/images/I/31gz5I7SYKL._AC_.jpg",
                    "productName": "シュレイダー ベクストファー ト カロン ヴィンヤード MB 2018",
                    "region": "アメリカ",
                    "price": "¥76,330"
                },
                {
                    "url": "https://amzn.to/426D4pp",
                    "image": "https://m.media-amazon.com/images/I/51E6JzIlIrL._AC_SY879_.jpg",
                    "productName": "デスティニー ベイ ミスティ 2010",
                    "region": "ニュージーランド",
                    "price": "¥43,780"
                },
                {
                    "url": "https://amzn.to/429GoQF",
                    "image": "https://m.media-amazon.com/images/I/41-F1Scb73L._AC_SY879_.jpg",
                    "productName": "リッジ ヴィンヤーズ モンテベロ 2019",
                    "region": "アメリカ",
                    "price": "¥42,100"
                },
                {
                    "url": "https://amzn.to/3Wg8O7Y",
                    "image": "https://m.media-amazon.com/images/I/41c+GnzNApL._AC_SX679_.jpg",
                    "productName": "ロバート・モンダヴィ・ワイナリー ト・カロン・ヴィンヤード カベルネ・ソーヴィニヨン リザーブ",
                    "region": "アメリカ",
                    "price": "¥30,094"
                },
                {
                    "url": "https://amzn.to/3C3ozrX",
                    "image": "https://m.media-amazon.com/images/I/61LvPlzfkcL._AC_SY879_.jpg",
                    "productName": "オーパス・ワン 2017",
                    "region": "アメリカ",
                    "price": "¥69,800"
                }
    ]
  },
  "1-1-0-0-1-1-2-1": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4abfNVi",
                    "image": "https://m.media-amazon.com/images/I/51FSok9yKOL._AC_SY879_.jpg",
                    "productName": "ラブレ・ロワ ピノ・ノワール・ヴァン・ド・フランス",
                    "region": "フランス",
                    "price": "¥2,110"
                },
                {
                    "url": "https://amzn.to/40uxoVh",
                    "image": "https://m.media-amazon.com/images/I/71PHGbok6RL._AC_SY879_.jpg",
                    "productName": "ロシュバン ブルゴーニュ ピノノワール",
                    "region": "フランス",
                    "price": "¥2,891"
                },
                {
                    "url": "https://amzn.to/4gOeWfN",
                    "image": "https://m.media-amazon.com/images/I/31uRmE2GjJL._AC_.jpg",
                    "productName": "クロズリー・デ・アリズィエ ブルゴーニュ オート コート ド ニュイ",
                    "region": "フランス",
                    "price": "¥1,221"
                },
                {
                    "url": "https://amzn.to/3E0mEF0",
                    "image": "https://m.media-amazon.com/images/I/511qXMNwBHL._AC_SY879_.jpg",
                    "productName": "ピエール・アンドレ ブルゴーニュ・ピノ・ノワール ヴィエーユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥2,750"
                },
                {
                    "url": "https://amzn.to/3C5jhfy",
                    "image": "https://m.media-amazon.com/images/I/51I-68jEtjL._AC_SX679_.jpg",
                    "productName": "ルイ・ラトゥール・ ドメーヌ・ド・ヴァルモワシン・ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥2,970"
                }
    ]
  },
  "1-2-0-0-1-1-2-1": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hcqJnU",
                    "image": "https://m.media-amazon.com/images/I/61BRhtCmYqL._AC_SY879_.jpg",
                    "productName": "ルイ・ジャド ブルゴーニュ ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥4,180"
                },
                {
                    "url": "https://amzn.to/4h8btsk",
                    "image": "https://m.media-amazon.com/images/I/41yQO3oNZgL._AC_SX679_.jpg",
                    "productName": "ルイ・ラトゥール・ブルゴーニュ・ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥3,278"
                },
                {
                    "url": "https://amzn.to/4hawtyv",
                    "image": "https://m.media-amazon.com/images/I/61QncIdLKOL._AC_SY879_.jpg",
                    "productName": "アルベール・ビショー ブルゴーニュ ピノ・ノワール ヴィエイユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥4,013"
                },
                {
                    "url": "https://amzn.to/3DRuC3m",
                    "image": "https://m.media-amazon.com/images/I/51lf48rIcIL._AC_SY879_.jpg",
                    "productName": "ピエール・ポネル ブルゴーニュ ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/42aQXmO",
                    "image": "https://m.media-amazon.com/images/I/61uoncEEDwL._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET(ルペ ショーレ) ブルゴーニュ ピノノワール",
                    "region": "フランス",
                    "price": "¥4,950"
                }
    ]
  },
  "1-3-0-0-1-1-2-1": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jbr5Nu",
                    "image": "https://m.media-amazon.com/images/I/71OP9hFxcYL._AC_SY879_.jpg",
                    "productName": "モメサン ブルゴーニュ・ピノ・ノワール クレ・サンピエール",
                    "region": "フランス",
                    "price": "¥5,003"
                },
                {
                    "url": "https://amzn.to/4jd2qYN",
                    "image": "https://m.media-amazon.com/images/I/51JzZm2L8sL._AC_SY879_.jpg",
                    "productName": "メルシャン ドメーヌ・アデリー メルキュレ アン・ピエール・ミレ",
                    "region": "フランス",
                    "price": "¥6,397"
                },
                {
                    "url": "https://amzn.to/40dDHuH",
                    "image": "https://m.media-amazon.com/images/I/51znvbLd6sL._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ジュヴレイ・シャンベルタン",
                    "region": "フランス",
                    "price": "¥7,370"
                },
                {
                    "url": "https://amzn.to/40qVNef",
                    "image": "https://m.media-amazon.com/images/I/31eaWMzpdwL._AC_.jpg",
                    "productName": "ドメーヌ・トルトショ ジュヴレイ・シャンベルタン ヴィエイユ・ヴィーユ",
                    "region": "フランス",
                    "price": "¥8,800"
                },
                {
                    "url": "https://amzn.to/3CgYaH4",
                    "image": "https://m.media-amazon.com/images/I/51gcnPgw3oL._AC_SX679_.jpg",
                    "productName": "ラブレ・ロワ ポマール",
                    "region": "フランス",
                    "price": "¥9,237"
                }
    ]
  },
  "1-4-0-0-1-1-2-1": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/425Uz9z",
                    "image": "https://m.media-amazon.com/images/I/51aGxN+UwPL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・クロ・フランタン ジュヴレ・シャンベルタン レ・ミュロ",
                    "region": "フランス",
                    "price": "¥12,489"
                },
                {
                    "url": "https://amzn.to/4jdarNt",
                    "image": "https://m.media-amazon.com/images/I/51kMkxcEe+L._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ヴォーヌ・ロマネ",
                    "region": "フランス",
                    "price": "¥22,000"
                },
                {
                    "url": "https://amzn.to/4068CJw",
                    "image": "https://m.media-amazon.com/images/I/31zx8N4796L._AC_.jpg",
                    "productName": "ピエール・アンドレ “クロ・ド・ラ・ロッシュ グラン・クリュ",
                    "region": "フランス",
                    "price": "¥14,358"
                },
                {
                    "url": "https://amzn.to/4h6YbME",
                    "image": "https://m.media-amazon.com/images/I/71BiG-npUsL._AC_SY879_.jpg",
                    "productName": "ルイ・ジャド ポマール プルミエ・クリュ ルジアン ドメーヌ・ルイ・ジャド",
                    "region": "フランス",
                    "price": "¥15,647"
                },
                {
                    "url": "https://amzn.to/3C56VUD",
                    "image": "https://m.media-amazon.com/images/I/311WNaJZlwL._AC_.jpg",
                    "productName": "ブズロー・グリエール コルトン・ブレッサンド・グラン・クリュ",
                    "region": "フランス",
                    "price": "¥14,822"
                }
    ]
  },
  "1-5-0-0-1-1-2-1": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PvWQU0",
                    "image": "https://m.media-amazon.com/images/I/514f6PEmI6L._AC_.jpg",
                    "productName": "2004 グリオット シャンベルタン グラン クリュ ヴィエイユ ヴィーニュ ドメーヌ フーリエ",
                    "region": "フランス",
                    "price": "¥330,000"
                },
                {
                    "url": "https://amzn.to/40uxFHN",
                    "image": "https://m.media-amazon.com/images/I/51s86o-LtbL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・クロ・フランタン リシュブール・グラン・クリュ",
                    "region": "フランス",
                    "price": "¥75,936"
                },
                {
                    "url": "https://amzn.to/4afKY1H",
                    "image": "https://m.media-amazon.com/images/I/41VGwoPIBeL._AC_SY879_.jpg",
                    "productName": "シャペル シャンベルタン ピエール ダモワ",
                    "region": "フランス",
                    "price": "¥40,895"
                },
                {
                    "url": "https://amzn.to/3C5ZpJm",
                    "image": "https://m.media-amazon.com/images/I/51+i5Jz1QTL._AC_.jpg",
                    "productName": "2011 ボンヌ マール グラン クリュ コント ジョルジュ ド ヴォギュエ",
                    "region": "フランス",
                    "price": "¥162,800"
                },
                {
                    "url": "https://amzn.to/3WeVikN",
                    "image": "https://m.media-amazon.com/images/I/51qgpryk90L._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・クロ・フランタン エシェゾー・グラン・クリュ",
                    "region": "フランス",
                    "price": "¥54,441"
                }
    ]
  },
  "1-1-0-0-1-1-2-2": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4abfNVi",
                    "image": "https://m.media-amazon.com/images/I/51FSok9yKOL._AC_SY879_.jpg",
                    "productName": "ラブレ・ロワ ピノ・ノワール・ヴァン・ド・フランス",
                    "region": "フランス",
                    "price": "¥2,110"
                },
                {
                    "url": "https://amzn.to/40uxoVh",
                    "image": "https://m.media-amazon.com/images/I/71PHGbok6RL._AC_SY879_.jpg",
                    "productName": "ロシュバン ブルゴーニュ ピノノワール",
                    "region": "フランス",
                    "price": "¥2,891"
                },
                {
                    "url": "https://amzn.to/4gOeWfN",
                    "image": "https://m.media-amazon.com/images/I/31uRmE2GjJL._AC_.jpg",
                    "productName": "クロズリー・デ・アリズィエ ブルゴーニュ オート コート ド ニュイ",
                    "region": "フランス",
                    "price": "¥1,221"
                },
                {
                    "url": "https://amzn.to/3E0mEF0",
                    "image": "https://m.media-amazon.com/images/I/511qXMNwBHL._AC_SY879_.jpg",
                    "productName": "ピエール・アンドレ ブルゴーニュ・ピノ・ノワール ヴィエーユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥2,750"
                },
                {
                    "url": "https://amzn.to/3C5jhfy",
                    "image": "https://m.media-amazon.com/images/I/51I-68jEtjL._AC_SX679_.jpg",
                    "productName": "ルイ・ラトゥール・ ドメーヌ・ド・ヴァルモワシン・ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥2,970"
                }
    ]
  },
  "1-2-0-0-1-1-2-2": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hcqJnU",
                    "image": "https://m.media-amazon.com/images/I/61BRhtCmYqL._AC_SY879_.jpg",
                    "productName": "ルイ・ジャド ブルゴーニュ ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥4,180"
                },
                {
                    "url": "https://amzn.to/4h8btsk",
                    "image": "https://m.media-amazon.com/images/I/41yQO3oNZgL._AC_SX679_.jpg",
                    "productName": "ルイ・ラトゥール・ブルゴーニュ・ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥3,278"
                },
                {
                    "url": "https://amzn.to/4hawtyv",
                    "image": "https://m.media-amazon.com/images/I/61QncIdLKOL._AC_SY879_.jpg",
                    "productName": "アルベール・ビショー ブルゴーニュ ピノ・ノワール ヴィエイユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥4,013"
                },
                {
                    "url": "https://amzn.to/3DRuC3m",
                    "image": "https://m.media-amazon.com/images/I/51lf48rIcIL._AC_SY879_.jpg",
                    "productName": "ピエール・ポネル ブルゴーニュ ピノ・ノワール",
                    "region": "フランス",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/42aQXmO",
                    "image": "https://m.media-amazon.com/images/I/61uoncEEDwL._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET(ルペ ショーレ) ブルゴーニュ ピノノワール",
                    "region": "フランス",
                    "price": "¥4,950"
                }
    ]
  },
  "1-3-0-0-1-1-2-2": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jbr5Nu",
                    "image": "https://m.media-amazon.com/images/I/71OP9hFxcYL._AC_SY879_.jpg",
                    "productName": "モメサン ブルゴーニュ・ピノ・ノワール クレ・サンピエール",
                    "region": "フランス",
                    "price": "¥5,003"
                },
                {
                    "url": "https://amzn.to/4jd2qYN",
                    "image": "https://m.media-amazon.com/images/I/51JzZm2L8sL._AC_SY879_.jpg",
                    "productName": "メルシャン ドメーヌ・アデリー メルキュレ アン・ピエール・ミレ",
                    "region": "フランス",
                    "price": "¥6,397"
                },
                {
                    "url": "https://amzn.to/40dDHuH",
                    "image": "https://m.media-amazon.com/images/I/51znvbLd6sL._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ジュヴレイ・シャンベルタン",
                    "region": "フランス",
                    "price": "¥7,370"
                },
                {
                    "url": "https://amzn.to/40qVNef",
                    "image": "https://m.media-amazon.com/images/I/31eaWMzpdwL._AC_.jpg",
                    "productName": "ドメーヌ・トルトショ ジュヴレイ・シャンベルタン ヴィエイユ・ヴィーユ",
                    "region": "フランス",
                    "price": "¥8,800"
                },
                {
                    "url": "https://amzn.to/3CgYaH4",
                    "image": "https://m.media-amazon.com/images/I/51gcnPgw3oL._AC_SX679_.jpg",
                    "productName": "ラブレ・ロワ ポマール",
                    "region": "フランス",
                    "price": "¥9,237"
                }
    ]
  },
  "1-4-0-0-1-1-2-2": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/425Uz9z",
                    "image": "https://m.media-amazon.com/images/I/51aGxN+UwPL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・クロ・フランタン ジュヴレ・シャンベルタン レ・ミュロ",
                    "region": "フランス",
                    "price": "¥12,489"
                },
                {
                    "url": "https://amzn.to/4jdarNt",
                    "image": "https://m.media-amazon.com/images/I/51kMkxcEe+L._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ヴォーヌ・ロマネ",
                    "region": "フランス",
                    "price": "¥22,000"
                },
                {
                    "url": "https://amzn.to/4068CJw",
                    "image": "https://m.media-amazon.com/images/I/31zx8N4796L._AC_.jpg",
                    "productName": "ピエール・アンドレ “クロ・ド・ラ・ロッシュ グラン・クリュ",
                    "region": "フランス",
                    "price": "¥14,358"
                },
                {
                    "url": "https://amzn.to/4h6YbME",
                    "image": "https://m.media-amazon.com/images/I/71BiG-npUsL._AC_SY879_.jpg",
                    "productName": "ルイ・ジャド ポマール プルミエ・クリュ ルジアン ドメーヌ・ルイ・ジャド",
                    "region": "フランス",
                    "price": "¥15,647"
                },
                {
                    "url": "https://amzn.to/3C56VUD",
                    "image": "https://m.media-amazon.com/images/I/311WNaJZlwL._AC_.jpg",
                    "productName": "ブズロー・グリエール コルトン・ブレッサンド・グラン・クリュ",
                    "region": "フランス",
                    "price": "¥14,822"
                }
    ]
  },
  "1-5-0-0-1-1-2-2": {
    "title": "ブルゴーニュ・ピノ・ノワールワイン",
    "description": "ブルゴーニュのピノ・ノワールワインは、繊細で華やかな香りが特徴で、赤いベリーや花の香りが広がります。味わいは滑らかで、軽やかな口当たりに加え、柔らかなタンニンと酸味がバランス良く調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PvWQU0",
                    "image": "https://m.media-amazon.com/images/I/514f6PEmI6L._AC_.jpg",
                    "productName": "2004 グリオット シャンベルタン グラン クリュ ヴィエイユ ヴィーニュ ドメーヌ フーリエ",
                    "region": "フランス",
                    "price": "¥330,000"
                },
                {
                    "url": "https://amzn.to/40uxFHN",
                    "image": "https://m.media-amazon.com/images/I/51s86o-LtbL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・クロ・フランタン リシュブール・グラン・クリュ",
                    "region": "フランス",
                    "price": "¥75,936"
                },
                {
                    "url": "https://amzn.to/4afKY1H",
                    "image": "https://m.media-amazon.com/images/I/41VGwoPIBeL._AC_SY879_.jpg",
                    "productName": "シャペル シャンベルタン ピエール ダモワ",
                    "region": "フランス",
                    "price": "¥40,895"
                },
                {
                    "url": "https://amzn.to/3C5ZpJm",
                    "image": "https://m.media-amazon.com/images/I/51+i5Jz1QTL._AC_.jpg",
                    "productName": "2011 ボンヌ マール グラン クリュ コント ジョルジュ ド ヴォギュエ",
                    "region": "フランス",
                    "price": "¥162,800"
                },
                {
                    "url": "https://amzn.to/3WeVikN",
                    "image": "https://m.media-amazon.com/images/I/51qgpryk90L._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・クロ・フランタン エシェゾー・グラン・クリュ",
                    "region": "フランス",
                    "price": "¥54,441"
                }
    ]
   },
  "1-1-0-0-1-2-1-1": {
    "title": "ボルドー・カベルネ・ソーヴィニヨンワイン",
    "description": "ボルドーのカベルネ・ソーヴィニヨンワインは、濃厚で力強い味わいが特徴で、黒ベリーやカシスの香りに加え、スパイスやタバコのニュアンスが感じられます。しっかりとしたタンニンと長い余韻が特徴です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DOHU0y",
                    "image": "https://m.media-amazon.com/images/I/41arNFJCSqS._AC_SY879_.jpg",
                    "productName": "ル・ボルドー・ドゥ・モーカイユー",
                    "region": "フランス",
                    "price": "¥2,210"
                },
                {
                    "url": "https://amzn.to/4h8bUTu",
                    "image": "https://m.media-amazon.com/images/I/61FamOxIFkL._AC_SY879_.jpg",
                    "productName": "シャトー ラグランジュ ル オー メドック ド ラグランジュ",
                    "region": "フランス",
                    "price": "¥2,988"
                },
                {
                    "url": "https://amzn.to/4hahhl1",
                    "image": "https://m.media-amazon.com/images/I/71St0RBdb-L._AC_SY879_.jpg",
                    "productName": "ジネステ フレンチ・ルーツ カベルネ・ソーヴィニヨン",
                    "region": "フランス",
                    "price": "¥1,624"
                },
                {
                    "url": "https://amzn.to/4h843oN",
                    "image": "https://m.media-amazon.com/images/I/61CfpXHDBxL._AC_SY879_.jpg",
                    "productName": "シャトー・ボネ・ルージュ・バレル・エイジド",
                    "region": "フランス",
                    "price": "¥2,510"
                },
                {
                    "url": "https://amzn.to/4hdXMs1",
                    "image": "https://m.media-amazon.com/images/I/61f5PfXhBSL._AC_SY879_.jpg",
                    "productName": "プトー・セレクション ル・レヴェイユ カベルネ・ソーヴィニヨン",
                    "region": "フランス",
                    "price": "¥1,771"
                }
    ]
  },
  "1-2-0-0-1-2-1-1": {
    "title": "ボルドー・カベルネ・ソーヴィニヨンワイン",
    "description": "ボルドーのカベルネ・ソーヴィニヨンワインは、濃厚で力強い味わいが特徴で、黒ベリーやカシスの香りに加え、スパイスやタバコのニュアンスが感じられます。しっかりとしたタンニンと長い余韻が特徴です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3CgYx4q",
                    "image": "https://m.media-amazon.com/images/I/51hxThWs6QL._AC_.jpg",
                    "productName": "シャトー・ピュイグロー[2012]",
                    "region": "フランス",
                    "price": "¥3,630"
                },
                {
                    "url": "https://amzn.to/4fZ6l8S",
                    "image": "https://m.media-amazon.com/images/I/61L3LkHSHxL._AC_SY879_.jpg",
                    "productName": "CH・モンペラ ルージュ 2021",
                    "region": "フランス",
                    "price": "¥3,356"
                },
                {
                    "url": "https://amzn.to/4fOndiJ",
                    "image": "https://m.media-amazon.com/images/I/51HBDBiZ1gL._AC_SY879_.jpg",
                    "productName": "J.J.モルチェ マルゴー",
                    "region": "フランス",
                    "price": "¥4,326"
                },
                {
                    "url": "https://amzn.to/3WgEtpT",
                    "image": "https://m.media-amazon.com/images/I/51-fgnb9mCL._AC_SY879_.jpg",
                    "productName": "ラ フルール ド オー バージュ リベラル",
                    "region": "フランス",
                    "price": "¥4,900"
                },
                {
                    "url": "https://amzn.to/3Py9DVK",
                    "image": "https://m.media-amazon.com/images/I/51ARFhHl5XL._AC_SY879_.jpg",
                    "productName": "コーディア コレクション・プリベ・メドック",
                    "region": "フランス",
                    "price": "¥3,093"
                }
    ]
  },
  "1-3-0-0-1-2-1-1": {
    "title": "ボルドー・カベルネ・ソーヴィニヨンワイン",
    "description": "ボルドーのカベルネ・ソーヴィニヨンワインは、濃厚で力強い味わいが特徴で、黒ベリーやカシスの香りに加え、スパイスやタバコのニュアンスが感じられます。しっかりとしたタンニンと長い余韻が特徴です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3WeZiBM",
                    "image": "https://m.media-amazon.com/images/I/51JKmTxvsHL._AC_SY879_.jpg",
                    "productName": "2013年 レ フィエフ ド ラグランジュ",
                    "region": "フランス",
                    "price": "¥6,380"
                },
                {
                    "url": "https://amzn.to/3WaDCab",
                    "image": "https://m.media-amazon.com/images/I/81cOKeN7l+L._AC_SY879_.jpg",
                    "productName": "グラン・ヴァン・ド・シャトー・ド・リコー",
                    "region": "フランス",
                    "price": "¥6,293"
                },
                {
                    "url": "https://amzn.to/4gOtlZy",
                    "image": "https://m.media-amazon.com/images/I/61pjAAl1IrL._AC_SY879_.jpg",
                    "productName": "CHベルグラーウ゛ オーメドック 17",
                    "region": "フランス",
                    "price": "¥5,940"
                },
                {
                    "url": "https://amzn.to/40tuQGK",
                    "image": "https://m.media-amazon.com/images/I/51PPSDAS01L._AC_SX679_.jpg",
                    "productName": "シャトー プショー ラルケ",
                    "region": "フランス",
                    "price": "¥5,910"
                },
                {
                    "url": "https://amzn.to/4gPUuuX",
                    "image": "https://m.media-amazon.com/images/I/41V4eKM+M7L._AC_SY879_.jpg",
                    "productName": "シャトー カントメルル2014",
                    "region": "フランス",
                    "price": "¥6,340"
                }
    ]
  },
  "1-4-0-0-1-2-1-1": {
    "title": "ボルドー・カベルネ・ソーヴィニヨンワイン",
    "description": "ボルドーのカベルネ・ソーヴィニヨンワインは、濃厚で力強い味わいが特徴で、黒ベリーやカシスの香りに加え、スパイスやタバコのニュアンスが感じられます。しっかりとしたタンニンと長い余韻が特徴です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jetkzy",
                    "image": "https://m.media-amazon.com/images/I/51zJCUyeZXL._AC_SY879_.jpg",
                    "productName": "2010年 シャトー マレスコ サン テグジュペリ",
                    "region": "フランス",
                    "price": "¥23,100"
                },
                {
                    "url": "https://amzn.to/3E0nilU",
                    "image": "https://m.media-amazon.com/images/I/51RiA161DcL._AC_SY879_.jpg",
                    "productName": "2004年 クロ デュ マルキ",
                    "region": "フランス",
                    "price": "¥17,600"
                },
                {
                    "url": "https://amzn.to/3DShVFB",
                    "image": "https://m.media-amazon.com/images/I/51KdnmZQM3L._AC_SY879_.jpg",
                    "productName": "2012年 シャトー モンローズ",
                    "region": "フランス",
                    "price": "¥22,880"
                },
                {
                    "url": "https://amzn.to/4j9Ou1U",
                    "image": "https://m.media-amazon.com/images/I/51fVVdmG5BL._AC_SY879_.jpg",
                    "productName": "2011年 シャトー コス デストゥルネル",
                    "region": "フランス",
                    "price": "¥27,500"
                },
                {
                    "url": "https://amzn.to/3E346E4",
                    "image": "https://m.media-amazon.com/images/I/61d8kQx2LpL._AC_SY879_.jpg",
                    "productName": "CHラスコンブ",
                    "region": "フランス",
                    "price": "¥14,166"
                }
    ]
  },
  "1-5-0-0-1-2-1-1": {
    "title": "ボルドー・カベルネ・ソーヴィニヨンワイン",
    "description": "ボルドーのカベルネ・ソーヴィニヨンワインは、濃厚で力強い味わいが特徴で、黒ベリーやカシスの香りに加え、スパイスやタバコのニュアンスが感じられます。しっかりとしたタンニンと長い余韻が特徴です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E349Qg",
                    "image": "https://m.media-amazon.com/images/I/510DBsN9-hL._AC_SY879_.jpg",
                    "productName": "2015年 レ フォール ド ラトゥール",
                    "region": "フランス",
                    "price": "¥40,150"
                },
                {
                    "url": "https://amzn.to/4jbsaF2",
                    "image": "https://m.media-amazon.com/images/I/61NGlIJWMfL._AC_SY879_.jpg",
                    "productName": "2017年 シャトー ムートン ロートシルト",
                    "region": "フランス",
                    "price": "¥98,000"
                },
                {
                    "url": "https://amzn.to/4jetGWU",
                    "image": "https://m.media-amazon.com/images/I/515GYkdpODL._AC_SY879_.jpg",
                    "productName": "2015年 パヴィヨン ルージュ デュ シャトー マルゴー",
                    "region": "フランス",
                    "price": "¥40,480"
                },
                {
                    "url": "https://amzn.to/4j4Ac2F",
                    "image": "https://m.media-amazon.com/images/I/61qCt65N0PL._AC_SY879_.jpg",
                    "productName": "2016年 シャトー ポンテ カネ",
                    "region": "フランス",
                    "price": "¥31,900"
                },
                {
                    "url": "https://amzn.to/4acTkXX",
                    "image": "https://m.media-amazon.com/images/I/517zWwRoItL._AC_SY879_.jpg",
                    "productName": "2015年 シャトー デュクリュ ボーカイユ",
                    "region": "フランス",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-1-2-1-2": {
    "title": "シラーワイン",
    "description": "シラーワインは、豊かな果実味とスパイシーな香りが特徴で、黒コショウやベリーのニュアンスが感じられます。味わいはフルボディで、しっかりとしたタンニンと深いコクが特徴的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PvXzoc",
                    "image": "https://m.media-amazon.com/images/I/51nx30G-X6L._AC_SY879_.jpg",
                    "productName": "コノスル シングルヴィンヤード シラー",
                    "region": "チリ",
                    "price": "¥2,239"
                },
                {
                    "url": "https://amzn.to/3Whgl6j",
                    "image": "https://m.media-amazon.com/images/I/51dgoIe6ApL._AC_SY879_.jpg",
                    "productName": "ロシュ・マゼ シラー",
                    "region": "フランス",
                    "price": "¥1,790"
                },
                {
                    "url": "https://amzn.to/42bP8FY",
                    "image": "https://m.media-amazon.com/images/I/51yqHBFfAeL._AC_SY879_.jpg",
                    "productName": "ヴィニウス リザーヴ シラー",
                    "region": "フランス",
                    "price": "¥1,815"
                },
                {
                    "url": "https://amzn.to/42bqy8o",
                    "image": "https://m.media-amazon.com/images/I/71mMnhRm+jL._AC_SY879_.jpg",
                    "productName": "ザブ シラー",
                    "region": "イタリア",
                    "price": "¥2,091"
                },
                {
                    "url": "https://amzn.to/4g1FrNS",
                    "image": "https://m.media-amazon.com/images/I/510TOpciEHL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ シラー",
                    "region": "チリ",
                    "price": "¥2,750"
                }
    ]
  },
  "1-2-0-0-1-2-1-2": {
    "title": "シラーワイン",
    "description": "シラーワインは、豊かな果実味とスパイシーな香りが特徴で、黒コショウやベリーのニュアンスが感じられます。味わいはフルボディで、しっかりとしたタンニンと深いコクが特徴的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DQkfgi",
                    "image": "https://m.media-amazon.com/images/I/61+Ox-Nc1EL._AC_SY879_.jpg",
                    "productName": "セント・ヒューゴ バロッサ シラーズ",
                    "region": "オーストラリア",
                    "price": "¥4,322"
                },
                {
                    "url": "https://amzn.to/4fTE3wB",
                    "image": "https://m.media-amazon.com/images/I/61rd3WYijWL._AC_SY879_.jpg",
                    "productName": "YALUMBA(ヤルンバ) バロッサ シラーズ サミュエルズ コレクション",
                    "region": "オーストラリア",
                    "price": "¥3,294"
                },
                {
                    "url": "https://amzn.to/4jeSX3d",
                    "image": "https://m.media-amazon.com/images/I/51ha0tA68sL._AC_SY879_.jpg",
                    "productName": "M.Chapoutier シャプティエ クローズ・エルミタージュ ルージュ レ メゾニエ ビオ",
                    "region": "フランス",
                    "price": "¥3,867"
                },
                {
                    "url": "https://amzn.to/3C7FA4d",
                    "image": "https://m.media-amazon.com/images/I/416DquGZWyL._AC_SY879_.jpg",
                    "productName": "ピアニーフ・シラー・ヴィオニエ",
                    "region": "南アフリカ",
                    "price": "¥4,122"
                },
                {
                    "url": "https://amzn.to/3Pwgsao",
                    "image": "https://m.media-amazon.com/images/I/41l+c0MouoL._AC_SY879_.jpg",
                    "productName": "クローズ エルミタージュ ルージュ 2020",
                    "region": "フランス",
                    "price": "¥4,220"
                }
    ]
  },
  "1-3-0-0-1-2-1-2": {
    "title": "シラーワイン",
    "description": "シラーワインは、豊かな果実味とスパイシーな香りが特徴で、黒コショウやベリーのニュアンスが感じられます。味わいはフルボディで、しっかりとしたタンニンと深いコクが特徴的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hay3QX",
                    "image": "https://m.media-amazon.com/images/I/51BjMVyFABS._AC_SX679_.jpg",
                    "productName": "カリムナ ビン 28 シラーズ",
                    "region": "オーストラリア",
                    "price": "¥5,984"
                },
                {
                    "url": "https://amzn.to/4fS7Rd2",
                    "image": "https://m.media-amazon.com/images/I/71BV3OKcjhL._AC_SY879_.jpg",
                    "productName": "プラネタ シラー マロッコリ",
                    "region": "イタリア",
                    "price": "¥7,159"
                },
                {
                    "url": "https://amzn.to/4gOugcs",
                    "image": "https://m.media-amazon.com/images/I/510SgUXDKgL._AC_SY879_.jpg",
                    "productName": "安曇野池田ヴィンヤード シラー 2013",
                    "region": "日本",
                    "price": "¥5,758"
                },
                {
                    "url": "https://amzn.to/4gOQATj",
                    "image": "https://m.media-amazon.com/images/I/41kYc6PHqML._AC_.jpg",
                    "productName": "ドメーヌ イヴ キュイユロン リパ シニストラ ヴァン ド ペイ デ コリンヌ ローダニエンヌ 2012",
                    "region": "フランス",
                    "price": "¥8,738"
                },
                {
                    "url": "https://amzn.to/3C58lyr",
                    "image": "https://m.media-amazon.com/images/I/31BzvTY+ECL._AC_.jpg",
                    "productName": "ソタナム I.G.P. デ コリンヌ ローダニエンヌ セイシュエル",
                    "region": "フランス",
                    "price": "¥7,295"
                }
    ]
  },
  "1-4-0-0-1-2-1-2": {
    "title": "シラーワイン",
    "description": "シラーワインは、豊かな果実味とスパイシーな香りが特徴で、黒コショウやベリーのニュアンスが感じられます。味わいはフルボディで、しっかりとしたタンニンと深いコクが特徴的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4ac3E2A",
                    "image": "https://m.media-amazon.com/images/I/41dq+PnbeNL._AC_SX679_.jpg",
                    "productName": "フォリー・シラー/モンテス",
                    "region": "チリ",
                    "price": "¥11,000"
                },
                {
                    "url": "https://amzn.to/4a9NGWF",
                    "image": "https://m.media-amazon.com/images/I/71tszp7aEIL._AC_SY879_.jpg",
                    "productName": "コンチャ・イ・トロ グラバス・デル・マイポ シラー",
                    "region": "チリ",
                    "price": "¥15,053"
                },
                {
                    "url": "https://amzn.to/40aRYII",
                    "image": "https://m.media-amazon.com/images/I/61xd8wHExGL._AC_SY879_.jpg",
                    "productName": "ローズマウント フラグシップ バルモラル・シラー",
                    "region": "オーストラリア",
                    "price": "¥13,079"
                },
                {
                    "url": "https://amzn.to/3WgxRrn",
                    "image": "https://m.media-amazon.com/images/I/51-nSuN-3WL._AC_SY879_.jpg",
                    "productName": "シャプティエ エルミタージュ ルージュ モニエ ド ラ シズランヌ",
                    "region": "フランス",
                    "price": "¥11,562"
                },
                {
                    "url": "https://amzn.to/428YvpO",
                    "image": "https://m.media-amazon.com/images/I/71JFOzZTC1L._AC_SY879_.jpg",
                    "productName": "フェラトン ル・メアル 2005 エルミタージュAOC",
                    "region": "フランス",
                    "price": "¥14,600"
                }
    ]
  },
  "1-5-0-0-1-2-1-2": {
    "title": "シラーワイン",
    "description": "シラーワインは、豊かな果実味とスパイシーな香りが特徴で、黒コショウやベリーのニュアンスが感じられます。味わいはフルボディで、しっかりとしたタンニンと深いコクが特徴的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/427Wrys",
                    "image": "https://m.media-amazon.com/images/I/71Q9UzuOx0L._AC_SX679_.jpg",
                    "productName": "グランポレール 山梨 シラー 貴腐",
                    "region": "日本",
                    "price": "¥154,486"
                },
                {
                    "url": "https://amzn.to/4h9FZSK",
                    "image": "https://m.media-amazon.com/images/I/31EyB67GzeL._AC_.jpg",
                    "productName": "シャプティエ エルミタージュ ルージュ ル メアル 2012",
                    "region": "フランス",
                    "price": "¥47,775"
                },
                {
                    "url": "https://amzn.to/42bPKvg",
                    "image": "https://m.media-amazon.com/images/I/21Nv9fCg34L._AC_.jpg",
                    "productName": "マウント・プレザント・モーリス・オシェイ・シラーズ",
                    "region": "オーストラリア",
                    "price": "¥38,000"
                },
                {
                    "url": "https://amzn.to/4jeuoDy",
                    "image": "https://m.media-amazon.com/images/I/511wue7azxL._AC_SX679_.jpg",
                    "productName": "ペンフォールズ グランジ 2011年ヴィンテージ",
                    "region": "オーストラリア",
                    "price": "¥95,663"
                },
                {
                    "url": "https://amzn.to/4j40aDc",
                    "image": "https://m.media-amazon.com/images/I/41mpeh6XvvL._AC_SY879_.jpg",
                    "productName": "シャプティエ コート・ロティ ラ モルドレ 1989",
                    "region": "フランス",
                    "price": "¥104,789"
                }
    ]
   },
  "1-1-0-0-1-2-2-1": {
    "title": "テンプラニーリョワイン",
    "description": "テンプラニーリョワインは、豊かな果実味とスパイシーな香りが特徴で、チェリーやプラムのフルーツ感に加え、バニラやタバコのニュアンスも感じられます。柔らかなタンニンとしっかりした酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j4Qpot",
                    "image": "https://m.media-amazon.com/images/I/51YCPB5f0sL._AC_SY879_.jpg",
                    "productName": "マルケス・デ・リスカル リスカル・テンプラニーリョ",
                    "region": "スペイン",
                    "price": "¥1,584"
                },
                {
                    "url": "https://amzn.to/40xmRHJ",
                    "image": "https://m.media-amazon.com/images/I/51zs4DFWwaL._AC_SX679_.jpg",
                    "productName": "ラモン ビルバオ リミテッド エディション",
                    "region": "スペイン",
                    "price": "¥2,828"
                },
                {
                    "url": "https://amzn.to/4fOosOV",
                    "image": "https://m.media-amazon.com/images/I/61ezxScwSxL._AC_SY879_.jpg",
                    "productName": "マルケス・デ・リスカル ティント・レセルバ",
                    "region": "スペイン",
                    "price": "¥2,728"
                },
                {
                    "url": "https://amzn.to/4ai3FSv",
                    "image": "https://m.media-amazon.com/images/I/41TB1UohhOL._AC_SY879_.jpg",
                    "productName": "エナーテ テンプラニーリョ",
                    "region": "スペイン",
                    "price": "¥2,090"
                },
                {
                    "url": "https://amzn.to/40b3DY6",
                    "image": "https://m.media-amazon.com/images/I/61syk1fKB-S._AC_SY879_.jpg",
                    "productName": "アグヌス テンプラニーリョ",
                    "region": "スペイン",
                    "price": "¥2,857"
                }
    ]
  },
  "1-2-0-0-1-2-2-1": {
    "title": "テンプラニーリョワイン",
    "description": "テンプラニーリョワインは、豊かな果実味とスパイシーな香りが特徴で、チェリーやプラムのフルーツ感に加え、バニラやタバコのニュアンスも感じられます。柔らかなタンニンとしっかりした酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40c6W15",
                    "image": "https://m.media-amazon.com/images/I/51-48wuDs5L._AC_SX679_.jpg",
                    "productName": "レガリス クリアンサ",
                    "region": "スペイン",
                    "price": "¥3,353"
                },
                {
                    "url": "https://amzn.to/3C58tOr",
                    "image": "https://m.media-amazon.com/images/I/71DIXtt0Q6L._AC_SY879_.jpg",
                    "productName": "コト・デ・イマズ・レセルヴァ",
                    "region": "スペイン",
                    "price": "¥3,060"
                },
                {
                    "url": "https://amzn.to/3DRrXqx",
                    "image": "https://m.media-amazon.com/images/I/516xjbPKN6L._AC_SX679_.jpg",
                    "productName": "トーレス セレステ クリアンサ",
                    "region": "スペイン",
                    "price": "¥3,377"
                },
                {
                    "url": "https://amzn.to/4hct6Hk",
                    "image": "https://m.media-amazon.com/images/I/51g0IjuNCpL._AC_SX679_.jpg",
                    "productName": "Numanthia(ヌマンシア) テルメス",
                    "region": "スペイン",
                    "price": "¥4,156"
                },
                {
                    "url": "https://amzn.to/4fOw2ZO",
                    "image": "https://m.media-amazon.com/images/I/71tSXGEzhJL._AC_SY879_.jpg",
                    "productName": "ロペス・デ・アロ グランレセルバ",
                    "region": "スペイン",
                    "price": "¥4,860"
                }
    ]
  },
  "1-3-0-0-1-2-2-1": {
    "title": "テンプラニーリョワイン",
    "description": "テンプラニーリョワインは、豊かな果実味とスパイシーな香りが特徴で、チェリーやプラムのフルーツ感に加え、バニラやタバコのニュアンスも感じられます。柔らかなタンニンとしっかりした酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3WdTU27",
                    "image": "https://m.media-amazon.com/images/I/61EndXhyEDL._AC_SY879_.jpg",
                    "productName": "ラクエバ デル コンタドール 2011",
                    "region": "スペイン",
                    "price": "¥9,980"
                },
                {
                    "url": "https://amzn.to/42aPWe9",
                    "image": "https://m.media-amazon.com/images/I/41W5u+XmwyL._AC_.jpg",
                    "productName": "フィンカ・デ・アルトゥーラ ドミニオ・バスコンシリョス 2022年",
                    "region": "スペイン",
                    "price": "¥5,335"
                },
                {
                    "url": "https://amzn.to/4fNsw1K",
                    "image": "https://m.media-amazon.com/images/I/71QGQ-7ve8L._AC_SY879_.jpg",
                    "productName": "numanthia(ヌマンシア)",
                    "region": "スペイン",
                    "price": "¥6,894"
                },
                {
                    "url": "https://amzn.to/3E35AOE",
                    "image": "https://m.media-amazon.com/images/I/61SaRBZN3bL._AC_SX679_.jpg",
                    "productName": "クネ インペリアル グラン・レセルバ",
                    "region": "スペイン",
                    "price": "¥7,109"
                },
                {
                    "url": "https://amzn.to/3DNHyal",
                    "image": "https://m.media-amazon.com/images/I/51DwpvJyqXL._AC_SY879_.jpg",
                    "productName": "クネ レアル・デ・アスア",
                    "region": "スペイン",
                    "price": "¥9,749"
                }
    ]
  },
  "1-4-0-0-1-2-2-1": {
    "title": "テンプラニーリョワイン",
    "description": "テンプラニーリョワインは、豊かな果実味とスパイシーな香りが特徴で、チェリーやプラムのフルーツ感に加え、バニラやタバコのニュアンスも感じられます。柔らかなタンニンとしっかりした酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hdZutr",
                    "image": "https://m.media-amazon.com/images/I/71bX4UTboDL._AC_SY879_.jpg",
                    "productName": "エミリオ・モロ マレオルス・ヴァルデラミロ",
                    "region": "スペイン",
                    "price": "¥16,217"
                },
                {
                    "url": "https://amzn.to/4j4QSad",
                    "image": "https://m.media-amazon.com/images/I/6110nyRzH+L._AC_SY879_.jpg",
                    "productName": "ラビーニャ アンドレス ロメオ 2009年ヴィンテージ",
                    "region": "スペイン",
                    "price": "¥12,800"
                },
                {
                    "url": "https://amzn.to/40aSIxu",
                    "image": "https://m.media-amazon.com/images/I/21koPfrQZjL._AC_.jpg",
                    "productName": "クネ レアル デ アスア[2010]",
                    "region": "スペイン",
                    "price": "¥10,899"
                },
                {
                    "url": "https://amzn.to/40a4kku",
                    "image": "https://m.media-amazon.com/images/I/51x52EpzfPL._AC_SY879_.jpg",
                    "productName": "フィンカ・エル・ボスケ[2013]",
                    "region": "スペイン",
                    "price": "¥14,742"
                },
                {
                    "url": "https://amzn.to/4acUW3X",
                    "image": "https://m.media-amazon.com/images/I/51uu0NDUd3L._AC_SX679_.jpg",
                    "productName": "カユース テンプラニーリョ インパルシーヴォ 2014",
                    "region": "アメリカ",
                    "price": "¥28,000"
                }
    ]
  },
  "1-5-0-0-1-2-2-1": {
    "title": "テンプラニーリョワイン",
    "description": "テンプラニーリョワインは、豊かな果実味とスパイシーな香りが特徴で、チェリーやプラムのフルーツ感に加え、バニラやタバコのニュアンスも感じられます。柔らかなタンニンとしっかりした酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fSyApU",
                    "image": "https://m.media-amazon.com/images/I/610V3trjyOL._AC_SY879_.jpg",
                    "productName": "ドミニオ デ ピングス 2008",
                    "region": "スペイン",
                    "price": "¥120,000"
                },
                {
                    "url": "https://amzn.to/40E9oPD",
                    "image": "https://m.media-amazon.com/images/I/71mauSFx36L._AC_SY879_.jpg",
                    "productName": "ドミニオ デ ピングス 2006",
                    "region": "スペイン",
                    "price": "¥117,200"
                },
                {
                    "url": "https://amzn.to/3PyheDU",
                    "image": "https://m.media-amazon.com/images/I/51GD2DlTbFL._AC_SY879_.jpg",
                    "productName": "ウニコ 2005 ヴェガ シシリア",
                    "region": "スペイン",
                    "price": "¥87,220"
                },
                {
                    "url": "https://amzn.to/40r1gBE",
                    "image": "https://m.media-amazon.com/images/I/41PuuGb9pSL._AC_SY879_.jpg",
                    "productName": "ラ ヴィーニャ デ アンドレス 2004",
                    "region": "スペイン",
                    "price": "¥34,300"
                },
                {
                    "url": "https://amzn.to/4ga2lmh",
                    "image": "https://m.media-amazon.com/images/I/712UXDc3QVL._AC_SX679_.jpg",
                    "productName": "ウニコ 2010",
                    "region": "スペイン",
                    "price": "¥79,200"
                }
    ]
  },
  "1-1-0-0-1-2-2-2": {
    "title": "サンジョベーゼ&ネッビオーロワイン",
    "description": "サンジョベーゼ&ネッビオーロワインは、果実味と酸味がバランスよく調和し、チェリーやラズベリーの香りに加え、スパイスや土のニュアンスも感じられます。しっかりとしたタンニンと酸味が特徴的で、複雑で深い味わいです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Whi8Iz",
                    "image": "https://m.media-amazon.com/images/I/51H--5x2+RL._AC_SX679_.jpg",
                    "productName": "TAVERNELLO(タヴェルネッロ) オーガニックワインオルガニコ サンジョベーゼ",
                    "region": "イタリア",
                    "price": "¥1,666"
                },
                {
                    "url": "https://amzn.to/4j9QQxM",
                    "image": "https://m.media-amazon.com/images/I/51XfRaW7jRL._AC_SX679_.jpg",
                    "productName": "タヴェルネッロ ロッソ",
                    "region": "イタリア",
                    "price": "¥1,394"
                },
                {
                    "url": "https://amzn.to/3E0pREA",
                    "image": "https://m.media-amazon.com/images/I/71o54vMXNXL._AC_SY879_.jpg",
                    "productName": "ロッソ ピチェーノ",
                    "region": "イタリア",
                    "price": "¥1,944"
                },
                {
                    "url": "https://amzn.to/40dGlR9",
                    "image": "https://m.media-amazon.com/images/I/41p8ERlry1L._AC_SX679_.jpg",
                    "productName": "コンティ・セリストーリ キャンティ クラシコDOCG",
                    "region": "イタリア",
                    "price": "¥2,821"
                },
                {
                    "url": "https://amzn.to/3E0pVUQ",
                    "image": "https://m.media-amazon.com/images/I/71d4WCaL4FL._AC_SY879_.jpg",
                    "productName": "グラン・サッソ サンジョヴェーゼ テッレ・ディ・キエティ",
                    "region": "イタリア",
                    "price": "¥2,037"
                }
    ]
  },
  "1-2-0-0-1-2-2-2": {
    "title": "サンジョベーゼ&ネッビオーロワイン",
    "description": "サンジョベーゼ&ネッビオーロワインは、果実味と酸味がバランスよく調和し、チェリーやラズベリーの香りに加え、スパイスや土のニュアンスも感じられます。しっかりとしたタンニンと酸味が特徴的で、複雑で深い味わいです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4h5sjI8",
                    "image": "https://m.media-amazon.com/images/I/51TrJa0yyZL._AC_SY879_.jpg",
                    "productName": "フォンタナフレッダ バローロ",
                    "region": "イタリア",
                    "price": "¥3,998"
                },
                {
                    "url": "https://amzn.to/4hd5L8K",
                    "image": "https://m.media-amazon.com/images/I/51vn+M8zuQL._AC_SX679_.jpg",
                    "productName": "キャンティ・クラシコ・ボナッキ",
                    "region": "イタリア",
                    "price": "¥3,212"
                },
                {
                    "url": "https://amzn.to/4gPWJyn",
                    "image": "https://m.media-amazon.com/images/I/71g6hoku0zL._AC_SY879_.jpg",
                    "productName": "テッレ デル バローロ バローロ",
                    "region": "イタリア",
                    "price": "¥4,253"
                },
                {
                    "url": "https://amzn.to/4h8eskw",
                    "image": "https://m.media-amazon.com/images/I/51ag0I+I3-L._AC_SY879_.jpg",
                    "productName": "ジジ・ロッソ バローロ",
                    "region": "イタリア",
                    "price": "¥4,491"
                },
                {
                    "url": "https://amzn.to/40fz4jU",
                    "image": "https://m.media-amazon.com/images/I/515uQuJtubL._AC_SX679_.jpg",
                    "productName": "ロベルト サロット バルバレスコ リゼルヴァ",
                    "region": "イタリア",
                    "price": "¥4,603"
                }
    ]
  },
  "1-3-0-0-1-2-2-2": {
    "title": "サンジョベーゼ&ネッビオーロワイン",
    "description": "サンジョベーゼ&ネッビオーロワインは、果実味と酸味がバランスよく調和し、チェリーやラズベリーの香りに加え、スパイスや土のニュアンスも感じられます。しっかりとしたタンニンと酸味が特徴的で、複雑で深い味わいです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fVUGYi",
                    "image": "https://m.media-amazon.com/images/I/51QBWcGfe3L._AC_SY879_.jpg",
                    "productName": "Fontanafredda(フォンタナフレッダ) バローロ・セッラルンガ・ダルバ",
                    "region": "イタリア",
                    "price": "¥7,973"
                },
                {
                    "url": "https://amzn.to/4jfTKRJ",
                    "image": "https://m.media-amazon.com/images/I/511hU1FG8FL._AC_SX679_.jpg",
                    "productName": "バルビソプラーニ バルバレスコ",
                    "region": "イタリア",
                    "price": "¥5,782"
                },
                {
                    "url": "https://amzn.to/4gNSmUN",
                    "image": "https://m.media-amazon.com/images/I/61ZIpmaixFL._AC_SY879_.jpg",
                    "productName": "アンティノリ ブルネロ・ディ・モンタルチーノ・ピアン・デッレ・ヴィーニェ",
                    "region": "イタリア",
                    "price": "¥8,798"
                },
                {
                    "url": "https://amzn.to/3WdZAsO",
                    "image": "https://m.media-amazon.com/images/I/41NDmHp15wL._AC_SY879_.jpg",
                    "productName": "プルノット バローロ",
                    "region": "イタリア",
                    "price": "¥6,916"
                },
                {
                    "url": "https://amzn.to/42gLbQe",
                    "image": "https://m.media-amazon.com/images/I/51BIuj1mDNL._AC_SY879_.jpg",
                    "productName": "カレッタ カンヌービ バローロ DOCG",
                    "region": "イタリア",
                    "price": "¥9,497"
                }
    ]
  },
  "1-4-0-0-1-2-2-2": {
    "title": "サンジョベーゼ&ネッビオーロワイン",
    "description": "サンジョベーゼ&ネッビオーロワインは、果実味と酸味がバランスよく調和し、チェリーやラズベリーの香りに加え、スパイスや土のニュアンスも感じられます。しっかりとしたタンニンと酸味が特徴的で、複雑で深い味わいです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42bR55g",
                    "image": "https://m.media-amazon.com/images/I/41yE6StLnBL._AC_SY879_.jpg",
                    "productName": "ポデレラヴィーニャ ブルネッロ ディ モンタルチーノ DOCG リゼルバ",
                    "region": "イタリア",
                    "price": "¥12,551"
                },
                {
                    "url": "https://amzn.to/4h1ECWg",
                    "image": "https://m.media-amazon.com/images/I/71jQDHXRGfL._AC_SY879_.jpg",
                    "productName": "バローロ ディオーシージー カンヌービ",
                    "region": "イタリア",
                    "price": "¥21,027"
                },
                {
                    "url": "https://amzn.to/4fS9CqE",
                    "image": "https://m.media-amazon.com/images/I/418qYRh8M2L._AC_SY879_.jpg",
                    "productName": "カンヌービ・バローロ",
                    "region": "イタリア",
                    "price": "¥16,097"
                },
                {
                    "url": "https://amzn.to/4g1Hv8A",
                    "image": "https://m.media-amazon.com/images/I/51A9qVkxPdL._AC_SY879_.jpg",
                    "productName": "バローロ・ロミラスコ ポデーリ・アルド・コンテルノ",
                    "region": "イタリア",
                    "price": "¥29,069"
                },
                {
                    "url": "https://amzn.to/3DQxspm",
                    "image": "https://m.media-amazon.com/images/I/612J3xS9tfL._AC_SY879_.jpg",
                    "productName": "マルケージ・デ・フレスコバルディ ブルネッロ・ディ・モンタルチーノ・カステル・ジョコンド",
                    "region": "イタリア",
                    "price": "¥11,495"
                }
    ]
  },
  "1-5-0-0-1-2-2-2": {
    "title": "サンジョベーゼ&ネッビオーロワイン",
    "description": "サンジョベーゼ&ネッビオーロワインは、果実味と酸味がバランスよく調和し、チェリーやラズベリーの香りに加え、スパイスや土のニュアンスも感じられます。しっかりとしたタンニンと酸味が特徴的で、複雑で深い味わいです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3BTeQob",
                    "image": "https://m.media-amazon.com/images/I/31zqxJj7bAL._AC_.jpg",
                    "productName": "アルド・コンテルノ バローロ ロミラスコ",
                    "region": "イタリア",
                    "price": "¥38,000"
                },
                {
                    "url": "https://amzn.to/4a9PlLT",
                    "image": "https://m.media-amazon.com/images/I/81V-+cFAg7L._AC_SY879_.jpg",
                    "productName": "バローロ ディオーシージー カンヌービ リゼルヴァ",
                    "region": "イタリア",
                    "price": "¥31,204"
                },
                {
                    "url": "https://amzn.to/4jbv24M",
                    "image": "https://m.media-amazon.com/images/I/31AAjIgNuaL._AC_.jpg",
                    "productName": "ルーチェ ブルネッロ ディ モンタルチーノ 2013 ルーチェ デッラ ヴィーテ",
                    "region": "イタリア",
                    "price": "¥33,000"
                },
                {
                    "url": "https://amzn.to/3PCJwgl",
                    "image": "https://m.media-amazon.com/images/I/516N9ii46OL._AC_SY879_.jpg",
                    "productName": "レ ペルゴーレ トルテ 2021 モンテベルティーネ",
                    "region": "イタリア",
                    "price": "¥39,290"
                },
                {
                    "url": "https://amzn.to/40xaz3i",
                    "image": "https://m.media-amazon.com/images/I/51M8Sj-1PyL._AC_SY879_.jpg",
                    "productName": "フラッチャネッロ デッラ ピエーヴェ 2016 フォントディ",
                    "region": "イタリア",
                    "price": "¥33,680"
                }
    ]
  },
  "1-1-0-0-2-1-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-1-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-1-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-1-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-1-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-1-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-1-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-1-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-1-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-1-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-1-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-1-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-1-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-1-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-1-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-1-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-1-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ Tマールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-1-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-1-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-1-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-2-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-2-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-2-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-2-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-2-1-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-2-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-2-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-2-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-2-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-2-1-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-2-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-2-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-2-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-2-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-2-2-1": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "1-1-0-0-2-2-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DUqGPp",
                    "image": "https://m.media-amazon.com/images/I/61s-RIIcTcL._AC_SY879_.jpg",
                    "productName": "ジョージ・ウィンダム ビン トリプルスリー ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥1,692"
                },
                {
                    "url": "https://amzn.to/3Wh1gBI",
                    "image": "https://m.media-amazon.com/images/I/41PxngE3mkL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,007"
                },
                {
                    "url": "https://amzn.to/3We5H0a",
                    "image": "https://m.media-amazon.com/images/I/51N27mKBGUL._AC_SY879_.jpg",
                    "productName": "コノスル ピノ・ノワール ビシクレタ レゼルバ",
                    "region": "チリ",
                    "price": "¥1,167"
                },
                {
                    "url": "https://amzn.to/40fKN1S",
                    "image": "https://m.media-amazon.com/images/I/41HhqBGLrlS._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥2,684"
                },
                {
                    "url": "https://amzn.to/3C4dEhH",
                    "image": "https://m.media-amazon.com/images/I/51xjjto6CXL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ファウンダース・エステート・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥2,490"
                }
    ]
  },
  "1-2-0-0-2-2-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/409cbPf",
                    "image": "https://m.media-amazon.com/images/I/61-CXTyekCL._AC_SX679_.jpg",
                    "productName": "スモール・ワンダー ランドスケープ ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥4,950"
                },
                {
                    "url": "https://amzn.to/3Px3yZK",
                    "image": "https://m.media-amazon.com/images/I/41c4ooGogxL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・ピノ・ノワール",
                    "region": "チリ",
                    "price": "¥4,925"
                },
                {
                    "url": "https://amzn.to/3PA6JA1",
                    "image": "https://m.media-amazon.com/images/I/41Buwae31JL._AC_SY879_.jpg",
                    "productName": "ヴィントナーズ・リザーヴ ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥3,754"
                },
                {
                    "url": "https://amzn.to/40siRcx",
                    "image": "https://m.media-amazon.com/images/I/51hSJ-J-yQL._AC_SX679_.jpg",
                    "productName": "ブランコット・エステート レター・シリーズ T マールボロ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥4,076"
                },
                {
                    "url": "https://amzn.to/4fVJYBp",
                    "image": "https://m.media-amazon.com/images/I/31ZIGvfC0-L._AC_.jpg",
                    "productName": "メイオミ ピノ・ノワール 2014",
                    "region": "アメリカ",
                    "price": "¥3,932"
                }
    ]
  },
  "1-3-0-0-2-2-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4alAxd9",
                    "image": "https://m.media-amazon.com/images/I/51VrNqC9XxL._AC_SX679_.jpg",
                    "productName": "クラウディー・ベイ ピノ・ノワール",
                    "region": "ニュージーランド",
                    "price": "¥5,075"
                },
                {
                    "url": "https://amzn.to/3C7KwpQ",
                    "image": "https://m.media-amazon.com/images/I/51HAi4TvTAL._AC_SY879_.jpg",
                    "productName": "ベリンジャー・ソノマ・コースト・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥5,680"
                },
                {
                    "url": "https://amzn.to/4jelSVm",
                    "image": "https://m.media-amazon.com/images/I/615JvMnWlGL._AC_SY879_.jpg",
                    "productName": "レゾナンス ウィラメット・ヴァレー ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥6,760"
                },
                {
                    "url": "https://amzn.to/4j5ngtn",
                    "image": "https://m.media-amazon.com/images/I/71AK0u8tY2L._AC_SX679_.jpg",
                    "productName": "ビン 23 ピノ・ノワール",
                    "region": "オーストラリア",
                    "price": "¥7,735"
                },
                {
                    "url": "https://amzn.to/40jIsmS",
                    "image": "https://m.media-amazon.com/images/I/41upeIQBqwL._AC_SX679_.jpg",
                    "productName": "ロシアン・リヴァー・ヴァレー・セレクション ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥8,266"
                }
    ]
  },
  "1-4-0-0-2-2-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fTlJ6S",
                    "image": "https://m.media-amazon.com/images/I/61KWv-AI79L._AC_SX679_.jpg",
                    "productName": "ジャクソン・エステート・アウトランド・リッジ・ピノ・ノワール",
                    "region": "アメリカ",
                    "price": "¥11,273"
                },
                {
                    "url": "https://amzn.to/3DPxkGC",
                    "image": "https://m.media-amazon.com/images/I/51UtGlUB3+L._AC_SY879_.jpg",
                    "productName": "ピラミッド・ヴァレー・ヴィンヤーズ アース・スモーク カンタベリー ピノ・ノワール 2015",
                    "region": "ニュージーランド",
                    "price": "¥12,213"
                },
                {
                    "url": "https://amzn.to/42c6NNQ",
                    "image": "https://m.media-amazon.com/images/I/21Gl6AuJ-TL._AC_.jpg",
                    "productName": "タリー ピノノワール リンコン ヴィンヤード アロヨグランデヴァレー",
                    "region": "アメリカ",
                    "price": "¥14,887"
                },
                {
                    "url": "https://amzn.to/4hdSEEi",
                    "image": "https://m.media-amazon.com/images/I/31v6ZUciQUL._AC_.jpg",
                    "productName": "チャクラ32 トレインタ・イ・ドス",
                    "region": "アルゼンチン",
                    "price": "¥14,746"
                },
                {
                    "url": "https://amzn.to/3PvUi8b",
                    "image": "https://m.media-amazon.com/images/I/51Xw4eMsayL._AC_SX679_.jpg",
                    "productName": "オーボン クリマ ピノノワール イザベル カリフォルニア",
                    "region": "アメリカ",
                    "price": "¥11,220"
                }
    ]
  },
  "1-5-0-0-2-2-2-2": {
    "title": "ニューワールド・ピノ・ノワールワイン",
    "description": "ニューワールドのピノ・ノワールワインは、果実味が豊かで、ラズベリーやチェリーの香りに加え、バニラやスパイスのニュアンスが感じられます。味わいは滑らかで、柔らかなタンニンと繊細な酸味が調和しています。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3E1dGaA",
                    "image": "https://m.media-amazon.com/images/I/51Dg4EbEI3L._AC_SY879_.jpg",
                    "productName": "キスラー・ヴィンヤーズ ピノ・ノワール・キュヴェ・ナタリー[2007]",
                    "region": "アメリカ",
                    "price": "¥36,000"
                },
                {
                    "url": "https://amzn.to/3E1l9GB",
                    "image": "https://m.media-amazon.com/images/I/41TtAR2o54L._AC_SX679_.jpg",
                    "productName": "カレラ ピノ ノワール ジェンセン 2021",
                    "region": "アメリカ",
                    "price": "¥30,800"
                },
                {
                    "url": "https://amzn.to/3DOpGMF",
                    "image": "https://m.media-amazon.com/images/I/41Su1XWVFfL._AC_SX679_.jpg",
                    "productName": "オーベール ピノ ノワール UV ヴィンヤード 2019",
                    "region": "アメリカ",
                    "price": "¥34,800"
                },
                {
                    "url": "https://amzn.to/4acWdZ0",
                    "image": "https://m.media-amazon.com/images/I/31OHmCTv2dL._AC_.jpg",
                    "productName": "ボアズ ヴュー ピノ ノワール ザ コースト ソノマ コースト [2017]",
                    "region": "アメリカ",
                    "price": "¥33,423"
                },
                {
                    "url": "https://amzn.to/40ge9x4",
                    "image": "https://m.media-amazon.com/images/I/31vdelK0+rL._AC_.jpg",
                    "productName": "オクシデンタル ピノノワール ボデガ リッジ ヴィンヤード [2021]",
                    "region": "アメリカ",
                    "price": "¥31,900"
                }
    ]
  },
  "2-1-0-0-1-1-1-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gNHwy4",
                    "image": "https://m.media-amazon.com/images/I/51Sk68As11L._AC_SY879_.jpg",
                    "productName": "ジョセフ ドラーテン ゲヴェルツトラミネール カビネット 2022",
                    "region": "ドイツ",
                    "price": "¥1,350"
                },
                {
                    "url": "https://amzn.to/3WfQ2gK",
                    "image": "https://m.media-amazon.com/images/I/51o9wJBTqML._AC_SY879_.jpg",
                    "productName": "ガウメンシュピール ゲヴュルツトラミネール",
                    "region": "ドイツ",
                    "price": "¥1,895"
                },
                {
                    "url": "https://amzn.to/40rTkAi",
                    "image": "https://m.media-amazon.com/images/I/71KKtgmUZ4L._AC_SY879_.jpg",
                    "productName": "コノスル ビシクレタ ゲヴュルツトラミネール ヴァラエタル",
                    "region": "チリ",
                    "price": "¥1,186"
                },
                {
                    "url": "https://amzn.to/40vnanm",
                    "image": "https://m.media-amazon.com/images/I/41tsgP4mknL._AC_SY879_.jpg",
                    "productName": "ゲヴュルツトラミネール レゼルヴ パルティキュリエール 2022 ポール ブルケール",
                    "region": "フランス",
                    "price": "¥2,250"
                },
                {
                    "url": "https://amzn.to/40qhVFv",
                    "image": "https://m.media-amazon.com/images/I/51pVXTR2+nL._AC_SY879_.jpg",
                    "productName": "フライシャー ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥2,650"
                }
    ]
  },
  "2-2-0-0-1-1-1-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gP5Tez",
                    "image": "https://m.media-amazon.com/images/I/411B71PIZfL._AC_SY879_.jpg",
                    "productName": "ヒューゲル ゲヴェルツトラミネール クラシック 2022",
                    "region": "フランス",
                    "price": "¥3,600"
                },
                {
                    "url": "https://amzn.to/4fTisV1",
                    "image": "https://m.media-amazon.com/images/I/61sF1SFXStL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール テュルクハイム",
                    "region": "フランス",
                    "price": "¥4,632"
                },
                {
                    "url": "https://amzn.to/3E1m35X",
                    "image": "https://m.media-amazon.com/images/I/51LFNLvfl5L._AC_SX679_.jpg",
                    "productName": "レオン・ベイエ ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥4,095"
                },
                {
                    "url": "https://amzn.to/3DPyB0x",
                    "image": "https://m.media-amazon.com/images/I/411DAS8EekL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥3,529"
                },
                {
                    "url": "https://amzn.to/4acyFDk",
                    "image": "https://m.media-amazon.com/images/I/51F1LU8t8FL._AC_.jpg",
                    "productName": "ゲヴュルツトラミネール・コレクション カーヴ・ド・リボヴィレ 2020",
                    "region": "フランス",
                    "price": "¥4,510"
                }
    ]
  },
  "2-3-0-0-1-1-1-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4294cUK",
                    "image": "https://m.media-amazon.com/images/I/41bTrEG0DpL._AC_SX679_.jpg",
                    "productName": "トラミン ゲヴュルツトラミネール 2022",
                    "region": "イタリア",
                    "price": "¥5,254"
                },
                {
                    "url": "https://amzn.to/3PvHHSw",
                    "image": "https://m.media-amazon.com/images/I/61k1-sSy6sL._AC_SY879_.jpg",
                    "productName": "ドメーヌ マルセル ダイス ゲヴュルツトラミネール 2022",
                    "region": "フランス",
                    "price": "¥6,728"
                },
                {
                    "url": "https://amzn.to/3PvjoUC",
                    "image": "https://m.media-amazon.com/images/I/41f45At7YrL._AC_SY879_.jpg",
                    "productName": "ヌスバウマー ゲヴュルツトラミネール 2022 トラミン",
                    "region": "イタリア",
                    "price": "¥7,040"
                },
                {
                    "url": "https://amzn.to/3Puxq98",
                    "image": "https://m.media-amazon.com/images/I/51NT67b-foL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・キュヴェ・デ・セニュール・ド・リボピエール",
                    "region": "フランス",
                    "price": "¥8,162"
                },
                {
                    "url": "https://amzn.to/4hdTDnY",
                    "image": "https://m.media-amazon.com/images/I/61DpgLfH9JL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒトゲヴュルツトラミネール ランゲン・ド・タン クロ・サンテュルバン グラン・クリュ",
                    "region": "フランス",
                    "price": "¥9,718"
                }
    ]
  },
  "2-4-0-0-1-1-1-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j8FKJf",
                    "image": "https://m.media-amazon.com/images/I/61mDZE7+NJL._AC_SX679_.jpg",
                    "productName": "1981年 シャルル・ヴァンツ",
                    "region": "フランス",
                    "price": "¥14,228"
                },
                {
                    "url": "https://amzn.to/40fpLk8",
                    "image": "https://m.media-amazon.com/images/I/31RjPykZHIL._AC_.jpg",
                    "productName": "クリスチャン・ビネール ゲヴュルツトラミネール グラン・クリュ ケフェルコフ ヴァンダンジュ・タルディヴ 2018",
                    "region": "フランス",
                    "price": "¥10,274"
                },
                {
                    "url": "https://amzn.to/3C7MpTs",
                    "image": "https://m.media-amazon.com/images/I/31RP9LseBRL._AC_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール ランゲン・ド・タン・クロ・サンテュルバン GC 2013",
                    "region": "フランス",
                    "price": "¥11,454"
                },
                {
                    "url": "https://amzn.to/425ZbfR",
                    "image": "https://m.media-amazon.com/images/I/41xeQREqHlL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・セレクション・ ド・グラン・ノーブル 2008",
                    "region": "フランス",
                    "price": "¥23,100"
                },
                {
                    "url": "https://amzn.to/4gVonuc",
                    "image": "https://m.media-amazon.com/images/I/41QKIK1Z2ML._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール アルテンブルク 2021",
                    "region": "フランス",
                    "price": "¥11,000"
                }
    ]
  },
  "2-5-0-0-1-1-1-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fVzzFy",
                    "image": "https://m.media-amazon.com/images/I/41YhkqNITWL._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール グランクリュ フュルステンテュム セレクシヨン ド グランノーブル 2017",
                    "region": "フランス",
                    "price": "¥34,000"
                }
    ]
  },
  "2-1-0-0-1-1-1-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gNHwy4",
                    "image": "https://m.media-amazon.com/images/I/51Sk68As11L._AC_SY879_.jpg",
                    "productName": "ジョセフ ドラーテン ゲヴェルツトラミネール カビネット 2022",
                    "region": "ドイツ",
                    "price": "¥1,350"
                },
                {
                    "url": "https://amzn.to/3WfQ2gK",
                    "image": "https://m.media-amazon.com/images/I/51o9wJBTqML._AC_SY879_.jpg",
                    "productName": "ガウメンシュピール ゲヴュルツトラミネール",
                    "region": "ドイツ",
                    "price": "¥1,895"
                },
                {
                    "url": "https://amzn.to/40rTkAi",
                    "image": "https://m.media-amazon.com/images/I/71KKtgmUZ4L._AC_SY879_.jpg",
                    "productName": "コノスル ビシクレタ ゲヴュルツトラミネール ヴァラエタル",
                    "region": "チリ",
                    "price": "¥1,186"
                },
                {
                    "url": "https://amzn.to/40vnanm",
                    "image": "https://m.media-amazon.com/images/I/41tsgP4mknL._AC_SY879_.jpg",
                    "productName": "ゲヴュルツトラミネール レゼルヴ パルティキュリエール 2022 ポール ブルケール",
                    "region": "フランス",
                    "price": "¥2,250"
                },
                {
                    "url": "https://amzn.to/40qhVFv",
                    "image": "https://m.media-amazon.com/images/I/51pVXTR2+nL._AC_SY879_.jpg",
                    "productName": "フライシャー ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥2,650"
                }
    ]
  },
  "2-2-0-0-1-1-1-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gP5Tez",
                    "image": "https://m.media-amazon.com/images/I/411B71PIZfL._AC_SY879_.jpg",
                    "productName": "ヒューゲル ゲヴェルツトラミネール クラシック 2022",
                    "region": "フランス",
                    "price": "¥3,600"
                },
                {
                    "url": "https://amzn.to/4fTisV1",
                    "image": "https://m.media-amazon.com/images/I/61sF1SFXStL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール テュルクハイム",
                    "region": "フランス",
                    "price": "¥4,632"
                },
                {
                    "url": "https://amzn.to/3E1m35X",
                    "image": "https://m.media-amazon.com/images/I/51LFNLvfl5L._AC_SX679_.jpg",
                    "productName": "レオン・ベイエ ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥4,095"
                },
                {
                    "url": "https://amzn.to/3DPyB0x",
                    "image": "https://m.media-amazon.com/images/I/411DAS8EekL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥3,529"
                },
                {
                    "url": "https://amzn.to/4acyFDk",
                    "image": "https://m.media-amazon.com/images/I/51F1LU8t8FL._AC_.jpg",
                    "productName": "ゲヴュルツトラミネール・コレクション カーヴ・ド・リボヴィレ 2020",
                    "region": "フランス",
                    "price": "¥4,510"
                }
    ]
  },
  "2-3-0-0-1-1-1-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4294cUK",
                    "image": "https://m.media-amazon.com/images/I/41bTrEG0DpL._AC_SX679_.jpg",
                    "productName": "トラミン ゲヴュルツトラミネール 2022",
                    "region": "イタリア",
                    "price": "¥5,254"
                },
                {
                    "url": "https://amzn.to/3PvHHSw",
                    "image": "https://m.media-amazon.com/images/I/61k1-sSy6sL._AC_SY879_.jpg",
                    "productName": "ドメーヌ マルセル ダイス ゲヴュルツトラミネール 2022",
                    "region": "フランス",
                    "price": "¥6,728"
                },
                {
                    "url": "https://amzn.to/3PvjoUC",
                    "image": "https://m.media-amazon.com/images/I/41f45At7YrL._AC_SY879_.jpg",
                    "productName": "ヌスバウマー ゲヴュルツトラミネール 2022 トラミン",
                    "region": "イタリア",
                    "price": "¥7,040"
                },
                {
                    "url": "https://amzn.to/3Puxq98",
                    "image": "https://m.media-amazon.com/images/I/51NT67b-foL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・キュヴェ・デ・セニュール・ド・リボピエール",
                    "region": "フランス",
                    "price": "¥8,162"
                },
                {
                    "url": "https://amzn.to/4hdTDnY",
                    "image": "https://m.media-amazon.com/images/I/61DpgLfH9JL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒトゲヴュルツトラミネール ランゲン・ド・タン クロ・サンテュルバン グラン・クリュ",
                    "region": "フランス",
                    "price": "¥9,718"
                }
    ]
  },
  "2-4-0-0-1-1-1-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j8FKJf",
                    "image": "https://m.media-amazon.com/images/I/61mDZE7+NJL._AC_SX679_.jpg",
                    "productName": "1981年 シャルル・ヴァンツ",
                    "region": "フランス",
                    "price": "¥14,228"
                },
                {
                    "url": "https://amzn.to/40fpLk8",
                    "image": "https://m.media-amazon.com/images/I/31RjPykZHIL._AC_.jpg",
                    "productName": "クリスチャン・ビネール ゲヴュルツトラミネール グラン・クリュ ケフェルコフ ヴァンダンジュ・タルディヴ 2018",
                    "region": "フランス",
                    "price": "¥10,274"
                },
                {
                    "url": "https://amzn.to/3C7MpTs",
                    "image": "https://m.media-amazon.com/images/I/31RP9LseBRL._AC_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール ランゲン・ド・タン・クロ・サンテュルバン GC 2013",
                    "region": "フランス",
                    "price": "¥11,454"
                },
                {
                    "url": "https://amzn.to/425ZbfR",
                    "image": "https://m.media-amazon.com/images/I/41xeQREqHlL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・セレクション・ ド・グラン・ノーブル 2008",
                    "region": "フランス",
                    "price": "¥23,100"
                },
                {
                    "url": "https://amzn.to/4gVonuc",
                    "image": "https://m.media-amazon.com/images/I/41QKIK1Z2ML._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール アルテンブルク 2021",
                    "region": "フランス",
                    "price": "¥11,000"
                }
    ]
  },
  "2-5-0-0-1-1-1-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fVzzFy",
                    "image": "https://m.media-amazon.com/images/I/41YhkqNITWL._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール グランクリュ フュルステンテュム セレクシヨン ド グランノーブル 2017",
                    "region": "フランス",
                    "price": "¥34,000"
                }
    ]
  },
  "2-1-0-0-1-1-2-1": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42az6w1",
                    "image": "https://m.media-amazon.com/images/I/61gnSJ0wuXL._AC_SX679_.jpg",
                    "productName": "ペーターメルテス リースリング シュペトレーゼ",
                    "region": "ドイツ",
                    "price": "¥2,256"
                },
                {
                    "url": "https://amzn.to/4jdURkB",
                    "image": "https://m.media-amazon.com/images/I/51Wa6rdICZL._AC_SY879_.jpg",
                    "productName": "ブリー ホワイト リースリング",
                    "region": "ドイツ",
                    "price": "¥1,800"
                },
                {
                    "url": "https://amzn.to/4fWLcMq",
                    "image": "https://m.media-amazon.com/images/I/51sFRS0RQRL._AC_SY879_.jpg",
                    "productName": "コノスル シングルヴィンヤード リースリング",
                    "region": "チリ",
                    "price": "¥2,625"
                },
                {
                    "url": "https://amzn.to/4afsJcX",
                    "image": "https://m.media-amazon.com/images/I/61KvRLeICiL._AC_SY879_.jpg",
                    "productName": "トリンバック リースリング",
                    "region": "フランス",
                    "price": "¥2,585"
                },
                {
                    "url": "https://amzn.to/4gQLPbF",
                    "image": "https://m.media-amazon.com/images/I/41eFarvDIvL._AC_SY879_.jpg",
                    "productName": "ラインガウ・リースリング・クーベーアー・トロッケン",
                    "region": "ドイツ",
                    "price": "¥2,892"
                }
    ]
  },
  "2-2-0-0-1-1-2-1": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4af924Y",
                    "image": "https://m.media-amazon.com/images/I/618WosBGfQL._AC_SX679_.jpg",
                    "productName": "ヒューゲル・エ・フィス リースリング クラシック",
                    "region": "フランス",
                    "price": "¥3,863"
                },
                {
                    "url": "https://amzn.to/4avqd2x",
                    "image": "https://m.media-amazon.com/images/I/61CcBJt+goL._AC_SX679_.jpg",
                    "productName": "クンツ・バー リースリング キュヴェ・トラディション",
                    "region": "フランス",
                    "price": "¥4,324"
                },
                {
                    "url": "https://amzn.to/3DOrEg1",
                    "image": "https://m.media-amazon.com/images/I/41Si2cfX57L._AC_SY879_.jpg",
                    "productName": "ピーターレーマン マスターズ ウィガン リースリング",
                    "region": "オーストラリア",
                    "price": "¥4,595"
                },
                {
                    "url": "https://amzn.to/3WfmKz2",
                    "image": "https://m.media-amazon.com/images/I/4172nqkcUfL._AC_SX679_.jpg",
                    "productName": "シーグラス リースリング モントレー・カウンティ",
                    "region": "アメリカ",
                    "price": "¥3,030"
                },
                {
                    "url": "https://amzn.to/42c8XNs",
                    "image": "https://m.media-amazon.com/images/I/31dGZmEeAIL._AC_.jpg",
                    "productName": "2022 アルザス リースリング プレスティージュ AOP メイブルム & フィス",
                    "region": "フランス",
                    "price": "¥3,674"
                }
    ]
  },
  "2-3-0-0-1-1-2-1": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PxTqjx",
                    "image": "https://m.media-amazon.com/images/I/71t88AErc8L._AC_SX679_.jpg",
                    "productName": "ジェイコブス・クリーク スタインガーテン バロッサ リースリング",
                    "region": "オーストラリア",
                    "price": "¥5,032"
                },
                {
                    "url": "https://amzn.to/4hdUVPQ",
                    "image": "https://m.media-amazon.com/images/I/51NIFnbL+tL._AC_SX679_.jpg",
                    "productName": "アルザス リースリング",
                    "region": "フランス",
                    "price": "¥5,910"
                },
                {
                    "url": "https://amzn.to/3We8XbU",
                    "image": "https://m.media-amazon.com/images/I/51nJTFeIp9L._AC_SX679_.jpg",
                    "productName": "レオン・ベイエ キュヴェ ・デ・コント・デギスハイム リースリング",
                    "region": "フランス",
                    "price": "¥8,260"
                },
                {
                    "url": "https://amzn.to/425NF44",
                    "image": "https://m.media-amazon.com/images/I/21sC5g+50DL._AC_.jpg",
                    "productName": "チャンユーリースリング （張裕雷司令）",
                    "region": "中国",
                    "price": "¥7,150"
                },
                {
                    "url": "https://amzn.to/4agCiYV",
                    "image": "https://m.media-amazon.com/images/I/51gRWTY5BeL._AC_SY879_.jpg",
                    "productName": "フォン・ウィニング フォルスター ウンゲホイヤー リースリング トロッケン グローセス・ゲヴェックス",
                    "region": "ドイツ",
                    "price": "¥8,870"
                }
    ]
  },
  "2-4-0-0-1-1-2-1": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DRoqZe",
                    "image": "https://m.media-amazon.com/images/I/51KXLYsy+6L._AC_SY879_.jpg",
                    "productName": "リースリング ツェルティンガー ゾンネンウーア アウスレーゼ トロッケン 2020 マーカス モリトール",
                    "region": "ドイツ",
                    "price": "¥15,160"
                },
                {
                    "url": "https://amzn.to/4fX29qj",
                    "image": "https://m.media-amazon.com/images/I/41K1+fqulUL._AC_SY879_.jpg",
                    "productName": "カール・ローウェン リースリング・1896 [2022]",
                    "region": "ドイツ",
                    "price": "¥10,320"
                },
                {
                    "url": "https://amzn.to/3C5uwVe",
                    "image": "https://m.media-amazon.com/images/I/51LJVzUSxxL._AC_SY879_.jpg",
                    "productName": "ゲオルク ブロイヤー ベルク シュロスベルク リースリング 2020",
                    "region": "ドイツ",
                    "price": "¥23,190"
                },
                {
                    "url": "https://amzn.to/40bPppR",
                    "image": "https://m.media-amazon.com/images/I/41W-ODXwkGL._AC_SY879_.jpg",
                    "productName": "プラーガー リースリング アハライテン アウスレーゼ2021",
                    "region": "オーストリア",
                    "price": "¥10,440"
                },
                {
                    "url": "https://amzn.to/42emYKv",
                    "image": "https://m.media-amazon.com/images/I/41FHGzABvTL._AC_SY879_.jpg",
                    "productName": "デーンホーフ フェルゼンベルク フェルゼンテュルムヒェン リースリング グローセス ゲヴェックス 2022",
                    "region": "ドイツ",
                    "price": "¥13,700"
                }
    ]
  },
  "2-5-0-0-1-1-2-1": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3C4QrMi",
                    "image": "https://m.media-amazon.com/images/I/51mTVTjSLOL._AC_SY879_.jpg",
                    "productName": "ゲオルク ブロイヤー ベルク シュロスベルク リースリング 2014",
                    "region": "ドイツ",
                    "price": "¥33,680"
                },
                {
                    "url": "https://amzn.to/3Wbjq8c",
                    "image": "https://m.media-amazon.com/images/I/61O5qJ+3vqL._AC_SX679_.jpg",
                    "productName": "ロバート ヴァイル キートリッヒャー モンテ ヴァカーノ リースリング トロッケン （木箱入り）2020",
                    "region": "ドイツ",
                    "price": "¥35,640"
                },
                {
                    "url": "https://amzn.to/40sUEme",
                    "image": "https://m.media-amazon.com/images/I/41FoK9JkvkL._AC_SY879_.jpg",
                    "productName": "ゲオルク ブロイヤー ベルク シュロスベルク リースリング 2022",
                    "region": "ドイツ",
                    "price": "¥35,700"
                },
                {
                    "url": "https://amzn.to/3Wh0J2S",
                    "image": "https://m.media-amazon.com/images/I/41mkG8+X1TL._AC_.jpg",
                    "productName": "グランポレール 長野古里ぶどう園 リースリング貴腐",
                    "region": "日本",
                    "price": "¥34,460"
                },
                {
                    "url": "https://amzn.to/3PvkJL8",
                    "image": "https://m.media-amazon.com/images/I/71NW+KUylBL._AC_SY879_.jpg",
                    "productName": "登美の丘 登美ノーブルドール 2009",
                    "region": "日本",
                    "price": "¥55,000"
                }
    ]
  },
  "2-1-0-0-1-1-2-2": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42az6w1",
                    "image": "https://m.media-amazon.com/images/I/61gnSJ0wuXL._AC_SX679_.jpg",
                    "productName": "ペーターメルテス リースリング シュペトレーゼ",
                    "region": "ドイツ",
                    "price": "¥2,256"
                },
                {
                    "url": "https://amzn.to/4jdURkB",
                    "image": "https://m.media-amazon.com/images/I/51Wa6rdICZL._AC_SY879_.jpg",
                    "productName": "ブリー ホワイト リースリング",
                    "region": "ドイツ",
                    "price": "¥1,800"
                },
                {
                    "url": "https://amzn.to/4fWLcMq",
                    "image": "https://m.media-amazon.com/images/I/51sFRS0RQRL._AC_SY879_.jpg",
                    "productName": "コノスル シングルヴィンヤード リースリング",
                    "region": "チリ",
                    "price": "¥2,625"
                },
                {
                    "url": "https://amzn.to/4afsJcX",
                    "image": "https://m.media-amazon.com/images/I/61KvRLeICiL._AC_SY879_.jpg",
                    "productName": "トリンバック リースリング",
                    "region": "フランス",
                    "price": "¥2,585"
                },
                {
                    "url": "https://amzn.to/4gQLPbF",
                    "image": "https://m.media-amazon.com/images/I/41eFarvDIvL._AC_SY879_.jpg",
                    "productName": "ラインガウ・リースリング・クーベーアー・トロッケン",
                    "region": "ドイツ",
                    "price": "¥2,892"
                }
    ]
  },
  "2-2-0-0-1-1-2-2": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4af924Y",
                    "image": "https://m.media-amazon.com/images/I/618WosBGfQL._AC_SX679_.jpg",
                    "productName": "ヒューゲル・エ・フィス リースリング クラシック",
                    "region": "フランス",
                    "price": "¥3,863"
                },
                {
                    "url": "https://amzn.to/4avqd2x",
                    "image": "https://m.media-amazon.com/images/I/61CcBJt+goL._AC_SX679_.jpg",
                    "productName": "クンツ・バー リースリング キュヴェ・トラディション",
                    "region": "フランス",
                    "price": "¥4,324"
                },
                {
                    "url": "https://amzn.to/3DOrEg1",
                    "image": "https://m.media-amazon.com/images/I/41Si2cfX57L._AC_SY879_.jpg",
                    "productName": "ピーターレーマン マスターズ ウィガン リースリング",
                    "region": "オーストラリア",
                    "price": "¥4,595"
                },
                {
                    "url": "https://amzn.to/3WfmKz2",
                    "image": "https://m.media-amazon.com/images/I/4172nqkcUfL._AC_SX679_.jpg",
                    "productName": "シーグラス リースリング モントレー・カウンティ",
                    "region": "アメリカ",
                    "price": "¥3,030"
                },
                {
                    "url": "https://amzn.to/42c8XNs",
                    "image": "https://m.media-amazon.com/images/I/31dGZmEeAIL._AC_.jpg",
                    "productName": "2022 アルザス リースリング プレスティージュ AOP メイブルム & フィス",
                    "region": "フランス",
                    "price": "¥3,674"
                }
    ]
  },
  "2-3-0-0-1-1-2-2": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PxTqjx",
                    "image": "https://m.media-amazon.com/images/I/71t88AErc8L._AC_SX679_.jpg",
                    "productName": "ジェイコブス・クリーク スタインガーテン バロッサ リースリング",
                    "region": "オーストラリア",
                    "price": "¥5,032"
                },
                {
                    "url": "https://amzn.to/4hdUVPQ",
                    "image": "https://m.media-amazon.com/images/I/51NIFnbL+tL._AC_SX679_.jpg",
                    "productName": "アルザス リースリング",
                    "region": "フランス",
                    "price": "¥5,910"
                },
                {
                    "url": "https://amzn.to/3We8XbU",
                    "image": "https://m.media-amazon.com/images/I/51nJTFeIp9L._AC_SX679_.jpg",
                    "productName": "レオン・ベイエ キュヴェ ・デ・コント・デギスハイム リースリング",
                    "region": "フランス",
                    "price": "¥8,260"
                },
                {
                    "url": "https://amzn.to/425NF44",
                    "image": "https://m.media-amazon.com/images/I/21sC5g+50DL._AC_.jpg",
                    "productName": "チャンユーリースリング （張裕雷司令）",
                    "region": "中国",
                    "price": "¥7,150"
                },
                {
                    "url": "https://amzn.to/4agCiYV",
                    "image": "https://m.media-amazon.com/images/I/51gRWTY5BeL._AC_SY879_.jpg",
                    "productName": "フォン・ウィニング フォルスター ウンゲホイヤー リースリング トロッケン グローセス・ゲヴェックス",
                    "region": "ドイツ",
                    "price": "¥8,870"
                }
    ]
  },
  "2-4-0-0-1-1-2-2": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DRoqZe",
                    "image": "https://m.media-amazon.com/images/I/51KXLYsy+6L._AC_SY879_.jpg",
                    "productName": "リースリング ツェルティンガー ゾンネンウーア アウスレーゼ トロッケン 2020 マーカス モリトール",
                    "region": "ドイツ",
                    "price": "¥15,160"
                },
                {
                    "url": "https://amzn.to/4fX29qj",
                    "image": "https://m.media-amazon.com/images/I/41K1+fqulUL._AC_SY879_.jpg",
                    "productName": "カール・ローウェン リースリング・1896 [2022]",
                    "region": "ドイツ",
                    "price": "¥10,320"
                },
                {
                    "url": "https://amzn.to/3C5uwVe",
                    "image": "https://m.media-amazon.com/images/I/51LJVzUSxxL._AC_SY879_.jpg",
                    "productName": "ゲオルク ブロイヤー ベルク シュロスベルク リースリング 2020",
                    "region": "ドイツ",
                    "price": "¥23,190"
                },
                {
                    "url": "https://amzn.to/40bPppR",
                    "image": "https://m.media-amazon.com/images/I/41W-ODXwkGL._AC_SY879_.jpg",
                    "productName": "プラーガー リースリング アハライテン アウスレーゼ2021",
                    "region": "オーストリア",
                    "price": "¥10,440"
                },
                {
                    "url": "https://amzn.to/42emYKv",
                    "image": "https://m.media-amazon.com/images/I/41FHGzABvTL._AC_SY879_.jpg",
                    "productName": "デーンホーフ フェルゼンベルク フェルゼンテュルムヒェン リースリング グローセス ゲヴェックス 2022",
                    "region": "ドイツ",
                    "price": "¥13,700"
                }
    ]
  },
  "2-5-0-0-1-1-2-2": {
    "title": "リースリングワイン",
    "description": "リースリングワインは、フルーティーで花のような香りが特徴で、リンゴや桃、シトラスのニュアンスが感じられます。味わいは爽やかで、しっかりとした酸味と優れたバランスのある甘さが魅力的です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3C4QrMi",
                    "image": "https://m.media-amazon.com/images/I/51mTVTjSLOL._AC_SY879_.jpg",
                    "productName": "ゲオルク ブロイヤー ベルク シュロスベルク リースリング 2014",
                    "region": "ドイツ",
                    "price": "¥33,680"
                },
                {
                    "url": "https://amzn.to/3Wbjq8c",
                    "image": "https://m.media-amazon.com/images/I/61O5qJ+3vqL._AC_SX679_.jpg",
                    "productName": "ロバート ヴァイル キートリッヒャー モンテ ヴァカーノ リースリング トロッケン （木箱入り）2020",
                    "region": "ドイツ",
                    "price": "¥35,640"
                },
                {
                    "url": "https://amzn.to/40sUEme",
                    "image": "https://m.media-amazon.com/images/I/41FoK9JkvkL._AC_SY879_.jpg",
                    "productName": "ゲオルク ブロイヤー ベルク シュロスベルク リースリング 2022",
                    "region": "ドイツ",
                    "price": "¥35,700"
                },
                {
                    "url": "https://amzn.to/3Wh0J2S",
                    "image": "https://m.media-amazon.com/images/I/41mkG8+X1TL._AC_.jpg",
                    "productName": "グランポレール 長野古里ぶどう園 リースリング貴腐",
                    "region": "日本",
                    "price": "¥34,460"
                },
                {
                    "url": "https://amzn.to/3PvkJL8",
                    "image": "https://m.media-amazon.com/images/I/71NW+KUylBL._AC_SY879_.jpg",
                    "productName": "登美の丘 登美ノーブルドール 2009",
                    "region": "日本",
                    "price": "¥55,000"
                }
    ]
   },
  "2-1-0-0-1-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4acA9NU",
                    "image": "https://m.media-amazon.com/images/I/51df4mDbi6L._AC_SY879_.jpg",
                    "productName": "ネブリナ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,316"
                },
                {
                    "url": "https://amzn.to/3DNYq0X",
                    "image": "https://m.media-amazon.com/images/I/71yKNp5n4yL._AC_SY879_.jpg",
                    "productName": "ボーグル ヴィンヤーズ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,860"
                },
                {
                    "url": "https://amzn.to/4h8VN81",
                    "image": "https://m.media-amazon.com/images/I/616xIooMlSL._AC_SY879_.jpg",
                    "productName": "ロバート・モンダヴィ ウッドブリッジ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥1,431"
                },
                {
                    "url": "https://amzn.to/4gP7wZJ",
                    "image": "https://m.media-amazon.com/images/I/51FV0Mq+bEL._AC_SY879_.jpg",
                    "productName": "ヴィニャ・カサブランカ セフィーロ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,423"
                },
                {
                    "url": "https://amzn.to/4gPkDu4",
                    "image": "https://m.media-amazon.com/images/I/51KP5-I4jVL._AC_SY879_.jpg",
                    "productName": "ウェンテ モーニング・フォグ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,990"
                }
    ]
  },
  "2-2-0-0-1-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DTi63u",
                    "image": "https://m.media-amazon.com/images/I/417S4WyGMDL._AC_SY879_.jpg",
                    "productName": "プロボノ シャルドネ サンタ バーバラ カウンティ 2018",
                    "region": "アメリカ",
                    "price": "¥4,890"
                },
                {
                    "url": "https://amzn.to/4gOHJB7",
                    "image": "https://m.media-amazon.com/images/I/41KeLaQk7AL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・シャルドネ",
                    "region": "チリ",
                    "price": "¥4,913"
                },
                {
                    "url": "https://amzn.to/4hdjUCy",
                    "image": "https://m.media-amazon.com/images/I/51ckqxrWPxL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ナパ・ヴァレーシャルドネ",
                    "region": "アメリカ",
                    "price": "¥3,791"
                },
                {
                    "url": "https://amzn.to/4jeUNB4",
                    "image": "https://m.media-amazon.com/images/I/610oqpYmhrL._AC_SX679_.jpg",
                    "productName": "ソノマ・コースト シャルドネ",
                    "region": "アメリカ",
                    "price": "¥4,598"
                },
                {
                    "url": "https://amzn.to/3WccHuw",
                    "image": "https://m.media-amazon.com/images/I/41HlyZI+idL._AC_SY879_.jpg",
                    "productName": "ブレッド ＆ バター シャルドネ 2022",
                    "region": "アメリカ",
                    "price": "¥3,070"
                }
    ]
  },
  "2-3-0-0-1-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jcEpRB",
                    "image": "https://m.media-amazon.com/images/I/51TTHZeVetL._AC_SX679_.jpg",
                    "productName": "ベリンジャー プライベート・リザーブ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,055"
                },
                {
                    "url": "https://amzn.to/3DT7iSX",
                    "image": "https://m.media-amazon.com/images/I/510Ca4t6vdL._AC_SX679_.jpg",
                    "productName": "ニュートン アンフィルタード シャルドネ",
                    "region": "アメリカ",
                    "price": "¥6,153"
                },
                {
                    "url": "https://amzn.to/4aftMJV",
                    "image": "https://m.media-amazon.com/images/I/41TxZPSzrhL._AC_SY879_.jpg",
                    "productName": "ザ ヒルト エステート シャルドネ サンタ リタ ヒルズ 2020",
                    "region": "アメリカ",
                    "price": "¥5,840"
                },
                {
                    "url": "https://amzn.to/3Wgovw1",
                    "image": "https://m.media-amazon.com/images/I/71vepULPWdL._AC_SY879_.jpg",
                    "productName": "ガーギッチ・ヒルズ シャルドネ エステート・グロウン",
                    "region": "アメリカ",
                    "price": "¥8,374"
                },
                {
                    "url": "https://amzn.to/40cY4bx",
                    "image": "https://m.media-amazon.com/images/I/31qkpzeR7tL._AC_.jpg",
                    "productName": "ロバート モンダヴィ ワイナリー シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,123"
                }
    ]
  },
  "2-4-0-0-1-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Pz61TA",
                    "image": "https://m.media-amazon.com/images/I/41i4vb1V2wL._AC_SY879_.jpg",
                    "productName": "ハドソン ワインズ シャルドネ ナパ ヴァレー カーネロス 2021",
                    "region": "アメリカ",
                    "price": "¥11,680"
                },
                {
                    "url": "https://amzn.to/3WeLDLl",
                    "image": "https://m.media-amazon.com/images/I/41FemUnjv4L._AC_SY879_.jpg",
                    "productName": "パルメイヤー ジェイソン シャルドネ ナパヴァレー 2022",
                    "region": "アメリカ",
                    "price": "¥11,710"
                },
                {
                    "url": "https://amzn.to/4h9hNzR",
                    "image": "https://m.media-amazon.com/images/I/6151GMT8ROL._AC_SX679_.jpg",
                    "productName": "リッジ シャルドネ ローンオーク 2023",
                    "region": "アメリカ",
                    "price": "¥13,850"
                },
                {
                    "url": "https://amzn.to/3PxN43G",
                    "image": "https://m.media-amazon.com/images/I/41xVKtSxxGL._AC_.jpg",
                    "productName": "デ ウェホフ バトラー シャルドネ",
                    "region": "南アフリカ",
                    "price": "¥10,591"
                },
                {
                    "url": "https://amzn.to/4h8T2nk",
                    "image": "https://m.media-amazon.com/images/I/51jQjk8-MhL._AC_SX679_.jpg",
                    "productName": "ファー ニエンテ シャルドネ ナパ ヴァレー 2022年",
                    "region": "アメリカ",
                    "price": "¥15,840"
                }
    ]
  },
  "2-5-0-0-1-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42tFzmb",
                    "image": "https://m.media-amazon.com/images/I/51zWzXAypTL._AC_SX679_.jpg",
                    "productName": "コングスガード シャルドネ ナパ ヴァレー 2021年",
                    "region": "アメリカ",
                    "price": "¥41,800"
                },
                {
                    "url": "https://amzn.to/40ubscD",
                    "image": "https://m.media-amazon.com/images/I/41NYG0va1GL._AC_SY879_.jpg",
                    "productName": "オーベール シャルドネ パウダー ハウス エステート2022",
                    "region": "アメリカ",
                    "price": "¥42,660"
                },
                {
                    "url": "https://amzn.to/3DT802z",
                    "image": "https://m.media-amazon.com/images/I/51bYqgfqGML._AC_.jpg",
                    "productName": "2019 ハイド ヴィンヤード シャルドネ キスラー",
                    "region": "アメリカ",
                    "price": "¥43,480"
                },
                {
                    "url": "https://amzn.to/4j9zh0P",
                    "image": "https://m.media-amazon.com/images/I/413q56NEQ-L._AC_SY879_.jpg",
                    "productName": "ピーター マイケル マ ベル フィーユ 2018",
                    "region": "アメリカ",
                    "price": "¥42,430"
                },
                {
                    "url": "https://amzn.to/3BRTaZC",
                    "image": "https://m.media-amazon.com/images/I/41P2H5Vm5+L._AC_SX679_.jpg",
                    "productName": "ザキン シャルドネ",
                    "region": "アメリカ",
                    "price": "¥55,000"
                }
    ]
  },
  "2-1-0-0-1-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4acA9NU",
                    "image": "https://m.media-amazon.com/images/I/51df4mDbi6L._AC_SY879_.jpg",
                    "productName": "ネブリナ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,316"
                },
                {
                    "url": "https://amzn.to/3DNYq0X",
                    "image": "https://m.media-amazon.com/images/I/71yKNp5n4yL._AC_SY879_.jpg",
                    "productName": "ボーグル ヴィンヤーズ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,860"
                },
                {
                    "url": "https://amzn.to/4h8VN81",
                    "image": "https://m.media-amazon.com/images/I/616xIooMlSL._AC_SY879_.jpg",
                    "productName": "ロバート・モンダヴィ ウッドブリッジ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥1,431"
                },
                {
                    "url": "https://amzn.to/4gP7wZJ",
                    "image": "https://m.media-amazon.com/images/I/51FV0Mq+bEL._AC_SY879_.jpg",
                    "productName": "ヴィニャ・カサブランカ セフィーロ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,423"
                },
                {
                    "url": "https://amzn.to/4gPkDu4",
                    "image": "https://m.media-amazon.com/images/I/51KP5-I4jVL._AC_SY879_.jpg",
                    "productName": "ウェンテ モーニング・フォグ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,990"
                }
    ]
  },
  "2-2-0-0-1-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DTi63u",
                    "image": "https://m.media-amazon.com/images/I/417S4WyGMDL._AC_SY879_.jpg",
                    "productName": "プロボノ シャルドネ サンタ バーバラ カウンティ 2018",
                    "region": "アメリカ",
                    "price": "¥4,890"
                },
                {
                    "url": "https://amzn.to/4gOHJB7",
                    "image": "https://m.media-amazon.com/images/I/41KeLaQk7AL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・シャルドネ",
                    "region": "チリ",
                    "price": "¥4,913"
                },
                {
                    "url": "https://amzn.to/4hdjUCy",
                    "image": "https://m.media-amazon.com/images/I/51ckqxrWPxL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ナパ・ヴァレーシャルドネ",
                    "region": "アメリカ",
                    "price": "¥3,791"
                },
                {
                    "url": "https://amzn.to/4jeUNB4",
                    "image": "https://m.media-amazon.com/images/I/610oqpYmhrL._AC_SX679_.jpg",
                    "productName": "ソノマ・コースト シャルドネ",
                    "region": "アメリカ",
                    "price": "¥4,598"
                },
                {
                    "url": "https://amzn.to/3WccHuw",
                    "image": "https://m.media-amazon.com/images/I/41HlyZI+idL._AC_SY879_.jpg",
                    "productName": "ブレッド ＆ バター シャルドネ 2022",
                    "region": "アメリカ",
                    "price": "¥3,070"
                }
    ]
  },
  "2-3-0-0-1-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jcEpRB",
                    "image": "https://m.media-amazon.com/images/I/51TTHZeVetL._AC_SX679_.jpg",
                    "productName": "ベリンジャー プライベート・リザーブ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,055"
                },
                {
                    "url": "https://amzn.to/3DT7iSX",
                    "image": "https://m.media-amazon.com/images/I/510Ca4t6vdL._AC_SX679_.jpg",
                    "productName": "ニュートン アンフィルタード シャルドネ",
                    "region": "アメリカ",
                    "price": "¥6,153"
                },
                {
                    "url": "https://amzn.to/4aftMJV",
                    "image": "https://m.media-amazon.com/images/I/41TxZPSzrhL._AC_SY879_.jpg",
                    "productName": "ザ ヒルト エステート シャルドネ サンタ リタ ヒルズ 2020",
                    "region": "アメリカ",
                    "price": "¥5,840"
                },
                {
                    "url": "https://amzn.to/3Wgovw1",
                    "image": "https://m.media-amazon.com/images/I/71vepULPWdL._AC_SY879_.jpg",
                    "productName": "ガーギッチ・ヒルズ シャルドネ エステート・グロウン",
                    "region": "アメリカ",
                    "price": "¥8,374"
                },
                {
                    "url": "https://amzn.to/40cY4bx",
                    "image": "https://m.media-amazon.com/images/I/31qkpzeR7tL._AC_.jpg",
                    "productName": "ロバート モンダヴィ ワイナリー シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,123"
                }
    ]
  },
  "2-4-0-0-1-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Pz61TA",
                    "image": "https://m.media-amazon.com/images/I/41i4vb1V2wL._AC_SY879_.jpg",
                    "productName": "ハドソン ワインズ シャルドネ ナパ ヴァレー カーネロス 2021",
                    "region": "アメリカ",
                    "price": "¥11,680"
                },
                {
                    "url": "https://amzn.to/3WeLDLl",
                    "image": "https://m.media-amazon.com/images/I/41FemUnjv4L._AC_SY879_.jpg",
                    "productName": "パルメイヤー ジェイソン シャルドネ ナパヴァレー 2022",
                    "region": "アメリカ",
                    "price": "¥11,710"
                },
                {
                    "url": "https://amzn.to/4h9hNzR",
                    "image": "https://m.media-amazon.com/images/I/6151GMT8ROL._AC_SX679_.jpg",
                    "productName": "リッジ シャルドネ ローンオーク 2023",
                    "region": "アメリカ",
                    "price": "¥13,850"
                },
                {
                    "url": "https://amzn.to/3PxN43G",
                    "image": "https://m.media-amazon.com/images/I/41xVKtSxxGL._AC_.jpg",
                    "productName": "デ ウェホフ バトラー シャルドネ",
                    "region": "南アフリカ",
                    "price": "¥10,591"
                },
                {
                    "url": "https://amzn.to/4h8T2nk",
                    "image": "https://m.media-amazon.com/images/I/51jQjk8-MhL._AC_SX679_.jpg",
                    "productName": "ファー ニエンテ シャルドネ ナパ ヴァレー 2022年",
                    "region": "アメリカ",
                    "price": "¥15,840"
                }
    ]
  },
  "2-5-0-0-1-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42tFzmb",
                    "image": "https://m.media-amazon.com/images/I/51zWzXAypTL._AC_SX679_.jpg",
                    "productName": "コングスガード シャルドネ ナパ ヴァレー 2021年",
                    "region": "アメリカ",
                    "price": "¥41,800"
                },
                {
                    "url": "https://amzn.to/40ubscD",
                    "image": "https://m.media-amazon.com/images/I/41NYG0va1GL._AC_SY879_.jpg",
                    "productName": "オーベール シャルドネ パウダー ハウス エステート2022",
                    "region": "アメリカ",
                    "price": "¥42,660"
                },
                {
                    "url": "https://amzn.to/3DT802z",
                    "image": "https://m.media-amazon.com/images/I/51bYqgfqGML._AC_.jpg",
                    "productName": "2019 ハイド ヴィンヤード シャルドネ キスラー",
                    "region": "アメリカ",
                    "price": "¥43,480"
                },
                {
                    "url": "https://amzn.to/4j9zh0P",
                    "image": "https://m.media-amazon.com/images/I/413q56NEQ-L._AC_SY879_.jpg",
                    "productName": "ピーター マイケル マ ベル フィーユ 2018",
                    "region": "アメリカ",
                    "price": "¥42,430"
                },
                {
                    "url": "https://amzn.to/3BRTaZC",
                    "image": "https://m.media-amazon.com/images/I/41P2H5Vm5+L._AC_SX679_.jpg",
                    "productName": "ザキン シャルドネ",
                    "region": "アメリカ",
                    "price": "¥55,000"
                }
    ]
   },
  "2-1-0-0-1-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PSQY7z",
                    "image": "https://m.media-amazon.com/images/I/51GaC0PjpaL._AC_SY879_.jpg",
                    "productName": "ラブレ・ロワ シャルドネ・ヴァン・ド・フランス",
                    "region": "フランス",
                    "price": "¥1,392"
                },
                {
                    "url": "https://amzn.to/42cmO6h",
                    "image": "https://m.media-amazon.com/images/I/3170Ou+BsuL._AC_.jpg",
                    "productName": "シャブリ アントワーヌ・シャトレ [2023]",
                    "region": "フランス",
                    "price": "¥2,750"
                },
                {
                    "url": "https://amzn.to/3DSaQ7W",
                    "image": "https://m.media-amazon.com/images/I/61fUId2nlaL._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ラフォーレ ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥2,680"
                },
                {
                    "url": "https://amzn.to/4h6ipXv",
                    "image": "https://m.media-amazon.com/images/I/415yn+27IoL._AC_SY879_.jpg",
                    "productName": "シャブリ2023フィリップ ブシャール",
                    "region": "フランス",
                    "price": "¥2,550"
                },
                {
                    "url": "https://amzn.to/409YUG9",
                    "image": "https://m.media-amazon.com/images/I/31ZHPqL+wNL._AC_.jpg",
                    "productName": "クロズリー・デ・アリズィエ ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥2,619"
                }
    ]
  },
  "2-2-0-0-1-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40yIjNK",
                    "image": "https://m.media-amazon.com/images/I/61WLunurFcL._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥4,400"
                },
                {
                    "url": "https://amzn.to/40rR1gy",
                    "image": "https://m.media-amazon.com/images/I/61GBQMFCt6L._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET ルペ ショーレマコンヴィラージュ",
                    "region": "フランス",
                    "price": "¥3,740"
                },
                {
                    "url": "https://amzn.to/4fTUoBd",
                    "image": "https://m.media-amazon.com/images/I/61drgvhHTEL._AC_SY879_.jpg",
                    "productName": "アルベール・ビショー ブルゴーニュ シャルドネ ヴィエイユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥4,492"
                },
                {
                    "url": "https://amzn.to/4jdoylN",
                    "image": "https://m.media-amazon.com/images/I/31aX3xE03dL._AC_.jpg",
                    "productName": "マリー・ルイス・パリゾ ブルゴーニュ ブラン シャルドネ",
                    "region": "フランス",
                    "price": "¥4,293"
                },
                {
                    "url": "https://amzn.to/3C6eDxO",
                    "image": "https://m.media-amazon.com/images/I/71dHvLBCD5L._AC_SY879_.jpg",
                    "productName": "ブシャール ペール エ フィス ブルゴーニュ シャルドネ“ラ ヴィニェ",
                    "region": "フランス",
                    "price": "¥4,035"
                }
    ]
  },
  "2-3-0-0-1-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4ha4q2n",
                    "image": "https://m.media-amazon.com/images/I/61+Qfo6Bq1L._AC_SY879_.jpg",
                    "productName": "ルー デュモン レア セレクション シャブリ グラン クリュ ヴァルミュール 2003",
                    "region": "フランス",
                    "price": "¥9,428"
                },
                {
                    "url": "https://amzn.to/42ahr7G",
                    "image": "https://m.media-amazon.com/images/I/61sbvrBnecL._AC_SY879_.jpg",
                    "productName": "ドゥメセ サントネ プルミエ クリュ ボールペール ブラン 2002",
                    "region": "フランス",
                    "price": "¥5,228"
                },
                {
                    "url": "https://amzn.to/4fVAEx2",
                    "image": "https://m.media-amazon.com/images/I/51iDksmSxIL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・ロン・デパキ シャブリ・プルミエ・クリュ レ・ヴォークパン",
                    "region": "フランス",
                    "price": "¥8,414"
                },
                {
                    "url": "https://amzn.to/42aihkQ",
                    "image": "https://m.media-amazon.com/images/I/61mDj0M5WIL._AC_SY879_.jpg",
                    "productName": "2022 シャブリ レ ドゥ リヴ オリヴィエ ルフレーヴ",
                    "region": "フランス",
                    "price": "¥5,478"
                },
                {
                    "url": "https://amzn.to/4jaTdAl",
                    "image": "https://m.media-amazon.com/images/I/41E+jgfmVAL._AC_SY879_.jpg",
                    "productName": "ブルゴーニュ コート ドール ブラン2022ドメーヌ トロ ボー",
                    "region": "フランス",
                    "price": "¥7,080"
                }
    ]
  },
  "2-4-0-0-1-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40wboco",
                    "image": "https://m.media-amazon.com/images/I/41PoukydmTL._AC_.jpg",
                    "productName": "2018 ブルゴーニュ ブラン シャルドネ エティエンヌ ソゼ",
                    "region": "フランス",
                    "price": "¥16,500"
                },
                {
                    "url": "https://amzn.to/40tghmE",
                    "image": "https://m.media-amazon.com/images/I/51rRXnmumUL._AC_SX679_.jpg",
                    "productName": "2021 ブルゴーニュ ブラン ルフレーヴ エ アソシエ",
                    "region": "フランス",
                    "price": "¥11,770"
                },
                {
                    "url": "https://amzn.to/40uWRhf",
                    "image": "https://m.media-amazon.com/images/I/51NT1sjq67L._AC_.jpg",
                    "productName": "ムルソー シャルム プルミエ クリュ レ シャルム デス 2020",
                    "region": "フランス",
                    "price": "¥17,100"
                },
                {
                    "url": "https://amzn.to/3DScqqo",
                    "image": "https://m.media-amazon.com/images/I/51AiuW09V7L._AC_.jpg",
                    "productName": "2018 ブルゴーニュ シャルドネ ブラン ラモネ ジャン クロード",
                    "region": "フランス",
                    "price": "¥19,250"
                },
                {
                    "url": "https://amzn.to/4fVgKT7",
                    "image": "https://m.media-amazon.com/images/I/51SkJ4ure5L._AC_SX679_.jpg",
                    "productName": "2021 シャサーニュ モンラッシェ プルミエ クリュ ヴィド ブルス マルク コラン",
                    "region": "フランス",
                    "price": "¥24,200"
                }
    ]
  },
  "2-5-0-0-1-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hbaxDz",
                    "image": "https://m.media-amazon.com/images/I/41dK3qcTkRL._AC_.jpg",
                    "productName": "2017 シャサーニュ モンラッシェ ル コンシ デュ シャン ユベール ラミー",
                    "region": "フランス",
                    "price": "¥35,860"
                },
                {
                    "url": "https://amzn.to/40gySko",
                    "image": "https://m.media-amazon.com/images/I/41pK1Ak8jAL._AC_.jpg",
                    "productName": "ラブレ・ロワ コルトン・シャルルマーニュ",
                    "region": "フランス",
                    "price": "¥31,700"
                },
                {
                    "url": "https://amzn.to/3Cf9Hqn",
                    "image": "https://m.media-amazon.com/images/I/512B-Z+SvgL._AC_.jpg",
                    "productName": "コルトン シャルルマーニュ グラン クリュ 2020",
                    "region": "フランス",
                    "price": "¥33,430"
                },
                {
                    "url": "https://amzn.to/4abqp6R",
                    "image": "https://m.media-amazon.com/images/I/51TWoImRUsL._AC_.jpg",
                    "productName": "2017 ピュリニー モンラッシェ プルミエ クリュ レ ピュセル ドメーヌ ルフレーヴ",
                    "region": "フランス",
                    "price": "¥121,000"
                },
                {
                    "url": "https://amzn.to/42aiPXW",
                    "image": "https://m.media-amazon.com/images/I/51ItH4V0tEL._AC_.jpg",
                    "productName": "2018 シャブリ プルミエ クリュ ラ フォレ ヴァンサン ドーヴィサ",
                    "region": "フランス",
                    "price": "¥39,600"
                }
    ]
  },
  "2-1-0-0-1-2-2-2": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PSQY7z",
                    "image": "https://m.media-amazon.com/images/I/51GaC0PjpaL._AC_SY879_.jpg",
                    "productName": "ラブレ・ロワ シャルドネ・ヴァン・ド・フランス",
                    "region": "フランス",
                    "price": "¥1,392"
                },
                {
                    "url": "https://amzn.to/42cmO6h",
                    "image": "https://m.media-amazon.com/images/I/3170Ou+BsuL._AC_.jpg",
                    "productName": "シャブリ アントワーヌ・シャトレ [2023]",
                    "region": "フランス",
                    "price": "¥2,750"
                },
                {
                    "url": "https://amzn.to/3DSaQ7W",
                    "image": "https://m.media-amazon.com/images/I/61fUId2nlaL._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ラフォーレ ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥2,680"
                },
                {
                    "url": "https://amzn.to/4h6ipXv",
                    "image": "https://m.media-amazon.com/images/I/415yn+27IoL._AC_SY879_.jpg",
                    "productName": "シャブリ2023フィリップ ブシャール",
                    "region": "フランス",
                    "price": "¥2,550"
                },
                {
                    "url": "https://amzn.to/409YUG9",
                    "image": "https://m.media-amazon.com/images/I/31ZHPqL+wNL._AC_.jpg",
                    "productName": "クロズリー・デ・アリズィエ ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥2,619"
                }
    ]
  },
  "2-2-0-0-1-2-2-2": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40yIjNK",
                    "image": "https://m.media-amazon.com/images/I/61WLunurFcL._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥4,400"
                },
                {
                    "url": "https://amzn.to/40rR1gy",
                    "image": "https://m.media-amazon.com/images/I/61GBQMFCt6L._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET ルペ ショーレマコンヴィラージュ",
                    "region": "フランス",
                    "price": "¥3,740"
                },
                {
                    "url": "https://amzn.to/4fTUoBd",
                    "image": "https://m.media-amazon.com/images/I/61drgvhHTEL._AC_SY879_.jpg",
                    "productName": "アルベール・ビショー ブルゴーニュ シャルドネ ヴィエイユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥4,492"
                },
                {
                    "url": "https://amzn.to/4jdoylN",
                    "image": "https://m.media-amazon.com/images/I/31aX3xE03dL._AC_.jpg",
                    "productName": "マリー・ルイス・パリゾ ブルゴーニュ ブラン シャルドネ",
                    "region": "フランス",
                    "price": "¥4,293"
                },
                {
                    "url": "https://amzn.to/3C6eDxO",
                    "image": "https://m.media-amazon.com/images/I/71dHvLBCD5L._AC_SY879_.jpg",
                    "productName": "ブシャール ペール エ フィス ブルゴーニュ シャルドネ“ラ ヴィニェ",
                    "region": "フランス",
                    "price": "¥4,035"
                }
    ]
  },
  "2-3-0-0-1-2-2-2": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4ha4q2n",
                    "image": "https://m.media-amazon.com/images/I/61+Qfo6Bq1L._AC_SY879_.jpg",
                    "productName": "ルー デュモン レア セレクション シャブリ グラン クリュ ヴァルミュール 2003",
                    "region": "フランス",
                    "price": "¥9,428"
                },
                {
                    "url": "https://amzn.to/42ahr7G",
                    "image": "https://m.media-amazon.com/images/I/61sbvrBnecL._AC_SY879_.jpg",
                    "productName": "ドゥメセ サントネ プルミエ クリュ ボールペール ブラン 2002",
                    "region": "フランス",
                    "price": "¥5,228"
                },
                {
                    "url": "https://amzn.to/4fVAEx2",
                    "image": "https://m.media-amazon.com/images/I/51iDksmSxIL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・ロン・デパキ シャブリ・プルミエ・クリュ レ・ヴォークパン",
                    "region": "フランス",
                    "price": "¥8,414"
                },
                {
                    "url": "https://amzn.to/42aihkQ",
                    "image": "https://m.media-amazon.com/images/I/61mDj0M5WIL._AC_SY879_.jpg",
                    "productName": "2022 シャブリ レ ドゥ リヴ オリヴィエ ルフレーヴ",
                    "region": "フランス",
                    "price": "¥5,478"
                },
                {
                    "url": "https://amzn.to/4jaTdAl",
                    "image": "https://m.media-amazon.com/images/I/41E+jgfmVAL._AC_SY879_.jpg",
                    "productName": "ブルゴーニュ コート ドール ブラン2022ドメーヌ トロ ボー",
                    "region": "フランス",
                    "price": "¥7,080"
                }
    ]
  },
  "2-4-0-0-1-2-2-2": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40wboco",
                    "image": "https://m.media-amazon.com/images/I/41PoukydmTL._AC_.jpg",
                    "productName": "2018 ブルゴーニュ ブラン シャルドネ エティエンヌ ソゼ",
                    "region": "フランス",
                    "price": "¥16,500"
                },
                {
                    "url": "https://amzn.to/40tghmE",
                    "image": "https://m.media-amazon.com/images/I/51rRXnmumUL._AC_SX679_.jpg",
                    "productName": "2021 ブルゴーニュ ブラン ルフレーヴ エ アソシエ",
                    "region": "フランス",
                    "price": "¥11,770"
                },
                {
                    "url": "https://amzn.to/40uWRhf",
                    "image": "https://m.media-amazon.com/images/I/51NT1sjq67L._AC_.jpg",
                    "productName": "ムルソー シャルム プルミエ クリュ レ シャルム デス 2020",
                    "region": "フランス",
                    "price": "¥17,100"
                },
                {
                    "url": "https://amzn.to/3DScqqo",
                    "image": "https://m.media-amazon.com/images/I/51AiuW09V7L._AC_.jpg",
                    "productName": "2018 ブルゴーニュ シャルドネ ブラン ラモネ ジャン クロード",
                    "region": "フランス",
                    "price": "¥19,250"
                },
                {
                    "url": "https://amzn.to/4fVgKT7",
                    "image": "https://m.media-amazon.com/images/I/51SkJ4ure5L._AC_SX679_.jpg",
                    "productName": "2021 シャサーニュ モンラッシェ プルミエ クリュ ヴィド ブルス マルク コラン",
                    "region": "フランス",
                    "price": "¥24,200"
                }
    ]
  },
  "2-5-0-0-1-2-2-2": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hbaxDz",
                    "image": "https://m.media-amazon.com/images/I/41dK3qcTkRL._AC_.jpg",
                    "productName": "2017 シャサーニュ モンラッシェ ル コンシ デュ シャン ユベール ラミー",
                    "region": "フランス",
                    "price": "¥35,860"
                },
                {
                    "url": "https://amzn.to/40gySko",
                    "image": "https://m.media-amazon.com/images/I/41pK1Ak8jAL._AC_.jpg",
                    "productName": "ラブレ・ロワ コルトン・シャルルマーニュ",
                    "region": "フランス",
                    "price": "¥31,700"
                },
                {
                    "url": "https://amzn.to/3Cf9Hqn",
                    "image": "https://m.media-amazon.com/images/I/512B-Z+SvgL._AC_.jpg",
                    "productName": "コルトン シャルルマーニュ グラン クリュ 2020",
                    "region": "フランス",
                    "price": "¥33,430"
                },
                {
                    "url": "https://amzn.to/4abqp6R",
                    "image": "https://m.media-amazon.com/images/I/51TWoImRUsL._AC_.jpg",
                    "productName": "2017 ピュリニー モンラッシェ プルミエ クリュ レ ピュセル ドメーヌ ルフレーヴ",
                    "region": "フランス",
                    "price": "¥121,000"
                },
                {
                    "url": "https://amzn.to/42aiPXW",
                    "image": "https://m.media-amazon.com/images/I/51ItH4V0tEL._AC_.jpg",
                    "productName": "2018 シャブリ プルミエ クリュ ラ フォレ ヴァンサン ドーヴィサ",
                    "region": "フランス",
                    "price": "¥39,600"
                }
    ]
  },
  "2-1-0-0-2-1-1-1": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jhvjmX",
                    "image": "https://m.media-amazon.com/images/I/71Jj3RJ20rL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション・ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥1,967"
                },
                {
                    "url": "https://amzn.to/40r4qW5",
                    "image": "https://m.media-amazon.com/images/I/41i8zQlbz-S._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥2,302"
                },
                {
                    "url": "https://amzn.to/3C6ZZ9C",
                    "image": "https://m.media-amazon.com/images/I/51el+nPz1nL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・タリケ ソーヴィニヨン",
                    "region": "フランス",
                    "price": "¥1,863"
                },
                {
                    "url": "https://amzn.to/4ajb8ku",
                    "image": "https://m.media-amazon.com/images/I/51aU9TGi7aL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・タリケ プルミエール・グリヴェ",
                    "region": "フランス",
                    "price": "¥2,649"
                },
                {
                    "url": "https://amzn.to/40cFAIi",
                    "image": "https://m.media-amazon.com/images/I/61pZVmyspkS._AC_SY879_.jpg",
                    "productName": "ジュルズ・テイラー ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥2,625"
                }
    ]
  },
  "2-2-0-0-2-1-1-1": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3WkbP79",
                    "image": "https://m.media-amazon.com/images/I/61n0k5uhWVL._AC_SY879_.jpg",
                    "productName": "グレイワッキ ソーヴィニヨン ブラン 2024",
                    "region": "ニュージーランド",
                    "price": "¥3,928"
                },
                {
                    "url": "https://amzn.to/4jhvUoH",
                    "image": "https://m.media-amazon.com/images/I/21edc-1GvUL._AC_.jpg",
                    "productName": "銀の雫グッド・ダルジャンソーヴィニヨン・ブラン2023",
                    "region": "チリ",
                    "price": "¥3,630"
                },
                {
                    "url": "https://amzn.to/3CiCQ3Y",
                    "image": "https://m.media-amazon.com/images/I/41K1KHHFDzL._AC_SY879_.jpg",
                    "productName": "サンセール レ バロンヌ ブラン 2022 or 2023 アンリ ブルジョワ",
                    "region": "フランス",
                    "price": "¥4,410"
                },
                {
                    "url": "https://amzn.to/40cxmjd",
                    "image": "https://m.media-amazon.com/images/I/51oXOmkU80L._AC_SX679_.jpg",
                    "productName": "クラウディーベイ ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥4,544"
                },
                {
                    "url": "https://amzn.to/4fWoILy",
                    "image": "https://m.media-amazon.com/images/I/41NUqvPuEkL._AC_SY879_.jpg",
                    "productName": "キムラ セラーズ マールボロ ソーヴィニヨン ブラン 2024",
                    "region": "ニュージーランド",
                    "price": "¥3,850"
                }
    ]
  },
  "2-3-0-0-2-1-1-1": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fXAeGu",
                    "image": "https://m.media-amazon.com/images/I/61HxmeyfrNL._AC_SY879_.jpg",
                    "productName": "アルフォンス・メロ サンセール ラ・ムシェール",
                    "region": "フランス",
                    "price": "¥6,861"
                },
                {
                    "url": "https://amzn.to/3DT7vFB",
                    "image": "https://m.media-amazon.com/images/I/61qC7NwSEXL._AC_SY879_.jpg",
                    "productName": "クロード リフォー サンセール レ ブコー",
                    "region": "フランス",
                    "price": "¥7,228"
                },
                {
                    "url": "https://amzn.to/4gQVO0T",
                    "image": "https://m.media-amazon.com/images/I/612+72GI2fL._AC_SX679_.jpg",
                    "productName": "シャトー・タルボ・カイユ・ブラン [2021]",
                    "region": "フランス",
                    "price": "¥6,284"
                },
                {
                    "url": "https://amzn.to/4gQwhF4",
                    "image": "https://m.media-amazon.com/images/I/51ZNUrcfuoL._AC_SX679_.jpg",
                    "productName": "プリズナー アンシャックルド ソーヴィニヨンブラン",
                    "region": "アメリカ",
                    "price": "¥5,550"
                },
                {
                    "url": "https://amzn.to/3Pw81vE",
                    "image": "https://m.media-amazon.com/images/I/51tDPBnROPL._AC_SX679_.jpg",
                    "productName": "タンバー ベイ ヴィンヤーズ リジーズ ヴィンヤード ソーヴィニヨン ブラン",
                    "region": "アメリカ",
                    "price": "¥8,800"
                }
    ]
  },
  "2-4-0-0-2-1-1-1": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jgxVkL",
                    "image": "https://m.media-amazon.com/images/I/412WiGMUFSL._AC_SY879_.jpg",
                    "productName": "メルカ ソーヴィニヨン ブラン ラ メケラ ヴィンヤード 2020",
                    "region": "アメリカ",
                    "price": "¥26,050"
                },
                {
                    "url": "https://amzn.to/3CegvEI",
                    "image": "https://m.media-amazon.com/images/I/51yk+eJ+V0L._AC_SY879_.jpg",
                    "productName": "ラッド ソーヴィニヨン ブラン マウント ヴィーダー エステート",
                    "region": "アメリカ",
                    "price": "¥25,000"
                },
                {
                    "url": "https://amzn.to/3WhemPx",
                    "image": "https://m.media-amazon.com/images/I/51WDCLz3UPL._AC_SY879_.jpg",
                    "productName": "あさつゆ 2023 ケンゾー エステート",
                    "region": "アメリカ",
                    "price": "¥18,800"
                },
                {
                    "url": "https://amzn.to/3C7o9AK",
                    "image": "https://m.media-amazon.com/images/I/61EeuLCGMyL._AC_SY879_.jpg",
                    "productName": "2020 プイィ フュメ バロン ド エル ド ラドゥセット",
                    "region": "フランス",
                    "price": "¥14,960"
                },
                {
                    "url": "https://amzn.to/4fQoO7r",
                    "image": "https://m.media-amazon.com/images/I/41D9-eeIdML._AC_SX679_.jpg",
                    "productName": "ブッチェラ・ソーヴィニヨン・ブラン・2021年",
                    "region": "アメリカ",
                    "price": "¥23,980"
                }
    ]
  },
  "2-5-0-0-2-1-1-1": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j9u3SB",
                    "image": "https://m.media-amazon.com/images/I/51DVDyqeFjL._AC_SY879_.jpg",
                    "productName": "プイィ フュメ シレックス ディディエ ダグノー 2019",
                    "region": "フランス",
                    "price": "¥44,340"
                },
                {
                    "url": "https://amzn.to/3DVFP36",
                    "image": "https://m.media-amazon.com/images/I/41GPc5XFX-L._AC_.jpg",
                    "productName": "ディディエ・ダグノー/ヴァンテリアン [2021]",
                    "region": "フランス",
                    "price": "¥34,320"
                },
                {
                    "url": "https://amzn.to/3DVh6f9",
                    "image": "https://m.media-amazon.com/images/I/41X3TsV4snL._AC_SY879_.jpg",
                    "productName": "ル プティ シュヴァル ブラン[2019]",
                    "region": "フランス",
                    "price": "¥30,500"
                },
                {
                    "url": "https://amzn.to/4h9GrAi",
                    "image": "https://m.media-amazon.com/images/I/41o9EMmIrKL._AC_SY879_.jpg",
                    "productName": "パヴィヨン ブラン スゴン ヴァン2022シャトー マルゴー",
                    "region": "フランス",
                    "price": "¥39,500"
                },
                {
                    "url": "https://amzn.to/4fXRrjl",
                    "image": "https://m.media-amazon.com/images/I/61jUgNbC5qL._AC_SY879_.jpg",
                    "productName": "2005年 パヴィヨン ブラン デュ ＣＨマルゴー",
                    "region": "フランス",
                    "price": "¥49,500"
                }
    ]
  },
  "2-1-0-0-2-1-1-2": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jhvjmX",
                    "image": "https://m.media-amazon.com/images/I/71Jj3RJ20rL._AC_SY879_.jpg",
                    "productName": "SILENI (シレーニ) セラー・セレクション・ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥1,967"
                },
                {
                    "url": "https://amzn.to/40r4qW5",
                    "image": "https://m.media-amazon.com/images/I/41i8zQlbz-S._AC_SX679_.jpg",
                    "productName": "Oyster Bay(オイスターベイ) マールボロ ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥2,302"
                },
                {
                    "url": "https://amzn.to/3C6ZZ9C",
                    "image": "https://m.media-amazon.com/images/I/51el+nPz1nL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・タリケ ソーヴィニヨン",
                    "region": "フランス",
                    "price": "¥1,863"
                },
                {
                    "url": "https://amzn.to/4ajb8ku",
                    "image": "https://m.media-amazon.com/images/I/51aU9TGi7aL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・デュ・タリケ プルミエール・グリヴェ",
                    "region": "フランス",
                    "price": "¥2,649"
                },
                {
                    "url": "https://amzn.to/40cFAIi",
                    "image": "https://m.media-amazon.com/images/I/61pZVmyspkS._AC_SY879_.jpg",
                    "productName": "ジュルズ・テイラー ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥2,625"
                }
    ]
  },
  "2-2-0-0-2-1-1-2": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3WkbP79",
                    "image": "https://m.media-amazon.com/images/I/61n0k5uhWVL._AC_SY879_.jpg",
                    "productName": "グレイワッキ ソーヴィニヨン ブラン 2024",
                    "region": "ニュージーランド",
                    "price": "¥3,928"
                },
                {
                    "url": "https://amzn.to/4jhvUoH",
                    "image": "https://m.media-amazon.com/images/I/21edc-1GvUL._AC_.jpg",
                    "productName": "銀の雫グッド・ダルジャンソーヴィニヨン・ブラン2023",
                    "region": "チリ",
                    "price": "¥3,630"
                },
                {
                    "url": "https://amzn.to/3CiCQ3Y",
                    "image": "https://m.media-amazon.com/images/I/41K1KHHFDzL._AC_SY879_.jpg",
                    "productName": "サンセール レ バロンヌ ブラン 2022 or 2023 アンリ ブルジョワ",
                    "region": "フランス",
                    "price": "¥4,410"
                },
                {
                    "url": "https://amzn.to/40cxmjd",
                    "image": "https://m.media-amazon.com/images/I/51oXOmkU80L._AC_SX679_.jpg",
                    "productName": "クラウディーベイ ソーヴィニヨン・ブラン",
                    "region": "ニュージーランド",
                    "price": "¥4,544"
                },
                {
                    "url": "https://amzn.to/4fWoILy",
                    "image": "https://m.media-amazon.com/images/I/41NUqvPuEkL._AC_SY879_.jpg",
                    "productName": "キムラ セラーズ マールボロ ソーヴィニヨン ブラン 2024",
                    "region": "ニュージーランド",
                    "price": "¥3,850"
                }
    ]
  },
  "2-3-0-0-2-1-1-2": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fXAeGu",
                    "image": "https://m.media-amazon.com/images/I/61HxmeyfrNL._AC_SY879_.jpg",
                    "productName": "アルフォンス・メロ サンセール ラ・ムシェール",
                    "region": "フランス",
                    "price": "¥6,861"
                },
                {
                    "url": "https://amzn.to/3DT7vFB",
                    "image": "https://m.media-amazon.com/images/I/61qC7NwSEXL._AC_SY879_.jpg",
                    "productName": "クロード リフォー サンセール レ ブコー",
                    "region": "フランス",
                    "price": "¥7,228"
                },
                {
                    "url": "https://amzn.to/4gQVO0T",
                    "image": "https://m.media-amazon.com/images/I/612+72GI2fL._AC_SX679_.jpg",
                    "productName": "シャトー・タルボ・カイユ・ブラン [2021]",
                    "region": "フランス",
                    "price": "¥6,284"
                },
                {
                    "url": "https://amzn.to/4gQwhF4",
                    "image": "https://m.media-amazon.com/images/I/51ZNUrcfuoL._AC_SX679_.jpg",
                    "productName": "プリズナー アンシャックルド ソーヴィニヨンブラン",
                    "region": "アメリカ",
                    "price": "¥5,550"
                },
                {
                    "url": "https://amzn.to/3Pw81vE",
                    "image": "https://m.media-amazon.com/images/I/51tDPBnROPL._AC_SX679_.jpg",
                    "productName": "タンバー ベイ ヴィンヤーズ リジーズ ヴィンヤード ソーヴィニヨン ブラン",
                    "region": "アメリカ",
                    "price": "¥8,800"
                }
    ]
  },
  "2-4-0-0-2-1-1-2": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jgxVkL",
                    "image": "https://m.media-amazon.com/images/I/412WiGMUFSL._AC_SY879_.jpg",
                    "productName": "メルカ ソーヴィニヨン ブラン ラ メケラ ヴィンヤード 2020",
                    "region": "アメリカ",
                    "price": "¥26,050"
                },
                {
                    "url": "https://amzn.to/3CegvEI",
                    "image": "https://m.media-amazon.com/images/I/51yk+eJ+V0L._AC_SY879_.jpg",
                    "productName": "ラッド ソーヴィニヨン ブラン マウント ヴィーダー エステート",
                    "region": "アメリカ",
                    "price": "¥25,000"
                },
                {
                    "url": "https://amzn.to/3WhemPx",
                    "image": "https://m.media-amazon.com/images/I/51WDCLz3UPL._AC_SY879_.jpg",
                    "productName": "あさつゆ 2023 ケンゾー エステート",
                    "region": "アメリカ",
                    "price": "¥18,800"
                },
                {
                    "url": "https://amzn.to/3C7o9AK",
                    "image": "https://m.media-amazon.com/images/I/61EeuLCGMyL._AC_SY879_.jpg",
                    "productName": "2020 プイィ フュメ バロン ド エル ド ラドゥセット",
                    "region": "フランス",
                    "price": "¥14,960"
                },
                {
                    "url": "https://amzn.to/4fQoO7r",
                    "image": "https://m.media-amazon.com/images/I/41D9-eeIdML._AC_SX679_.jpg",
                    "productName": "ブッチェラ・ソーヴィニヨン・ブラン・2021年",
                    "region": "アメリカ",
                    "price": "¥23,980"
                }
    ]
  },
  "2-5-0-0-2-1-1-2": {
    "title": "ソーヴィニヨン・ブランワイン",
    "description": "ソーヴィニヨン・ブランワインは、爽やかな香りが特徴で、グレープフルーツやライム、ハーブのニュアンスが感じられます。味わいは軽やかで、ピリッとした酸味とフレッシュな果実感がバランスよく広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j9u3SB",
                    "image": "https://m.media-amazon.com/images/I/51DVDyqeFjL._AC_SY879_.jpg",
                    "productName": "プイィ フュメ シレックス ディディエ ダグノー 2019",
                    "region": "フランス",
                    "price": "¥44,340"
                },
                {
                    "url": "https://amzn.to/3DVFP36",
                    "image": "https://m.media-amazon.com/images/I/41GPc5XFX-L._AC_.jpg",
                    "productName": "ディディエ・ダグノー/ヴァンテリアン [2021]",
                    "region": "フランス",
                    "price": "¥34,320"
                },
                {
                    "url": "https://amzn.to/3DVh6f9",
                    "image": "https://m.media-amazon.com/images/I/41X3TsV4snL._AC_SY879_.jpg",
                    "productName": "ル プティ シュヴァル ブラン[2019]",
                    "region": "フランス",
                    "price": "¥30,500"
                },
                {
                    "url": "https://amzn.to/4h9GrAi",
                    "image": "https://m.media-amazon.com/images/I/41o9EMmIrKL._AC_SY879_.jpg",
                    "productName": "パヴィヨン ブラン スゴン ヴァン2022シャトー マルゴー",
                    "region": "フランス",
                    "price": "¥39,500"
                },
                {
                    "url": "https://amzn.to/4fXRrjl",
                    "image": "https://m.media-amazon.com/images/I/61jUgNbC5qL._AC_SY879_.jpg",
                    "productName": "2005年 パヴィヨン ブラン デュ ＣＨマルゴー",
                    "region": "フランス",
                    "price": "¥49,500"
                }
    ]
  },
  "2-1-0-0-2-1-2-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gNHwy4",
                    "image": "https://m.media-amazon.com/images/I/51Sk68As11L._AC_SY879_.jpg",
                    "productName": "ジョセフ ドラーテン ゲヴェルツトラミネール カビネット 2022",
                    "region": "ドイツ",
                    "price": "¥1,350"
                },
                {
                    "url": "https://amzn.to/3WfQ2gK",
                    "image": "https://m.media-amazon.com/images/I/51o9wJBTqML._AC_SY879_.jpg",
                    "productName": "ガウメンシュピール ゲヴュルツトラミネール",
                    "region": "ドイツ",
                    "price": "¥1,895"
                },
                {
                    "url": "https://amzn.to/40rTkAi",
                    "image": "https://m.media-amazon.com/images/I/71KKtgmUZ4L._AC_SY879_.jpg",
                    "productName": "コノスル ビシクレタ ゲヴュルツトラミネール ヴァラエタル",
                    "region": "チリ",
                    "price": "¥1,186"
                },
                {
                    "url": "https://amzn.to/40vnanm",
                    "image": "https://m.media-amazon.com/images/I/41tsgP4mknL._AC_SY879_.jpg",
                    "productName": "ゲヴュルツトラミネール レゼルヴ パルティキュリエール 2022 ポール ブルケール",
                    "region": "フランス",
                    "price": "¥2,250"
                },
                {
                    "url": "https://amzn.to/40qhVFv",
                    "image": "https://m.media-amazon.com/images/I/51pVXTR2+nL._AC_SY879_.jpg",
                    "productName": "フライシャー ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥2,650"
                }
    ]
  },
  "2-2-0-0-2-1-2-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gP5Tez",
                    "image": "https://m.media-amazon.com/images/I/411B71PIZfL._AC_SY879_.jpg",
                    "productName": "ヒューゲル ゲヴェルツトラミネール クラシック 2022",
                    "region": "フランス",
                    "price": "¥3,600"
                },
                {
                    "url": "https://amzn.to/4fTisV1",
                    "image": "https://m.media-amazon.com/images/I/61sF1SFXStL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール テュルクハイム",
                    "region": "フランス",
                    "price": "¥4,632"
                },
                {
                    "url": "https://amzn.to/3E1m35X",
                    "image": "https://m.media-amazon.com/images/I/51LFNLvfl5L._AC_SX679_.jpg",
                    "productName": "レオン・ベイエ ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥4,095"
                },
                {
                    "url": "https://amzn.to/3DPyB0x",
                    "image": "https://m.media-amazon.com/images/I/411DAS8EekL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥3,529"
                },
                {
                    "url": "https://amzn.to/4acyFDk",
                    "image": "https://m.media-amazon.com/images/I/51F1LU8t8FL._AC_.jpg",
                    "productName": "ゲヴュルツトラミネール・コレクション カーヴ・ド・リボヴィレ 2020",
                    "region": "フランス",
                    "price": "¥4,510"
                }
    ]
  },
  "2-3-0-0-2-1-2-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4294cUK",
                    "image": "https://m.media-amazon.com/images/I/41bTrEG0DpL._AC_SX679_.jpg",
                    "productName": "トラミン ゲヴュルツトラミネール 2022",
                    "region": "イタリア",
                    "price": "¥5,254"
                },
                {
                    "url": "https://amzn.to/3PvHHSw",
                    "image": "https://m.media-amazon.com/images/I/61k1-sSy6sL._AC_SY879_.jpg",
                    "productName": "ドメーヌ マルセル ダイス ゲヴュルツトラミネール 2022",
                    "region": "フランス",
                    "price": "¥6,728"
                },
                {
                    "url": "https://amzn.to/3PvjoUC",
                    "image": "https://m.media-amazon.com/images/I/41f45At7YrL._AC_SY879_.jpg",
                    "productName": "ヌスバウマー ゲヴュルツトラミネール 2022 トラミン",
                    "region": "イタリア",
                    "price": "¥7,040"
                },
                {
                    "url": "https://amzn.to/3Puxq98",
                    "image": "https://m.media-amazon.com/images/I/51NT67b-foL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・キュヴェ・デ・セニュール・ド・リボピエール",
                    "region": "フランス",
                    "price": "¥8,162"
                },
                {
                    "url": "https://amzn.to/4hdTDnY",
                    "image": "https://m.media-amazon.com/images/I/61DpgLfH9JL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒトゲヴュルツトラミネール ランゲン・ド・タン クロ・サンテュルバン グラン・クリュ",
                    "region": "フランス",
                    "price": "¥9,718"
                }
    ]
  },
  "2-4-0-0-2-1-2-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j8FKJf",
                    "image": "https://m.media-amazon.com/images/I/61mDZE7+NJL._AC_SX679_.jpg",
                    "productName": "1981年 シャルル・ヴァンツ",
                    "region": "フランス",
                    "price": "¥14,228"
                },
                {
                    "url": "https://amzn.to/40fpLk8",
                    "image": "https://m.media-amazon.com/images/I/31RjPykZHIL._AC_.jpg",
                    "productName": "クリスチャン・ビネール ゲヴュルツトラミネール グラン・クリュ ケフェルコフ ヴァンダンジュ・タルディヴ 2018",
                    "region": "フランス",
                    "price": "¥10,274"
                },
                {
                    "url": "https://amzn.to/3C7MpTs",
                    "image": "https://m.media-amazon.com/images/I/31RP9LseBRL._AC_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール ランゲン・ド・タン・クロ・サンテュルバン GC 2013",
                    "region": "フランス",
                    "price": "¥11,454"
                },
                {
                    "url": "https://amzn.to/425ZbfR",
                    "image": "https://m.media-amazon.com/images/I/41xeQREqHlL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・セレクション・ ド・グラン・ノーブル 2008",
                    "region": "フランス",
                    "price": "¥23,100"
                },
                {
                    "url": "https://amzn.to/4gVonuc",
                    "image": "https://m.media-amazon.com/images/I/41QKIK1Z2ML._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール アルテンブルク 2021",
                    "region": "フランス",
                    "price": "¥11,000"
                }
    ]
  },
  "2-5-0-0-2-1-2-1": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fVzzFy",
                    "image": "https://m.media-amazon.com/images/I/41YhkqNITWL._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール グランクリュ フュルステンテュム セレクシヨン ド グランノーブル 2017",
                    "region": "フランス",
                    "price": "¥34,000"
                }
    ]
  },
  "2-1-0-0-2-1-2-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gNHwy4",
                    "image": "https://m.media-amazon.com/images/I/51Sk68As11L._AC_SY879_.jpg",
                    "productName": "ジョセフ ドラーテン ゲヴェルツトラミネール カビネット 2022",
                    "region": "ドイツ",
                    "price": "¥1,350"
                },
                {
                    "url": "https://amzn.to/3WfQ2gK",
                    "image": "https://m.media-amazon.com/images/I/51o9wJBTqML._AC_SY879_.jpg",
                    "productName": "ガウメンシュピール ゲヴュルツトラミネール",
                    "region": "ドイツ",
                    "price": "¥1,895"
                },
                {
                    "url": "https://amzn.to/40rTkAi",
                    "image": "https://m.media-amazon.com/images/I/71KKtgmUZ4L._AC_SY879_.jpg",
                    "productName": "コノスル ビシクレタ ゲヴュルツトラミネール ヴァラエタル",
                    "region": "チリ",
                    "price": "¥1,186"
                },
                {
                    "url": "https://amzn.to/40vnanm",
                    "image": "https://m.media-amazon.com/images/I/41tsgP4mknL._AC_SY879_.jpg",
                    "productName": "ゲヴュルツトラミネール レゼルヴ パルティキュリエール 2022 ポール ブルケール",
                    "region": "フランス",
                    "price": "¥2,250"
                },
                {
                    "url": "https://amzn.to/40qhVFv",
                    "image": "https://m.media-amazon.com/images/I/51pVXTR2+nL._AC_SY879_.jpg",
                    "productName": "フライシャー ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥2,650"
                }
    ]
  },
  "2-2-0-0-2-1-2-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4gP5Tez",
                    "image": "https://m.media-amazon.com/images/I/411B71PIZfL._AC_SY879_.jpg",
                    "productName": "ヒューゲル ゲヴェルツトラミネール クラシック 2022",
                    "region": "フランス",
                    "price": "¥3,600"
                },
                {
                    "url": "https://amzn.to/4fTisV1",
                    "image": "https://m.media-amazon.com/images/I/61sF1SFXStL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール テュルクハイム",
                    "region": "フランス",
                    "price": "¥4,632"
                },
                {
                    "url": "https://amzn.to/3E1m35X",
                    "image": "https://m.media-amazon.com/images/I/51LFNLvfl5L._AC_SX679_.jpg",
                    "productName": "レオン・ベイエ ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥4,095"
                },
                {
                    "url": "https://amzn.to/3DPyB0x",
                    "image": "https://m.media-amazon.com/images/I/411DAS8EekL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール",
                    "region": "フランス",
                    "price": "¥3,529"
                },
                {
                    "url": "https://amzn.to/4acyFDk",
                    "image": "https://m.media-amazon.com/images/I/51F1LU8t8FL._AC_.jpg",
                    "productName": "ゲヴュルツトラミネール・コレクション カーヴ・ド・リボヴィレ 2020",
                    "region": "フランス",
                    "price": "¥4,510"
                }
    ]
  },
  "2-3-0-0-2-1-2-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4294cUK",
                    "image": "https://m.media-amazon.com/images/I/41bTrEG0DpL._AC_SX679_.jpg",
                    "productName": "トラミン ゲヴュルツトラミネール 2022",
                    "region": "イタリア",
                    "price": "¥5,254"
                },
                {
                    "url": "https://amzn.to/3PvHHSw",
                    "image": "https://m.media-amazon.com/images/I/61k1-sSy6sL._AC_SY879_.jpg",
                    "productName": "ドメーヌ マルセル ダイス ゲヴュルツトラミネール 2022",
                    "region": "フランス",
                    "price": "¥6,728"
                },
                {
                    "url": "https://amzn.to/3PvjoUC",
                    "image": "https://m.media-amazon.com/images/I/41f45At7YrL._AC_SY879_.jpg",
                    "productName": "ヌスバウマー ゲヴュルツトラミネール 2022 トラミン",
                    "region": "イタリア",
                    "price": "¥7,040"
                },
                {
                    "url": "https://amzn.to/3Puxq98",
                    "image": "https://m.media-amazon.com/images/I/51NT67b-foL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・キュヴェ・デ・セニュール・ド・リボピエール",
                    "region": "フランス",
                    "price": "¥8,162"
                },
                {
                    "url": "https://amzn.to/4hdTDnY",
                    "image": "https://m.media-amazon.com/images/I/61DpgLfH9JL._AC_SX679_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒトゲヴュルツトラミネール ランゲン・ド・タン クロ・サンテュルバン グラン・クリュ",
                    "region": "フランス",
                    "price": "¥9,718"
                }
    ]
  },
  "2-4-0-0-2-1-2-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4j8FKJf",
                    "image": "https://m.media-amazon.com/images/I/61mDZE7+NJL._AC_SX679_.jpg",
                    "productName": "1981年 シャルル・ヴァンツ",
                    "region": "フランス",
                    "price": "¥14,228"
                },
                {
                    "url": "https://amzn.to/40fpLk8",
                    "image": "https://m.media-amazon.com/images/I/31RjPykZHIL._AC_.jpg",
                    "productName": "クリスチャン・ビネール ゲヴュルツトラミネール グラン・クリュ ケフェルコフ ヴァンダンジュ・タルディヴ 2018",
                    "region": "フランス",
                    "price": "¥10,274"
                },
                {
                    "url": "https://amzn.to/3C7MpTs",
                    "image": "https://m.media-amazon.com/images/I/31RP9LseBRL._AC_.jpg",
                    "productName": "ドメーヌ・ツィント・フンブレヒト ゲヴュルツトラミネール ランゲン・ド・タン・クロ・サンテュルバン GC 2013",
                    "region": "フランス",
                    "price": "¥11,454"
                },
                {
                    "url": "https://amzn.to/425ZbfR",
                    "image": "https://m.media-amazon.com/images/I/41xeQREqHlL._AC_SY879_.jpg",
                    "productName": "トリンバック ゲヴュルツトラミネール・セレクション・ ド・グラン・ノーブル 2008",
                    "region": "フランス",
                    "price": "¥23,100"
                },
                {
                    "url": "https://amzn.to/4gVonuc",
                    "image": "https://m.media-amazon.com/images/I/41QKIK1Z2ML._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール アルテンブルク 2021",
                    "region": "フランス",
                    "price": "¥11,000"
                }
    ]
  },
  "2-5-0-0-2-1-2-2": {
    "title": "ゲヴェルツトラミネールワイン",
    "description": "ゲヴェルツトラミネールワインは、豊かなアロマとスパイシーな香りが特徴で、ライチやバラの花、ジンジャーのニュアンスが感じられます。味わいはフルボディで、しっかりとした甘さと酸味のバランスが絶妙です。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4fVzzFy",
                    "image": "https://m.media-amazon.com/images/I/41YhkqNITWL._AC_SY879_.jpg",
                    "productName": "ドメーヌ ヴァインバック ゲヴュルツトラミネール グランクリュ フュルステンテュム セレクシヨン ド グランノーブル 2017",
                    "region": "フランス",
                    "price": "¥34,000"
                }
    ]
  },
  "2-1-0-0-2-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4acA9NU",
                    "image": "https://m.media-amazon.com/images/I/51df4mDbi6L._AC_SY879_.jpg",
                    "productName": "ネブリナ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,316"
                },
                {
                    "url": "https://amzn.to/3DNYq0X",
                    "image": "https://m.media-amazon.com/images/I/71yKNp5n4yL._AC_SY879_.jpg",
                    "productName": "ボーグル ヴィンヤーズ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,860"
                },
                {
                    "url": "https://amzn.to/4h8VN81",
                    "image": "https://m.media-amazon.com/images/I/616xIooMlSL._AC_SY879_.jpg",
                    "productName": "ロバート・モンダヴィ ウッドブリッジ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥1,431"
                },
                {
                    "url": "https://amzn.to/4gP7wZJ",
                    "image": "https://m.media-amazon.com/images/I/51FV0Mq+bEL._AC_SY879_.jpg",
                    "productName": "ヴィニャ・カサブランカ セフィーロ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,423"
                },
                {
                    "url": "https://amzn.to/4gPkDu4",
                    "image": "https://m.media-amazon.com/images/I/51KP5-I4jVL._AC_SY879_.jpg",
                    "productName": "ウェンテ モーニング・フォグ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,990"
                }
    ]
  },
  "2-2-0-0-2-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DTi63u",
                    "image": "https://m.media-amazon.com/images/I/417S4WyGMDL._AC_SY879_.jpg",
                    "productName": "プロボノ シャルドネ サンタ バーバラ カウンティ 2018",
                    "region": "アメリカ",
                    "price": "¥4,890"
                },
                {
                    "url": "https://amzn.to/4gOHJB7",
                    "image": "https://m.media-amazon.com/images/I/41KeLaQk7AL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・シャルドネ",
                    "region": "チリ",
                    "price": "¥4,913"
                },
                {
                    "url": "https://amzn.to/4hdjUCy",
                    "image": "https://m.media-amazon.com/images/I/51ckqxrWPxL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ナパ・ヴァレーシャルドネ",
                    "region": "アメリカ",
                    "price": "¥3,791"
                },
                {
                    "url": "https://amzn.to/4jeUNB4",
                    "image": "https://m.media-amazon.com/images/I/610oqpYmhrL._AC_SX679_.jpg",
                    "productName": "ソノマ・コースト シャルドネ",
                    "region": "アメリカ",
                    "price": "¥4,598"
                },
                {
                    "url": "https://amzn.to/3WccHuw",
                    "image": "https://m.media-amazon.com/images/I/41HlyZI+idL._AC_SY879_.jpg",
                    "productName": "ブレッド ＆ バター シャルドネ 2022",
                    "region": "アメリカ",
                    "price": "¥3,070"
                }
    ]
  },
  "2-3-0-0-2-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jcEpRB",
                    "image": "https://m.media-amazon.com/images/I/51TTHZeVetL._AC_SX679_.jpg",
                    "productName": "ベリンジャー プライベート・リザーブ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,055"
                },
                {
                    "url": "https://amzn.to/3DT7iSX",
                    "image": "https://m.media-amazon.com/images/I/510Ca4t6vdL._AC_SX679_.jpg",
                    "productName": "ニュートン アンフィルタード シャルドネ",
                    "region": "アメリカ",
                    "price": "¥6,153"
                },
                {
                    "url": "https://amzn.to/4aftMJV",
                    "image": "https://m.media-amazon.com/images/I/41TxZPSzrhL._AC_SY879_.jpg",
                    "productName": "ザ ヒルト エステート シャルドネ サンタ リタ ヒルズ 2020",
                    "region": "アメリカ",
                    "price": "¥5,840"
                },
                {
                    "url": "https://amzn.to/3Wgovw1",
                    "image": "https://m.media-amazon.com/images/I/71vepULPWdL._AC_SY879_.jpg",
                    "productName": "ガーギッチ・ヒルズ シャルドネ エステート・グロウン",
                    "region": "アメリカ",
                    "price": "¥8,374"
                },
                {
                    "url": "https://amzn.to/40cY4bx",
                    "image": "https://m.media-amazon.com/images/I/31qkpzeR7tL._AC_.jpg",
                    "productName": "ロバート モンダヴィ ワイナリー シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,123"
                }
    ]
  },
  "2-4-0-0-2-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Pz61TA",
                    "image": "https://m.media-amazon.com/images/I/41i4vb1V2wL._AC_SY879_.jpg",
                    "productName": "ハドソン ワインズ シャルドネ ナパ ヴァレー カーネロス 2021",
                    "region": "アメリカ",
                    "price": "¥11,680"
                },
                {
                    "url": "https://amzn.to/3WeLDLl",
                    "image": "https://m.media-amazon.com/images/I/41FemUnjv4L._AC_SY879_.jpg",
                    "productName": "パルメイヤー ジェイソン シャルドネ ナパヴァレー 2022",
                    "region": "アメリカ",
                    "price": "¥11,710"
                },
                {
                    "url": "https://amzn.to/4h9hNzR",
                    "image": "https://m.media-amazon.com/images/I/6151GMT8ROL._AC_SX679_.jpg",
                    "productName": "リッジ シャルドネ ローンオーク 2023",
                    "region": "アメリカ",
                    "price": "¥13,850"
                },
                {
                    "url": "https://amzn.to/3PxN43G",
                    "image": "https://m.media-amazon.com/images/I/41xVKtSxxGL._AC_.jpg",
                    "productName": "デ ウェホフ バトラー シャルドネ",
                    "region": "南アフリカ",
                    "price": "¥10,591"
                },
                {
                    "url": "https://amzn.to/4h8T2nk",
                    "image": "https://m.media-amazon.com/images/I/51jQjk8-MhL._AC_SX679_.jpg",
                    "productName": "ファー ニエンテ シャルドネ ナパ ヴァレー 2022年",
                    "region": "アメリカ",
                    "price": "¥15,840"
                }
    ]
  },
  "2-5-0-0-2-2-1-1": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42tFzmb",
                    "image": "https://m.media-amazon.com/images/I/51zWzXAypTL._AC_SX679_.jpg",
                    "productName": "コングスガード シャルドネ ナパ ヴァレー 2021年",
                    "region": "アメリカ",
                    "price": "¥41,800"
                },
                {
                    "url": "https://amzn.to/40ubscD",
                    "image": "https://m.media-amazon.com/images/I/41NYG0va1GL._AC_SY879_.jpg",
                    "productName": "オーベール シャルドネ パウダー ハウス エステート2022",
                    "region": "アメリカ",
                    "price": "¥42,660"
                },
                {
                    "url": "https://amzn.to/3DT802z",
                    "image": "https://m.media-amazon.com/images/I/51bYqgfqGML._AC_.jpg",
                    "productName": "2019 ハイド ヴィンヤード シャルドネ キスラー",
                    "region": "アメリカ",
                    "price": "¥43,480"
                },
                {
                    "url": "https://amzn.to/4j9zh0P",
                    "image": "https://m.media-amazon.com/images/I/413q56NEQ-L._AC_SY879_.jpg",
                    "productName": "ピーター マイケル マ ベル フィーユ 2018",
                    "region": "アメリカ",
                    "price": "¥42,430"
                },
                {
                    "url": "https://amzn.to/3BRTaZC",
                    "image": "https://m.media-amazon.com/images/I/41P2H5Vm5+L._AC_SX679_.jpg",
                    "productName": "ザキン シャルドネ",
                    "region": "アメリカ",
                    "price": "¥55,000"
                }
    ]
  },
  "2-1-0-0-2-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4acA9NU",
                    "image": "https://m.media-amazon.com/images/I/51df4mDbi6L._AC_SY879_.jpg",
                    "productName": "ネブリナ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,316"
                },
                {
                    "url": "https://amzn.to/3DNYq0X",
                    "image": "https://m.media-amazon.com/images/I/71yKNp5n4yL._AC_SY879_.jpg",
                    "productName": "ボーグル ヴィンヤーズ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,860"
                },
                {
                    "url": "https://amzn.to/4h8VN81",
                    "image": "https://m.media-amazon.com/images/I/616xIooMlSL._AC_SY879_.jpg",
                    "productName": "ロバート・モンダヴィ ウッドブリッジ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥1,431"
                },
                {
                    "url": "https://amzn.to/4gP7wZJ",
                    "image": "https://m.media-amazon.com/images/I/51FV0Mq+bEL._AC_SY879_.jpg",
                    "productName": "ヴィニャ・カサブランカ セフィーロ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,423"
                },
                {
                    "url": "https://amzn.to/4gPkDu4",
                    "image": "https://m.media-amazon.com/images/I/51KP5-I4jVL._AC_SY879_.jpg",
                    "productName": "ウェンテ モーニング・フォグ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,990"
                }
    ]
  },
  "2-2-0-0-2-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DTi63u",
                    "image": "https://m.media-amazon.com/images/I/417S4WyGMDL._AC_SY879_.jpg",
                    "productName": "プロボノ シャルドネ サンタ バーバラ カウンティ 2018",
                    "region": "アメリカ",
                    "price": "¥4,890"
                },
                {
                    "url": "https://amzn.to/4gOHJB7",
                    "image": "https://m.media-amazon.com/images/I/41KeLaQk7AL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・シャルドネ",
                    "region": "チリ",
                    "price": "¥4,913"
                },
                {
                    "url": "https://amzn.to/4hdjUCy",
                    "image": "https://m.media-amazon.com/images/I/51ckqxrWPxL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ナパ・ヴァレーシャルドネ",
                    "region": "アメリカ",
                    "price": "¥3,791"
                },
                {
                    "url": "https://amzn.to/4jeUNB4",
                    "image": "https://m.media-amazon.com/images/I/610oqpYmhrL._AC_SX679_.jpg",
                    "productName": "ソノマ・コースト シャルドネ",
                    "region": "アメリカ",
                    "price": "¥4,598"
                },
                {
                    "url": "https://amzn.to/3WccHuw",
                    "image": "https://m.media-amazon.com/images/I/41HlyZI+idL._AC_SY879_.jpg",
                    "productName": "ブレッド ＆ バター シャルドネ 2022",
                    "region": "アメリカ",
                    "price": "¥3,070"
                }
    ]
  },
  "2-3-0-0-2-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jcEpRB",
                    "image": "https://m.media-amazon.com/images/I/51TTHZeVetL._AC_SX679_.jpg",
                    "productName": "ベリンジャー プライベート・リザーブ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,055"
                },
                {
                    "url": "https://amzn.to/3DT7iSX",
                    "image": "https://m.media-amazon.com/images/I/510Ca4t6vdL._AC_SX679_.jpg",
                    "productName": "ニュートン アンフィルタード シャルドネ",
                    "region": "アメリカ",
                    "price": "¥6,153"
                },
                {
                    "url": "https://amzn.to/4aftMJV",
                    "image": "https://m.media-amazon.com/images/I/41TxZPSzrhL._AC_SY879_.jpg",
                    "productName": "ザ ヒルト エステート シャルドネ サンタ リタ ヒルズ 2020",
                    "region": "アメリカ",
                    "price": "¥5,840"
                },
                {
                    "url": "https://amzn.to/3Wgovw1",
                    "image": "https://m.media-amazon.com/images/I/71vepULPWdL._AC_SY879_.jpg",
                    "productName": "ガーギッチ・ヒルズ シャルドネ エステート・グロウン",
                    "region": "アメリカ",
                    "price": "¥8,374"
                },
                {
                    "url": "https://amzn.to/40cY4bx",
                    "image": "https://m.media-amazon.com/images/I/31qkpzeR7tL._AC_.jpg",
                    "productName": "ロバート モンダヴィ ワイナリー シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,123"
                }
    ]
  },
  "2-4-0-0-2-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Pz61TA",
                    "image": "https://m.media-amazon.com/images/I/41i4vb1V2wL._AC_SY879_.jpg",
                    "productName": "ハドソン ワインズ シャルドネ ナパ ヴァレー カーネロス 2021",
                    "region": "アメリカ",
                    "price": "¥11,680"
                },
                {
                    "url": "https://amzn.to/3WeLDLl",
                    "image": "https://m.media-amazon.com/images/I/41FemUnjv4L._AC_SY879_.jpg",
                    "productName": "パルメイヤー ジェイソン シャルドネ ナパヴァレー 2022",
                    "region": "アメリカ",
                    "price": "¥11,710"
                },
                {
                    "url": "https://amzn.to/4h9hNzR",
                    "image": "https://m.media-amazon.com/images/I/6151GMT8ROL._AC_SX679_.jpg",
                    "productName": "リッジ シャルドネ ローンオーク 2023",
                    "region": "アメリカ",
                    "price": "¥13,850"
                },
                {
                    "url": "https://amzn.to/3PxN43G",
                    "image": "https://m.media-amazon.com/images/I/41xVKtSxxGL._AC_.jpg",
                    "productName": "デ ウェホフ バトラー シャルドネ",
                    "region": "南アフリカ",
                    "price": "¥10,591"
                },
                {
                    "url": "https://amzn.to/4h8T2nk",
                    "image": "https://m.media-amazon.com/images/I/51jQjk8-MhL._AC_SX679_.jpg",
                    "productName": "ファー ニエンテ シャルドネ ナパ ヴァレー 2022年",
                    "region": "アメリカ",
                    "price": "¥15,840"
                }
    ]
  },
  "2-5-0-0-2-2-1-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42tFzmb",
                    "image": "https://m.media-amazon.com/images/I/51zWzXAypTL._AC_SX679_.jpg",
                    "productName": "コングスガード シャルドネ ナパ ヴァレー 2021年",
                    "region": "アメリカ",
                    "price": "¥41,800"
                },
                {
                    "url": "https://amzn.to/40ubscD",
                    "image": "https://m.media-amazon.com/images/I/41NYG0va1GL._AC_SY879_.jpg",
                    "productName": "オーベール シャルドネ パウダー ハウス エステート2022",
                    "region": "アメリカ",
                    "price": "¥42,660"
                },
                {
                    "url": "https://amzn.to/3DT802z",
                    "image": "https://m.media-amazon.com/images/I/51bYqgfqGML._AC_.jpg",
                    "productName": "2019 ハイド ヴィンヤード シャルドネ キスラー",
                    "region": "アメリカ",
                    "price": "¥43,480"
                },
                {
                    "url": "https://amzn.to/4j9zh0P",
                    "image": "https://m.media-amazon.com/images/I/413q56NEQ-L._AC_SY879_.jpg",
                    "productName": "ピーター マイケル マ ベル フィーユ 2018",
                    "region": "アメリカ",
                    "price": "¥42,430"
                },
                {
                    "url": "https://amzn.to/3BRTaZC",
                    "image": "https://m.media-amazon.com/images/I/41P2H5Vm5+L._AC_SX679_.jpg",
                    "productName": "ザキン シャルドネ",
                    "region": "アメリカ",
                    "price": "¥55,000"
                }
    ]
  },
  "2-1-0-0-2-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3PSQY7z",
                    "image": "https://m.media-amazon.com/images/I/51GaC0PjpaL._AC_SY879_.jpg",
                    "productName": "ラブレ・ロワ シャルドネ・ヴァン・ド・フランス",
                    "region": "フランス",
                    "price": "¥1,392"
                },
                {
                    "url": "https://amzn.to/42cmO6h",
                    "image": "https://m.media-amazon.com/images/I/3170Ou+BsuL._AC_.jpg",
                    "productName": "シャブリ アントワーヌ・シャトレ [2023]",
                    "region": "フランス",
                    "price": "¥2,750"
                },
                {
                    "url": "https://amzn.to/3DSaQ7W",
                    "image": "https://m.media-amazon.com/images/I/61fUId2nlaL._AC_SX679_.jpg",
                    "productName": "メゾン・ジョゼフ・ドルーアン ラフォーレ ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥2,680"
                },
                {
                    "url": "https://amzn.to/4h6ipXv",
                    "image": "https://m.media-amazon.com/images/I/415yn+27IoL._AC_SY879_.jpg",
                    "productName": "シャブリ2023フィリップ ブシャール",
                    "region": "フランス",
                    "price": "¥2,550"
                },
                {
                    "url": "https://amzn.to/409YUG9",
                    "image": "https://m.media-amazon.com/images/I/31ZHPqL+wNL._AC_.jpg",
                    "productName": "クロズリー・デ・アリズィエ ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥2,619"
                }
    ]
  },
  "2-2-0-0-2-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40yIjNK",
                    "image": "https://m.media-amazon.com/images/I/61WLunurFcL._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET ブルゴーニュ シャルドネ",
                    "region": "フランス",
                    "price": "¥4,400"
                },
                {
                    "url": "https://amzn.to/40rR1gy",
                    "image": "https://m.media-amazon.com/images/I/61GBQMFCt6L._AC_SY879_.jpg",
                    "productName": "LUPÉ-CHOLET ルペ ショーレマコンヴィラージュ",
                    "region": "フランス",
                    "price": "¥3,740"
                },
                {
                    "url": "https://amzn.to/4fTUoBd",
                    "image": "https://m.media-amazon.com/images/I/61drgvhHTEL._AC_SY879_.jpg",
                    "productName": "アルベール・ビショー ブルゴーニュ シャルドネ ヴィエイユ・ヴィーニュ",
                    "region": "フランス",
                    "price": "¥4,492"
                },
                {
                    "url": "https://amzn.to/4jdoylN",
                    "image": "https://m.media-amazon.com/images/I/31aX3xE03dL._AC_.jpg",
                    "productName": "マリー・ルイス・パリゾ ブルゴーニュ ブラン シャルドネ",
                    "region": "フランス",
                    "price": "¥4,293"
                },
                {
                    "url": "https://amzn.to/3C6eDxO",
                    "image": "https://m.media-amazon.com/images/I/71dHvLBCD5L._AC_SY879_.jpg",
                    "productName": "ブシャール ペール エ フィス ブルゴーニュ シャルドネ“ラ ヴィニェ",
                    "region": "フランス",
                    "price": "¥4,035"
                }
    ]
  },
  "2-3-0-0-2-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4ha4q2n",
                    "image": "https://m.media-amazon.com/images/I/61+Qfo6Bq1L._AC_SY879_.jpg",
                    "productName": "ルー デュモン レア セレクション シャブリ グラン クリュ ヴァルミュール 2003",
                    "region": "フランス",
                    "price": "¥9,428"
                },
                {
                    "url": "https://amzn.to/42ahr7G",
                    "image": "https://m.media-amazon.com/images/I/61sbvrBnecL._AC_SY879_.jpg",
                    "productName": "ドゥメセ サントネ プルミエ クリュ ボールペール ブラン 2002",
                    "region": "フランス",
                    "price": "¥5,228"
                },
                {
                    "url": "https://amzn.to/4fVAEx2",
                    "image": "https://m.media-amazon.com/images/I/51iDksmSxIL._AC_SY879_.jpg",
                    "productName": "ドメーヌ・ロン・デパキ シャブリ・プルミエ・クリュ レ・ヴォークパン",
                    "region": "フランス",
                    "price": "¥8,414"
                },
                {
                    "url": "https://amzn.to/42aihkQ",
                    "image": "https://m.media-amazon.com/images/I/61mDj0M5WIL._AC_SY879_.jpg",
                    "productName": "2022 シャブリ レ ドゥ リヴ オリヴィエ ルフレーヴ",
                    "region": "フランス",
                    "price": "¥5,478"
                },
                {
                    "url": "https://amzn.to/4jaTdAl",
                    "image": "https://m.media-amazon.com/images/I/41E+jgfmVAL._AC_SY879_.jpg",
                    "productName": "ブルゴーニュ コート ドール ブラン2022ドメーヌ トロ ボー",
                    "region": "フランス",
                    "price": "¥7,080"
                }
    ]
  },
  "2-4-0-0-2-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/40wboco",
                    "image": "https://m.media-amazon.com/images/I/41PoukydmTL._AC_.jpg",
                    "productName": "2018 ブルゴーニュ ブラン シャルドネ エティエンヌ ソゼ",
                    "region": "フランス",
                    "price": "¥16,500"
                },
                {
                    "url": "https://amzn.to/40tghmE",
                    "image": "https://m.media-amazon.com/images/I/51rRXnmumUL._AC_SX679_.jpg",
                    "productName": "2021 ブルゴーニュ ブラン ルフレーヴ エ アソシエ",
                    "region": "フランス",
                    "price": "¥11,770"
                },
                {
                    "url": "https://amzn.to/40uWRhf",
                    "image": "https://m.media-amazon.com/images/I/51NT1sjq67L._AC_.jpg",
                    "productName": "ムルソー シャルム プルミエ クリュ レ シャルム デス 2020",
                    "region": "フランス",
                    "price": "¥17,100"
                },
                {
                    "url": "https://amzn.to/3DScqqo",
                    "image": "https://m.media-amazon.com/images/I/51AiuW09V7L._AC_.jpg",
                    "productName": "2018 ブルゴーニュ シャルドネ ブラン ラモネ ジャン クロード",
                    "region": "フランス",
                    "price": "¥19,250"
                },
                {
                    "url": "https://amzn.to/4fVgKT7",
                    "image": "https://m.media-amazon.com/images/I/51SkJ4ure5L._AC_SX679_.jpg",
                    "productName": "2021 シャサーニュ モンラッシェ プルミエ クリュ ヴィド ブルス マルク コラン",
                    "region": "フランス",
                    "price": "¥24,200"
                }
    ]
  },
  "2-5-0-0-2-2-2-1": {
    "title": "ブルゴーニュ・シャルドネワイン",
    "description": "ブルゴーニュのシャルドネワインは、繊細でフレッシュな香りが特徴で、リンゴやシトラス、花のニュアンスが広がります。味わいは酸味がしっかりと感じられ、エレガントでバランスの取れたミディアムボディの仕上がりです。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4hbaxDz",
                    "image": "https://m.media-amazon.com/images/I/41dK3qcTkRL._AC_.jpg",
                    "productName": "2017 シャサーニュ モンラッシェ ル コンシ デュ シャン ユベール ラミー",
                    "region": "フランス",
                    "price": "¥35,860"
                },
                {
                    "url": "https://amzn.to/40gySko",
                    "image": "https://m.media-amazon.com/images/I/41pK1Ak8jAL._AC_.jpg",
                    "productName": "ラブレ・ロワ コルトン・シャルルマーニュ",
                    "region": "フランス",
                    "price": "¥31,700"
                },
                {
                    "url": "https://amzn.to/3Cf9Hqn",
                    "image": "https://m.media-amazon.com/images/I/512B-Z+SvgL._AC_.jpg",
                    "productName": "コルトン シャルルマーニュ グラン クリュ 2020",
                    "region": "フランス",
                    "price": "¥33,430"
                },
                {
                    "url": "https://amzn.to/4abqp6R",
                    "image": "https://m.media-amazon.com/images/I/51TWoImRUsL._AC_.jpg",
                    "productName": "2017 ピュリニー モンラッシェ プルミエ クリュ レ ピュセル ドメーヌ ルフレーヴ",
                    "region": "フランス",
                    "price": "¥121,000"
                },
                {
                    "url": "https://amzn.to/42aiPXW",
                    "image": "https://m.media-amazon.com/images/I/51ItH4V0tEL._AC_.jpg",
                    "productName": "2018 シャブリ プルミエ クリュ ラ フォレ ヴァンサン ドーヴィサ",
                    "region": "フランス",
                    "price": "¥39,600"
                }
    ]
  },
  "2-1-0-0-2-2-2-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4acA9NU",
                    "image": "https://m.media-amazon.com/images/I/51df4mDbi6L._AC_SY879_.jpg",
                    "productName": "ネブリナ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,316"
                },
                {
                    "url": "https://amzn.to/3DNYq0X",
                    "image": "https://m.media-amazon.com/images/I/71yKNp5n4yL._AC_SY879_.jpg",
                    "productName": "ボーグル ヴィンヤーズ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,860"
                },
                {
                    "url": "https://amzn.to/4h8VN81",
                    "image": "https://m.media-amazon.com/images/I/616xIooMlSL._AC_SY879_.jpg",
                    "productName": "ロバート・モンダヴィ ウッドブリッジ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥1,431"
                },
                {
                    "url": "https://amzn.to/4gP7wZJ",
                    "image": "https://m.media-amazon.com/images/I/51FV0Mq+bEL._AC_SY879_.jpg",
                    "productName": "ヴィニャ・カサブランカ セフィーロ シャルドネ",
                    "region": "チリ",
                    "price": "¥1,423"
                },
                {
                    "url": "https://amzn.to/4gPkDu4",
                    "image": "https://m.media-amazon.com/images/I/51KP5-I4jVL._AC_SY879_.jpg",
                    "productName": "ウェンテ モーニング・フォグ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥2,990"
                }
    ]
  },
  "2-2-0-0-2-2-2-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3DTi63u",
                    "image": "https://m.media-amazon.com/images/I/417S4WyGMDL._AC_SY879_.jpg",
                    "productName": "プロボノ シャルドネ サンタ バーバラ カウンティ 2018",
                    "region": "アメリカ",
                    "price": "¥4,890"
                },
                {
                    "url": "https://amzn.to/4gOHJB7",
                    "image": "https://m.media-amazon.com/images/I/41KeLaQk7AL._AC_SY879_.jpg",
                    "productName": "モンテス・アルファ・スペシャル・キュヴェ・シャルドネ",
                    "region": "チリ",
                    "price": "¥4,913"
                },
                {
                    "url": "https://amzn.to/4hdjUCy",
                    "image": "https://m.media-amazon.com/images/I/51ckqxrWPxL._AC_SY879_.jpg",
                    "productName": "ベリンジャー ナパ・ヴァレーシャルドネ",
                    "region": "アメリカ",
                    "price": "¥3,791"
                },
                {
                    "url": "https://amzn.to/4jeUNB4",
                    "image": "https://m.media-amazon.com/images/I/610oqpYmhrL._AC_SX679_.jpg",
                    "productName": "ソノマ・コースト シャルドネ",
                    "region": "アメリカ",
                    "price": "¥4,598"
                },
                {
                    "url": "https://amzn.to/3WccHuw",
                    "image": "https://m.media-amazon.com/images/I/41HlyZI+idL._AC_SY879_.jpg",
                    "productName": "ブレッド ＆ バター シャルドネ 2022",
                    "region": "アメリカ",
                    "price": "¥3,070"
                }
    ]
  },
  "2-3-0-0-2-2-2-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/4jcEpRB",
                    "image": "https://m.media-amazon.com/images/I/51TTHZeVetL._AC_SX679_.jpg",
                    "productName": "ベリンジャー プライベート・リザーブ シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,055"
                },
                {
                    "url": "https://amzn.to/3DT7iSX",
                    "image": "https://m.media-amazon.com/images/I/510Ca4t6vdL._AC_SX679_.jpg",
                    "productName": "ニュートン アンフィルタード シャルドネ",
                    "region": "アメリカ",
                    "price": "¥6,153"
                },
                {
                    "url": "https://amzn.to/4aftMJV",
                    "image": "https://m.media-amazon.com/images/I/41TxZPSzrhL._AC_SY879_.jpg",
                    "productName": "ザ ヒルト エステート シャルドネ サンタ リタ ヒルズ 2020",
                    "region": "アメリカ",
                    "price": "¥5,840"
                },
                {
                    "url": "https://amzn.to/3Wgovw1",
                    "image": "https://m.media-amazon.com/images/I/71vepULPWdL._AC_SY879_.jpg",
                    "productName": "ガーギッチ・ヒルズ シャルドネ エステート・グロウン",
                    "region": "アメリカ",
                    "price": "¥8,374"
                },
                {
                    "url": "https://amzn.to/40cY4bx",
                    "image": "https://m.media-amazon.com/images/I/31qkpzeR7tL._AC_.jpg",
                    "productName": "ロバート モンダヴィ ワイナリー シャルドネ",
                    "region": "アメリカ",
                    "price": "¥8,123"
                }
    ]
  },
  "2-4-0-0-2-2-2-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/3Pz61TA",
                    "image": "https://m.media-amazon.com/images/I/41i4vb1V2wL._AC_SY879_.jpg",
                    "productName": "ハドソン ワインズ シャルドネ ナパ ヴァレー カーネロス 2021",
                    "region": "アメリカ",
                    "price": "¥11,680"
                },
                {
                    "url": "https://amzn.to/3WeLDLl",
                    "image": "https://m.media-amazon.com/images/I/41FemUnjv4L._AC_SY879_.jpg",
                    "productName": "パルメイヤー ジェイソン シャルドネ ナパヴァレー 2022",
                    "region": "アメリカ",
                    "price": "¥11,710"
                },
                {
                    "url": "https://amzn.to/4h9hNzR",
                    "image": "https://m.media-amazon.com/images/I/6151GMT8ROL._AC_SX679_.jpg",
                    "productName": "リッジ シャルドネ ローンオーク 2023",
                    "region": "アメリカ",
                    "price": "¥13,850"
                },
                {
                    "url": "https://amzn.to/3PxN43G",
                    "image": "https://m.media-amazon.com/images/I/41xVKtSxxGL._AC_.jpg",
                    "productName": "デ ウェホフ バトラー シャルドネ",
                    "region": "南アフリカ",
                    "price": "¥10,591"
                },
                {
                    "url": "https://amzn.to/4h8T2nk",
                    "image": "https://m.media-amazon.com/images/I/51jQjk8-MhL._AC_SX679_.jpg",
                    "productName": "ファー ニエンテ シャルドネ ナパ ヴァレー 2022年",
                    "region": "アメリカ",
                    "price": "¥15,840"
                }
    ]
  },
  "2-5-0-0-2-2-2-2": {
    "title": "ニューワールド・シャルドネワイン",
    "description": "ニューワールドのシャルドネワインは、豊かな果実味とバターのようなクリーミーなテクスチャーが特徴です。トロピカルフルーツやバニラ、トーストの香りが感じられ、フルボディでリッチな味わいが広がります。",
    "amazonLinks": [
                {
                    "url": "https://amzn.to/42tFzmb",
                    "image": "https://m.media-amazon.com/images/I/51zWzXAypTL._AC_SX679_.jpg",
                    "productName": "コングスガード シャルドネ ナパ ヴァレー 2021年",
                    "region": "アメリカ",
                    "price": "¥41,800"
                },
                {
                    "url": "https://amzn.to/40ubscD",
                    "image": "https://m.media-amazon.com/images/I/41NYG0va1GL._AC_SY879_.jpg",
                    "productName": "オーベール シャルドネ パウダー ハウス エステート2022",
                    "region": "アメリカ",
                    "price": "¥42,660"
                },
                {
                    "url": "https://amzn.to/3DT802z",
                    "image": "https://m.media-amazon.com/images/I/51bYqgfqGML._AC_.jpg",
                    "productName": "2019 ハイド ヴィンヤード シャルドネ キスラー",
                    "region": "アメリカ",
                    "price": "¥43,480"
                },
                {
                    "url": "https://amzn.to/4j9zh0P",
                    "image": "https://m.media-amazon.com/images/I/413q56NEQ-L._AC_SY879_.jpg",
                    "productName": "ピーター マイケル マ ベル フィーユ 2018",
                    "region": "アメリカ",
                    "price": "¥42,430"
                },
                {
                    "url": "https://amzn.to/3BRTaZC",
                    "image": "https://m.media-amazon.com/images/I/41P2H5Vm5+L._AC_SX679_.jpg",
                    "productName": "ザキン シャルドネ",
                    "region": "アメリカ",
                    "price": "¥55,000"
                }
    ]
  },
  "default": {
  "title": "該当するワインが見つかりませんでした",
  "description": "条件を変更して再検索してください。",
  "amazonLink": []
 }
    };

    // 結果を取得
    const result = wineData[conditionKey] || wineData["default"];

    // 結果を表示
    const resultContainer = document.getElementById("wine-result");

    if (result.amazonLinks.length > 0) {
        resultContainer.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <div class="cards-container">
                ${result.amazonLinks
                    .slice(0, 5) // 最大5件
                    .map(
    　　　　　　　　　　　　link => `
                        <div class="card">
                            <img src="${link.image}" alt="${link.productName}" class="product-image">
                            <div class="card-details"> <!-- card-detailsを追加 -->
                                <h4>${link.productName}</h4>
                                <p>産地: ${link.region}</p>
                                <p>価格: ${link.price}</p>
                                <button onclick="window.open('${link.url}', '_blank')" class="amazon-button">
                                    Amazonで詳細をみる
                                </button>
                            </div>
                        </div>
                        `
                    )

                    .join("")}
            </div>
        `;
    } else {
        resultContainer.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
        `;
    }
}

// ページ読み込み時に診断結果を表示
window.onload = generateResult;