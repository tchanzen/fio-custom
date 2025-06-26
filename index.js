var me=Object.defineProperty;var he=(n,a,o)=>a in n?me(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o;var C=(n,a,o)=>he(n,typeof a!="symbol"?a+"":a,o);Formio.Components.baseEditForm;Formio.Components.components.field;const fe=[{type:"number",key:"numberOfColumns",label:"Number of Columns",input:"true",tooltip:"The number of columns to be displayed"},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"hideLabel",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],ye=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Icon",key:"icon",input:!0,type:"textfield"}]}],ge=Formio.Components.baseEditForm;function be(...n){return ge([{key:"display",components:fe},{key:"data",components:ye}],...n)}const G=Formio.Components.components.field;var w;let ve=(w=class extends G{static schema(...a){return G.schema({type:"CNRadioCard",label:"CN Radio Card",key:"CNRadioCard",values:[{label:"",value:"",description:"",icon:""}],input:!0,numberOfColumns:2},...a)}static get builderInfo(){return{title:"CN Radio Card",group:"basic",icon:"fas fa-square",weight:0,schema:w.schema()}}constructor(a,o,i){super(a,o,i)}render(){return super.render(this.renderTemplate("CNRadioCard",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNRadioCard||[]).forEach(o=>{o.addEventListener("click",()=>{const i=o.getAttribute("data-value");this.setValue(i)})})}attach(a){return this.loadRefs(a,{CNRadioCard:"multiple"}),this.attachCardListeners(),super.attach(a)}updateCards(a){(this.refs.CNRadioCard||[]).forEach(i=>{const u=i.getAttribute("data-value");i.classList.toggle("border-primary",u===a)})}get defaultSchema(){return w.schema()}get labelInfo(){return{hidden:!0}}setValue(a,o){const i=super.setValue(a,o);return this.updateCards(a),i}getValue(){return this.dataValue}},C(w,"editForm",be),w);const ke=[{key:"hidden",ignore:!0},{key:"modalEdit",ignore:!0},{key:"tableView",ignore:!0},{key:"disabled",ignore:!0},{key:"hideLabel",ignore:!0},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"initialFocus",ignore:!0},{type:"textfield",key:"formName",label:"Form Name",input:"true",tooltip:"The name of the form",weight:1}],Ce=Formio.Components.components.nested.editForm;function we(...n){return Ce([{key:"display",components:ke}],...n)}const Q=Formio.Components.components.nested;var N;let Ne=(N=class extends Q{static schema(...a){return Q.schema({label:"CN Form Base",type:"CNFormBase",key:"CNFormBase",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,formName:""},...a)}static get builderInfo(){return{title:"CN Form Base",icon:"list-alt",group:"layout",schema:N.schema()}}get defaultSchema(){return N.schema()}get labelInfo(){return{hidden:!0}}get nestedKey(){return`nested-${this.key}`}get templateName(){return"CNFormBase"}static get isContainer(){return!0}},C(N,"editForm",we),N);const Ee=[{key:"hidden",ignore:!0},{key:"modalEdit",ignore:!0},{key:"tableView",ignore:!0},{key:"disabled",ignore:!0},{key:"hideLabel",ignore:!0},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"initialFocus",ignore:!0},{type:"textfield",key:"wellTitle",label:"Well Title",input:"true",tooltip:"The title to display in the well header",weight:1},{type:"select",key:"wellSize",label:"Well Size",input:"true",tooltip:"The size of the well component",data:{values:[{label:"Small",value:"sm"},{label:"Default",value:"default"},{label:"Large",value:"lg"}]},defaultValue:"default",weight:2}],Se=Formio.Components.components.nested.editForm;function _e(...n){return Se([{key:"display",components:Ee}],...n)}const Y=Formio.Components.components.nested;var E;let Fe=(E=class extends Y{static schema(...a){return Y.schema({label:"CN Well",type:"CNWell",key:"CNWell",theme:"default",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,wellTitle:"",wellSize:"default",hideLabel:!0},...a)}static get builderInfo(){return{title:"CN Well",icon:"square",group:"layout",schema:E.schema()}}get labelInfo(){return{hidden:!0}}get defaultSchema(){return E.schema()}get templateName(){return"CNWell"}static get isContainer(){return!0}},C(E,"editForm",_e),E);const xe=[{type:"textfield",key:"pageHeader",label:"Page Header",input:"true",tooltip:"Header for form page",weight:1},{type:"textfield",key:"pageSubheader",label:"Page Subheader",input:"true",tooltip:"Subheader for form page",weight:2},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"hideLabel",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Le=Formio.Components.baseEditForm;function Te(...n){return Le([{key:"display",components:xe},{key:"data",ignore:!0},{key:"validation",ignore:!0}],...n)}const ee=Formio.Components.components.component;var S;let Ve=(S=class extends ee{static schema(...a){return ee.schema({type:"CNPageHeader",label:"CN Page Header",key:"CNPageHeader",input:!1,pageHeader:"",pageSubheader:""},...a)}static get builderInfo(){return{title:"CN Page Header",group:"layout",icon:"fas fa-square",weight:0,schema:S.schema()}}constructor(a,o,i){super(a,o,i)}render(){return super.render(this.renderTemplate("CNPageHeader",{component:this.component,instance:this}))}get defaultSchema(){return S.schema()}},C(S,"editForm",Te),S);const De=[{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Oe=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}}]}],Ie=Formio.Components.baseEditForm;function Pe(...n){return Ie([{key:"display",components:De},{key:"data",components:Oe}],...n)}const te=Formio.Components.components.field;var _;let Re=(_=class extends te{static schema(...a){return te.schema({type:"CNRadioSwitch",label:"CN Radio Card",key:"CNRadioSwitch",values:[{label:"",value:""}],input:!0},...a)}static get builderInfo(){return{title:"CN Radio Switch",group:"basic",icon:"fas fa-square",weight:0,schema:_.schema()}}constructor(a,o,i){super(a,o,i)}render(){return super.render(this.renderTemplate("CNRadioSwitch",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNRadioSwitch||[]).forEach(o=>{o.addEventListener("click",()=>{const i=o.getAttribute("data-value");this.setValue(i)})})}attach(a){return this.loadRefs(a,{CNRadioSwitch:"multiple"}),this.attachCardListeners(),super.attach(a)}updateCards(a){(this.refs.CNRadioSwitch||[]).forEach(i=>{const u=i.getAttribute("data-value");i.classList.toggle("cn-radio-switch--selected",u===a)})}get defaultSchema(){return _.schema()}setValue(a,o){const i=super.setValue(a,o);return this.updateCards(a),i}getValue(){return this.dataValue}},C(_,"editForm",Pe),_);const Ae=[{type:"textfield",key:"header",label:"Page Header",input:"true",tooltip:"Header for form page",weight:1},{type:"textfield",key:"subheader",label:"Page Subheader",input:"true",tooltip:"Subheader for form page",weight:2},{type:"select",key:"inputType",label:"Input Type",input:"true",tooltip:"Radio or Checkbox",weight:3,required:!0,data:{values:[{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}]},validate:{required:!0}},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],$e=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}}]}],Be=Formio.Components.baseEditForm;function qe(...n){return Be([{key:"display",components:Ae},{key:"data",components:$e}],...n)}const ae=Formio.Components.components.field;var F;let je=(F=class extends ae{static schema(...a){return ae.schema({type:"CNSelectBlock",label:"CN Select Block",key:"CNSelectBlock",values:[{label:"",value:""}],input:!0,header:"",subheader:"",inputType:"radio"},...a)}static get builderInfo(){return{title:"CN Select Block",group:"basic",icon:"fas fa-square",weight:0,schema:F.schema()}}constructor(a,o,i){super(a,o,i)}render(){return super.render(this.renderTemplate("CNSelectBlock",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNSelectBlock||[]).forEach(o=>{o.addEventListener("click",()=>{const i=o.getAttribute("data-value"),u=o.querySelector("input");u&&(u.checked=!u.checked),this.setValue(i)})})}attach(a){return this.loadRefs(a,{CNSelectBlock:"multiple"}),this.attachCardListeners(),super.attach(a)}updateCards(a){(this.refs.CNSelectBlock||[]).forEach(i=>{const u=i.getAttribute("data-value");i.classList.toggle("cn-select-block--selected",this.updateCardsBasedOnInputType(u,a))})}updateCardsBasedOnInputType(a,o){return this.isCheckbox()?o.includes(a):o===a}get defaultSchema(){return F.schema()}setValue(a,o){let i=a;this.isCheckbox()&&(i=this.setValueForCheckbox(a));const u=super.setValue(i,o);return this.updateCards(i),u}setValueForCheckbox(a){return(typeof this.dataValue=="string"||!this.dataValue)&&(this.dataValue=[]),this.dataValue.indexOf(a)<0?[...this.dataValue,a]:this.dataValue.filter(i=>i!==a)}getValue(){return this.dataValue}isCheckbox(){return this.component.inputType==="checkbox"}},C(F,"editForm",qe),F);const He=[{type:"textfield",key:"header",label:"Section Header",input:"true",tooltip:"Header for form section",weight:1},{type:"textfield",key:"subheader",label:"Section Subheader",input:"true",tooltip:"Subheader for form section",weight:2},{type:"textfield",key:"instructionalText",label:"Instructional Text",input:"true",tooltip:"Instructions for form section",weight:3},{type:"select",key:"inputType",label:"Input Type",input:"true",tooltip:"Radio or Checkbox",weight:4,required:!0,data:{values:[{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}]},validate:{required:!0}},{type:"textfield",key:"documentIcon",label:"Document Icon",input:"true",tooltip:"Icon class for document",weight:5},{type:"textfield",key:"infoIcon",label:"Info Icon",input:"true",tooltip:"Icon class for info circle",weight:6},{type:"textfield",key:"accordionIconDown",label:"Accordion Icon Down",input:"true",tooltip:"Icon class for accordion down",weight:7},{type:"textfield",key:"accordionIconUp",label:"Accordion Icon Up",input:"true",tooltip:"Icon class for accordion up",weight:8},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Me=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"editgrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Tags",key:"tags",input:!0,type:"datagrid",reorder:!0,defaultValue:[{tag:"",theme:""}],components:[{label:"Tag",key:"tag",input:!0,type:"textfield"},{label:"Theme",key:"theme",input:!0,type:"select",data:{values:[{label:"Primary",value:"primary"},{label:"Secondar",value:"secondary"}]}}]},{label:"Requirements",key:"requirements",input:!0,type:"textarea"},{label:"Required Documents",key:"requiredDocuments",tooltip:"Comma separated list of required documents",input:!0,type:"textfield"}]}],We=Formio.Components.baseEditForm;function ze(...n){return We([{key:"display",components:He},{key:"data",components:Me}],...n)}const ne=Formio.Components.components.field;var x;let Ue=(x=class extends ne{static schema(...a){return ne.schema({type:"CNSelectBlockDetailed",label:"CN Select Block Detailed",key:"CNSelectBlockDetailed",values:[{label:"",value:"",description:"",tags:"",requirements:"",requiredDocuments:""}],input:!0,header:"",subheader:"",instructionalText:"",inputType:"radio",documentIcon:"fas fa-file",infoIcon:"fas fa-circle-info",accordionIconDown:"fas fa-chevron-down",accordionIconUp:"fas fa-chevron-up"},...a)}static get builderInfo(){return{title:"CN Select Block Detailed",group:"basic",icon:"fas fa-file",weight:0,schema:x.schema()}}constructor(a,o,i){super(a,o,i)}render(){return super.render(this.renderTemplate("CNSelectBlockDetailed",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNSelectBlockDetailed||[]).forEach(o=>{o.addEventListener("click",i=>{const u=o.getAttribute("data-value"),g=o.querySelector("input");g&&(g.checked=!g.checked),this.setValue(u)})})}attach(a){return this.loadRefs(a,{CNSelectBlockDetailed:"multiple"}),this.attachCardListeners(),this.attachAccordionListeners(a),super.attach(a)}attachAccordionListeners(a){a.querySelectorAll(".cn-select-block-detailed--accordion-btn").forEach(i=>{const u=i.getAttribute("href"),g=a.querySelector(u);g&&($(g).on("show.bs.collapse",()=>{i.querySelector(".collapse-icon-down").style.display="none",i.querySelector(".collapse-icon-up").style.display="inline"}),$(g).on("hide.bs.collapse",()=>{i.querySelector(".collapse-icon-down").style.display="inline",i.querySelector(".collapse-icon-up").style.display="none"}))})}updateCards(a){(this.refs.CNSelectBlockDetailed||[]).forEach(i=>{const u=i.getAttribute("data-value");i.classList.toggle("cn-select-block-detailed--selected",this.updateCardsBasedOnInputType(u,a))})}updateCardsBasedOnInputType(a,o){return this.isCheckbox()?o.includes(a):o===a}get defaultSchema(){return x.schema()}setValue(a,o){let i=a;this.isCheckbox()&&(i=this.setValueForCheckbox(a));const u=super.setValue(i,o);return this.updateCards(i),u}setValueForCheckbox(a){return(typeof this.dataValue=="string"||!this.dataValue)&&(this.dataValue=[]),this.dataValue.indexOf(a)<0?[...this.dataValue,a]:this.dataValue.filter(i=>i!==a)}getValue(){return this.dataValue}isCheckbox(){return this.component.inputType==="checkbox"}},C(x,"editForm",ze),x);const Je={CNFormBase:Ne,CNPageHeader:Ve,CNRadioCard:ve,CNRadioSwitch:Re,CNSelectBlock:je,CNSelectBlockDetailed:Ue,CNWell:Fe};function Xe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ke(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var a=n.default;if(typeof a=="function"){var o=function i(){return this instanceof i?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};o.prototype=a.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var u=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(o,i,u.get?u:{enumerable:!0,get:function(){return n[i]}})}),o}var H={};const Ze={},Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),re=Ke(Ge);var M={},ie;function Qe(){return ie||(ie=1,function(n){var a=/[|\\{}()[\]^$+*?.]/g,o=Object.prototype.hasOwnProperty,i=function(c,p){return o.apply(c,[p])};n.escapeRegExpChars=function(c){return c?String(c).replace(a,"\\$&"):""};var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},g=/[&<>'"]/g;function A(c){return u[c]||c}var B=`var _ENCODE_HTML_RULES = {
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
`;n.escapeXML=function(c){return c==null?"":String(c).replace(g,A)};function P(){return Function.prototype.toString.call(this)+`;
`+B}try{typeof Object.defineProperty=="function"?Object.defineProperty(n.escapeXML,"toString",{value:P}):n.escapeXML.toString=P}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}n.shallowCopy=function(c,p){if(p=p||{},c!=null)for(var h in p)i(p,h)&&(h==="__proto__"||h==="constructor"||(c[h]=p[h]));return c},n.shallowCopyFromList=function(c,p,h){if(h=h||[],p=p||{},c!=null)for(var V=0;V<h.length;V++){var v=h[V];if(typeof p[v]<"u"){if(!i(p,v)||v==="__proto__"||v==="constructor")continue;c[v]=p[v]}}return c},n.cache={_data:{},set:function(c,p){this._data[c]=p},get:function(c){return this._data[c]},remove:function(c){delete this._data[c]},reset:function(){this._data={}}},n.hyphenToCamel=function(c){return c.replace(/-[a-z]/g,function(p){return p[1].toUpperCase()})},n.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}(),n.hasOwnOnlyObject=function(c){var p=n.createNullProtoObjWherePossible();for(var h in c)i(c,h)&&(p[h]=c[h]);return p}}(M)),M}const Ye="3.1.10",et={version:Ye};var oe;function tt(){return oe||(oe=1,function(n){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var a=re,o=re,i=Qe(),u=!1,g=et.version,A="<",B=">",P="%",c="locals",p="ejs",h="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",V=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],v=V.concat("cache"),W=/^\uFEFF/,q=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;n.cache=i.cache,n.fileLoader=a.readFileSync,n.localsName=c,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,l,e){var r=o.dirname,s=o.extname,d=o.resolve,f=d(e?l:r(l),t),k=s(t);return k||(f+=".ejs"),f};function z(t,l){var e;if(l.some(function(r){return e=n.resolveInclude(t,r,!0),a.existsSync(e)}))return e}function le(t,l){var e,r,s=l.views,d=/^[A-Za-z]+:\\|^\//.exec(t);if(d&&d.length)t=t.replace(/^\/*/,""),Array.isArray(l.root)?e=z(t,l.root):e=n.resolveInclude(t,l.root||"/",!0);else if(l.filename&&(r=n.resolveInclude(t,l.filename),a.existsSync(r)&&(e=r)),!e&&Array.isArray(s)&&(e=z(t,s)),!e&&typeof l.includer!="function")throw new Error('Could not find the include file "'+l.escapeFunction(t)+'"');return e}function D(t,l){var e,r=t.filename,s=arguments.length>1;if(t.cache){if(!r)throw new Error("cache option requires a filename");if(e=n.cache.get(r),e)return e;s||(l=U(r).toString().replace(W,""))}else if(!s){if(!r)throw new Error("Internal EJS error: no file name or template provided");l=U(r).toString().replace(W,"")}return e=n.compile(l,t),t.cache&&n.cache.set(r,e),e}function se(t,l,e){var r;if(e){try{r=D(t)(l)}catch(s){return e(s)}e(null,r)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(s,d){try{r=D(t)(l),s(r)}catch(f){d(f)}});throw new Error("Please provide a callback function")}}function U(t){return n.fileLoader(t)}function ce(t,l){var e=i.shallowCopy(i.createNullProtoObjWherePossible(),l);if(e.filename=le(t,e),typeof l.includer=="function"){var r=l.includer(t,e.filename);if(r&&(r.filename&&(e.filename=r.filename),r.template))return D(e,r.template)}return D(e)}function J(t,l,e,r,s){var d=l.split(`
`),f=Math.max(r-3,0),k=Math.min(d.length,r+3),b=s(e),L=d.slice(f,k).map(function(O,R){var I=R+f+1;return(I==r?" >> ":"    ")+I+"| "+O}).join(`
`);throw t.path=b,t.message=(b||"ejs")+":"+r+`
`+L+`

`+t.message,t}function X(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(l,e){var r;return e&&e.scope&&(u||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),u=!0),e.context||(e.context=e.scope),delete e.scope),r=new m(l,e),r.compile()},n.render=function(t,l,e){var r=l||i.createNullProtoObjWherePossible(),s=e||i.createNullProtoObjWherePossible();return arguments.length==2&&i.shallowCopyFromList(s,r,V),D(s,t)(r)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),l=t.shift(),e,r={filename:l},s,d;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(s=t.shift(),t.length?i.shallowCopy(r,t.pop()):(s.settings&&(s.settings.views&&(r.views=s.settings.views),s.settings["view cache"]&&(r.cache=!0),d=s.settings["view options"],d&&i.shallowCopy(r,d)),i.shallowCopyFromList(r,s,v)),r.filename=l):s=i.createNullProtoObjWherePossible(),se(r,s,e)},n.Template=m,n.clearCache=function(){n.cache.reset()};function m(t,l){var e=i.hasOwnOnlyObject(l),r=i.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",r.client=e.client||!1,r.escapeFunction=e.escape||e.escapeFunction||i.escapeXML,r.compileDebug=e.compileDebug!==!1,r.debug=!!e.debug,r.filename=e.filename,r.openDelimiter=e.openDelimiter||n.openDelimiter||A,r.closeDelimiter=e.closeDelimiter||n.closeDelimiter||B,r.delimiter=e.delimiter||n.delimiter||P,r.strict=e.strict||!1,r.context=e.context,r.cache=e.cache||!1,r.rmWhitespace=e.rmWhitespace,r.root=e.root,r.includer=e.includer,r.outputFunctionName=e.outputFunctionName,r.localsName=e.localsName||n.localsName||c,r.views=e.views,r.async=e.async,r.destructuredLocals=e.destructuredLocals,r.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,r.strict?r._with=!1:r._with=typeof e._with<"u"?e._with:!0,this.opts=r,this.regex=this.createRegex()}m.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},m.prototype={createRegex:function(){var t=h,l=i.escapeRegExpChars(this.opts.delimiter),e=i.escapeRegExpChars(this.opts.openDelimiter),r=i.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,l).replace(/</g,e).replace(/>/g,r),new RegExp(t)},compile:function(){var t,l,e=this.opts,r="",s="",d=e.escapeFunction,f,k=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),r+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!q.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");r+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!q.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var b="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var O=e.destructuredLocals[L];if(!q.test(O))throw new Error("destructuredLocals["+L+"] is not a valid JS identifier.");L>0&&(b+=`,
  `),b+=O+" = __locals."+O}r+=b+`;
`}e._with!==!1&&(r+="  with ("+e.localsName+` || {}) {
`,s+=`  }
`),s+=`  return __output;
`,this.source=r+this.source+s}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+k+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+d.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+J.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+k+`
`);try{if(e.async)try{f=new Function("return (async function(){}).constructor;")()}catch(y){throw y instanceof SyntaxError?new Error("This environment does not support async/await"):y}else f=Function;l=new f(e.localsName+", escapeFn, include, rethrow",t)}catch(y){throw y instanceof SyntaxError&&(e.filename&&(y.message+=" in "+e.filename),y.message+=` while compiling ejs

`,y.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,y.message+="https://github.com/RyanZim/EJS-Lint",e.async||(y.message+=`
`,y.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),y}var R=e.client?l:function(K){var de=function(pe,Z){var j=i.shallowCopy(i.createNullProtoObjWherePossible(),K);return Z&&(j=i.shallowCopy(j,Z)),ce(pe,e)(j)};return l.apply(e.context,[K||i.createNullProtoObjWherePossible(),d,de,J])};if(e.filename&&typeof Object.defineProperty=="function"){var I=e.filename,ue=o.basename(I,o.extname(I));try{Object.defineProperty(R,"name",{value:ue,writable:!1,enumerable:!1,configurable:!0})}catch{}}return R},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var l=this,e=this.parseTemplateText(),r=this.opts.delimiter,s=this.opts.openDelimiter,d=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(f,k){var b;if(f.indexOf(s+r)===0&&f.indexOf(s+r+r)!==0&&(b=e[k+2],!(b==r+d||b=="-"+r+d||b=="_"+r+d)))throw new Error('Could not find matching close tag for "'+f+'".');l.scanLine(f)})},parseTemplateText:function(){for(var t=this.templateText,l=this.regex,e=l.exec(t),r=[],s;e;)s=e.index,s!==0&&(r.push(t.substring(0,s)),t=t.slice(s)),r.push(e[0]),t=t.slice(e[0].length),e=l.exec(t);return t&&r.push(t),r},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var l=this,e=this.opts.delimiter,r=this.opts.openDelimiter,s=this.opts.closeDelimiter,d=0;switch(d=t.split(`
`).length-1,t){case r+e:case r+e+"_":this.mode=m.modes.EVAL;break;case r+e+"=":this.mode=m.modes.ESCAPED;break;case r+e+"-":this.mode=m.modes.RAW;break;case r+e+"#":this.mode=m.modes.COMMENT;break;case r+e+e:this.mode=m.modes.LITERAL,this.source+='    ; __append("'+t.replace(r+e+e,r+e)+`")
`;break;case e+e+s:this.mode=m.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+s,e+s)+`")
`;break;case e+s:case"-"+e+s:case"_"+e+s:this.mode==m.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case m.modes.EVAL:case m.modes.ESCAPED:case m.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case m.modes.EVAL:this.source+="    ; "+t+`
`;break;case m.modes.ESCAPED:this.source+="    ; __append(escapeFn("+X(t)+`))
`;break;case m.modes.RAW:this.source+="    ; __append("+X(t)+`)
`;break;case m.modes.COMMENT:break;case m.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}l.opts.compileDebug&&d&&(this.currentLine+=d,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=i.escapeXML,n.__express=n.renderFile,n.VERSION=g,n.name=p,typeof window<"u"&&(window.ejs=n)}(H)),H}var at=tt();const T=Xe(at);function nt(n){return T.render(`<div class="cn-radio-card--group row g-0">
  <% component.values.forEach(function(item) { %>
    <div class="col-md-<%= (12 / component.numberOfColumns) %>">
      <div ref="CNRadioCard" class="card cn-radio-card--option shadow-sm mr-2" data-value="<%= item.value %>"
        style="cursor: pointer;">
        <div class="row g-0">
          <div class="col-md-2">
            <div
              class="cn-radio-card--icon m-2 border rounded h-50 w-100 text-center d-flex justify-content-center align-items-center">
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
    </div>
    <% }); %>
</div>
`,n)}const rt={form:nt};function it(n){return T.render(`<div class="cn-form-base" ref="component">
  <div class="cn-form-base--container p-4">
    <div class="cn-form-base--header text-white mb-4">
      <span><%- component.formName %></span>
    </div>
    <div class="cn-form-base--well" ref="nested-<%= component.key %>">
      <%- children %>
    </div>
  </div>
</div>`,n)}const ot={form:it};function lt(n){return T.render(`<div class="cn-page-header">
    <% if (component.pageHeader) { %>
     <h1 class="cn-page-header--header"><%- component.pageHeader %></h1>
    <% } %>
    <% if (component.pageSubheader) { %>
     <p class="cn-page-header--subheader"><%- component.pageSubheader %></p>
    <% } %>
</div>`,n)}const st={form:lt};function ct(n){return T.render(`<div class="cn-well-container well well-<%= component.wellSize || 'default' %>">
  <div class="cn-well-body" ref="nested-<%= component.key %>" id="<%= component.key %>-<%= component.key %>">
    <%- children %>
  </div>
</div>
`,n)}const ut={form:ct};function dt(n){return`<nav aria-label="navigation" id="${n.wizardKey}-header" class="cn-wizard-header-vertical">
    <ul class="pagination flex-column">
      ${n.panels.map((a,o)=>`
      <li class="col-xs-12 page-item${n.currentPage===o?" active":""} d-flex align-items-center" style="cursor: pointer;">  
        ${n.currentPage<o?'<i class="bi bi-circle"></i>':'<i class="bi bi-circle-fill"></i>'}
        <span class="page-link" ref="${n.wizardKey}-link" style="margin-left: 0px;">
          ${n.t(a.title,{_userInput:!0})}
          ${a.tooltip&&n.currentPage===o?`<i ref="${n.wizardKey}-tooltip" class="${n.iconClass("question-sign")} text-muted" data-tooltip="${a.tooltip}"></i>`:""}
        </span>
      </li>
      `).join("")}
    </ul>
  </nav>`}const pt={form:dt};function mt(n){return T.render(`<div class="cn-radio-switch--group d-flex">
  <% component.values.forEach(function(item) { %>
    <div ref="CNRadioSwitch" class="cn-radio-switch--option flex-fill shadow-sm text-center p-2"
      data-value="<%= item.value %>" style="cursor: pointer;">
      <span>
        <%= item.label %>
      </span>
    </div>
    <% }); %>
</div>`,n)}const ht={form:mt};function ft(n){return T.render(`<div class="cn-select-block row g-0">
  <% if (component.header) { %>
    <div class="col-12">
      <h2 class="cn-select-block--header">
        <%= component.header %>
      </h2>
      <p class="cn-select-block--subheader">
        <%= component.subheader %>
      </p>
    </div>
    <% } %>
      <% component.values.forEach(function(item, index) { %>
        <div ref="CNSelectBlock" class="col-12" data-value="<%= item.value %>">
          <div class="card cn-select-block--option shadow-sm p-3 mb-3 d-flex flex-row align-items-center">
            <div class="mr-2">
              <input type="<%= component.inputType %>" name="<%= component.id %>">
            </div>
            <div class="cn-select-block--label">
              <%= item.label %>
            </div>
          </div>
        </div>
        <% }); %>
</div>
</div>`,n)}const yt={form:ft};function gt(n){return T.render(`<div class="cn-select-block-detailed row g-0">
  <% if (component.header) { %>
    <% var colClass=component.instructionalText ? "6" : "12" %>
      <div class="col-<%= colClass %>">
        <h2 class="cn-select-block-detailed--header">
          <%= component.header %>
        </h2>
        <p class="cn-select-block-detailed--subheader">
          <%= component.subheader %>
        </p>
      </div>
      <% if (component.instructionalText) { %>
        <div class="col-6 text-right">
          <p class="cn-select-block-detailed--instructional-text">
            <i class="<%= component.infoIcon %> info-icon"></i>
            <%= component.instructionalText %>
          </p>
        </div>
        <% } %>
          <% } %>
            <% component.values.forEach(function(item, index) { %>
              <div ref="CNSelectBlockDetailed" class="col-12" data-value="<%= item.value %>">
                <div class="card cn-select-block-detailed--option shadow-sm p-3 mb-3 d-flex flex-row">
                  <div class="mr-2">
                    <input type="<%= component.inputType %>" name="<%= component.id %>">
                  </div>
                  <div class="cn-select-block-detailed--content">
                    <div class="cn-select-block-detailed--label">
                      <%- item.label %>
                    </div>
                    <div class="mt-1 mb-1 cn-select-block-detailed--tags">
                      <% if (item.tags) { %>
                        <% item.tags.forEach(function(tag) { %>
                          <% if (tag.tag.trim()) { %>
                            <span class="badge me-1 mb-1 cn-select-block-detailed--tag <%= tag.theme.trim() %>">
                              <%= tag.tag.trim() %>
                            </span>
                            <% } %>
                              <% }); %>
                                <% } %>
                    </div>
                    <div class="cn-select-block-detailed--description">
                      <%- item.description %>
                    </div>
                    <% if (item.requirements || item.requiredDocuments) { %>
                      <div class="mt-2 cn-select-block-detailed--accordion">
                        <a class="btn btn-link p-0 cn-select-block-detailed--accordion-btn" data-toggle="collapse"
                          href="#collapse-<%= component.id %>-<%= index %>" role="button" aria-expanded="false"
                          aria-controls="collapse-<%= component.id %>-<%= index %>">
                          View requirements
                          <i class="<%= component.accordionIconDown %> collapse-icon-down"></i>
                          <i class="<%= component.accordionIconUp %> collapse-icon-up" style="display: none;"></i>
                        </a>
                        <div class="collapse" id="collapse-<%= component.id %>-<%= index %>">
                          <div class="card card-body mt-2 p-2">
                            <div><i class="<%= component.infoIcon %> info-icon"></i></div>
                            <div class="ml-2 cn-select-block-detailed--requirements">
                              <% if (item.requirements) { %>
                                <div class="cn-select-block-detailed--requirements-title">Requirements</div>
                                <div class="cn-select-block-detailed--requirements-content"><%- item.requirements %>
                                </div>
                                <% } %>
                                  <% if (item.requiredDocuments) { %>
                                    <div class="cn-select-block-detailed--requiredDocuments mt-2">
                                      <span class="cn-select-block-detailed--requirements-title"><i
                                          class="<%= component.documentIcon %>"></i> Required documents: </span>
                                      <% item.requiredDocuments.split(',').forEach(function(tag) { %>
                                        <% if (tag.trim()) { %>
                                          <span class="badge me-1 mb-1 cn-select-block-detailed--tag primary">
                                            <%= tag.trim() %>
                                          </span>
                                          <% } %>
                                            <% }); %>
                                    </div>
                                    <% } %>
                            </div>
                          </div>
                        </div>
                      </div>
                      <% } %>
                  </div>
                </div>
              </div>
              <% }); %>
</div>`,n)}const bt={form:gt},vt={CNFormBase:ot,CNPageHeader:st,CNRadioCard:rt,CNRadioSwitch:ht,CNSelectBlock:yt,CNSelectBlockDetailed:bt,CNWell:ut,wizardHeaderVertical:pt},kt={bootstrap:vt};Formio.use({components:Je,templates:kt});
