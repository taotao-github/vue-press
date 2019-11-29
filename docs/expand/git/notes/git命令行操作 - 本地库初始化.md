# 本地库初始化



1. 命令：
   ```bash
      git init # 本地库初始化
   ```

2. 效果：如下是在dos窗口执行的效果

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu                                
   
   $ git init                                                                      
   
   Initialized empty Git repository in E:/git_test/git_stu/.git/                   
   
         #  执行git init 命令后，它会在当前目录创建一个.git目录，里面有git的相关配置文件                                                                        
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
   
   $ ll -a                                                                         
   
   total 4                                                                         
   
   drwxr-xr-x 1 DELL 197121 0 8月   2 09:35 ./                                     
   
   drwxr-xr-x 1 DELL 197121 0 8月   2 09:30 ../                                    
   
   drwxr-xr-x 1 DELL 197121 0 8月   2 09:35 .git/                                  
   
                                                                                   
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
   
   $ ll .git      # 查看.git目录下的所有文件和目录                                                                
   
   total 7                                                                         
   
   -rw-r--r-- 1 DELL 197121 130 8月   2 09:35 config                               
   
   -rw-r--r-- 1 DELL 197121  73 8月   2 09:35 description                          
   
   -rw-r--r-- 1 DELL 197121  23 8月   2 09:35 HEAD                                 
   
   drwxr-xr-x 1 DELL 197121   0 8月   2 09:35 hooks/                               
   
   drwxr-xr-x 1 DELL 197121   0 8月   2 09:35 info/                                
   
   drwxr-xr-x 1 DELL 197121   0 8月   2 09:35 objects/                             
   
   drwxr-xr-x 1 DELL 197121   0 8月   2 09:35 refs/                                
   
                                                                                  
   
   DELL@DESKTOP-53JS0A9  (master)
   ```

    

   

3. 注意：.git目录中存放的是本地库相关的子目录和文件，不要胡乱删除和修改。