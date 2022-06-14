# Gradle 7.4.2

1. 下載連結：[https://gradle.org/next-steps/?version=7.4.2&format=all](https://gradle.org/next-steps/?version=7.4.2&format=all)
2. 建立安裝位置資料夾 ( 範例使用 : C:\var\gradle )
3. 解壓縮檔案至放在該資料夾
    
    ![unzip gradle](../asset/img/chapter1/gradle_1.png)
    
4. 建立系統環境變數 -> 在設定查找 "系統環境"
5. 點選 "環境變數"
6. 點選 "系統變數" 下的 "Path" 後點選 "編輯"
7. 點選 "新增"
8. 新增路徑 "C:\var\gradle\gradle-7.4.2\bin"
    
    > 選用自訂路徑的人則填自訂路徑
    > 
    
    ![](../asset/img/chapter1/gradle_2.png)
    
9. 設定完後，測試是否安裝成功，開啟 cmd 輸入
    
    ```bash
    $ gradle --version
    ```
    
    ![cmd gradle --version](../asset/img/chapter1/gradle_3.png)
    