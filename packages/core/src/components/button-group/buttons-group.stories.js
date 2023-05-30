export default {
    title: 'Button Group',
    component: 'prm-button-group',
    tags: ['autodocs'],
    render: ({ slot, ...args }) => {
      return createButtonGroup({ slot, ...args })
    },
    argTypes: {
      onclick: { action: 'button group clicked' },
      round: {
        description: 'button roundness',
        options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
        control: { type: 'select' }
      },
    },
  };
  
  const createButtonGroup = ({ ...args }) => {
    const buttonGroup = document.createElement('prm-button-group');
    buttonGroup.round = args.round;
    buttonGroup.addEventListener('click', args.onclick);
    return buttonGroup;
  }
  
  const Template = (args) => `
    <prm-button-group
      round="${args.round}"
      onclick="${args.onclick}"
    >
    <prm-button name="btn1" variant="success">Button 3</prm-button>
      <prm-button name="btn2" variant="warning">Button 3</prm-button>
      <prm-button name="btn3" variant="danger">Button 3</prm-button>
    </prm-button-group>
  `;
  
  export const Example = Template.bind({})
  
  Example.args = {
    round: 'md',
    onclick: () => console.log('Button Group clicked')
  };