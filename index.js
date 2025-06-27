var ne=Object.defineProperty;var ae=(n,a,s)=>a in n?ne(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s;var j=(n,a,s)=>ae(n,typeof a!="symbol"?a+"":a,s);const ie=[{type:"number",key:"numberOfIcons",label:"Number of Icons",input:"true",tooltip:"The number of icons displayed in the form"},{type:"textfield",key:"icon",label:"Icon",input:"true",tooltip:"The bootstrap icon class that will go in the <i> tag"},{type:"textfield",key:"color",label:"Color",input:"true",tooltip:"The color of the icons"},{type:"textfield",key:"iconSize",label:"Icon Size",tooltip:"The size of the icon"},{key:"placeholder",ignore:!0}],se=Formio.Components.baseEditForm;function oe(...n){return se([{key:"display",components:ie},{key:"layout",ignore:!0}],...n)}const J=Formio.Components.components.field,F=class F extends J{static schema(...a){return J.schema({type:"rating",label:"rating",key:"rating",icon:"bi bi-star",iconSize:"2rem",color:"blue",numberOfIcons:5},...a)}static get builderInfo(){return{title:"Rating",icon:"star",group:"basic",documentation:"/userguide/#rating",weight:0,schema:F.schema()}}constructor(a,s,c){super(a,s,c)}render(){var a;return super.render(this.renderTemplate("rating",{numberOfIcons:this.component.numberOfIcons,filledIcons:Number((a=this.dataValue)==null?void 0:a.split("/")[0])}))}attachIcon(a,s){a.item(s).addEventListener("click",()=>{this.component.disabled||this.setValue(`${s+1}/${this.component.numberOfIcons}`)})}attachIcons(){const a=this.refs.icon;for(let s=0;s<a.length;s++)this.attachIcon(a,s)}attach(a){return this.loadRefs(a,{rating:"single",icon:"multiple"}),this.attachIcons(),super.attach(a)}get defaultSchema(){return F.schema()}setValue(a){const s=super.setValue(a);return this.redraw(),s}};j(F,"editForm",oe);let M=F;const ce=[{type:"number",key:"numberOfColumns",label:"Number of Columns",input:"true",tooltip:"The number of columns to be displayed"}],le=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Icon",key:"icon",input:!0,type:"textfield"}]}],ue=Formio.Components.baseEditForm;function de(...n){return ue([{key:"display",components:ce},{key:"data",components:le}],...n)}const X=Formio.Components.components.field,S=class S extends X{static schema(...a){return X.schema({type:"cardField",label:"Card Field",key:"cardField",values:[{label:"",value:"",description:"",icon:""}],input:!0,numberOfColumns:2},...a)}static get builderInfo(){return{title:"Card Field",group:"basic",icon:"fas fa-square",weight:0,schema:S.schema()}}constructor(a,s,c){super(a,s,c)}render(){return super.render(this.renderTemplate("cardField",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.cardField||[]).forEach(s=>{s.addEventListener("click",()=>{const c=s.getAttribute("data-value");this.setValue(c)})})}attach(a){return this.loadRefs(a,{cardField:"multiple"}),this.attachCardListeners(),super.attach(a)}updateCards(a){(this.refs.cardField||[]).forEach(c=>{const g=c.getAttribute("data-value");c.classList.toggle("border-primary",g===a)})}get defaultSchema(){return S.schema()}setValue(a,s){const c=super.setValue(a,s);return this.updateCards(a),c}getValue(){return this.dataValue}};j(S,"editForm",de);let R=S;const fe={rating:M,cardField:R};function pe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function me(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var a=n.default;if(typeof a=="function"){var s=function c(){return this instanceof c?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};s.prototype=a.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(n).forEach(function(c){var g=Object.getOwnPropertyDescriptor(n,c);Object.defineProperty(s,c,g.get?g:{enumerable:!0,get:function(){return n[c]}})}),s}var k={};const he={},ve=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),B=me(ve);var $={},Z;function ge(){return Z||(Z=1,function(n){var a=/[|\\{}()[\]^$+*?.]/g,s=Object.prototype.hasOwnProperty,c=function(l,d){return s.apply(l,[d])};n.escapeRegExpChars=function(l){return l?String(l).replace(a,"\\$&"):""};var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},C=/[&<>'"]/g;function P(l){return g[l]||l}var A=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;n.escapeXML=function(l){return l==null?"":String(l).replace(C,P)};function T(){return Function.prototype.toString.call(this)+`;
`+A}try{typeof Object.defineProperty=="function"?Object.defineProperty(n.escapeXML,"toString",{value:T}):n.escapeXML.toString=T}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}n.shallowCopy=function(l,d){if(d=d||{},l!=null)for(var p in d)c(d,p)&&(p==="__proto__"||p==="constructor"||(l[p]=d[p]));return l},n.shallowCopyFromList=function(l,d,p){if(p=p||[],d=d||{},l!=null)for(var w=0;w<p.length;w++){var y=p[w];if(typeof d[y]<"u"){if(!c(d,y)||y==="__proto__"||y==="constructor")continue;l[y]=d[y]}}return l},n.cache={_data:{},set:function(l,d){this._data[l]=d},get:function(l){return this._data[l]},remove:function(l){delete this._data[l]},reset:function(){this._data={}}},n.hyphenToCamel=function(l){return l.replace(/-[a-z]/g,function(d){return d[1].toUpperCase()})},n.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}(),n.hasOwnOnlyObject=function(l){var d=n.createNullProtoObjWherePossible();for(var p in l)c(l,p)&&(d[p]=l[p]);return d}}($)),$}const ye="3.1.10",be={version:ye};var G;function _e(){return G||(G=1,function(n){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var a=B,s=B,c=ge(),g=!1,C=be.version,P="<",A=">",T="%",l="locals",d="ejs",p="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",w=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],y=w.concat("cache"),V=/^\uFEFF/,N=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;n.cache=c.cache,n.fileLoader=a.readFileSync,n.localsName=l,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,i,e){var r=s.dirname,o=s.extname,u=s.resolve,m=u(e?i:r(i),t),b=o(t);return b||(m+=".ejs"),m};function W(t,i){var e;if(i.some(function(r){return e=n.resolveInclude(t,r,!0),a.existsSync(e)}))return e}function K(t,i){var e,r,o=i.views,u=/^[A-Za-z]+:\\|^\//.exec(t);if(u&&u.length)t=t.replace(/^\/*/,""),Array.isArray(i.root)?e=W(t,i.root):e=n.resolveInclude(t,i.root||"/",!0);else if(i.filename&&(r=n.resolveInclude(t,i.filename),a.existsSync(r)&&(e=r)),!e&&Array.isArray(o)&&(e=W(t,o)),!e&&typeof i.includer!="function")throw new Error('Could not find the include file "'+i.escapeFunction(t)+'"');return e}function E(t,i){var e,r=t.filename,o=arguments.length>1;if(t.cache){if(!r)throw new Error("cache option requires a filename");if(e=n.cache.get(r),e)return e;o||(i=z(r).toString().replace(V,""))}else if(!o){if(!r)throw new Error("Internal EJS error: no file name or template provided");i=z(r).toString().replace(V,"")}return e=n.compile(i,t),t.cache&&n.cache.set(r,e),e}function Q(t,i,e){var r;if(e){try{r=E(t)(i)}catch(o){return e(o)}e(null,r)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(o,u){try{r=E(t)(i),o(r)}catch(m){u(m)}});throw new Error("Please provide a callback function")}}function z(t){return n.fileLoader(t)}function Y(t,i){var e=c.shallowCopy(c.createNullProtoObjWherePossible(),i);if(e.filename=K(t,e),typeof i.includer=="function"){var r=i.includer(t,e.filename);if(r&&(r.filename&&(e.filename=r.filename),r.template))return E(e,r.template)}return E(e)}function x(t,i,e,r,o){var u=i.split(`
`),m=Math.max(r-3,0),b=Math.min(u.length,r+3),v=o(e),_=u.slice(m,b).map(function(O,I){var L=I+m+1;return(L==r?" >> ":"    ")+L+"| "+O}).join(`
`);throw t.path=v,t.message=(v||"ejs")+":"+r+`
`+_+`

`+t.message,t}function U(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(i,e){var r;return e&&e.scope&&(g||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),g=!0),e.context||(e.context=e.scope),delete e.scope),r=new f(i,e),r.compile()},n.render=function(t,i,e){var r=i||c.createNullProtoObjWherePossible(),o=e||c.createNullProtoObjWherePossible();return arguments.length==2&&c.shallowCopyFromList(o,r,w),E(o,t)(r)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),i=t.shift(),e,r={filename:i},o,u;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(o=t.shift(),t.length?c.shallowCopy(r,t.pop()):(o.settings&&(o.settings.views&&(r.views=o.settings.views),o.settings["view cache"]&&(r.cache=!0),u=o.settings["view options"],u&&c.shallowCopy(r,u)),c.shallowCopyFromList(r,o,y)),r.filename=i):o=c.createNullProtoObjWherePossible(),Q(r,o,e)},n.Template=f,n.clearCache=function(){n.cache.reset()};function f(t,i){var e=c.hasOwnOnlyObject(i),r=c.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",r.client=e.client||!1,r.escapeFunction=e.escape||e.escapeFunction||c.escapeXML,r.compileDebug=e.compileDebug!==!1,r.debug=!!e.debug,r.filename=e.filename,r.openDelimiter=e.openDelimiter||n.openDelimiter||P,r.closeDelimiter=e.closeDelimiter||n.closeDelimiter||A,r.delimiter=e.delimiter||n.delimiter||T,r.strict=e.strict||!1,r.context=e.context,r.cache=e.cache||!1,r.rmWhitespace=e.rmWhitespace,r.root=e.root,r.includer=e.includer,r.outputFunctionName=e.outputFunctionName,r.localsName=e.localsName||n.localsName||l,r.views=e.views,r.async=e.async,r.destructuredLocals=e.destructuredLocals,r.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,r.strict?r._with=!1:r._with=typeof e._with<"u"?e._with:!0,this.opts=r,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=p,i=c.escapeRegExpChars(this.opts.delimiter),e=c.escapeRegExpChars(this.opts.openDelimiter),r=c.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,i).replace(/</g,e).replace(/>/g,r),new RegExp(t)},compile:function(){var t,i,e=this.opts,r="",o="",u=e.escapeFunction,m,b=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),r+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!N.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");r+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!N.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var v="  var __locals = ("+e.localsName+` || {}),
`,_=0;_<e.destructuredLocals.length;_++){var O=e.destructuredLocals[_];if(!N.test(O))throw new Error("destructuredLocals["+_+"] is not a valid JS identifier.");_>0&&(v+=`,
  `),v+=O+" = __locals."+O}r+=v+`;
`}e._with!==!1&&(r+="  with ("+e.localsName+` || {}) {
`,o+=`  }
`),o+=`  return __output;
`,this.source=r+this.source+o}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+b+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+u.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+x.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+b+`
`);try{if(e.async)try{m=new Function("return (async function(){}).constructor;")()}catch(h){throw h instanceof SyntaxError?new Error("This environment does not support async/await"):h}else m=Function;i=new m(e.localsName+", escapeFn, include, rethrow",t)}catch(h){throw h instanceof SyntaxError&&(e.filename&&(h.message+=" in "+e.filename),h.message+=` while compiling ejs

`,h.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,h.message+="https://github.com/RyanZim/EJS-Lint",e.async||(h.message+=`
`,h.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),h}var I=e.client?i:function(H){var te=function(re,q){var D=c.shallowCopy(c.createNullProtoObjWherePossible(),H);return q&&(D=c.shallowCopy(D,q)),Y(re,e)(D)};return i.apply(e.context,[H||c.createNullProtoObjWherePossible(),u,te,x])};if(e.filename&&typeof Object.defineProperty=="function"){var L=e.filename,ee=s.basename(L,s.extname(L));try{Object.defineProperty(I,"name",{value:ee,writable:!1,enumerable:!1,configurable:!0})}catch{}}return I},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var i=this,e=this.parseTemplateText(),r=this.opts.delimiter,o=this.opts.openDelimiter,u=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(m,b){var v;if(m.indexOf(o+r)===0&&m.indexOf(o+r+r)!==0&&(v=e[b+2],!(v==r+u||v=="-"+r+u||v=="_"+r+u)))throw new Error('Could not find matching close tag for "'+m+'".');i.scanLine(m)})},parseTemplateText:function(){for(var t=this.templateText,i=this.regex,e=i.exec(t),r=[],o;e;)o=e.index,o!==0&&(r.push(t.substring(0,o)),t=t.slice(o)),r.push(e[0]),t=t.slice(e[0].length),e=i.exec(t);return t&&r.push(t),r},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var i=this,e=this.opts.delimiter,r=this.opts.openDelimiter,o=this.opts.closeDelimiter,u=0;switch(u=t.split(`
`).length-1,t){case r+e:case r+e+"_":this.mode=f.modes.EVAL;break;case r+e+"=":this.mode=f.modes.ESCAPED;break;case r+e+"-":this.mode=f.modes.RAW;break;case r+e+"#":this.mode=f.modes.COMMENT;break;case r+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(r+e+e,r+e)+`")
`;break;case e+e+o:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+o,e+o)+`")
`;break;case e+o:case"-"+e+o:case"_"+e+o:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+U(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+U(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}i.opts.compileDebug&&u&&(this.currentLine+=u,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=c.escapeXML,n.__express=n.renderFile,n.VERSION=C,n.name=d,typeof window<"u"&&(window.ejs=n)}(k)),k}var we=_e();const Ee=pe(we);function Oe(n){return Ee.render(`<div class="cn-card-field--group d-flex flex-wrap">
  <% component.values.forEach(function(item) { %>
    <div ref="cardField" class="card cn-card-field--option mb-2 mr-2 shadow-sm" data-value="<%= item.value %>"
      style="cursor: pointer;">
      <div class="row g-0">
        <div class="col-md-2">
          <div
            class="cn-card-field--icon m-2 border rounded h-50 text-center d-flex justify-content-center align-items-center">
            <i class="<%= item.icon || 'fas fa-circle' %> w-100"></i>
          </div>
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title mb-1">
              <%= item.label %>
            </h5>
            <% if (item.description) { %>
              <p class="card-text text-muted small"><%- item.description %></p>
              <% } else { %>
                <p class="card-text text-muted small"></p>
                <% } %>
          </div>
        </div>
      </div>
    </div>
    <% }); %>
</div>`,n)}const Le={form:Oe};function Fe(n){return`
    <div ref="rating">
      ${function(){let a="";for(let s=0;s<n.numberOfIcons;s++)a+=`<i style="color: ${n.component.color}; font-size: ${n.component.iconSize}" class="${n.component.icon}${s<n.filledIcons?"-fill":""}" ref="icon"></i>`;return a}()}
    </div>
  `}const Se={form:Fe};function Te(n){return`<nav aria-label="navigation" id="${n.wizardKey}-header" class="cn-wizard-header-vertical">
    <ul class="pagination flex-column">
      ${n.panels.map((a,s)=>`
      <li class="col-xs-12 page-item${n.currentPage===s?" active":""} d-flex align-items-center" style="cursor: pointer;">  
        ${n.currentPage<s?'<i class="bi bi-circle"></i>':'<i class="bi bi-circle-fill"></i>'}
        <span class="page-link" ref="${n.wizardKey}-link" style="margin-left: 0px;">
          ${n.t(a.title,{_userInput:!0})}
          ${a.tooltip&&n.currentPage===s?`<i ref="${n.wizardKey}-tooltip" class="${n.iconClass("question-sign")} text-muted" data-tooltip="${a.tooltip}"></i>`:""}
        </span>
      </li>
      `).join("")}
    </ul>
  </nav>`}const Ie={form:Te},Ce={wizardHeaderVertical:Ie,cardField:Le,rating:Se},Pe={bootstrap:Ce};Formio.use({components:fe,templates:Pe});
