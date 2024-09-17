"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{15e3:function(e,s,t){t.d(s,{T:function(){return d}});var r=t(57437),a=t(29069),l=t(62985),i=t(95601),n=t.n(i);let d=e=>{var s;let{title:t,description:i,error:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n(),{children:(0,r.jsx)("title",{children:null!=t?t:"Error"})}),(0,r.jsxs)(a.bZ,{variant:"destructive",children:[(0,r.jsx)(l.Z,{size:16,className:"mr-2"}),(0,r.jsx)(a.Cd,{children:null!=t?t:"Error"}),(null==d?void 0:d.message)||i&&(0,r.jsx)(a.X,{children:null!==(s=null==d?void 0:d.message)&&void 0!==s?s:i})]})]})}},65547:function(e,s,t){t.d(s,{L:function(){return y},Z:function(){return N}});var r=t(57437),a=t(2265),l=t(22169),i=t(3428),n=t(50489),d=t(49108),c=t(37805),o=t(52235),x=t(57654),m=t(76540),u=t(31548),h=t(75006),f=t(15e3),p=t(93412),g=t(27453),v=t(15370);let j=(0,r.jsx)(i.Z,{className:"w-[50%] text-slate-300",width:"50%",height:"50%"}),y=e=>{var s;let{showUploader:t,onInsert:l,multiple:i}=e,[o,j]=(0,a.useState)(1),[y,b]=(0,a.useState)([]),[w,k]=(0,a.useState)([]),{data:z,isLoading:C,error:S,refetch:Z}=(0,m.a)({queryKey:["file",o],queryFn:()=>(0,u.Q7)("file",{limit:20,page:null!=o?o:void 0}),retry:0}),_=e=>{if(i)return b(s=>s.includes(e)?s.filter(s=>s!==e):[...s,e]);b(y.includes(e)?[]:[e])};return S?(0,r.jsx)(f.T,{error:S}):(0,r.jsxs)("div",{className:"space-y-5 relative h-full",children:[(0,r.jsxs)("div",{className:"flex items-center p-1 bg-muted flex-1 rounded-lg sticky top-0 justify-between z-10",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[t&&(0,r.jsx)(v.Q,{minimal:!0,onMediaUploaded:e=>k(s=>[e,...s]),onUploadComplete:()=>{k([]),Z()}}),l&&(0,r.jsx)(x.z,{size:"sm",onClick:()=>l(y),disabled:!y.length,children:"Insert"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 pr-2",children:[(0,r.jsxs)(x.z,{size:"sm",variant:"link",disabled:!y.length,onClick:()=>{y.length&&(async()=>{if(confirm("Are you sure to delete selected medias?"))try{await (0,p.c1)(y.map(e=>e.id)),await Z(),b([]),g.h4.success("Files deleted successfully")}catch(e){}})()},className:"text-red-500 hover:text-red-600",children:[(0,r.jsx)(n.Z,{className:"mr-2 h-4 w-4"}),y.length?"Delete selected (".concat(y.length,")"):"Delete selected"]}),(0,r.jsxs)(x.z,{variant:"outline",size:"sm",disabled:1===o,onClick:()=>{o>1&&j(o-1)},children:[(0,r.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),"Previous"]}),(0,r.jsxs)(x.z,{variant:"outline",size:"sm",disabled:o===(null==z?void 0:z.last_page),onClick:()=>{var e;o<(null!==(e=null==z?void 0:z.last_page)&&void 0!==e?e:1)&&j(o+1)},children:["Next",(0,r.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("span",{className:"text-sm text-muted-foreground",children:[o," of ",null==z?void 0:z.last_page]})})]})]}),C?(0,r.jsx)(h.g,{}):(0,r.jsxs)("div",{className:"flex flex-wrap gap-5",children:[w.map(e=>(0,r.jsx)(N,{media:e,selectedMedias:y,onClick:_},e.id)),(null!==(s=null==z?void 0:z.items)&&void 0!==s?s:[]).map(e=>(0,r.jsx)(N,{media:e,selectedMedias:y,onClick:_},e.id))]})]})},N=e=>{let{media:s,onClick:t,selectedMedias:a,wrapperClassName:i,hideInfo:n,onUnAttach:d}=e,c=!!(null!=a?a:[]).filter(e=>e.id===s.id).length,x=(0,l.cn)("cursor-pointer rounded-md overflow-hidden bg-slate-100 border hover:shadow-lg",c&&"border-2 border-amber-300 shadow-sm hover:shadow-amber-100");return(0,r.jsxs)("div",{className:(0,l.cn)("flex flex-wrap w-full sm:w-full md:w-[200px] xl:w-[230px] relative",i),role:"none",onClick:()=>null==t?void 0:t(s),children:[d&&(0,r.jsx)("div",{className:"absolute top-1 right-1 z-10",children:(0,r.jsx)("button",{type:"button",onClick:()=>d(s),className:"p-1 rounded-full bg-slate-200 hover:bg-slate-300",children:(0,r.jsx)(o.Z,{className:"h-3 w-3"})})}),(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)("div",{className:"flex w-full aspect-square items-center justify-center p-1 bg-slate-50",children:s.type.startsWith("image/")?(0,r.jsx)("img",{className:"max-h-full object-contain object-center rounded-sm",alt:s.name,src:s.url}):j}),!n&&(0,r.jsx)("div",{className:"flex-1 p-3 border-t",children:(0,r.jsxs)("div",{className:"space-y-1 text-sm break-words",children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:s.type.split(";")[0]}),(0,r.jsx)("h3",{className:"font-medium leading line-clamp-1",children:s.name})]})})]})]})}},15370:function(e,s,t){t.d(s,{Q:function(){return p}});var r=t(57437),a=t(2265),l=t(94509),i=t(62985),n=t(54739),d=t(3428);let c=e=>{let{file:s}=e,[t,l]=(0,a.useState)(),i=(0,r.jsx)(d.Z,{className:"w-[40px] text-slate-500",width:40,height:40});return((0,a.useEffect)(()=>{if(!s||!s.type.startsWith("image/"))return;let e=new FileReader;e.onload=()=>{l(e.result)},e.readAsDataURL(s)},[s]),s&&s.type.startsWith("image/")&&t)?(0,r.jsx)("img",{className:"h-auto rounded-lg",src:t,alt:""}):i};var o=t(5887),x=t(93412),m=t(22169),u=t(57654),h=t(62677),f=t(97081);let p=e=>{let{uploadContainerClass:s,minimal:t,onMediaUploaded:d,onUploadComplete:p}=e,[g,v]=(0,a.useState)({}),[j,y]=(0,a.useState)(""),[N,b]=(0,a.useState)([]),{getRootProps:w,getInputProps:k,isDragActive:z,acceptedFiles:C}=(0,n.uI)();return(0,a.useEffect)(()=>{C.length&&(async()=>{let e=0;for(let r=0;r<C.length;r++)try{var s,t;v(e=>({...e,[r]:"uploading"}));let a=await (0,x.cT)(C[r]);(null==a?void 0:null===(s=a.success)||void 0===s?void 0:s.length)?v(e=>({...e,[r]:"success"})):v(e=>({...e,[r]:"error"})),e++,y("".concat(e,"/").concat(C.length)),null==d||d(null==a?void 0:null===(t=a.success)||void 0===t?void 0:t[0])}catch(e){v(s=>{var t;return{...s,[r]:null!==(t=e.message)&&void 0!==t?t:"Unknown error"}}),b(s=>{var t;return[...s,"".concat(C[r].name,": ").concat(null!==(t=e.message)&&void 0!==t?t:"Unknown error")]})}await (0,f._v)(1e3),null==p||p()})()},[C]),(0,r.jsxs)("div",{className:"space-y-5",children:[t?(0,r.jsxs)("div",{className:"flex flex-row space-x-2 align-middle items-center",children:[(0,r.jsxs)("div",{...w(),children:[(0,r.jsx)("input",{...k(),type:"file",className:"hidden"}),(0,r.jsxs)(u.z,{size:"sm",variant:"outline",children:[(0,r.jsx)(l.Z,{className:"mr-2 h-4 w-4"}),(0,r.jsx)("span",{children:"Upload"})]})]}),j&&(0,r.jsxs)("div",{className:"flex flex-row align-middle items-center gap-1 text-sm",children:[(0,r.jsx)("span",{children:j}),!!N.length&&(0,r.jsx)(h.pn,{children:(0,r.jsxs)(h.u,{children:[(0,r.jsx)(h.aJ,{children:(0,r.jsx)(i.Z,{className:"w-4 h-4 text-red-600 dark:text-red-400"})}),(0,r.jsx)(h._v,{children:N.map(e=>(0,r.jsx)("p",{className:"text-red-600 dark:text-red-400",children:e},e))})]})})]})]}):(0,r.jsxs)("div",{...w(),className:(0,m.cn)("flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",s),children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,r.jsx)(l.Z,{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"}),(0,r.jsx)("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:z?"Drop the files here ...":"Drag and drop some files here, or click to select files"}),(0,r.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG, GIF, PDF, DOCX, XLSX..."})]}),(0,r.jsx)("input",{...k(),id:"dropzone-file",type:"file",className:"hidden"})]}),!t&&C.length?(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)(o.iA,{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-600",children:[(0,r.jsx)(o.xD,{className:"bg-gray-50 dark:bg-gray-700",children:(0,r.jsxs)(o.SC,{className:"text-gray-800 dark:text-gray-300",children:[(0,r.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold"}),(0,r.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[10rem]",children:"Name"}),(0,r.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[10rem]",children:"Type"}),(0,r.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[6rem]",children:"Size"}),(0,r.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[6rem]",children:"Status"}),(0,r.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[8rem]",children:"Action"})]})}),(0,r.jsx)(o.RM,{className:"divide-y divide-gray-200 dark:divide-gray-600",children:C.map((e,s)=>{var t;let a=null!==(t=g[s])&&void 0!==t?t:"pending";return(0,r.jsxs)(o.SC,{children:[(0,r.jsx)(o.pj,{className:"p-2 max-w-[50px] flex items-center",children:(0,r.jsx)(c,{file:e})}),(0,r.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400 font-medium",children:e.name}),(0,r.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:(0,r.jsx)("p",{children:e.type})}),(0,r.jsxs)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:[e.size," bytes"]}),(0,r.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:a}),(0,r.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:"success"===a&&(0,r.jsxs)("div",{className:"flex space-x-2 items-center justify-center w-full h-full text-sm",children:[(0,r.jsx)("a",{href:"/link-to-file",className:"hover:underline text-blue-800",target:"_blank",rel:"noreferrer",children:"View"}),(0,r.jsx)("button",{className:"cursor-pointer hover:underline text-red-800",type:"button",children:"Delete"})]})})]},e.name)})})]})}):null]})}},29069:function(e,s,t){t.d(s,{Cd:function(){return c},X:function(){return o},bZ:function(){return d}});var r=t(57437),a=t(2265),l=t(57742),i=t(22169);let n=(0,l.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),d=a.forwardRef((e,s)=>{let{className:t,variant:a,...l}=e;return(0,r.jsx)("div",{ref:s,role:"alert",className:(0,i.cn)(n({variant:a}),t),...l})});d.displayName="Alert";let c=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("h5",{ref:s,className:(0,i.cn)("mb-1 font-medium leading-none tracking-tight",t),...a})});c.displayName="AlertTitle";let o=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:(0,i.cn)("text-sm [&_p]:leading-relaxed",t),...a})});o.displayName="AlertDescription"},62677:function(e,s,t){t.d(s,{_v:function(){return o},aJ:function(){return c},pn:function(){return n},u:function(){return d}});var r=t(57437),a=t(2265),l=t(38152),i=t(22169);let n=l.zt,d=l.fC,c=l.xz,o=a.forwardRef((e,s)=>{let{className:t,sideOffset:a=4,...n}=e;return(0,r.jsx)(l.VY,{ref:s,sideOffset:a,className:(0,i.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})});o.displayName=l.VY.displayName},93412:function(e,s,t){t.d(s,{c1:function(){return l},cT:function(){return a}});var r=t(84971);let a=async e=>{let s=new FormData;return s.append("file",e),await (0,r.SO)("/file/upload",s,{headers:{"Content-Type":"multipart/form-data"}})},l=async e=>await (0,r.HG)("/file",e)}}]);