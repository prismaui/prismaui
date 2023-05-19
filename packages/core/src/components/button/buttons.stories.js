export default {
    title: 'Button',
    component: 'prm-button',
    tags: ['autodocs'],
    render: ({ slot, ...args }) => {
      return createButton({ slot, ...args })
    },
    argTypes: {
      onclick: { action: 'button clicked' },
      variant: {
        description: 'button look',
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        control: { type: 'select' }
      },
      size: {
        description: 'button size',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        control: { type: 'select' }
      },
      round: {
        description: 'button roundness',
        options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
        control: { type: 'select' }
      },
      disabled: {
        description: 'button disabled state',
        control: { type: 'boolean' }
      },
      outline: {
        description: 'button outline state',
        control: { type: 'boolean' }
      },
      customclass: {
        description: 'custom class for button',
        control: { type: 'text' }
      },
      ariacontrols: {
        description: 'aria-controls attribute',
        control: { type: 'text' }
      },
      loading: {
        description: 'loading state text',
        control: { type: 'text' }
      },
      slot: {
        description: 'Button text',
        control: { type: 'text' }
      }
    },
  };
  
  const createButton = ({ ...args }) => {
    const button = document.createElement('prm-button');
    button.variant = args.variant;
    button.size = args.size;
    button.round = args.round;
    button.disabled = args.disabled;
    button.outline = args.outline;
    button.customclass = args.customclass;
    button.ariacontrols = args.ariacontrols;
    button.loading = args.loading;
    button.innerHTML = args.slot;
    button.addEventListener('click', args.onclick);
    return button;
  }
  
  const Template = (args) => `
    <prm-button
      variant="${args.variant}"
      size="${args.size}"
      round="${args.round}"
      disabled="${args.disabled}"
      outline="${args.outline}"
      customclass="${args.customclass}"
      ariacontrols="${args.ariacontrols}"
      onclick="${args.onclick}"
      loading="${args.loading}"
    >${args.slot}</prm-button>
  `;
  
  export const Example = Template.bind({})
  
  Example.args = {
    variant: 'primary',
    size: 'md',
    round: 'md',
    disabled: false,
    outline: false,
    customclass: '',
    ariacontrols: '',
    loading: '',
    slot: 'Button Text',
    onclick: () => console.log('Button clicked')
  };