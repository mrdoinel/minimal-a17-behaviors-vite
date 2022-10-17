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
            this.$btn = this.getChild('btn');
            this.$btn.addEventListener('click', this.alert);
        },
        destroy() {
            this.$btn.removeEventListener('click', this.alert);
        }
    }
);

export default showAlertLazy;