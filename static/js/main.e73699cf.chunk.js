(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),u=n(1),d=n.n(u),p=n(0),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={wasPresed:!1,keyPres:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){e.setState({wasPresed:!0,keyPres:t.key})}))}},{key:"componentWillUnmount",value:function(){var e=this;document.addEventListener("keyup",(function(t){e.setState({wasPresed:!0,keyPres:t.key})}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:this.state.wasPresed?"The last pressed key is [".concat(this.state.keyPres,"]"):"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);a.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e73699cf.chunk.js.map