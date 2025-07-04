// // Modal dialog functionality
// let previousFocusElement = null;
// function showModal(event) {
//   const target = event? event.target : null;
//   previousFocusElement = target ? target : document.activeElement;
//   const modal = document.getElementById("confirmModal");
//   modal.classList.add("show");
//   modal.focus();

//   const inactiveTime = 2500; // 2.5 seconds
//   startTimeoutWarning(inactiveTime);
// }

// function hideModal() {
//   console.log("Hiding modal");
//   const modal = document.getElementById("confirmModal");
//   console.log("Hiding modal", previousFocusElement);
//   previousFocusElement?.focus();

//   modal.classList.remove("show");
//   clearTimeoutWarnings();
// }

// function confirmAction() {
//   const overlay = document.getElementById("accessibilityOverlay");
//   overlay.classList.add("hidden");
//   console.log("Confirm modal", previousFocusElement);
//   previousFocusElement?.focus();
//   localStorage.setItem(OVERLAY_REMOVED_KEY, "true");

//   const modal = document.getElementById("confirmModal");
//   modal.classList.remove("show");
//   clearTimeoutWarnings();

//   announceToScreenReader(
//     "Overlay removed! The visual interface is now available."
//   );
// }

// function cancelModal() {
//   hideModal();
// }
