// ライブラリのインポート
import axios from "axios";

// formタグの取得
const form = document.querySelector("form")!;
// 入力フォームの要素取得
const addressInput = document.getElementById("address")! as HTMLInputElement; // 型キャスト

const GOOGLE_API_KEY = "AIzaSyDVenAc0qLmBFLeQuSP1A8HwGdkg3iEDpc";

// 型エイリアスの定義
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

// declare var google: any;

// イベントリスナー用関数
function searchAddressHandler(event: Event) {
  // フォームがHTTPリクエストを送るのを阻止
  event.preventDefault();
  // ユーザー入力情報の取得
  const enteredAddress = addressInput.value;
  // Google APIに送信(httpリクエストを送り座標値を取得)
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("座標を取得できませんでした");
      }
      // 緯度と経度の取得
      const coordinates = response.data.results[0].geometry.location;
      // mapの描画
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );
      // マーカーの追加
      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

// フォームタグのイベントハンドラー
form.addEventListener("submit", searchAddressHandler);
