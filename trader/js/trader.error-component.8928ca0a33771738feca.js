"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["error-component"],{"./src/App/Components/Elements/Errors/index.js":(e,r,o)=>{o.r(r),o.d(r,{default:()=>u});var t=o("../../node_modules/prop-types/index.js"),s=o.n(t),i=o("react"),n=o.n(i),l=o("@deriv/components"),a=o("@deriv/shared"),c=o("@deriv/translations"),d=function(e){var r=e.header,o=e.message,t=e.is_dialog,s=e.redirect_label,i=e.redirectOnClick,d=e.should_show_refresh,u=void 0===d||d?(0,c.localize)("Please refresh this page to continue."):"";return t?n().createElement(l.Dialog,{title:r||(0,c.localize)("There was an error"),is_visible:!0,confirm_button_text:s||(0,c.localize)("Ok"),onConfirm:i||function(){return location.reload()}},o||(0,c.localize)("Sorry, an error occured while processing your request.")):n().createElement(l.PageError,{header:r||(0,c.localize)("Something’s not right"),messages:o?[o,u]:[(0,c.localize)("Sorry, an error occured while processing your request."),u],redirect_urls:[a.routes.trade],redirect_labels:[s||(0,c.localize)("Refresh")],buttonOnClick:i||function(){return location.reload()}})};d.propTypes={header:s().string,is_dialog:s().bool,message:s().oneOfType([s().node,s().string,s().object]),redirect_label:s().string,redirectOnClick:s().func,should_show_refresh:s().bool,type:s().string};const u=d}}]);