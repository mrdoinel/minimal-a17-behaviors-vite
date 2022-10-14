// JS Behaviors
import * as Behaviors from './behaviors'

import { manageBehaviors } from '@area17/a17-behaviors'

window.A17 = {}
document.addEventListener('DOMContentLoaded', function () {
    // expose manageBehaviors
    window.A17.behaviors = manageBehaviors
    // init behaviors!
    window.A17.behaviors.init(Behaviors)
})