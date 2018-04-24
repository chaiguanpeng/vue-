let vm = new Vue({
    el:'#app',
    data:{
        title:'',
        cur:'',
        todos:[
            {
                isSelected:false,
                title:'睡觉'
            },
            {
                isSelected:true,
                title:"吃饭"
            }
        ],
        hash:''
    },
    methods:{
        add(){
            this.todos.push(
                {
                    isSelected:false,
                    title:this.title
                }
            );
            this.title=''
        },
        remove(n){
            return this.todos = this.todos.filter(item=>item!==n);
        },
        remember(x){//当前传递的是当前点击的这一项
            this.cur=x;
        },
        cancel(){
            this.cur='';
        }
    },
    computed:{
        filterTodos(){
            if(this.hash ==='all') return this.todos;
            if(this.hash ==='finish') return this.todos.filter(item=>item.isSelected);
            if(this.hash ==='unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos;
        },
        count(){
           return this.todos.filter(item=>!item.isSelected).length
        }

    },
    directives:{
        focus(el,bindings){
            if(bindings.value){
                //获取焦点 当 cur==todo时候(即当点击当前li时让内部的输入框获取焦点)
                el.focus();
            }
        }
    },
    created(){
        // ajax获取  初始化数据
        // 如果localstorage中有数据就用有的，没有数据就用默认的
        this.todos= JSON.parse(localStorage.getItem('data')) || this.todos;
        //监控hash值的变化,如果页面已经有hash了、重新刷新页面也要获取hash值
        this.hash = window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',(a,b)=>{
            //当hash值变化重新操作记录的数据
            this.hash = window.location.hash.slice(2);
            // console.log(a);
        })
    },
    watch:{
       todos:{ //默认只监控一层的数据变化,我们需要深度监控
           handler(){    //默认写成函数  就相当于默认写了个handle
               // localStorage默认村的是字符串
              localStorage.setItem('data',JSON.stringify(this.todos))
           },
           deep:true
       }
    }

})