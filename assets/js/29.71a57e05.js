(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{370:function(r,t,e){"use strict";e.r(t);var s={data(){return{ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{validator:(r,t,e)=>{""===t?e(new Error("请输入密码")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),e())},trigger:"blur"}],checkPass:[{validator:(r,t,e)=>{""===t?e(new Error("请再次输入密码")):t!==this.ruleForm.pass?e(new Error("两次输入密码不一致!")):e()},trigger:"blur"}],age:[{validator:(r,t,e)=>{if(!t)return e(new Error("年龄不能为空"));setTimeout(()=>{Number.isInteger(t)?t<18?e(new Error("必须年满18岁")):e():e(new Error("请输入数字值"))},1e3)},trigger:"blur"}]}}},methods:{submitForm(r){this.$refs[r].validate(r=>{if(!r)return console.log("error submit!!"),!1;alert("submit!")})},resetForm(r){this.$refs[r].resetFields()}}},a=e(22),i=Object(a.a)(s,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h3",{attrs:{id:"武汉买房打算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#武汉买房打算"}},[r._v("#")]),r._v(" 武汉买房打算")]),r._v(" "),e("p",[r._v("二七滨江 > 武昌滨江 > 汉阳滨江 > 青山滨江")]),r._v(" "),e("h4",{attrs:{id:"武昌片区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#武昌片区"}},[r._v("#")]),r._v(" 武昌片区")]),r._v(" "),e("p",[r._v("长江悦 3.5w")]),r._v(" "),e("h4",{attrs:{id:"青山片区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#青山片区"}},[r._v("#")]),r._v(" 青山片区")]),r._v(" "),e("p",[r._v("青山樽 2.2w")]),r._v(" "),e("h4",{attrs:{id:"江岸片区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#江岸片区"}},[r._v("#")]),r._v(" 江岸片区")]),r._v(" "),e("p",[r._v("福星惠誉 2.3w\n大观 2.3w\n江印 2.3w")]),r._v(" "),e("h4",{attrs:{id:"光谷片区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#光谷片区"}},[r._v("#")]),r._v(" 光谷片区")]),r._v(" "),e("p",[r._v("大公馆 3.0w")]),r._v(" "),e("h4",{attrs:{id:"汉阳片区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#汉阳片区"}},[r._v("#")]),r._v(" 汉阳片区")]),r._v(" "),e("p",[r._v("卓越大江 2.0w")]),r._v(" "),void 0],2)}),[],!1,null,null,null);t.default=i.exports}}]);