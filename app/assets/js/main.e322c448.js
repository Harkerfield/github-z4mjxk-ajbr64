"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[179],{6071:(e,t,n)=>{var i,a,o,r,s,l,c,d=n(22928),u=n(67294),Z=n(20745),p=n(39711),v=n(98152),h=n(4942),m=n(96974),f=n(25441),g=n(95305),S=n(54384),y=n(91647),x=n(50130),w=n(79675),T=n(62097),E=n(74981),b=n(40793),P=n(93421),_=n(78573),N=n(44373),I=n(326),O=n(19572),C=n(26215),j=n(47797),D=n(29894),k=n(61702),R=n(76638),A=n(26730),G=n(15771),L=n(85938),M=n(14161),F=n(25722),J=n(30030),U=n(76482),W=n(12530),H=n(68060);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,w.ZP)(F.Z)((function(e){var t=e.theme;return B(B({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function V(){return(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,i||(i=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div"},void 0,"Home")))),a||(a=(0,d.Z)(S.Z,{})),o||(o=(0,d.Z)(z,{})))}function z(){var e=[{to:"/scheduler",name:"Scheduler",icon:r||(r=(0,d.Z)(A.Z,{}))},{to:"/checker",name:"Checker",icon:s||(s=(0,d.Z)(G.Z,{}))},{to:"/siteMaps",name:"Site Maps",icon:l||(l=(0,d.Z)(M.Z,{}))},{to:"/ThreatsList",name:"Threats List",icon:c||(c=(0,d.Z)(L.Z,{}))}];(0,T.Z)();return(0,d.Z)(f.Z,{sx:{display:"flex"}},void 0,(0,d.Z)(J.ZP,{container:!0,spacing:2},void 0,e.map((function(e){return(0,d.Z)(J.ZP,{item:!0,xs:4},void 0,(0,d.Z)(p.rU,{to:e.to},void 0,(0,d.Z)(U.Z,{},void 0,(0,d.Z)(H.Z,{},void 0,(0,d.Z)(W.Z,{},void 0,(0,d.Z)(y.Z,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center"},void 0,e.name),(0,d.Z)(y.Z,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center"},void 0,e.icon))))))}))))}var Y=n(84250),K=n(48008);const X=u.createContext();function Q(e){var t=e.jsonData,n=e.columnData,i=!!e.multiSelect,a=(0,u.useContext)(X);return(0,d.Z)("div",{style:{height:500,width:"100%"}},void 0,(0,d.Z)(Y._,{getRowId:function(e){return e.ID},rows:t,columns:n,pageSize:50,rowsPerPageOptions:[50],components:{Toolbar:K.n},checkboxSelection:i,onSelectionModelChange:function(e){var n=e.map((function(e){return t.filter((function(t){return t.ID===e}))}));console.log("Add Item to Stateray",n),a.setselectedThreats(n)}}))}var $=n(15861),ee=n(87757),te=n.n(ee);const ne=JSON.parse('[{"FileSystemObjectType":0,"Id":1,"ContentTypeId":"123456789123456789123456789","Title":"Tester Serial","Threat":"Tester Threat","Equipment":"Tester Equip","System_x0020_Type":"FSU/Manned","Status":"GREEN","Threat_x0020_Location":"Tester Location","Schedulable":"Yes","Operational":"Yes","Notes":"Information Notes Goes Here | AWP","Status_x0020_Change_x0020_date":"2022-12-31T09:00:00Z","ETIC":"2022-12-31T09:00:00Z","Range":null,"Latitude":"N64 38.100","Longitude":"W146 35.500","Elevation":2421,"Bullseye_x0020__x0028_MIZZI_x002":null,"Coord_x0020_Source":null,"Coord_x0020_Recorded_x0020_Date":null,"Accuracy":"UNK","Lat_x002f_Lon":"N64 38.100, W146 35.500","Lon_x0020_DD":"-146.599000000000","Lat_x0020_DD":"64.6444000000000","Equipment_x002f_Threat":"Test Equip Threat","ID":1,"Modified":"2022-10-08T07:18:17Z","Created":"2022-10-08T07:18:17Z","AuthorId":1,"EditorId":1,"OData__UIVersionString":"1.0","Attachments":false,"GUID":"a63b66e8-e44f-43d7-9eb5-sdsadasdsadasdas"}]');const ie=function(){var e=(0,$.Z)(te().mark((function e(t){var n;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Accept:"application/json; odata=verbose"},"Access-Control-Allow-Origin":"*","Content-Type":"application/json;odata=verbose;charset=utf-8","X-FRAME-OPTIONS":"SAMEORIGIN"},e.abrupt("return",fetch(t,n).then((function(e){return e.json()})).then((function(e){return e.d.results})).catch(ne));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ae,oe,re,se=n(13150),le=n(66140),ce=n(3030),de=n(93406),ue=n(58561),Ze=n(48736),pe=n(41733),ve=n(96540),he=(n(27484),n(72856)),me=n(22949),fe=n(61593),ge=n(24571),Se=0;function ye(){var e=(0,u.useState)(""),t=(0,v.Z)(e,2),n=t[0],i=t[1],a=(0,u.useState)(""),o=(0,v.Z)(a,2),r=o[0],s=o[1],l=(0,u.useState)(""),c=(0,v.Z)(l,2),Z=c[0],p=c[1],h=(0,u.useState)([]),m=(0,v.Z)(h,2),f=m[0],g=m[1];return u.createElement(u.Fragment,null,(0,d.Z)("input",{value:n,onChange:function(e){return i(e.target.value)}}),(0,d.Z)(he._,{dateAdapter:fe.y},void 0,(0,d.Z)(ge.j,{label:"Start",value:r,onChange:function(e){s(e)},renderInput:function(e){return u.createElement(me.Z,e)}}),(0,d.Z)(ge.j,{label:"End",value:Z,onChange:function(e){p(e)},renderInput:function(e){return u.createElement(me.Z,e)}})),(0,d.Z)("button",{onClick:function(){i(""),f.push({id:Se++,vulName:n,vulStart:r,vulEnd:Z})}},void 0,ae||(ae=(0,d.Z)(ve.Z,{}))),(0,d.Z)(de.Z,{component:F.Z},void 0,(0,d.Z)(se.Z,{sx:{minWidth:650},size:"small","aria-label":"a dense table"},void 0,oe||(oe=(0,d.Z)(ue.Z,{},void 0,(0,d.Z)(Ze.Z,{},void 0,(0,d.Z)(ce.Z,{align:"center"},void 0,"Title"),(0,d.Z)(ce.Z,{align:"center"},void 0,"Start"),(0,d.Z)(ce.Z,{align:"center"},void 0,"End"),(0,d.Z)(ce.Z,{align:"center"},void 0,"Delete")))),(0,d.Z)(le.Z,{},void 0,f.map((function(e){return(0,d.Z)(Ze.Z,{sx:{"&:last-child td, &:last-child th":{border:0}}},e.id,(0,d.Z)(ce.Z,{component:"th",scope:"row",align:"center"},void 0,e.vulName),(0,d.Z)(ce.Z,{align:"center"},void 0,e.vulStart),(0,d.Z)(ce.Z,{align:"center"},void 0,e.vulEnd),(0,d.Z)(ce.Z,{align:"center"},void 0,(0,d.Z)("button",{onClick:function(){g(f.filter((function(t){return t.id!==e.id})))}},void 0,re||(re=(0,d.Z)(pe.Z,{})))))}))))))}var xe=n(36447),we=n(42484),Te={type:"array",properties:{ThreatForm:{type:"array",items:{type:"object",properties:{Title:{type:"string",readOnly:!0},mon:{type:"string",enum:["none","all"]},tue:{type:"string",enum:["none","all"]},wed:{type:"string",enum:["none","all"]},thu:{type:"string",enum:["none","all"]},fri:{type:"string",enum:["none","all"]},sat:{type:"string",enum:["none","all"]},sun:{type:"string",enum:["none","all"]}}}}}},Ee={type:"VerticalLayout",elements:[{type:"Control",scope:"#/properties/ThreatForm",options:{showDeleteButtons:!1}}]};function be(e){var t=e.jsonData,n=(0,u.useState)(t[0]),i=(0,v.Z)(n,2),a=i[0],o=i[1];return u.createElement(u.Fragment,null,(0,d.Z)("pre",{style:{fontSize:10}},void 0,JSON.stringify(t,null,4)),(0,d.Z)(we.C,{schema:Te,uischema:Ee,data:a,renderers:xe.yf,cells:xe.TW,onChange:function(e){var t=e.data;e.errors;return o(t)}}))}var Pe,_e,Ne,Ie,Oe,Ce,je,De,ke=n(41289),Re=n(40217),Ae=n(59090),Ge=n(61140),Le=n(79271),Me=n(43078),Fe=n(70996),Je=n(58857),Ue=n(91900);function We(e){var t=(0,u.useState)(),n=(0,v.Z)(t,2),i=n[0],a=n[1],o=(0,u.useState)(),r=(0,v.Z)(o,2),s=r[0],l=r[1],c=(0,u.useState)(),Z=(0,v.Z)(c,2),p=Z[0],h=Z[1],m=(0,u.useRef)(),g=(0,u.useRef)();g.current=i,(0,u.useEffect)((function(){var e=new Le.Z({source:new Me.Z}),t=new Re.Z({target:m.current,layers:[new Ge.Z({source:new Fe.Z({url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})}),e],view:new Ae.ZP({projection:"EPSG:3857",center:(0,Je.mi)([-146.44166473513687,64.31714411488758]),zoom:8,maxZoom:18}),controls:[]});t.on("click",S),a(t),l(e)}),[]),(0,u.useEffect)((function(){e.features.length&&(s.setSource(new Me.Z({features:e.features})),i.getView().fit(s.getSource().getExtent(),{padding:[100,100,100,100]}))}),[e.features]);var S=function(e){var t=g.current.getCoordinateFromPixel(e.pixel),n=(0,Je.vs)(t,"EPSG:3857","EPSG:4326");h(n)};return(0,d.Z)(f.Z,{},void 0,u.createElement("div",{ref:m,className:"map-container"}),(0,d.Z)("div",{className:"clicked-coord-label"},void 0,(0,d.Z)("p",{},void 0,p?(0,Ue.yZ)(p,8):"")))}function He(){var e=(0,u.useState)([]),t=(0,v.Z)(e,2),n=t[0],i=t[1],a=(0,u.useState)(""),o=(0,v.Z)(a,2),r=o[0],s=o[1],l={selectedThreatsName:n,setselectedThreats:i};(0,u.useEffect)((function(){var e="";n.map((function(t){return e+="<Placemark><name>"+t[0].Equipment_x002f_Threat+"/"+t[0].Equipment_x002f_Threat+"</name><styleUrl>#"+t[0].Status+"</styleUrl><Point><coordinates>"+parseFloat(t[0].Lon_x0020_DD)+","+parseFloat(t[0].Lat_x0020_DD)+",0</coordinates></Point></Placemark>"}));var t='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>JESTR Export 2022-05-29</name><Camera><longitude>-144.6115629357254</longitude><latitude>62.90816645843766</latitude><altitude>491799.148906222</altitude><heading>-4.73536142512005</heading><tilt>18.30903346303281</tilt><roll>0.7595612705727459</roll><gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode></Camera><Style id="NA"><IconStyle><scale>0.5</scale><Icon><href>http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png</href></Icon></IconStyle></Style><Style id="GREEN"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconGreenCrossHair.svg</href></Icon></IconStyle></Style><Style id="AMBER"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconYellowCrossHair.svg</href></Icon></IconStyle></Style><Style id="RED"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconRedCrossHair.svg</href></Icon></IconStyle></Style>'.concat(e,"</Document></kml>");s(t)}),[n]);var c=(0,u.useState)([]),Z=(0,v.Z)(c,2),p=Z[0],h=Z[1];(0,u.useEffect)((function(){var e=(new ke.ZP).readFeatures(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});h(e)}),[r]);var m=(0,u.useState)([]),g=(0,v.Z)(m,2),x=g[0],w=g[1];return(0,u.useEffect)((function(){ie("https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items").then((function(e){return w(e)}))}),[]),(0,d.Z)(f.Z,{className:"App"},void 0,(0,d.Z)(X.Provider,{value:l},void 0,(0,d.Z)(J.ZP,{container:!0,spacing:1},void 0,(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Pe||(Pe=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Threat Data"))))),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(Q,{jsonData:x,columnData:[{field:"Equipment_x002f_Threat",headerName:"Equip Threat",width:130},{field:"System_x0020_Type",headerName:"System Type",width:130},{field:"ETIC",headerName:"ETIC",width:130},{field:"Operational",headerName:"Operational",width:130},{field:"Schedulable",headerName:"Schedulable",width:130},{field:"Status",headerName:"Status",width:130},{field:"Title",headerName:"location",width:130}],multiSelect:!0}))),(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,_e||(_e=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Map"))))),(0,d.Z)(We,{features:p})),(0,d.Z)(J.ZP,{xs:12},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ne||(Ne=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Selected Items")))))),(0,d.Z)(J.ZP,{xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ie||(Ie=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"User Form")))))),(0,d.Z)(J.ZP,{xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Oe||(Oe=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"VUL Times"))))),Ce||(Ce=(0,d.Z)(f.Z,{},void 0,(0,d.Z)(ye,{})))),(0,d.Z)(J.ZP,{xs:12},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,je||(je=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Schedule Form"))))),(0,d.Z)(be,{jsonData:n})))))}function qe(){return(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,De||(De=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div"},void 0,"Checker")))))}function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Be.apply(this,arguments)}const Ve=function(e){return u.createElement("svg",Be({xmlns:"http://www.w3.org/2000/svg",width:"200pt",height:"200pt",viewBox:"0 0 200 200"},e),u.createElement("path",{style:{fillRule:"nonzero",fill:"#0f0",fillOpacity:1,strokeWidth:10,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"#0f0",strokeOpacity:1,strokeMiterlimit:4},d:"M247 32v23.21C143.25 59.8 59.8 143.25 55.21 247H32v18h23.21C59.8 368.75 143.25 452.2 247 456.79V480h18v-23.21C368.75 452.2 452.2 368.75 456.79 265H480v-18h-23.21C452.2 143.25 368.75 59.8 265 55.21V32Zm0 41.22V128h18V73.22C359 77.76 434.24 153 438.78 247H384v18h54.78C434.24 359 359 434.24 265 438.78V384h-18v54.78C153 434.24 77.76 359 73.22 265H128v-18H73.22C77.76 153 153 77.76 247 73.22ZM247 224v23h-23v18h23v23h18v-23h23v-18h-23v-23Zm0 0",transform:"scale(.39063)"}))};var ze,Ye,Ke,Xe,Qe,$e,et,tt,nt,it,at,ot,rt,st,lt,ct,dt;function ut(){var e=(0,u.useState)([]),t=(0,v.Z)(e,2),n=t[0],i=t[1],a=(0,u.useState)(""),o=(0,v.Z)(a,2),r=o[0],s=o[1],l={selectedThreatsName:n,setselectedThreats:i};console.log("test",Ve()),(0,u.useEffect)((function(){var e="";n.map((function(t){return e+="<Placemark><name>"+t[0].Equipment_x002f_Threat+"/"+t[0].Equipment_x002f_Threat+"</name><styleUrl>#"+t[0].Status+"</styleUrl><Point><coordinates>"+parseFloat(t[0].Lon_x0020_DD)+","+parseFloat(t[0].Lat_x0020_DD)+",0</coordinates></Point></Placemark>"}));var t='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>JESTR Export 2022-05-29</name><Camera><longitude>-144.6115629357254</longitude><latitude>62.90816645843766</latitude><altitude>491799.148906222</altitude><heading>-4.73536142512005</heading><tilt>18.30903346303281</tilt><roll>0.7595612705727459</roll><gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode></Camera><Style id="NA"><IconStyle><scale>0.5</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconWhiteCrossHair.svg</href></Icon></IconStyle></Style><Style id="GREEN"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconGreenCrossHair.svg</href></Icon></IconStyle></Style><Style id="AMBER"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconYellowCrossHair.svg</href></Icon></IconStyle></Style><Style id="RED"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconRedCrossHair.svg</href></Icon></IconStyle></Style>'.concat(e,"</Document></kml>");s(t)}),[n]);var c=(0,u.useState)([]),Z=(0,v.Z)(c,2),p=Z[0],h=Z[1];(0,u.useEffect)((function(){var e=(new ke.ZP).readFeatures(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});console.log("Parsed Features",e),h(e)}),[r]);var m=(0,u.useState)([]),g=(0,v.Z)(m,2),x=g[0],w=g[1];return(0,u.useEffect)((function(){ie("https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items").then((function(e){return w(e)}))}),[]),(0,d.Z)(f.Z,{className:"App"},void 0,(0,d.Z)(X.Provider,{value:l},void 0,(0,d.Z)(J.ZP,{container:!0,spacing:1},void 0,(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,ze||(ze=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Threat"))))),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(Q,{jsonData:x,columnData:[{field:"Equipment_x002f_Threat",headerName:"Equip Threat",width:130},{field:"System_x0020_Type",headerName:"System Type",width:130},{field:"ETIC",headerName:"ETIC",width:130},{field:"Operational",headerName:"Operational",width:130},{field:"Schedulable",headerName:"Schedulable",width:130},{field:"Status",headerName:"Status",width:130},{field:"Title",headerName:"location",width:130}],multiSelect:!0}))),(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ye||(Ye=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(S.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Map"))))),(0,d.Z)(We,{features:p})))))}function Zt(){var e=(0,u.useState)([]),t=(0,v.Z)(e,2),n=t[0],i={selectedThreatsName:n,setselectedThreats:t[1]},a=(0,u.useState)([]),o=(0,v.Z)(a,2),r=o[0],s=o[1];return(0,u.useEffect)((function(){ie("https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items").then((function(e){return s(e)}))}),[]),console.log("threats list",r),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(X.Provider,{value:i},void 0,(0,d.Z)(Q,{jsonData:r,columnData:[{field:"Equipment_x002f_Threat",headerName:"Equip Threat",width:130},{field:"System_x0020_Type",headerName:"System Type",width:130},{field:"ETIC",headerName:"ETIC",width:130},{field:"Operational",headerName:"Operational",width:130},{field:"Schedulable",headerName:"Schedulable",width:130},{field:"Status",headerName:"Status",width:130},{field:"Title",headerName:"location",width:130}],multiSelect:!1}),(0,d.Z)("pre",{style:{fontSize:10}},void 0,JSON.stringify(n,null,4))))}function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function vt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ht=220,mt=(0,w.ZP)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return vt({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(ht,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),ft=(0,w.ZP)(P.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return vt({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(ht,"px)"),marginLeft:"".concat(ht,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),gt=(0,w.ZP)("div")((function(e){var t=e.theme;return vt(vt({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function St(){return(0,d.Z)("div",{},void 0,(0,d.Z)(m.Z5,{},void 0,Ke||(Ke=(0,d.Z)(m.AW,{path:"/",element:(0,d.Z)(yt,{})},void 0,(0,d.Z)(m.AW,{path:"home",element:(0,d.Z)(V,{})}),(0,d.Z)(m.AW,{path:"scheduler",element:(0,d.Z)(He,{})}),(0,d.Z)(m.AW,{path:"checker",element:(0,d.Z)(qe,{})}),(0,d.Z)(m.AW,{path:"siteMaps",element:(0,d.Z)(ut,{})}),(0,d.Z)(m.AW,{path:"ThreatsList",element:(0,d.Z)(Zt,{})}),(0,d.Z)(m.AW,{path:"*",element:(0,d.Z)(xt,{})})))))}function yt(){var e=[{to:"/",name:"Home",icon:Xe||(Xe=(0,d.Z)(R.Z,{}))},{to:"/scheduler",name:"Scheduler",icon:Qe||(Qe=(0,d.Z)(A.Z,{}))},{to:"/checker",name:"Checker",icon:$e||($e=(0,d.Z)(G.Z,{}))},{to:"/siteMaps",name:"Site Maps",icon:et||(et=(0,d.Z)(M.Z,{}))},{to:"/ThreatsList",name:"Threat Lists",icon:tt||(tt=(0,d.Z)(L.Z,{}))}],t=(0,T.Z)(),n=u.useState(!1),i=(0,v.Z)(n,2),a=i[0],o=i[1];return(0,d.Z)(f.Z,{sx:{display:"flex"}},void 0,nt||(nt=(0,d.Z)(b.ZP,{})),(0,d.Z)(ft,{position:"fixed",open:a},void 0,(0,d.Z)(S.Z,{},void 0,(0,d.Z)(x.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",sx:vt({mr:2},a&&{display:"none"})},void 0,it||(it=(0,d.Z)(I.Z,{}))),at||(at=(0,d.Z)(y.Z,{variant:"h6",noWrap:!0,component:"div"},void 0,(0,d.Z)(p.rU,{to:"/"},void 0,"JESTR 2.0"))))),(0,d.Z)(E.ZP,{sx:{width:ht,flexShrink:0,"& .MuiDrawer-paper":{width:ht,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:a},void 0,(0,d.Z)(gt,{},void 0,(0,d.Z)(x.Z,{onClick:function(){o(!1)}},void 0,"ltr"===t.direction?ot||(ot=(0,d.Z)(O.Z,{})):rt||(rt=(0,d.Z)(C.Z,{})))),st||(st=(0,d.Z)(N.Z,{})),(0,d.Z)(_.Z,{},void 0,e.map((function(e){return(0,d.Z)(j.ZP,{button:!0,href:e.to},e.name,(0,d.Z)(D.Z,{},void 0,e.icon),(0,d.Z)(p.rU,{to:e.to},void 0,(0,d.Z)(g.Z,{style:{padding:"10px 20px",textAlign:"center"},color:"inherit"},void 0,(0,d.Z)(k.Z,{primary:e.name}))))}))),lt||(lt=(0,d.Z)(N.Z,{}))),(0,d.Z)(mt,{open:a},void 0,ct||(ct=(0,d.Z)(gt,{})),dt||(dt=(0,d.Z)(m.j3,{}))))}function xt(){return u.createElement("div",null,u.createElement("h2",null,"Nothing to see here!"),u.createElement("p",null,u.createElement(p.rU,{to:"/"},"Go to the home page")))}var wt=document.getElementById("root");(0,Z.s)(wt).render((0,d.Z)(p.UT,{},void 0,(0,d.Z)(St,{})))}},e=>{e.O(0,[825,479,107,906,165,578,561,206,805,142,987,799],(()=>{return t=6071,e(e.s=t);var t}));e.O()}]);