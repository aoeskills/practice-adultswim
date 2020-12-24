## ui component
負責不同頁面皆相同的地方
content 這個元件負責捲動網頁內容，並且被page引用。

## contentBlock
content 中的layout與內容
### 例：
- fullPage
- h1
- subtitle

## page component
利用 content 與 contentBlock 製作網頁內容

## container component
container component 有兩種類型
- 動畫
- 偵測使用者互動
### 例：
- doFade
- doWipe
- watchIsOnScreen
- watchPointPosition
