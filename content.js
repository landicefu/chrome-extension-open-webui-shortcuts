// Fixed selectors and shortcut
const MODEL_SELECTOR_ID = 'model-selector-0-button';
const SWITCH_BUTTON_SELECTOR = 'button[role="switch"]';

// Function to find and click the switch button in the menu
const findAndClickSwitchButton = () => {
  const menuDiv = document.querySelector('div[role="menu"]');
  if (!menuDiv) return false;

  const switchButton = menuDiv.querySelector(SWITCH_BUTTON_SELECTOR);
  if (switchButton) {
    switchButton.click();
    return true;
  }
  return false;
};

const SHORTCUTS = {
  toggleSidebar: {
    key: '\\',
    metaKey: true,  // cmd key on Mac
    altKey: false,
    shiftKey: false,
    action: (event) => {
      event.preventDefault();
      
      // Simulate Cmd + Shift + S
      const simulatedEvent = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        metaKey: true,
        shiftKey: true,
        bubbles: true
      });
      document.dispatchEvent(simulatedEvent);
    }
  }
};

// Listen for keyboard events
document.addEventListener('keydown', function(event) {
  for (const [name, shortcut] of Object.entries(SHORTCUTS)) {
    if (event.ctrlKey === (shortcut.ctrlKey || false) &&
        event.metaKey === (shortcut.metaKey || false) &&
        event.altKey === (shortcut.altKey || false) &&
        event.shiftKey === (shortcut.shiftKey || false) &&
        event.key === shortcut.key) {
      // Prevent default behavior and stop propagation
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      shortcut.action(event);
      break;
    }
  }
}, true);  // Set useCapture to true to handle event in capturing phase
