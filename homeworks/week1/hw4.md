## 跟你朋友介紹 Git

Git 是一個分散式**版本控制**軟體，用來記錄每一個檔案的所有狀態變化的歷程。

1. 開啟 Git Bash
2. 切換至本地的目錄位置
3. 進入要做版本控制的資料夾做 Git 初始化 : `git init`
4. 將需要做版本控制的檔案加入索引 : `git add [file name]`
>加入資料夾內所有的檔案 : `git add.`
5. 把目前的索引狀態儲存為這一次的版本 : `git commit -m "message"`
> "message" 可以為這一次的版本做註解
6. 將本地端的 repo push 到遠端 : `git push origin [branch name]`
---
* 列出版本庫的**歷史記錄** : `git log`
* 查詢目前目錄的**狀態** : `git status`
* 把遠端的 repo 抓下來 : `git pull origin [branch name]`
