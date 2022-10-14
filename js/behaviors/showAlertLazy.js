import { createBehavior } from '@area17/a17-behaviors';

const showAlertLazy = createBehavior('showAlertLazy',
    {
        alert(event) {
            window.alert('Hello world lazyloaded!');
            console.log(event);
        }
    },
    {
        init() {
            this.$node.addEventListener('click', this.alert);
        },
        destroy() {
            this.$node.removeEventListener('click', this.alert);
        }
    }
);

export default showAlertLazy;