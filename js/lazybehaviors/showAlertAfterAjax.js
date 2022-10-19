import { createBehavior } from '@area17/a17-behaviors';

const showAlertAfterAjax = createBehavior('showAlertAfterAjax',
    {
        alert(event) {
            window.alert('Hello world lazyloaded after ajax call!');
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

export default showAlertAfterAjax;