# 本地库设置签名


1. 形式：
   用户名(user.name)： xxx

   Email地址(user.email)：xxx@xxx.com

2. 作用：区分不同的开发人员的身份

3. 辨析：这里设置的签名和我们登录远程库（代码托管中心）的账号和密码没有任何关系。

4. 命令：git congfig

   + 项目级别 / 仓库级别：仅在当前本地库的范围内有效。

     ```bash
     git congfig user.name zt_gt # (不带参数的就是项目级别)
     git config user.email zt_git123@xy.com    
     ```


     执行效果：

     ```bash
     DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                       
          
     $ git config user.name zt_git                                                   
          
     # 执行命令后，信息保存在.git/config中                                                        
          
     DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                            
          
     $ git config user.email zt_git123@xy.com                                        
          
                                                                                     
          
     DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                      
          
     $ cat .git/config    # 执行命令后的信息保存位置和内容[user]                                                           
          
     [core]                                                                          
          
          repositoryformatversion = 0                                             
          
          filemode = false                                                        
          
          bare = false                                                            
          
          logallrefupdates = true                                                 
          
          symlinks = false                                                        
          
          ignorecase = true                                                       
          
     [user]                                                                          
          
          name = zt_git                                                           
          
          email = zt_git123@xy.com                                                
          
     DELL@DESKTOP-53JS0A9 /e/git_test/git_stu 
     ```

     **小结：**  
     
     1. 项目级别（仓库级别）的签名只对当前库（项目）有效，对其他的仓库就不能使用这个签名。
     2. 这里的用户名和邮箱可执行设置（即使是假的邮箱也行，只要符合邮箱格式）

     
  
   + 系统用户级别：登录当前操作系统的用户范围有效。（一般使用这个签名）

     ```bash
     git config --global user.name zt_git_pro
     git config --global user.email zt_git_pro123@xy.com
     ```
     
     
     
      执行效果：
     
     ```bash
     DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                         
     
      $ git config --global user.name zt_git_pro                                      
     
                                                                                      
     
      DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                          
     
      $ git config --global user.email zt_git_pro123@xy.com                           
     
           # 执行命令后，信息保存在家目录下的.gitconfig （~/.gitconfig）中，如下                                                                          
     
      DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                          
     
      $ cat ~/.gitconfig                                                              
     
      [user]                                                                          
     
              name = zt_git_pro                                                       
     
              email = zt_git_pro123@xy.com                                            
     
                                                                                      
     
      DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
     ```
     
       
     


​     

1. 优先级别：

   ​	就近原则：项目级别优先于系统用户级别，二者都存在时采用项目级别。