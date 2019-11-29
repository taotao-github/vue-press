# 查看本地库所有版本

> 为了更好的查看版本，这里我进行多个修改，然后添加、提交，使其产生多个历史版本



1. 执行 <font color=#ae00e0>git log</font> 命令查看所有版本。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                              
   
   $ git log   # 查看所有版本
   
   commit 926ca3a42257b0338999170aec450acdf29d78d9 (HEAD -> master)  # head是一个指针，指向当前正在使用的版本，后面我们可以通过控制head实现版本的切换。（黄色字符是版本的hash值）
   
   Author: zt_git    # 提交人                                                                        
   
   Date:   Fri Aug 2 13:07:00 2019 +0800     # 提交时间                                                                                   
   
                                                                                                                        
   
       6次提交     # 提交所填的提示信息                                                                                             
   
                                                                                                                        
   
   commit bf3f7fe96c7ef6aeb2100c36cd9b2e53201413ae                                                                      
   
   Author: zt_git                                                                                     
   
   Date:   Fri Aug 2 13:06:27 2019 +0800                                                                                
   
                                                                                                                        
   
       5次提交                                                                                                          
   
                                                                                                                        
   
   commit 72608cf3141c54949d09eef2c9d56b8a963fbd74                                                                      
   
   Author: zt_git 
   
   … 后面还有很多
   ```

   

2. 使用 <font color=#ae00e0>git log --pretty=oneline</font>使所有的版本以一行显示。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                             
   
   $ git log --pretty=oneline                                                                                           
   
   926ca3a42257b0338999170aec450acdf29d78d9 (HEAD -> master)  6次提交                                                    
   
   bf3f7fe96c7ef6aeb2100c36cd9b2e53201413ae 5次提交                                                                     
   
   72608cf3141c54949d09eef2c9d56b8a963fbd74 4次提交                                                                     
   
   86c70511707a48d4fbd22572ce477d330cf96cbc 3次提交                                                                     
   
   9e4c1cffba771723adbab1b6e0b9446b67100a47 2次提交 
   ```

   

3. 直接使用<font color=#ae00e0>git log --oneline</font>查看（缩短了hash值）

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                           
   
   $ git log --oneline                                                                                                  
   
   926ca3a (HEAD -> master) 6次提交                                                                                     
   
   bf3f7fe 5次提交                                                                                                      
   
   72608cf 4次提交                                                                                                      
   
   86c7051 3次提交                                                                                                      
   
   9e4c1cf 2次提交
   
   
   ```

   

4. 此外还可以使用<font color=#ae00e0>git reflog</font>命令查看

   ```bash
    DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master) 
    
    $ git reflog 
    
    926ca3a (HEAD -> master) HEAD@{0}: commit: 6次提交 
    
    bf3f7fe HEAD@{1}: commit: 5次提交 
    
    72608cf HEAD@{2}: commit: 4次提交 
    
    86c7051 HEAD@{3}: commit: 3次提交 
    
    9e4c1cf HEAD@{4}: commit: 2次提交 
    
    # HEAD@{num} 数值num代表我们需要移动几步能到哪个版本，如HEAD@{1}表示我们只需要移动一步就能到这个版本，git reflog 对于我们控制版本的前进后退有很大帮助。
   ```
   
   