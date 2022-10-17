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
            this.$btn = this.getChild('btn');
            this.$btn.addEventListener('click', this.alert);

            // Test alias and import of a behavior inside another behavior which is working with Vite
            import('@/lazybehaviors/showAlertLazy.js').then(module => {
                this.addSubBehavior(module.default);
            })
        },
        destroy() {
            this.$btn.removeEventListener('click', this.alert);
        }
    }
);

export default showAlert;