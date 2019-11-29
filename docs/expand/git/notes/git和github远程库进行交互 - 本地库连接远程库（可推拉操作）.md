# 本地库连接远程库（可推拉操作）

1. 在本地库创建远程库地址别名

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                    
   
   $ git remote add origin https://github.com/taotao-github/zt_git_test.git        
   
      # 使用git remote add origin（这里的origin就是后面远程库地址的别名，可以随意命名）
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                      
   
   $ git remote -v    # 使用git remote -v 可以查看所设置的远程库地址的别名 
   
   origin  https://github.com/taotao-github/zt_git_test.git (fetch)                
   
   origin  https://github.com/taotao-github/zt_git_test.git (push)                 
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

2. 推送本地库的内容到远程库(推送成功即连接成功)

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)  
   
   $ git push origin master  # 使用git push origin（origin就是刚才设置的远程库地址的别名。）master（这里是值推送的是本地库的master分支，也可以推送其他的分支）
   
   Enumerating objects: 33, done. 
   
   Counting objects: 100% (33/33), done. 
   
   Delta compression using up to 8 threads 
   
   Compressing objects: 100% (19/19), done. 
   
   Writing objects: 100% (33/33), 2.80 KiB | 478.00 KiB/s, done. 
   
   Total 33 (delta 7), reused 0 (delta 0) 
   
   remote: Resolving deltas: 100% (7/7), done. 
   
   To https://github.com/taotao-github/zt_git_test.git 
   
    * [new branch]      master -> master  # 这行信息表示，在远程也创建一个master分支
   
    
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```