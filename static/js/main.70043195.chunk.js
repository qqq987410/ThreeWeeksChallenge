(this["webpackJsonpthree-weeks-challenge"]=this["webpackJsonpthree-weeks-challenge"]||[]).push([[0],{10:function(e,n,a){e.exports={mapContainer:"main_mapContainer__3Ih6G",main:"main_main__8Fsw5",navbar:"main_navbar__17_4W",categoryBar:"main_categoryBar__2RrEZ",category:"main_category__1chaI",cardsContainer:"main_cardsContainer__2wQwE"}},12:function(e,n,a){e.exports={infoCard:"infoCard_infoCard__3KkOH",photoWrap:"infoCard_photoWrap__3b7br",photo:"infoCard_photo__qSrA0",info:"infoCard_info__2aT2j",subTitle:"infoCard_subTitle__k1sPq",title:"infoCard_title__33aTo",contact:"infoCard_contact__1KlaT",description:"infoCard_description__32t3p"}},44:function(e,n,a){e.exports={map:"map_map__1fyJD"}},78:function(e,n,a){},80:function(e,n,a){},83:function(e,n,a){},85:function(e,n,a){},86:function(e,n,a){},87:function(e,n,a){"use strict";a.r(n);var i=a(0),t=a.n(i),p=a(20),m=a.n(p),c=a(15),s=a(3),r=a(45),z=a(17),o=a(38),u=a.n(o),l=a(39),d=a(27),j="GET_PAGE",h=function(){return window.location.pathname.split("/")[1]},b=function(){var e=h();return{type:j,payload:e}},v={page:""};var f=Object(z.b)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;return n.type===j?Object(d.a)(Object(d.a)({},e),{},{page:n.payload}):e}}),O=f,y=Object(z.a)(u.a,l.a)(z.c)(O),x=a(11),C=a.n(x),g=a(14),_=a(13),N=a(40),w=a.n(N),T=a(10),k=a.n(T),S=a(41),P=a(42),D=a.n(P),I=a(46),B={APP_ID:"5ca25107d02d43e7ad07cb0b8db45e1b",APP_KEY:"4rGpUumOpxKH4_vUYMUOOD8X_f4",MY_TOKEN:"pk.eyJ1IjoicWlxaWx5IiwiYSI6ImNrdndubW0zbDQ4ajkydXRrcWppaTdhdXEifQ.-Nh7ec4QozeWtcK8dTcZpQ"};function A(){var e=(new Date).toUTCString(),n=new I.a("SHA-1","TEXT");n.setHMACKey(B.APP_KEY,"TEXT"),n.update("x-date: "+e);var a=n.getHMAC("B64");return{Authorization:'hmac username="'+B.APP_ID+'", algorithm="hmac-sha1", headers="x-date", signature="'+a+'"',"X-Date":e}}var E=function(){var e=Object(g.a)(C.a.mark((function e(n,a,i){var t,p,m;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new URL("https://ptx.transportdata.tw/")).pathname="MOTC/v2/".concat(a),t.search=i,p={url:t,method:n,headers:A()},e.next=6,D()(p);case 6:return m=e.sent,e.abrupt("return",m);case 8:case"end":return e.stop()}}),e)})));return function(n,a,i){return e.apply(this,arguments)}}(),q=E;function R(e){for(var n=[this.category,this.type,e].join("/"),a=arguments.length,i=new Array(a>1?a-1:0),t=1;t<a;t++)i[t-1]=arguments[t];var p=Object(S.a)(URLSearchParams,i).toString();return q("GET",n,p)}var K={tourism:{category:"Tourism",fetchScenicSpotByCity:function(e){this.type="ScenicSpot";for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return R.call.apply(R,[this,e].concat(a))},fetchRestaurantByCity:function(e){this.type="Restaurant";for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return R.call.apply(R,[this,e].concat(a))}},bike:{category:"Bike",fetchStationByCity:function(e){this.type="Station";for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return R.call.apply(R,[this,e].concat(a))}}},M=K,W=[{name:"\u81fa\u5317\u5e02",value:"Taipei",districts:[{zip:"100",name:"\u4e2d\u6b63\u5340"},{zip:"103",name:"\u5927\u540c\u5340"},{zip:"104",name:"\u4e2d\u5c71\u5340"},{zip:"105",name:"\u677e\u5c71\u5340"},{zip:"106",name:"\u5927\u5b89\u5340"},{zip:"108",name:"\u842c\u83ef\u5340"},{zip:"110",name:"\u4fe1\u7fa9\u5340"},{zip:"111",name:"\u58eb\u6797\u5340"},{zip:"112",name:"\u5317\u6295\u5340"},{zip:"114",name:"\u5167\u6e56\u5340"},{zip:"115",name:"\u5357\u6e2f\u5340"},{zip:"116",name:"\u6587\u5c71\u5340"}]},{name:"\u65b0\u5317\u5e02",value:"NewTaipei",districts:[{zip:"207",name:"\u842c\u91cc\u5340"},{zip:"208",name:"\u91d1\u5c71\u5340"},{zip:"220",name:"\u677f\u6a4b\u5340"},{zip:"221",name:"\u6c50\u6b62\u5340"},{zip:"222",name:"\u6df1\u5751\u5340"},{zip:"223",name:"\u77f3\u7887\u5340"},{zip:"224",name:"\u745e\u82b3\u5340"},{zip:"226",name:"\u5e73\u6eaa\u5340"},{zip:"227",name:"\u96d9\u6eaa\u5340"},{zip:"228",name:"\u8ca2\u5bee\u5340"},{zip:"231",name:"\u65b0\u5e97\u5340"},{zip:"232",name:"\u576a\u6797\u5340"},{zip:"233",name:"\u70cf\u4f86\u5340"},{zip:"234",name:"\u6c38\u548c\u5340"},{zip:"235",name:"\u4e2d\u548c\u5340"},{zip:"236",name:"\u571f\u57ce\u5340"},{zip:"237",name:"\u4e09\u5cfd\u5340"},{zip:"238",name:"\u6a39\u6797\u5340"},{zip:"239",name:"\u9daf\u6b4c\u5340"},{zip:"241",name:"\u4e09\u91cd\u5340"},{zip:"242",name:"\u65b0\u838a\u5340"},{zip:"243",name:"\u6cf0\u5c71\u5340"},{zip:"244",name:"\u6797\u53e3\u5340"},{zip:"247",name:"\u8606\u6d32\u5340"},{zip:"248",name:"\u4e94\u80a1\u5340"},{zip:"249",name:"\u516b\u91cc\u5340"},{zip:"251",name:"\u6de1\u6c34\u5340"},{zip:"252",name:"\u4e09\u829d\u5340"},{zip:"253",name:"\u77f3\u9580\u5340"}]},{name:"\u6843\u5712\u5e02",value:"Taoyuan",districts:[{zip:"320",name:"\u4e2d\u58e2\u5340"},{zip:"324",name:"\u5e73\u93ae\u5340"},{zip:"325",name:"\u9f8d\u6f6d\u5340"},{zip:"326",name:"\u694a\u6885\u5340"},{zip:"327",name:"\u65b0\u5c4b\u5340"},{zip:"328",name:"\u89c0\u97f3\u5340"},{zip:"330",name:"\u6843\u5712\u5340"},{zip:"333",name:"\u9f9c\u5c71\u5340"},{zip:"334",name:"\u516b\u5fb7\u5340"},{zip:"335",name:"\u5927\u6eaa\u5340"},{zip:"336",name:"\u5fa9\u8208\u5340"},{zip:"337",name:"\u5927\u5712\u5340"},{zip:"338",name:"\u8606\u7af9\u5340"}]},{name:"\u81fa\u4e2d\u5e02",value:"Taichung",districts:[{zip:"400",name:"\u4e2d\u5340"},{zip:"401",name:"\u6771\u5340"},{zip:"402",name:"\u5357\u5340"},{zip:"403",name:"\u897f\u5340"},{zip:"404",name:"\u5317\u5340"},{zip:"406",name:"\u5317\u5c6f\u5340"},{zip:"407",name:"\u897f\u5c6f\u5340"},{zip:"408",name:"\u5357\u5c6f\u5340"},{zip:"411",name:"\u592a\u5e73\u5340"},{zip:"412",name:"\u5927\u91cc\u5340"},{zip:"413",name:"\u9727\u5cf0\u5340"},{zip:"414",name:"\u70cf\u65e5\u5340"},{zip:"420",name:"\u8c50\u539f\u5340"},{zip:"421",name:"\u540e\u91cc\u5340"},{zip:"422",name:"\u77f3\u5ca1\u5340"},{zip:"423",name:"\u6771\u52e2\u5340"},{zip:"424",name:"\u548c\u5e73\u5340"},{zip:"426",name:"\u65b0\u793e\u5340"},{zip:"427",name:"\u6f6d\u5b50\u5340"},{zip:"428",name:"\u5927\u96c5\u5340"},{zip:"429",name:"\u795e\u5ca1\u5340"},{zip:"432",name:"\u5927\u809a\u5340"},{zip:"433",name:"\u6c99\u9e7f\u5340"},{zip:"434",name:"\u9f8d\u4e95\u5340"},{zip:"435",name:"\u68a7\u68f2\u5340"},{zip:"436",name:"\u6e05\u6c34\u5340"},{zip:"437",name:"\u5927\u7532\u5340"},{zip:"438",name:"\u5916\u57d4\u5340"},{zip:"439",name:"\u5927\u5b89\u5340"}]},{name:"\u81fa\u5357\u5e02",value:"Tainan",districts:[{zip:"700",name:"\u4e2d\u897f\u5340"},{zip:"701",name:"\u6771\u5340"},{zip:"702",name:"\u5357\u5340"},{zip:"704",name:"\u5317\u5340"},{zip:"708",name:"\u5b89\u5e73\u5340"},{zip:"709",name:"\u5b89\u5357\u5340"},{zip:"710",name:"\u6c38\u5eb7\u5340"},{zip:"711",name:"\u6b78\u4ec1\u5340"},{zip:"712",name:"\u65b0\u5316\u5340"},{zip:"713",name:"\u5de6\u93ae\u5340"},{zip:"714",name:"\u7389\u4e95\u5340"},{zip:"715",name:"\u6960\u897f\u5340"},{zip:"716",name:"\u5357\u5316\u5340"},{zip:"717",name:"\u4ec1\u5fb7\u5340"},{zip:"718",name:"\u95dc\u5edf\u5340"},{zip:"719",name:"\u9f8d\u5d0e\u5340"},{zip:"720",name:"\u5b98\u7530\u5340"},{zip:"721",name:"\u9ebb\u8c46\u5340"},{zip:"722",name:"\u4f73\u91cc\u5340"},{zip:"723",name:"\u897f\u6e2f\u5340"},{zip:"724",name:"\u4e03\u80a1\u5340"},{zip:"725",name:"\u5c07\u8ecd\u5340"},{zip:"726",name:"\u5b78\u7532\u5340"},{zip:"727",name:"\u5317\u9580\u5340"},{zip:"730",name:"\u65b0\u71df\u5340"},{zip:"731",name:"\u5f8c\u58c1\u5340"},{zip:"732",name:"\u767d\u6cb3\u5340"},{zip:"733",name:"\u6771\u5c71\u5340"},{zip:"734",name:"\u516d\u7532\u5340"},{zip:"735",name:"\u4e0b\u71df\u5340"},{zip:"736",name:"\u67f3\u71df\u5340"},{zip:"737",name:"\u9e7d\u6c34\u5340"},{zip:"741",name:"\u5584\u5316\u5340"},{zip:"744",name:"\u65b0\u5e02\u5340"},{zip:"742",name:"\u5927\u5167\u5340"},{zip:"743",name:"\u5c71\u4e0a\u5340"},{zip:"745",name:"\u5b89\u5b9a\u5340"}]},{name:"\u9ad8\u96c4\u5e02",value:"Kaohsiung",districts:[{zip:"800",name:"\u65b0\u8208\u5340"},{zip:"801",name:"\u524d\u91d1\u5340"},{zip:"802",name:"\u82d3\u96c5\u5340"},{zip:"803",name:"\u9e7d\u57d5\u5340"},{zip:"804",name:"\u9f13\u5c71\u5340"},{zip:"805",name:"\u65d7\u6d25\u5340"},{zip:"806",name:"\u524d\u93ae\u5340"},{zip:"807",name:"\u4e09\u6c11\u5340"},{zip:"811",name:"\u6960\u6893\u5340"},{zip:"812",name:"\u5c0f\u6e2f\u5340"},{zip:"813",name:"\u5de6\u71df\u5340"},{zip:"814",name:"\u4ec1\u6b66\u5340"},{zip:"815",name:"\u5927\u793e\u5340"},{zip:"817",name:"\u6771\u6c99\u7fa4\u5cf6"},{zip:"819",name:"\u5357\u6c99\u7fa4\u5cf6"},{zip:"820",name:"\u5ca1\u5c71\u5340"},{zip:"821",name:"\u8def\u7af9\u5340"},{zip:"822",name:"\u963f\u84ee\u5340"},{zip:"823",name:"\u7530\u5bee\u5340"},{zip:"824",name:"\u71d5\u5de2\u5340"},{zip:"825",name:"\u6a4b\u982d\u5340"},{zip:"826",name:"\u6893\u5b98\u5340"},{zip:"827",name:"\u5f4c\u9640\u5340"},{zip:"828",name:"\u6c38\u5b89\u5340"},{zip:"829",name:"\u6e56\u5167\u5340"},{zip:"830",name:"\u9cf3\u5c71\u5340"},{zip:"831",name:"\u5927\u5bee\u5340"},{zip:"832",name:"\u6797\u5712\u5340"},{zip:"833",name:"\u9ce5\u677e\u5340"},{zip:"840",name:"\u5927\u6a39\u5340"},{zip:"842",name:"\u65d7\u5c71\u5340"},{zip:"843",name:"\u7f8e\u6fc3\u5340"},{zip:"844",name:"\u516d\u9f9c\u5340"},{zip:"845",name:"\u5167\u9580\u5340"},{zip:"846",name:"\u6749\u6797\u5340"},{zip:"847",name:"\u7532\u4ed9\u5340"},{zip:"848",name:"\u6843\u6e90\u5340"},{zip:"849",name:"\u90a3\u746a\u590f\u5340"},{zip:"851",name:"\u8302\u6797\u5340"},{zip:"852",name:"\u8304\u8423\u5340"}]},{name:"\u57fa\u9686\u5e02",value:"Keelung",districts:[{zip:"200",name:"\u4ec1\u611b\u5340"},{zip:"201",name:"\u4fe1\u7fa9\u5340"},{zip:"202",name:"\u4e2d\u6b63\u5340"},{zip:"203",name:"\u4e2d\u5c71\u5340"},{zip:"204",name:"\u5b89\u6a02\u5340"},{zip:"205",name:"\u6696\u6696\u5340"},{zip:"206",name:"\u4e03\u5835\u5340"}]},{name:"\u65b0\u7af9\u5e02",value:"Hsinchu",districts:[{zip:"300",name:"\u6771\u5340"},{zip:"300",name:"\u5317\u5340"},{zip:"300",name:"\u9999\u5c71\u5340"}]},{name:"\u65b0\u7af9\u7e23",value:"HsinchuCounty",districts:[{zip:"308",name:"\u5bf6\u5c71\u9109"},{zip:"302",name:"\u7af9\u5317\u5e02"},{zip:"303",name:"\u6e56\u53e3\u9109"},{zip:"304",name:"\u65b0\u8c50\u9109"},{zip:"305",name:"\u65b0\u57d4\u93ae"},{zip:"306",name:"\u95dc\u897f\u93ae"},{zip:"307",name:"\u828e\u6797\u9109"},{zip:"310",name:"\u7af9\u6771\u93ae"},{zip:"311",name:"\u4e94\u5cf0\u9109"},{zip:"312",name:"\u6a6b\u5c71\u9109"},{zip:"313",name:"\u5c16\u77f3\u9109"},{zip:"314",name:"\u5317\u57d4\u9109"},{zip:"315",name:"\u5ce8\u7709\u9109"}]},{name:"\u82d7\u6817\u7e23",value:"MiaoliCounty",districts:[{zip:"350",name:"\u7af9\u5357\u93ae"},{zip:"351",name:"\u982d\u4efd\u5e02"},{zip:"352",name:"\u4e09\u7063\u9109"},{zip:"353",name:"\u5357\u5e84\u9109"},{zip:"354",name:"\u7345\u6f6d\u9109"},{zip:"356",name:"\u5f8c\u9f8d\u93ae"},{zip:"357",name:"\u901a\u9704\u93ae"},{zip:"358",name:"\u82d1\u88e1\u93ae"},{zip:"360",name:"\u82d7\u6817\u5e02"},{zip:"361",name:"\u9020\u6a4b\u9109"},{zip:"362",name:"\u982d\u5c4b\u9109"},{zip:"363",name:"\u516c\u9928\u9109"},{zip:"364",name:"\u5927\u6e56\u9109"},{zip:"365",name:"\u6cf0\u5b89\u9109"},{zip:"366",name:"\u9285\u947c\u9109"},{zip:"367",name:"\u4e09\u7fa9\u9109"},{zip:"368",name:"\u897f\u6e56\u9109"},{zip:"369",name:"\u5353\u862d\u93ae"}]},{name:"\u5f70\u5316\u7e23",value:"ChanghuaCounty",districts:[{zip:"500",name:"\u5f70\u5316\u5e02"},{zip:"502",name:"\u82ac\u5712\u9109"},{zip:"503",name:"\u82b1\u58c7\u9109"},{zip:"504",name:"\u79c0\u6c34\u9109"},{zip:"505",name:"\u9e7f\u6e2f\u93ae"},{zip:"506",name:"\u798f\u8208\u9109"},{zip:"507",name:"\u7dda\u897f\u9109"},{zip:"508",name:"\u548c\u7f8e\u93ae"},{zip:"509",name:"\u4f38\u6e2f\u9109"},{zip:"510",name:"\u54e1\u6797\u5e02"},{zip:"511",name:"\u793e\u982d\u9109"},{zip:"512",name:"\u6c38\u9756\u9109"},{zip:"513",name:"\u57d4\u5fc3\u9109"},{zip:"514",name:"\u6eaa\u6e56\u93ae"},{zip:"515",name:"\u5927\u6751\u9109"},{zip:"516",name:"\u57d4\u9e7d\u9109"},{zip:"520",name:"\u7530\u4e2d\u93ae"},{zip:"521",name:"\u5317\u6597\u93ae"},{zip:"522",name:"\u7530\u5c3e\u9109"},{zip:"523",name:"\u57e4\u982d\u9109"},{zip:"524",name:"\u6eaa\u5dde\u9109"},{zip:"525",name:"\u7af9\u5858\u9109"},{zip:"526",name:"\u4e8c\u6797\u93ae"},{zip:"527",name:"\u5927\u57ce\u9109"},{zip:"528",name:"\u82b3\u82d1\u9109"},{zip:"530",name:"\u4e8c\u6c34\u9109"}]},{name:"\u5357\u6295\u7e23",value:"NantouCounty",districts:[{zip:"540",name:"\u5357\u6295\u5e02"},{zip:"541",name:"\u4e2d\u5bee\u9109"},{zip:"542",name:"\u8349\u5c6f\u93ae"},{zip:"544",name:"\u570b\u59d3\u9109"},{zip:"545",name:"\u57d4\u91cc\u93ae"},{zip:"546",name:"\u4ec1\u611b\u9109"},{zip:"551",name:"\u540d\u9593\u9109"},{zip:"552",name:"\u96c6\u96c6\u93ae"},{zip:"553",name:"\u6c34\u91cc\u9109"},{zip:"555",name:"\u9b5a\u6c60\u9109"},{zip:"556",name:"\u4fe1\u7fa9\u9109"},{zip:"557",name:"\u7af9\u5c71\u93ae"},{zip:"558",name:"\u9e7f\u8c37\u9109"}]},{name:"\u96f2\u6797\u7e23",value:"YunlinCounty",districts:[{zip:"630",name:"\u6597\u5357\u93ae"},{zip:"631",name:"\u5927\u57e4\u9109"},{zip:"632",name:"\u864e\u5c3e\u93ae"},{zip:"633",name:"\u571f\u5eab\u93ae"},{zip:"634",name:"\u8912\u5fe0\u9109"},{zip:"635",name:"\u6771\u52e2\u9109"},{zip:"636",name:"\u81fa\u897f\u9109"},{zip:"637",name:"\u5d19\u80cc\u9109"},{zip:"638",name:"\u9ea5\u5bee\u9109"},{zip:"640",name:"\u6597\u516d\u5e02"},{zip:"643",name:"\u6797\u5167\u9109"},{zip:"646",name:"\u53e4\u5751\u9109"},{zip:"647",name:"\u83bf\u6850\u9109"},{zip:"648",name:"\u897f\u87ba\u93ae"},{zip:"649",name:"\u4e8c\u5d19\u9109"},{zip:"651",name:"\u5317\u6e2f\u93ae"},{zip:"652",name:"\u6c34\u6797\u9109"},{zip:"653",name:"\u53e3\u6e56\u9109"},{zip:"654",name:"\u56db\u6e56\u9109"},{zip:"655",name:"\u5143\u9577\u9109"}]},{name:"\u5609\u7fa9\u7e23",value:"ChiayiCounty",districts:[{zip:"602",name:"\u756a\u8def\u9109"},{zip:"603",name:"\u6885\u5c71\u9109"},{zip:"604",name:"\u7af9\u5d0e\u9109"},{zip:"605",name:"\u963f\u91cc\u5c71\u9109"},{zip:"606",name:"\u4e2d\u57d4\u9109"},{zip:"607",name:"\u5927\u57d4\u9109"},{zip:"608",name:"\u6c34\u4e0a\u9109"},{zip:"611",name:"\u9e7f\u8349\u9109"},{zip:"612",name:"\u592a\u4fdd\u5e02"},{zip:"613",name:"\u6734\u5b50\u5e02"},{zip:"614",name:"\u6771\u77f3\u9109"},{zip:"615",name:"\u516d\u8173\u9109"},{zip:"616",name:"\u65b0\u6e2f\u9109"},{zip:"621",name:"\u6c11\u96c4\u9109"},{zip:"622",name:"\u5927\u6797\u93ae"},{zip:"623",name:"\u6eaa\u53e3\u9109"},{zip:"624",name:"\u7fa9\u7af9\u9109"},{zip:"625",name:"\u5e03\u888b\u93ae"}]},{name:"\u5609\u7fa9\u5e02",value:"Chiayi",districts:[{zip:"600",name:"\u897f\u5340"},{zip:"600",name:"\u6771\u5340"}]},{name:"\u5c4f\u6771\u7e23",value:"PingtungCounty",districts:[{zip:"900",name:"\u5c4f\u6771\u5e02"},{zip:"901",name:"\u4e09\u5730\u9580\u9109"},{zip:"902",name:"\u9727\u81fa\u9109"},{zip:"903",name:"\u746a\u5bb6\u9109"},{zip:"904",name:"\u4e5d\u5982\u9109"},{zip:"905",name:"\u91cc\u6e2f\u9109"},{zip:"906",name:"\u9ad8\u6a39\u9109"},{zip:"907",name:"\u9e7d\u57d4\u9109"},{zip:"908",name:"\u9577\u6cbb\u9109"},{zip:"909",name:"\u9e9f\u6d1b\u9109"},{zip:"911",name:"\u7af9\u7530\u9109"},{zip:"912",name:"\u5167\u57d4\u9109"},{zip:"913",name:"\u842c\u4e39\u9109"},{zip:"920",name:"\u6f6e\u5dde\u93ae"},{zip:"921",name:"\u6cf0\u6b66\u9109"},{zip:"922",name:"\u4f86\u7fa9\u9109"},{zip:"923",name:"\u842c\u5dd2\u9109"},{zip:"924",name:"\u5d01\u9802\u9109"},{zip:"925",name:"\u65b0\u57e4\u9109"},{zip:"926",name:"\u5357\u5dde\u9109"},{zip:"927",name:"\u6797\u908a\u9109"},{zip:"928",name:"\u6771\u6e2f\u93ae"},{zip:"929",name:"\u7409\u7403\u9109"},{zip:"931",name:"\u4f73\u51ac\u9109"},{zip:"932",name:"\u65b0\u5712\u9109"},{zip:"940",name:"\u678b\u5bee\u9109"},{zip:"941",name:"\u678b\u5c71\u9109"},{zip:"942",name:"\u6625\u65e5\u9109"},{zip:"943",name:"\u7345\u5b50\u9109"},{zip:"944",name:"\u8eca\u57ce\u9109"},{zip:"945",name:"\u7261\u4e39\u9109"},{zip:"946",name:"\u6046\u6625\u93ae"},{zip:"947",name:"\u6eff\u5dde\u9109"}]},{name:"\u5b9c\u862d\u7e23",value:"YilanCounty",districts:[{zip:"260",name:"\u5b9c\u862d\u5e02"},{zip:"263",name:"\u58ef\u570d\u9109"},{zip:"261",name:"\u982d\u57ce\u93ae"},{zip:"262",name:"\u7901\u6eaa\u9109"},{zip:"264",name:"\u54e1\u5c71\u9109"},{zip:"265",name:"\u7f85\u6771\u93ae"},{zip:"266",name:"\u4e09\u661f\u9109"},{zip:"267",name:"\u5927\u540c\u9109"},{zip:"268",name:"\u4e94\u7d50\u9109"},{zip:"269",name:"\u51ac\u5c71\u9109"},{zip:"270",name:"\u8607\u6fb3\u93ae"},{zip:"272",name:"\u5357\u6fb3\u9109"},{zip:"290",name:"\u91e3\u9b5a\u81fa"}]},{name:"\u82b1\u84ee\u7e23",value:"HualienCounty",districts:[{zip:"970",name:"\u82b1\u84ee\u5e02"},{zip:"971",name:"\u65b0\u57ce\u9109"},{zip:"972",name:"\u79c0\u6797\u9109"},{zip:"973",name:"\u5409\u5b89\u9109"},{zip:"974",name:"\u58fd\u8c50\u9109"},{zip:"975",name:"\u9cf3\u6797\u93ae"},{zip:"976",name:"\u5149\u5fa9\u9109"},{zip:"977",name:"\u8c50\u6ff1\u9109"},{zip:"978",name:"\u745e\u7a57\u9109"},{zip:"979",name:"\u842c\u69ae\u9109"},{zip:"981",name:"\u7389\u91cc\u93ae"},{zip:"982",name:"\u5353\u6eaa\u9109"},{zip:"983",name:"\u5bcc\u91cc\u9109"}]},{name:"\u81fa\u6771\u7e23",value:"TaitungCounty",districts:[{zip:"950",name:"\u81fa\u6771\u5e02"},{zip:"951",name:"\u7da0\u5cf6\u9109"},{zip:"952",name:"\u862d\u5dbc\u9109"},{zip:"953",name:"\u5ef6\u5e73\u9109"},{zip:"954",name:"\u5351\u5357\u9109"},{zip:"955",name:"\u9e7f\u91ce\u9109"},{zip:"956",name:"\u95dc\u5c71\u93ae"},{zip:"957",name:"\u6d77\u7aef\u9109"},{zip:"958",name:"\u6c60\u4e0a\u9109"},{zip:"959",name:"\u6771\u6cb3\u9109"},{zip:"961",name:"\u6210\u529f\u93ae"},{zip:"962",name:"\u9577\u6ff1\u9109"},{zip:"963",name:"\u592a\u9ebb\u91cc\u9109"},{zip:"964",name:"\u91d1\u5cf0\u9109"},{zip:"965",name:"\u5927\u6b66\u9109"},{zip:"966",name:"\u9054\u4ec1\u9109"}]},{name:"\u91d1\u9580\u7e23",value:"KinmenCounty",districts:[{zip:"890",name:"\u91d1\u6c99\u93ae"},{zip:"891",name:"\u91d1\u6e56\u93ae"},{zip:"892",name:"\u91d1\u5be7\u9109"},{zip:"893",name:"\u91d1\u57ce\u93ae"},{zip:"894",name:"\u70c8\u5dbc\u9109"},{zip:"896",name:"\u70cf\u5775\u9109"}]},{name:"\u6f8e\u6e56\u7e23",value:"PenghuCounty",districts:[{zip:"880",name:"\u99ac\u516c\u5e02"},{zip:"881",name:"\u897f\u5dbc\u9109"},{zip:"882",name:"\u671b\u5b89\u9109"},{zip:"883",name:"\u4e03\u7f8e\u9109"},{zip:"884",name:"\u767d\u6c99\u9109"},{zip:"885",name:"\u6e56\u897f\u9109"}]},{name:"\u9023\u6c5f\u7e23",value:"LienchiangCounty",districts:[{zip:"209",name:"\u5357\u7aff\u9109"},{zip:"210",name:"\u5317\u7aff\u9109"},{zip:"211",name:"\u8392\u5149\u9109"},{zip:"212",name:"\u6771\u5f15\u9109"}]}],U=a(4),H=a.n(U),L=(a(78),a(1));function Y(e){var n=e.siteData,a=e.setPosition,i=e.setInfo,t=function(e){var n;n=e.Position,a([n.PositionLat,n.PositionLon]),i(e)};return n.map((function(e,n){var a={backgroundImage:"url('".concat(e.Picture.PictureUrl1,"')")};return Object(L.jsxs)("div",{className:"cards-wrapper",onClick:function(){return t(e)},"aria-hidden":"true",children:[Object(L.jsx)("div",{className:"picture",style:a,children:Object(L.jsx)("span",{children:e.Name})}),Object(L.jsx)("div",{className:"category",children:e.Class1||"\u7121\u5206\u985e"}),Object(L.jsx)("div",{className:"number",children:n+1})]},e.ID)}))}Y.protoTypes={siteData:H.a.array.isRequired};a(80);function X(){return Object(L.jsxs)("div",{className:"page-chooser",children:[Object(L.jsx)(c.b,{to:"/tourism",children:"Tourism"}),Object(L.jsx)(c.b,{to:"/bike",children:"Bike"}),Object(L.jsx)(c.b,{to:"/bus",children:"Bus"})]})}a(83);function Z(){return Object(L.jsxs)("div",{className:"page-title",children:[Object(L.jsx)("span",{className:"english-title",children:"Travel In Taiwan"}),Object(L.jsx)("span",{className:"chinese-title",children:"\u60a0\u904a\u53f0\u7063"})]})}var $=a(12),F=a.n($);function G(e){var n=e.info,a=e.districts.find((function(e){return e.zip===(null===n||void 0===n?void 0:n.ZipCode)})),i={backgroundImage:"url('".concat(null===n||void 0===n?void 0:n.Picture.PictureUrl1,"')")};return Object(L.jsxs)("div",{className:F.a.infoCard,children:[Object(L.jsxs)("div",{className:F.a.photoWrap,children:[Object(L.jsx)("div",{className:F.a.photo,style:i}),Object(L.jsx)("p",{children:null===n||void 0===n?void 0:n.Picture.PictureDescription1})]}),Object(L.jsxs)("div",{className:F.a.info,children:[Object(L.jsxs)("div",{className:F.a.subTitle,children:[Object(L.jsxs)("p",{children:[null===n||void 0===n?void 0:n.City,null===a||void 0===a?void 0:a.name]}),Object(L.jsx)("span",{children:null===n||void 0===n?void 0:n.Class1})]}),Object(L.jsx)("div",{className:F.a.title,children:null===n||void 0===n?void 0:n.Name}),Object(L.jsxs)("div",{className:F.a.contact,children:[Object(L.jsxs)("p",{children:[Object(L.jsx)("span",{children:null===n||void 0===n?void 0:n.Phone}),Object(L.jsx)("span",{children:null===n||void 0===n?void 0:n.Address})]}),Object(L.jsx)("p",{children:null===n||void 0===n?void 0:n.WebsiteUrl})]}),Object(L.jsxs)("div",{className:F.a.description,children:[Object(L.jsx)("p",{children:"\u666f\u9ede\u4ecb\u7d39"}),null===n||void 0===n?void 0:n.DescriptionDetail]})]})]})}a(84);var Q=a(26),J=a.n(Q),V=a(44),ee=a.n(V);function ne(e){var n=Object(i.useRef)(null);return Object(i.useEffect)((function(){!function(e){e.current=J.a.map("map").setView([25.083,121.555],12),J.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"qiqily/ckvwo0sz52e1514pcvqyw3t08",tileSize:512,zoomOffset:-1,accessToken:B.MY_TOKEN}).addTo(e.current)}(n)}),[]),Object(i.useEffect)((function(){n.current&&n.current.flyTo(e.position,14)}),[e.position]),Object(L.jsx)("div",{id:"map",className:ee.a.map,ref:n})}a(85);function ae(e){var n=e.cntCity,a=e.setCity,i=e.cntDist,t=e.setDist,p=e.setSiteData,m=W.find((function(e){return e.value===n})),c=function(){var e=Object(g.a)(C.a.mark((function e(a){var t,m;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:12,$skip:a},i&&(t.$filter="ZipCode eq '".concat(i,"'")),e.next=4,M.tourism.fetchScenicSpotByCity(n,t);case 4:m=e.sent,p(m.data),b();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{className:"filter",children:[Object(L.jsx)("div",{className:"chooseCity",children:"\u9078\u64c7\u57ce\u5e02"}),Object(L.jsx)("select",{name:"cities",onChange:function(e){a(e.target.value),t(0)},children:W.map((function(e){return Object(L.jsx)("option",{value:e.value,children:e.name},e.value)}))}),Object(L.jsxs)("select",{name:"districts",onChange:function(e){return t(e.target.value)},children:[Object(L.jsx)("option",{value:"",children:"\u4e0d\u9650"}),m.districts.map((function(e){return Object(L.jsx)("option",{value:e.zip,children:e.name},e.zip)}))]}),Object(L.jsx)("button",{className:"search",type:"button",onClick:function(){return c(0)},"aria-label":"Mute volume"})]})}ae.protoTypes={cntCity:H.a.string.isRequired,setCity:H.a.func.isRequired,cntDist:H.a.string.isRequired,setDist:H.a.func.isRequired,setSiteData:H.a.func.isRequired};var ie=[{type:"attractions",displayName:"\u627e\u666f\u9ede"},{type:"tasty",displayName:"\u627e\u7f8e\u98df"},{type:"activity",displayName:"\u627e\u6d3b\u52d5"},{type:"hotel",displayName:"\u627e\u65c5\u5bbf"}];function te(){var e=Object(i.useState)(W[0].value),n=Object(_.a)(e,2),a=n[0],t=n[1],p=Object(i.useState)(),m=Object(_.a)(p,2),c=m[0],s=m[1],r=Object(i.useState)([]),z=Object(_.a)(r,2),o=z[0],u=z[1],l=Object(i.useState)(),d=Object(_.a)(l,2),j=d[0],b=d[1],v=Object(i.useState)(0),f=Object(_.a)(v,2),O=f[0],y=f[1],x=Object(i.useState)([25.083,121.555]),N=Object(_.a)(x,2),T=N[0],S=N[1],P=W.find((function(e){return e.value===a})),D=function(){var e=Object(g.a)(C.a.mark((function e(n){var i,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={$top:12,$skip:n},c&&(i.$filter="ZipCode eq '".concat(c,"'")),e.next=4,M.tourism.fetchScenicSpotByCity(a,i);case 4:t=e.sent,u(t.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(e){var n=O+e;D(12*n),y(n)},B=h();return Object(L.jsxs)("main",{children:[Object(L.jsxs)("div",{className:k.a.mapContainer,children:[Object(L.jsx)(ne,{position:T,siteData:o}),Object(L.jsx)(G,{info:j,districts:P.districts})]}),Object(L.jsxs)("div",{className:k.a.main,children:[Object(L.jsxs)("div",{className:k.a.navbar,children:[Object(L.jsx)(X,{}),Object(L.jsx)(Z,{}),("tourism"===B||""===B)&&Object(L.jsx)(ae,{cntCity:a,setCity:t,cntDist:c,setDist:s,setSiteData:u})]}),Object(L.jsx)("div",{className:k.a.categoryBar,children:ie.map((function(e){var n=w()("".concat(k.a.category),e.type);return Object(L.jsxs)("div",{className:n,children:[Object(L.jsx)("div",{className:k.a.icon,children:"11"}),Object(L.jsx)("div",{className:k.a.name,children:e.displayName})]},e.type)}))}),Object(L.jsx)("div",{className:k.a.cardsContainer,children:Object(L.jsx)(Y,{siteData:o,setPosition:S,setInfo:b})}),Object(L.jsxs)("div",{className:k.a.paging,children:[Object(L.jsx)("button",{type:"button",onClick:function(){return O>0&&I(-1)},children:"\u4e0a\u4e00\u9801"}),Object(L.jsxs)("span",{children:["page",O]}),Object(L.jsx)("button",{type:"button",onClick:function(){return I(1)},children:"\u4e0b\u4e00\u9801"})]})]})]})}function pe(){return Object(L.jsx)("h2",{children:"Bike"})}function me(){return Object(L.jsx)("h2",{children:"Bus"})}var ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(n){var a=n.getCLS,i=n.getFID,t=n.getFCP,p=n.getLCP,m=n.getTTFB;a(e),i(e),t(e),p(e),m(e)}))};a(86);m.a.render(Object(L.jsx)(t.a.StrictMode,{children:Object(L.jsx)(r.a,{store:y,children:Object(L.jsx)(c.a,{children:Object(L.jsxs)(s.c,{children:[Object(L.jsx)(s.a,{path:"/tourism",children:Object(L.jsx)(te,{})}),Object(L.jsx)(s.a,{path:"/bike",children:Object(L.jsx)(pe,{})}),Object(L.jsx)(s.a,{path:"/bus",children:Object(L.jsx)(me,{})}),Object(L.jsx)(s.a,{path:"/",children:Object(L.jsx)(te,{})})]})})})}),document.getElementById("root")),ce()}},[[87,1,2]]]);
//# sourceMappingURL=main.70043195.chunk.js.map