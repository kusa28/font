const input = document.getElementById("input");
const convertButton = document.getElementById("convert");
const output = document.getElementById("output");

// Google Fonts APIからフォントを読み込む
WebFont.load({
  google: {
    families: ["Roboto", "Montserrat"]
  }
});

convertButton.addEventListener("click", function() {
  // テキストボックスからテキストを取得する
  const text = input.value;

  // ランダムにフォントを選択する
  const fonts = ["DotGothic16"];
  const font = fonts[Math.floor(Math.random() * fonts.length)];

  // 出力エリアのスタイルを設定する
  output.style.fontFamily = font;
  output.innerHTML = text;
});
