# Accessible .JS (by Jemima Abu)

## Tips

- **Focus the element the user needs to see.** For example, if you show a popup to the user, make sure to focus it, so the user does not need to navigate the entire web page to focus the popup buttons.

- **Keep the tab index where the user left off.** For example, if the user clicks on the popup button, return the focus to the previous focused element instead of going back to the start element of the page.

- **Don't use JavaScript when there are HTML semantic elements that already do the work accessibly.** For example, use popover attributes instead of building modalShow and modalHide functionality with JavaScript, and then `popovertarget` and `popoveraction` for modal triggers.

## Testing for Accessibility

- WAVE: Web accessibility evaluation tool
- Lighthouse: for base scan
- Web Accessibility VSCode Extension

## Accessibility First Development

- Create accessible designs and content according to WCAG standards
- Implement an accessibility checklist at every stage of development
- Make a deliberate effort to care about accessibility

