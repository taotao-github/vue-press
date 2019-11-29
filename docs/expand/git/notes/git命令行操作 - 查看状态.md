# 查看项目所在状态

1. 项目中没有任何文件和目录，执行 <font color=#ae00e0>git status</font> 命令。效果如下：

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                        
   
   $ git status  # 查看状态命令
   
   On branch master   # 当前所在的分支（master分支上）
   
                                                                                   
   
   No commits yet   # 没有提交任何东西（意思是本地库还没有任何东西）
   
                                                                                   
   
   nothing to commit (create/copy files and use "git add" to track)     
   # 没有任何东西可以提交（意思是暂存区还没有任何东西可以提交到本地库）（后面括号是建议我们创建或复制文件到本目录，使用git add 添加到暂存区）        
   
                                                           
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

    

   

2. 在项目中创建一个good.txt文件，再使用 <font color=#ae00e0>git status</font> 命令查看。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                    
   
   $ vim good.txt    # linux 命令：创建一个good.txt文件（内容: this one txt file） 
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
   
   $ git status                                                                    
   
   On branch master                                                                
   
                                                                                   
   
   No commits yet                                                                  
   
                                                                                   
   
   Untracked files:  # 发现未追踪的文件 
   
     (use "git add ..." to include in what will be committed)   # 建议我们使用git add 将文件添加到暂存区           
   
                                                                                   
   
           good.txt      # 这里展示未追踪的文件是good.txt                                                       
   
                                                                                   
   
   nothing added to commit but untracked files present (use "git add" to track)  # 意思是没有任何东西添加到暂存区，但是发现有未追踪的文件  
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

3. 依照提示，执行 git add good.txt，效果

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                        
   
   $ git add good.txt      # 执行git add + 文件名                                                        
   
   warning: LF will be replaced by CRLF in good.txt.                               
   
   The file will have its original line endings in your working directory          
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

4. 再次使用 <font color=#ae00e0>git status</font> 命令查看

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                        
   
   $ git status                                                                    
   
   On branch master                                                                
   
                                                                                   
   
   No commits yet    # 本地库还是没有任何东西       
   
                                                                                   
   
   Changes to be committed:  # 意思是good.txt文件已经放在暂存区里了
   
     (use "git rm --cached ..." to unstage)  # 文件已放进暂存区，但是我们可以使用git rm –cached + filename,将good.txt文件移除暂存区（也就是让它重新变为未追踪文件状态）
   
                                                                                   
   
           new file:   good.txt                                                    
   
                                                                                  
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

5. 使用git commit命令将文件冲暂存区提交到本地库。这里我们直接使用git commit -m ‘提交信息’ +文件，也可以使用git commit + 文件，但是会进出输入提示信息的窗口里面（也就是我们-m 后输入的信息）。效果如下：

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                          
   
   $ git commit -m  'this my fisrt commit' good.txt    # 执行提交命令
   
   warning: LF will be replaced by CRLF in good.txt.                               
   
   The file will have its original line endings in your working directory          
   
   [master (root-commit) b9617d6] this my fisrt commit    # -m 输入的提示信息
   
    1 file changed, 1 insertion(+)                                                 
   
    create mode 100644 good.txt                                                    
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

6. 提交到本地库后，再次使用<font color=#ae00e0>git status</font>命令查看状态

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
   
   $ git status                                                                    
   
   On branch master                                                                
   
   nothing to commit, working tree clean   # 暂存区没任何东西提交，工作区是干净的（也就是没有任何修改）
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

7. 接着我们修改good.txt文件的内容，在次使用git status查看状态

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
   
   $ git status                                                                    
   
   On branch master                                                                
   
   Changes not staged for commit: # 意思修改后没有添加到暂存区
   
     (use "git add ..." to update what will be committed)  # 使用git add 添加到暂存区
   
     (use "git checkout -- <file> ..." to discard changes in working directory)     # 使用git checkout --<file>撤销工作区的改变
   
                                                                                   
   
           modified:   good.txt   # 修改的文件                                                
   
                                                                                   
   
   no changes added to commit (use "git add" and/or "git commit -a")  # 意思是暂存区没有变化，使用git add 或者git add -a （提交全部）***     
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

8. 执行git add + file 或者 git add -a，再使用 <font color=#ae00e0>git status</font> 命令查看

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                   
   
   $ git add good.txt                                                              
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
   
   $ git status                                                                    
   
   On branch master                                                                
   
   Changes to be committed:                                                        
   
     (use "git reset HEAD ..." to unstage)    # 意思是使用此命令恢复到哪个历史版本，后面讲解                              
   
                                                                                   
   
           modified:   good.txt                                                    
   
                                                                                   
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

   

9. 紧接着重复之前的操作，执行git commit将修改的内容提交到本地库。



**总结：**

1. 状态查看操作 (git status)

   可以查看工作区，暂存区的状态

2. 添加操作（git add）

   可以将工作区文件的新增修改添加到暂存区

3. 提交操作（git commit）

   将暂存区里面的内容提交到本地库