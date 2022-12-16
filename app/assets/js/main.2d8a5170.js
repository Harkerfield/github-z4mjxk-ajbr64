"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[179],{6071:(e,t,n)=>{var i,o,a,r,s,l,c,d=n(2928),Z=n(7294),u=n(745),v=n(9711),p=n(8152),h=n(4942),m=n(6974),f=n(4622),S=n(6914),g=n(4386),y=n(2658),x=n(3995),w=n(8524),T=n(2734),E=n(2318),b=n(6720),P=n(3720),_=n(2440),N=n(7720),I=n(326),O=n(9572),C=n(6215),R=n(799),j=n(8885),A=n(9334),D=n(6638),k=n(6730),G=n(5771),M=n(5938),F=n(4161),L=n(6501),J=n(5725),U=n(5295),H=n(2643),W=n(7797);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,w.ZP)(L.Z)((function(e){var t=e.theme;return B(B({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function z(){return(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,i||(i=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div"},void 0,"Home")))),o||(o=(0,d.Z)(g.Z,{})),a||(a=(0,d.Z)(V,{})))}function V(){var e=[{to:"/scheduler",name:"Scheduler",icon:r||(r=(0,d.Z)(k.Z,{}))},{to:"/checker",name:"Checker",icon:s||(s=(0,d.Z)(G.Z,{}))},{to:"/siteMaps",name:"Site Maps",icon:l||(l=(0,d.Z)(F.Z,{}))},{to:"/ThreatsList",name:"Threats List",icon:c||(c=(0,d.Z)(M.Z,{}))}];(0,T.Z)();return(0,d.Z)(f.Z,{sx:{display:"flex"}},void 0,(0,d.Z)(J.ZP,{container:!0,spacing:2},void 0,e.map((function(e){return(0,d.Z)(J.ZP,{item:!0,xs:4},void 0,(0,d.Z)(v.rU,{to:e.to},void 0,(0,d.Z)(U.Z,{},void 0,(0,d.Z)(W.Z,{},void 0,(0,d.Z)(H.Z,{},void 0,(0,d.Z)(y.Z,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center"},void 0,e.name),(0,d.Z)(y.Z,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center"},void 0,e.icon))))))}))))}var Y=n(6867),K=n(8008);const X=Z.createContext();function Q(e){var t=e.jsonData,n=e.columnData,i=!!e.multiSelect,o=(0,Z.useContext)(X);return(0,d.Z)("div",{style:{height:500,width:"100%"}},void 0,(0,d.Z)(Y._,{getRowId:function(e){return e.ID},rows:t,columns:n,pageSize:50,rowsPerPageOptions:[50],components:{Toolbar:K.n},checkboxSelection:i,onSelectionModelChange:function(e){var n=e.map((function(e){return t.filter((function(t){return t.ID===e}))}));console.log("Add Item to Stateray",n),o.setselectedThreats(n)}}))}var $;function ee(){return(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,$||($=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div"},void 0,(0,d.Z)("h1",{},void 0,"354 RANS - JPARC Emitter Status and Training Request (JESTR) 2.0"),(0,d.Z)("p",{},void 0,"This site will be used to view the JPARC emitters. New features include bombable target registration."))))))}var te=n(5861),ne=n(7757),ie=n.n(ne);const oe=JSON.parse('[{"FileSystemObjectType":0,"Id":1,"ContentTypeId":"123456789123456789123456789","Title":"Tester Serial","Threat":"Tester Threat","Equipment":"Tester Equip","System_x0020_Type":"FSU/Manned","Status":"GREEN","Threat_x0020_Location":"Tester Location","Schedulable":"Yes","Operational":"Yes","Notes":"Information Notes Goes Here | AWP","Status_x0020_Change_x0020_date":"2022-12-31T09:00:00Z","ETIC":"2022-12-31T09:00:00Z","Range":null,"Latitude":"N64 38.100","Longitude":"W146 35.500","Elevation":2421,"Bullseye_x0020__x0028_MIZZI_x002":null,"Coord_x0020_Source":null,"Coord_x0020_Recorded_x0020_Date":null,"Accuracy":"UNK","Lat_x002f_Lon":"N64 38.100, W146 35.500","Lon_x0020_DD":"-146.599000000000","Lat_x0020_DD":"64.6444000000000","Equipment_x002f_Threat":"Test Equip Threat","ID":1,"Modified":"2022-10-08T07:18:17Z","Created":"2022-10-08T07:18:17Z","AuthorId":1,"EditorId":1,"OData__UIVersionString":"1.0","Attachments":false,"GUID":"a63b66e8-e44f-43d7-9eb5-sdsadasdsadasdas"}]');const ae=function(){var e=(0,te.Z)(ie().mark((function e(t){var n;return ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Accept:"application/json; odata=verbose"},"Access-Control-Allow-Origin":"*","Content-Type":"application/json;odata=verbose;charset=utf-8","X-FRAME-OPTIONS":"SAMEORIGIN"},e.abrupt("return",fetch(t,n).then((function(e){return e.json()})).then((function(e){return e.d.results})).catch(oe));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var re,se,le,ce=n(9573),de=n(8732),Ze=n(6926),ue=n(7896),ve=n(6011),pe=n(3694),he=n(1733),me=n(6540),fe=(n(7484),n(2856)),Se=n(5116),ge=n(3635),ye=n(8628),xe=0;function we(){var e=(0,Z.useState)(""),t=(0,p.Z)(e,2),n=t[0],i=t[1],o=(0,Z.useState)(""),a=(0,p.Z)(o,2),r=a[0],s=a[1],l=(0,Z.useState)(""),c=(0,p.Z)(l,2),u=c[0],v=c[1],h=(0,Z.useState)([]),m=(0,p.Z)(h,2),f=m[0],S=m[1];return Z.createElement(Z.Fragment,null,(0,d.Z)("input",{value:n,onChange:function(e){return i(e.target.value)}}),(0,d.Z)(fe._,{dateAdapter:ge.y},void 0,(0,d.Z)(ye.j,{label:"Start",value:r,onChange:function(e){s(e)},renderInput:function(e){return Z.createElement(Se.Z,e)}}),(0,d.Z)(ye.j,{label:"End",value:u,onChange:function(e){v(e)},renderInput:function(e){return Z.createElement(Se.Z,e)}})),(0,d.Z)("button",{onClick:function(){i(""),f.push({id:xe++,vulName:n,vulStart:r,vulEnd:u})}},void 0,re||(re=(0,d.Z)(me.Z,{}))),(0,d.Z)(ue.Z,{component:L.Z},void 0,(0,d.Z)(ce.Z,{sx:{minWidth:650},size:"small","aria-label":"a dense table"},void 0,se||(se=(0,d.Z)(ve.Z,{},void 0,(0,d.Z)(pe.Z,{},void 0,(0,d.Z)(Ze.Z,{align:"center"},void 0,"Title"),(0,d.Z)(Ze.Z,{align:"center"},void 0,"Start"),(0,d.Z)(Ze.Z,{align:"center"},void 0,"End"),(0,d.Z)(Ze.Z,{align:"center"},void 0,"Delete")))),(0,d.Z)(de.Z,{},void 0,f.map((function(e){return(0,d.Z)(pe.Z,{sx:{"&:last-child td, &:last-child th":{border:0}}},e.id,(0,d.Z)(Ze.Z,{component:"th",scope:"row",align:"center"},void 0,e.vulName),(0,d.Z)(Ze.Z,{align:"center"},void 0,e.vulStart),(0,d.Z)(Ze.Z,{align:"center"},void 0,e.vulEnd),(0,d.Z)(Ze.Z,{align:"center"},void 0,(0,d.Z)("button",{onClick:function(){S(f.filter((function(t){return t.id!==e.id})))}},void 0,le||(le=(0,d.Z)(he.Z,{})))))}))))))}function Te(e){var t=e.jsonData;return Z.createElement(Z.Fragment,null,"Hello World",(0,d.Z)("pre",{style:{fontSize:10}},void 0,JSON.stringify(t,null,4)),t.map((function(e){return(0,d.Z)("div",{},void 0,e[0].Title)})))}var Ee,be,Pe,_e,Ne,Ie,Oe,Ce,Re,je,Ae,De,ke=n(1289),Ge=n(217),Me=n(9090),Fe=n(1140),Le=n(9271),Je=n(3078),Ue=n(996),He=n(8857),We=n(1900);function qe(e){var t=(0,Z.useState)(),n=(0,p.Z)(t,2),i=n[0],o=n[1],a=(0,Z.useState)(),r=(0,p.Z)(a,2),s=r[0],l=r[1],c=(0,Z.useState)(),u=(0,p.Z)(c,2),v=u[0],h=u[1],m=(0,Z.useRef)(),S=(0,Z.useRef)();S.current=i,(0,Z.useEffect)((function(){var e=new Le.Z({source:new Je.Z}),t=new Ge.Z({target:m.current,layers:[new Fe.Z({source:new Ue.Z({url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})}),e],view:new Me.ZP({projection:"EPSG:3857",center:(0,He.mi)([-146.44166473513687,64.31714411488758]),zoom:8,maxZoom:18}),controls:[]});t.on("click",g),o(t),l(e)}),[]),(0,Z.useEffect)((function(){e.features.length&&(s.setSource(new Je.Z({features:e.features})),i.getView().fit(s.getSource().getExtent(),{padding:[100,100,100,100]}))}),[e.features]);var g=function(e){var t=S.current.getCoordinateFromPixel(e.pixel),n=(0,He.vs)(t,"EPSG:3857","EPSG:4326");h(n)};return(0,d.Z)(f.Z,{},void 0,Z.createElement("div",{ref:m,className:"map-container"}),(0,d.Z)("div",{className:"clicked-coord-label"},void 0,(0,d.Z)("p",{},void 0,v?(0,We.yZ)(v,8):"")))}function Be(){var e=(0,Z.useState)([]),t=(0,p.Z)(e,2),n=t[0],i=t[1],o=(0,Z.useState)(""),a=(0,p.Z)(o,2),r=a[0],s=a[1],l={selectedThreatsName:n,setselectedThreats:i};(0,Z.useEffect)((function(){var e="";n.map((function(t){return e+="<Placemark><name>"+t[0].Equipment_x002f_Threat+"/"+t[0].Equipment_x002f_Threat+"</name><styleUrl>#"+t[0].Status+"</styleUrl><Point><coordinates>"+parseFloat(t[0].Lon_x0020_DD)+","+parseFloat(t[0].Lat_x0020_DD)+",0</coordinates></Point></Placemark>"}));var t='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>JESTR Export 2022-05-29</name><Camera><longitude>-144.6115629357254</longitude><latitude>62.90816645843766</latitude><altitude>491799.148906222</altitude><heading>-4.73536142512005</heading><tilt>18.30903346303281</tilt><roll>0.7595612705727459</roll><gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode></Camera><Style id="NA"><IconStyle><scale>0.5</scale><Icon><href>http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png</href></Icon></IconStyle></Style><Style id="GREEN"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconGreenCrossHair.svg</href></Icon></IconStyle></Style><Style id="AMBER"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconYellowCrossHair.svg</href></Icon></IconStyle></Style><Style id="RED"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconRedCrossHair.svg</href></Icon></IconStyle></Style>'.concat(e,"</Document></kml>");s(t)}),[n]);var c=(0,Z.useState)([]),u=(0,p.Z)(c,2),v=u[0],h=u[1];(0,Z.useEffect)((function(){var e=(new ke.ZP).readFeatures(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});h(e)}),[r]);var m=(0,Z.useState)([]),S=(0,p.Z)(m,2),x=S[0],w=S[1];return(0,Z.useEffect)((function(){ae("https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items").then((function(e){return w(e)}))}),[]),(0,d.Z)(f.Z,{className:"App"},void 0,(0,d.Z)(X.Provider,{value:l},void 0,(0,d.Z)(J.ZP,{container:!0,spacing:1},void 0,(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ee||(Ee=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Threat Data"))))),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(Q,{jsonData:x,columnData:[{field:"Equipment_x002f_Threat",headerName:"Equip Threat",width:130},{field:"System_x0020_Type",headerName:"System Type",width:130},{field:"ETIC",headerName:"ETIC",width:130},{field:"Operational",headerName:"Operational",width:130},{field:"Schedulable",headerName:"Schedulable",width:130},{field:"Status",headerName:"Status",width:130},{field:"Title",headerName:"location",width:130}],multiSelect:!0}))),(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,be||(be=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Map"))))),(0,d.Z)(qe,{features:v})),(0,d.Z)(J.ZP,{xs:12},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Pe||(Pe=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Selected Items"))))),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(Te,{jsonData:n}))),(0,d.Z)(J.ZP,{xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,_e||(_e=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"User Form"))))),Ne||(Ne=(0,d.Z)(f.Z,{},void 0,"User form goes here"))),(0,d.Z)(J.ZP,{xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ie||(Ie=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"VUL Times"))))),Oe||(Oe=(0,d.Z)(f.Z,{},void 0,(0,d.Z)(we,{})))),(0,d.Z)(J.ZP,{xs:12},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ce||(Ce=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Schedule Form"))))),Re||(Re=(0,d.Z)(f.Z,{},void 0,"Form will go here."))),(0,d.Z)(J.ZP,{xs:12},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,je||(je=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Schedule Form"))))),Ae||(Ae=(0,d.Z)(f.Z,{},void 0,(0,d.Z)(ee,{})))))))}function ze(){return(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,De||(De=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div"},void 0,"Checker")))))}function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ve.apply(this,arguments)}const Ye=function(e){return Z.createElement("svg",Ve({xmlns:"http://www.w3.org/2000/svg",width:"200pt",height:"200pt",viewBox:"0 0 200 200",role:"img"},e),Z.createElement("path",{style:{fillRule:"nonzero",fill:"#0f0",fillOpacity:1,strokeWidth:10,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"#0f0",strokeOpacity:1,strokeMiterlimit:4},d:"M247 32v23.21C143.25 59.8 59.8 143.25 55.21 247H32v18h23.21C59.8 368.75 143.25 452.2 247 456.79V480h18v-23.21C368.75 452.2 452.2 368.75 456.79 265H480v-18h-23.21C452.2 143.25 368.75 59.8 265 55.21V32Zm0 41.22V128h18V73.22C359 77.76 434.24 153 438.78 247H384v18h54.78C434.24 359 359 434.24 265 438.78V384h-18v54.78C153 434.24 77.76 359 73.22 265H128v-18H73.22C77.76 153 153 77.76 247 73.22ZM247 224v23h-23v18h23v23h18v-23h23v-18h-23v-23Zm0 0",transform:"scale(.39063)"}))};var Ke,Xe,Qe,$e,et,tt,nt,it,ot,at,rt,st,lt,ct,dt,Zt,ut;function vt(){var e=(0,Z.useState)([]),t=(0,p.Z)(e,2),n=t[0],i=t[1],o=(0,Z.useState)(""),a=(0,p.Z)(o,2),r=a[0],s=a[1],l={selectedThreatsName:n,setselectedThreats:i};console.log("test",Ye()),(0,Z.useEffect)((function(){var e="";n.map((function(t){return e+="<Placemark><name>"+t[0].Equipment_x002f_Threat+"/"+t[0].Equipment_x002f_Threat+"</name><styleUrl>#"+t[0].Status+"</styleUrl><Point><coordinates>"+parseFloat(t[0].Lon_x0020_DD)+","+parseFloat(t[0].Lat_x0020_DD)+",0</coordinates></Point></Placemark>"}));var t='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>JESTR Export 2022-05-29</name><Camera><longitude>-144.6115629357254</longitude><latitude>62.90816645843766</latitude><altitude>491799.148906222</altitude><heading>-4.73536142512005</heading><tilt>18.30903346303281</tilt><roll>0.7595612705727459</roll><gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode></Camera><Style id="NA"><IconStyle><scale>0.5</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconWhiteCrossHair.svg</href></Icon></IconStyle></Style><Style id="GREEN"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconGreenCrossHair.svg</href></Icon></IconStyle></Style><Style id="AMBER"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconYellowCrossHair.svg</href></Icon></IconStyle></Style><Style id="RED"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconRedCrossHair.svg</href></Icon></IconStyle></Style>'.concat(e,"</Document></kml>");s(t)}),[n]);var c=(0,Z.useState)([]),u=(0,p.Z)(c,2),v=u[0],h=u[1];(0,Z.useEffect)((function(){var e=(new ke.ZP).readFeatures(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});console.log("Parsed Features",e),h(e)}),[r]);var m=(0,Z.useState)([]),S=(0,p.Z)(m,2),x=S[0],w=S[1];return(0,Z.useEffect)((function(){ae("https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items").then((function(e){return w(e)}))}),[]),(0,d.Z)(f.Z,{className:"App"},void 0,(0,d.Z)(X.Provider,{value:l},void 0,(0,d.Z)(J.ZP,{container:!0,spacing:1},void 0,(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Ke||(Ke=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Threat"))))),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(Q,{jsonData:x,columnData:[{field:"Equipment_x002f_Threat",headerName:"Equip Threat",width:130},{field:"System_x0020_Type",headerName:"System Type",width:130},{field:"ETIC",headerName:"ETIC",width:130},{field:"Operational",headerName:"Operational",width:130},{field:"Schedulable",headerName:"Schedulable",width:130},{field:"Status",headerName:"Status",width:130},{field:"Title",headerName:"location",width:130}],multiSelect:!0}))),(0,d.Z)(J.ZP,{item:!0,xs:6},void 0,(0,d.Z)(f.Z,{sx:{flexGrow:1}},void 0,Xe||(Xe=(0,d.Z)(P.Z,{position:"static"},void 0,(0,d.Z)(g.Z,{variant:"dense"},void 0,(0,d.Z)(y.Z,{variant:"h6",color:"inherit",component:"div",className:"app-label"},void 0,"Map"))))),(0,d.Z)(qe,{features:v})))))}function pt(){var e=(0,Z.useState)([]),t=(0,p.Z)(e,2),n=t[0],i={selectedThreatsName:n,setselectedThreats:t[1]},o=(0,Z.useState)([]),a=(0,p.Z)(o,2),r=a[0],s=a[1];return(0,Z.useEffect)((function(){ae("https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items").then((function(e){return s(e)}))}),[]),console.log("threats list",r),(0,d.Z)(f.Z,{},void 0,(0,d.Z)(X.Provider,{value:i},void 0,(0,d.Z)(Q,{jsonData:r,columnData:[{field:"Equipment_x002f_Threat",headerName:"Equip Threat",width:130},{field:"System_x0020_Type",headerName:"System Type",width:130},{field:"ETIC",headerName:"ETIC",width:130},{field:"Operational",headerName:"Operational",width:130},{field:"Schedulable",headerName:"Schedulable",width:130},{field:"Status",headerName:"Status",width:130},{field:"Title",headerName:"location",width:130}],multiSelect:!1}),(0,d.Z)("pre",{style:{fontSize:10}},void 0,JSON.stringify(n,null,4))))}function ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ht(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ft=220,St=(0,w.ZP)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return mt({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(ft,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),gt=(0,w.ZP)(P.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return mt({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(ft,"px)"),marginLeft:"".concat(ft,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),yt=(0,w.ZP)("div")((function(e){var t=e.theme;return mt(mt({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function xt(){return(0,d.Z)("div",{},void 0,(0,d.Z)(m.Z5,{},void 0,Qe||(Qe=(0,d.Z)(m.AW,{path:"/",element:(0,d.Z)(wt,{})},void 0,(0,d.Z)(m.AW,{path:"home",element:(0,d.Z)(z,{})}),(0,d.Z)(m.AW,{path:"scheduler",element:(0,d.Z)(Be,{})}),(0,d.Z)(m.AW,{path:"checker",element:(0,d.Z)(ze,{})}),(0,d.Z)(m.AW,{path:"siteMaps",element:(0,d.Z)(vt,{})}),(0,d.Z)(m.AW,{path:"ThreatsList",element:(0,d.Z)(pt,{})}),(0,d.Z)(m.AW,{path:"*",element:(0,d.Z)(Tt,{})})))))}function wt(){var e=[{to:"/",name:"Home",icon:$e||($e=(0,d.Z)(D.Z,{}))},{to:"/scheduler",name:"Scheduler",icon:et||(et=(0,d.Z)(k.Z,{}))},{to:"/checker",name:"Checker",icon:tt||(tt=(0,d.Z)(G.Z,{}))},{to:"/siteMaps",name:"Site Maps",icon:nt||(nt=(0,d.Z)(F.Z,{}))},{to:"/ThreatsList",name:"Threat Lists",icon:it||(it=(0,d.Z)(M.Z,{}))}],t=(0,T.Z)(),n=Z.useState(!1),i=(0,p.Z)(n,2),o=i[0],a=i[1];return(0,d.Z)(f.Z,{sx:{display:"flex"}},void 0,ot||(ot=(0,d.Z)(b.ZP,{})),(0,d.Z)(gt,{position:"fixed",open:o},void 0,(0,d.Z)(g.Z,{},void 0,(0,d.Z)(x.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){a(!0)},edge:"start",sx:mt({mr:2},o&&{display:"none"})},void 0,at||(at=(0,d.Z)(I.Z,{}))),rt||(rt=(0,d.Z)(y.Z,{variant:"h6",noWrap:!0,component:"div"},void 0,(0,d.Z)(v.rU,{to:"/"},void 0,"JESTR 2.0"))))),(0,d.Z)(E.ZP,{sx:{width:ft,flexShrink:0,"& .MuiDrawer-paper":{width:ft,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:o},void 0,(0,d.Z)(yt,{},void 0,(0,d.Z)(x.Z,{onClick:function(){a(!1)}},void 0,"ltr"===t.direction?st||(st=(0,d.Z)(O.Z,{})):lt||(lt=(0,d.Z)(C.Z,{})))),ct||(ct=(0,d.Z)(N.Z,{})),(0,d.Z)(_.Z,{},void 0,e.map((function(e){return(0,d.Z)(R.ZP,{button:!0,href:e.to},e.name,(0,d.Z)(j.Z,{},void 0,e.icon),(0,d.Z)(v.rU,{to:e.to},void 0,(0,d.Z)(S.Z,{style:{padding:"10px 20px",textAlign:"center"},color:"inherit"},void 0,(0,d.Z)(A.Z,{primary:e.name}))))}))),dt||(dt=(0,d.Z)(N.Z,{}))),(0,d.Z)(St,{open:o},void 0,Zt||(Zt=(0,d.Z)(yt,{})),ut||(ut=(0,d.Z)(m.j3,{}))))}function Tt(){return Z.createElement("div",null,Z.createElement("h2",null,"Nothing to see here!"),Z.createElement("p",null,Z.createElement(v.rU,{to:"/"},"Go to the home page")))}var Et=document.getElementById("root");(0,u.s)(Et).render((0,d.Z)(v.UT,{},void 0,(0,d.Z)(xt,{})))}},e=>{e.O(0,[825,107,165,578,561,206,947,532,805,142],(()=>{return t=6071,e(e.s=t);var t}));e.O()}]);