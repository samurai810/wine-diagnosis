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
    "title": "メルロワイン1",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink":[
        "https://www.amazon.co.jp/example1-1",
        "https://www.amazon.co.jp/example1-2",
        "https://www.amazon.co.jp/example1-3",
        "https://www.amazon.co.jp/example1-4",
        "https://www.amazon.co.jp/example1-5"
    ] 
  },
  "1-2-0-0-1-1-1-1": {
    "title": "メルロワイン2",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink":[
        "https://www.amazon.co.jp/example2-1",
        "https://www.amazon.co.jp/example2-2",
        "https://www.amazon.co.jp/example2-3",
        "https://www.amazon.co.jp/example2-4",
        "https://www.amazon.co.jp/example2-5"
    ]
  },
  "1-3-0-0-1-1-1-1": {
    "title": "メルロワイン3",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example3-1",
        "https://www.amazon.co.jp/example3-2",
        "https://www.amazon.co.jp/example3-3",
        "https://www.amazon.co.jp/example3-4",
        "https://www.amazon.co.jp/example3-5"
    ]
  },
  "1-4-0-0-1-1-1-1": {
    "title": "メルロワイン4",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example4-1",
        "https://www.amazon.co.jp/example4-2",
        "https://www.amazon.co.jp/example4-3",
        "https://www.amazon.co.jp/example4-4",
        "https://www.amazon.co.jp/example4-5"
    ]
  },
  "1-5-0-0-1-1-1-1": {
    "title": "メルロワイン5",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example5-1",
        "https://www.amazon.co.jp/example5-2",
        "https://www.amazon.co.jp/example5-3",
        "https://www.amazon.co.jp/example5-4",
        "https://www.amazon.co.jp/example5-5"
    ]
  },
  "1-1-0-0-1-1-1-2": {
    "title": "ニューカベワイン6",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example6-1",
        "https://www.amazon.co.jp/example6-2",
        "https://www.amazon.co.jp/example6-3",
        "https://www.amazon.co.jp/example6-4",
        "https://www.amazon.co.jp/example6-5"
    ]
  },
  "1-2-0-0-1-1-1-2": {
    "title": "ニューカベワイン7",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example7-1",
        "https://www.amazon.co.jp/example7-2",
        "https://www.amazon.co.jp/example7-3",
        "https://www.amazon.co.jp/example7-4",
        "https://www.amazon.co.jp/example7-5"
    ]
  },
  "1-3-0-0-1-1-1-2": {
    "title": "ニューカベワイン8",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example8-1",
        "https://www.amazon.co.jp/example8-2",
        "https://www.amazon.co.jp/example8-3",
        "https://www.amazon.co.jp/example8-4",
        "https://www.amazon.co.jp/example8-5"
    ]
  },
  "1-4-0-0-1-1-1-2": {
    "title": "ニューカベワイン9",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example9-1",
        "https://www.amazon.co.jp/example9-2",
        "https://www.amazon.co.jp/example9-3",
        "https://www.amazon.co.jp/example9-4",
        "https://www.amazon.co.jp/example9-5"
    ]
  },
  "1-5-0-0-1-1-1-2": {
    "title": "ニューカベワイン10",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example10-1",
        "https://www.amazon.co.jp/example10-2",
        "https://www.amazon.co.jp/example10-3",
        "https://www.amazon.co.jp/example10-4",
        "https://www.amazon.co.jp/example10-5"
    ]
  },
  "1-1-0-0-1-1-2-1": {
    "title": "ブルピノワイン11",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example11-1",
        "https://www.amazon.co.jp/example11-2",
        "https://www.amazon.co.jp/example11-3",
        "https://www.amazon.co.jp/example11-4",
        "https://www.amazon.co.jp/example11-5"
    ]
  },
  "1-2-0-0-1-1-2-1": {
    "title": "ブルピノワイン12",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example12-1",
        "https://www.amazon.co.jp/example12-2",
        "https://www.amazon.co.jp/example12-3",
        "https://www.amazon.co.jp/example12-4",
        "https://www.amazon.co.jp/example12-5"
    ]
  },
  "1-3-0-0-1-1-2-1": {
    "title": "ブルピノワイン13",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example13-1",
        "https://www.amazon.co.jp/example13-2",
        "https://www.amazon.co.jp/example13-3",
        "https://www.amazon.co.jp/example13-4",
        "https://www.amazon.co.jp/example13-5"
    ]
  },
  "1-4-0-0-1-1-2-1": {
    "title": "ブルピノワイン14",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example14-1",
        "https://www.amazon.co.jp/example14-2",
        "https://www.amazon.co.jp/example14-3",
        "https://www.amazon.co.jp/example14-4",
        "https://www.amazon.co.jp/example14-5"
    ]
  },
  "1-5-0-0-1-1-2-1": {
    "title": "ブルピノワイン15",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example15-1",
        "https://www.amazon.co.jp/example15-2",
        "https://www.amazon.co.jp/example15-3",
        "https://www.amazon.co.jp/example15-4",
        "https://www.amazon.co.jp/example15-5"
    ]
  },
  "1-1-0-0-1-1-2-2": {
    "title": "ブルピノワイン16",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example16-1",
        "https://www.amazon.co.jp/example16-2",
        "https://www.amazon.co.jp/example16-3",
        "https://www.amazon.co.jp/example16-4",
        "https://www.amazon.co.jp/example16-5"
    ]
  },
  "1-2-0-0-1-1-2-2": {
    "title": "ブルピノワイン17",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example17-1",
        "https://www.amazon.co.jp/example17-2",
        "https://www.amazon.co.jp/example17-3",
        "https://www.amazon.co.jp/example17-4",
        "https://www.amazon.co.jp/example17-5"
    ]
  },
  "1-3-0-0-1-1-2-2": {
    "title": "ブルピノワイン18",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example18-1",
        "https://www.amazon.co.jp/example18-2",
        "https://www.amazon.co.jp/example18-3",
        "https://www.amazon.co.jp/example18-4",
        "https://www.amazon.co.jp/example18-5"
    ]
  },
  "1-4-0-0-1-1-2-2": {
    "title": "ブルピノワイン19",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example19-1",
        "https://www.amazon.co.jp/example19-2",
        "https://www.amazon.co.jp/example19-3",
        "https://www.amazon.co.jp/example19-4",
        "https://www.amazon.co.jp/example19-5"
    ]
  },
  "1-5-0-0-1-1-2-2": {
    "title": "ブルピノワイン20",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example20-1",
        "https://www.amazon.co.jp/example20-2",
        "https://www.amazon.co.jp/example20-3",
        "https://www.amazon.co.jp/example20-4",
        "https://www.amazon.co.jp/example20-5"
    ]
   },
  "1-1-0-0-1-2-1-1": {
    "title": "ボルカベワイン21",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example21-1",
        "https://www.amazon.co.jp/example21-2",
        "https://www.amazon.co.jp/example21-3",
        "https://www.amazon.co.jp/example21-4",
        "https://www.amazon.co.jp/example21-5"
    ]
  },
  "1-2-0-0-1-2-1-1": {
    "title": "ボルカベワイン22",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example22-1",
        "https://www.amazon.co.jp/example22-2",
        "https://www.amazon.co.jp/example22-3",
        "https://www.amazon.co.jp/example22-4",
        "https://www.amazon.co.jp/example22-5"
    ]
  },
  "1-3-0-0-1-2-1-1": {
    "title": "ボルカベワイン23",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example23-1",
        "https://www.amazon.co.jp/example23-2",
        "https://www.amazon.co.jp/example23-3",
        "https://www.amazon.co.jp/example23-4",
        "https://www.amazon.co.jp/example23-5"
    ]
  },
  "1-4-0-0-1-2-1-1": {
    "title": "ボルカベワイン24",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example24-1",
        "https://www.amazon.co.jp/example24-2",
        "https://www.amazon.co.jp/example24-3",
        "https://www.amazon.co.jp/example24-4",
        "https://www.amazon.co.jp/example24-5"
    ]
  },
  "1-5-0-0-1-2-1-1": {
    "title": "ボルカベワイン25",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example25-1",
        "https://www.amazon.co.jp/example25-2",
        "https://www.amazon.co.jp/example25-3",
        "https://www.amazon.co.jp/example25-4",
        "https://www.amazon.co.jp/example25-5"
    ]
  },
  "1-1-0-0-1-2-1-2": {
    "title": "シラーワイン26",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example26-1",
        "https://www.amazon.co.jp/example26-2",
        "https://www.amazon.co.jp/example26-3",
        "https://www.amazon.co.jp/example26-4",
        "https://www.amazon.co.jp/example26-5"
    ]
  },
  "1-2-0-0-1-2-1-2": {
    "title": "シラーワイン27",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example27-1",
        "https://www.amazon.co.jp/example27-2",
        "https://www.amazon.co.jp/example27-3",
        "https://www.amazon.co.jp/example27-4",
        "https://www.amazon.co.jp/example27-5"
    ]
  },
  "1-3-0-0-1-2-1-2": {
    "title": "シラーワイン28",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example28-1",
        "https://www.amazon.co.jp/example28-2",
        "https://www.amazon.co.jp/example28-3",
        "https://www.amazon.co.jp/example28-4",
        "https://www.amazon.co.jp/example28-5"
    ]
  },
  "1-4-0-0-1-2-1-2": {
    "title": "シラーワイン29",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example29-1",
        "https://www.amazon.co.jp/example29-2",
        "https://www.amazon.co.jp/example29-3",
        "https://www.amazon.co.jp/example29-4",
        "https://www.amazon.co.jp/example29-5"
    ]
  },
  "1-5-0-0-1-2-1-2": {
    "title": "シラーワイン30",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example30-1",
        "https://www.amazon.co.jp/example30-2",
        "https://www.amazon.co.jp/example30-3",
        "https://www.amazon.co.jp/example30-4",
        "https://www.amazon.co.jp/example30-5"
    ]
   },
  "1-1-0-0-1-2-2-1": {
    "title": "テンプワイン31",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example31-1",
        "https://www.amazon.co.jp/example31-2",
        "https://www.amazon.co.jp/example31-3",
        "https://www.amazon.co.jp/example31-4",
        "https://www.amazon.co.jp/example31-5"
    ]
  },
  "1-2-0-0-1-2-2-1": {
    "title": "テンプワイン32",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example32-1",
        "https://www.amazon.co.jp/example32-2",
        "https://www.amazon.co.jp/example32-3",
        "https://www.amazon.co.jp/example32-4",
        "https://www.amazon.co.jp/example32-5"
    ]
  },
  "1-3-0-0-1-2-2-1": {
    "title": "テンプワイン33",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example33-1",
        "https://www.amazon.co.jp/example33-2",
        "https://www.amazon.co.jp/example33-3",
        "https://www.amazon.co.jp/example33-4",
        "https://www.amazon.co.jp/example33-5"
    ]
  },
  "1-4-0-0-1-2-2-1": {
    "title": "テンプワイン34",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example34-1",
        "https://www.amazon.co.jp/example34-2",
        "https://www.amazon.co.jp/example34-3",
        "https://www.amazon.co.jp/example34-4",
        "https://www.amazon.co.jp/example34-5"
    ]
  },
  "1-5-0-0-1-2-2-1": {
    "title": "テンプワイン35",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example35-1",
        "https://www.amazon.co.jp/example35-2",
        "https://www.amazon.co.jp/example35-3",
        "https://www.amazon.co.jp/example35-4",
        "https://www.amazon.co.jp/example35-5"
    ]
  },
  "1-1-0-0-1-2-2-2": {
    "title": "サンビ・ネルビワイン36",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example36-1",
        "https://www.amazon.co.jp/example36-2",
        "https://www.amazon.co.jp/example36-3",
        "https://www.amazon.co.jp/example36-4",
        "https://www.amazon.co.jp/example36-5"
    ]
  },
  "1-2-0-0-1-2-2-2": {
    "title": "サンビ・ネルビワイン37",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example37-1",
        "https://www.amazon.co.jp/example37-2",
        "https://www.amazon.co.jp/example37-3",
        "https://www.amazon.co.jp/example37-4",
        "https://www.amazon.co.jp/example37-5"
    ]
  },
  "1-3-0-0-1-2-2-2": {
    "title": "サンビ・ネルビワイン38",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example38-1",
        "https://www.amazon.co.jp/example38-2",
        "https://www.amazon.co.jp/example38-3",
        "https://www.amazon.co.jp/example38-4",
        "https://www.amazon.co.jp/example38-5"
    ]
  },
  "1-4-0-0-1-2-2-2": {
    "title": "サンビ・ネルビワイン39",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example39-1",
        "https://www.amazon.co.jp/example39-2",
        "https://www.amazon.co.jp/example39-3",
        "https://www.amazon.co.jp/example39-4",
        "https://www.amazon.co.jp/example39-5"
    ]
  },
  "1-5-0-0-1-2-2-2": {
    "title": "サンビ・ネルビワイン40",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example40-1",
        "https://www.amazon.co.jp/example40-2",
        "https://www.amazon.co.jp/example40-3",
        "https://www.amazon.co.jp/example40-4",
        "https://www.amazon.co.jp/example40-5"
    ]
  },
  "1-1-0-0-2-1-1-1": {
    "title": "ニューピノワイン41",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example41-1",
        "https://www.amazon.co.jp/example41-2",
        "https://www.amazon.co.jp/example41-3",
        "https://www.amazon.co.jp/example41-4",
        "https://www.amazon.co.jp/example41-5"
    ]
  },
  "1-2-0-0-2-1-1-1": {
    "title": "ニューピノワイン42",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example42-1",
        "https://www.amazon.co.jp/example42-2",
        "https://www.amazon.co.jp/example42-3",
        "https://www.amazon.co.jp/example42-4",
        "https://www.amazon.co.jp/example42-5"
    ]
  },
  "1-3-0-0-2-1-1-1": {
    "title": "ニューピノワイン43",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example43-1",
        "https://www.amazon.co.jp/example43-2",
        "https://www.amazon.co.jp/example43-3",
        "https://www.amazon.co.jp/example43-4",
        "https://www.amazon.co.jp/example43-5"
    ]
  },
  "1-4-0-0-2-1-1-1": {
    "title": "ニューピノワイン44",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example44-1",
        "https://www.amazon.co.jp/example44-2",
        "https://www.amazon.co.jp/example44-3",
        "https://www.amazon.co.jp/example44-4",
        "https://www.amazon.co.jp/example44-5"
    ]
  },
  "1-5-0-0-2-1-1-1": {
    "title": "ニューピノワイン45",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example45-1",
        "https://www.amazon.co.jp/example45-2",
        "https://www.amazon.co.jp/example45-3",
        "https://www.amazon.co.jp/example45-4",
        "https://www.amazon.co.jp/example45-5"
    ]
  },
  "1-1-0-0-2-1-1-2": {
    "title": "ニューピノワイン46",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example46-1",
        "https://www.amazon.co.jp/example46-2",
        "https://www.amazon.co.jp/example46-3",
        "https://www.amazon.co.jp/example46-4",
        "https://www.amazon.co.jp/example46-5"
    ]
  },
  "1-2-0-0-2-1-1-2": {
    "title": "ニューピノワイン47",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example47-1",
        "https://www.amazon.co.jp/example47-2",
        "https://www.amazon.co.jp/example47-3",
        "https://www.amazon.co.jp/example47-4",
        "https://www.amazon.co.jp/example47-5"
    ]
  },
  "1-3-0-0-2-1-1-2": {
    "title": "ニューピノワイン48",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example48-1",
        "https://www.amazon.co.jp/example48-2",
        "https://www.amazon.co.jp/example48-3",
        "https://www.amazon.co.jp/example48-4",
        "https://www.amazon.co.jp/example48-5"
    ]
  },
  "1-4-0-0-2-1-1-2": {
    "title": "ニューピノワイン49",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example49-1",
        "https://www.amazon.co.jp/example49-2",
        "https://www.amazon.co.jp/example49-3",
        "https://www.amazon.co.jp/example49-4",
        "https://www.amazon.co.jp/example49-5"
    ]
  },
  "1-5-0-0-2-1-1-2": {
    "title": "ニューピノワイン50",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example50-1",
        "https://www.amazon.co.jp/example50-2",
        "https://www.amazon.co.jp/example50-3",
        "https://www.amazon.co.jp/example50-4",
        "https://www.amazon.co.jp/example50-5"
    ]
  },
  "1-1-0-0-2-1-2-1": {
    "title": "ニューピノワイン51",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example51-1",
        "https://www.amazon.co.jp/example51-2",
        "https://www.amazon.co.jp/example51-3",
        "https://www.amazon.co.jp/example51-4",
        "https://www.amazon.co.jp/example51-5"
    ]
  },
  "1-2-0-0-2-1-2-1": {
    "title": "ニューピノワイン52",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example52-1",
        "https://www.amazon.co.jp/example52-2",
        "https://www.amazon.co.jp/example52-3",
        "https://www.amazon.co.jp/example52-4",
        "https://www.amazon.co.jp/example52-5"
    ]
  },
  "1-3-0-0-2-1-2-1": {
    "title": "ニューピノワイン53",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example53-1",
        "https://www.amazon.co.jp/example53-2",
        "https://www.amazon.co.jp/example53-3",
        "https://www.amazon.co.jp/example53-4",
        "https://www.amazon.co.jp/example53-5"
    ]
  },
  "1-4-0-0-2-1-2-1": {
    "title": "ニューピノワイン54",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example54-1",
        "https://www.amazon.co.jp/example54-2",
        "https://www.amazon.co.jp/example54-3",
        "https://www.amazon.co.jp/example54-4",
        "https://www.amazon.co.jp/example54-5"
    ]
  },
  "1-5-0-0-2-1-2-1": {
    "title": "ニューピノワイン55",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example55-1",
        "https://www.amazon.co.jp/example55-2",
        "https://www.amazon.co.jp/example55-3",
        "https://www.amazon.co.jp/example55-4",
        "https://www.amazon.co.jp/example55-5"
    ]
  },
  "1-1-0-0-2-1-2-2": {
    "title": "ニューピノワイン56",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example56-1",
        "https://www.amazon.co.jp/example56-2",
        "https://www.amazon.co.jp/example56-3",
        "https://www.amazon.co.jp/example56-4",
        "https://www.amazon.co.jp/example56-5"
    ]
  },
  "1-2-0-0-2-1-2-2": {
    "title": "ニューピノワイン57",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example57-1",
        "https://www.amazon.co.jp/example57-2",
        "https://www.amazon.co.jp/example57-3",
        "https://www.amazon.co.jp/example57-4",
        "https://www.amazon.co.jp/example57-5"
    ]
  },
  "1-3-0-0-2-1-2-2": {
    "title": "ニューピノワイン58",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example58-1",
        "https://www.amazon.co.jp/example58-2",
        "https://www.amazon.co.jp/example58-3",
        "https://www.amazon.co.jp/example58-4",
        "https://www.amazon.co.jp/example58-5"
    ]
  },
  "1-4-0-0-2-1-2-2": {
    "title": "ニューピノワイン59",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example59-1",
        "https://www.amazon.co.jp/example59-2",
        "https://www.amazon.co.jp/example59-3",
        "https://www.amazon.co.jp/example59-4",
        "https://www.amazon.co.jp/example59-5"
    ]
  },
  "1-5-0-0-2-1-2-2": {
    "title": "ニューピノワイン60",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example60-1",
        "https://www.amazon.co.jp/example60-2",
        "https://www.amazon.co.jp/example60-3",
        "https://www.amazon.co.jp/example60-4",
        "https://www.amazon.co.jp/example60-5"
    ]
  },
  "1-1-0-0-2-2-1-1": {
    "title": "ニューピノワイン61",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example61-1",
        "https://www.amazon.co.jp/example61-2",
        "https://www.amazon.co.jp/example61-3",
        "https://www.amazon.co.jp/example61-4",
        "https://www.amazon.co.jp/example61-5"
    ]
  },
  "1-2-0-0-2-2-1-1": {
    "title": "ニューピノワイン62",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example62-1",
        "https://www.amazon.co.jp/example62-2",
        "https://www.amazon.co.jp/example62-3",
        "https://www.amazon.co.jp/example62-4",
        "https://www.amazon.co.jp/example62-5"
    ]
  },
  "1-3-0-0-2-2-1-1": {
    "title": "ニューピノワイン63",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example63-1",
        "https://www.amazon.co.jp/example63-2",
        "https://www.amazon.co.jp/example63-3",
        "https://www.amazon.co.jp/example63-4",
        "https://www.amazon.co.jp/example63-5"
    ]
  },
  "1-4-0-0-2-2-1-1": {
    "title": "ニューピノワイン64",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example64-1",
        "https://www.amazon.co.jp/example64-2",
        "https://www.amazon.co.jp/example64-3",
        "https://www.amazon.co.jp/example64-4",
        "https://www.amazon.co.jp/example64-5"
    ]
  },
  "1-5-0-0-2-2-1-1": {
    "title": "ニューピノワイン65",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example65-1",
        "https://www.amazon.co.jp/example65-2",
        "https://www.amazon.co.jp/example65-3",
        "https://www.amazon.co.jp/example65-4",
        "https://www.amazon.co.jp/example65-5"
    ]
  },
  "1-1-0-0-2-2-1-2": {
    "title": "ニューピノワイン66",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example66-1",
        "https://www.amazon.co.jp/example66-2",
        "https://www.amazon.co.jp/example66-3",
        "https://www.amazon.co.jp/example66-4",
        "https://www.amazon.co.jp/example66-5"
    ]
  },
  "1-2-0-0-2-2-1-2": {
    "title": "ニューピノワイン67",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example67-1",
        "https://www.amazon.co.jp/example67-2",
        "https://www.amazon.co.jp/example67-3",
        "https://www.amazon.co.jp/example67-4",
        "https://www.amazon.co.jp/example67-5"
    ]
  },
  "1-3-0-0-2-2-1-2": {
    "title": "ニューピノワイン68",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example68-1",
        "https://www.amazon.co.jp/example68-2",
        "https://www.amazon.co.jp/example68-3",
        "https://www.amazon.co.jp/example68-4",
        "https://www.amazon.co.jp/example68-5"
    ]
  },
  "1-4-0-0-2-2-1-2": {
    "title": "ニューピノワイン69",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example69-1",
        "https://www.amazon.co.jp/example69-2",
        "https://www.amazon.co.jp/example69-3",
        "https://www.amazon.co.jp/example69-4",
        "https://www.amazon.co.jp/example69-5"
    ]
  },
  "1-5-0-0-2-2-1-2": {
    "title": "ニューピノワイン70",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example70-1",
        "https://www.amazon.co.jp/example70-2",
        "https://www.amazon.co.jp/example70-3",
        "https://www.amazon.co.jp/example70-4",
        "https://www.amazon.co.jp/example70-5"
    ]
  },
  "1-1-0-0-2-2-2-1": {
    "title": "ニューピノワイン71",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example71-1",
        "https://www.amazon.co.jp/example71-2",
        "https://www.amazon.co.jp/example71-3",
        "https://www.amazon.co.jp/example71-4",
        "https://www.amazon.co.jp/example71-5"
    ]
  },
  "1-2-0-0-2-2-2-1": {
    "title": "ニューピノワイン72",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example72-1",
        "https://www.amazon.co.jp/example72-2",
        "https://www.amazon.co.jp/example72-3",
        "https://www.amazon.co.jp/example72-4",
        "https://www.amazon.co.jp/example72-5"
    ]
  },
  "1-3-0-0-2-2-2-1": {
    "title": "ニューピノワイン73",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example73-1",
        "https://www.amazon.co.jp/example73-2",
        "https://www.amazon.co.jp/example73-3",
        "https://www.amazon.co.jp/example73-4",
        "https://www.amazon.co.jp/example73-5"
    ]
  },
  "1-4-0-0-2-2-2-1": {
    "title": "ニューピノワイン74",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example74-1",
        "https://www.amazon.co.jp/example74-2",
        "https://www.amazon.co.jp/example74-3",
        "https://www.amazon.co.jp/example74-4",
        "https://www.amazon.co.jp/example74-5"
    ]
  },
  "1-5-0-0-2-2-2-1": {
    "title": "ニューピノワイン75",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example75-1",
        "https://www.amazon.co.jp/example75-2",
        "https://www.amazon.co.jp/example75-3",
        "https://www.amazon.co.jp/example75-4",
        "https://www.amazon.co.jp/example75-5"
    ]
  },
  "1-1-0-0-2-2-2-2": {
    "title": "ニューピノワイン76",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example76-1",
        "https://www.amazon.co.jp/example76-2",
        "https://www.amazon.co.jp/example76-3",
        "https://www.amazon.co.jp/example76-4",
        "https://www.amazon.co.jp/example76-5"
    ]
  },
  "1-2-0-0-2-2-2-2": {
    "title": "ニューピノワイン77",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example77-1",
        "https://www.amazon.co.jp/example77-2",
        "https://www.amazon.co.jp/example77-3",
        "https://www.amazon.co.jp/example77-4",
        "https://www.amazon.co.jp/example77-5"
    ]
  },
  "1-3-0-0-2-2-2-2": {
    "title": "ニューピノワイン78",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example78-1",
        "https://www.amazon.co.jp/example78-2",
        "https://www.amazon.co.jp/example78-3",
        "https://www.amazon.co.jp/example78-4",
        "https://www.amazon.co.jp/example78-5"
    ]
  },
  "1-4-0-0-2-2-2-2": {
    "title": "ニューピノワイン79",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example79-1",
        "https://www.amazon.co.jp/example79-2",
        "https://www.amazon.co.jp/example79-3",
        "https://www.amazon.co.jp/example79-4",
        "https://www.amazon.co.jp/example79-5"
    ]
  },
  "1-5-0-0-2-2-2-2": {
    "title": "ニューピノワイン80",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example80-1",
        "https://www.amazon.co.jp/example80-2",
        "https://www.amazon.co.jp/example80-3",
        "https://www.amazon.co.jp/example80-4",
        "https://www.amazon.co.jp/example80-5"
    ]
  },
  "2-1-0-0-1-1-1-1": {
    "title": "ケヴェルツワイン81",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example81-1",
        "https://www.amazon.co.jp/example81-2",
        "https://www.amazon.co.jp/example81-3",
        "https://www.amazon.co.jp/example81-4",
        "https://www.amazon.co.jp/example81-5"
    ]
  },
  "2-2-0-0-1-1-1-1": {
    "title": "ケヴェルツワイン82",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example82-1",
        "https://www.amazon.co.jp/example82-2",
        "https://www.amazon.co.jp/example82-3",
        "https://www.amazon.co.jp/example82-4",
        "https://www.amazon.co.jp/example82-5"
    ]
  },
  "2-3-0-0-1-1-1-1": {
    "title": "ケヴェルツワイン83",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example83-1",
        "https://www.amazon.co.jp/example83-2",
        "https://www.amazon.co.jp/example83-3",
        "https://www.amazon.co.jp/example83-4",
        "https://www.amazon.co.jp/example83-5"
    ]
  },
  "2-4-0-0-1-1-1-1": {
    "title": "ケヴェルツワイン84",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example84-1",
        "https://www.amazon.co.jp/example84-2",
        "https://www.amazon.co.jp/example84-3",
        "https://www.amazon.co.jp/example84-4",
        "https://www.amazon.co.jp/example84-5"
    ]
  },
  "2-5-0-0-1-1-1-1": {
    "title": "ケヴェルツワイン85",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example85-1",
        "https://www.amazon.co.jp/example85-2",
        "https://www.amazon.co.jp/example85-3",
        "https://www.amazon.co.jp/example85-4",
        "https://www.amazon.co.jp/example85-5"
    ]
  },
  "2-1-0-0-1-1-1-2": {
    "title": "ケヴェルツワイン86",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example86-1",
        "https://www.amazon.co.jp/example86-2",
        "https://www.amazon.co.jp/example86-3",
        "https://www.amazon.co.jp/example86-4",
        "https://www.amazon.co.jp/example86-5"
    ]
  },
  "2-2-0-0-1-1-1-2": {
    "title": "ケヴェルツワイン87",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example87-1",
        "https://www.amazon.co.jp/example87-2",
        "https://www.amazon.co.jp/example87-3",
        "https://www.amazon.co.jp/example87-4",
        "https://www.amazon.co.jp/example87-5"
    ]
  },
  "2-3-0-0-1-1-1-2": {
    "title": "ケヴェルツワイン88",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example88-1",
        "https://www.amazon.co.jp/example88-2",
        "https://www.amazon.co.jp/example88-3",
        "https://www.amazon.co.jp/example88-4",
        "https://www.amazon.co.jp/example88-5"
    ]
  },
  "2-4-0-0-1-1-1-2": {
    "title": "ケヴェルツワイン89",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example89-1",
        "https://www.amazon.co.jp/example89-2",
        "https://www.amazon.co.jp/example89-3",
        "https://www.amazon.co.jp/example89-4",
        "https://www.amazon.co.jp/example89-5"
    ]
  },
  "2-5-0-0-1-1-1-2": {
    "title": "ケヴェルツワイン90",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example90-1",
        "https://www.amazon.co.jp/example90-2",
        "https://www.amazon.co.jp/example90-3",
        "https://www.amazon.co.jp/example90-4",
        "https://www.amazon.co.jp/example90-5"
    ]
  },
  "2-1-0-0-1-1-2-1": {
    "title": "リースワイン91",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example91-1",
        "https://www.amazon.co.jp/example91-2",
        "https://www.amazon.co.jp/example91-3",
        "https://www.amazon.co.jp/example91-4",
        "https://www.amazon.co.jp/example91-5"
    ]
  },
  "2-2-0-0-1-1-2-1": {
    "title": "リースワイン92",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example92-1",
        "https://www.amazon.co.jp/example92-2",
        "https://www.amazon.co.jp/example92-3",
        "https://www.amazon.co.jp/example92-4",
        "https://www.amazon.co.jp/example92-5"
    ]
  },
  "2-3-0-0-1-1-2-1": {
    "title": "リースワイン93",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example93-1",
        "https://www.amazon.co.jp/example93-2",
        "https://www.amazon.co.jp/example93-3",
        "https://www.amazon.co.jp/example93-4",
        "https://www.amazon.co.jp/example93-5"
    ]
  },
  "2-4-0-0-1-1-2-1": {
    "title": "リースワイン94",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example94-1",
        "https://www.amazon.co.jp/example94-2",
        "https://www.amazon.co.jp/example94-3",
        "https://www.amazon.co.jp/example94-4",
        "https://www.amazon.co.jp/example94-5"
    ]
  },
  "2-5-0-0-1-1-2-1": {
    "title": "リースワイン95",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example95-1",
        "https://www.amazon.co.jp/example95-2",
        "https://www.amazon.co.jp/example95-3",
        "https://www.amazon.co.jp/example95-4",
        "https://www.amazon.co.jp/example95-5"
    ]
  },
  "2-1-0-0-1-1-2-2": {
    "title": "リースワイン96",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example96-1",
        "https://www.amazon.co.jp/example96-2",
        "https://www.amazon.co.jp/example96-3",
        "https://www.amazon.co.jp/example96-4",
        "https://www.amazon.co.jp/example96-5"
    ]
  },
  "2-2-0-0-1-1-2-2": {
    "title": "リースワイン97",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example97-1",
        "https://www.amazon.co.jp/example97-2",
        "https://www.amazon.co.jp/example97-3",
        "https://www.amazon.co.jp/example97-4",
        "https://www.amazon.co.jp/example97-5"
    ]
  },
  "2-3-0-0-1-1-2-2": {
    "title": "リースワイン98",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example98-1",
        "https://www.amazon.co.jp/example98-2",
        "https://www.amazon.co.jp/example98-3",
        "https://www.amazon.co.jp/example98-4",
        "https://www.amazon.co.jp/example98-5"
    ]
  },
  "2-4-0-0-1-1-2-2": {
    "title": "リースワイン99",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example99-1",
        "https://www.amazon.co.jp/example99-2",
        "https://www.amazon.co.jp/example99-3",
        "https://www.amazon.co.jp/example99-4",
        "https://www.amazon.co.jp/example99-5"
    ]
  },
  "2-5-0-0-1-1-2-2": {
    "title": "リースワイン100",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example100-1",
        "https://www.amazon.co.jp/example100-2",
        "https://www.amazon.co.jp/example100-3",
        "https://www.amazon.co.jp/example100-4",
        "https://www.amazon.co.jp/example100-5"
    ]
   },
  "2-1-0-0-1-2-1-1": {
    "title": "ニューシャルワイン101",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example101-1",
        "https://www.amazon.co.jp/example101-2",
        "https://www.amazon.co.jp/example101-3",
        "https://www.amazon.co.jp/example101-4",
        "https://www.amazon.co.jp/example101-5"
    ]
  },
  "2-2-0-0-1-2-1-1": {
    "title": "ニューシャルワイン102",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example102-1",
        "https://www.amazon.co.jp/example102-2",
        "https://www.amazon.co.jp/example102-3",
        "https://www.amazon.co.jp/example102-4",
        "https://www.amazon.co.jp/example102-5"
    ]
  },
  "2-3-0-0-1-2-1-1": {
    "title": "ニューシャルワイン103",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example103-1",
        "https://www.amazon.co.jp/example103-2",
        "https://www.amazon.co.jp/example103-3",
        "https://www.amazon.co.jp/example103-4",
        "https://www.amazon.co.jp/example103-5"
    ]
  },
  "2-4-0-0-1-2-1-1": {
    "title": "ニューシャルワイン104",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example104-1",
        "https://www.amazon.co.jp/example104-2",
        "https://www.amazon.co.jp/example104-3",
        "https://www.amazon.co.jp/example104-4",
        "https://www.amazon.co.jp/example104-5"
    ]
  },
  "2-5-0-0-1-2-1-1": {
    "title": "ニューシャルワイン105",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example105-1",
        "https://www.amazon.co.jp/example105-2",
        "https://www.amazon.co.jp/example105-3",
        "https://www.amazon.co.jp/example105-4",
        "https://www.amazon.co.jp/example105-5"
    ]
  },
  "2-1-0-0-1-2-1-2": {
    "title": "ニューシャルワイン106",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example106-1",
        "https://www.amazon.co.jp/example106-2",
        "https://www.amazon.co.jp/example106-3",
        "https://www.amazon.co.jp/example106-4",
        "https://www.amazon.co.jp/example106-5"
    ]
  },
  "2-2-0-0-1-2-1-2": {
    "title": "ニューシャルワイン107",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example107-1",
        "https://www.amazon.co.jp/example107-2",
        "https://www.amazon.co.jp/example107-3",
        "https://www.amazon.co.jp/example107-4",
        "https://www.amazon.co.jp/example107-5"
    ]
  },
  "2-3-0-0-1-2-1-2": {
    "title": "ニューシャルワイン108",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example108-1",
        "https://www.amazon.co.jp/example108-2",
        "https://www.amazon.co.jp/example108-3",
        "https://www.amazon.co.jp/example108-4",
        "https://www.amazon.co.jp/example108-5"
    ]
  },
  "2-4-0-0-1-2-1-2": {
    "title": "ニューシャルワイン109",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example109-1",
        "https://www.amazon.co.jp/example109-2",
        "https://www.amazon.co.jp/example109-3",
        "https://www.amazon.co.jp/example109-4",
        "https://www.amazon.co.jp/example109-5"
    ]
  },
  "2-5-0-0-1-2-1-2": {
    "title": "ニューシャルワイン110",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example110-1",
        "https://www.amazon.co.jp/example110-2",
        "https://www.amazon.co.jp/example110-3",
        "https://www.amazon.co.jp/example110-4",
        "https://www.amazon.co.jp/example110-5"
    ]
   },
  "2-1-0-0-1-2-2-1": {
    "title": "ブルシャルワイン111",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example111-1",
        "https://www.amazon.co.jp/example111-2",
        "https://www.amazon.co.jp/example111-3",
        "https://www.amazon.co.jp/example111-4",
        "https://www.amazon.co.jp/example111-5"
    ]
  },
  "2-2-0-0-1-2-2-1": {
    "title": "ブルシャルワイン112",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example112-1",
        "https://www.amazon.co.jp/example112-2",
        "https://www.amazon.co.jp/example112-3",
        "https://www.amazon.co.jp/example112-4",
        "https://www.amazon.co.jp/example112-5"
    ]
  },
  "2-3-0-0-1-2-2-1": {
    "title": "ブルシャルワイン113",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example113-1",
        "https://www.amazon.co.jp/example113-2",
        "https://www.amazon.co.jp/example113-3",
        "https://www.amazon.co.jp/example113-4",
        "https://www.amazon.co.jp/example113-5"
    ]
  },
  "2-4-0-0-1-2-2-1": {
    "title": "ブルシャルワイン114",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example114-1",
        "https://www.amazon.co.jp/example114-2",
        "https://www.amazon.co.jp/example114-3",
        "https://www.amazon.co.jp/example114-4",
        "https://www.amazon.co.jp/example114-5"
    ]
  },
  "2-5-0-0-1-2-2-1": {
    "title": "ブルシャルワイン115",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example115-1",
        "https://www.amazon.co.jp/example115-2",
        "https://www.amazon.co.jp/example115-3",
        "https://www.amazon.co.jp/example115-4",
        "https://www.amazon.co.jp/example115-5"
    ]
  },
  "2-1-0-0-1-2-2-2": {
    "title": "ブルシャル116",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example116-1",
        "https://www.amazon.co.jp/example116-2",
        "https://www.amazon.co.jp/example116-3",
        "https://www.amazon.co.jp/example116-4",
        "https://www.amazon.co.jp/example116-5"
    ]
  },
  "2-2-0-0-1-2-2-2": {
    "title": "ブルシャル117",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example117-1",
        "https://www.amazon.co.jp/example117-2",
        "https://www.amazon.co.jp/example117-3",
        "https://www.amazon.co.jp/example117-4",
        "https://www.amazon.co.jp/example117-5"
    ]
  },
  "2-3-0-0-1-2-2-2": {
    "title": "ブルシャル118",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example118-1",
        "https://www.amazon.co.jp/example118-2",
        "https://www.amazon.co.jp/example118-3",
        "https://www.amazon.co.jp/example118-4",
        "https://www.amazon.co.jp/example118-5"
    ]
  },
  "2-4-0-0-1-2-2-2": {
    "title": "ブルシャル119",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example119-1",
        "https://www.amazon.co.jp/example119-2",
        "https://www.amazon.co.jp/example119-3",
        "https://www.amazon.co.jp/example119-4",
        "https://www.amazon.co.jp/example119-5"
    ]
  },
  "2-5-0-0-1-2-2-2": {
    "title": "ブルシャル120",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example120-1",
        "https://www.amazon.co.jp/example120-2",
        "https://www.amazon.co.jp/example120-3",
        "https://www.amazon.co.jp/example120-4",
        "https://www.amazon.co.jp/example120-5"
    ]
  },
  "2-1-0-0-2-1-1-1": {
    "title": "ソーヴィワイン121",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example121-1",
        "https://www.amazon.co.jp/example121-2",
        "https://www.amazon.co.jp/example121-3",
        "https://www.amazon.co.jp/example121-4",
        "https://www.amazon.co.jp/example121-5"
    ]
  },
  "2-2-0-0-2-1-1-1": {
    "title": "ソーヴィワイン122",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example122-1",
        "https://www.amazon.co.jp/example122-2",
        "https://www.amazon.co.jp/example122-3",
        "https://www.amazon.co.jp/example122-4",
        "https://www.amazon.co.jp/example122-5"
    ]
  },
  "2-3-0-0-2-1-1-1": {
    "title": "ソーヴィワイン123",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example123-1",
        "https://www.amazon.co.jp/example123-2",
        "https://www.amazon.co.jp/example123-3",
        "https://www.amazon.co.jp/example123-4",
        "https://www.amazon.co.jp/example123-5"
    ]
  },
  "2-4-0-0-2-1-1-1": {
    "title": "ソーヴィワイン124",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example124-1",
        "https://www.amazon.co.jp/example124-2",
        "https://www.amazon.co.jp/example124-3",
        "https://www.amazon.co.jp/example124-4",
        "https://www.amazon.co.jp/example124-5"
    ]
  },
  "2-5-0-0-2-1-1-1": {
    "title": "ソーヴィワイン125",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example125-1",
        "https://www.amazon.co.jp/example125-2",
        "https://www.amazon.co.jp/example125-3",
        "https://www.amazon.co.jp/example125-4",
        "https://www.amazon.co.jp/example125-5"
    ]
  },
  "2-1-0-0-2-1-1-2": {
    "title": "ソーヴィワイン126",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example126-1",
        "https://www.amazon.co.jp/example126-2",
        "https://www.amazon.co.jp/example126-3",
        "https://www.amazon.co.jp/example126-4",
        "https://www.amazon.co.jp/example126-5"
    ]
  },
  "2-2-0-0-2-1-1-2": {
    "title": "ソーヴィワイン127",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example127-1",
        "https://www.amazon.co.jp/example127-2",
        "https://www.amazon.co.jp/example127-3",
        "https://www.amazon.co.jp/example127-4",
        "https://www.amazon.co.jp/example127-5"
    ]
  },
  "2-3-0-0-2-1-1-2": {
    "title": "ソーヴィワイン128",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example128-1",
        "https://www.amazon.co.jp/example128-2",
        "https://www.amazon.co.jp/example128-3",
        "https://www.amazon.co.jp/example128-4",
        "https://www.amazon.co.jp/example128-5"
    ]
  },
  "2-4-0-0-2-1-1-2": {
    "title": "ソーヴィワイン129",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example129-1",
        "https://www.amazon.co.jp/example129-2",
        "https://www.amazon.co.jp/example129-3",
        "https://www.amazon.co.jp/example129-4",
        "https://www.amazon.co.jp/example129-5"
    ]
  },
  "2-5-0-0-2-1-1-2": {
    "title": "ソーヴィワイン130",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example130-1",
        "https://www.amazon.co.jp/example130-2",
        "https://www.amazon.co.jp/example130-3",
        "https://www.amazon.co.jp/example130-4",
        "https://www.amazon.co.jp/example130-5"
    ]
  },
  "2-1-0-0-2-1-2-1": {
    "title": "ケヴェルツワイン131",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example131-1",
        "https://www.amazon.co.jp/example131-2",
        "https://www.amazon.co.jp/example131-3",
        "https://www.amazon.co.jp/example131-4",
        "https://www.amazon.co.jp/example131-5"
    ]
  },
  "2-2-0-0-2-1-2-1": {
    "title": "ケヴェルツワイン132",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example132-1",
        "https://www.amazon.co.jp/example132-2",
        "https://www.amazon.co.jp/example132-3",
        "https://www.amazon.co.jp/example132-4",
        "https://www.amazon.co.jp/example132-5"
    ]
  },
  "2-3-0-0-2-1-2-1": {
    "title": "ケヴェルツワイン133",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example133-1",
        "https://www.amazon.co.jp/example133-2",
        "https://www.amazon.co.jp/example133-3",
        "https://www.amazon.co.jp/example133-4",
        "https://www.amazon.co.jp/example133-5"
    ]
  },
  "2-4-0-0-2-1-2-1": {
    "title": "ケヴェルツワイン134",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example134-1",
        "https://www.amazon.co.jp/example134-2",
        "https://www.amazon.co.jp/example134-3",
        "https://www.amazon.co.jp/example134-4",
        "https://www.amazon.co.jp/example134-5"
    ]
  },
  "2-5-0-0-2-1-2-1": {
    "title": "ケヴェルツワイン135",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example135-1",
        "https://www.amazon.co.jp/example135-2",
        "https://www.amazon.co.jp/example135-3",
        "https://www.amazon.co.jp/example135-4",
        "https://www.amazon.co.jp/example135-5"
    ]
  },
  "2-1-0-0-2-1-2-2": {
    "title": "ケヴェルツワイン136",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example136-1",
        "https://www.amazon.co.jp/example136-2",
        "https://www.amazon.co.jp/example136-3",
        "https://www.amazon.co.jp/example136-4",
        "https://www.amazon.co.jp/example136-5"
    ]
  },
  "2-2-0-0-2-1-2-2": {
    "title": "ケヴェルツワイン137",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example137-1",
        "https://www.amazon.co.jp/example137-2",
        "https://www.amazon.co.jp/example137-3",
        "https://www.amazon.co.jp/example137-4",
        "https://www.amazon.co.jp/example137-5"
    ]
  },
  "2-3-0-0-2-1-2-2": {
    "title": "ケヴェルツワイン138",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example138-1",
        "https://www.amazon.co.jp/example138-2",
        "https://www.amazon.co.jp/example138-3",
        "https://www.amazon.co.jp/example138-4",
        "https://www.amazon.co.jp/example138-5"
    ]
  },
  "2-4-0-0-2-1-2-2": {
    "title": "ケヴェルツワイン139",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example139-1",
        "https://www.amazon.co.jp/example139-2",
        "https://www.amazon.co.jp/example139-3",
        "https://www.amazon.co.jp/example139-4",
        "https://www.amazon.co.jp/example139-5"
    ]
  },
  "2-5-0-0-2-1-2-2": {
    "title": "ケヴェルツワイン140",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example140-1",
        "https://www.amazon.co.jp/example140-2",
        "https://www.amazon.co.jp/example140-3",
        "https://www.amazon.co.jp/example140-4",
        "https://www.amazon.co.jp/example140-5"
    ]
  },
  "2-1-0-0-2-2-1-1": {
    "title": "ニューシャルワイン141",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example141-1",
        "https://www.amazon.co.jp/example141-2",
        "https://www.amazon.co.jp/example141-3",
        "https://www.amazon.co.jp/example141-4",
        "https://www.amazon.co.jp/example141-5"
    ]
  },
  "2-2-0-0-2-2-1-1": {
    "title": "ニューシャルワイン142",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example142-1",
        "https://www.amazon.co.jp/example142-2",
        "https://www.amazon.co.jp/example142-3",
        "https://www.amazon.co.jp/example142-4",
        "https://www.amazon.co.jp/example142-5"
    ]
  },
  "2-3-0-0-2-2-1-1": {
    "title": "ニューシャルワイン143",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example143-1",
        "https://www.amazon.co.jp/example143-2",
        "https://www.amazon.co.jp/example143-3",
        "https://www.amazon.co.jp/example143-4",
        "https://www.amazon.co.jp/example143-5"
    ]
  },
  "2-4-0-0-2-2-1-1": {
    "title": "ニューシャルワイン144",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example144-1",
        "https://www.amazon.co.jp/example144-2",
        "https://www.amazon.co.jp/example144-3",
        "https://www.amazon.co.jp/example144-4",
        "https://www.amazon.co.jp/example144-5"
    ]
  },
  "2-5-0-0-2-2-1-1": {
    "title": "ニューシャルワイン145",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example145-1",
        "https://www.amazon.co.jp/example145-2",
        "https://www.amazon.co.jp/example145-3",
        "https://www.amazon.co.jp/example145-4",
        "https://www.amazon.co.jp/example145-5"
    ]
  },
  "2-1-0-0-2-2-1-2": {
    "title": "ニューシャルワイン146",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example146-1",
        "https://www.amazon.co.jp/example146-2",
        "https://www.amazon.co.jp/example146-3",
        "https://www.amazon.co.jp/example146-4",
        "https://www.amazon.co.jp/example146-5"
    ]
  },
  "2-2-0-0-2-2-1-2": {
    "title": "ニューシャルワイン147",
    "description": "フルーティで軽やかな赤ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example147-1",
        "https://www.amazon.co.jp/example147-2",
        "https://www.amazon.co.jp/example147-3",
        "https://www.amazon.co.jp/example147-4",
        "https://www.amazon.co.jp/example147-5"
    ]
  },
  "2-3-0-0-2-2-1-2": {
    "title": "ニューシャルワイン148",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example148-1",
        "https://www.amazon.co.jp/example148-2",
        "https://www.amazon.co.jp/example148-3",
        "https://www.amazon.co.jp/example148-4",
        "https://www.amazon.co.jp/example148-5"
    ]
  },
  "2-4-0-0-2-2-1-2": {
    "title": "ニューシャルワイン149",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example149-1",
        "https://www.amazon.co.jp/example149-2",
        "https://www.amazon.co.jp/example149-3",
        "https://www.amazon.co.jp/example149-4",
        "https://www.amazon.co.jp/example149-5"
    ]
  },
  "2-5-0-0-2-2-1-2": {
    "title": "ニューシャルワイン150",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example150-1",
        "https://www.amazon.co.jp/example150-2",
        "https://www.amazon.co.jp/example150-3",
        "https://www.amazon.co.jp/example150-4",
        "https://www.amazon.co.jp/example150-5"
    ]
  },
  "2-1-0-0-2-2-2-1": {
    "title": "ブルシャルワイン151",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example151-1",
        "https://www.amazon.co.jp/example151-2",
        "https://www.amazon.co.jp/example151-3",
        "https://www.amazon.co.jp/example151-4",
        "https://www.amazon.co.jp/example151-5"
    ]
  },
  "2-2-0-0-2-2-2-1": {
    "title": "ブルシャルワイ152",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example152-1",
        "https://www.amazon.co.jp/example152-2",
        "https://www.amazon.co.jp/example152-3",
        "https://www.amazon.co.jp/example152-4",
        "https://www.amazon.co.jp/example152-5"
    ]
  },
  "2-3-0-0-2-2-2-1": {
    "title": "ブルシャルワイン153",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example153-1",
        "https://www.amazon.co.jp/example153-2",
        "https://www.amazon.co.jp/example153-3",
        "https://www.amazon.co.jp/example153-4",
        "https://www.amazon.co.jp/example153-5"
    ]
  },
  "2-4-0-0-2-2-2-1": {
    "title": "ブルシャルワイン154",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example154-1",
        "https://www.amazon.co.jp/example154-2",
        "https://www.amazon.co.jp/example154-3",
        "https://www.amazon.co.jp/example154-4",
        "https://www.amazon.co.jp/example154-5"
    ]
  },
  "2-5-0-0-2-2-2-1": {
    "title": "ブルシャルワイン155",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example155-1",
        "https://www.amazon.co.jp/example155-2",
        "https://www.amazon.co.jp/example155-3",
        "https://www.amazon.co.jp/example155-4",
        "https://www.amazon.co.jp/example155-5"
    ]
  },
  "2-1-0-0-2-2-2-2": {
    "title": "ニューシャルワイン156",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example156-1",
        "https://www.amazon.co.jp/example156-2",
        "https://www.amazon.co.jp/example156-3",
        "https://www.amazon.co.jp/example156-4",
        "https://www.amazon.co.jp/example156-5"
    ]
  },
  "2-2-0-0-2-2-2-2": {
    "title": "ニューシャルワイン157",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example157-1",
        "https://www.amazon.co.jp/example157-2",
        "https://www.amazon.co.jp/example157-3",
        "https://www.amazon.co.jp/example157-4",
        "https://www.amazon.co.jp/example157-5"
    ]
  },
  "2-3-0-0-2-2-2-2": {
    "title": "ニューシャルワイン158",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example158-1",
        "https://www.amazon.co.jp/example158-2",
        "https://www.amazon.co.jp/example158-3",
        "https://www.amazon.co.jp/example158-4",
        "https://www.amazon.co.jp/example158-5"
    ]
  },
  "2-4-0-0-2-2-2-2": {
    "title": "ニューシャルワイン159",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example159-1",
        "https://www.amazon.co.jp/example159-2",
        "https://www.amazon.co.jp/example159-3",
        "https://www.amazon.co.jp/example159-4",
        "https://www.amazon.co.jp/example159-5"
    ]
  },
  "2-5-0-0-2-2-2-2": {
    "title": "ニューシャルワイン160",
    "description": "フルーティで軽やかな白ワインです。",
    "amazonLink": [
        "https://www.amazon.co.jp/example160-1",
        "https://www.amazon.co.jp/example160-2",
        "https://www.amazon.co.jp/example160-3",
        "https://www.amazon.co.jp/example160-4",
        "https://www.amazon.co.jp/example160-5"
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
    resultContainer.innerHTML = `
        <h3>${result.title}</h3>
        <p>${result.description}</p>
        ${
            result.amazonLink.length > 0
                ? result.amazonLink.map(link => `<a href="${link}" target="_blank" class="amazon-link">Amazonで見る</a>`).join("<br>")
                : ""
        }
    `;
}

// ページ読み込み時に診断結果を表示
window.onload = generateResult;
