import { createBehavior } from '@area17/a17-behaviors';

const showAlert = createBehavior('showAlert',
    {
        alert(event) {
            window.alert('Hello world!');
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

export default showAlert;