/**
 * Use this when you want to use `m.redraw` to link from streams or other
 * synchronously-updating cells.
 *
 * Note: call `redraw.ready` in `oncreate` to unlock it.
 *
 * Also, you may call `redraw.lock` in `onbeforeupdate` and `redraw.ready` in
 * `onupdate`, to avoid unnecessary rendering calls.
 */

import mithril from "mithril"

// Ideally, this would use a hook to know when Mithril starts/finishes
// redrawing.
var p = Promise.resolve()

export default function makeRedraw(state) {
    var ready = false

    function redraw(vnode) {
        if (ready) {
            if (state != null) state._redraw(vnode)
            else p.then(mithril.redraw)
        }
    }

    redraw.ready = function () {
        ready = true
    }

    return redraw
}
