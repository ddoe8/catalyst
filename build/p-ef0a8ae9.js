class e{constructor(){this.icons=new Map}static getInstance(){if(!e.instance){e.instance=new e}return e.instance}getIcon(e,t){return this.icons.get(this.buildName(e,t))}addIcon(e,t,s){this.icons.set(this.buildName(e,s),t);window.dispatchEvent(this.buildEvent("cat-icon-added",{name:e,setName:s}))}addIcons(e,t){Object.entries(e).forEach((([e,s])=>this.icons.set(this.buildName(e,t),s)));window.dispatchEvent(this.buildEvent("cat-icons-added",{names:Object.keys(e),setName:t}))}removeIcon(e,t){this.icons.delete(this.buildName(e,t));window.dispatchEvent(this.buildEvent("cat-icon-removed",{name:e,setName:t}))}removeIcons(e,t){e.forEach((e=>this.icons.delete(this.buildName(e,t))));window.dispatchEvent(this.buildEvent("cat-icons-removed",{names:e,setName:t}))}buildName(e,t){return t?`${t}:name`:e}buildEvent(e,t){return new CustomEvent(e,{bubbles:true,composed:true,detail:t})}}export{e as C};
//# sourceMappingURL=p-ef0a8ae9.js.map