// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: cardboard2.ggsk
// Generated 2022-06-05T17:47:37

function pano2vrSkin(player,base) {
	player.addVariable('ht_ani', 2, false);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_auto_hide_controller', 2, true);
	player.addVariable('vis_auto_hide_controller_1', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._ht_node_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=200;
		el.ggId="ht_node_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_timer.ggIsActive=function() {
			return (me._ht_node_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._ht_node_timer.ggTimestamp) / me._ht_node_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_node_timer.ggActivate=function () {
			player.setVariableValue('ht_ani', true);
		}
		me._ht_node_timer.ggDeactivate=function () {
			player.setVariableValue('ht_ani', false);
		}
		me._ht_node_timer.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ht_node_timer);
		el=me._ht_node_timer2=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=200;
		el.ggId="ht_node_timer2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 147px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_timer2.ggIsActive=function() {
			return (me._ht_node_timer2.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._ht_node_timer2.ggTimestamp) / me._ht_node_timer2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_node_timer2.ggActivate=function () {
			player.setVariableValue('ht_ani', true);
		}
		me._ht_node_timer2.ggDeactivate=function () {
			player.setVariableValue('ht_ani', false);
		}
		me._ht_node_timer2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ht_node_timer2);
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI0LjcgMTI0Ljc7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyNC43IDEyNC43Ii'+
			'B5PSIwcHgiIHg9IjBweCI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTEyLDQyLjFjLTIuMiwwLTQsMS44LTQsNHYzMi43YzAsMi4yLDEuOCw0LDQsNGgxMDAuOGMyLjIsMCw0LTEuOCw0LTRWNDZjMC0yLjItMS44LTQtNC00SDEyeiBNMzAuNCw3My43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuMywwLTExLjQtNS4xLTExLjQtMTEuNEMxOSw1Ni4xLDI0LjEsNTEsMzAuNCw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDNDEuOCw2OC42LDM2LjcsNzMuNywzMC40LDczLjd6IE02Mi40LDczLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNC01LjEtMTEuNC0xMS40QzUx'+
			'LDU2LjEsNTYuMSw1MSw2Mi40LDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEM3My43LDY4LjYsNjguNiw3My43LDYyLjQsNzMuN3ogTTk0LjMsNzMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzg4LDczLjcsODMsNjguNiw4Myw2Mi40QzgzLDU2LjEsODgsNTEsOTQuMyw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDMTA1LjcsNjguNiwxMDAuNiw3My43LDk0LjMsNzMuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPGNpcmNsZSBjeD0iMzAuNCIgZmlsbD0iI0ZGRkZGRiIgY3k9IjYyLjQiIHI9IjExLjQiLz4KICAgPGNpcmNsZSBjeD0iNj'+
			'IuNCIgZmlsbD0iI0ZGRkZGRiIgY3k9IjYyLjQiIHI9IjExLjQiLz4KICAgPGNpcmNsZSBjeD0iOTQuMyIgZmlsbD0iI0ZGRkZGRiIgY3k9IjYyLjQiIHI9IjExLjQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._show_controller_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI0LjcgMTI0Ljc7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyNC43IDEyNC43Ii'+
			'B5PSIwcHgiIHg9IjBweCI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTYuNCwzOS44Yy0yLjQsMC00LjQsMi00LjQsNC40djM2LjNjMCwyLjQsMiw0LjQsNC40LDQuNGgxMTJjMi40LDAsNC40LTIsNC40LTQuNFY0NC4yYzAtMi40LTItNC40LTQuNC00LjRINi40eiBNMjYuOSw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkMzOS41LDY5LjMsMzMuOCw3NSwyNi45LDc1eiBNNjIuNCw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42'+
			'YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkM3NSw2OS4zLDY5LjMsNzUsNjIuNCw3NXogTTk3LjksNzUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNywwLTEyLjYtNS43LTEyLjYtMTIuNmMwLTcsNS43LTEyLjYsMTIuNi0xMi42YzcsMCwxMi42LDUuNywxMi42LDEyLjZDMTEwLjUsNjkuMywxMDQuOCw3NSw5Ny45LDc1eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyNi45IiBmaWxsPSIjRkZGRkZGIiBjeT0iNjIuNCIgcj0iMTIuNiIvPgogICA8Y2lyY2xlIGNsYXNzPS'+
			'JzdDAiIGN4PSI2Mi40IiBmaWxsPSIjRkZGRkZGIiBjeT0iNjIuNCIgcj0iMTIuNiIvPgogICA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI5Ny45IiBmaWxsPSIjRkZGRkZGIiBjeT0iNjIuNCIgcj0iMTIuNiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._show_controller_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 128px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._show_controller_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_controller_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._show_controller_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._show_controller_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._show_controller_button.style[domTransition]='opacity 500ms ease 0ms';
				if (me._show_controller_button.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._show_controller_button.style.opacity == 0.0) { me._show_controller_button.style.visibility="hidden"; } }, 505);
					me._show_controller_button.style.opacity=0;
				}
				else {
					me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
					me._show_controller_button.style.opacity=1;
				}
			}
		}
		me._show_controller_button.onclick=function (e) {
			me._hide_controller_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_controller_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button.onmouseover=function (e) {
			me._show_controller_button__img.style.visibility='hidden';
			me._show_controller_button__imgo.style.visibility='inherit';
		}
		me._show_controller_button.onmouseout=function (e) {
			me._show_controller_button__img.style.visibility='inherit';
			me._show_controller_button__imgo.style.visibility='hidden';
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_controller_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=5000;
		el.ggId="hide_controller_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_timer.ggIsActive=function() {
			return (me._hide_controller_timer.ggTimestamp + me._hide_controller_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_controller_timer.ggActivate=function () {
			player.setVariableValue('vis_auto_hide_controller_1', true);
		}
		me._hide_controller_timer.ggDeactivate=function () {
			player.setVariableValue('vis_auto_hide_controller_1', false);
		}
		me._hide_controller_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._hide_controller_timer);
		me.divSkin.appendChild(me._show_controller_button);
		el=me._hide_controller_container=document.createElement('div');
		el.ggId="hide_controller_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_controller_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hide_controller_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hide_controller_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hide_controller_container.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hide_controller_container.ggCurrentLogicStateAlpha == 0) {
					me._hide_controller_container.style.visibility=me._hide_controller_container.ggVisible?'inherit':'hidden';
					me._hide_controller_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hide_controller_container.style.opacity == 0.0) { me._hide_controller_container.style.visibility="hidden"; } }, 505);
					me._hide_controller_container.style.opacity=0;
				}
			}
		}
		me._hide_controller_container.onmouseover=function (e) {
			me.elementMouseOver['hide_controller_container']=true;
		}
		me._hide_controller_container.onmouseout=function (e) {
			me.elementMouseOver['hide_controller_container']=false;
		}
		me._hide_controller_container.ontouchend=function (e) {
			me.elementMouseOver['hide_controller_container']=false;
		}
		me._hide_controller_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 110px;';
		hs+='height : 62px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNDksMzk4LjFsLTMwLjEsMzAuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwbC0xMS4zLTExLjNjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxNy43LTE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNy0xNy43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zYzAuNi0wLjYsMS42LTAuNiwyLjIsMGwzMC4x'+
			'LDMwYzAuMywwLjMsMC40LDAuNywwLjQsMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0OC41LDM5Ny40LTE0OC42LDM5Ny44LTE0OSwzOTguMXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5Mi41LDM3OS4zbDE3LjcsMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMTEuMywxMS4zYzAuNiwwLjYsMS42LDAuNiwyLjIsMGwzMC4xLTMwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4zLDAuNS0wLjcsMC40LTEuMWMwLTAuNC0wLjEtMC44LTAuNC0xLjFsLTMwLjEtMzBjLTAuNi0wLjYtMS42LTAuNi0yLjIsMGwtMT'+
			'EuMywxMS4zQy0xOTMuMSwzNzcuNy0xOTMuMSwzNzguNy0xOTIuNSwzNzkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ni4xLDM5OC4ybC0zMy41LDMzLjRjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMTIuNS0xMi41Yy0wLjctMC43LTAuNy0xLjcsMC0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxOS43LTE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcs'+
			'Mi40LDBsMzMuNSwzMy40YzAuMywwLjMsMC41LDAuOCwwLjUsMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0NS42LDM5Ny40LTE0NS43LDM5Ny45LTE0Ni4xLDM5OC4yeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTk0LjQsMzc3LjNsMTkuNywxOS43bC0xOS43LDE5LjdjLTAuNywwLjctMC43LDEuNywwLDIuNGwxMi41LDEyLjVjMC43LDAuNywxLjcsMC43LDIuNCwwbDMzLjUtMzMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC41LTAuOCwwLjUtMS4zYzAtMC40LTAuMi0wLjktMC41LTEuMmwtMzMuNS0zMy40Yy0wLjctMC43LT'+
			'EuNy0wLjctMi40LDBsLTEyLjUsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xOTUuMSwzNzUuNi0xOTUuMSwzNzYuNi0xOTQuNCwzNzcuM3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMiwyNS4xLTU2LjIsNTYuMnMyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTE4LjgsMzY2LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU3LjUsNDE2LjlsLTExLjMsMTEuM2MtMC42LDAuNi0xLjUsMC42LTIuMiwwbC0zMC4yLTMwLjFjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOCwwLjQtMS4ybDMwLjItMzAuMWMwLjYtMC42LDEuNS0wLjYsMi4yLDBsMTEuMywxMS4zYzAuNiwwLjYsMC42LDEuNSww'+
			'LDIuMmwtMTcuNywxNy43bDE3LjcsMTcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTYuOSw0MTUuNC0xNTYuOSw0MTYuMy0xNTcuNSw0MTYuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1Ny41LDQxNC43bC0xNy43LTE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMC42LTEuNSwwLTIuMmwtMTEuMy0xMS4zYy0wLjYtMC42LTEuNS0wLjYtMi4yLDBsLTMwLjIsMzAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuNCwwLjctMC40LDEuMmMwLDAuNCwwLjIsMC44LDAuNCwxLjFsMzAuMiwzMC4xYzAuNiwwLjYsMS41LDAuNiwyLjIsMG'+
			'wxMS4zLTExLjNDLTE1Ni45LDQxNi4zLTE1Ni45LDQxNS40LTE1Ny41LDQxNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU1LjYsNDE5LjFsLTEyLjUsMTIuNWMtMC43LDAuNy0xLjcsMC43LTIuNCwwbC0zMy41LTMzLjRjLTAuMy0wLjMtMC41LTAuOC0wLjUtMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDMzLjUtMzMuNGMwLjctMC43LDEuNy0wLjcsMi40LDBsMTIuNSwxMi41YzAuNywwLjcsMC43'+
			'LDEuNywwLDIuNGwtMTkuNywxOS43bDE5LjcsMTkuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTQuOSw0MTcuNC0xNTQuOSw0MTguNC0xNTUuNiw0MTkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1NS42LDQxNi43bC0xOS43LTE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMTIuNS0xMi41Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTMzLjUsMzMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuNSwwLjgtMC41LDEuM2MwLDAuNCwwLjIsMC45LDAuNSwxLjJsMzMuNSwzMy40YzAuNywwLjcsMS43LDAuNy'+
			'wyLjQsMGwxMi41LTEyLjVDLTE1NC45LDQxOC40LTE1NC45LDQxNy40LTE1NS42LDQxNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE0My44LDM5Mi45bC0zMCwzMC4xYy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40bC0zMC4xLTMwLjFjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxMS4zLTExLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTcuNywxNy43bDE3LjctMTcuN2MwLjYtMC42LDEuNi0w'+
			'LjYsMi4yLDBsMTEuMywxMS4zQy0xNDMuMiwzOTEuNC0xNDMuMiwzOTIuMy0xNDMuOCwzOTIuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1Ny4zLDM3OS41bC0xNy43LDE3LjdsLTE3LjctMTcuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xMS4zLDExLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwzMC4xLDMwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC4zLDAuNywwLjUsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsMzAtMzAuMWMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTExLjMtMTEuM0MtMTU1LjcsMzc4LjktMTU2Lj'+
			'csMzc4LjktMTU3LjMsMzc5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0MC40LDM5Mi41bC0zMy40LDMzLjVjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41Yy0wLjUsMC0wLjktMC4xLTEuMy0wLjVsLTMzLjQtMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOS43LDE5LjdsMTkuNy0xOS43YzAuNy0w'+
			'LjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM5LjcsMzkwLjctMTM5LjcsMzkxLjgtMTQwLjQsMzkyLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNTUuMywzNzcuNmwtMTkuNywxOS43bC0xOS43LTE5LjdjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzMuNCwzMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDMzLjQtMzMuNWMwLjctMC43LDAuNy0xLjcsMC0yLj'+
			'RsLTEyLjUtMTIuNUMtMTUzLjYsMzc2LjktMTU0LjYsMzc2LjktMTU1LjMsMzc3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE0My44LDQwMy4ybC0xMS4zLDExLjNjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTcuNy0xNy43bC0xNy43LDE3LjdjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwzMC0zMC4xYzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCww'+
			'LjEsMS4xLDAuNGwzMC4xLDMwLjFDLTE0My4yLDQwMS43LTE0My4yLDQwMi42LTE0My44LDQwMy4yeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTkyLjcsNDE0LjVsMTcuNy0xNy43bDE3LjcsMTcuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBsMTEuMy0xMS4zYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMzAuMS0zMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O0MtMTk0LjMsNDE1LjEtMTkzLjMsNDE1LjEtMTkyLjcsNDE0LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0MC40LDQwMy45bC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMTkuNy0xOS43bC0xOS43LDE5LjdjLTAuNywwLjctMS43LDAuNy0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xMi41LTEyLjVjLTAuNy0wLjctMC43LTEuNywwLTIuNGwzMy40LTMzLjVjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVjMC41'+
			'LDAsMC45LDAuMSwxLjMsMC41bDMzLjQsMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzkuNyw0MDIuMi0xMzkuNyw0MDMuMy0xNDAuNCw0MDMuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5NC43LDQxNi40bDE5LjctMTkuN2wxOS43LDE5LjdjMC43LDAuNywxLjcsMC43LDIuNCwwbDEyLjUtMTIuNWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTMzLjQtMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC4zLTAuOC0wLjUtMS4zLTAuNWMtMC40LDAtMC45LDAuMi0xLjIsMC41bC0zMy40LDMzLjVjLTAuNywwLjctMC43LDEuNywwLD'+
			'IuNGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTk2LjQsNDE3LjEtMTk1LjQsNDE3LjEtMTk0LjcsNDE2LjR6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me._hide_controller_container.appendChild(me._button_direction);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 127px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 72px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYjeGQ7JiN4YTsmI3g5OyBN'+
			'LTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjVjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiA8cGF0aCBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7IE0tMTM3'+
			'LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTcwLjZjLTAuNCwwLTAuOC0wLjItMS4yLTAuNnMtMC42LTAuOC0wLjYtMS40di0xNy4yJiN4ZDsmI3hhOyYjeDk7YzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi4zdjIyLjFjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0y'+
			'Mi4xaC0yMi4zYy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQxLjYsMzg5LjMtMTQxLjYsNDA0LjctMTQxLjYsNDA0Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjUuNSwzODcuNWgyMi4zYzEuMSwwLDEuNi'+
			'wwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjdjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjho'+
			'MTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDEuNiwwLjUsMS42LDEuOFYzODcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTI0Ljh2MjQuNmMwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMjQuNmgtMjQu'+
			'OGMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTImI3hkOyYjeGE7JiN4OTsmI3g5O2gyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOC'+
			'wwLjYtMS4yLDAuNmgtMjQuOHYyNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0yaDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwyVjM4Ni40eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -8px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomin);
		me._hide_controller_container.appendChild(me._button_zoom);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=-3;
		el.ggDy=-24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me._hide_controller_container.appendChild(me._loading);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=-82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 119px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzMi4xIiBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjIyLjIiIHk9IjM5NyIgeD0iLTIwNi4yIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4zLDEuOS00LjIsNC4yLTQu'+
			'MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLj'+
			'QsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPH'+
			'BhdGggZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzNS43IiBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0LjYiIHk9IjM5NyIgeD0iLTIwOS42Ii8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7JiN4OTtjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43Yz'+
			'AuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNz'+
			'IuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAt'+
			'MTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi'+
			'00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQsMi4xbDEuNCwxLjljMC41'+
			'LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTS0xNDIuNyw0MjQuNmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43YzIuMywwLDQuMiwxLjksNC4yLDQuMnY0Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzOC40LDQyMi43LTE0MC4zLD'+
			'QyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0x'+
			'OS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00Lj'+
			'ctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwyLjRsMS41LDIuMWMwLjUs'+
			'MC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEzOS4xLDQyNy42aC03MS44Yy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTUxLjhjMC0yLjYsMi4xLTQuNyw0LjctNC43aDcxLjhjMi42LDAsNC43LDIuMSw0LjcsNC43djUxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMT'+
			'M5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me._hide_controller_container.appendChild(me._button_fullscreen);
		el=me._button_silhouette_next_previous=document.createElement('div');
		el.ggId="button_silhouette_next_previous";
		el.ggDx=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 126px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_silhouette_next_previous.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_silhouette_next_previous.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xODIuMiw0MTcuMmMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yOC40LTE5LjhjLTEuMy0wLjktMS4zLTIuMywwLTMuMmwyOC40LTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMtMC45LDIuMy0wLjMsMi4zLDEuMkwtMTgyLjIsNDE3LjJMLTE4Mi4yLDQxNy4yeiBNLTE0OC4yLDQxNy4yYzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTI4LjQtMTkuOGMtMS4zLTAuOS0xLjMtMi4zLDAtMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMjguNC0xOS44YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yVjQxNy4yeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE4Mi4yLDQxNy4yYzAsMS41LTEsMi4xLTIuMywxLjJsLTI4LjQtMTkuOGMtMS4zLTAuOS0xLjMtMi4zLDAtMy4ybDI4LjQtMTkuOGMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Mi4yLDQxNy4yTC0xODIuMiw0MTcuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdG'+
			'ggZD0iTS0xNDguMiw0MTcuMmMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yOC40LTE5LjhjLTEuMy0wLjktMS4zLTIuMywwLTMuMmwyOC40LTE5LjhjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7VjQxNy4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._pano_prev__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE4Myw0MTkuNGMwLDEuNy0xLjIsMi4zLTIuNiwxLjNsLTMxLjUtMjJjLTEuNC0xLTEuNC0yLjYsMC0zLjZsMzEuNS0yMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNC0xLDIuNi0wLjQsMi42LDEuM0wtMTgzLDQxOS40TC0xODMsNDE5LjR6IE0tMTQ1LjIsNDE5LjRjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0zMS41LTIyYy0xLjQtMS0xLjQtMi42LDAtMy42bDMxLjUtMjImI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMSwyLjYtMC40LDIuNiwxLjNWNDE5LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTgzLDQxOS40YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Myw0MTkuNEwtMTgzLDQxOS40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0NS4yLDQxOS40YzAsMS'+
			'43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuM1Y0MTkuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev.onmouseover=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
		}
		me._pano_prev.onmouseout=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
		}
		me._button_silhouette_next_previous.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzEuMiwzOTguNmwtMjguNCwxOS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMnYtNDAuNGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNjkuOSwzOTYuMy0xNjkuOSwzOTcuNy0xNzEuMiwzOTguNnogTS0xMzcuMSwzOTguNmwtMjguNCwxOS44Yy0xLjMsMC45LTIu'+
			'MywwLjMtMi4zLTEuMnYtNDAuNGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzUuOCwzOTYuMy0xMzUuOCwzOTcuNy0xMzcuMSwzOTguNnoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjcuOCwzNzYuOGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOGMxLjMsMC45LDEuMywyLjMsMCwzLjJsLTI4LjQsMTkuOGMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7VjM3Ni44eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwMS'+
			'44LDM3Ni44YzAtMS41LDEtMi4xLDIuMy0xLjJsMjguNCwxOS44YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMjguNCwxOS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwMS44LDM3Ni44TC0yMDEuOCwzNzYuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3MC44LDM5OC44bC0zMS41LDIyYy0xLjQsMS0yLjYsMC40LTIuNi0xLjN2LTQ0LjljMC0xLjcsMS4xLTIuMywyLjYtMS4zbDMxLjUsMjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTY5LjMsMzk2LjItMTY5LjMsMzk3LjgtMTcwLjgsMzk4Ljh6IE0tMTMyLjksMzk4LjhsLTMxLjUsMjJjLTEuNCwxLTIu'+
			'NiwwLjQtMi42LTEuM3YtNDQuOWMwLTEuNywxLjItMi4zLDIuNi0xLjNsMzEuNSwyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTYuMi0xMzEuNSwzOTcuOC0xMzIuOSwzOTguOHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjcsMzc0LjVjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDMxLjUsMjJjMS40LDEsMS40LDIuNiwwLDMuNmwtMzEuNSwyMmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM3NC41eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwNC44LDM3NC41YzAtMS43LDEuMi0yLjMsMi42LTEuM2wzMS'+
			'41LDIyYzEuNCwxLDEuNCwyLjYsMCwzLjZsLTMxLjUsMjJjLTEuNCwxLTIuNiwwLjQtMi42LTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwNC44LDM3NC41TC0yMDQuOCwzNzQuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next.onmouseover=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
		}
		me._pano_next.onmouseout=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
		}
		me._button_silhouette_next_previous.appendChild(me._pano_next);
		me._hide_controller_container.appendChild(me._button_silhouette_next_previous);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 126px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Qy0xOTYuOSwzNzIt'+
			'MTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMiw0MzIuMyYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNjNS44LDAsMTEuMS0yLDE1'+
			'LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'tjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgsMzYxLjciIGZpbGw9IiNG'+
			'RkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2gtNy43aC0wLjVjMC03Lj'+
			'ctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcsMTQuOCw3LjEsMjAuNWw2'+
			'LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS'+
			'41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC0wLjZILTIyMS45eiBNLT'+
			'IxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3LjItNy4yYzQuNCwzLDku'+
			'OCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC'+
			'4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM0MtMTQw'+
			'LjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciIGZpbGw9IiNGRkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTI2Lj'+
			'ksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIC'+
			'A8cGF0aCBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwx'+
			'LDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LDM5N3ogTS0xNDQuNSw0MT'+
			'YuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBjMTguNywwLDM0LDE1LjIs'+
			'MzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy0wLjQtMC42LTAuNi0xLT'+
			'AuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0xNS4zLDIuOC0yMS4xLDcu'+
			'NCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii'+
			'BmaWxsPSIjRkZGRkZGIi8+CiAgPGNpcmNsZSBjeD0iLTE3NSIgZmlsbD0iI0ZGRkZGRiIgY3k9IjM5NyIgcj0iNCIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMw'+
			'LjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC40LDIsNC40LDQuNGMwLD'+
			'IuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45Yy0wLjctMC44LTAuNi0y'+
			'LDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy'+
			'43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEyNi45LDM5'+
			'Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLj'+
			'YsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxjaXJjbGUgY3g9Ii0xNzUiIGZpbGw9IiNGRkZGRkYiIGN5PSIzOTciIHI9IjQuNCIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me._hide_controller_container.appendChild(me._button_auto_rotate);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 127px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTI1LjMtMTcuNmgtMTQuNGMtMC44LDAtMS41LTAuNy0xLjUtMS41di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yQy0xNzIuMywzNzEuMS0xNzIuMyw0MjIuOS0xNzIu'+
			'Myw0MjIuOXogTS0xNTUsMzk3YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0zLjMtMS4xLTYuNS0zLjItOS4yYy0wLjYtMC43LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS42LTAuNiwyLjIsMEMtMTU2LjYsMzg3LjctMTU1LDM5Mi4zLTE1NSwzOTdMLTE1NSwzOTd6IE0tMTQwLjksMzk3YzAsOC4zLTMsMTYuNS04LjksMjNjLTAuNiwwLjYtMS42LDAuNi0yLjEsMCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNi45LTIuNC0xMy44LTcuMy0xOS4yYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS41LTAuNiwyLjEsMEMtMTQzLjksMzgwLjUtMTQwLjksMzg4LjctMTQwLjksMzk3TC0xNDAuOSwzOTd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCww'+
			'LjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtNTEuOEMtMTcyLjMsMzY5LjYtMTczLjMsMzY5LTE3NC42LDM2OS45eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE0OS45LDM3NGMtMC42LTAuNi0xLjYtMC42LTIuMSwwbC0xLjcsMS43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJjNC45LDUuNCw3LjMsMTIuMyw3LjMsMTkuMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOS0yLjQsMTMuOC03LjMsMTkuMmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjdjMC42LDAuNiwxLj'+
			'UsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDAuOSwzODguNy0xNDMuOSwzODAuNS0xNDkuOSwzNzR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYyLDM4NGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS40LDAsMi4yYzIuMiwyLjcsMy4yLDYsMy4yLDkuMmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMwLTQuNy0xLjYtOS4zLTQu'+
			'OC0xMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTYwLjQsMzgzLjQtMTYxLjQsMzgzLjQtMTYyLDM4NHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3Miw0MjUuOGMwLDEuNy0xLjEsMi4zLTIuNiwxLjNsLTI4LjEtMTkuNmgtMTZjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zQy0xNzIsMzY4LjItMTcyLDQyNS44LTE3Miw0MjUu'+
			'OHogTS0xNTIuNywzOTdjMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjYsMC0yLjRjMi40LTMsMy42LTYuNiwzLjYtMTAuM2gwYzAtMy42LTEuMi03LjMtMy42LTEwLjNjLTAuNy0wLjgtMC43LTEuNywwLTIuNGwxLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjgtMC42LDIuNCwwQy0xNTQuNSwzODYuNi0xNTIuNywzOTEuOC0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2'+
			'MtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRjNS40LTYsOC4yLTEzLjcsOC4yLTIxLjNoMGMwLTcuNi0yLjctMTUuMy04LjItMjEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMS44LTEuOGMwLjctMC43LDEuNy0wLjcsMi40LDBDLTE0MC41LDM3OC42LTEzNy4xLDM4Ny44LTEzNy4xLDM5N0wtMTM3LjEsMzk3eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTc0LjUsMzY2LjlsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgtMS43LDEuN3YxNy42YzAs'+
			'MC45LDAuOCwxLjcsMS43LDEuN2gxNmwyOC4xLDE5LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTU3LjVDLTE3MiwzNjYuNS0xNzMuMSwzNjUuOS0xNzQuNSwzNjYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xNDcuMSwzNzEuNGMtMC43LTAuNi0xLjctMC42LTIuNCwwbC0xLjgsMS44Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRjNS40LDYsOC4yLDEzLjcsOC4yLDIxLjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw3LjYtMi43LDE1LjMtOC4yLDIxLjNjLTAuNywwLjctMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNywwLjcsMS'+
			'43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuOC0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNS4y'+
			'LTEuOC0xMC40LTUuMy0xNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTU4LjcsMzgxLjktMTU5LjksMzgxLjktMTYwLjUsMzgyLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTIxNS44LDQwNC45di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNmMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMlYzODhsLTIyLjIsMjIuMmwtNS40LTMuN2gtMTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMTUuMSw0MDYuNC0yMTUuOCw0MDUuOC0yMTUuOCw0MDQuOXogTS0xNzIuMyw0MjIuOWMwLDEuNS0x'+
			'LDIuMS0yLjMsMS4ybC0xMi40LTguN2wxNC43LTE0LjdWNDIyLjl6IE0tMTU1LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQtNEMtMTU2LDM4OS42LTE1NSwzOTMuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDBsLTEuNy0xLjcmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MtMC42LTAuNi0wLjYtMS42LDAtMi4yYzQuOS01LjQsNy4zLTEyLjMsNy4zLTE5LjJoMGMwLTUuOS0xLjgtMTEuOC01LjQtMTYuOGwzLjgtMy44Qy0xNDMuMiwzODIuNC0xNDAuOSwzODkuNy0xNDAuOSwzOTcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43Qy0xMzkuNSwzNjQu'+
			'NC0xMzkuNSwzNjUuNC0xNDAuMSwzNjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTQwLjEsMzYzLjhsLTEuNy0xLjdjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTY2LDY2Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNywxLjdjMC4zLDAuMywwLjcsMC40LDEuMSwwLjRjMC40LDAsMC44LTAuMSwxLjEtMC40bDY2LTY2Qy0xMzkuNSwzNjUuNC0xMzkuNSwzNjQuNC0xNDAuMSwzNjMuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD'+
			'0iTS0xNzQuNiw0MjQuMWMxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtMjIuMmwtMTQuNywxNC43TC0xNzQuNiw0MjQuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xOTQuNSw0MTAuMmwyMi4yLTIyLjJ2LTE2LjljMC0xLjUtMS0yLjEtMi4zLTEuMmwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjgsMC43LDEuNSwxLjUsMS41aDE0LjRMLTE5NC41LDQxMC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE2MS45LDM5MC40YzEsMi4xLDEuNiw0LjMsMS42LDYuNmgwYzAsMy4zLTEu'+
			'MSw2LjUtMy4yLDkuMmMtMC42LDAuNy0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMwLTMuNy0xLTcuNC0zLTEwLjZMLTE2MS45LDM5MC40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1MS43LDM4MC4yYzMuNiw1LDUuNCwxMC45LDUuNCwxNi44aDBjMCw2LjktMi40LDEzLjgtNy4zLDE5LjJjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuNSwwLjYsMi4xLDBjNS45LTYuNSw4LjktMT'+
			'QuOCw4LjktMjNoMGMwLTcuMy0yLjMtMTQuNi03LTIwLjdMLTE1MS43LDM4MC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTIyMC4zLDQwNS44di0xNy42YzAtMC45LDAuOC0xLjcsMS43LTEuN2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zVjM4N2wtMjQuNywyNC43bC02LTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0xNkMtMjE5LjUsNDA3LjUtMjIwLjMsNDA2LjctMjIwLjMsNDA1Ljh6IE0tMTcyLDQyNS44YzAsMS43LTEuMiwy'+
			'LjMtMi42LDEuM2wtMTMuOC05LjZsMTYuMy0xNi4zVjQyNS44eiBNLTE1Mi43LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQuNC00LjRDLTE1My45LDM4OC44LTE1Mi43LDM5Mi45LTE1Mi43LDM5N0wtMTUyLjcsMzk3eiBNLTEzNy4xLDM5N2MwLDkuMi0zLjMsMTguNC05LjksMjUuNmMtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNyw4LjItMjEuM2gwYzAtNi42LTItMTMuMS02LTE4LjdsNC4zLTQuM0MtMTM5LjcsMzgwLjgtMTM3LjEsMzg4LjktMTM3LjEsMzk3TC0xMzcuMSwzOTd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVjMC40LDAsMC45LDAuMiwx'+
			'LjIsMC41bDEuOCwxLjhDLTEzNS42LDM2MC44LTEzNS42LDM2MS45LTEzNi4yLDM2Mi42eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTEzNi4yLDM2MC4ybC0xLjgtMS44Yy0wLjMtMC4zLTAuOC0wLjUtMS4yLTAuNXMtMC45LDAuMi0xLjIsMC41bC03My4zLDczLjNjLTAuNywwLjctMC43LDEuNywwLDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOGMwLjMsMC4zLDAuOCwwLjUsMS4yLDAuNWMwLjQsMCwwLjktMC4yLDEuMi0wLjVsNzMuMy03My4zQy0xMzUuNiwzNjEuOS0xMzUuNiwzNjAuOC0xMzYuMiwzNjAuMn'+
			'oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzQuNSw0MjcuMWMxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTI0LjZsLTE2LjMsMTYuM0wtMTc0LjUsNDI3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk2LjYsNDExLjdMLTE3MiwzODd2LTE4LjhjMC0xLjctMS4yLTIuMy0yLjYtMS4zbC0yOC4xLDE5LjZoLTE2Yy0wLjksMC0xLjcsMC44LTEuNywxLjd2MTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjksMC44LDEuNywxLjcsMS43aDE2TC0xOTYuNiw0MTEuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjAuNSwzODkuNmMxLjIsMi4z'+
			'LDEuNyw0LjgsMS43LDcuNGgwYzAsMy42LTEuMiw3LjMtMy42LDEwLjNjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuOCwwLjYsMi40LDBjMy42LTQuMiw1LjMtOS4zLDUuMy0xNC41aDBjMC00LjEtMS4xLTguMi0zLjMtMTEuOEwtMTYwLjUsMzg5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ5LjEsMzc4LjNjNCw1LjYsNiwxMi4xLDYsMTguN2gwYzAsNy42LTIuNywxNS4zLTguMiwyMS4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LDAuNy'+
			'wxLjcsMC43LDIuNCwwYzYuNi03LjIsOS45LTE2LjQsOS45LTI1LjZoMGMwLTguMS0yLjYtMTYuMi03LjctMjNMLTE0OS4xLDM3OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._mute);
		me._hide_controller_container.appendChild(me._button_mute);
		me.divSkin.appendChild(me._hide_controller_container);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_changenode = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._ht_node_image2 && hotspotTemplates['ht_node2'][i]._ht_node_image2.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._ht_node_image2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._ht_node_image2 && hotspotTemplates['ht_node2'][i]._ht_node_image2.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._ht_node_image2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node3_changenode = function(){
		if(hotspotTemplates['ht_node3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node3'].length; i++) {
				if (hotspotTemplates['ht_node3'][i]._ht_node_image3 && hotspotTemplates['ht_node3'][i]._ht_node_image3.logicBlock_scaling) {
					hotspotTemplates['ht_node3'][i]._ht_node_image3.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node3_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node3'].length; i++) {
				if (hotspotTemplates['ht_node3'][i]._ht_node_image3 && hotspotTemplates['ht_node3'][i]._ht_node_image3.logicBlock_scaling) {
					hotspotTemplates['ht_node3'][i]._ht_node_image3.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node4_changenode = function(){
		if(hotspotTemplates['ht_node4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node4'].length; i++) {
				if (hotspotTemplates['ht_node4'][i]._ht_node_image4 && hotspotTemplates['ht_node4'][i]._ht_node_image4.logicBlock_scaling) {
					hotspotTemplates['ht_node4'][i]._ht_node_image4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node4_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node4'].length; i++) {
				if (hotspotTemplates['ht_node4'][i]._ht_node_image4 && hotspotTemplates['ht_node4'][i]._ht_node_image4.logicBlock_scaling) {
					hotspotTemplates['ht_node4'][i]._ht_node_image4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node5_changenode = function(){
		if(hotspotTemplates['ht_node5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node5'].length; i++) {
				if (hotspotTemplates['ht_node5'][i]._ht_node_image5 && hotspotTemplates['ht_node5'][i]._ht_node_image5.logicBlock_scaling) {
					hotspotTemplates['ht_node5'][i]._ht_node_image5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node5_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node5'].length; i++) {
				if (hotspotTemplates['ht_node5'][i]._ht_node_image5 && hotspotTemplates['ht_node5'][i]._ht_node_image5.logicBlock_scaling) {
					hotspotTemplates['ht_node5'][i]._ht_node_image5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node6_changenode = function(){
		if(hotspotTemplates['ht_node6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node6'].length; i++) {
				if (hotspotTemplates['ht_node6'][i]._ht_node_image6 && hotspotTemplates['ht_node6'][i]._ht_node_image6.logicBlock_scaling) {
					hotspotTemplates['ht_node6'][i]._ht_node_image6.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node6_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node6'].length; i++) {
				if (hotspotTemplates['ht_node6'][i]._ht_node_image6 && hotspotTemplates['ht_node6'][i]._ht_node_image6.logicBlock_scaling) {
					hotspotTemplates['ht_node6'][i]._ht_node_image6.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._ht_node_timer.ggLastIsActive!=me._ht_node_timer.ggIsActive()) {
			me._ht_node_timer.ggLastIsActive=me._ht_node_timer.ggIsActive();
			if (me._ht_node_timer.ggLastIsActive) {
				player.setVariableValue('ht_ani', true);
			} else {
				player.setVariableValue('ht_ani', false);
			}
		}
		if (me._ht_node_timer2.ggLastIsActive!=me._ht_node_timer2.ggIsActive()) {
			me._ht_node_timer2.ggLastIsActive=me._ht_node_timer2.ggIsActive();
			if (me._ht_node_timer2.ggLastIsActive) {
				player.setVariableValue('ht_ani', true);
			} else {
				player.setVariableValue('ht_ani', false);
			}
		}
		if (me._hide_controller_timer.ggLastIsActive!=me._hide_controller_timer.ggIsActive()) {
			me._hide_controller_timer.ggLastIsActive=me._hide_controller_timer.ggIsActive();
			if (me._hide_controller_timer.ggLastIsActive) {
				player.setVariableValue('vis_auto_hide_controller_1', true);
			} else {
				player.setVariableValue('vis_auto_hide_controller_1', false);
			}
		}
		if (me.elementMouseOver['hide_controller_container']) {
			me._hide_controller_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_controller_timer.ggTimestamp=skin.ggCurrentTime;
		}
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_ht_node_image';
		hs=basePath + 'images/ht_node_image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image.ggParameter.sx = 1.1;
					me._ht_node_image.ggParameter.sy = 1.1;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
				else {
					me._ht_node_image.ggParameter.sx = 3;
					me._ht_node_image.ggParameter.sy = 3;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
			}
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_node2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node2=document.createElement('div');
		el.ggId="ht_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node2.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image2=document.createElement('div');
		els=me._ht_node_image2__img=document.createElement('img');
		els.className='ggskin ggskin_ht_node_image2';
		hs=basePath + 'images/ht_node_image2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image2.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image2.ggParameter.sx = 1.1;
					me._ht_node_image2.ggParameter.sy = 1.1;
					me._ht_node_image2.style[domTransform]=parameterToTransform(me._ht_node_image2.ggParameter);
				}
				else {
					me._ht_node_image2.ggParameter.sx = 3;
					me._ht_node_image2.ggParameter.sy = 3;
					me._ht_node_image2.style[domTransform]=parameterToTransform(me._ht_node_image2.ggParameter);
				}
			}
		}
		me._ht_node_image2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node2.appendChild(me._ht_node_image2);
		me.__div = me._ht_node2;
	};
	function SkinHotspotClass_ht_node3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node3=document.createElement('div');
		el.ggId="ht_node3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node3.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image3=document.createElement('div');
		els=me._ht_node_image3__img=document.createElement('img');
		els.className='ggskin ggskin_ht_node_image3';
		hs=basePath + 'images/ht_node_image3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image3.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image3.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image3.ggParameter.sx = 1.1;
					me._ht_node_image3.ggParameter.sy = 1.1;
					me._ht_node_image3.style[domTransform]=parameterToTransform(me._ht_node_image3.ggParameter);
				}
				else {
					me._ht_node_image3.ggParameter.sx = 3;
					me._ht_node_image3.ggParameter.sy = 3;
					me._ht_node_image3.style[domTransform]=parameterToTransform(me._ht_node_image3.ggParameter);
				}
			}
		}
		me._ht_node_image3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node3.appendChild(me._ht_node_image3);
		me.__div = me._ht_node3;
	};
	function SkinHotspotClass_ht_node4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node4=document.createElement('div');
		el.ggId="ht_node4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node4.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node4.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node4.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image4=document.createElement('div');
		els=me._ht_node_image4__img=document.createElement('img');
		els.className='ggskin ggskin_ht_node_image4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image4.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image4.ggParameter.sx = 1.1;
					me._ht_node_image4.ggParameter.sy = 1.1;
					me._ht_node_image4.style[domTransform]=parameterToTransform(me._ht_node_image4.ggParameter);
				}
				else {
					me._ht_node_image4.ggParameter.sx = 3;
					me._ht_node_image4.ggParameter.sy = 3;
					me._ht_node_image4.style[domTransform]=parameterToTransform(me._ht_node_image4.ggParameter);
				}
			}
		}
		me._ht_node_image4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node4.appendChild(me._ht_node_image4);
		me.__div = me._ht_node4;
	};
	function SkinHotspotClass_ht_node5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node5=document.createElement('div');
		el.ggId="ht_node5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node5.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node5.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node5.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image5=document.createElement('div');
		els=me._ht_node_image5__img=document.createElement('img');
		els.className='ggskin ggskin_ht_node_image5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image5.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image5.ggParameter.sx = 1.1;
					me._ht_node_image5.ggParameter.sy = 1.1;
					me._ht_node_image5.style[domTransform]=parameterToTransform(me._ht_node_image5.ggParameter);
				}
				else {
					me._ht_node_image5.ggParameter.sx = 3;
					me._ht_node_image5.ggParameter.sy = 3;
					me._ht_node_image5.style[domTransform]=parameterToTransform(me._ht_node_image5.ggParameter);
				}
			}
		}
		me._ht_node_image5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node5.appendChild(me._ht_node_image5);
		me.__div = me._ht_node5;
	};
	function SkinHotspotClass_ht_node6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node6=document.createElement('div');
		el.ggId="ht_node6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node6.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node6.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node6.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node6.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node6.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image6=document.createElement('div');
		els=me._ht_node_image6__img=document.createElement('img');
		els.className='ggskin ggskin_ht_node_image6';
		hs=basePath + 'images/ht_node_image6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image6.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image6.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image6.ggParameter.sx = 1.1;
					me._ht_node_image6.ggParameter.sy = 1.1;
					me._ht_node_image6.style[domTransform]=parameterToTransform(me._ht_node_image6.ggParameter);
				}
				else {
					me._ht_node_image6.ggParameter.sx = 3;
					me._ht_node_image6.ggParameter.sy = 3;
					me._ht_node_image6.style[domTransform]=parameterToTransform(me._ht_node_image6.ggParameter);
				}
			}
		}
		me._ht_node_image6.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node6.appendChild(me._ht_node_image6);
		me.__div = me._ht_node6;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_node2') {
			hotspot.skinid = 'ht_node2';
			hsinst = new SkinHotspotClass_ht_node2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node2_changenode();;
			me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_node3') {
			hotspot.skinid = 'ht_node3';
			hsinst = new SkinHotspotClass_ht_node3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node3_changenode();;
			me.callChildLogicBlocksHotspot_ht_node3_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_node4') {
			hotspot.skinid = 'ht_node4';
			hsinst = new SkinHotspotClass_ht_node4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node4_changenode();;
			me.callChildLogicBlocksHotspot_ht_node4_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_node5') {
			hotspot.skinid = 'ht_node5';
			hsinst = new SkinHotspotClass_ht_node5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node5_changenode();;
			me.callChildLogicBlocksHotspot_ht_node5_varchanged_ht_ani();;
		} else
		{
			hotspot.skinid = 'ht_node6';
			hsinst = new SkinHotspotClass_ht_node6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node6_changenode();;
			me.callChildLogicBlocksHotspot_ht_node6_varchanged_ht_ani();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				hotspotTemplates['ht_node2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node3'].length; i++) {
				hotspotTemplates['ht_node3'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node4'].length; i++) {
				hotspotTemplates['ht_node4'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node5'].length; i++) {
				hotspotTemplates['ht_node5'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node6'].length; i++) {
				hotspotTemplates['ht_node6'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._show_controller_button.logicBlock_alpha();
	me._hide_controller_container.logicBlock_alpha();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._show_controller_button.logicBlock_alpha();me._hide_controller_container.logicBlock_alpha();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('varchanged_vis_auto_hide_controller_1', function(args) { me._show_controller_button.logicBlock_alpha();me._hide_controller_container.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_node2_changenode();me.callChildLogicBlocksHotspot_ht_node3_changenode();me.callChildLogicBlocksHotspot_ht_node4_changenode();me.callChildLogicBlocksHotspot_ht_node5_changenode();me.callChildLogicBlocksHotspot_ht_node6_changenode(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node3_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node4_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node5_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node6_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};