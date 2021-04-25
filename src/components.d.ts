/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DesignaryContact {
    }
    interface DesignaryEmployee {
        "test": String;
    }
    interface DesignaryGreyContainer {
    }
    interface DesignarySlider {
    }
    interface DesignaryTestimonial {
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
    interface HTMLDesignaryEmployeeElement extends Components.DesignaryEmployee, HTMLStencilElement {
    }
    var HTMLDesignaryEmployeeElement: {
        prototype: HTMLDesignaryEmployeeElement;
        new (): HTMLDesignaryEmployeeElement;
    };
    interface HTMLDesignaryGreyContainerElement extends Components.DesignaryGreyContainer, HTMLStencilElement {
    }
    var HTMLDesignaryGreyContainerElement: {
        prototype: HTMLDesignaryGreyContainerElement;
        new (): HTMLDesignaryGreyContainerElement;
    };
    interface HTMLDesignarySliderElement extends Components.DesignarySlider, HTMLStencilElement {
    }
    var HTMLDesignarySliderElement: {
        prototype: HTMLDesignarySliderElement;
        new (): HTMLDesignarySliderElement;
    };
    interface HTMLDesignaryTestimonialElement extends Components.DesignaryTestimonial, HTMLStencilElement {
    }
    var HTMLDesignaryTestimonialElement: {
        prototype: HTMLDesignaryTestimonialElement;
        new (): HTMLDesignaryTestimonialElement;
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
        "designary-employee": HTMLDesignaryEmployeeElement;
        "designary-grey-container": HTMLDesignaryGreyContainerElement;
        "designary-slider": HTMLDesignarySliderElement;
        "designary-testimonial": HTMLDesignaryTestimonialElement;
        "example-component": HTMLExampleComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DesignaryContact {
    }
    interface DesignaryEmployee {
        "test"?: String;
    }
    interface DesignaryGreyContainer {
    }
    interface DesignarySlider {
    }
    interface DesignaryTestimonial {
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
        "designary-employee": DesignaryEmployee;
        "designary-grey-container": DesignaryGreyContainer;
        "designary-slider": DesignarySlider;
        "designary-testimonial": DesignaryTestimonial;
        "example-component": ExampleComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "designary-contact": LocalJSX.DesignaryContact & JSXBase.HTMLAttributes<HTMLDesignaryContactElement>;
            "designary-employee": LocalJSX.DesignaryEmployee & JSXBase.HTMLAttributes<HTMLDesignaryEmployeeElement>;
            "designary-grey-container": LocalJSX.DesignaryGreyContainer & JSXBase.HTMLAttributes<HTMLDesignaryGreyContainerElement>;
            "designary-slider": LocalJSX.DesignarySlider & JSXBase.HTMLAttributes<HTMLDesignarySliderElement>;
            "designary-testimonial": LocalJSX.DesignaryTestimonial & JSXBase.HTMLAttributes<HTMLDesignaryTestimonialElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
