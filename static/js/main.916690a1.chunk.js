(this["webpackJsonptest-omertex"]=this["webpackJsonptest-omertex"]||[]).push([[0],{255:function(e,s,t){},256:function(e,s,t){"use strict";t.r(s);var r=t(0),a=t.n(r),n=t(41),l=t.n(n),i=t(9),d=t(133),c=t(31),o=t(293),u=t(301),h=t(297),b=t(298),j=t(296),w=t(302),A=t(1);var v=function(e){var s=e.disabled,t=e.handleChange,a=e.ethernet,n=e.values,l=e.setEthernetStateIpAddress,d=e.ethernetStateIpAddress,c=e.wirelessStateIpAddress,o=e.setWirelessStateIpAddress,u=e.errors,v=Object(r.useState)("DHCP"),f=Object(i.a)(v,2),D=f[0],S=f[1],O=function(e){S(e),"DHCP"===e?a?l(!0):o(!0):a?l(!1):o(!1)};return Object(A.jsxs)("div",{className:"ip-container",children:[Object(A.jsx)("div",{className:"radio-group",children:Object(A.jsxs)(h.a,{disabled:s,"aria-label":"settings",name:"controlled-radio-buttons-group",value:D,children:[Object(A.jsx)(b.a,{value:"DHCP",control:Object(A.jsx)(j.a,{}),onChange:function(e){return O(e.target.defaultValue)},label:"Obtain an IP address automatically (DHCP/BootP)"}),Object(A.jsx)(b.a,{value:"IP",control:Object(A.jsx)(j.a,{}),onChange:function(e){return O(e.target.defaultValue)},label:"Use the following IP adress:"})]})}),Object(A.jsxs)("div",{className:"fields-group",children:[Object(A.jsxs)("div",{className:"field-container",children:[Object(A.jsx)(w.a,{helperText:"IP adress *",disabled:a?d:c,required:!0,id:a?"ethernetIpAdress":"wirelessIpAdress",value:a?n.ethernetIpAdress:n.wirelessIpAdress,onChange:t}),Object(A.jsx)("div",{className:"required",children:a?!d&&(null===u||void 0===u?void 0:u.ethernetIpAdress):!c&&(null===u||void 0===u?void 0:u.wirelessIpAdress)})]}),Object(A.jsxs)("div",{className:"field-container",children:[Object(A.jsx)(w.a,{helperText:"Subnet Mask *",disabled:a?d:c,required:!0,id:a?"ethernetSubnetMask":"wirelessSubnetMask",value:a?n.ethernetSubnetMask:n.wirelessSubnetMask,onChange:t}),Object(A.jsx)("div",{className:"required",children:a?!d&&(null===u||void 0===u?void 0:u.ethernetSubnetMask):!c&&(null===u||void 0===u?void 0:u.wirelessSubnetMask)})]}),Object(A.jsx)("div",{className:"field-container",children:Object(A.jsx)(w.a,{helperText:"Default Gateway",disabled:a?d:c,id:a?"ethernetDefaultGateway":"wirelessDefaultGateway",value:a?n.ethernetDefaultGateway:n.wirelessDefaultGateway,onChange:t})})]})]})};var f=function(e){var s=e.handleChange,t=e.ethernet,a=e.values,n=e.ethernetStateDnsAddress,l=e.setEthernetStateDnsAddress,d=e.wirelessStateDnsAddress,c=e.setWirelessStateDnsAddress,o=e.errors,u=Object(r.useState)("automatically"),v=Object(i.a)(u,2),f=v[0],D=v[1],S=function(e){D(e),"automatically"===e?t?l(!0):c(!0):t?l(!1):c(!1)};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"radio-group",children:Object(A.jsxs)(h.a,{"aria-label":"settings",name:"controlled-radio-buttons-group",value:f,children:[Object(A.jsx)(b.a,{value:"automatically",control:Object(A.jsx)(j.a,{}),onChange:function(e){return S(e.target.defaultValue)},label:"Obtain DNS server address automatically"}),Object(A.jsx)(b.a,{value:"DS",control:Object(A.jsx)(j.a,{}),onChange:function(e){return S(e.target.defaultValue)},label:"Use the following DS server adress:"})]})}),Object(A.jsxs)("div",{className:"fields-group",children:[Object(A.jsxs)("div",{className:"field-container",children:[Object(A.jsx)(w.a,{helperText:"Preferred DNS server *",disabled:t?n:d,required:!0,id:t?"ethernetPreferredDnsAdress":"wirelessPreferredDnsAdress",value:t?a.ethernetPreferredDnsAdress:a.wirelessPreferredDnsAdress,onChange:s}),Object(A.jsx)("div",{className:"required",children:t?!n&&(null===o||void 0===o?void 0:o.ethernetPreferredDnsAdress):!d&&(null===o||void 0===o?void 0:o.wirelessPreferredDnsAdress)})]}),Object(A.jsx)("div",{className:"field-container",children:Object(A.jsx)(w.a,{helperText:"Alternative DNS server ",disabled:t?n:d,id:t?"ethernetAlternativeDnsAdress":"wirelessAlternativeDnsAdress",value:t?a.ethernetAlternativeDnsAdress:a.wirelessAlternativeDnsAdress,onChange:s})})]})]})};var D=function(e){var s=e.formik,t=e.setEthernetStateIpAddress,r=e.ethernetStateIpAddress,a=e.ethernetStateDnsAddress,n=e.setEthernetStateDnsAddress;return Object(A.jsx)("div",{className:"form-group",children:Object(A.jsxs)(u.a,{component:"fieldset",children:[Object(A.jsx)(o.a,{component:"legend",children:"Ethernet Settings"}),Object(A.jsx)(v,{handleChange:s.handleChange,onSubmit:s.onSubmit,values:s.values,ethernet:!0,ethernetStateIpAddress:r,setEthernetStateIpAddress:t,errors:s.errors}),Object(A.jsx)(f,{handleChange:s.handleChange,values:s.values,ethernet:!0,setEthernetStateDnsAddress:n,ethernetStateDnsAddress:a,errors:s.errors})]})})},S=t(300),O=t(294),m=t(299),x=t(307);var p=function(e){var s=e.handleChange,t=e.values,r=e.securityKeyEnable,a=e.setSecurityKeyEnable,n=e.errors,l=e.wifiEnable;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"field-container-wireless",children:[Object(A.jsxs)(O.a,{className:"wifi-select",name:"wirelessNetworkName",value:t.wirelessNetworkName,onChange:s,children:[Object(A.jsx)(m.a,{value:"Cisco",children:"Cisco"}),Object(A.jsx)(m.a,{value:"Huawei",children:"Huawei"}),Object(A.jsx)(m.a,{value:"HomeNetwork",children:"HomeNetwork"})]}),Object(A.jsx)(x.a,{children:"Wireless Network Name *"}),Object(A.jsx)("div",{className:"required",children:!l&&n.wirelessNetworkName})]}),Object(A.jsx)(b.a,{onChange:function(){return a(!r)},control:Object(A.jsx)(S.a,{}),label:"Enable Wireless Security:"}),Object(A.jsx)("div",{className:"fields-group",children:Object(A.jsxs)("div",{className:"field-container",children:[Object(A.jsx)(w.a,{helperText:"Security Key *",disabled:r,name:"wirelessNetworkSecurity",value:t.wirelessNetworkSecurity,onChange:s}),Object(A.jsx)("div",{className:"required",children:!r&&n.wirelessNetworkSecurity})]})})]})};var N=function(e){var s=e.formik,t=e.wirelessStateIpAddress,r=e.setWirelessStateIpAddress,a=e.wirelessStateDnsAddress,n=e.setWirelessStateDnsAddress,l=e.wifiEnable,i=e.setWifiEnable,d=e.securityKeyEnable,c=e.setSecurityKeyEnable,h=function(){i(!l),c(!0),r(!0),n(!0)};return Object(A.jsx)("div",{className:"form-group",children:Object(A.jsxs)(u.a,{component:"fieldset",children:[Object(A.jsx)(o.a,{component:"legend",children:"Wireless Settings"}),Object(A.jsx)("div",{className:"wireless-checkbox",style:{padding:"0 0 30px 0"},children:Object(A.jsx)(b.a,{value:l,control:Object(A.jsx)(S.a,{}),label:"Enable wifi:",onChange:function(){return h()}})}),Object(A.jsxs)(u.a,{disabled:l,children:[Object(A.jsx)(p,{handleChange:s.handleChange,values:s.values,securityKeyEnable:d,setSecurityKeyEnable:c,errors:s.errors,wifiEnable:l}),Object(A.jsx)(v,{handleChange:s.handleChange,values:s.values,ethernet:!1,wirelessStateIpAddress:t,setWirelessStateIpAddress:r,errors:s.errors,handleWifiEnabled:h}),Object(A.jsx)(f,{handleChange:s.handleChange,values:s.values,ethernet:!1,wirelessStateDnsAddress:a,setWirelessStateDnsAddress:n,errors:s.errors,handleWifiEnabled:h})]})]})})},P=/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,y=/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/,k=/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/;t(255);var I=function(){var e=Object(r.useState)(!0),s=Object(i.a)(e,2),t=s[0],a=s[1],n=Object(r.useState)(!0),l=Object(i.a)(n,2),o=l[0],u=l[1],h=Object(r.useState)(!0),b=Object(i.a)(h,2),j=b[0],w=b[1],v=Object(r.useState)(!0),f=Object(i.a)(v,2),S=f[0],O=f[1],m=Object(r.useState)(!0),x=Object(i.a)(m,2),p=x[0],I=x[1],g=Object(r.useState)(!0),C=Object(i.a)(g,2),E=C[0],M=C[1],H=c.a().shape({ethernetIpAdress:j?null:c.b().required("Required files").matches(P,"Incorrect IP address"),wirelessIpAdress:E?null:c.b().required("Required files").matches(P,"Incorrect IP address"),ethernetSubnetMask:j?null:c.b().required("Required files").matches(y,"Incorrect Subnet Mask address"),wirelessSubnetMask:E?null:c.b().required("Required files").matches(y,"Incorrect Subnet Mask address"),ethernetPreferredDnsAdress:S?null:c.b().required("Required files").matches(k,"Incorrect DNS address"),wirelessPreferredDnsAdress:p?null:c.b().required("Required files").matches(k,"Incorrect DNS address"),wirelessNetworkName:t?null:c.b().required("Select Network Name"),wirelessNetworkSecurity:o?null:c.b().required("Key is required")}),q=Object(d.a)({initialValues:{ethernetIpAdress:"",ethernetSubnetMask:"",ethernetDefaultGateway:"",ethernetPreferredDnsAdress:"",ethernetAlternativeDnsAdress:"",wirelessNetworkName:"",wirelessNetworkSecurity:"",wirelessIpAdress:"",wirelessSubnetMask:"",wirelessDefaultGateway:"",wirelessPreferredDnsAdress:"",wirelessAlternativeDnsAdress:""},validationSchema:H,onSubmit:function(e,s){!function(e){var s=e.wifiEnable,t=e.values,r=e.actions,a=e.wirelessStateDnsAddress,n=e.wirelessStateIpAddress,l=e.ethernetStateDnsAddress,i=e.ethernetStateIpAddress,d=e.securityKeyEnable;s?(console.log(JSON.stringify({ethernetIpAdress:t.ethernetIpAdress&&!i?t.ethernetIpAdress:"DHCP/BootP",ethernetSubnetMask:t.ethernetSubnetMask&&!i?t.ethernetSubnetMask:"DHCP/BootP",ethernetDefaultGateway:t.ethernetDefaultGateway&&!i?t.ethernetDefaultGateway:"DHCP/BootP",ethernetPreferredDnsAdress:t.ethernetPreferredDnsAdress&&!l?t.ethernetPreferredDnsAdress:"DHCP/BootP",ethernetAlternativeDnsAdress:t.ethernetAlternativeDnsAdress&&!l?t.ethernetAlternativeDnsAdress:"DHCP/BootP"})),r.resetForm({values:{ethernetIpAdress:"",ethernetSubnetMask:"",ethernetDefaultGateway:"",ethernetPreferredDnsAdress:"",ethernetAlternativeDnsAdress:"",wirelessNetworkName:"",wirelessNetworkSecurity:"",wirelessIpAdress:"",wirelessSubnetMask:"",wirelessDefaultGateway:"",wirelessPreferredDnsAdress:"",wirelessAlternativeDnsAdress:""}})):(console.log(JSON.stringify({ethernetIpAdress:t.ethernetIpAdress&&!i?t.ethernetIpAdress:"DHCP/BootP",ethernetSubnetMask:t.ethernetSubnetMask&&!i?t.ethernetSubnetMask:"DHCP/BootP",ethernetDefaultGateway:t.ethernetDefaultGateway&&!i?t.ethernetDefaultGateway:"DHCP/BootP",ethernetPreferredDnsAdress:t.ethernetPreferredDnsAdress&&!l?t.ethernetPreferredDnsAdress:"DHCP/BootP",ethernetAlternativeDnsAdress:t.ethernetAlternativeDnsAdress&&!l?t.ethernetAlternativeDnsAdress:"DHCP/BootP",wirelessNetworkName:t.wirelessNetworkName?t.wirelessNetworkName:"DHCP/BootP",wirelessNetworkSecurity:t.wirelessNetworkSecurity&&!d?t.wirelessNetworkSecurity:"DHCP/BootP",wirelessIpAdress:t.wirelessIpAdress&&!n?t.wirelessIpAdress:"DHCP/BootP",wirelessSubnetMask:t.wirelessSubnetMask&&!n?t.wirelessSubnetMask:"DHCP/BootP",wirelessDefaultGateway:t.wirelessDefaultGateway&&!n?t.wirelessDefaultGateway:"DHCP/BootP",wirelessPreferredDnsAdress:t.wirelessPreferredDnsAdress&&!a?t.wirelessPreferredDnsAdress:"DHCP/BootP",wirelessAlternativeDnsAdress:t.wirelessAlternativeDnsAdress&&!a?t.wirelessAlternativeDnsAdress:"DHCP/BootP"})),r.resetForm({values:{ethernetIpAdress:"",ethernetSubnetMask:"",ethernetDefaultGateway:"",ethernetPreferredDnsAdress:"",ethernetAlternativeDnsAdress:"",wirelessNetworkName:"",wirelessNetworkSecurity:"",wirelessIpAdress:"",wirelessSubnetMask:"",wirelessDefaultGateway:"",wirelessPreferredDnsAdress:"",wirelessAlternativeDnsAdress:""}}))}({values:e,wifiEnable:t,actions:s,wirelessStateDnsAddress:p,wirelessStateIpAddress:E,ethernetStateDnsAddress:S,ethernetStateIpAddress:j})}});return Object(A.jsx)("div",{className:"wrapper-container",children:Object(A.jsxs)("div",{className:"container-form",children:[Object(A.jsxs)("div",{className:"container-content",children:[Object(A.jsx)(D,{formik:q,ethernetStateIpAddress:j,ethernetStateDnsAddress:S,setEthernetStateIpAddress:w,setEthernetStateDnsAddress:O}),Object(A.jsx)(N,{formik:q,wirelessStateIpAddress:E,setWirelessStateIpAddress:M,wirelessStateDnsAddress:p,setWirelessStateDnsAddress:I,wifiEnable:t,setWifiEnable:a,securityKeyEnable:o,setSecurityKeyEnable:u})]}),Object(A.jsxs)("div",{className:"btns",children:[Object(A.jsx)("button",{type:"submit",onClick:function(e){return q.handleSubmit(e)},className:"submit",children:"Save"}),Object(A.jsx)("button",{onClick:function(){return q.handleReset()},className:"cancel",children:"Cancel"})]})]})})};l.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(I,{})}),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.916690a1.chunk.js.map