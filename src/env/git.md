
# Git

1. 至 Git 網站下載 [https://git-scm.com/](https://git-scm.com/)

2. 開始安裝
    
   ![](../asset/img/chapter1/git_1.png)
    
3. 選擇安裝位置
    
   ![](../asset/img/chapter1/git_2.png)
    
4. 選擇安裝內容
    
   ![](../asset/img/chapter1/git_3.png)
    
5. 捷徑設定，點選 Next
    
   ![](../asset/img/chapter1/git_4.png)
    
6. 預設編輯器，這邊選擇了 VSCode 有需要自行更改
    
   ![](../asset/img/chapter1/git_5.png)
    
7. 環境 PATH 設定，選用 Recommand
    
   ![](../asset/img/chapter1/git_6.png)
    
8. 連線傳輸加密設定，選用 OpenSSL
    
   ![](../asset/img/chapter1/git_7.png)
    
9. 選第一個隨作業系統 CRLF 跟 LF 自動轉換
    
   ![](../asset/img/chapter1/git_8.png)
    
10. 選擇 Use Windows's default console window
    
   ![](../asset/img/chapter1/git_9.png)
    
11. 額外的設定，Next
    
   ![](../asset/img/chapter1/git_10.png)
    
12. 安裝
    
   ![](../asset/img/chapter1/git_11.png)
    
13. 安裝完成
    
   ![](../asset/img/chapter1/git_12.png)
    
14. 測試及設定: 開啟 cmd，輸入以下指令，確認安裝完成
    
    ```bash
    $ git --help
    
    ```
    
   ![](../asset/img/chapter1/git_13.png)
    
15. 設定全域 username 跟 useremail
    
    ```bash
    $ git config --global user.name "你的名稱"
    $ git config --global user.email "你的信箱"
    
    ```
    
   ![](../asset/img/chapter1/git_14.png)
    
16. 檢查設定是否完成，輸入以下指令，會顯示剛才設定
    
    ```bash
    $ git config --global --list
    
    ```
    
   ![](../asset/img/chapter1/git_15.png)