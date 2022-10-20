import { createBehavior } from '@area17/a17-behaviors';

const showAlertLazy = createBehavior('showAlertLazy',
    {
        alert(event) {
            window.alert('Hello world lazyloaded!');
            console.log(event);
        },
        load() {
            this.$container.innerHTML = `
            <div data-behavior-lazy="showAlertAfterAjax">
                <button data-showalertafterajax-btn>Click me!</button>
            </div>
            <div data-behavior="singularAdded">
                Loading behavior
            </div>
            `;
            
            // Test
            // Add a behavior using public add method
            if (window.A17 && window.A17.behaviors && typeof window.A17.behaviors.add === 'function') {
                const singularAdded = createBehavior('singularAdded', {},
                {
                    init() {
                        this.$node.innerHTML = '<p>singularAdded Behavior Added Successfully</p>';
                    },
                    destroy() {
                        alert('singularAdded Behavior destroyed');
                    }
                });
                window.A17.behaviors.add(singularAdded);
            }
        },
        empty() {
            this.$container.innerHTML = '';
        }
    },
    {
        init() {
            this.$btn = this.getChild('btn');
            this.$btn.addEventListener('click', this.alert);
            this.$btnLoad = this.getChild('load');
            this.$btnDelete = this.getChild('delete');
            this.$container = this.getChild('container');

            this.$btnLoad.addEventListener('click', this.load);
            this.$btnDelete.addEventListener('click', this.empty);
        },
        destroy() {
            this.$btn.removeEventListener('click', this.alert);
            this.$btnDelete.removeEventListener('click', this.empty);
        }
    }
);

export default showAlertLazy;