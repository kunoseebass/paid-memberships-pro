!function(){"use strict";var e,n={358:function(){var e=window.wp.blocks;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}var r=window.wp.element,o=window.wp.i18n,t=window.wp.blockEditor,i=window.wp.components,l=JSON.parse('{"u2":"pmpro/account-page"}');(0,e.registerBlockType)(l.u2,{edit:function(e){let{attributes:l,setAttributes:c}=e;const a=(0,t.useBlockProps)({});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(t.InspectorControls,null,(0,r.createElement)(i.PanelBody,null,(0,r.createElement)(i.CheckboxControl,{label:(0,o.__)('Show "My Memberships" Section',"paid-memberships-pro"),checked:l.membership,onChange:e=>c({membership:e})})),(0,r.createElement)(i.PanelBody,null,(0,r.createElement)(i.CheckboxControl,{label:(0,o.__)('Show "Profile" Section',"paid-memberships-pro"),checked:l.profile,onChange:e=>c({profile:e})})),(0,r.createElement)(i.PanelBody,null,(0,r.createElement)(i.CheckboxControl,{label:(0,o.__)('Show "Invoices" Section',"paid-memberships-pro"),checked:l.invoices,onChange:e=>c({invoices:e})})),(0,r.createElement)(i.PanelBody,null,(0,r.createElement)(i.CheckboxControl,{label:(0,o.__)('Show "Member Links" Section',"paid-memberships-pro"),checked:l.links,onChange:e=>c({links:e})}))),(0,r.createElement)("div",n({className:"pmpro-block-element"},a),(0,r.createElement)("span",{className:"pmpro-block-title"},(0,o.__)("Paid Memberships Pro","paid-memberships-pro")),(0,r.createElement)("span",{className:"pmpro-block-subtitle"},(0,o.__)("Membership Account Page","paid-memberships-pro"))))}})}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,e=[],o.O=function(n,r,t,i){if(!r){var l=1/0;for(p=0;p<e.length;p++){r=e[p][0],t=e[p][1],i=e[p][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||l>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(c=!1,i<l&&(l=i));if(c){e.splice(p--,1);var s=t();void 0!==s&&(n=s)}}return n}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,t,i]},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={302:0,661:0};o.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,i,l=r[0],c=r[1],a=r[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(t in c)o.o(c,t)&&(o.m[t]=c[t]);if(a)var p=a(o)}for(n&&n(r);s<l.length;s++)i=l[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},r=self.webpackChunkpaid_memberships_pro=self.webpackChunkpaid_memberships_pro||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var t=o.O(void 0,[661],(function(){return o(358)}));t=o.O(t)}();