<template>
    <div class="customermanagement">
    <h1 @click="aaa">111111111</h1>
        <template>
            <div id="aaa">

            </div>

        </template>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[{msg:222},{msg1:2242},{msg2:225432},{msg3:27422},{msg4:222757},{msg5:22765752},{msg6:2246452},],
            }
        },
        methods: {

            aaa(){
/*                var obj = {
                    a: 10,
                    b: function(){
                        console.log(this.a); //10
                    },
                    c: function() {
                        return ()=>{
                            console.log(this.a); //10
                        }
                    }
                };
                obj.b();
                obj.c()();*/


/*                var obj = {
                    a: 10,
                    b: () => {
                        console.log(this.a); //undefined
                        console.log(this.obj); //window
                    },
                    c: function() {
                        console.log(this.a); //10
                        console.log(this); //obj{...}
                    }
                };
                obj.b();
                //obj.c();*/


                var obj = {
                    a: 10,
                    b: function(a){
                        var f = (v) => v + this.a;
                        return f(a);
                    },

/*                    c: function(n) {
                        var f = (v) => v + this.a;
                        var m = {a:20};
                        return f.call(m,n);
                    }*/
                }

                console.log(obj.b(1)); //11
                console.log(obj.d(1)); //11
                // console.log(obj.c(1)); //11
            },

            getEvent(e) {
                console.log(e.currentTarget.parentElement.id);
                console.log(e.target);
                console.log(e.currentTarget);
                console.log(e.currentTarget.previousElementSibling);
                // e.target 是你当前点击的元素
                // e.currentTarget 是你绑定事件的元素
                //e.currentTarget.previousElementSibling.innerHTML;获得点击元素的前一个元素
                //e.currentTarget.firstElementChild;获得点击元素的第一个子元素
                //e.currentTarget.nextElementSibling;获得点击元素的下一个元素
                //e.currentTarget.getElementById("string");获得点击元素中id为string的元素
                //e.currentTarget.getAttributeNode('string'); 获得点击元素的string属性
                //e.currentTarget.parentElement;获得点击元素的父级元素
                //e.currentTarget.previousElementSibling.firstElementChild.innerHTML ;获得点击元素的前一个元素的第一个子元素的HTML值


            },



        open2() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(this.index);
                    this.item.msg2='';
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
    }
    }
</script>

<style scoped>

</style>
