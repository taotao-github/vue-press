# SSH登录

1. 生成.ssh文件
   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 ~  
   $ rm -rvf .ssh  # 可以存在之前的.ssh文件，所以使用这个命令删除之前的
   
   DELL@DESKTOP-53JS0A9 MINGW64 ~ 
   $ ssh-keygen -t rsa -C taotao-github   #注意命令中-C是大写的C，后面跟的是github账户   名，输入户直接3个回车
   Generating public/private rsa key pair.                                                                  
   Enter file in which to save the key (/c/Users/DELL/.ssh/id_rsa):                                         
   Created directory '/c/Users/DELL/.ssh'.                                                                  
   Enter passphrase (empty for no passphrase):                                                              
   Enter same passphrase again:                                                                             
   Your identification has been saved in /c/Users/DELL/.ssh/id_rsa.                                         
   Your public key has been saved in /c/Users/DELL/.ssh/id_rsa.pub.                                         
   The key fingerprint is:                                                                                  
   SHA256:m9LE0WCI1I9Dy4Xz0ObodOWik6SGxf8QABzhUUmv4zk taotao-github                                         
   The key's randomart image is:                                                                            
   +---[RSA 2048]----+ 
   |   .=B++ +o      |  
   |   ...+.B.+o.    | 
   |     .. +.%.o.   |  
   |         o.X.*.. |  
   |       oo* *S.   |    
   |      ..ooBo o   | 
   |       .E .++    |   
   |           . ..  |  
   |                 |   
   +----[SHA256]-----+ 
     
   DELL@DESKTOP-53JS0A9 MINGW64 ~ 

   ```
   > 执行命令后会在我们的家目录（~）下创建一个.ssh目录，效果如下

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 ~/.ssh                                                                   
   $ ll                                                                                                     
   total 5                                                                                                  
   -rw-r--r-- 1 DELL 197121 1823 8月   5 17:31 id_rsa                                                       
   -rw-r--r-- 1 DELL 197121  395 8月   5 17:31 id_rsa.pub                                                   
                                                                                                            
   DELL@DESKTOP-53JS0A9 MINGW64 ~/.ssh                                                                         
   $ ll ~/.ssh                                                                                              
   total 5                                                                                                  
   -rw-r--r-- 1 DELL 197121 1823 8月   5 17:31 id_rsa                                                       
   -rw-r--r-- 1 DELL 197121  395 8月   5 17:31 id_rsa.pub                                                   
                                                                                                            
   DELL@DESKTOP-53JS0A9 MINGW64 ~/.ssh                                                                        
   $ cat id_rsa.pub                                                                                         
   ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDU+hqDDaqjnVJuddWCuFDCH5ULB23DZwfhGl/   bYaSDqjs295M7iVi0Y1cDAufT+3
   8ybfZTCaUZG5cgzWtMJAJ4v9jzVvGWGm5mLHZI34ZOeBcnQmc1TRw6VgBjrFkZWSzYlqUwwjSJpZrihh7md   M8A4tB1UpocjXAy3Qq4
   WrmlVD4BvA/V/hAJdzbn1Dd2Hf4QYLjX9BWnqt2rK/rjJA5U5ScodoHG51j1KnKXqNlf4pHco/   UEhfurhl5s0S6RxTxNdHDsUN2GVE
   m2rQmwhWCnX1V9/91gGEsoQ9xczwRYe99NZZkT8m9iDfPFlNYAze5EVbmiPTSy5sPaSowYKQ/H    taotao-github              
       # 复制上面划线的字符
   DELL@DESKTOP-53JS0A9 MINGW64 ~/.ssh 

   ```

2. 远程库配置ssh keys
   ![远程库配置ssh](\images\git\远程库配置ssh.jpg)

3. 本地使用远程库的ssh项目地址并设置别名
   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master)                                 
   $ git remote add origin_ssh git@github.com:taotao-github/zt_git_test.git                                      
                                                                                                                 
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master)                                   
   $ git remote -v                                                                                               
   origin  https://github.com/taotao-github/zt_git_test.git (fetch)                                              
   origin  https://github.com/taotao-github/zt_git_test.git (push)                                               
   originin_ssh    git@github.com:taotao-github/zt_git_test.git (fetch)                                          
   originin_ssh    git@github.com:taotao-github/zt_git_test.git (push)                                           
                                                                                                                 
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master) 
   ```
   > 修改文件提交到本地库然后就可以直接推送到远程库上了。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master)                                
   $ git push originin_ssh master                                                                                
   Warning: Permanently added the RSA host key for IP address '52.74.223.119' to the list    of known hosts.     
   Enumerating objects: 10, done.                                                                                
   Counting objects: 100% (10/10), done.                                                                         
   Delta compression using up to 8 threads                                                                       
   Compressing objects: 100% (4/4), done.                                                                        
   Writing objects: 100% (6/6), 629 bytes | 629.00 KiB/s, done.                                                  
   Total 6 (delta 2), reused 0 (delta 0)                                                                         
   remote: Resolving deltas: 100% (2/2), completed with 1 local object.                                          
   To github.com:taotao-github/zt_git_test.git                                                                   
      04b9de6..78f1325  master -> master                      
                                                   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master)
   ```

   > <font color=#ff0000>这样我们推送成功了，可以看出我们不会像https那样要输入账号和密码，直接就能推送成功</font>