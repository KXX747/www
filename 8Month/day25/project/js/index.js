;(function(){
    "use strict";

    class Project{
        constructor(){
            this.name = document.getElementById("name");
            this.sex = document.getElementById("sex");
            this.age = document.getElementById("age");
            this.send = document.getElementById("send");

            this.insertBtn = document.getElementById("insert");

            // U1.定义状态：决定发送按钮的功能：0为添加，1为修改
            this.type = 1;

            this.tbody = document.querySelector("tbody");

            this.insertUrl = "http://localhost/8Month/day25/project/ctrl/insert.php";
            this.updateUrl = "http://localhost/8Month/day25/project/ctrl/update.php";

            this.addEvent();
        }
        addEvent(){
            var that = this;
            // U2.当点击添加按钮时，将状态修改成：0添加
            this.insertBtn.addEventListener("click",function(){
                that.type = 0;
                that.name.value = that.sex.value = that.age.value = "";
            })

            // U3.利用事件委托找到修改，当点击修改按钮时，将状态修改成：1修改
            this.tbody.addEventListener("click",function(eve){
                if(eve.target.getAttribute("abc") == "hahaha"){
                    that.type = 1;
                    var achild = eve.target.parentNode.parentNode.children;
                    that.id = achild[0].innerHTML;
                    that.name.value = achild[1].innerHTML;
                    that.sex.value = achild[2].innerHTML;
                    that.age.value = achild[3].innerHTML;
                }
            })

            // I1.绑定发送添加数据事件
            this.send.addEventListener("click",function(){
                that.n = that.name.value;
                that.s = that.sex.value;
                that.a = that.age.value;
                // U4.点击发送按钮，之前，先判断功能状态，是添加呢，还是修改呢
                if(that.type == 0){
                    // I2.开启添加信息的ajax
                    that.insertAjax();
                }else{
                    // U5.开启修改信息的ajax
                    that.updateAjax();
                }
            })
        }
        insertAjax(){
            var that = this;
            ajax({
                url:this.insertUrl,
                success:function(res){
                    // I3.等待成功之后的数据，准备解析，并渲染页面
                    that.res = JSON.parse(res);
                    that.display();
                },
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
                str += `<tr>
                            <td>${this.res[i].Id}</td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].sex}</td>
                            <td>${this.res[i].age}</td>
                            <td><span class="btn btn-warning" id="delete">删除</span></td>
                            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" abc="hahaha">修改</button></td>
                        </tr>`;
            }
            this.tbody.innerHTML = str;
        }
        updateAjax(){
            var that = this;
            ajax({
                url:this.updateUrl,
                success:function(res){
                    // U6.等待成功之后的数据，准备解析，并渲染页面
                    // console.log(res)
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