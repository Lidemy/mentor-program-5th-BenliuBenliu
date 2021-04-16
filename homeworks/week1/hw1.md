## 交作業流程

1. 點選課程"如何交作業"中所提供的 [Github Classroom 連結](https://classroom.github.com/a/yNNrtNyW)
2. 開啟 Git Bash
3. 切換至本地的目錄位置 
4. 點擊頁面的 code 按鈕複製 HTTPS 的[連結](https://github.com/Lidemy/mentor-program-5th-BenliuBenliu.git)
5. 將 Github 端的 repo 複製到本地端 : `git clone [Web URL]`
6. 新增一個 branch : `git branch week1` 
7. 切換到新的 branch : `git checkout week1`
  >同時完成新增與切換 branch 的動作 : `git checkout -b week1`
  
  >所有的動作都是在 branch 上完成
8. 開始撰寫作業
9. 將完成的作業做 commit 的動作 : `git commit -am "Finished hw"`
10. 將 commit 完的內容 push 上去至 Github 端 : `git push origin week1`
11. 到 GitHub 上點選 open pull request，接著發出 pull request
12. 把 PR 的連結複製起來到學習系統上繳交作業

---

## 作業改完後

1. 切換到 master : `git checkout master`
2. 把最新的改動拉下來 : `git pull origin master`
3. 刪除已經 merge 的 branch : `git branch -d week1`




