/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PrmButton {
        "customclass": string;
        "disabled": boolean;
        "loading": string;
        "name": string;
        "outline": boolean;
        "round": 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "variant": 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    }
    interface PrmButtonGroup {
        "round": 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    }
    interface PrmDrawer {
        "animation": | 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
        "toggle": boolean;
        "variant": 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    }
    interface PrmPlayground {
    }
    interface PrmPopup {
        "animation": 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
        "isOpen": boolean;
        "size": 'sm' | 'md' | 'lg' | 'xl' | 'full';
    }
    interface PrmToast {
        "animation": 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
        "closable": boolean;
        "message": string;
        "position": 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        "show": boolean;
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "timer": number;
        "variant": 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    }
}
export interface PrmButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPrmButtonElement;
}
export interface PrmButtonGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPrmButtonGroupElement;
}
export interface PrmDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPrmDrawerElement;
}
export interface PrmToastCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPrmToastElement;
}
declare global {
    interface HTMLPrmButtonElement extends Components.PrmButton, HTMLStencilElement {
    }
    var HTMLPrmButtonElement: {
        prototype: HTMLPrmButtonElement;
        new (): HTMLPrmButtonElement;
    };
    interface HTMLPrmButtonGroupElement extends Components.PrmButtonGroup, HTMLStencilElement {
    }
    var HTMLPrmButtonGroupElement: {
        prototype: HTMLPrmButtonGroupElement;
        new (): HTMLPrmButtonGroupElement;
    };
    interface HTMLPrmDrawerElement extends Components.PrmDrawer, HTMLStencilElement {
    }
    var HTMLPrmDrawerElement: {
        prototype: HTMLPrmDrawerElement;
        new (): HTMLPrmDrawerElement;
    };
    interface HTMLPrmPlaygroundElement extends Components.PrmPlayground, HTMLStencilElement {
    }
    var HTMLPrmPlaygroundElement: {
        prototype: HTMLPrmPlaygroundElement;
        new (): HTMLPrmPlaygroundElement;
    };
    interface HTMLPrmPopupElement extends Components.PrmPopup, HTMLStencilElement {
    }
    var HTMLPrmPopupElement: {
        prototype: HTMLPrmPopupElement;
        new (): HTMLPrmPopupElement;
    };
    interface HTMLPrmToastElement extends Components.PrmToast, HTMLStencilElement {
    }
    var HTMLPrmToastElement: {
        prototype: HTMLPrmToastElement;
        new (): HTMLPrmToastElement;
    };
    interface HTMLElementTagNameMap {
        "prm-button": HTMLPrmButtonElement;
        "prm-button-group": HTMLPrmButtonGroupElement;
        "prm-drawer": HTMLPrmDrawerElement;
        "prm-playground": HTMLPrmPlaygroundElement;
        "prm-popup": HTMLPrmPopupElement;
        "prm-toast": HTMLPrmToastElement;
    }
}
declare namespace LocalJSX {
    interface PrmButton {
        "customclass"?: string;
        "disabled"?: boolean;
        "loading"?: string;
        "name"?: string;
        "onOnclick"?: (event: PrmButtonCustomEvent<MouseEvent>) => void;
        "outline"?: boolean;
        "round"?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "variant"?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    }
    interface PrmButtonGroup {
        "onOnclick"?: (event: PrmButtonGroupCustomEvent<MouseEvent>) => void;
        "round"?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    }
    interface PrmDrawer {
        "animation"?: | 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
        "onClose"?: (event: PrmDrawerCustomEvent<void>) => void;
        "toggle"?: boolean;
        "variant"?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    }
    interface PrmPlayground {
    }
    interface PrmPopup {
        "animation"?: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
        "isOpen"?: boolean;
        "size"?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    }
    interface PrmToast {
        "animation"?: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
        "closable"?: boolean;
        "message"?: string;
        "onClose"?: (event: PrmToastCustomEvent<void>) => void;
        "position"?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        "show"?: boolean;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "timer"?: number;
        "variant"?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    }
    interface IntrinsicElements {
        "prm-button": PrmButton;
        "prm-button-group": PrmButtonGroup;
        "prm-drawer": PrmDrawer;
        "prm-playground": PrmPlayground;
        "prm-popup": PrmPopup;
        "prm-toast": PrmToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "prm-button": LocalJSX.PrmButton & JSXBase.HTMLAttributes<HTMLPrmButtonElement>;
            "prm-button-group": LocalJSX.PrmButtonGroup & JSXBase.HTMLAttributes<HTMLPrmButtonGroupElement>;
            "prm-drawer": LocalJSX.PrmDrawer & JSXBase.HTMLAttributes<HTMLPrmDrawerElement>;
            "prm-playground": LocalJSX.PrmPlayground & JSXBase.HTMLAttributes<HTMLPrmPlaygroundElement>;
            "prm-popup": LocalJSX.PrmPopup & JSXBase.HTMLAttributes<HTMLPrmPopupElement>;
            "prm-toast": LocalJSX.PrmToast & JSXBase.HTMLAttributes<HTMLPrmToastElement>;
        }
    }
}
