/// <reference types="mithril" />
import * as Mithril from "mithril";

/**
 * Link a list of children to a key, replacing them if it ever changes.
 */
export default function link(
    key: PropertyKey,
    ...children: Array<Mithril.Children>
): Mithril.Vnode<any, any>;
