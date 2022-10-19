import { createBehavior } from '@area17/a17-behaviors';

const showAlertLazy = createBehavior('showAlertLazy',
    {
        alert(event) {
            window.alert('Hello world lazyloaded!');
            console.log(event);
        },
        load(event) {
            this.$btnLoad.insertAdjacentHTML('afterend', '<div data-behavior-lazy="showAlertAfterAjax"><button data-showalertafterajax-btn>Click me!</button></div>');
        }
    },
    {
        init() {
            this.$btn = this.getChild('btn');
            this.$btn.addEventListener('click', this.alert);
            this.$btnLoad = this.getChild('load');
            this.$btnLoad.addEventListener('click', this.load);
        },
        destroy() {
            this.$btn.removeEventListener('click', this.alert);
        }
    }
);

export default showAlertLazy;