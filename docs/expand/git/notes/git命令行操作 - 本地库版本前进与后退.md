# 本地库版本前进与后退



1. 基于索引值操作：<font color=#ae00e0>git reset --hard [索引值]</font> （推荐）

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master) 
   
   $ git reflog 
   
   926ca3a (HEAD -> master) HEAD@{0}: commit: 6次提交 
   
   bf3f7fe HEAD@{1}: commit: 5次提交 
   
   72608cf HEAD@{2}: commit: 4次提交 
   
   86c7051 HEAD@{3}: commit: 3次提交 
   
   9e4c1cf HEAD@{4}: commit: 2次提交 
   
   b9617d6 HEAD@{5}: commit (initial): this my fisrt commit                                                             
   
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                            
   
   $ <u>git reset --hard bf3f7fe</u>                                                                                           
   
   HEAD is now at bf3f7fe 5次提交   # 现在就切换到了bf3f7fe这个版本了，打开good.txt文件可以发现文件已经自动退回到当前版本的修改了，第6次提交的内容没有了
   ```

   

   再次使用<font color=#ae00e0>git reflog</font> 查看版本信息，如下

   

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                             

   $ git reflog                                                                                                         

   bf3f7fe (HEAD -> master)  HEAD@{0}: reset: moving to bf3f7fe  # head指针已经移到至bf3f7fe, 如下

   926ca3a HEAD@{1}: commit: 6次提交                                                                                    

   bf3f7fe (HEAD -> master)  HEAD@{2}: commit: 5次提交                                                                   

   72608cf HEAD@{3}: commit: 4次提交                                                                                    

   86c7051 HEAD@{4}: commit: 3次提交                                                                                    

   9e4c1cf HEAD@{5}: commit: 2次提交                                                                                    

   b9617d6 HEAD@{6}: commit (initial): this my fisrt commit
   
   ```

   

   使用git log –oneline查看，可以看见第6次提交已经不再版本里面了，但是它并没有消失。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master) 

   $ git log --oneline                                                                                                  

   bf3f7fe (HEAD -> master) 5次提交                                                                                     

   72608cf 4次提交                                                                                                      

   86c7051 3次提交                                                                                                      

   9e4c1cf 2次提交                                                                                                      

   b9617d6 this my fisrt commit 
   ```

   

2. 使用<font color=#ae00e0> ^ </font>符号操作：只能往后不能向前。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master) 

   $ git reset --hard HEAD^                                                                                             

   HEAD is now at 72608cf 4次提交                                                                                       
                                                                                             

   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                            

   $ git log --oneline                                                                                                  

   72608cf (HEAD -> master) 4次提交                                                                                     

   86c7051 3次提交                                                                                                      

   9e4c1cf 2次提交                                                                                                      

   b9617d6 this my fisrt commit                                                                                         
                                                                                                                     

   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu 
   ```

   

   <font color=#ff0000>注意： 一个^代表后退一步，n个^代表后退n步，修饰符后面可跟多个</font>

   

3. 使用<font color=#ae00e0> ~</font>符号操作：只能往后不能向前。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)  

   $ git reset --hard head~2 

   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master) 

   $ git log --oneline  

   9e4c1cf (HEAD -> master)  2次提交 

   b9617d6 this my fisrt commit
   ```

   

   <font color=#ff0000>注意： ~n中
   n代表后退n步</font>

