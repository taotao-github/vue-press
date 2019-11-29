# 比较文件的差异



1. 修改good.txt文件的内容，然后使用git diff  + [文件名]命令。 

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)  
   
   $ git diff good.txt  # git diff + [文件名]：将工作区文件和暂存区进行对比
   
   diff --git a/good.txt b/good.txt 
   
   index dbd4300..8139a1d 100644  
   
   --- a/good.txt    
   
   +++ b/good.txt   
   
   @@ -4,3 +4,4 @@ this my changes  
   
    4次修改 
   
    5次修改 
   
    6次修改  
   
   +7次修改（测试git diff + 文件名） 
   
     
   
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu 
   ```

   

2. 执行git dif head~2 good.txt 命令

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/git_stu (master)                                                           
      
   $ git diff head~2 good.txt    # git diff  [本地库历史版本] [文件名]：将工作区中的文件和本地库历史版本记录进行比较                              
      
   diff --git a/good.txt b/good.txt                                                                                     
      
   index 565eae0..8139a1d 100644                                                                                        
      
   --- a/good.txt                                                                                                       
      
   +++ b/good.txt                                                                                                       
      
   @@ -2,4 +2,6 @@ this one txt file                                                                                    
      
   this my changes                                                                                                     
      
   3次修改                                                                                                             
      
   4次修改  
                                                                                                                                                                 
   +5次修改                                                                                                             
      
   +6次修改                                                                                                             
      
   +7次修改（测试git diff + 文件名）                                                                                    
      
   ​                                                                                                                     
      
   DELL@DESKTOP-53JS0A9 /e/git_test/git_stu 
   ```

   
   
   <font color=#ff0000>\* 不带文件名是比较多个文件</font>    