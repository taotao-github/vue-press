# 分支的创建、查看、切换和合并



1. 分支的创建、查看、切换

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                           
   
   $ git branch zt_master  # 使用git branch [分支名（自定义）]，即可创建一个分支
   
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                           
   
   $ git branch -v    # 使用git branch -v 查看所有分支
   
   * master    926ca3a 6次提交   # *号代表当前所在的分支
   
     zt_master 926ca3a 6次提交                                                                                          
   
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                            
   
   $ git checkout zt_master        # 使用git checkout [分支名] ：切换分支 
   
   Switched to branch 'zt_master'                                                                                       
   
   M       good.txt                                                                                                     
   
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                         
   
   $ git branch -v  
   
     master    926ca3a 6次提交                                                                                          
   
   * zt_master 926ca3a 6次提交    # 可以看出我们已经成功切换到这个分支上 
   
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu
   ```

    

    

2. 分支的合并 

   我们在zt_master分支上修改good.txt文件，然后添加到暂存区并提交到本地库，然后进行合并操作。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                       
   
   $ git checkout master  # 1.  切换到需要合并的分支上（这个master需要合并zt_master的内容，所以就切换到master分支上）  
   
   Switched to branch 'master'                                                                                          
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                           
   
   $ git merge zt_master  # 2.  使用git merge [分支名] 执行合并操作。这里的分支是有新内容的分支。（也就是切换之前的那个分支）
   
   Updating 926ca3a..f2759ce                                                                                            
   
   Fast-forward                                                                                                         
   
    good.txt | 2 ++                                                                                                     
   
    1 file changed, 2 insertions(+)                                                                                     
                                                                                                                        
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu 
   ```

   ​    

3. <font color=#ff0000>注意：合并分支有些情况将会产生冲突。（如果两个人都在修改自己本地库同一个文件同一个地方，就会产生冲突。）</font>如下，在master分支上修改good.txt文件，并提交到本地库上，然后切换到zt_master分支上，也修改good.txt文件，并提交到本地库上，然后切回master分支执行合并操作。

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                             
   
   $ git merge zt_master                                                                                                
   
   Auto-merging good.txt                                                                                                
   
   CONFLICT (content): Merge conflict in good.txt                                                                       
   
   Automatic merge failed; fix conflicts and then commit the result.                                                    
   
                                                                                                                       
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu 
   ```

   上面第4行可以看出合并产生了冲突，查看冲突文件goood.txt
   ```bash

   this one txt file                                                                                                    

   this my changes                                                                                                      

   3次修改                                                                                                     

   <<<<<<< HEADD   # 当前分支的冲突代码（master分支）                                                                                                       

   4次修改 (这是我在master分支上修改的内容)                                                                             

   =======                                                                                                              

   4次修改 （这是我在zt_master分支上修改的内容）                                                                        

   >>>>>>> zt_master      # zt_master分支上的冲突代码                                                                                              

   5次修改                                                                                                              

   i6次修改                                                                                                             

   7次修改（测试git diff + 文件名）  

   8次修改（这次修改是在分支上修改的）
   ```

   

4.  解决合并时的冲突
    1. 编辑文件，删除特殊符号。
    2. 把文件修改到满意的程度，保存退出。
    3. 执行git add + 文件名 将文件添加到暂存区。
    4. 执行git commit -m ‘日志信息‘提交到本地库。 <font color=#ff0000>注意：解决冲突提交文件到本地库，这里一定不要在跟文件名了，否则会报错。</font>
  
      ```bash
      DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master|MERGING)                                                     

      $ git add good.txt                                                                                                     



      DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master|MERGING)                                                      

      $ git commit -m '解决合并冲突'                                                                                          

      [master 733aa12] 解决合并冲突



      DELL@DESKTOP-53JS0A9 /e/git_test/git_stu  
      ```

   