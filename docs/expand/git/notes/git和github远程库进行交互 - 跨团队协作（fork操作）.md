# 跨团队协作（fork操作）

> 对于一些需求，本团队没法完成需要一些其他的团队协助完成，这时就需要跨团队协作。具体操作如下：

1. 创建者把地址发给协作者（taotao-gitFork），协作者打开这个地址，点击项目上的fork。
   ![协作者fork](/images/git/跨团队协作-协作者点击项目fork.jpg)
2. 接下来，协作者将fork的项目clone到本地，并修改添加起其功能。然后将修改添加的内同提交到本地库上并推送到远程库上。然后在pull requset到创建者的远程库上，操作如下：
   ![协作者pull request](/images/git/跨团队协作-协作者pull_request项目step1.jpg)

   ![协作者pull request](/images/git/跨团队协作-协作者pull_request项目step2.jpg)

   ![协作者pull request](/images/git/跨团队协作-协作者pull_request项目step3.jpg)

   ![协作者pull request](/images/git/跨团队协作-协作者pull_request项目step4.jpg)

3. 接下来就交给创建者了。（切换到创建者的账号）
   ![协作者pull request](/images/git/跨团队协作-创建者step1.jpg)

   ![协作者pull request](/images/git/跨团队协作-创建者step2.jpg)

   ![协作者pull request](/images/git/跨团队协作-创建者step3.jpg)

   ![协作者pull request](/images/git/跨团队协作-创建者step4.jpg)
   
   > 点击Confirn merge后，创建者的远程库就更新完了，此时只需要在本地拉取一下就行了。
