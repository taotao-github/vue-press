# reset命令的三个参数对比

> git reset 后可以跟三个参数，分别--soft、--mixed和--hard，下面我们来学习这三个参数分别代表的意义


1. --soft：仅仅是本地库移动HEAD指针。
    <img :src="$withBase('/images/git/reset-soft参数.png')" alt="--soft">

2. --mixed：本地库移动HEAD指针，并重置暂存区
    <img :src="$withBase('/images/git/reset-mixed参数.png')" alt="--mixed参数">

3. --hard：本地库移动HEAD指针，重置暂存区，并重置工作区
    <img :src="$withBase('/images/git/reset-hard参数.png')" alt="--hard参数">

