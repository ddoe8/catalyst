import{c as t,a as i,b as s}from"./p-5865f232.js";export{C as CatI18nRegistry,e as CatIconRegistry,b as catI18nRegistry,d as catIconRegistry}from"./p-5865f232.js";var o=t((function(t){
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(i,s){if(t.exports){t.exports=s()}else{i.Toastify=s()}})(i,(function(t){var i=function(t){return new i.lib.init(t)},s="1.12.0";i.defaults={oldestFirst:true,text:"Toastify is awesome!",node:undefined,duration:3e3,selector:undefined,callback:function(){},destination:undefined,newWindow:false,close:false,gravity:"toastify-top",positionLeft:false,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:true,onClick:function(){},offset:{x:0,y:0},escapeMarkup:true,ariaLive:"polite",style:{background:""}};i.lib=i.prototype={toastify:s,constructor:i,init:function(t){if(!t){t={}}this.options={};this.toastElement=null;this.options.text=t.text||i.defaults.text;this.options.node=t.node||i.defaults.node;this.options.duration=t.duration===0?0:t.duration||i.defaults.duration;this.options.selector=t.selector||i.defaults.selector;this.options.callback=t.callback||i.defaults.callback;this.options.destination=t.destination||i.defaults.destination;this.options.newWindow=t.newWindow||i.defaults.newWindow;this.options.close=t.close||i.defaults.close;this.options.gravity=t.gravity==="bottom"?"toastify-bottom":i.defaults.gravity;this.options.positionLeft=t.positionLeft||i.defaults.positionLeft;this.options.position=t.position||i.defaults.position;this.options.backgroundColor=t.backgroundColor||i.defaults.backgroundColor;this.options.avatar=t.avatar||i.defaults.avatar;this.options.className=t.className||i.defaults.className;this.options.stopOnFocus=t.stopOnFocus===undefined?i.defaults.stopOnFocus:t.stopOnFocus;this.options.onClick=t.onClick||i.defaults.onClick;this.options.offset=t.offset||i.defaults.offset;this.options.escapeMarkup=t.escapeMarkup!==undefined?t.escapeMarkup:i.defaults.escapeMarkup;this.options.ariaLive=t.ariaLive||i.defaults.ariaLive;this.options.style=t.style||i.defaults.style;if(t.backgroundColor){this.options.style.background=t.backgroundColor}return this},buildToast:function(){if(!this.options){throw"Toastify is not initialized"}var t=document.createElement("div");t.className="toastify on "+this.options.className;if(!!this.options.position){t.className+=" toastify-"+this.options.position}else{if(this.options.positionLeft===true){t.className+=" toastify-left";console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")}else{t.className+=" toastify-right"}}t.className+=" "+this.options.gravity;if(this.options.backgroundColor){console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.')}for(var i in this.options.style){t.style[i]=this.options.style[i]}if(this.options.ariaLive){t.setAttribute("aria-live",this.options.ariaLive)}if(this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE){t.appendChild(this.options.node)}else{if(this.options.escapeMarkup){t.innerText=this.options.text}else{t.innerHTML=this.options.text}if(this.options.avatar!==""){var s=document.createElement("img");s.src=this.options.avatar;s.className="toastify-avatar";if(this.options.position=="left"||this.options.positionLeft===true){t.appendChild(s)}else{t.insertAdjacentElement("afterbegin",s)}}}if(this.options.close===true){var e=document.createElement("button");e.type="button";e.setAttribute("aria-label","Close");e.className="toast-close";e.innerHTML="&#10006;";e.addEventListener("click",function(t){t.stopPropagation();this.removeElement(this.toastElement);window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;if((this.options.position=="left"||this.options.positionLeft===true)&&n>360){t.insertAdjacentElement("afterbegin",e)}else{t.appendChild(e)}}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(i){window.clearTimeout(t.timeOutValue)}));t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(typeof this.options.destination!=="undefined"){t.addEventListener("click",function(t){t.stopPropagation();if(this.options.newWindow===true){window.open(this.options.destination,"_blank")}else{window.location=this.options.destination}}.bind(this))}if(typeof this.options.onClick==="function"&&typeof this.options.destination==="undefined"){t.addEventListener("click",function(t){t.stopPropagation();this.options.onClick()}.bind(this))}if(typeof this.options.offset==="object"){var r=o("x",this.options);var l=o("y",this.options);var f=this.options.position=="left"?r:"-"+r;var c=this.options.gravity=="toastify-top"?l:"-"+l;t.style.transform="translate("+f+","+c+")"}return t},showToast:function(){this.toastElement=this.buildToast();var t;if(typeof this.options.selector==="string"){t=document.getElementById(this.options.selector)}else if(this.options.selector instanceof HTMLElement||typeof ShadowRoot!=="undefined"&&this.options.selector instanceof ShadowRoot){t=this.options.selector}else{t=document.body}if(!t){throw"Root element is not defined"}var s=i.defaults.oldestFirst?t.firstChild:t.lastChild;t.insertBefore(this.toastElement,s);i.reposition();if(this.options.duration>0){this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)}return this},hideToast:function(){if(this.toastElement.timeOutValue){clearTimeout(this.toastElement.timeOutValue)}this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on","");window.setTimeout(function(){if(this.options.node&&this.options.node.parentNode){this.options.node.parentNode.removeChild(this.options.node)}if(t.parentNode){t.parentNode.removeChild(t)}this.options.callback.call(t);i.reposition()}.bind(this),400)}};i.reposition=function(){var t={top:15,bottom:15};var i={top:15,bottom:15};var s={top:15,bottom:15};var o=document.getElementsByClassName("toastify");var n;for(var a=0;a<o.length;a++){if(e(o[a],"toastify-top")===true){n="toastify-top"}else{n="toastify-bottom"}var r=o[a].offsetHeight;n=n.substr(9,n.length-1);var l=15;var f=window.innerWidth>0?window.innerWidth:screen.width;if(f<=360){o[a].style[n]=s[n]+"px";s[n]+=r+l}else{if(e(o[a],"toastify-left")===true){o[a].style[n]=t[n]+"px";t[n]+=r+l}else{o[a].style[n]=i[n]+"px";i[n]+=r+l}}}return this};function o(t,i){if(i.offset[t]){if(isNaN(i.offset[t])){return i.offset[t]}else{return i.offset[t]+"px"}}return"0px"}function e(t,i){if(!t||typeof i!=="string"){return false}else if(t.className&&t.className.trim().split(/\s+/gi).indexOf(i)>-1){return true}else{return false}}i.lib.init.prototype=i.lib;return i}))}));class n{constructor(){}static getInstance(){if(!n.instance){n.instance=new n}return n.instance}show(t,i){const s={};const e=this.getNode(t,s,i);const n=this.getOptions(e,s,i);const a=o(n);s.toast=a;a.showToast();return()=>a.hideToast()}getNode(t,i,o){var e,n;const a=document.createElement("template");a.innerHTML=`<div class="cat-toastify-wrapper">\n      ${(o===null||o===void 0?void 0:o.icon)?`<cat-icon class="cat-toastify-icon" icon="${o.icon}" size="l"></cat-icon>`:""}\n      <div class="cat-toastify-content">\n        <div class="cat-toastify-inner"></div>\n        ${(o===null||o===void 0?void 0:o.action)?`<cat-button class="cat-toastify-action cat-button-pull" size="s" variant="text" color="primary">${o.action}</cat-button>`:""}\n      </div>\n      ${(o===null||o===void 0?void 0:o.autoClose)===false?`<cat-button class="cat-toastify-close cat-button-pull" size="s" icon="cross-outlined" variant="text" icon-only="true" class="close" a11y-label="${s.t("notification.dismiss")}"></cat-button>`:""}\n    </div>`;const r=a.content.firstElementChild;(e=r.querySelector(".cat-toastify-close"))===null||e===void 0?void 0:e.addEventListener("click",(()=>{var t;return(t=i.toast)===null||t===void 0?void 0:t.hideToast()}));(n=r.querySelector(".cat-toastify-action"))===null||n===void 0?void 0:n.addEventListener("click",(()=>{var t;return(t=o===null||o===void 0?void 0:o.onAction)===null||t===void 0?void 0:t.call(o,i)}));const l=r.querySelector(".cat-toastify-inner");if(l){if(typeof t!=="string"){l.replaceChildren(t)}else if((o===null||o===void 0?void 0:o.escapeMarkup)===false){l.innerHTML=t}else{l.innerText=t}}return r}getOptions(t,i,s){var o,e,a;const[r,l]=(e=(o=s===null||s===void 0?void 0:s.placement)===null||o===void 0?void 0:o.split("-"))!==null&&e!==void 0?e:["bottom","left"];const f=(a=s===null||s===void 0?void 0:s.duration)!==null&&a!==void 0?a:(s===null||s===void 0?void 0:s.autoClose)===false?-1:n.duration;return{gravity:r,position:l,node:t,duration:f,close:false,className:(s===null||s===void 0?void 0:s.mode)==="light"?"cat-toastify":"cat-toastify cat-toastify-dark",stopOnFocus:true,onClick:()=>{var t;return(t=s===null||s===void 0?void 0:s.onClick)===null||t===void 0?void 0:t.call(s,i)},callback:()=>{var t;return(t=s===null||s===void 0?void 0:s.onDismiss)===null||t===void 0?void 0:t.call(s,i)},offset:{x:"1rem",y:"1rem"}}}}n.duration=3e3;const a=n.getInstance();export{n as CatNotificationService,a as catNotificationService};
//# sourceMappingURL=index.esm.js.map