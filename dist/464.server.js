"use strict";exports.id=464,exports.ids=[464],exports.modules={576:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(147),o=i.n(r);const n=class{constructor(e){this.fileName=e,this.connect(),o().existsSync(`./${this.fileName}`)||o().promises.writeFile(`./${this.fileName}`,"").then((()=>console.log(`${this.fileName} created`)))}connect(){console.log("connected to filesystem")}}},464:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var r=i(147),o=i.n(r),n=i(576),s=function(e,t,i,r){return new(i||(i=Promise))((function(o,n){function s(e){try{l(r.next(e))}catch(e){n(e)}}function d(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,d)}l((r=r.apply(e,t||[])).next())}))};class d extends n.Z{constructor(){super("./src/data/products.txt"),this.readFile=()=>s(this,void 0,void 0,(function*(){try{return(yield o().promises.readFile(this.fileName,"utf8"))?JSON.parse(yield o().promises.readFile(this.fileName,"utf8")):[]}catch(e){if(-2===e.errno)try{return yield o().promises.writeFile(this.fileName,JSON.stringify([])),[]}catch(e){console.error("Could not create file in such directory. ",e)}else console.log("readFile: ",e);return[]}})),this.writeFile=e=>s(this,void 0,void 0,(function*(){try{yield o().promises.writeFile(this.fileName,JSON.stringify(e,null,2))}catch(e){console.log("Method writeFile: ",e)}}))}addProduct(e){return s(this,void 0,void 0,(function*(){try{const t=yield this.readFile(),i=0===t.length?1:Math.max(...t.map((e=>e.id)))+1,r=(new Date).toLocaleString("es-AR");return t.push(Object.assign(Object.assign({},e),{id:i,timestamp:r})),yield this.writeFile(t),i}catch(e){console.log("Method save: ",e)}}))}getAll(){return s(this,void 0,void 0,(function*(){return yield this.readFile()}))}getById(e){var t;return s(this,void 0,void 0,(function*(){try{const i=yield this.readFile();return null!==(t=i.find((t=>t.id===Number(e))))&&void 0!==t?t:{error:"Product not found"}}catch(e){console.log("Method getById: ",e)}return{error:"fetch item method failed"}}))}updateProductById(e,t){return s(this,void 0,void 0,(function*(){try{const i=(yield this.readFile()).map((i=>i.id===Number(e)?Object.assign(Object.assign({},i),t):i));yield this.writeFile(i)}catch(e){console.log("Method update: ",e)}}))}deleteProductById(e){return s(this,void 0,void 0,(function*(){try{const t=yield this.readFile(),i=t.filter((t=>t.id!==Number(e)));return t.length===i.length?`There is NO product with id= ${e}`:(yield this.writeFile(i),`Product ${e} deleted`)}catch(e){console.log("Method deleteById: ",e)}}))}}const l=new d}};