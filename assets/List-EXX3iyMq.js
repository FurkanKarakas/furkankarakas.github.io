import{d as S,g as F,c as T,s as U,_ as h,u as z,h as N,j as P,n as I,o as k}from"./index-r9oOfICA.js";var t={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=Symbol.for("react.element"),x=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),q=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),M;M=Symbol.for("react.module.reference");function s(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case $:switch(e=e.type,e){case i:case a:case c:case f:case p:return e;default:switch(e=e&&e.$$typeof,e){case q:case d:case l:case y:case m:case u:return e;default:return o}}case x:return o}}}t.ContextConsumer=d;t.ContextProvider=u;t.Element=$;t.ForwardRef=l;t.Fragment=i;t.Lazy=y;t.Memo=m;t.Portal=x;t.Profiler=a;t.StrictMode=c;t.Suspense=f;t.SuspenseList=p;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return s(e)===d};t.isContextProvider=function(e){return s(e)===u};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$};t.isForwardRef=function(e){return s(e)===l};t.isFragment=function(e){return s(e)===i};t.isLazy=function(e){return s(e)===y};t.isMemo=function(e){return s(e)===m};t.isPortal=function(e){return s(e)===x};t.isProfiler=function(e){return s(e)===a};t.isStrictMode=function(e){return s(e)===c};t.isSuspense=function(e){return s(e)===f};t.isSuspenseList=function(e){return s(e)===p};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===a||e===c||e===f||e===p||e===A||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===u||e.$$typeof===d||e.$$typeof===l||e.$$typeof===M||e.getModuleId!==void 0)};t.typeOf=s;const B=S.createContext({}),O=B;function V(e){return F("MuiList",e)}T("MuiList",["root","padding","dense","subheader"]);const W=["children","className","component","dense","disablePadding","subheader"],D=e=>{const{classes:o,disablePadding:r,dense:n,subheader:b}=e;return k({root:["root",!r&&"padding",n&&"dense",b&&"subheader"]},V,o)},G=U("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,!r.disablePadding&&o.padding,r.dense&&o.dense,r.subheader&&o.subheader]}})(({ownerState:e})=>h({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),H=S.forwardRef(function(o,r){const n=z({props:o,name:"MuiList"}),{children:b,className:L,component:C="ul",dense:g=!1,disablePadding:_=!1,subheader:j}=n,w=N(n,W),R=S.useMemo(()=>({dense:g}),[g]),v=h({},n,{component:C,dense:g,disablePadding:_}),E=D(v);return P.jsx(O.Provider,{value:R,children:P.jsxs(G,h({as:C,className:I(E.root,L),ref:r,ownerState:v},w,{children:[j,b]}))})}),K=H;export{O as L,K as a};
