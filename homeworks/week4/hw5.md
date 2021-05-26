## 請以自己的話解釋 API 是什麼

API（Application Programming Interface）的中文名稱為應用程式介面，扮演應用程式和應用程式之間的橋樑。透過 API 可以讓雙方交換資料。向對方發出 request 要求所想要的資料，對方 response 資料回來,

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
201 Created : 請求成功且新的資料成功被創建

403 Forbidden : 伺服器成功解析請求但是用戶端沒有存取該資源的權限

505 HTTP Version Not Supported : 請求使用的 HTTP 版本伺服器不支援。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

餐廳 API 網址 : https://www.benliu-restaurants.com/api
| 說明      | method | path | 參數 | 範例 |
| ---------------- | ------ | ---- | ----- | ------- |
| 取得所有餐廳資料    |GET    |/restaurants|_limit : 限制回傳資料數量|/restaurants?_limit=10|
| 取得單一餐廳資料    |GET    |/restaurants/:id|無           |/restaurants/1|
| 刪除餐廳          |DELETE  |/restaurants/:id|無          |/restaurants/1 |
| 新增餐廳          |POST    |/restaurants|name: 餐廳名| 無        |
| 更改餐廳          |PATCH   |/restaurants/:id|name: 餐廳名| /restaurants/1  |