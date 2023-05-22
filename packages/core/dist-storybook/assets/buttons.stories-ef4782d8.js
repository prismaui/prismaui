const r={title:"Button",component:"prm-button",tags:["autodocs"],render:({slot:t,...o})=>l({slot:t,...o}),argTypes:{onclick:{action:"button clicked"},variant:{description:"button look",options:["primary","secondary","success","warning","danger","info","light","dark"],control:{type:"select"}},size:{description:"button size",options:["xs","sm","md","lg","xl"],control:{type:"select"}},round:{description:"button roundness",options:["none","sm","md","lg","xl","full"],control:{type:"select"}},disabled:{description:"button disabled state",control:{type:"boolean"}},outline:{description:"button outline state",control:{type:"boolean"}},customclass:{description:"custom class for button",control:{type:"text"}},ariacontrols:{description:"aria-controls attribute",control:{type:"text"}},loading:{description:"loading state text",control:{type:"text"}},slot:{description:"Button text",control:{type:"text"}}}},l=({...t})=>{const o=document.createElement("prm-button");return o.variant=t.variant,o.size=t.size,o.round=t.round,o.disabled=t.disabled,o.outline=t.outline,o.customclass=t.customclass,o.ariacontrols=t.ariacontrols,o.loading=t.loading,o.innerHTML=t.slot,o.addEventListener("click",t.onclick),o},a=t=>`
    <prm-button
      variant="${t.variant}"
      size="${t.size}"
      round="${t.round}"
      disabled="${t.disabled}"
      outline="${t.outline}"
      customclass="${t.customclass}"
      ariacontrols="${t.ariacontrols}"
      onclick="${t.onclick}"
      loading="${t.loading}"
    >${t.slot}</prm-button>
  `,n=a.bind({});n.args={variant:"primary",size:"md",round:"md",disabled:!1,outline:!1,customclass:"",ariacontrols:"",loading:"",slot:"Button Text",onclick:()=>console.log("Button clicked")};var e,s,i;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:'args => `\n    <prm-button\n      variant="${args.variant}"\n      size="${args.size}"\n      round="${args.round}"\n      disabled="${args.disabled}"\n      outline="${args.outline}"\n      customclass="${args.customclass}"\n      ariacontrols="${args.ariacontrols}"\n      onclick="${args.onclick}"\n      loading="${args.loading}"\n    >${args.slot}</prm-button>\n  `',...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const c=["Example"];export{n as Example,c as __namedExportsOrder,r as default};
//# sourceMappingURL=buttons.stories-ef4782d8.js.map
