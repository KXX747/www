class Project{
    // 重写--重新定义构造函数的内容
    constructor(){
        //获取元素
        this.name = document.getElementById("name");
        this.sex = document.getElementById("sex");
        this.age = document.getElementById("age");
        this.send = document.getElementById("send");
        // this.index=  document.getElementById("send");

        this.tbody = document.querySelector("tbody");

        // ajax提前准备需要插入url的php接口地址
        this.insertUrl = "http://localhost/zuoye/project/data/insert.php";
        this.selectUrl = "http://localhost/zuoye/project/data/select.php";

    // 绑定点击事件
        this.addEvent();

    // S1.开启ajax，准备获取最新数据
      this.selectLoad();


    }

    
    //点击事件的注册
    addEvent(){
        // 通过that来找到this
        var that = this;
        // I1.绑定添加事件
        this.send.addEventListener("click",function(){
            //获取输入框的值

            that.n = that.name.value;
            that.a = that.age.value;
            that.s = that.sex.value;
        

            // I2.（插入加载）开启ajax
            that.insertLoad()
        })
    }

    //获取接口，查询数据
    insertLoad(){
        console.log("this.inserUrl="+this.insertUrl);
        var that = this;
        
        ajaxPost(this.insertUrl,function(res){
            console.log("添加接返回数据="+res);
            // I3.成功接收之后需要进行解析数据
            that.res = JSON.parse(res);
            // I4. 渲染页面
            that.display();
            // 清除之前输入框提交的信息
            that.name.value = that.age.value = that.sex.value = "";
        },{
            // 发
            name:this.n,
            sex:this.s,
            age:this.a,
            index:this.i,
        })
    }

    // <td>${this.res.msg[i].index}</td>
    // display(){
    //     if(this.res.code ==1){
    //         var str = "";
    //         for(var i=0;i<this.res.msg.length;i++){
    //             str += `<tr>
    //                         <td>${this.res.msg[i].name}</td>
    //                         <td>${this.res.msg[i].sex}</td>
    //                         <td>${this.res.msg[i].age}</td>
    //                         <td><span class="btn btn-info">删除</span></td>
    //                         <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">修改</button></td>
    //                     </tr>`;
    //         }
    //         this.tbody.innerHTML = str;
    //     }
    // }

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
            console.log("str=",str);

            console.log("this.tbody=",this.tbody);
            
            this.tbody.innerHTML = str;
        }
    }


    selectLoad(){
        var that = this;
        console.log("Url="+this.selectUrl); 
        ajaxGet(this.selectUrl,function(res){ 
            console.log("查询接返回数据="+res);
            var obj = JSON.parse(res);
        
            console.log("nihao "+obj);
            that.res = obj;
            console.log("解析="+ that.res.msg);
            that.display();
        })

    }
}
// new出来的是对象，指类的实例
new Project();
// sh.name="sh";
// var gz=new Project();


