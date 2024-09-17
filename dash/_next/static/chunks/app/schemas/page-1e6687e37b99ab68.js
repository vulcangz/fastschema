(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{83877:function(e,t,n){Promise.resolve().then(n.bind(n,68898))},2252:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n(70843).Z)("OctagonAlert",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},95601:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(57437),r=n(8792),l=n(70769),s=n(70843);/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s.Z)("CloudDownload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]),o=(0,s.Z)("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);var d=n(60834),c=n(27453),u=n(39997),m=n(99773),f=n(30142),p=n(33277),h=n(96304),x=n(2265),g=n(79984),y=n(95453);let v=()=>{let{reloadAppConfig:e}=(0,x.useContext)(g.Il);return[{accessorKey:"name",enableSorting:!0,enableHiding:!0,filterFn:f.i,header:e=>{let{column:t}=e;return(0,a.jsx)(u.Q,{column:t,title:"Name"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex space-x-2",children:(0,a.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:t.getValue("name")})})}},{accessorKey:"namespace",enableSorting:!0,enableHiding:!0,filterFn:f.i,header:e=>{let{column:t}=e;return(0,a.jsx)(u.Q,{column:t,title:"Namespace"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex space-x-2",children:(0,a.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:t.getValue("namespace")})})}},{accessorKey:"is_system_schema",header:e=>{let{column:t}=e;return(0,a.jsx)(u.Q,{column:t,title:"System"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"w-[80px]",children:t.getValue("is_system_schema")?(0,a.jsx)(p.C,{children:"System"}):null})},filterFn:(e,t,n)=>n===e.getValue(t),enableSorting:!0,enableHiding:!0},{accessorKey:"label_field",filterFn:f.i,header:e=>{let{column:t}=e;return(0,a.jsx)(u.Q,{column:t,title:"Label field"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"w-[80px]",children:t.getValue("label_field")})},enableSorting:!0,enableHiding:!0},{accessorKey:"disable_timestamp",filterFn:f.i,filterOptions:[{label:"True",value:!0},{label:"False",value:!1}],header:e=>{let{column:t}=e;return(0,a.jsx)(u.Q,{column:t,title:"Timestamp"})},cell:e=>{let{row:t}=e,n=t.getValue("disable_timestamp");return(0,a.jsx)("div",{className:"w-[80px]",children:(0,a.jsx)(p.C,{variant:n?"default":"secondary",children:String(n)})})},enableSorting:!1,enableHiding:!1},{accessorKey:"fields",header:e=>{let{column:t}=e;return(0,a.jsx)(u.Q,{column:t,title:"Fields"})},cell:e=>{var t;let{row:n}=e;return(0,a.jsx)("div",{className:"w-[80px]",children:null===(t=n.getValue("fields"))||void 0===t?void 0:t.length})},enableSorting:!1,enableHiding:!0},{id:"actions",cell:t=>{let{row:n}=t,l=m.Pl.parse(n.original);return(0,a.jsxs)("div",{className:"flex h-5 items-center space-x-4 text-sm min-w-[80px]",children:[(0,a.jsx)(r.default,{className:"cursor-pointer hover:underline",href:"/schemas/edit?schema=".concat(l.name),children:"Edit"}),!l.is_system_schema&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.Z,{orientation:"vertical"}),(0,a.jsx)("button",{className:"cursor-pointer hover:underline text-red-800",onClick:async()=>{if(confirm("Are you sure you want to delete this schema: ".concat(l.name,"?")))try{await (0,h.uV)(l.name),c.Vp("Schema ".concat(l.name," deleted")),e()}catch(e){c.vU(e.message)}},children:"Delete"})]})]})}}]};var b=n(57654),j=n(34560);function N(){let{appConfig:e}=(0,x.useContext)(g.Il),t=v(),[n,s]=(0,x.useState)([]),u=["permission"];return(0,x.useEffect)(()=>((0,j.D8)({title:"Schemas list",description:"List of all schemas.",breadcrumbs:[{name:"Schema",path:"/schemas"}],actions:[(0,a.jsx)(r.default,{href:"/schemas/edit",children:(0,a.jsx)(b.z,{size:"sm",icon:(0,a.jsx)(l.Z,{className:"mr-2 h-4 w-4"}),children:"New Schema"})},"create"),(0,a.jsx)(b.z,{size:"sm",icon:(0,a.jsx)(i,{className:"mr-2 h-4 w-4"}),disabled:0===n.length,onClick:async()=>{try{(await (0,h.J2)({schemas:n.filter(e=>!u.includes(e))})).blob().then(e=>{let t=URL.createObjectURL(e),n=document.createElement("a");n.href=t;let a=Date.now();n.download="schemas-".concat(a,".zip"),n.click(),URL.revokeObjectURL(t)})}catch(e){c.h4.error(e.message)}},children:"Export"},"export"),(0,a.jsx)(r.default,{href:"/schemas/import",children:(0,a.jsx)(b.z,{size:"sm",icon:(0,a.jsx)(o,{className:"mr-2 h-4 w-4"}),children:"Import"},"import")},"import")]}),j.D8),[n]),(0,a.jsx)(d.i,{data:e.schemas,columns:t,getRowId:e=>e.name,filterTitle:"Filter schemas",enableRowSelection:!0,onRowSelectionChange:e=>{s(e)}})}},30142:function(e,t,n){"use strict";n.d(t,{i:function(){return a}});let a=(e,t,n)=>String(e.getValue(t)).toLocaleLowerCase().includes(String(n).toLocaleLowerCase())},39997:function(e,t,n){"use strict";n.d(t,{Q:function(){return o}});var a=n(57437),r=n(62177),l=n(34645),s=n(22169),i=n(57654);function o(e){let{column:t,title:n,className:o}=e;if(!t.getCanSort())return(0,a.jsx)("div",{className:(0,s.cn)(o),children:n});let d=(0,a.jsx)(r.jnn,{className:"ml-2 h-4 w-4"});return"desc"===t.getIsSorted()&&(d=(0,a.jsx)(r.veu,{className:"ml-2 h-4 w-4"})),"asc"===t.getIsSorted()&&(d=(0,a.jsx)(r.Hf3,{className:"ml-2 h-4 w-4"})),(0,a.jsx)("div",{className:(0,s.cn)("flex items-center space-x-2",o),children:(0,a.jsxs)(l.h_,{children:[(0,a.jsx)(l.$F,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,a.jsx)("span",{children:n}),d]})}),(0,a.jsxs)(l.AW,{align:"start",children:[(0,a.jsxs)(l.Xi,{onClick:()=>t.toggleSorting(!1),children:[(0,a.jsx)(r.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,a.jsxs)(l.Xi,{onClick:()=>t.toggleSorting(!0),children:[(0,a.jsx)(r.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,a.jsx)(l.VD,{}),(0,a.jsxs)(l.Xi,{onClick:()=>t.toggleVisibility(!1),children:[(0,a.jsx)(r.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})})}},34560:function(e,t,n){"use strict";n.d(t,{Sc:function(){return b},D8:function(){return v}});var a=n(57437),r=n(8792),l=n(13571),s=n.n(l),i=n(51919),o=n(2265),d=n(62177),c=n(59143),u=n(22169);let m=o.forwardRef((e,t)=>{let{...n}=e;return(0,a.jsx)("nav",{ref:t,"aria-label":"breadcrumb",...n})});m.displayName="Breadcrumb";let f=o.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("ol",{ref:t,className:(0,u.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",n),...r})});f.displayName="BreadcrumbList";let p=o.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("li",{ref:t,className:(0,u.cn)("inline-flex items-center gap-1.5",n),...r})});p.displayName="BreadcrumbItem";let h=o.forwardRef((e,t)=>{let{asChild:n,className:r,...l}=e,s=n?c.g7:"a";return(0,a.jsx)(s,{ref:t,className:(0,u.cn)("transition-colors hover:text-foreground",r),...l})});h.displayName="BreadcrumbLink";let x=o.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,u.cn)("font-normal text-foreground",n),...r})});x.displayName="BreadcrumbPage";let g=e=>{let{children:t,className:n,...r}=e;return(0,a.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,u.cn)("[&>svg]:size-3.5",n),...r,children:null!=t?t:(0,a.jsx)(d.XCv,{})})};g.displayName="BreadcrumbSeparator";let y={title:"",description:"",breadcrumbs:[],actions:[]},v=e=>{i.ZP.dispatch("pageInfo",null!=e?e:[])},b=()=>{var e,t;let[n,l]=(0,o.useState)(y);(0,o.useEffect)(()=>{i.ZP.on("pageInfo",e=>{l(null!=e?e:y)})},[]);let d=(null==n?void 0:null===(e=n.breadcrumbs)||void 0===e?void 0:e.length)?[{name:"Dash",path:"/"},...null!==(t=n.breadcrumbs)&&void 0!==t?t:[]]:[],c=d.length;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:n.title}),(0,a.jsx)(m,{children:(0,a.jsx)(f,{children:s()(d,e=>e.path).map((e,t)=>{let n=t===c-1;return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)(p,{children:n?(0,a.jsx)(x,{children:e.name}):(0,a.jsx)(h,{asChild:!0,children:(0,a.jsx)(r.default,{href:e.path,children:e.name})})}),!n&&(0,a.jsx)(g,{})]},e.path)})})}),(n.title||n.description)&&(0,a.jsxs)("div",{className:"flex items-center justify-between space-y-2 w-full",children:[(0,a.jsxs)("div",{children:[n.title&&(0,a.jsx)("h1",{className:"text-lg font-semibold md:text-2xl",children:n.title}),n.description&&(0,a.jsx)("p",{className:"text-muted-foreground",children:n.description})]}),(0,a.jsx)("div",{className:"ml-auto mr-4 flex gap-2",children:n.actions})]})]})}},99773:function(e,t,n){"use strict";n.d(t,{IG:function(){return i},Pl:function(){return l},bO:function(){return s},gU:function(){return r}});var a=n(30248);let r=a.Ry({name:a.Z_().trim().min(1,{message:"Field name is required"}),server_name:a.Z_().optional(),label:a.Z_().min(1,{message:"Field label is required"}),type:a.Km(["bool","time","json","uuid","bytes","enum","string","text","int","int8","int16","int32","int64","uint","uint8","uint16","uint32","uint64","float32","float64","relation","file"]),multiple:a.O7().optional(),size:a.oQ.number().optional(),unique:a.O7().optional(),optional:a.O7().optional(),default:a.Yj().nullable(),sortable:a.O7().optional(),filterable:a.O7().optional(),renderer:a.Ry({class:a.Z_().optional(),settings:a.IM(a.Z_(),a.Yj()).optional()}).optional(),enums:a.IX(a.Ry({value:a.Z_().min(1,{message:"Enum value is required"}),label:a.Z_().min(1,{message:"Enum label is required"})})).optional(),relation:a.Ry({schema:a.Z_(),field:a.Z_(),type:a.Km(["o2o","o2m","m2m"]),owner:a.O7().optional(),fk_columns:a.IM(a.Z_(),a.Z_()).optional().nullable(),junction_table:a.Z_().optional(),optional:a.O7().optional()}).optional(),db:a.Ry({attr:a.Z_().optional(),collation:a.Z_().optional(),increment:a.O7().optional(),key:a.Z_().optional()}).nullable().optional(),is_system_field:a.O7().optional()}).superRefine((e,t)=>{var n;return"enum"!==e.type||null!=e&&null!==(n=e.enums)&&void 0!==n&&!!n.length||t.addIssue({code:a.NL.custom,message:"Enums are required for enum type",path:["type"]})}).superRefine((e,t)=>{if("relation"===e.type){var n,r,l,s,i,o;(null==e?void 0:null===(n=e.relation)||void 0===n?void 0:n.type)&&(null==e?void 0:null===(r=e.relation)||void 0===r?void 0:r.schema)&&(null==e?void 0:null===(l=e.relation)||void 0===l?void 0:l.field)||t.addIssue({code:a.NL.custom,message:"Relation type, schema, field is required for relation type",path:["type"]}),(null==e?void 0:null===(s=e.relation)||void 0===s?void 0:s.type)||t.addIssue({code:a.NL.custom,message:"Relation type, schema, field is required for relation type",path:["relation.type"]}),(null==e?void 0:null===(i=e.relation)||void 0===i?void 0:i.schema)||t.addIssue({code:a.NL.custom,message:"Relation schema is required for relation type",path:["relation.schema"]}),(null==e?void 0:null===(o=e.relation)||void 0===o?void 0:o.field)||t.addIssue({code:a.NL.custom,message:"Relation field is required for relation type",path:["relation.field"]})}return!0}),l=a.Ry({name:a.Z_().trim().min(1,{message:"Schema name is required"}).regex(/^[a-zA-Z]\w*$/,{message:"Schema name should start with an alphabet and contain only alphabets, numbers, or underscores"}),namespace:a.Z_().trim().min(1,{message:"Schema namespace is required"}),label_field:a.Z_().trim().min(1,{message:"Schema label field is required"}),disable_timestamp:a.O7(),is_system_schema:a.O7().optional(),fields:a.IX(r).min(1,{message:"At least one field is required"})}).refine(e=>{var t;let n=null==e?void 0:null===(t=e.fields)||void 0===t?void 0:t.map(e=>e.name),a=[...new Set(n)];return n.length===a.length},{message:"Field names must be unique"}),s={name:"",server_name:"",label:"",type:"string",enums:[],default:"",size:0,multiple:!1,db:{attr:"",collation:"",increment:!1,key:""},renderer:{class:"",settings:{}},relation:{schema:"",field:"",type:"o2o",owner:!1,fk_columns:{},junction_table:"",optional:!1},unique:!1,optional:!0,sortable:!0,filterable:!1,is_system_field:!1},i={name:"",namespace:"",label_field:"",disable_timestamp:!1,fields:[]}},33277:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var a=n(57437);n(2265);var r=n(57742),l=n(22169);let s=(0,r.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:n,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)(s({variant:n}),t),...r})}},26739:function(e,t,n){"use strict";n.d(t,{di:function(){return p},e8:function(){return c},fu:function(){return m},mY:function(){return o},rb:function(){return u},sZ:function(){return d},zz:function(){return f}});var a=n(57437),r=n(2265),l=n(62177),s=n(9160),i=n(22169);n(9208);let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.mY,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",n),...r})});o.displayName=s.mY.displayName;let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,a.jsx)(l._Ve,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,a.jsx)(s.mY.Input,{ref:t,className:(0,i.cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",n),...r})]})});d.displayName=s.mY.Input.displayName;let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.mY.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",n),...r})});c.displayName=s.mY.List.displayName;let u=r.forwardRef((e,t)=>(0,a.jsx)(s.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=s.mY.Empty.displayName;let m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.mY.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",n),...r})});m.displayName=s.mY.Group.displayName;let f=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.mY.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border",n),...r})});f.displayName=s.mY.Separator.displayName;let p=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.mY.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50",n),...r})});p.displayName=s.mY.Item.displayName},96304:function(e,t,n){"use strict";n.d(t,{J1:function(){return s},J2:function(){return i},cQ:function(){return r},uV:function(){return d},uX:function(){return l},yR:function(){return o}});var a=n(84971);let r=async()=>(await (0,a.dX)("/schema")).filter(e=>!e.is_junction_schema),l=async(e,t,n)=>{var r,l;let s=null;return(null==(s=t?await (0,a.qb)("/schema/".concat(t),{schema:e,rename_fields:null!=n?n:[]}):await (0,a.SO)("/schema",e))?void 0:null===(r=s.fields)||void 0===r?void 0:r.length)&&(s.fields=(null!==(l=null==s?void 0:s.fields)&&void 0!==l?l:[]).map(e=>(e.server_name=e.name,e))),s},s=async e=>{var t,n;if(!e)return null;let r=await (0,a.dX)("/schema/".concat(e));return(null==r?void 0:null===(t=r.fields)||void 0===t?void 0:t.length)&&(r.fields=(null!==(n=null==r?void 0:r.fields)&&void 0!==n?n:[]).map(e=>(e.server_name=e.name,e))),r},i=async e=>await (0,a.SO)("/schema/export",e),o=async e=>{let t=new FormData;return e.forEach(e=>t.append("file",e)),await (0,a.SO)("/schema/import",t,{headers:{"Content-Type":"multipart/form-data"}})},d=e=>(0,a.HG)("/schema/".concat(e))}},function(e){e.O(0,[310,637,792,872,571,732,998,160,156,564,408,834,971,69,744],function(){return e(e.s=83877)}),_N_E=e.O()}]);