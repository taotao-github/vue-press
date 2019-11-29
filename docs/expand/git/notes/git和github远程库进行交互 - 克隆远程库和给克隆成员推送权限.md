# 克隆远程库（给克隆成员推送权限）



## 克隆远程库项目

这里我们使用其他用户进行克隆远程库，方面测试没有加入团队的成员推动内容到远程库的失败现象

```bash
DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member                                                 

$ git clone https://github.com/taotao-github/zt_git_test.git   # 克隆项目很简单，直接git clone + 远程库地址就可以了                                   

Cloning into 'zt_git_test'...                                                                         

remote: Enumerating objects: 33, done.                                                                

remote: Counting objects: 100% (33/33), done.                                                         

remote: Compressing objects: 100% (12/12), done.                                                      

remote: Total 33 (delta 7), reused 33 (delta 7), pack-reused 0                                        

Unpacking objects: 100% (33/33), done.                                                                

                                                                                                      

DELL@DESKTOP-53JS0A9 /e/git_test/other_member
```



> 给克隆成员添加推送写的权限（克隆成员-其他成员修改本地文件提交到本地库后，想要推送本地到远程库，此时是没法推送成功的，因为还没有加入团队是没有推送写的权限。推送失败效果如下

```bash
DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master)                            

$ git push origin master                                                                              

remote: Repository not found.                                                                         

fatal: repository 'https://github.com/taotao-github/zt_git_test.git/' not found                       

  # 可以看出推送不上去。（与视频上的错误不一样？）

DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master) 
```

可能由于版本问题，没有加入团队的推送操作会报403 无权限的错误，而我们却报了上面的错误。 



## 将克隆成员加入团队

<img :src="$withBase('/images/git/github将克隆成员加入团队.jpg')" alt="--soft">

<img :src="$withBase('/images/git/github将克隆成员加入团队2.jpg')" alt="--soft">

上面都是创建者的操作，接下来就是克隆成员的操作了：

1. 首先，克隆成员以子的github账号打开创建者发送的地址。打开如下：
   ![克隆成员打开创建发送的添加到团队的地址](/images/git/克隆成员打开创建发送的添加到团队的地址.jpg)

2. 克隆成员再执行一下推送操作，效果如下：

   ```bash
   DELL@DESKTOP-53JS0A9 MINGW64 /e/git_test/other_member/zt_git_test (master)   
   
   $ git push origin master                                                                              
   
   Username for 'https://github.com': taotao-gitTest   # 这里输入github账号，然后输入密码
   
   Enumerating objects: 5, done.                                                                         
   
   Counting objects: 100% (5/5), done.                                                                   
   
   Delta compression using up to 8 threads                                                               
   
   Compressing objects: 100% (2/2), done.                                                                
   
   Writing objects: 100% (3/3), 367 bytes | 367.00 KiB/s, done.                                          
   
   Total 3 (delta 1), reused 0 (delta 0)                                                                 
   
   remote: Resolving deltas: 100% (1/1), completed with 1 local object.                                  
   
   To https://github.com/taotao-github/zt_git_test.git                                                   
   
      4d9bc86..f2823bb  master -> master                                                                 
   
                                                                                                         
   
   DELL@DESKTOP-53JS0A9 /e/git_test/other_member/zt_git_test(master)  
   ```

   ​	克隆成员将自己的最新代码推送到了远程库了，但是创建者还没有拉取最新的内容，因此创建者可以使用gitpull 拉取最新代码。<font color=#ff0000>git pull  等价于git fetch + git merge。如果修改简单确定不会产生冲突就可以直接使用git pull。</font>

