(this.webpackJsonppokemons=this.webpackJsonppokemons||[]).push([[0],{128:function(e,t,a){e.exports={wrapper:"stylePokeLoader_wrapper__2begc",pokeball:"stylePokeLoader_pokeball__jmlCk",frames:"stylePokeLoader_frames__1wjFv"}},132:function(e,t,a){e.exports={grid:"stylePokeTypeSelector_grid__3B5zx",Defolt:"stylePokeTypeSelector_Defolt__20WLp"}},208:function(e,t,a){e.exports={HEADER:"styleHeader_HEADER__1-W_Q"}},220:function(e,t,a){e.exports={grid:"stylePokeList_grid__2zTsK",Defolt:"stylePokeList_Defolt__3AuWy"}},230:function(e,t,a){e.exports=a(621)},234:function(e,t,a){},235:function(e,t,a){},47:function(e,t,a){e.exports={grid:"stylePokePage_grid__2xDVj",Defolt:"stylePokePage_Defolt__2N7Dw"}},621:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),l=(a(234),a(235),a(208)),i=a.n(l),s=a(128),m=a.n(s);function u(){return o.a.createElement("div",null,o.a.createElement("div",{className:m.a.wrapper},o.a.createElement("div",{className:m.a.pokeball})))}var p=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:i.a.HEADER},o.a.createElement("h1",null,"PokeDex")))},f=(a(236),a(33)),d=a(6),E=a(53),k=a.n(E),v=a(47),g=a.n(v),b=a(79),y=a.n(b),_=a(77),C=a(629),D=a(630);function h(e){var t=e.gotoNextPage,a=e.gotoPrevPage,n=e.pageNumber;return o.a.createElement("div",{className:y.a.container},o.a.createElement("div",{className:y.a.pDiv},a&&o.a.createElement(_.a,{type:"primary",shape:"circle",onClick:a},o.a.createElement(C.a,null))),o.a.createElement("div",{className:y.a.pDiv},o.a.createElement(_.a,{disabled:!0},n)),o.a.createElement("div",{className:y.a.pDiv},t&&o.a.createElement(_.a,{type:"primary",shape:"circle",onClick:t},o.a.createElement(D.a,null))))}var j=a(626),O=a(627),P=a(631),S=a(222),N=a.n(S),B=a(68),x=a.n(B),w=a(80),A=a.n(w),F=a(625),T=a(624);o.a.createContext();function H(e){var t=e.pName,a=e.pType,c=e.TYPE_COLORS,r=e.pImg,l=(e.PokeAbilities,e.PokeHeight),i=e.PokeBaseStats,s=e.PokeStatsName,m=Object(n.useState)(!0),u=Object(d.a)(m,2),p=u[0],f=u[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{width:700,title:t,visible:p,onCancel:function(){f(!1)},footer:null},o.a.createElement("div",{className:A.a.content},o.a.createElement("div",{className:A.a.imgAndStats},o.a.createElement("div",{className:A.a.imgDiv},o.a.createElement("img",{src:r,style:{height:"219px"}})),o.a.createElement("div",{className:A.a.statsDiv},o.a.createElement("div",null,o.a.createElement(T.a,{trailColor:"violet",strokeLinecap:"square",type:"dashboard",percent:2*l,format:function(e){return"".concat(l/10," m")},status:"normal"})),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("div",{style:{minWidth:"90px",display:"flex",flexDirection:"column",justifyContent:"space-between"}},s.map((function(e){return o.a.createElement("p",{style:{fontSize:"13px",margin:"0"}},e)}))),o.a.createElement("div",null,i.map((function(e){return o.a.createElement(T.a,{trailColor:"violet",percent:e/2,format:function(t){return"".concat(e)},status:"normal"})})))))),o.a.createElement("div",null,a.map((function(e){return o.a.createElement("p",{style:{background:"#".concat(c[e]),color:"#fff",padding:"5px",textAlign:"center",fontSize:"25px",margin:"0"}},e)}))))))}var L=a(215),I={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6",unknown:"00BBCD",shadow:"B8C0EA"};function z(e){var t=e.p,a=Object(n.useState)(t),c=Object(d.a)(a,2),r=c[0],l=(c[1],Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"+r)),i=Object(d.a)(l,2),s=i[0],m=(i[1],Object(n.useState)(null)),u=Object(d.a)(m,2),p=u[0],f=u[1],E=Object(n.useState)(),v=Object(d.a)(E,2),g=v[0],b=v[1],y=Object(n.useState)([]),_=Object(d.a)(y,2),C=_[0],D=_[1],h=Object(n.useState)([]),j=Object(d.a)(h,2),O=j[0],P=(j[1],Object(n.useState)()),S=Object(d.a)(P,2),N=S[0],B=S[1],w=Object(n.useState)([]),A=Object(d.a)(w,2),F=A[0],T=A[1],z=Object(n.useState)([]),R=Object(d.a)(z,2),W=R[0],J=R[1],M=Object(n.useState)(!0),V=Object(d.a)(M,2),K=(V[0],V[1]);return Object(n.useEffect)((function(){K(!0),k.a.get(s).then((function(e){K(!1),b(e.data.id),f(e.data.sprites.front_default),B(e.data.height),D(e.data.types.map((function(e){return e.type.name}))),T(e.data.stats.map((function(e){return e.base_stat}))),J(e.data.stats.map((function(e){return e.stat.name})))}))}),[s]),o.a.createElement("div",{className:x.a.pokecard,onClick:function(){Object(L.a)(o.a.createElement(H,{TYPE_COLORS:I,pName:r,pUrl:s,pType:C,pID:g,pImg:p,PokeAbilities:O,PokeHeight:N,PokeBaseStats:F,PokeStatsName:W}))}},o.a.createElement("div",{className:x.a.CardHeader},o.a.createElement("div",{className:x.a.idDiv},o.a.createElement("p",null,g)),o.a.createElement("div",{className:x.a.nameDiv},r)),o.a.createElement("img",{src:p}),C.map((function(e){return o.a.createElement("div",{className:x.a.typeDiv,key:e},o.a.createElement("p",{style:{color:"#".concat(I[e])}},e))})))}var R=a(220),W=a.n(R),J=function(e){var t=e.Pokemons,a=e.search;return o.a.createElement("div",{className:W.a.grid},t.filter((function(e){return e.includes(a)})).map((function(e){return o.a.createElement("div",{key:e},o.a.createElement(z,{key:e,p:e}))})))},M=a(132),V=a.n(M),K={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6",unknown:"00BBCD",shadow:"B8C0EA"},Q=function(e){var t=e.ontypeClick,a=e.onclearTypeClick,c=Object(n.useState)([]),r=Object(d.a)(c,2),l=r[0],i=r[1];return Object(n.useEffect)((function(){k.a.get("https://pokeapi.co/api/v2/type").then((function(e){i(e.data.results)}))}),["https://pokeapi.co/api/v2/type"]),o.a.createElement("div",null,o.a.createElement(_.a,{className:V.a.Defolt,style:{color:"violet"},onClick:function(){return a()}},"\xd7"),l.map((function(e){return o.a.createElement(_.a,{className:V.a.Defolt,style:{background:"#".concat(K[e.name]),color:"violet"},onClick:function(){return t(e.url)}},e.name)})))};function Y(){var e=j.a.Panel,t=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"),a=Object(d.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(null),E=Object(d.a)(p,2),v=E[0],b=E[1],y=Object(n.useState)([]),C=Object(d.a)(y,2),D=C[0],S=C[1],B=Object(n.useState)(!0),x=Object(d.a)(B,2),w=x[0],A=x[1],F=Object(n.useState)(1),T=Object(d.a)(F,2),H=T[0],L=T[1],I=Object(n.useState)(""),z=Object(d.a)(I,2),R=z[0],W=z[1],M=Object(n.useState)(!0),V=Object(d.a)(M,2),K=V[0],Y=V[1];function q(){r(s),L(H+1)}function G(){r(v),L(H-1)}function U(){Y(!0),r("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050"),L(1)}function X(){Y(!0),W(""),r("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"),L(1)}return Object(n.useEffect)((function(){var e;return A(!0),k.a.get(c,{canselToken:new k.a.CancelToken((function(t){return e=t}))}).then((function(e){A(!1),m(e.data.next),b(e.data.previous),S(K?e.data.results.map((function(e){return e.name})):e.data.pokemon.map((function(e){return e.pokemon.name})))})),function(){return e()}}),[c]),w?o.a.createElement(u,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{placeholder:"Search Pokemon",defaultValue:""!==R?R:null,onSearch:function(){return""!==R?U():r(c),function(e){return W(e)}},onChange:function(e){return W(e.target.value),""===R?r(c):U()},className:g.a.Defolt}),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(j.a,{ghost:!0,style:Object(f.a)({background:"grey",borderRadius:"20px",border:"2px solid violet"},"border","none")},o.a.createElement(e,{header:"Select Poke Card In Store",key:"1",className:g.a.Defolt},o.a.createElement(_.a,{onClick:U,className:g.a.Defolt},"All"),o.a.createElement(_.a,{onClick:function(){Y(!0),W(""),r("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"),L(1)},className:g.a.Defolt},"10"),o.a.createElement(_.a,{onClick:X,className:g.a.Defolt},"20"),o.a.createElement(_.a,{onClick:function(){Y(!0),W(""),r("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"),L(1)},className:g.a.Defolt},"50")),o.a.createElement(e,{header:"Select Poke Type",key:"2",className:g.a.Defolt},o.a.createElement(Q,{ontypeClick:function(e){Y(!1),r(e)},onclearTypeClick:function(){Y(!0),X()}})))),o.a.createElement(h,{gotoNextPage:s?q:null,gotoPrevPage:v?G:null,pageNumber:H})),o.a.createElement(J,{Pokemons:D,search:R}),o.a.createElement(h,{gotoNextPage:s?q:null,gotoPrevPage:v?G:null,pageNumber:H}),o.a.createElement(O.a,null,o.a.createElement(P.a,{style:{fontSize:"45px",color:"violet"}})))}var q=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports={pokecard:"stylePokeCard_pokecard__1gsF4",idDiv:"stylePokeCard_idDiv__22G6V",CardHeader:"stylePokeCard_CardHeader__2_RJh",nameDiv:"stylePokeCard_nameDiv__2z3VQ",typeDiv:"stylePokeCard_typeDiv__2vAEt"}},79:function(e,t,a){e.exports={container:"stylePagination_container__2lTaJ"}},80:function(e,t,a){e.exports={content:"stylePokeInfoModal_content__oXaKz",imgAndStats:"stylePokeInfoModal_imgAndStats__S-v-3",imgDiv:"stylePokeInfoModal_imgDiv__3_PkE"}}},[[230,1,2]]]);
//# sourceMappingURL=main.a14c4ca8.chunk.js.map