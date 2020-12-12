(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__h2w2e"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__103qd",Modal:"Modal_Modal__2eLXo"}},13:function(e,t,a){e.exports={defaultNotifeImages:"DefaultNotifeImages_defaultNotifeImages__vlriF",imageClass:"DefaultNotifeImages_imageClass__3yzBk"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3EuHn",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__rF-uv"}},17:function(e,t,a){e.exports={Button:"LoadMore_Button__1hy5Z"}},19:function(e,t,a){e.exports={loaderSpinner:"Loader_loaderSpinner__1uVuU"}},25:function(e,t,a){},26:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),o=a.n(n),c=a(3),s=a.n(c),i=(a(25),a(14)),l=a(4),u=a(5),h=a(8),m=a(7),d=(a(26),a(9)),g=a.n(d),p=a(6),f=(a(15),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleChange=function(t){e.setState({search:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.search.trim()?(e.props.onSubmit(e.state),e.reset()):p.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438!")},e.reset=function(){e.setState({search:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:g.a.Searchbar,children:Object(r.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(r.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:g.a.SearchFormInput,type:"text",value:this.state.search,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component)),b=a(11),j=a.n(b),v=a(16),O=a.n(v);function S(e){var t=e.userImageURL,a=e.altImage;return Object(r.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItemImage})}function y(e){var t=e.pictures,a=e.onClick;return Object(r.jsx)("ul",{className:j.a.ImageGallery,children:t&&t.map((function(e,t){var n=e.webformatURL,o=e.largeImageURL,c=e.tags;return Object(r.jsx)("li",{className:j.a.ImageGalleryItem,onClick:function(){return a(o,c)},children:Object(r.jsx)(S,{userImageURL:n,altImage:c})},t)}))})}var I=a(12),_=a.n(I),x=document.querySelector("#modal-root"),w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverleyClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(r.jsx)("div",{className:_.a.Overlay,onClick:this.handleOverleyClick,children:Object(r.jsx)("div",{className:_.a.Modal,children:this.props.children})}),x)}}]),a}(n.Component),F=a(17),k=a.n(F);function C(e){var t=e.onClick;return Object(r.jsx)("button",{type:"button",className:k.a.Button,onClick:function(){return t()},children:"Load more"})}var N={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("19046001-7d44b7f00f708df4674bb235b","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044e\u0442"))}))}},M=a(18),L=a.n(M),B=a(19),G=a.n(B);function U(e){return Object(r.jsx)(L.a,{className:G.a.loaderSpinner,type:"Puff",color:"#00BFFF",height:100,width:100})}var E=a(13),A=a.n(E),D=a.p+"static/media/upps.1afb9e96.jpg";function H(e){var t=e.imageURL,a=void 0===t?D:t;return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{className:A.a.imageClass,src:a,alt:"upps",width:"400"}),Object(r.jsx)("div",{className:A.a.defaultNotifeImages,children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"})]})}var R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={picture:[],search:null,showModal:!1,loading:!1,error:null,largeImage:"",altImage:"",pageFetch:1},e.toggleModal=function(t,a){e.setState((function(e){return{showModal:!e.showModal,largeImage:t,altImage:a}}))},e.formSubmitHendler=function(t){var a=t.search;a!==e.state.search?e.setState({picture:[],search:a,pageFetch:1}):p.b.error("\u0412\u044b \u0443\u0436\u0435 \u0432\u0432\u0435\u043b\u0438 \u044d\u0442\u043e \u0438\u043c\u044f!")},e.fetshSearch=function(){e.setState({loading:!0});var t=e.state,a=t.search,r=t.pageFetch;N.fetchImages(a,r).then((function(t){return e.setState((function(a){return{picture:e.state.picture===[]?t.hits:[].concat(Object(i.a)(a.picture),Object(i.a)(t.hits))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.onLoadMoreSkroll(),e.setState((function(e){return{loading:!1,pageFetch:e.pageFetch+1}}))}))},e.onLoadMoreSkroll=function(){if(e.state.pageFetch>=2){var t={top:null,behavior:"smooth"};t.top=window.pageYOffset+document.documentElement.clientHeight,setTimeout((function(){window.scrollTo(t)}),1e3)}},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetshSearch()}},{key:"render",value:function(){var e=this.state,t=e.picture,a=e.showModal,n=e.error,o=e.largeImage,c=e.pageFetch,s=e.search,i=e.altImage,l=e.loading;return Object(r.jsxs)("div",{className:"App",children:[n&&Object(r.jsx)("h1",{children:n.massage}),Object(r.jsx)(f,{onSubmit:this.formSubmitHendler}),Object(r.jsx)(y,{pictures:t,onClick:this.toggleModal}),this.state.loading&&Object(r.jsx)(U,{}),0!==t.length&&c>=2&&Object(r.jsx)(C,{onClick:this.fetshSearch}),s&&0===t.length&&!1===l&&Object(r.jsx)(H,{}),a&&Object(r.jsx)(w,{onClose:this.toggleModal,children:Object(r.jsx)("img",{src:o,alt:i})}),Object(r.jsx)(p.a,{position:"bottom-right",autoClose:3e3})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1IkM4",SearchForm:"Searchbar_SearchForm__FrHK4",SearchFormButton:"Searchbar_SearchFormButton__3M2Nz",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__gpgM_",SearchFormInput:"Searchbar_SearchFormInput__2vvFA"}}},[[48,1,2]]]);
//# sourceMappingURL=main.0432eb35.chunk.js.map