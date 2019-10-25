// 匿名函数，会直接自动执行
;(function(){
    "use strict";

    class Project{
        constructor(){
            this.name = document.getElementById("name");
            this.sex  = document.getElementById("sex");
            this.age  = document.getElementById("age");
            //发送按钮
            this.send = document.getElementById("send");

            // 获取添加按钮的元素
            this.insertBtn = document.getElementById("insert");
            this.type = 1;
            
            //插入到页面中
            this.tbody = document.querySelector("tbody");



            this.insertUrl = "http://localhost/8Month/day25/work/project/php/insert.php";
            this.updateUrl = "http://localhost/8Month/day25/work/project/php/update.php";
            this.selectUrl = "http://localhost/8Month/day25/work/project/php/select.php";
            this.deleteUrl = "http://localhost/8Month/day25/work/project/php/delete.php";

            //1.绑定事件
            this.addEvent();

            // s1.设置初始的界面一开始就请求ajax数据
            this.selectAjax();
        }
        selectAjax(){
            var that = this;
            //开始请求
            ajax({
                url:this.selectUrl,
                success:function(res){
                    // s2. 数据请求成功后，解析数据，渲染页面
                    that.res = JSON.parse(res);
                    // console.log(that.res);
                    that.display();
                }
            })
        }
        //删除数据
        deleteAjax(){
            var that = this;
            ajax({
                url:this.deleteUrl,
                data:{
                    id:this.id  //默认是获取id，id是唯一标志
                },
                success:function(res){
                    console.log(res);
                    that.res = JSON.parse(res);
                    that.display();
                }
            })
        }
        addEvent(){
             var that = this;
            //  将自己点击按钮时，将状态修改成密码，0添加
            this.insertBtn.addEventListener("click",function(){
                that.type = 0;
                that.name.value = that.sex.value = that.age.value = "";

            })
             // U3.利用事件委托找到修改，当点击修改按钮时，将状态修改成：1修改
            this.tbody.addEventListener("click",function(eve){
                if(eve.target.getAttribute("idm")=="idmingcheng"){
                    that.type = 1;
                    var achild = eve.target.parentNode.parentNode.children;
                    //获取子元素的索引
                    that.id = achild[0].innerHTML;
                    that.name.value = achild[1].innerHTML;
                    that.sex.value = achild[2].innerHTML;
                    that.age.value = achild[3].innerHTML;
                }
                if(eve.target.getAttribute("idm")=="delete"){
                    that.id = eve.target.parentNode.parentNode.children[0].innerHTML;

                    that.deleteAjax();
                }
            })
            //绑定发送添加数据事件
            this.send.addEventListener("click",function(){
                that.n = that.name.value;
                that.s = that.sex.value;
                that.a = that.age.value;
                //判断
                if(that.type==0){
                    that.insertAjax();
                }else{
                    that.updateAjax();
                }
            })
        }    
                    //     //2.绑定发送添加数据的事件
        //     this.send.onclick = function(){
        //         //2.1.获取点击按钮每一个input框的值
        //         // 因为事件会改变this的指向
        //         that.n = that.name.value;
        //         that.a = that.age.value;
        //         that.s = that.sex.value;

        //         //3. 获取值后需要开启ajax
        //         that.insertAjax();
        //     }   
        // }
        insertAjax(){
            var that = this;
            //3.1 执行ajax
            ajax({
                url:this.insertUrl,
                success:function(res){
                    // 3.2 等待成功之后的数据准备解析并且渲染到页面
                    //  console.log(JSON.parse(res));
                    //console.log(res);
                    that.res = JSON.parse(res);
                    that.display();
                },
                //需要向后端发送数据
                data:{
                    name:this.n,
                    sex:this.s,
                    age:this.a
                }
            })
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                //拼接，渲染
                str += `<tr>
 
                            <td>${this.res[i].Id}</td>                          
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].sex}</td>
                            <td>${this.res[i].age}</td>
                            <td><span class="btn btn-warning" idm="delete">删除</span></td>
                            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" idm="idmingcheng">修改</button></td>
                        </tr>`;
               
               
                // this.res[i].name
                // this.res[i].sex
                // this.res[i].age
                // this.res[i].id
            }
            //现在在页面上改变tbody的数据
            this.tbody.innerHTML = str;
        }
    
        //修改
        updateAjax(){
            var that = this;
            ajax({
                url:this.updateUrl,
                success:function(res){
                    that.res = JSON.parse(res);
                    that.display();
                },
                data:{
                    name:this.n,
                    sex:this.s,
                    age:this.a,
                    id:this.id
                }
            })
        }
    }



    new Project;
})();
