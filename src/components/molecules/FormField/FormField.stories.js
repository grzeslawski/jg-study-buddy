import FormField from './FormField';

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'login',
};

export const LongLabel = Template.bind({});

LongLabel.args = {
  label: 'Very long label to see how it looks',
};
