import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MyButton',
  props: {
    label: {
      type: String as PropType<string>,
      required: true,
    },
    onClick: {
      type: Function as PropType<() => void>,
      required: false,
    },
  },
  setup(props) {
    return () => <button onClick={props.onClick}>{props.label}</button>;
  },
});
