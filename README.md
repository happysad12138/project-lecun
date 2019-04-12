# project-lecun
本项目需在php服务器中运行
首页：index.html style.css,public.css 
注册：register.html register.css,public.css 
登录：login.html login.css,public.css 
商品列表：goodslist.html goodslist.css
详情页：datadetails.html datadetails.css
购物车：shopcar.html public.css
scss文件夹：一个scss文件：实现的是商品详情页的css样式
json文件夹：dataIndex.json是页面上五条商品数据，点击商品跳转到相应详情页加载相应数据，
 menudata.json是首页导航鼠标滑过对应的li显示对应数据。
 libs：加载外部js文件
 module：功能模块化 通过js中的main及main-2加载到对应页面中
            
 使用：在phpnow环境下通过地址栏拼接打开首页，点登录及注册可跳转到相应页面进行信息的设置，
 首页中点击对应的商品图片可跳转到商品详情页，如需加入购物车可点击详情页的加入购物车按钮，右上角有我的购物车，
 点击便可查看加入购物车的商品，在购物车页面中，您可以进行价格，数量的计算，在首页点击商品列表便可跳转到商品列表页面，
 点击想要选购的商品图片可跳转到相应的商品详情页，在此页面中，依然可以通过点击加入购物车实现购买商品。
