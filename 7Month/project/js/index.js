class Project{
    constructor(){
        // 选元素
        this.user = document.getElementById("user");
        this.sex = document.getElementById("sex");
        this.age = document.getElementById("age");
        this.send = document.getElementById("send");

        this.tbody = document.querySelector("tbody");

        this.insertUrl = "http://localhost/project/data/insert.php";
        this.selectUrl = "http://localhost/project/data/select.php";

        // 绑定事件
        this.addEvent();

        // S1.开启ajax，准备获取最新数据
        this.selectLoad();
    }
    addEvent(){
        var that = this;
        // I1.绑定添加事件
        this.send.addEventListener("click",function(){
            that.u = that.user.value;
            that.s = that.sex.value;
            that.a = that.age.value;
            // I2.开启insert的ajax
            that.insertLoad()
        })
    }
    insertLoad(){
        var that = this;
        ajaxPost(this.insertUrl,function(res){
            // I3.成功，之后，解析数据
            that.res = JSON.parse(res);
            // I4.渲染页面
            that.display();
            // 清空输入框
            that.user.value = that.sex.value = that.age.value = "";
        },{
            user:this.u,
            sex:this.s,
            age:this.a
        })
    }
    display(){
        // 渲染页面
        if(this.res.code == 1){
            var str = "";
            for(var i=0;i<this.res.msg.length;i++){
                str += `<tr>
                            <td>${this.res.msg[i].index}</td>
                            <td>${this.res.msg[i].name}</td>
                            <td>${this.res.msg[i].sex}</td>
                            <td>${this.res.msg[i].age}</td>
                            <td><span class="btn btn-info">删除</span></td>
                            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">修改</button></td>
                        </tr>`;
            }
            this.tbody.innerHTML = str;
        }
    }
    selectLoad(){
        // S2.开启ajax
        var that = this;
        console.log("url="+this.selectUrl)
        ajaxGet(this.selectUrl,function(res){
            // S3.成功，解析数据
            console.log("res="+res)    
            that.res = JSON.parse(res);
            // S4.调取渲染页面功能渲染页面
            that.display();
        })
    }
}
new Project;

