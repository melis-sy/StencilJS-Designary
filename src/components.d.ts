/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DesignaryContact {
        "containerTitle": string;
    }
    interface DesignaryContact2 {
    }
    interface DesignaryEmployee {
        "test": String;
    }
    interface DesignaryFooter {
    }
    interface DesignaryGreyContainer {
        "containerTitle": string;
    }
    interface DesignaryTestimonial {
        "brand": string;
        "person": string;
        "text": string;
    }
    interface DesingarySlideshow {
        "containerTitle": string;
    }
    interface DesingaryTest {
    }
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDesignaryContactElement extends Components.DesignaryContact, HTMLStencilElement {
    }
    var HTMLDesignaryContactElement: {
        prototype: HTMLDesignaryContactElement;
        new (): HTMLDesignaryContactElement;
    };
    interface HTMLDesignaryContact2Element extends Components.DesignaryContact2, HTMLStencilElement {
    }
    var HTMLDesignaryContact2Element: {
        prototype: HTMLDesignaryContact2Element;
        new (): HTMLDesignaryContact2Element;
    };
    interface HTMLDesignaryEmployeeElement extends Components.DesignaryEmployee, HTMLStencilElement {
    }
    var HTMLDesignaryEmployeeElement: {
        prototype: HTMLDesignaryEmployeeElement;
        new (): HTMLDesignaryEmployeeElement;
    };
    interface HTMLDesignaryFooterElement extends Components.DesignaryFooter, HTMLStencilElement {
    }
    var HTMLDesignaryFooterElement: {
        prototype: HTMLDesignaryFooterElement;
        new (): HTMLDesignaryFooterElement;
    };
    interface HTMLDesignaryGreyContainerElement extends Components.DesignaryGreyContainer, HTMLStencilElement {
    }
    var HTMLDesignaryGreyContainerElement: {
        prototype: HTMLDesignaryGreyContainerElement;
        new (): HTMLDesignaryGreyContainerElement;
    };
    interface HTMLDesignaryTestimonialElement extends Components.DesignaryTestimonial, HTMLStencilElement {
    }
    var HTMLDesignaryTestimonialElement: {
        prototype: HTMLDesignaryTestimonialElement;
        new (): HTMLDesignaryTestimonialElement;
    };
    interface HTMLDesingarySlideshowElement extends Components.DesingarySlideshow, HTMLStencilElement {
    }
    var HTMLDesingarySlideshowElement: {
        prototype: HTMLDesingarySlideshowElement;
        new (): HTMLDesingarySlideshowElement;
    };
    interface HTMLDesingaryTestElement extends Components.DesingaryTest, HTMLStencilElement {
    }
    var HTMLDesingaryTestElement: {
        prototype: HTMLDesingaryTestElement;
        new (): HTMLDesingaryTestElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "designary-contact": HTMLDesignaryContactElement;
        "designary-contact2": HTMLDesignaryContact2Element;
        "designary-employee": HTMLDesignaryEmployeeElement;
        "designary-footer": HTMLDesignaryFooterElement;
        "designary-grey-container": HTMLDesignaryGreyContainerElement;
        "designary-testimonial": HTMLDesignaryTestimonialElement;
        "desingary-slideshow": HTMLDesingarySlideshowElement;
        "desingary-test": HTMLDesingaryTestElement;
        "example-component": HTMLExampleComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DesignaryContact {
        "containerTitle"?: string;
    }
    interface DesignaryContact2 {
    }
    interface DesignaryEmployee {
        "test"?: String;
    }
    interface DesignaryFooter {
    }
    interface DesignaryGreyContainer {
        "containerTitle"?: string;
    }
    interface DesignaryTestimonial {
        "brand"?: string;
        "person"?: string;
        "text"?: string;
    }
    interface DesingarySlideshow {
        "containerTitle"?: string;
    }
    interface DesingaryTest {
    }
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "designary-contact": DesignaryContact;
        "designary-contact2": DesignaryContact2;
        "designary-employee": DesignaryEmployee;
        "designary-footer": DesignaryFooter;
        "designary-grey-container": DesignaryGreyContainer;
        "designary-testimonial": DesignaryTestimonial;
        "desingary-slideshow": DesingarySlideshow;
        "desingary-test": DesingaryTest;
        "example-component": ExampleComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "designary-contact": LocalJSX.DesignaryContact & JSXBase.HTMLAttributes<HTMLDesignaryContactElement>;
            "designary-contact2": LocalJSX.DesignaryContact2 & JSXBase.HTMLAttributes<HTMLDesignaryContact2Element>;
            "designary-employee": LocalJSX.DesignaryEmployee & JSXBase.HTMLAttributes<HTMLDesignaryEmployeeElement>;
            "designary-footer": LocalJSX.DesignaryFooter & JSXBase.HTMLAttributes<HTMLDesignaryFooterElement>;
            "designary-grey-container": LocalJSX.DesignaryGreyContainer & JSXBase.HTMLAttributes<HTMLDesignaryGreyContainerElement>;
            "designary-testimonial": LocalJSX.DesignaryTestimonial & JSXBase.HTMLAttributes<HTMLDesignaryTestimonialElement>;
            "desingary-slideshow": LocalJSX.DesingarySlideshow & JSXBase.HTMLAttributes<HTMLDesingarySlideshowElement>;
            "desingary-test": LocalJSX.DesingaryTest & JSXBase.HTMLAttributes<HTMLDesingaryTestElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
