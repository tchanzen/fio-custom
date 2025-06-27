var kt=Object.defineProperty;var Ct=(A,C,q)=>C in A?kt(A,C,{enumerable:!0,configurable:!0,writable:!0,value:q}):A[C]=q;var S=(A,C,q)=>Ct(A,typeof C!="symbol"?C+"":C,q);(function(){"use strict";var E,_,F,x,R,L,T,V;Formio.Components.baseEditForm,Formio.Components.components.field;const A=[{type:"number",key:"numberOfColumns",label:"Number of Columns",input:"true",tooltip:"The number of columns to be displayed"},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"hideLabel",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],C=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Icon",key:"icon",input:!0,type:"textfield"}]}],q=Formio.Components.baseEditForm;function pe(...a){return q([{key:"display",components:A},{key:"data",components:C}],...a)}const X=Formio.Components.components.field;let me=(E=class extends X{static schema(...t){return X.schema({type:"CNRadioCard",label:"CN Radio Card",key:"CNRadioCard",values:[{label:"",value:"",description:"",icon:""}],input:!0,numberOfColumns:2},...t)}static get builderInfo(){return{title:"CN Radio Card",group:"basic",icon:"fas fa-square",weight:0,schema:E.schema()}}constructor(t,o,n){super(t,o,n)}render(){return super.render(this.renderTemplate("CNRadioCard",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNRadioCard||[]).forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("data-value");this.setValue(n)})})}attach(t){return this.loadRefs(t,{CNRadioCard:"multiple"}),this.attachCardListeners(),super.attach(t)}updateCards(t){(this.refs.CNRadioCard||[]).forEach(n=>{const s=n.getAttribute("data-value");n.classList.toggle("border-primary",s===t)})}get defaultSchema(){return E.schema()}get labelInfo(){return{hidden:!0}}setValue(t,o){const n=super.setValue(t,o);return this.updateCards(t),n}getValue(){return this.dataValue}},S(E,"editForm",pe),E);const he=[{key:"hidden",ignore:!0},{key:"modalEdit",ignore:!0},{key:"tableView",ignore:!0},{key:"disabled",ignore:!0},{key:"hideLabel",ignore:!0},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"initialFocus",ignore:!0},{type:"textfield",key:"formName",label:"Form Name",input:"true",tooltip:"The name of the form",weight:1}],fe=Formio.Components.components.nested.editForm;function ye(...a){return fe([{key:"display",components:he}],...a)}const K=Formio.Components.components.nested;let be=(_=class extends K{static schema(...t){return K.schema({label:"CN Form Base",type:"CNFormBase",key:"CNFormBase",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,formName:""},...t)}static get builderInfo(){return{title:"CN Form Base",icon:"list-alt",group:"layout",schema:_.schema()}}get defaultSchema(){return _.schema()}get labelInfo(){return{hidden:!0}}get nestedKey(){return`nested-${this.key}`}get templateName(){return"CNFormBase"}static get isContainer(){return!0}},S(_,"editForm",ye),_);const ge=[{key:"hidden",ignore:!0},{key:"modalEdit",ignore:!0},{key:"tableView",ignore:!0},{key:"disabled",ignore:!0},{key:"hideLabel",ignore:!0},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"initialFocus",ignore:!0},{type:"textfield",key:"wellTitle",label:"Well Title",input:"true",tooltip:"The title to display in the well header",weight:1},{type:"select",key:"wellSize",label:"Well Size",input:"true",tooltip:"The size of the well component",data:{values:[{label:"Small",value:"sm"},{label:"Default",value:"default"},{label:"Large",value:"lg"}]},defaultValue:"default",weight:2}],ve=Formio.Components.components.nested.editForm;function we(...a){return ve([{key:"display",components:ge}],...a)}const Z=Formio.Components.components.nested;let ke=(F=class extends Z{static schema(...t){return Z.schema({label:"CN Well",type:"CNWell",key:"CNWell",theme:"default",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,wellTitle:"",wellSize:"default",hideLabel:!0},...t)}static get builderInfo(){return{title:"CN Well",icon:"square",group:"layout",schema:F.schema()}}get labelInfo(){return{hidden:!0}}get defaultSchema(){return F.schema()}get templateName(){return"CNWell"}static get isContainer(){return!0}},S(F,"editForm",we),F);const Ce=[{type:"textfield",key:"pageHeader",label:"Page Header",input:"true",tooltip:"Header for form page",weight:1},{type:"textfield",key:"pageSubheader",label:"Page Subheader",input:"true",tooltip:"Subheader for form page",weight:2},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"hideLabel",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Se=Formio.Components.baseEditForm;function Ne(...a){return Se([{key:"display",components:Ce},{key:"data",ignore:!0},{key:"validation",ignore:!0}],...a)}const G=Formio.Components.components.component;let Ee=(x=class extends G{static schema(...t){return G.schema({type:"CNPageHeader",label:"CN Page Header",key:"CNPageHeader",input:!1,pageHeader:"",pageSubheader:""},...t)}static get builderInfo(){return{title:"CN Page Header",group:"layout",icon:"fas fa-square",weight:0,schema:x.schema()}}constructor(t,o,n){super(t,o,n)}render(){return super.render(this.renderTemplate("CNPageHeader",{component:this.component,instance:this}))}get defaultSchema(){return x.schema()}},S(x,"editForm",Ne),x);const _e=[{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Fe=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}}]}],xe=Formio.Components.baseEditForm;function Re(...a){return xe([{key:"display",components:_e},{key:"data",components:Fe}],...a)}const Q=Formio.Components.components.field;let Le=(R=class extends Q{static schema(...t){return Q.schema({type:"CNRadioSwitch",label:"CN Radio Card",key:"CNRadioSwitch",values:[{label:"",value:""}],input:!0},...t)}static get builderInfo(){return{title:"CN Radio Switch",group:"basic",icon:"fas fa-square",weight:0,schema:R.schema()}}constructor(t,o,n){super(t,o,n)}render(){return super.render(this.renderTemplate("CNRadioSwitch",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNRadioSwitch||[]).forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("data-value");this.setValue(n)})})}attach(t){return this.loadRefs(t,{CNRadioSwitch:"multiple"}),this.attachCardListeners(),this.dataValue&&this.updateCards(this.dataValue),super.attach(t)}updateCards(t){(this.refs.CNRadioSwitch||[]).forEach(n=>{const s=n.getAttribute("data-value");n.classList.toggle("cn-radio-switch--selected",s===t)})}get defaultSchema(){return R.schema()}setValue(t,o){const n=super.setValue(t,o);return this.updateCards(t),n}getValue(){return this.dataValue}get labelInfo(){return{hidden:this.component.hideLabel}}},S(R,"editForm",Re),R);const Te=[{type:"textfield",key:"header",label:"Page Header",input:"true",tooltip:"Header for form page",weight:1},{type:"textfield",key:"subheader",label:"Page Subheader",input:"true",tooltip:"Subheader for form page",weight:2},{type:"select",key:"inputType",label:"Input Type",input:"true",tooltip:"Radio or Checkbox",weight:3,required:!0,data:{values:[{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}]},validate:{required:!0}},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Ve=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}}]}],Ie=Formio.Components.baseEditForm;function De(...a){return Ie([{key:"display",components:Te},{key:"data",components:Ve}],...a)}const Y=Formio.Components.components.field;let Ae=(L=class extends Y{static schema(...t){return Y.schema({type:"CNSelectBlock",label:"CN Select Block",key:"CNSelectBlock",values:[{label:"",value:""}],input:!0,header:"",subheader:"",inputType:"radio"},...t)}static get builderInfo(){return{title:"CN Select Block",group:"basic",icon:"fas fa-square",weight:0,schema:L.schema()}}constructor(t,o,n){super(t,o,n)}render(){return super.render(this.renderTemplate("CNSelectBlock",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}get labelInfo(){return{hidden:this.component.hideLabel}}attachCardListeners(){(this.refs.CNSelectBlock||[]).forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("data-value"),s=o.querySelector("input");s&&(s.checked=!s.checked),this.setValue(n)})})}attach(t){return this.loadRefs(t,{CNSelectBlock:"multiple"}),this.attachCardListeners(),super.attach(t)}updateCards(t){(this.refs.CNSelectBlock||[]).forEach(n=>{const s=n.getAttribute("data-value");n.classList.toggle("cn-select-block--selected",this.updateCardsBasedOnInputType(s,t))})}updateCardsBasedOnInputType(t,o){return this.isCheckbox()?o.includes(t):o===t}get defaultSchema(){return L.schema()}setValue(t,o){let n=t;this.isCheckbox()&&(n=this.setValueForCheckbox(t));const s=super.setValue(n,o);return this.updateCards(n),s}setValueForCheckbox(t){return(typeof this.dataValue=="string"||!this.dataValue)&&(this.dataValue=[]),this.dataValue.indexOf(t)<0?[...this.dataValue,t]:this.dataValue.filter(n=>n!==t)}getValue(){return this.dataValue}isCheckbox(){return this.component.inputType==="checkbox"}},S(L,"editForm",De),L);const Oe=[{type:"textfield",key:"header",label:"Section Header",input:"true",tooltip:"Header for form section",weight:1},{type:"textfield",key:"subheader",label:"Section Subheader",input:"true",tooltip:"Subheader for form section",weight:2},{type:"textfield",key:"instructionalText",label:"Instructional Text",input:"true",tooltip:"Instructions for form section",weight:3},{type:"select",key:"inputType",label:"Input Type",input:"true",tooltip:"Radio or Checkbox",weight:4,required:!0,data:{values:[{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}]},validate:{required:!0}},{type:"textfield",key:"documentIcon",label:"Document Icon",input:"true",tooltip:"Icon class for document",weight:5},{type:"textfield",key:"infoIcon",label:"Info Icon",input:"true",tooltip:"Icon class for info circle",weight:6},{type:"textfield",key:"accordionIconDown",label:"Accordion Icon Down",input:"true",tooltip:"Icon class for accordion down",weight:7},{type:"textfield",key:"accordionIconUp",label:"Accordion Icon Up",input:"true",tooltip:"Icon class for accordion up",weight:8},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],qe=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"editgrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Tags",key:"tags",input:!0,type:"datagrid",reorder:!0,defaultValue:[{tag:"",theme:""}],components:[{label:"Tag",key:"tag",input:!0,type:"textfield"},{label:"Theme",key:"theme",input:!0,type:"select",data:{values:[{label:"Primary",value:"primary"},{label:"Secondar",value:"secondary"}]}}]},{label:"Requirements",key:"requirements",input:!0,type:"textarea"},{label:"Required Documents",key:"requiredDocuments",tooltip:"Comma separated list of required documents",input:!0,type:"textfield"}]}],Pe=Formio.Components.baseEditForm;function $e(...a){return Pe([{key:"display",components:Oe},{key:"data",components:qe}],...a)}const ee=Formio.Components.components.field;let Be=(T=class extends ee{static schema(...t){return ee.schema({type:"CNSelectBlockDetailed",label:"CN Select Block Detailed",key:"CNSelectBlockDetailed",values:[{label:"",value:"",description:"",tags:"",requirements:"",requiredDocuments:""}],input:!0,header:"",subheader:"",instructionalText:"",inputType:"radio",documentIcon:"fas fa-file",infoIcon:"fas fa-circle-info",accordionIconDown:"fas fa-chevron-down",accordionIconUp:"fas fa-chevron-up"},...t)}static get builderInfo(){return{title:"CN Select Block Detailed",group:"basic",icon:"fas fa-file",weight:0,schema:T.schema()}}constructor(t,o,n){super(t,o,n)}get labelInfo(){return{hidden:this.component.hideLabel}}render(){return super.render(this.renderTemplate("CNSelectBlockDetailed",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNSelectBlockDetailed||[]).forEach(o=>{o.addEventListener("click",n=>{const s=o.getAttribute("data-value"),f=o.querySelector("input");f&&(f.checked=!f.checked),this.setValue(s)})})}attach(t){return this.loadRefs(t,{CNSelectBlockDetailed:"multiple"}),this.attachCardListeners(),this.attachAccordionListeners(t),super.attach(t)}attachAccordionListeners(t){t.querySelectorAll(".cn-select-block-detailed--accordion-btn").forEach(n=>{const s=n.getAttribute("href"),f=t.querySelector(s);f&&($(f).on("show.bs.collapse",()=>{n.querySelector(".collapse-icon-down").style.display="none",n.querySelector(".collapse-icon-up").style.display="inline"}),$(f).on("hide.bs.collapse",()=>{n.querySelector(".collapse-icon-down").style.display="inline",n.querySelector(".collapse-icon-up").style.display="none"}))})}updateCards(t){(this.refs.CNSelectBlockDetailed||[]).forEach(n=>{const s=n.getAttribute("data-value");n.classList.toggle("cn-select-block-detailed--selected",this.updateCardsBasedOnInputType(s,t))})}updateCardsBasedOnInputType(t,o){return this.isCheckbox()?o.includes(t):o===t}get defaultSchema(){return T.schema()}setValue(t,o){let n=t;this.isCheckbox()&&(n=this.setValueForCheckbox(t));const s=super.setValue(n,o);return this.updateCards(n),s}setValueForCheckbox(t){return(typeof this.dataValue=="string"||!this.dataValue)&&(this.dataValue=[]),this.dataValue.indexOf(t)<0?[...this.dataValue,t]:this.dataValue.filter(n=>n!==t)}getValue(){return this.dataValue}isCheckbox(){return this.component.inputType==="checkbox"}},S(T,"editForm",$e),T);const Me=[{type:"textfield",input:!0,key:"label",label:"Label",placeholder:"Field Label",tooltip:"The label for this field.",weight:0},{type:"textfield",input:!0,key:"key",label:"Property Name",placeholder:"Field Property Name",tooltip:"The name of this field in the API endpoint.",weight:1},{type:"checkbox",input:!0,inputType:"checkbox",key:"hideLabel",label:"Hide Label",tooltip:"Hide the label of this component.",weight:2},{type:"textarea",input:!0,key:"description",label:"Description",placeholder:"Description for this field.",tooltip:"The description is text that will appear below the input field.",weight:3},{type:"textfield",input:!0,key:"tooltip",label:"Tooltip",placeholder:"To add a tooltip to this field, enter text here.",tooltip:"Adds a tooltip to the side of this field.",weight:4},{type:"textfield",input:!0,key:"customClass",label:"Custom CSS Class",placeholder:"Custom CSS Class",tooltip:"Custom CSS class to add to this component.",weight:5}],je=Formio.Components.components.nested.editForm;function We(...a){return je([{key:"display",components:Me}],...a)}const te=Formio.Components.components.nested,He={CNFormBase:be,CNPageHeader:Ee,CNRadioCard:me,CNRadioSwitch:Le,CNSelectBlock:Ae,CNSelectBlockDetailed:Be,CNWell:ke,CNMultiFieldRows:(V=class extends te{static schema(...t){return te.schema({label:"CN Multi Field Rows",type:"CNMultiFieldRows",key:"CNMultiFieldRows",theme:"default",components:[],clearOnHide:!1,input:!0,tableView:!1,persistent:!0,hideLabel:!0},...t)}static get builderInfo(){return{title:"CN Multi Field Rows",icon:"plus-square",group:"layout",schema:V.schema()}}get labelInfo(){return{hidden:!0}}get defaultSchema(){return V.schema()}get templateName(){return"CNMultiFieldRows"}static get isContainer(){return!0}constructor(t,o,n){super(t,o,n),this.rowData=[]}attach(t){const o=super.attach(t);return this.attachEventListeners(),o}attachEventListeners(){if(this.element){const t=this.element.querySelector(".cn-multi-field-add-btn");t&&t.addEventListener("click",n=>{n.preventDefault(),this.addRow()}),this.element.querySelectorAll(".cn-multi-field-remove-btn").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault(),this.removeRow(n)})})}}addRow(){const t=this.element.querySelector(".cn-multi-field-rows-container");t.querySelector(".cn-multi-field-row");const o=document.createElement("div");o.className="cn-multi-field-row",o.style.border="1px solid #ddd",o.style.padding="10px",o.style.marginBottom="10px",o.style.borderRadius="4px";const n=t.querySelectorAll(".cn-multi-field-row");o.setAttribute("data-row-index",n.length),o.innerHTML=`
      <div class="row">
        <div class="col-md-11">
          <div class="cn-multi-field-row-content" ref="nested-${this.component.key}-row-${n.length}">
            <!-- Components will be rendered here by Form.io -->
          </div>
        </div>
        <div class="col-md-1">
          <button type="button" class="btn btn-danger btn-sm cn-multi-field-remove-btn" title="Remove Row">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
    `;const s=t.querySelector(".cn-multi-field-add-row-container");t.insertBefore(o,s),this.createRowComponents(o,n.length),this.updateRemoveButtons(),this.attachEventListeners()}createRowComponents(t,o){const n=this.getComponents(),s=t.querySelector(".cn-multi-field-row-content");n.forEach(f=>{if(f.component){const h=JSON.parse(JSON.stringify(f.component));h.key=`${h.key}_row_${o}`;const g=Formio.Components.components[h.type]||Formio.Components.components.component,p=new g(h,this.options),d=p.createElement();s.appendChild(d),p.attach(d)}})}updateElementIds(t,o){t.querySelectorAll("[id]").forEach(h=>{const p=`${h.getAttribute("id")}_${o}`;h.setAttribute("id",p)}),t.querySelectorAll("[name]").forEach(h=>{const p=`${h.getAttribute("name")}_${o}`;h.setAttribute("name",p)}),t.querySelectorAll("[for]").forEach(h=>{const p=`${h.getAttribute("for")}_${o}`;h.setAttribute("for",p)})}clearRowValues(t){t.querySelectorAll("input, select, textarea").forEach(n=>{n.type==="checkbox"||n.type==="radio"?n.checked=!1:n.value=""})}removeRow(t){const o=t.closest(".cn-multi-field-row");this.element.querySelector(".cn-multi-field-rows-container").querySelectorAll(".cn-multi-field-row").length>1&&(o.remove(),this.reindexRows(),this.updateRemoveButtons())}reindexRows(){this.element.querySelector(".cn-multi-field-rows-container").querySelectorAll(".cn-multi-field-row").forEach((n,s)=>{n.setAttribute("data-row-index",s)})}updateRemoveButtons(){const t=this.element.querySelector(".cn-multi-field-rows-container"),o=t.querySelectorAll(".cn-multi-field-row");t.querySelectorAll(".cn-multi-field-remove-btn").forEach(s=>{s.style.display=o.length>1?"block":"none"})}getValue(){const t=[],n=this.element.querySelector(".cn-multi-field-rows-container").querySelectorAll(".cn-multi-field-row"),s=this.root?this.root.getComponents():this.getComponents();return n.forEach((f,h)=>{const g={};s.forEach(p=>{if(p.component&&p.component.key&&p.element&&f.contains(p.element)){const d=p.component.key.replace(/_row_\d+$/,"");g[d]=p.getValue()}}),Object.keys(g).length>0&&t.push(g)}),t}setValue(t,o={}){if(!Array.isArray(t))return super.setValue(t,o);const n=this.element.querySelector(".cn-multi-field-rows-container");let s=n.querySelectorAll(".cn-multi-field-row");for(;s.length>t.length&&s.length>1;){const g=n.querySelector(".cn-multi-field-row:last-of-type");if(g){const p=g.querySelector(".cn-multi-field-remove-btn");p&&this.removeRow(p)}s=n.querySelectorAll(".cn-multi-field-row")}for(;n.querySelectorAll(".cn-multi-field-row").length<t.length;)this.addRow();const f=this.root?this.root.getComponents():this.getComponents(),h=n.querySelectorAll(".cn-multi-field-row");return t.forEach((g,p)=>{if(h[p]){const d=h[p];f.forEach(u=>{if(u.component&&u.component.key&&u.element&&d.contains(u.element)){const y=u.component.key.replace(/_row_\d+$/,"");g[y]!==void 0&&u.setValue(g[y],o)}})}}),super.setValue(t,o)}},S(V,"editForm",We),V)};function ze(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function Ue(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var t=a.default;if(typeof t=="function"){var o=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(a).forEach(function(n){var s=Object.getOwnPropertyDescriptor(a,n);Object.defineProperty(o,n,s.get?s:{enumerable:!0,get:function(){return a[n]}})}),o}var H={};const ne=Ue(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var z={},ie;function Je(){return ie||(ie=1,function(a){var t=/[|\\{}()[\]^$+*?.]/g,o=Object.prototype.hasOwnProperty,n=function(d,u){return o.apply(d,[u])};a.escapeRegExpChars=function(d){return d?String(d).replace(t,"\\$&"):""};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},f=/[&<>'"]/g;function h(d){return s[d]||d}var g=`var _ENCODE_HTML_RULES = {
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
`;a.escapeXML=function(d){return d==null?"":String(d).replace(f,h)};function p(){return Function.prototype.toString.call(this)+`;
`+g}try{typeof Object.defineProperty=="function"?Object.defineProperty(a.escapeXML,"toString",{value:p}):a.escapeXML.toString=p}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}a.shallowCopy=function(d,u){if(u=u||{},d!=null)for(var y in u)n(u,y)&&(y==="__proto__"||y==="constructor"||(d[y]=u[y]));return d},a.shallowCopyFromList=function(d,u,y){if(y=y||[],u=u||{},d!=null)for(var P=0;P<y.length;P++){var I=y[P];if(typeof u[I]<"u"){if(!n(u,I)||I==="__proto__"||I==="constructor")continue;d[I]=u[I]}}return d},a.cache={_data:{},set:function(d,u){this._data[d]=u},get:function(d){return this._data[d]},remove:function(d){delete this._data[d]},reset:function(){this._data={}}},a.hyphenToCamel=function(d){return d.replace(/-[a-z]/g,function(u){return u[1].toUpperCase()})},a.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}(),a.hasOwnOnlyObject=function(d){var u=a.createNullProtoObjWherePossible();for(var y in d)n(d,y)&&(u[y]=d[y]);return u}}(z)),z}const Xe={version:"3.1.10"};var re;function Ke(){return re||(re=1,function(a){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var t=ne,o=ne,n=Je(),s=!1,f=Xe.version,h="<",g=">",p="%",d="locals",u="ejs",y="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",P=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],I=P.concat("cache"),ae=/^\uFEFF/,U=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;a.cache=n.cache,a.fileLoader=t.readFileSync,a.localsName=d,a.promiseImpl=new Function("return this;")().Promise,a.resolveInclude=function(i,l,e){var r=o.dirname,c=o.extname,m=o.resolve,v=m(e?l:r(l),i),D=c(i);return D||(v+=".ejs"),v};function oe(i,l){var e;if(l.some(function(r){return e=a.resolveInclude(i,r,!0),t.existsSync(e)}))return e}function ft(i,l){var e,r,c=l.views,m=/^[A-Za-z]+:\\|^\//.exec(i);if(m&&m.length)i=i.replace(/^\/*/,""),Array.isArray(l.root)?e=oe(i,l.root):e=a.resolveInclude(i,l.root||"/",!0);else if(l.filename&&(r=a.resolveInclude(i,l.filename),t.existsSync(r)&&(e=r)),!e&&Array.isArray(c)&&(e=oe(i,c)),!e&&typeof l.includer!="function")throw new Error('Could not find the include file "'+l.escapeFunction(i)+'"');return e}function B(i,l){var e,r=i.filename,c=arguments.length>1;if(i.cache){if(!r)throw new Error("cache option requires a filename");if(e=a.cache.get(r),e)return e;c||(l=le(r).toString().replace(ae,""))}else if(!c){if(!r)throw new Error("Internal EJS error: no file name or template provided");l=le(r).toString().replace(ae,"")}return e=a.compile(l,i),i.cache&&a.cache.set(r,e),e}function yt(i,l,e){var r;if(e){try{r=B(i)(l)}catch(c){return e(c)}e(null,r)}else{if(typeof a.promiseImpl=="function")return new a.promiseImpl(function(c,m){try{r=B(i)(l),c(r)}catch(v){m(v)}});throw new Error("Please provide a callback function")}}function le(i){return a.fileLoader(i)}function bt(i,l){var e=n.shallowCopy(n.createNullProtoObjWherePossible(),l);if(e.filename=ft(i,e),typeof l.includer=="function"){var r=l.includer(i,e.filename);if(r&&(r.filename&&(e.filename=r.filename),r.template))return B(e,r.template)}return B(e)}function se(i,l,e,r,c){var m=l.split(`
`),v=Math.max(r-3,0),D=Math.min(m.length,r+3),k=c(e),O=m.slice(v,D).map(function(M,W){var j=W+v+1;return(j==r?" >> ":"    ")+j+"| "+M}).join(`
`);throw i.path=k,i.message=(k||"ejs")+":"+r+`
`+O+`

`+i.message,i}function ce(i){return i.replace(/;(\s*$)/,"$1")}a.compile=function(l,e){var r;return e&&e.scope&&(s||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),s=!0),e.context||(e.context=e.scope),delete e.scope),r=new b(l,e),r.compile()},a.render=function(i,l,e){var r=l||n.createNullProtoObjWherePossible(),c=e||n.createNullProtoObjWherePossible();return arguments.length==2&&n.shallowCopyFromList(c,r,P),B(c,i)(r)},a.renderFile=function(){var i=Array.prototype.slice.call(arguments),l=i.shift(),e,r={filename:l},c,m;return typeof arguments[arguments.length-1]=="function"&&(e=i.pop()),i.length?(c=i.shift(),i.length?n.shallowCopy(r,i.pop()):(c.settings&&(c.settings.views&&(r.views=c.settings.views),c.settings["view cache"]&&(r.cache=!0),m=c.settings["view options"],m&&n.shallowCopy(r,m)),n.shallowCopyFromList(r,c,I)),r.filename=l):c=n.createNullProtoObjWherePossible(),yt(r,c,e)},a.Template=b,a.clearCache=function(){a.cache.reset()};function b(i,l){var e=n.hasOwnOnlyObject(l),r=n.createNullProtoObjWherePossible();this.templateText=i,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",r.client=e.client||!1,r.escapeFunction=e.escape||e.escapeFunction||n.escapeXML,r.compileDebug=e.compileDebug!==!1,r.debug=!!e.debug,r.filename=e.filename,r.openDelimiter=e.openDelimiter||a.openDelimiter||h,r.closeDelimiter=e.closeDelimiter||a.closeDelimiter||g,r.delimiter=e.delimiter||a.delimiter||p,r.strict=e.strict||!1,r.context=e.context,r.cache=e.cache||!1,r.rmWhitespace=e.rmWhitespace,r.root=e.root,r.includer=e.includer,r.outputFunctionName=e.outputFunctionName,r.localsName=e.localsName||a.localsName||d,r.views=e.views,r.async=e.async,r.destructuredLocals=e.destructuredLocals,r.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,r.strict?r._with=!1:r._with=typeof e._with<"u"?e._with:!0,this.opts=r,this.regex=this.createRegex()}b.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},b.prototype={createRegex:function(){var i=y,l=n.escapeRegExpChars(this.opts.delimiter),e=n.escapeRegExpChars(this.opts.openDelimiter),r=n.escapeRegExpChars(this.opts.closeDelimiter);return i=i.replace(/%/g,l).replace(/</g,e).replace(/>/g,r),new RegExp(i)},compile:function(){var i,l,e=this.opts,r="",c="",m=e.escapeFunction,v,D=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),r+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!U.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");r+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!U.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var k="  var __locals = ("+e.localsName+` || {}),
`,O=0;O<e.destructuredLocals.length;O++){var M=e.destructuredLocals[O];if(!U.test(M))throw new Error("destructuredLocals["+O+"] is not a valid JS identifier.");O>0&&(k+=`,
  `),k+=M+" = __locals."+M}r+=k+`;
`}e._with!==!1&&(r+="  with ("+e.localsName+` || {}) {
`,c+=`  }
`),c+=`  return __output;
`,this.source=r+this.source+c}e.compileDebug?i=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+D+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:i=this.source,e.client&&(i="escapeFn = escapeFn || "+m.toString()+`;
`+i,e.compileDebug&&(i="rethrow = rethrow || "+se.toString()+`;
`+i)),e.strict&&(i=`"use strict";
`+i),e.debug&&console.log(i),e.compileDebug&&e.filename&&(i=i+`
//# sourceURL=`+D+`
`);try{if(e.async)try{v=new Function("return (async function(){}).constructor;")()}catch(w){throw w instanceof SyntaxError?new Error("This environment does not support async/await"):w}else v=Function;l=new v(e.localsName+", escapeFn, include, rethrow",i)}catch(w){throw w instanceof SyntaxError&&(e.filename&&(w.message+=" in "+e.filename),w.message+=` while compiling ejs

`,w.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,w.message+="https://github.com/RyanZim/EJS-Lint",e.async||(w.message+=`
`,w.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),w}var W=e.client?l:function(de){var vt=function(wt,ue){var J=n.shallowCopy(n.createNullProtoObjWherePossible(),de);return ue&&(J=n.shallowCopy(J,ue)),bt(wt,e)(J)};return l.apply(e.context,[de||n.createNullProtoObjWherePossible(),m,vt,se])};if(e.filename&&typeof Object.defineProperty=="function"){var j=e.filename,gt=o.basename(j,o.extname(j));try{Object.defineProperty(W,"name",{value:gt,writable:!1,enumerable:!1,configurable:!0})}catch{}}return W},generateSource:function(){var i=this.opts;i.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var l=this,e=this.parseTemplateText(),r=this.opts.delimiter,c=this.opts.openDelimiter,m=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(v,D){var k;if(v.indexOf(c+r)===0&&v.indexOf(c+r+r)!==0&&(k=e[D+2],!(k==r+m||k=="-"+r+m||k=="_"+r+m)))throw new Error('Could not find matching close tag for "'+v+'".');l.scanLine(v)})},parseTemplateText:function(){for(var i=this.templateText,l=this.regex,e=l.exec(i),r=[],c;e;)c=e.index,c!==0&&(r.push(i.substring(0,c)),i=i.slice(c)),r.push(e[0]),i=i.slice(e[0].length),e=l.exec(i);return i&&r.push(i),r},_addOutput:function(i){if(this.truncate&&(i=i.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!i)return i;i=i.replace(/\\/g,"\\\\"),i=i.replace(/\n/g,"\\n"),i=i.replace(/\r/g,"\\r"),i=i.replace(/"/g,'\\"'),this.source+='    ; __append("'+i+`")
`},scanLine:function(i){var l=this,e=this.opts.delimiter,r=this.opts.openDelimiter,c=this.opts.closeDelimiter,m=0;switch(m=i.split(`
`).length-1,i){case r+e:case r+e+"_":this.mode=b.modes.EVAL;break;case r+e+"=":this.mode=b.modes.ESCAPED;break;case r+e+"-":this.mode=b.modes.RAW;break;case r+e+"#":this.mode=b.modes.COMMENT;break;case r+e+e:this.mode=b.modes.LITERAL,this.source+='    ; __append("'+i.replace(r+e+e,r+e)+`")
`;break;case e+e+c:this.mode=b.modes.LITERAL,this.source+='    ; __append("'+i.replace(e+e+c,e+c)+`")
`;break;case e+c:case"-"+e+c:case"_"+e+c:this.mode==b.modes.LITERAL&&this._addOutput(i),this.mode=null,this.truncate=i.indexOf("-")===0||i.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case b.modes.EVAL:case b.modes.ESCAPED:case b.modes.RAW:i.lastIndexOf("//")>i.lastIndexOf(`
`)&&(i+=`
`)}switch(this.mode){case b.modes.EVAL:this.source+="    ; "+i+`
`;break;case b.modes.ESCAPED:this.source+="    ; __append(escapeFn("+ce(i)+`))
`;break;case b.modes.RAW:this.source+="    ; __append("+ce(i)+`)
`;break;case b.modes.COMMENT:break;case b.modes.LITERAL:this._addOutput(i);break}}else this._addOutput(i)}l.opts.compileDebug&&m&&(this.currentLine+=m,this.source+="    ; __line = "+this.currentLine+`
`)}},a.escapeXML=n.escapeXML,a.__express=a.renderFile,a.VERSION=f,a.name=u,typeof window<"u"&&(window.ejs=a)}(H)),H}var Ze=Ke();const N=ze(Ze);function Ge(a){return N.render(`<div class="cn-radio-card--group row g-0">
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
`,a)}const Qe={form:Ge};function Ye(a){return N.render(`<div class="cn-form-base" ref="component">
  <div class="cn-form-base--container p-4">
    <div class="cn-form-base--header text-white mb-4">
      <span><%- component.formName %></span>
    </div>
    <div class="cn-form-base--well" ref="nested-<%= component.key %>">
      <%- children %>
    </div>
  </div>
</div>`,a)}const et={form:Ye};function tt(a){return N.render(`<div class="cn-page-header">
    <% if (component.pageHeader) { %>
     <h1 class="cn-page-header--header"><%- component.pageHeader %></h1>
    <% } %>
    <% if (component.pageSubheader) { %>
     <p class="cn-page-header--subheader"><%- component.pageSubheader %></p>
    <% } %>
</div>`,a)}const nt={form:tt};function it(a){return N.render(`<div class="cn-well-container well well-<%= component.wellSize || 'default' %>">
  <div class="cn-well-body" ref="nested-<%= component.key %>" id="<%= component.key %>-<%= component.key %>">
    <%- children %>
  </div>
</div>
`,a)}const rt={form:it};function at(a){return`<nav aria-label="navigation" id="${a.wizardKey}-header" class="cn-wizard-header-vertical">
    <ul class="pagination flex-column">
      ${a.panels.map((t,o)=>`
      <li class="col-xs-12 page-item${a.currentPage===o?" active":""} d-flex align-items-center" style="cursor: pointer;">  
        ${a.currentPage<o?'<i class="bi bi-circle"></i>':'<i class="bi bi-circle-fill"></i>'}
        <span class="page-link" ref="${a.wizardKey}-link" style="margin-left: 0px;">
          ${a.t(t.title,{_userInput:!0})}
          ${t.tooltip&&a.currentPage===o?`<i ref="${a.wizardKey}-tooltip" class="${a.iconClass("question-sign")} text-muted" data-tooltip="${t.tooltip}"></i>`:""}
        </span>
      </li>
      `).join("")}
    </ul>
  </nav>`}const ot={form:at};function lt(a){return N.render(`<div class="cn-radio-switch--group d-flex">
  <% component.values.forEach(function(item) { %>
    <div ref="CNRadioSwitch" class="cn-radio-switch--option flex-fill shadow-sm text-center p-2"
      data-value="<%= item.value %>" style="cursor: pointer;">
      <span>
        <%= item.label %>
      </span>
    </div>
    <% }); %>
</div>`,a)}const st={form:lt};function ct(a){return N.render(`<div class="cn-select-block row g-0">
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
        <div class="col-12">
          <div ref="CNSelectBlock" data-value="<%= item.value %>"
            class="card cn-select-block--option shadow-sm p-3 mb-3 d-flex flex-row align-items-center">
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
</div>`,a)}const dt={form:ct};function ut(a){return N.render(`<div class="cn-select-block-detailed row g-0">
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
              <div class="col-12" data-value="<%= item.value %>">
                <div ref="CNSelectBlockDetailed" data-value="<%= item.value %>"
                  class="card cn-select-block-detailed--option shadow-sm p-3 mb-3 d-flex flex-row">
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
</div>`,a)}const pt={form:ut};function mt(a){return N.render(`<div class="cn-multi-field-rows-container">
  <div class="cn-multi-field-row" data-row-index="0" style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
    <div class="row">
      <div class="col-md-11">
        <div class="cn-multi-field-row-content" ref="nested-<%= component.key %>">
          <%- children %>
        </div>
      </div>
      <div class="col-md-1">
        <button type="button" class="btn btn-danger btn-sm cn-multi-field-remove-btn" style="display: none;" title="Remove Row">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </div>
  </div>
  
  <div class="cn-multi-field-add-row-container">
    <button type="button" class="btn btn-primary btn-sm cn-multi-field-add-btn">
      <i class="fa fa-plus"></i> Add Row
    </button>
  </div>
</div> `,a)}const ht={bootstrap:{CNFormBase:et,CNPageHeader:nt,CNRadioCard:Qe,CNRadioSwitch:st,CNSelectBlock:dt,CNSelectBlockDetailed:pt,CNWell:rt,CNMultiFieldRows:{form:mt},wizardHeaderVertical:ot}};Formio.use({components:He,templates:ht})})();
