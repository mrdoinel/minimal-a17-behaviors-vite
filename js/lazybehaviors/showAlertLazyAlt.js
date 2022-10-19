import { createBehavior } from '@area17/a17-behaviors';

const showAlertLazyAlt = createBehavior('showAlertLazyAlt',
    {
        alert(event) {
            window.alert('Hello world lazyloaded alternate!');
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

export default showAlertLazyAlt;