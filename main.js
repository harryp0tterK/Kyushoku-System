
var api_url = 'https://script.googleusercontent.com/a/macros/o365.nagano-ngn.ed.jp/echo?user_content_key=XGAjF3PvknLa-NvHv3QCW2cIVrwQCg1BqDDfa0pwUIazoYhZWh_ApVS2rbL1Hd68joWhFk8Ashr4yKEGNeQwiRctjyhjLDKaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKA0S0bATxhH2qHj9KzWNCAMNi3dJHZDj_lLhyHCd5hHa7v11V1qbzc9JXqU7IJh1mnTvrcr5M2tb2LpnA4oGQouXKYJzI3SeXsmyx3Mk5w6r-yq5zYdQhLa2395z9gMxhVj8by5JnHDhpqBASd6hfbB&lib=MT5uBc16A0LjHeW9KTBH5HkdFSUckXPYm'; //生成したAPIのURLを指定

fetch(api_url,{
    method: 'GET',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    //  'Access-Control-Allow-Origin': '*'
},
})
.then(function (fetch_data) {
  return fetch_data.json();
})
.then(function (json) {
  for (var i in json) {
    // jsonの要素数だけ回す

    var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
    clone_element.classList.remove('js-based'); //複製した要素からクラス削除

    clone_element.querySelector('.name').textContent = json[i].name;
    clone_element.querySelector('.shushoku').textContent = json[i].shushoku;
    clone_element.querySelector('.shusai').textContent = json[i].shusai; 
    clone_element.querySelector('.fukusai').textContent = json[i].fukusai;
    clone_element.querySelector('.shirumono').textContent = json[i].shirumono;

    base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
  }
});
