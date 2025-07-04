# Accessible .JS (by Jemima Abu)

> Codepen examples: https://codepen.io/Jemimaabu/pens/public

## Introduction

Making accessible web pages benefits everyone, not just people with disabilities. Accessible design creates robust web applications that work reliably across different devices, network conditions, and user preferences. When you build with accessibility in mind, you create experiences that are faster, more resilient to slow internet connections, and usable by the widest possible audience.

Accessibility is fundamentally about inclusive design - ensuring that your web applications work for users regardless of their abilities, the technology they use, or their browsing environment.

## Core Principles

### Focus Management
- **Focus the element the user needs to see.** When showing a popup or modal, ensure it receives focus immediately so users don't need to navigate through the entire page to interact with it.
- **Preserve focus context.** When a modal closes, return focus to the element that triggered it, maintaining the user's position in the page flow.

### Semantic HTML First
- **Leverage native HTML functionality.** Use semantic elements and built-in browser features before reaching for JavaScript solutions. This approach improves performance by eliminating JavaScript dependencies and ensures functionality remains intact even when styles fail to load.
- **Examples of HTML-first approaches:**
    - **Use `<details>` and `<summary>` elements** for collapsible content instead of custom JavaScript accordions
    - **Leverage `popover` attributes** for modal and sidebar functionality instead of building from scratch
    - **Use `popovertarget` and `popoveraction` attributes** for declarative modal triggers without JavaScript event handlers
    - **Utilize the `:has()` pseudo-selector** for parent styling based on child state (e.g., styling forms based on input validation)
    - **Implement `popover="hint"`** for enhanced select menus with improved screen reader support
    - **Use `animation-timeline` CSS property** for scroll-triggered animations without JavaScript interference
    - **Leverage `<base-select>` components** for customizable select elements with built-in accessibility features

### Code Examples

- [Accordion with animated height](https://codepen.io/Jemimaabu/pen/vEYRbRy)
- [Sidebar component with popover role="region"](https://codepen.io/Jemimaabu/pen/vEOdKgJ)
- [Popover Sidebar with start animation](https://codepen.io/Jemimaabu/pen/bNdLeRm)
- [Basic Tooltip implementation](https://codepen.io/Jemimaabu/pen/zxGRoqm)
- [Advanced Tooltips with anchor positioning](https://codepen.io/Jemimaabu/pen/myJXxYj) - uses `position-area` and `popover` attributes




## Testing Tools

- **WAVE:** Web accessibility evaluation tool for identifying accessibility issues
- **Lighthouse:** Built-in Chrome tool for baseline accessibility scanning
- **Web Accessibility VSCode Extension:** Real-time accessibility feedback during development

## Accessibility-First Development Workflow

1. **Design Phase:** Create accessible designs following WCAG guidelines from the start
2. **Development Phase:** Implement accessibility checklist at every stage
3. **Testing Phase:** Use automated tools and manual testing with assistive technologies
4. **Continuous Improvement:** Make accessibility a deliberate, ongoing consideration

## Key Takeaway

**Default to semantic HTML over JavaScript implementations.** Native HTML elements come with built-in accessibility features, keyboard navigation, and screen reader support that would require significant effort to recreate with JavaScript.