(this["webpackJsonpgoit-react-hw-04-hooks-images-02"]=this["webpackJsonpgoit-react-hw-04-hooks-images-02"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2xi7Q","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3ThhJ"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2SWB8",Modal:"Modal_Modal__2pnGT"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__v0Fwr"}},24:function(e,t,a){e.exports={Button:"Button_Button__89Trg"}},26:function(e,t,a){e.exports={Spinner:"Loader_Spinner__keT9Y"}},32:function(e,t,a){},34:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3i0vQ",SearchForm:"SearchBar_SearchForm__Q86Ma",SearchForm_button:"SearchBar_SearchForm_button__XJGso",SearchForm_button_label:"SearchBar_SearchForm_button_label__2tA-X",SearchForm_input:"SearchBar_SearchForm_input__28pla"}},75:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(22),o=a.n(c),s=(a(32),a(13)),l=a(6),u=a.n(l),i=a(10),m=a(4),h=(a(34),a(7)),b=a.n(h),j=a(0),d=function(e){var t=e.onSetQuery,a=e.query,r=e.onSubmit;return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:r,className:b.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchForm_button,children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{onInput:t,className:b.a.SearchForm_input,type:"text",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},p=a(11),_=a.n(p);var f=function(e){var t=e.url,a=e.alt,r=e.modalUrl,n=e.showModal;return Object(j.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(){return n(r)},src:t,alt:a,className:_.a.ImageGalleryItem_image})})},O=a(23),g=a.n(O),S=function(e){var t=e.images,a=e.showModal;return Object(j.jsx)("ul",{className:g.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL,c=e.tags;return Object(j.jsx)(f,{modalUrl:n,url:r,showModal:a,alt:c},t)}))})},x=a(24),v=a.n(x),y=function(e){var t=e.onLoadMore;return Object(j.jsx)("button",{className:v.a.Button,onClick:t,type:"button",children:"Load more"})},I=a(12),w=a.n(I),F=function(e){var t=e.modalImg,a=e.closeModal;return Object(j.jsx)("div",{onClick:a,className:w.a.Overlay,children:Object(j.jsx)("div",{className:w.a.Modal,children:Object(j.jsx)("img",{src:t,alt:""})})})},G=a(25),M=a.n(G),k=(a(56),a(26)),N=a.n(k),B=function(){return Object(j.jsx)("div",{className:N.a.Spinner,children:Object(j.jsx)(M.a,{type:"Grid",color:"#00BFFF",height:80,width:80})})},L=a(27),E=a.n(L);var T=function(e,t){return E()({method:"GET",url:"https://pixabay.com/api/?key=&key=15900106-2c235e732bb321ca7ec900d93&q=".concat(e,"&page=").concat(t,"&per_page=12")})};var Q=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),o=Object(m.a)(c,2),l=o[0],h=o[1],b=Object(r.useState)([]),p=Object(m.a)(b,2),_=p[0],f=p[1],O=Object(r.useState)(""),g=Object(m.a)(O,2),x=g[0],v=g[1],I=Object(r.useState)(!1),w=Object(m.a)(I,2),G=w[0],M=w[1],k=function(e){"Escape"===e.key&&v("")};Object(r.useEffect)((function(){x?window.addEventListener("keyup",k):window.removeEventListener("keyup",k)}),[x]);var N=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(1),M(!0),e.next=5,T(a,1);case 5:r=e.sent,c=r.data.hits,M(!1),f(c),n(""),h(1),h((function(e){return e+1}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(a,l);case 2:t=e.sent,r=t.data.hits,f((function(e){return[].concat(Object(s.a)(e),Object(s.a)(r))})),h((function(e){return e+1})),window.scrollTo({top:document.documentElement.scrollHeight,left:0,behavior:"smooth"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{query:a,onSetQuery:function(e){n(e.target.value)},onSubmit:N}),Object(j.jsx)(S,{showModal:function(e){v(e)},images:_}),_.length>=12&&Object(j.jsx)(y,{onLoadMore:L}),x&&Object(j.jsx)(F,{closeModal:function(e){"IMG"!==e.target.nodeName&&v("")},modalImg:x}),G&&Object(j.jsx)(B,{})]})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a036e0ae.chunk.js.map