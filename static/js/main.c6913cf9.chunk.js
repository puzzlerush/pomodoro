(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(2),a=n.n(i),c=n(8),r=n.n(c),o=(n(14),n(15),n(3)),l=n(6),u=n(1),h=n(5),d=n(4);n(16);function b(e){var t=Math.floor(e/3600);e%=3600;var n=Math.floor(e/60);return e%=60,("00"+t).substr(-2)+":"+("00"+n).substr(-2)+":"+("00"+e).substr(-2)}var j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={timeRemaining:s.props.sessionDuration,lastUpdateTime:Date.now(),interval:null,onBreak:!1,inCycle:!1},s.update=s.update.bind(Object(u.a)(s)),s.start=s.start.bind(Object(u.a)(s)),s.stop=s.stop.bind(Object(u.a)(s)),s.reset=s.reset.bind(Object(u.a)(s)),s.setState=s.setState.bind(Object(u.a)(s)),s}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){t.timeRemaining==this.props.sessionDuration||this.state.inCycle||this.setState({timeRemaining:this.props.sessionDuration})}},{key:"update",value:function(){var e=this,t=Date.now(),n=t-this.state.lastUpdateTime;(this.setState((function(e,s){return{timeRemaining:e.timeRemaining-n,lastUpdateTime:t}})),this.state.timeRemaining<=0)&&(document.getElementById("audio-element").play(),this.setState((function(t,n){return{timeRemaining:t.onBreak?e.props.sessionDuration:e.props.breakDuration,onBreak:!t.onBreak}})))}},{key:"start",value:function(){this.state.interval||this.setState({lastUpdateTime:Date.now(),interval:setInterval(this.update,1),inCycle:!0})}},{key:"stop",value:function(){clearInterval(this.state.interval),this.setState({interval:null})}},{key:"reset",value:function(){this.stop(),this.setState({timeRemaining:this.props.sessionDuration,interval:null,onBreak:!1,inCycle:!1})}},{key:"render",value:function(){var e=this,t=Math.floor(this.state.timeRemaining/1e3);return Object(s.jsxs)("div",{className:"countdown",children:[this.state.onBreak?Object(s.jsx)("p",{className:"break",children:"break"}):Object(s.jsx)("p",{className:"session",children:"session"}),Object(s.jsx)("div",{className:"time",children:b(t)}),this.state.interval?Object(s.jsx)("div",{className:"timecontrol",onClick:function(){e.stop()},children:"Stop"}):Object(s.jsx)("div",{className:"timecontrol",onClick:function(){return e.start()},children:"Start"}),Object(s.jsx)("div",{className:"timecontrol",onClick:function(){e.reset()},children:"Reset"}),Object(s.jsx)("audio",{id:"audio-element",children:Object(s.jsx)("source",{src:"https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"})})]})}}]),n}(a.a.Component),m=(n(17),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e,s){var i;return Object(o.a)(this,n),(i=t.call(this,e)).name=s,i}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"timeSetter",children:[Object(s.jsx)("div",{children:this.name}),Object(s.jsx)("div",{className:"incdec",onClick:this.props.clickInc,children:"+"}),Object(s.jsx)("div",{children:this.props.value}),Object(s.jsx)("div",{className:"incdec",onClick:this.props.clickDec,children:"-"})]})}}]),n}(a.a.Component)),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e,"break")}return n}(m),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e,"session")}return n}(m),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={breakLength:5,sessionLength:25},s.incrementBreak=s.incrementBreak.bind(Object(u.a)(s)),s.decrementBreak=s.decrementBreak.bind(Object(u.a)(s)),s.incrementSession=s.incrementSession.bind(Object(u.a)(s)),s.decrementSession=s.decrementSession.bind(Object(u.a)(s)),s}return Object(l.a)(n,[{key:"incrementBreak",value:function(){this.setState((function(e,t){return{breakLength:e.breakLength+1}}))}},{key:"decrementBreak",value:function(){this.state.breakLength<=1||this.setState((function(e,t){return{breakLength:e.breakLength-1}}))}},{key:"incrementSession",value:function(){this.setState((function(e,t){return{sessionLength:e.sessionLength+1}}))}},{key:"decrementSession",value:function(){this.state.sessionLength<=1||this.setState((function(e,t){return{sessionLength:e.sessionLength-1}}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{sessionDuration:60*this.state.sessionLength*1e3,breakDuration:60*this.state.breakLength*1e3}),Object(s.jsx)(p,{value:this.state.breakLength,clickInc:this.incrementBreak,clickDec:this.decrementBreak}),Object(s.jsx)(k,{value:this.state.sessionLength,clickInc:this.incrementSession,clickDec:this.decrementSession})]})}}]),n}(a.a.Component);var O=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("p",{id:"title",children:"pomodoro clock"}),Object(s.jsx)(v,{})]})})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c6913cf9.chunk.js.map