(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{311:function(t,a,s){},355:function(t,a,s){"use strict";s(311)},367:function(t,a,s){"use strict";s.r(a);var e=s(302),l=s.n(e),i={data:()=>({tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}),mounted(){this.getData()},methods:{getData(){l.a.get("http://localhost:5050/home").then(t=>{console.log("222",t),this.tableData=[];for(var a=0;a<t.data.length;a++)this.tableData.push(t.data[a])})}}},o=(s(355),s(22)),c=Object(o.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("this is a tip")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("this is a tip")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("this is a tip")])]),t._v(" "),[s("div",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[s("el-table-column",{attrs:{prop:"date",label:"Date",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"Name",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"address",label:"Address"}})],1)],1)]],2)}),[],!1,null,"42bd2224",null);a.default=c.exports}}]);