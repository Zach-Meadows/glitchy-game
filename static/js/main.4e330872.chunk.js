(window["webpackJsonpglitchy-game"]=window["webpackJsonpglitchy-game"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,r){e.exports=r.p+"static/media/playerImage.85c158f7.jpg"},,function(e,t,r){e.exports=r.p+"static/media/rock.aab2d776.jpg"},function(e,t,r){e.exports=r.p+"static/media/tree.3be21d2f.png"},function(e,t,r){e.exports=r.p+"static/media/grass-patch.6f3f2fc9.jpg"},function(e,t,r){e.exports=r.p+"static/media/pebble.0aef33b9.jpg"},,,function(e,t,r){e.exports=r.p+"static/media/up.cfbcc9f6.jpg"},function(e,t,r){e.exports=r.p+"static/media/down.8126b2ed.jpg"},function(e,t,r){e.exports=r.p+"static/media/left.3f1b53d4.jpg"},function(e,t,r){e.exports=r.p+"static/media/right.0ef99b65.jpg"},,,function(e,t,r){e.exports=r(41)},,,,,function(e,t,r){},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(9),c=r.n(a),i=(r(34),r(1)),p=r(15),l=r.n(p),u=r(2),s=r(6);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={position:[0,0],facing:"DOWN",interacted:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_PLAYER":case"CHANGE_FACING":case"INTERACTED":return d({},t.payload);default:return e}};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={tiles:[],interact:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TILES":return O({},t.payload);default:return e}};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={text:"You must construct additional pylons",display:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TEXT":return j({},t.payload);default:return e}};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={layout:1,conditionMet:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ZONE":return P({},t.payload);default:return e}},k=Object(s.b)({player:y,map:m,textbox:E,zone:D}),T=Object(s.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),N=80,I=5*N;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){switch(e){case"LEFT":return 6;case"RIGHT":return 73;case"UP":return 156;case"DOWN":default:return 224}}var L=Object(u.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.player)}))(function(e){function t(e){return e[0]>=0&&e[0]<=I-N&&e[1]>=0&&e[1]<=I-N}function r(e){var t=T.getState().map.tiles[e[1]/N][e[0]/N];return 0===t||9===t}function n(e){var n=T.getState().player.position,o=function(e){var t=T.getState().player.position;switch(e){case"UP":return[t[0],t[1]-N];case"DOWN":return[t[0],t[1]+N];case"LEFT":return[t[0]-N,t[1]];case"RIGHT":return[t[0]+N,t[1]]}}(e);T.dispatch({type:"MOVE_PLAYER",payload:C({},T.getState().player,{position:t(o)&&r(o)?o:n})})}function o(e){T.dispatch({type:"CHANGE_FACING",payload:C({},T.getState().player,{facing:e})})}function a(e){(0,T.getState().map.rules)(e);var t=T.getState().zone.conditionMet,r=T.getState().player.position;9===T.getState().map.tiles[r[1]/N][r[0]/N]&&e===T.getState().map.exit&&t?T.dispatch({type:"CHANGE_ZONE",payload:C({},T.getState().zone,{conditionMet:!1,layout:T.getState().zone.layout+1})}):n(e)}return window.addEventListener("keydown",(function(e){if(e.preventDefault(),!T.getState().textbox.display)switch(e.keyCode){case 37:case 65:return o("LEFT"),a("LEFT");case 38:case 87:return o("UP"),a("UP");case 39:case 68:return o("RIGHT"),a("RIGHT");case 40:case 83:return o("DOWN"),a("DOWN");default:console.log(e.keyCode)}})),window.addEventListener("keyup",(function(e){if(13===e.keyCode)return function(e){var t,r=T.getState().player.facing,n=T.getState().player.position,o=T.getState().map.interact,a=(t=function(e){switch(e){case"UP":return[n[0],n[1]-N];case"DOWN":return[n[0],n[1]+N];case"LEFT":return[n[0]-N,n[1]];case"RIGHT":return[n[0]+N,n[1]]}}(r))[0]<0||t[1]<0||t[0]>I-N||t[1]>I-N?void 0:[t[0]/N,t[1]/N];T.dispatch({type:"CHANGE_TEXT",payload:_({},T.getState().textbox,{text:void 0===a?"You can't escape.":o[a[1]][a[0]]})});var c=T.getState().textbox.display;T.dispatch({type:"CHANGE_TEXT",payload:_({},T.getState().textbox,{display:!!T.getState().textbox.text&&!c})}),(0,T.getState().map.rules)(e,a)}(e.keyCode)})),e}((function(e){return o.a.createElement("div",{style:{position:"absolute",top:e.position[1],left:e.position[0],backgroundImage:"url(".concat(l.a,")"),backgroundPosition:"".concat(H(e.facing),"px -15px"),backgroundSize:"290px",width:"80px",height:"80px"}})}))),z=r(17),W=r.n(z),M=r(18),F=r.n(M),U=r(19),X=r.n(U),Y=r(20),V=r.n(Y);function B(e){switch(e){case 1:return W.a;case 2:return F.a;default:return 0===Math.floor(2*Math.random())?X.a:V.a}}function Z(e){return o.a.createElement("div",{style:{margin:0,backgroundImage:'url("'.concat(B(e.value),'")'),backgroundColor:"rgb(170,169,165)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",display:"inline-flex",height:N,width:N,boxShadow:"0 0 2px 2px rgb(151,152,147) inset"}})}var J=Object(u.b)((function(e){return{tiles:e.map.tiles}}))((function(e){return o.a.createElement("div",{style:{width:"400px",height:"400px",backgroundColor:"green"}},e.tiles.map((function(e,t){return o.a.createElement("div",{style:{height:N},key:t},e.map((function(e,t){return o.a.createElement(Z,{value:e,key:t})})))})))})),$=r(7),q=r(8);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(){var e=Object($.a)(["\nborder: solid white 2px;\njustify-self: center;\nposition: absolute;\nalign-self: center;\nbackground-color: wheat;\nwidth: 300px;\nborder-radius: 20px;\nright: 50px;\nz-index: 5;\nopacity: 1;\nbox-shadow: 12px 12px rgba(0,0,0,0.3);\n"]);return Q=function(){return e},e}var ee=q.a.div(Q());var te=Object(u.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.textbox)}))((function(e){return o.a.createElement(o.a.Fragment,null,e.display&&e.text?o.a.createElement(ee,null,o.a.createElement("h3",{style:{textAlign:"center"}},e.text),o.a.createElement("p",{style:{textAlign:"right",paddingRight:"10px"}},"Press ",o.a.createElement("b",null,"Enter")," >")):null)}));function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe={tiles:[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,9,0,0],[0,0,1,0,0]],interact:[[0,0,0,0,0],[0,0,0,0,0],[0,0,"it's a rock",0,0],[0,0,0,0,0],[0,0,"it's a rock",0,0]],exit:"RIGHT",rules:function(){T.dispatch({type:"CHANGE_ZONE",payload:ne({},T.getState().zone,{conditionMet:!0})})}},ae={tiles:[[0,0,2,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],interact:[[0,0,"You found a tree. You wonder why it's here, and why you're here as well.",0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],exit:"DOWN",rules:function(e,t){var r=T.getState().player.interacted;if(r.includes(2)&&!T.getState().textbox.display&&T.dispatch({type:"CHANGE_TEXT",payload:ne({},T.getState().textbox,{text:"OH, hi there. So this game isn't done. I've got some work to do. But feel free to roam around.",display:!0})}),void 0!=t&&13===e){var n=T.getState().map.tiles[t[1]][t[0]];r.push(n),T.dispatch({type:"INTERACTED",payload:ne({},T.getState().player,{interacted:r})})}else void 0===t&&13===e&&(r.push("WALL"),T.dispatch({type:"INTERACTED",payload:ne({},T.getState().player,{interacted:r})}))}},ce=[ne({},oe),ne({},ae)];function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=Object(u.b)((function(e){return pe({},e.zone)}))((function(e){var t=e.layout;return T.dispatch({type:"ADD_TILES",payload:pe({},ce[t-1])}),o.a.createElement("div",{style:{borderRadius:"5px",border:"solid white 5px",position:"relative",display:"flex",width:"400px",height:"400px",margin:"20px auto"}},o.a.createElement(te,null),o.a.createElement(J,null),o.a.createElement(L,null))})),ue=r(23),se=r.n(ue),fe=r(24),de=r.n(fe),be=r(25),ye=r.n(be),ge=r(26),Oe=r.n(ge);function he(){var e=Object($.a)(["\nwidth: 100px;\n"]);return he=function(){return e},e}function me(){var e=Object($.a)(["\ndisplay: flex;\nalign-items: center;\nmargin: 5px auto;\n"]);return me=function(){return e},e}var we=q.a.div(me()),je=q.a.div(he());var ve=function(){return o.a.createElement("div",{style:{backgroundColor:"black",color:"white",border:"solid white 5px",borderRadius:"5px",padding:"10px"}},o.a.createElement("h2",null,"Controls"),o.a.createElement("section",{style:{width:"200px"}},"Movement:",o.a.createElement(we,null,o.a.createElement(je,null,"Up - W or "),o.a.createElement("div",{style:{backgroundImage:"url(".concat(se.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"50px",height:"50px"}})),o.a.createElement(we,null,o.a.createElement(je,null,"Down -  S or "),o.a.createElement("div",{style:{backgroundImage:"url(".concat(de.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"50px",height:"50px"}})),o.a.createElement(we,null,o.a.createElement(je,null,"Left -  A or "),o.a.createElement("div",{style:{backgroundImage:"url(".concat(ye.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"50px",height:"50px"}})),o.a.createElement(we,null,o.a.createElement(je,null,"Right -   D or "),o.a.createElement("div",{style:{backgroundImage:"url(".concat(Oe.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"50px",height:"50px"}})),o.a.createElement(we,null,o.a.createElement(je,null,"Interact:"),o.a.createElement("div",{style:{border:"solid white 3px",padding:"5px",margin:"5px",width:"75px",textAlign:"right",borderRadius:"5px"}},o.a.createElement("b",null,"ENTER")))))};var Ee=function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{style:{backgroundColor:"black",border:"solid white 5px",color:"white",borderRadius:"5px",width:"300px",margin:"30px"}},o.a.createElement("h1",{style:{textAlign:"center"}},"*Working Title*")),o.a.createElement(le,null),o.a.createElement(ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(u.a,{store:T},o.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[29,1,2]]]);
//# sourceMappingURL=main.4e330872.chunk.js.map