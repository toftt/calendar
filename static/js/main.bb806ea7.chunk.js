(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(259)},115:function(e,t,n){},117:function(e,t,n){},121:function(e,t){var n=document.getElementById("canv"),a=n.getContext("2d"),r=n.width=document.documentElement.clientWidth,c=n.height=document.documentElement.clientHeight;!function(){for(var e,t=[],n=1,o=20,i=0;i<400;++i)(e=new s).y=Math.random()*(c+50),e.x=Math.random()*r,e.t=Math.random()*(2*Math.PI),e.sz=100/(10+100*Math.random())*.5*1.3,e.sp=.15*Math.pow(.8*e.sz,2)*.5*1,e.sp=e.sp<1?1:e.sp,t.push(e);function s(){this.draw=function(){this.g=a.createRadialGradient(this.x,this.y,0,this.x,this.y,this.sz),this.g.addColorStop(0,"hsla(255,255%,255%,1)"),this.g.addColorStop(1,"hsla(255,255%,255%,0)"),a.moveTo(this.x,this.y),a.fillStyle=this.g,a.beginPath(),a.arc(this.x,this.y,this.sz,0,2*Math.PI,!0),a.fill()}}!function e(){window.requestAnimationFrame(e);a.clearRect(0,0,r,c);a.fillStyle="hsla(242, 95%, 3%, 0)";a.fillRect(0,0,r,c);a.fill();for(var i=0;i<t.length;++i){var s=t[i];s.t+=.05,s.t=s.t>=2*Math.PI?0:s.t,s.y+=.7*s.sp,s.x+=.7*Math.sin(s.t*n)*(.3*s.sz),s.y>c+50&&(s.y=-10-Math.random()*o),s.x>r+o&&(s.x=-o),s.x<-o&&(s.x=r+o),s.draw()}}()}(),window.addEventListener("resize",function(){n.width=r=document.documentElement.clientWidth,n.height=c=document.documentElement.clientHeight},!1)},259:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(115),n(117),n(121),n(6)),s=n(7),l=n(9),u=n(8),p=n(10),d=n(20),h=n(43),m=n(34),f={token:null,tracks:Array.apply(null,Array(24))},b=n(19),g=n(109),k=n.n(g),w=n(65),v=n.n(w),y=n(105),O=n.n(y),E=n(49),j=n.n(E),C=n(106),S=n.n(C),x=n(45),D=n.n(x),T=n(101),I=n.n(T),N=n(102),R=n.n(N),A=n(104),_=n.n(A),M=n(48),z=n.n(M),L=n(33),P=n.n(L),K=n(67),W=n.n(K),B=n(103),F=n.n(B),G=n(66),H=n.n(G),J=n(99),U=n.n(J),q=n(100),Q=n.n(q),Y=["toplists","pop","hiphop","rock","workout","chill","edm_dance","mood"],V=new U.a;V.setPromiseImplementation(Q.a);var X=function(e,t){return V.setAccessToken(e),V.searchTracks(t,{limit:10})},Z=function(e,t){return V.setAccessToken(e),V.play(t)},$=function(e){return V.setAccessToken(e),V.pause()},ee=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){!1===n.state.playing?Z(n.props.token,{uris:[n.props.track.uri]}).then(function(e){return n.setState({playing:!0})}):$(n.props.token).then(function(){return n.setState({playing:!1})})},n.state={playing:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.theme,c=t.track,o=c.name,i=c.artists;return r.a.createElement(I.a,{className:n.card},r.a.createElement("div",{className:n.details},r.a.createElement(R.a,{className:n.content},r.a.createElement(P.a,{component:"h5",variant:"h5"},o.length<=23?o:o.substr(0,23)+"..."),r.a.createElement(P.a,{variant:"subtitle1",color:"textSecondary"},i[0].name)),r.a.createElement("div",{className:n.controls},r.a.createElement(z.a,{"aria-label":"Previous"},"rtl"===a.direction?r.a.createElement(H.a,null):r.a.createElement(W.a,null)),r.a.createElement(z.a,{"aria-label":"Play/pause",onClick:function(){return e.handleClick()}},r.a.createElement(F.a,{className:n.playIcon})),r.a.createElement(z.a,{"aria-label":"Next"},"rtl"===a.direction?r.a.createElement(W.a,null):r.a.createElement(H.a,null)))),r.a.createElement(_.a,{className:n.cover,image:c.album.images[0].url,title:"Live from space album cover"}))}}]),t}(r.a.Component),te=Object(d.b)(function(e){return{token:e.token}})(Object(b.withStyles)(function(e){return{card:{display:"flex",flexGrow:2,whiteSpace:"nowrap",textOverflow:"ellipsis"},details:{display:"flex",flexDirection:"column",flexGrow:2},content:{flex:"2 0 auto"},cover:{width:151,flexShrink:0},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing.unit,paddingBottom:e.spacing.unit},playIcon:{height:38,width:38}}},{withTheme:!0})(ee)),ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){e.preventDefault(),n.setState({input:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.state.input||n.setState({input:"Queen - Bohemian Rhapsody"}),X(n.props.token,n.state.input).then(function(e){n.setState({results:e.tracks.items})})},n.state={input:"",results:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{id:"search_box"},r.a.createElement(O.a,{className:t.list},r.a.createElement(j.a,null,r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)},autoComplete:"off",className:t.container},r.a.createElement(S.a,{fullWidth:!0},r.a.createElement(v.a,{rootRef:this.props.inputRef},r.a.createElement(D.a,{autoFocus:!0,className:t.input,value:this.state.input,onChange:function(t){return e.onChange(t)},placeholder:"Search for a track"}))))),r.a.createElement(j.a,null),this.state.results.map(function(t){return r.a.createElement(j.a,{key:t.id,onClick:function(){return e.props.setTrack(t,e.props.selectedDate)}},r.a.createElement(te,{track:t}))})))}}]),t}(r.a.Component),ae=Object(d.b)(function(e){return{token:e.token}},{setTrack:function(e,t){return{type:"SET_TRACK",index:t,track:e}}})(Object(b.withStyles)(function(e){return{card:{display:"flex",width:"100%"},content:{flex:"1 0 auto"},search:{width:"100%"},container:{display:"flex",width:"inherit"},list:{width:"100%"},input:{fontSize:"1.3rem"},trackIndex:{textAlign:"center"}}})(ne)),re=n(107),ce=n.n(re),oe=n(68),ie=n.n(oe),se=n(108),le=n.n(se),ue=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={categories:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;(function(e){V.setAccessToken(e);var t=[];return V.getCategories().then(function(e){return e.categories.items.forEach(function(e){Y.includes(e.id)&&t.push(e)}),t})})(this.props.token).then(function(t){return e.setState({categories:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(ce.a,{cellHeight:180,className:e.gridList},r.a.createElement(ie.a,{key:"Subheader",cols:2,style:{height:"auto"}}),this.state.categories.map(function(e){return r.a.createElement(ie.a,{key:e.id},r.a.createElement("img",{src:e.icons[0].url,alt:e.name}),r.a.createElement(le.a,{title:e.name}))})))}}]),t}(r.a.Component),pe=Object(d.b)(function(e){return{token:e.token}})(Object(b.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"rgba(0,0,0,0)"},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}})(ue)),de=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(k.a,{open:this.props.open,onClose:function(){return e.props.toggleDrawer(!1)},classes:{paper:t.drawer}},r.a.createElement("div",{tabIndex:0,role:"button"},r.a.createElement(ae,{inputRef:this.props.inputRef,selectedDate:this.props.selectedDate}),r.a.createElement(pe,null)))}}]),t}(r.a.Component),he=Object(b.withStyles)({drawer:{backgroundColor:"rgba(255, 255, 255, 0.6)"}})(de),me=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(he,{toggleDrawer:function(t){return e.props.toggleDrawer(t)},open:this.props.drawerIsOpen,selectedDate:this.props.selectedDate,inputRef:this.props.inputRef}))}}]),t}(r.a.Component),fe=Object(b.withStyles)({drawer:{background:"rgba(255, 255, 255, 0.6)"},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20,color:"white"}})(me),be=n(46),ge=n.n(be),ke=n(32),we=n.n(ke);var ve=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.copyToClipboard=function(e){n.textArea.select(),document.execCommand("copy"),e.target.focus()},n.state={open:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ge.a,{onClick:this.handleOpen,className:t.button,variant:"outlined"},"Share calendar"),r.a.createElement(we.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:t.paper},r.a.createElement(P.a,{variant:"h6",id:"modal-title"},r.a.createElement(D.a,{value:function(e){if(24!==e.filter(function(e){return e}).length)return"You need to complete the calendar.";var t=window.location.origin,n=e.map(function(e){return e.id});return"".concat(t,"?tracks=").concat(n.join("_"))}(this.props.tracks),style:{width:"100%",overflow:"hidden",resize:"none",whiteSpace:"nowrap"},inputComponent:"textarea",inputRef:function(t){return e.textArea=t},onClick:this.copyToClipboard,readOnly:!0})))))}}]),t}(r.a.Component),ye=Object(d.b)(function(e){return{tracks:e.tracks}})(Object(b.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit},button:{fontSize:"20px"}}})(ve));var Oe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.open,a=e.handleClose;return r.a.createElement("div",null,r.a.createElement(we.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:n,onClose:function(){return a()}},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:t.paper},r.a.createElement(te,{track:this.props.track}))))}}]),t}(r.a.Component),Ee=Object(b.withStyles)(function(e){return{paper:{position:"absolute",width:"600px",backgroundColor:"rgba(255,255,255,.4)",boxShadow:e.shadows[5],padding:4*e.spacing.unit}}})(Oe),je=new Date,Ce=je.getDate(),Se=11===je.getMonth()?Ce:0,xe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){console.log(n.state),n.setState({open:!1})},n.state={open:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.date,a=t.track,c=t.toggleDrawer,o=t.mode,i=a&&n<=Se||"edit"===o,s=a&&a.album.images[0].url,l=i&&s,u=function(){};return"edit"!==o||l?"edit"===o&&l?u=this.handleOpen:l&&(u=this.handleOpen):u=function(){return c(!0,n)},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"day past",style:{backgroundImage:"url(".concat(l?s:"http://www.designcouch.com/assets/images/christmaspresent11.svg",")"),backgroundSize:l?"100% 100%":"45%"},onClick:u},r.a.createElement("span",{className:"date"},n)),r.a.createElement(Ee,{open:this.state.open,track:a,handleClose:function(){return e.handleClose()}}))}}]),t}(r.a.Component),De=[{id:"one",days:[1,2,3,4,5,6]},{id:"two",days:[7,8,9,10,11,12]},{id:"three",days:[13,14,15,16,17,18]},{id:"four",days:[19,20,21,22,23,24]}],Te=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.toggleDrawer;return r.a.createElement("div",{id:"calendar_wrapper"},r.a.createElement("h1",null,"Spotify Christmas Calendar"),r.a.createElement("section",{id:"calendar",className:"collectonme"},De.map(function(t){return r.a.createElement("div",{id:t.id,key:t.id,className:"week"},t.days.map(function(t){if(null===t)return r.a.createElement("div",{className:"day noDate"});var a=e.props.tracks[t-1];return r.a.createElement(xe,{date:t,key:t,track:a,toggleDrawer:n,mode:e.props.mode})}))})),"view"===this.props.mode?null:r.a.createElement("div",{className:t.container},r.a.createElement(ge.a,{variant:"outlined",className:t.button,onClick:function(){return function(e,t){V.setAccessToken(e);var n=t.filter(function(e){return e}),a={seed_tracks:n.map(function(e){return e.id}),limit:24-n.length};return V.getRecommendations(a)}(e.props.token,e.props.tracks).then(function(t){return e.props.addRecommendations(t.tracks)})}},"Recommended autofill"),r.a.createElement(ye,null)),r.a.createElement("div",{id:"bottom",className:"collectonme"}))}}]),t}(r.a.Component),Ie=Object(d.b)(function(e){var t=e.tracks;return{token:e.token,tracks:t}},{addRecommendations:function(e){return{type:"ADD_RECOMMENDATIONS",tracks:e}}})(Object(b.withStyles)({button:{fontSize:"20px"},container:{display:"flex",justifyContent:"center",fontSize:"20px"}})(Te)),Ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleDrawer=function(e,t){console.log(t),n.setState({drawerIsOpen:e,selectedDate:t},function(){!0===e&&n.textInput.current&&n.textInput.current.focus()})},n.state={drawerIsOpen:!1,selectedDate:1},n.textInput=r.a.createRef(),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"bg-image"}),r.a.createElement(fe,{toggleDrawer:function(t){return e.toggleDrawer(t)},drawerIsOpen:this.state.drawerIsOpen,inputRef:this.textInput,selectedDate:this.state.selectedDate}),r.a.createElement(Ie,{toggleDrawer:function(t,n){return e.toggleDrawer(t,n)},mode:"edit"}))}}]),t}(r.a.Component),Re=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e,t,n=this;(e=this.props.token,t=this.props.trackIds,V.setAccessToken(e),V.getTracks(t)).then(function(e){return n.props.replaceAllTracks(e.tracks)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"bg-image"}),r.a.createElement(Ie,{toggleDrawer:function(e,t){},mode:"view"}))}}]),t}(r.a.Component),Ae=Object(d.b)(function(e){return{token:e.token}},{replaceAllTracks:function(e){return{type:"REPLACE_ALL_TRACKS",tracks:e}}})(Re),_e=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=new Date;if(e&&!(n.getTime()>t))return e},Me=function(e,t){localStorage.setItem("token",e),localStorage.setItem("expirationTime",(new Date).getTime+t)},ze=function(){var e=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e},{});window.location.hash="";var t=e.access_token||_e(),n=new URLSearchParams(window.location.search).get("tracks"),a=n;t||(window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("de8a7d941d164ea4854a21ebaca90c71","&redirect_uri=").concat("http://09de258c.eu.ngrok.io","&scope=").concat(["user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true&state=").concat(a));var r=e.state||n||"null";return Me(t,e.expires_in),{token:t,hashState:r}},Le=Object(h.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(m.a)({},e,{token:t.token});case"SET_TRACK":return Object(m.a)({},e,{tracks:e.tracks.map(function(e,n){return n+1!==t.index?e:t.track})});case"REPLACE_ALL_TRACKS":return Object(m.a)({},e,{tracks:t.tracks});case"ADD_RECOMMENDATIONS":var n=t.tracks;return Object(m.a)({},e,{tracks:e.tracks.map(function(e){return e||n.shift()})});default:return e}}),Pe=ze(),Ke=Pe.token,We=Pe.hashState;Le.dispatch(function(e){return{type:"SET_TOKEN",token:e}}(Ke));var Be=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return"null"!==We?r.a.createElement(d.a,{store:Le},r.a.createElement(Ae,{trackIds:We.split("_")})):r.a.createElement(d.a,{store:Le},r.a.createElement(Ne,null))}}]),t}(a.Component);o.a.render(r.a.createElement(Be,null),document.getElementById("root"))}},[[110,2,1]]]);
//# sourceMappingURL=main.bb806ea7.chunk.js.map