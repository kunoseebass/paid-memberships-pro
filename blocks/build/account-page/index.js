!function(){"use strict";var e=window.wp.blocks;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.apply(this,arguments)}var o=window.wp.element,r=window.wp.i18n,t=window.wp.blockEditor,l=window.wp.components,c=JSON.parse('{"u2":"pmpro/account-page"}');(0,e.registerBlockType)(c.u2,{icon:{background:"#FFFFFF",foreground:"#1A688B",src:"admin-users"},edit:function(e){let{attributes:c,setAttributes:i}=e;const a=(0,t.useBlockProps)({});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(t.InspectorControls,null,(0,o.createElement)(l.PanelBody,null,(0,o.createElement)(l.CheckboxControl,{label:(0,r.__)('Show "My Memberships" Section',"paid-memberships-pro"),checked:c.membership,onChange:e=>i({membership:e})})),(0,o.createElement)(l.PanelBody,null,(0,o.createElement)(l.CheckboxControl,{label:(0,r.__)('Show "Profile" Section',"paid-memberships-pro"),checked:c.profile,onChange:e=>i({profile:e})})),(0,o.createElement)(l.PanelBody,null,(0,o.createElement)(l.CheckboxControl,{label:(0,r.__)('Show "Invoices" Section',"paid-memberships-pro"),checked:c.invoices,onChange:e=>i({invoices:e})})),(0,o.createElement)(l.PanelBody,null,(0,o.createElement)(l.CheckboxControl,{label:(0,r.__)('Show "Member Links" Section',"paid-memberships-pro"),checked:c.links,onChange:e=>i({links:e})}))),(0,o.createElement)("div",n({className:"pmpro-block-element"},a),(0,o.createElement)("span",{className:"pmpro-block-title"},(0,r.__)("Paid Memberships Pro","paid-memberships-pro")),(0,o.createElement)("span",{className:"pmpro-block-subtitle"},(0,r.__)("Membership Account Page","paid-memberships-pro"))))}})}();