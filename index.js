var A=Object.defineProperty;var U=(o,e,l)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[e]=l;var I=(o,e,l)=>U(o,typeof e!="symbol"?e+"":e,l);const j=[{type:"textfield",key:"pageHeader",label:"Page Header",input:"true",tooltip:"Header for form page",weight:1},{type:"textfield",key:"pageSubheader",label:"Page Subheader",input:"true",tooltip:"Subheader for form page",weight:2},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"hideLabel",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],F=Formio.Components.baseEditForm;function z(...o){return F([{key:"display",components:j},{key:"data",ignore:!0},{key:"validation",ignore:!0}],...o)}const _=Formio.Components.components.component;var N;let G=(N=class extends _{static schema(...e){return _.schema({type:"CNPageHeader",label:"CN Page Header",key:"CNPageHeader",input:!1,pageHeader:"",pageSubheader:""},...e)}static get builderInfo(){return{title:"CN Page Header",group:"layout",icon:"fas fa-square",weight:0,schema:N.schema()}}constructor(e,l,a){super(e,l,a)}render(){return super.render(this.renderTemplate("CNPageHeader",{component:this.component,instance:this}))}get defaultSchema(){return N.schema()}},I(N,"editForm",z),N);const J=[{type:"number",key:"numberOfColumns",label:"Number of Columns",input:"true",tooltip:"The number of columns to be displayed"},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"hideLabel",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],K=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Icon",key:"icon",input:!0,type:"textfield"}]}],Q=Formio.Components.baseEditForm;function W(...o){return Q([{key:"display",components:J},{key:"data",components:K}],...o)}const H=Formio.Components.components.field;var V;let X=(V=class extends H{static schema(...e){return H.schema({type:"CNRadioCard",label:"CN Radio Card",key:"CNRadioCard",values:[{label:"",value:"",description:"",icon:""}],input:!0,numberOfColumns:2},...e)}static get builderInfo(){return{title:"CN Radio Card",group:"basic",icon:"fas fa-square",weight:0,schema:V.schema()}}constructor(e,l,a){super(e,l,a)}render(){return super.render(this.renderTemplate("CNRadioCard",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNRadioCard||[]).forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-value");this.setValue(a)})})}attach(e){return this.loadRefs(e,{CNRadioCard:"multiple"}),this.attachCardListeners(),super.attach(e)}updateCards(e){(this.refs.CNRadioCard||[]).forEach(a=>{const s=a.getAttribute("data-value");a.classList.toggle("border-primary",s===e)})}get defaultSchema(){return V.schema()}get labelInfo(){return{hidden:!0}}setValue(e,l){const a=super.setValue(e,l);return this.updateCards(e),a}getValue(){return this.dataValue}},I(V,"editForm",W),V);const Y=[{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],Z=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}}]}],ee=Formio.Components.baseEditForm;function te(...o){return ee([{key:"display",components:Y},{key:"data",components:Z}],...o)}const B=Formio.Components.components.field;var T;let ne=(T=class extends B{static schema(...e){return B.schema({type:"CNRadioSwitch",label:"CN Radio Switch",key:"CNRadioSwitch",values:[{label:"",value:""}],input:!0},...e)}static get builderInfo(){return{title:"CN Radio Switch",group:"basic",icon:"fas fa-square",weight:0,schema:T.schema()}}constructor(e,l,a){super(e,l,a)}render(){return super.render(this.renderTemplate("CNRadioSwitch",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNRadioSwitch||[]).forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-value");this.setValue(a)})})}attach(e){return this.loadRefs(e,{CNRadioSwitch:"multiple"}),this.attachCardListeners(),this.dataValue&&this.updateCards(this.dataValue),super.attach(e)}updateCards(e){(this.refs.CNRadioSwitch||[]).forEach(a=>{const s=a.getAttribute("data-value");a.classList.toggle("cn-radio-switch--selected",s===e)})}get defaultSchema(){return T.schema()}setValue(e,l){const a=super.setValue(e,l);return this.updateCards(e),a}getValue(){return this.dataValue}get labelInfo(){return{hidden:this.component.hideLabel}}},I(T,"editForm",te),T);const ie=[{type:"textfield",key:"title",label:"Title",input:"true",tooltip:"The title of the docuemt",weight:1},{type:"textarea",key:"requirements",label:"Requirements",input:"true",tooltip:"The requirements of the document",weight:2},{type:"textfield",key:"imageUrl",label:"Image URL",input:"true",tooltip:"The URL for the document image",weight:3},{type:"checkbox",key:"displayHelperText",label:"Display Healper Text",input:"true",tooltip:"If checked, the helper text - Example, Document Type - will be displayed",weight:4},{type:"checkbox",key:"displayDivider",label:"Display Divider",input:"true",tooltip:"If checked, the bottom divider will be displayed",weight:4},{key:"hidden",ignore:!0},{key:"modalEdit",ignore:!0},{key:"tableView",ignore:!0},{key:"disabled",ignore:!0},{key:"hideLabel",ignore:!0},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"initialFocus",ignore:!0}],ae=Formio.Components.components.nested.editForm;function oe(...o){return ae([{key:"display",components:ie}],...o)}const M=Formio.Components.components.nested;var E;let le=(E=class extends M{static schema(...e){return M.schema({label:"CN Section File Info",type:"CNSectionFileInfo",key:"CNSectionFileInfo",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,hideLabel:!0,title:"Current College Class Schedule",requirements:`<ul>
<li>Please upload a .pdf, .docx or .doc file</li>
<li>The student's full name must be clearly stated</li>
</ul>`,imageUrl:"https://cataas.com/cat",displayHelperText:!0,displayDivider:!0},...e)}static get builderInfo(){return{title:"CN Section File Info",icon:"fas fa-square",group:"layout",schema:E.schema()}}get labelInfo(){return{hidden:!0}}get defaultSchema(){return E.schema()}get templateName(){return"CNSectionFileInfo"}static get isContainer(){return!0}},I(E,"editForm",oe),E);const ce=[{type:"textfield",key:"header",label:"Page Header",input:"true",tooltip:"Header for form page",weight:1},{type:"textfield",key:"subheader",label:"Page Subheader",input:"true",tooltip:"Subheader for form page",weight:2},{type:"select",key:"inputType",label:"Input Type",input:"true",tooltip:"Radio or Checkbox",weight:3,required:!0,data:{values:[{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}]},validate:{required:!0}},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],re=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"datagrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}}]}],se=Formio.Components.baseEditForm;function de(...o){return se([{key:"display",components:ce},{key:"data",components:re}],...o)}const O=Formio.Components.components.field;var q;let ue=(q=class extends O{static schema(...e){return O.schema({type:"CNSelectBlock",label:"CN Select Block",key:"CNSelectBlock",values:[{label:"",value:""}],input:!0,header:"",subheader:"",inputType:"radio"},...e)}static get builderInfo(){return{title:"CN Select Block",group:"basic",icon:"fas fa-square",weight:0,schema:q.schema()}}constructor(e,l,a){super(e,l,a)}render(){return super.render(this.renderTemplate("CNSelectBlock",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}get labelInfo(){return{hidden:this.component.hideLabel}}attachCardListeners(){(this.refs.CNSelectBlock||[]).forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-value"),s=l.querySelector("input");s&&(s.checked=!s.checked),this.setValue(a)})})}attach(e){return this.loadRefs(e,{CNSelectBlock:"multiple"}),this.attachCardListeners(),super.attach(e)}updateCards(e){(this.refs.CNSelectBlock||[]).forEach(a=>{const s=a.getAttribute("data-value");a.classList.toggle("cn-select-block--selected",this.updateCardsBasedOnInputType(s,e))})}updateCardsBasedOnInputType(e,l){return this.isCheckbox()?l.includes(e):l===e}get defaultSchema(){return q.schema()}setValue(e,l){let a=e;this.isCheckbox()&&(a=this.setValueForCheckbox(e));const s=super.setValue(a,l);return this.updateCards(a),s}setValueForCheckbox(e){return(typeof this.dataValue=="string"||!this.dataValue)&&(this.dataValue=[]),this.dataValue.indexOf(e)<0?[...this.dataValue,e]:this.dataValue.filter(a=>a!==e)}getValue(){return this.dataValue}isCheckbox(){return this.component.inputType==="checkbox"}},I(q,"editForm",de),q);const pe=[{type:"textfield",key:"header",label:"Section Header",input:"true",tooltip:"Header for form section",weight:1},{type:"textfield",key:"subheader",label:"Section Subheader",input:"true",tooltip:"Subheader for form section",weight:2},{type:"textfield",key:"instructionalText",label:"Instructional Text",input:"true",tooltip:"Instructions for form section",weight:3},{type:"select",key:"inputType",label:"Input Type",input:"true",tooltip:"Radio or Checkbox",weight:4,required:!0,data:{values:[{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"}]},validate:{required:!0}},{type:"textfield",key:"documentIcon",label:"Document Icon",input:"true",tooltip:"Icon class for document",weight:5},{type:"textfield",key:"infoIcon",label:"Info Icon",input:"true",tooltip:"Icon class for info circle",weight:6},{type:"textfield",key:"accordionIconDown",label:"Accordion Icon Down",input:"true",tooltip:"Icon class for accordion down",weight:7},{type:"textfield",key:"accordionIconUp",label:"Accordion Icon Up",input:"true",tooltip:"Icon class for accordion up",weight:8},{key:"labelPosition",ignore:!0},{key:"placeholder",ignore:!0},{key:"description",ignore:!0},{key:"tooltip",ignore:!0},{key:"tabindex",ignore:!0},{key:"hidden",ignore:!0},{key:"autofocus",ignore:!0},{key:"disabled",ignore:!0},{key:"tableView",ignore:!0},{key:"modalEdit",ignore:!0}],me=[{key:"multiple",ignore:!0},{key:"dataSrc",ignore:!0},{key:"dataType",ignore:!0},{type:"editgrid",input:!0,label:"Values",key:"values",tooltip:"The values that can be picked for this field. Values are text submitted with the form data. Labels are the title of the card. Description is the body. Icons are bootstrap icons, e.g. bi bi-book",weight:10,reorder:!0,defaultValue:[{label:"",value:"",description:"",icon:""}],components:[{label:"Label",key:"label",input:!0,type:"textfield"},{label:"Value",key:"value",input:!0,type:"textfield",allowCalculateOverride:!0,calculateValue:"value = _.camelCase(row.label);",validate:{required:!0}},{label:"Description",key:"description",input:!0,type:"textfield"},{label:"Tags",key:"tags",input:!0,type:"datagrid",reorder:!0,defaultValue:[{tag:"",theme:""}],components:[{label:"Tag",key:"tag",input:!0,type:"textfield"},{label:"Theme",key:"theme",input:!0,type:"select",data:{values:[{label:"Primary",value:"primary"},{label:"Secondar",value:"secondary"}]}}]},{label:"Requirements",key:"requirements",input:!0,type:"textarea"},{label:"Required Documents",key:"requiredDocuments",tooltip:"Comma separated list of required documents",input:!0,type:"textfield"}]}],he=Formio.Components.baseEditForm;function fe(...o){return he([{key:"display",components:pe},{key:"data",components:me}],...o)}const P=Formio.Components.components.field;var D;let ve=(D=class extends P{static schema(...e){return P.schema({type:"CNSelectBlockDetailed",label:"CN Select Block Detailed",key:"CNSelectBlockDetailed",values:[{label:"",value:"",description:"",tags:"",requirements:"",requiredDocuments:""}],input:!0,header:"",subheader:"",instructionalText:"",inputType:"radio",documentIcon:"fas fa-file",infoIcon:"fas fa-circle-info",accordionIconDown:"fas fa-chevron-down",accordionIconUp:"fas fa-chevron-up"},...e)}static get builderInfo(){return{title:"CN Select Block Detailed",group:"basic",icon:"fas fa-file",weight:0,schema:D.schema()}}constructor(e,l,a){super(e,l,a)}get labelInfo(){return{hidden:this.component.hideLabel}}render(){return super.render(this.renderTemplate("CNSelectBlockDetailed",{component:this.component,value:this.dataValue,data:this.data,instance:this}))}attachCardListeners(){(this.refs.CNSelectBlockDetailed||[]).forEach(l=>{l.addEventListener("click",a=>{const s=l.getAttribute("data-value"),d=l.querySelector("input");d&&(d.checked=!d.checked),this.setValue(s)})})}attach(e){return this.loadRefs(e,{CNSelectBlockDetailed:"multiple"}),this.attachCardListeners(),this.attachAccordionListeners(e),super.attach(e)}attachAccordionListeners(e){e.querySelectorAll(".cn-select-block-detailed--accordion-btn").forEach(a=>{const s=a.getAttribute("href"),d=e.querySelector(s);d&&($(d).on("show.bs.collapse",()=>{a.querySelector(".collapse-icon-down").style.display="none",a.querySelector(".collapse-icon-up").style.display="inline"}),$(d).on("hide.bs.collapse",()=>{a.querySelector(".collapse-icon-down").style.display="inline",a.querySelector(".collapse-icon-up").style.display="none"}))})}updateCards(e){(this.refs.CNSelectBlockDetailed||[]).forEach(a=>{const s=a.getAttribute("data-value");a.classList.toggle("cn-select-block-detailed--selected",this.updateCardsBasedOnInputType(s,e))})}updateCardsBasedOnInputType(e,l){return this.isCheckbox()?l.includes(e):l===e}get defaultSchema(){return D.schema()}setValue(e,l){let a=e;this.isCheckbox()&&(a=this.setValueForCheckbox(e));const s=super.setValue(a,l);return this.updateCards(a),s}setValueForCheckbox(e){return(typeof this.dataValue=="string"||!this.dataValue)&&(this.dataValue=[]),this.dataValue.indexOf(e)<0?[...this.dataValue,e]:this.dataValue.filter(a=>a!==e)}getValue(){return this.dataValue}isCheckbox(){return this.component.inputType==="checkbox"}},I(D,"editForm",fe),D);const be={CNPageHeader:G,CNRadioCard:X,CNRadioSwitch:ne,CNSectionFileInfo:le,CNSelectBlock:ue,CNSelectBlockDetailed:ve};function ge(o,e,l,a){a=a||function(t,r,v,c,b){var m=r.split(`
`),p=Math.max(c-3,0),g=Math.min(m.length,c+3),h=b(v),y=m.slice(p,g).map(function(w,S){var f=S+p+1;return(f==c?" >> ":"    ")+f+"| "+w}).join(`
`);throw t.path=h,t.message=(h||"ejs")+":"+c+`
`+y+`

`+t.message,t},e=e||function(n){return n==null?"":String(n).replace(d,k)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function k(n){return s[n]||n}var i=1,C=`<div class="cn-page-header">
    <% if (ctx.component.pageHeader) { %>
     <h1 class="cn-page-header--header"><%- ctx.component.pageHeader %></h1>
    <% } %>
    <% if (ctx.component.pageSubheader) { %>
     <p class="cn-page-header--subheader"><%- ctx.component.pageSubheader %></p>
    <% } %>
</div>`,x=void 0;try{let n=function(t){t!=null&&(u+=t)};var R=n,u="";return n(`<div class="cn-page-header">
    `),i=2,o.component.pageHeader&&(n(`
     <h1 class="cn-page-header--header">`),i=3,n(o.component.pageHeader),n(`</h1>
    `),i=4),n(`
    `),i=5,o.component.pageSubheader&&(n(`
     <p class="cn-page-header--subheader">`),i=6,n(o.component.pageSubheader),n(`</p>
    `),i=7),n(`
</div>`),i=8,u}catch(n){a(n,C,x,i,e)}}const ye={form:ge};function ke(o,e,l,a){a=a||function(t,r,v,c,b){var m=r.split(`
`),p=Math.max(c-3,0),g=Math.min(m.length,c+3),h=b(v),y=m.slice(p,g).map(function(w,S){var f=S+p+1;return(f==c?" >> ":"    ")+f+"| "+w}).join(`
`);throw t.path=h,t.message=(h||"ejs")+":"+c+`
`+y+`

`+t.message,t},e=e||function(n){return n==null?"":String(n).replace(d,k)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function k(n){return s[n]||n}var i=1,C=`<div class="cn-radio-card--group row g-0">
  <% ctx.component.values.forEach(function(item) { %>
    <div class="col-md-<%= (12 / ctx.component.numberOfColumns) %>">
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
`,x=void 0;try{let n=function(t){t!=null&&(u+=t)};var R=n,u="";return n(`<div class="cn-radio-card--group row g-0">
  `),i=2,o.component.values.forEach(function(t){n(`
    <div class="col-md-`),i=3,n(e(12/o.component.numberOfColumns)),n(`">
      <div ref="CNRadioCard" class="card cn-radio-card--option shadow-sm mr-2" data-value="`),i=4,n(e(t.value)),n(`"
        style="cursor: pointer;">
        <div class="row g-0">
          <div class="col-md-2">
            <div
              class="cn-radio-card--icon m-2 border rounded h-50 w-100 text-center d-flex justify-content-center align-items-center">
              <i class="`),i=10,n(e(t.icon||"fas fa-circle")),n(` w-100"></i>
            </div>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title mb-1">
                `),i=16,n(e(t.label)),n(`
              </h5>
              `),i=18,t.description?(n(`
                <p class="card-text text-muted small">`),i=19,n(t.description),n(`</p>
                `),i=20):(n(`
                  <p class="card-text text-muted small"></p>
                  `),i=22),n(`
            </div>
          </div>
        </div>
      </div>
    </div>
    `),i=28}),n(`
</div>
`),i=30,u}catch(n){a(n,C,x,i,e)}}const Ce={form:ke};function xe(o,e,l,a){a=a||function(t,r,v,c,b){var m=r.split(`
`),p=Math.max(c-3,0),g=Math.min(m.length,c+3),h=b(v),y=m.slice(p,g).map(function(w,S){var f=S+p+1;return(f==c?" >> ":"    ")+f+"| "+w}).join(`
`);throw t.path=h,t.message=(h||"ejs")+":"+c+`
`+y+`

`+t.message,t},e=e||function(n){return n==null?"":String(n).replace(d,k)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function k(n){return s[n]||n}var i=1,C=`<div class="cn-radio-switch--group d-flex">
  <% ctx.component.values.forEach(function(item) { %>
    <div ref="CNRadioSwitch" class="cn-radio-switch--option flex-fill shadow-sm text-center p-2"
      data-value="<%= item.value %>" style="cursor: pointer;">
      <span>
        <%= item.label %>
      </span>
    </div>
    <% }); %>
</div>`,x=void 0;try{let n=function(t){t!=null&&(u+=t)};var R=n,u="";return n(`<div class="cn-radio-switch--group d-flex">
  `),i=2,o.component.values.forEach(function(t){n(`
    <div ref="CNRadioSwitch" class="cn-radio-switch--option flex-fill shadow-sm text-center p-2"
      data-value="`),i=4,n(e(t.value)),n(`" style="cursor: pointer;">
      <span>
        `),i=6,n(e(t.label)),n(`
      </span>
    </div>
    `),i=9}),n(`
</div>`),i=10,u}catch(n){a(n,C,x,i,e)}}const we={form:xe};function Se(o,e,l,a){a=a||function(t,r,v,c,b){var m=r.split(`
`),p=Math.max(c-3,0),g=Math.min(m.length,c+3),h=b(v),y=m.slice(p,g).map(function(w,S){var f=S+p+1;return(f==c?" >> ":"    ")+f+"| "+w}).join(`
`);throw t.path=h,t.message=(h||"ejs")+":"+c+`
`+y+`

`+t.message,t},e=e||function(n){return n==null?"":String(n).replace(d,k)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function k(n){return s[n]||n}var i=1,C=`<div class="row g-0 p-2 cn-section-file-info">
  <div class="col-md-6">
    <div class="row g-0 cn-section-file-info--container">
        <div class="col-md-3 cn-section-file-info--img">
          <% if (ctx.component.displayHelperText) { %>
           <div class="cn-section-file-info--helper">
            Example
           </div>
          <% } %>
          <img src="<%= ctx.component.imageUrl %>" alt="Example document image" class="img-fluid img-thumbnail rounded">
        </div>
        <div class="col-md-9 cn-section-file-info--content">
          <% if (ctx.component.displayHelperText) { %>           
            <div class="cn-section-file-info--helper">
              Document Type
            </div>
          <% } %>
          <div class="cn-section-file-info--title"><%- ctx.component.title %></div>
          <div class="cn-section-file-into--requirements"><%- ctx.component.requirements %></div>
        </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="cn-section-file-info--btn" ref="nested-<%= ctx.component.key %>" id="<%= ctx.component.key %>-<%= ctx.component.key %>">
      <%- ctx.children %>
    </div>
  </div>
  <% if (ctx.component.displayDivider) { %>
    <div class="col-12">
      <hr>
    </div>
  <% } %>
</div>
`,x=void 0;try{let n=function(t){t!=null&&(u+=t)};var R=n,u="";return n(`<div class="row g-0 p-2 cn-section-file-info">
  <div class="col-md-6">
    <div class="row g-0 cn-section-file-info--container">
        <div class="col-md-3 cn-section-file-info--img">
          `),i=5,o.component.displayHelperText&&(n(`
           <div class="cn-section-file-info--helper">
            Example
           </div>
          `),i=9),n(`
          <img src="`),i=10,n(e(o.component.imageUrl)),n(`" alt="Example document image" class="img-fluid img-thumbnail rounded">
        </div>
        <div class="col-md-9 cn-section-file-info--content">
          `),i=13,o.component.displayHelperText&&(n(`           
            <div class="cn-section-file-info--helper">
              Document Type
            </div>
          `),i=17),n(`
          <div class="cn-section-file-info--title">`),i=18,n(o.component.title),n(`</div>
          <div class="cn-section-file-into--requirements">`),i=19,n(o.component.requirements),n(`</div>
        </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="cn-section-file-info--btn" ref="nested-`),i=24,n(e(o.component.key)),n('" id="'),n(e(o.component.key)),n("-"),n(e(o.component.key)),n(`">
      `),i=25,n(o.children),n(`
    </div>
  </div>
  `),i=28,o.component.displayDivider&&(n(`
    <div class="col-12">
      <hr>
    </div>
  `),i=32),n(`
</div>
`),i=34,u}catch(n){a(n,C,x,i,e)}}const Ne={form:Se};function Ve(o,e,l,a){a=a||function(t,r,v,c,b){var m=r.split(`
`),p=Math.max(c-3,0),g=Math.min(m.length,c+3),h=b(v),y=m.slice(p,g).map(function(w,S){var f=S+p+1;return(f==c?" >> ":"    ")+f+"| "+w}).join(`
`);throw t.path=h,t.message=(h||"ejs")+":"+c+`
`+y+`

`+t.message,t},e=e||function(n){return n==null?"":String(n).replace(d,k)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function k(n){return s[n]||n}var i=1,C=`<div class="cn-select-block row g-0">
  <% if (ctx.component.header) { %>
    <div class="col-12">
      <h2 class="cn-select-block--header">
        <%= ctx.component.header %>
      </h2>
      <p class="cn-select-block--subheader">
        <%= ctx.component.subheader %>
      </p>
    </div>
    <% } %>
      <% ctx.component.values.forEach(function(item, index) { %>
        <div class="col-12">
          <div ref="CNSelectBlock" data-value="<%= item.value %>"
            class="card cn-select-block--option shadow-sm p-3 mb-3 d-flex flex-row align-items-center">
            <div class="mr-2">
              <input type="<%= ctx.component.inputType %>" name="<%= ctx.component.id %>">
            </div>
            <div class="cn-select-block--label">
              <%= item.label %>
            </div>
          </div>
        </div>
        <% }); %>
</div>
</div>`,x=void 0;try{let n=function(t){t!=null&&(u+=t)};var R=n,u="";return n(`<div class="cn-select-block row g-0">
  `),i=2,o.component.header&&(n(`
    <div class="col-12">
      <h2 class="cn-select-block--header">
        `),i=5,n(e(o.component.header)),n(`
      </h2>
      <p class="cn-select-block--subheader">
        `),i=8,n(e(o.component.subheader)),n(`
      </p>
    </div>
    `),i=11),n(`
      `),i=12,o.component.values.forEach(function(t,r){n(`
        <div class="col-12">
          <div ref="CNSelectBlock" data-value="`),i=14,n(e(t.value)),n(`"
            class="card cn-select-block--option shadow-sm p-3 mb-3 d-flex flex-row align-items-center">
            <div class="mr-2">
              <input type="`),i=17,n(e(o.component.inputType)),n('" name="'),n(e(o.component.id)),n(`">
            </div>
            <div class="cn-select-block--label">
              `),i=20,n(e(t.label)),n(`
            </div>
          </div>
        </div>
        `),i=24}),n(`
</div>
</div>`),i=26,u}catch(n){a(n,C,x,i,e)}}const Te={form:Ve};function Ee(o,e,l,a){a=a||function(r,v,c,b,m){var p=v.split(`
`),g=Math.max(b-3,0),h=Math.min(p.length,b+3),y=m(c),w=p.slice(g,h).map(function(S,f){var L=f+g+1;return(L==b?" >> ":"    ")+L+"| "+S}).join(`
`);throw r.path=y,r.message=(y||"ejs")+":"+b+`
`+w+`

`+r.message,r},e=e||function(t){return t==null?"":String(t).replace(d,k)};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function k(t){return s[t]||t}var i=1,C=`<div class="cn-select-block-detailed row g-0">
  <% if (ctx.component.header) { %>
    <% var colClass=ctx.component.instructionalText ? "6" : "12" %>
      <div class="col-<%= colClass %>">
        <h2 class="cn-select-block-detailed--header">
          <%= ctx.component.header %>
        </h2>
        <p class="cn-select-block-detailed--subheader">
          <%= ctx.component.subheader %>
        </p>
      </div>
      <% if (ctx.component.instructionalText) { %>
        <div class="col-6 text-right">
          <p class="cn-select-block-detailed--instructional-text">
            <i class="<%= ctx.component.infoIcon %> info-icon"></i>
            <%= ctx.component.instructionalText %>
          </p>
        </div>
        <% } %>
          <% } %>
            <% ctx.component.values.forEach(function(item, index) { %>
              <div class="col-12" data-value="<%= item.value %>">
                <div ref="CNSelectBlockDetailed" data-value="<%= item.value %>"
                  class="card cn-select-block-detailed--option shadow-sm p-3 mb-3 d-flex flex-row">
                  <div class="mr-2">
                    <input type="<%= ctx.component.inputType %>" name="<%= ctx.component.id %>">
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
                          href="#collapse-<%= ctx.component.id %>-<%= index %>" role="button" aria-expanded="false"
                          aria-controls="collapse-<%= ctx.component.id %>-<%= index %>">
                          View requirements
                          <i class="<%= ctx.component.accordionIconDown %> collapse-icon-down"></i>
                          <i class="<%= ctx.component.accordionIconUp %> collapse-icon-up" style="display: none;"></i>
                        </a>
                        <div class="collapse" id="collapse-<%= ctx.component.id %>-<%= index %>">
                          <div class="card card-body mt-2 p-2">
                            <div><i class="<%= ctx.component.infoIcon %> info-icon"></i></div>
                            <div class="ml-2 cn-select-block-detailed--requirements">
                              <% if (item.requirements) { %>
                                <div class="cn-select-block-detailed--requirements-title">Requirements</div>
                                <div class="cn-select-block-detailed--requirements-content"><%- item.requirements %>
                                </div>
                                <% } %>
                                  <% if (item.requiredDocuments) { %>
                                    <div class="cn-select-block-detailed--requiredDocuments mt-2">
                                      <span class="cn-select-block-detailed--requirements-title"><i
                                          class="<%= ctx.component.documentIcon %>"></i> Required documents: </span>
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
</div>`,x=void 0;try{let t=function(r){r!=null&&(u+=r)};var n=t,u="";if(t(`<div class="cn-select-block-detailed row g-0">
  `),i=2,o.component.header){t(`
    `),i=3;var R=o.component.instructionalText?"6":"12";t(`
      <div class="col-`),i=4,t(e(R)),t(`">
        <h2 class="cn-select-block-detailed--header">
          `),i=6,t(e(o.component.header)),t(`
        </h2>
        <p class="cn-select-block-detailed--subheader">
          `),i=9,t(e(o.component.subheader)),t(`
        </p>
      </div>
      `),i=12,o.component.instructionalText&&(t(`
        <div class="col-6 text-right">
          <p class="cn-select-block-detailed--instructional-text">
            <i class="`),i=15,t(e(o.component.infoIcon)),t(` info-icon"></i>
            `),i=16,t(e(o.component.instructionalText)),t(`
          </p>
        </div>
        `),i=19),t(`
          `),i=20}return t(`
            `),i=21,o.component.values.forEach(function(r,v){t(`
              <div class="col-12" data-value="`),i=22,t(e(r.value)),t(`">
                <div ref="CNSelectBlockDetailed" data-value="`),i=23,t(e(r.value)),t(`"
                  class="card cn-select-block-detailed--option shadow-sm p-3 mb-3 d-flex flex-row">
                  <div class="mr-2">
                    <input type="`),i=26,t(e(o.component.inputType)),t('" name="'),t(e(o.component.id)),t(`">
                  </div>
                  <div class="cn-select-block-detailed--content">
                    <div class="cn-select-block-detailed--label">
                      `),i=30,t(r.label),t(`
                    </div>
                    <div class="mt-1 mb-1 cn-select-block-detailed--tags">
                      `),i=33,r.tags&&(t(`
                        `),i=34,r.tags.forEach(function(c){t(`
                          `),i=35,c.tag.trim()&&(t(`
                            <span class="badge me-1 mb-1 cn-select-block-detailed--tag `),i=36,t(e(c.theme.trim())),t(`">
                              `),i=37,t(e(c.tag.trim())),t(`
                            </span>
                            `),i=39),t(`
                              `),i=40}),t(`
                                `),i=41),t(`
                    </div>
                    <div class="cn-select-block-detailed--description">
                      `),i=44,t(r.description),t(`
                    </div>
                    `),i=46,(r.requirements||r.requiredDocuments)&&(t(`
                      <div class="mt-2 cn-select-block-detailed--accordion">
                        <a class="btn btn-link p-0 cn-select-block-detailed--accordion-btn" data-toggle="collapse"
                          href="#collapse-`),i=49,t(e(o.component.id)),t("-"),t(e(v)),t(`" role="button" aria-expanded="false"
                          aria-controls="collapse-`),i=50,t(e(o.component.id)),t("-"),t(e(v)),t(`">
                          View requirements
                          <i class="`),i=52,t(e(o.component.accordionIconDown)),t(` collapse-icon-down"></i>
                          <i class="`),i=53,t(e(o.component.accordionIconUp)),t(` collapse-icon-up" style="display: none;"></i>
                        </a>
                        <div class="collapse" id="collapse-`),i=55,t(e(o.component.id)),t("-"),t(e(v)),t(`">
                          <div class="card card-body mt-2 p-2">
                            <div><i class="`),i=57,t(e(o.component.infoIcon)),t(` info-icon"></i></div>
                            <div class="ml-2 cn-select-block-detailed--requirements">
                              `),i=59,r.requirements&&(t(`
                                <div class="cn-select-block-detailed--requirements-title">Requirements</div>
                                <div class="cn-select-block-detailed--requirements-content">`),i=61,t(r.requirements),t(`
                                </div>
                                `),i=63),t(`
                                  `),i=64,r.requiredDocuments&&(t(`
                                    <div class="cn-select-block-detailed--requiredDocuments mt-2">
                                      <span class="cn-select-block-detailed--requirements-title"><i
                                          class="`),i=67,t(e(o.component.documentIcon)),t(`"></i> Required documents: </span>
                                      `),i=68,r.requiredDocuments.split(",").forEach(function(c){t(`
                                        `),i=69,c.trim()&&(t(`
                                          <span class="badge me-1 mb-1 cn-select-block-detailed--tag primary">
                                            `),i=71,t(e(c.trim())),t(`
                                          </span>
                                          `),i=73),t(`
                                            `),i=74}),t(`
                                    </div>
                                    `),i=76),t(`
                            </div>
                          </div>
                        </div>
                      </div>
                      `),i=81),t(`
                  </div>
                </div>
              </div>
              `),i=85}),t(`
</div>`),i=86,u}catch(t){a(t,C,x,i,e)}}const qe={form:Ee},De={CNPageHeader:ye,CNRadioCard:Ce,CNRadioSwitch:we,CNSectionFileInfo:Ne,CNSelectBlock:Te,CNSelectBlockDetailed:qe},Ie={bootstrap:De};Formio.use({components:be,templates:Ie});
