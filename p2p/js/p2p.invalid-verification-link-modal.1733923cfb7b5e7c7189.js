(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([[24],{183:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>l});var t=n(2609),r=n.n(t)()((function(e){return e[1]}));r.push([e.id,".invalid-verification-link-modal{align-items:center;display:flex;flex-direction:column}.invalid-verification-link-modal--footer{align-self:center}.invalid-verification-link-modal--text{margin:2.4rem 0}\n",""]);const l=r},4542:(e,i,n)=>{var t=n(6062),r=n(183);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);var l={insert:"head",singleton:!1};t(r,l);e.exports=r.locals||{}},7438:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>f});var t=n(8156),r=n(5099),l=n.n(r),a=n(1336),o=n(7674),c=n(2322),d=n(4047),s=function(e){var i=e.error_message,n=e.order_id,r=(0,c.m)().order_store,l=(0,d.M)(),s=l.hideModal,m=l.is_modal_open;return t.createElement(a.Modal,{has_close_icon:!0,is_open:m,renderTitle:function(){return t.createElement(t.Fragment,null)},toggleModal:s,width:"440px"},t.createElement(a.Modal.Body,{className:"invalid-verification-link-modal"},t.createElement(a.Icon,{icon:"IcEmailVerificationLinkInvalid",size:"128"}),t.createElement(a.Text,{className:"invalid-verification-link-modal--text",color:"prominent",size:"s",weight:"bold"},t.createElement(o.Xx,{i18n_default_text:"Invalid verification link"})),t.createElement(a.Text,{align:"center",color:"prominent",size:"s"},i)),t.createElement(a.Modal.Footer,{className:"invalid-verification-link-modal--footer"},t.createElement(a.Button,{large:!0,primary:!0,onClick:function(){s(),r.confirmOrderRequest(n)}},t.createElement(o.Xx,{i18n_default_text:"Get new link"}))))};s.propTypes={error_message:l().string,order_id:l().string};const m=s;n(4542);const f=m}}]);