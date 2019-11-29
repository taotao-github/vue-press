# reset命令的三个参数对比

> git reset 后可以跟三个参数，分别--soft、--mixed和--hard，下面我们来学习这三个参数分别代表的意义



1. --soft：仅仅是本地库移动HEAD指针。

   ![1570777540052](/images/git/reset-soft参数.png)

2. --mixed：本地库移动HEAD指针，并重置暂存区

   ![1570777611847](/images/git/reset-mixed参数.png)

3. --hard：本地库移动HEAD指针，重置暂存区，并重置工作区

   ![1570777657988](/images/git/reset-hard参数.png)

