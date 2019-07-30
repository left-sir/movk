<template>
    <div class="order" style="padding-top: 60px;padding-bottom:30px;overflow: hidden">
        <!--top导航-->
        <div style="position: fixed;top: 0;width: 100%;height: 60px;" >
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">
                        <i class="el-icon-menu" style="left: 0;margin: 0;padding: 0;"></i>
                    </el-menu-item>

                    <el-menu-item index="2" style="position: fixed;right: 110px">
                        <i class="el-icon-bell"></i>
                    </el-menu-item>
                    <el-submenu index="3" style="position: fixed;right: 0">
                        <template slot="title">
                            <i class="el-icon-user" style="margin-top: -3px"></i>
                            我</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>


                <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
                <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
            </el-menu>
        </div>

        <div class="line" style="position: fixed;top: 60px;"></div>
            <!--表格上部标签-->
        <div style="margin-top: 20px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">订单管理</el-breadcrumb-item>
                <el-breadcrumb-item>所有订单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!--订单内容-->
        <div class="top" style="padding-bottom: 50px">
            <template>
                <p style="text-align: left"><span style="font-size: 14px">所有订单</span></p>
                <el-table
                        ref="multipleTable"
                        :data="obj.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        id="key"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange"
                >

                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>

                    <el-table-column
                            label="订单编号"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.number }}</template>
                    </el-table-column>

                    <el-table-column
                            prop="title"
                            label="订单名称"
                            >
                    </el-table-column>

                    <el-table-column
                            prop="money"
                            label="金额"
                            width="100"
                            show-overflow-tooltip>
                    </el-table-column>

                    <el-table-column
                            prop="city"
                            label="城市"
                            width="100"
                            show-overflow-tooltip>
                    </el-table-column>

                    <el-table-column
                            prop="username"
                            label="用户名"
                            width="120"
                            show-overflow-tooltip>
                    </el-table-column>

                    <el-table-column
                            prop="date"
                            label="下单时间"
                            width="200"
                            show-overflow-tooltip>
                    </el-table-column>

                    <el-table-column
                            label="订单状态"
                            width="120"
                            :filter-method="filterTag"
                            :filters="[{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }]"
                            filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.condition1 ? 'primary' : 'success'"
                                    v-text="scope.row.condition1?'正常':'异常'"
                                    disable-transitions>{</el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column
                            label="支付状态"
                            width="120"
                            :filters="[{ text: '已支付', value: '已支付' }, { text: '未支付', value: '未支付' }]"
                            :filter-method="filterTag"
                            filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.condition2 ? 'primary' : 'success'"
                                    v-text="scope.row.condition2?'已支付':'未支付'"
                                    disable-transitions>{{scope.row.tag2}}</el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column
                            label="进展"
                            width="120"
                            :filters="[{text:'待处理',value:'待处理'},{ text:'已完工', value:'已完工'}]"
                            :filter-method="filterTag"
                            filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.condition3 ? 'primary' : 'success'"
                                    v-text="scope.row.condition3 ? '已完工':'待处理'"
                                    disable-transitions></el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column
                            prop="address"
                            label="操作"
                            width="160"
                            id="number"
                            >
                        <template slot-scope="scope">
                            <el-button  type="button" size="mini"  @click="handleClick(scope.row)">详情</el-button>
                            <!--详情弹出框-->
                            <el-dialog
                                    title="订单详情"
                                    width="30%"
                                    :show-close="false"
                                    :visible.sync="dialogTableVisible">
                                <el-form ref="form" :model="arr1" label-width="80px" size="mini">
                                    <el-form-item label="订单编号">
                                        <el-input v-model="arr1.number"></el-input>
                                    </el-form-item>
                                    <el-form-item label="订单名称">
                                        <el-input v-model="arr1.title"></el-input>
                                    </el-form-item>
                                    <el-form-item label="金额">
                                        <el-input v-model="arr1.money"></el-input>
                                    </el-form-item>
                                    <el-form-item label="城市">
                                        <el-input v-model="arr1.city"></el-input>
                                    </el-form-item>
                                    <el-form-item label="用户名">
                                        <el-input v-model="arr1.username"></el-input>
                                    </el-form-item>
                                    <el-form-item label="下单时间">
                                        <el-col :span="11">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="arr1.date" style="width: 100%;"></el-date-picker>
                                        </el-col>
                                        <el-col class="line" :span="2" align="center">-</el-col>
                                        <el-col :span="11">
                                            <el-time-picker placeholder="选择时间" v-model="arr1.date" style="width: 100%;"></el-time-picker>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item label="订单状态">
                                        <el-radio-group v-model="arr1.tag" @change="chengevlu1">
                                            <el-radio label="正常"></el-radio>
                                            <el-radio label="异常"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="支付状态">
                                        <el-radio-group v-model="arr1.tag2" @change="chengevlu2">
                                            <el-radio label="已支付"></el-radio>
                                            <el-radio label="未支付"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="进展">
                                        <el-radio-group v-model="arr1.tag3" @change="chengevlu3">
                                            <el-radio label="已完工"></el-radio>
                                            <el-radio label="待处理"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item size="large">
                                        <el-button type="primary" size="mini"  align="right" style="float: right;margin-left: 10px" @click="handleClick2(scope.row,$event)" >退出</el-button>
                                        <el-button type="primary" size="mini" style="float: right" align="right" @click="onSubmit(scope.row,id)">确认修改</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-dialog>

                            <!--删除-->
                            <el-dialog
                                    ref="popoverDel"
                                    width="100"
                                    :visible.sync="dialogVisible"
                                    trigger="click">
                                <div>
                                    <div class="delTip"><i class="el-icon-warning" style="color:#E6A23C"></i>提示</div>
                                    <p>此操作将永久删除该文件, 是否继续?</p>
                                    <div style="text-align: center">
                                        <el-button  type="button" size="mini" @click="close()">取 消</el-button>
                                        <el-button type="primary" size="mini" @click="delIcon(scope.row.id)">确定</el-button>
                                    </div>
                                </div>
                            </el-dialog>
                            <el-button style="margin-left: 10px" v-popover:popoverDel type="button" size="mini" @click="dialogVisible = true">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="position: fixed;bottom: 0;background: #fff;width: 100%">
                    <template>
                        <div class="block" style="float: left">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage"
                                    :page-sizes="[12, 24, 36, 48]"
                                    :page-size="pagesize"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    @next-click="next"
                                    @prev-click="prev"
                                    :total="obj.length">
                            </el-pagination>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import {regionData, CodeToText, TextToCode} from 'element-china-area-data';
    import obj from '../mock'
    export default {
        data() {
            return {
                //删除
                visible: false,
                currentPage:1, //初始页
                pagesize:12,    //每页的数据
                obj:[],//获取的数据
                id:'',
                word:'',
                activeIndex: '1',
                activeIndex2: '1',
                multipleSelection: [],
                dialogTableVisible: false,
                dialogVisible: false,
                //详情
                arr:[],
                arr1:{},
                arr2:{tag:'正常',tag2:'已支付',tag3:'待处理'},
            };
        },


        created:function(){
            //this.getAlldata()

        },
        mounted:function () {
            this.getAlldata()

        },


        methods: {

            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },


            //mock的模拟数据
            getAlldata(){
                let that=this;
                this.$http.get('/user')
                    .then(function (res) {
                        that.obj=res.data.data;
                        // console.log(that.obj);
                        console.log("拦截成功")
                    })
                    .catch(function (err) {
                        console.log("连接错误" + err)
                    })
            },
            //上一页
            prev(){
                this.currentPage=currentPage-1;
            },
            //下一页
            next(){
                this.currentPage=currentPage+1;
            },
            //
            filterTag(value, obj) {
                if(obj.tag3===1){
                    return obj.tag3 === '待处理';
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
            },
            //详情
            handleClick(row){
                this.dialogTableVisible=true;
                this.arr.push(row);
                console.log(row.condition1);
                if (row.condition1 == true){
                    this.arr2.tag='正常';
                    this.obj[0].condition1==false;
                    console.log(this.arr1)
                } else if (row.condition1 == false) {
                    this.arr2.tag='异常';
                    console.log(this.arr1)
                }if (row.condition2){
                    this.arr2.tag2='已支付';
                } else {
                    this.arr2.tag2='未支付';
                }if (row.condition3){
                    this.arr2.tag3='已完工';
                } else {
                    this.arr2.tag3='待处理';
                }
                this.arr.push(this.arr2);
                this.arr1 = this.arr[0];
                this.arr = Object.assign(row, this.arr2);
            },
            handleClick2(){
                this.dialogTableVisible=false;
                this.arr=[];
                console.log(this.obj[0].number);
                location. reload()
            },
            //创建修改数据
            onSubmit(row) {
                this.dialogTableVisible=false;
                this.arr=[];
                this.obj[0]=this.arr1;
            },
            //改变单选框的状态
            chengevlu1(){
                this.arr1.condition1 = !this.arr1.condition1;
            },
            chengevlu2(){
                this.arr1.condition2 = !this.arr1.condition2;
            },
            chengevlu3(){
                this.arr1.condition3 = !this.arr1.condition3;
            },

            //删除
            delIcon(row,id) {
                this.obj.splice(id,1);
                this.dialogVisible = false;
            },
            close(){
                this.dialogVisible=false;
            },
         }
    }
</script>
<style scoped>
    .order{
        margin: 0;
        padding: 0;
    }
     .top {
        text-align: center;
    }


</style>
