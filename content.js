// Default configuration
const defaultConfig = {
  urlPattern: 'https://open-webui.lifehackers.tw/*'
};

// Fixed selectors and shortcut
const MODEL_SELECTOR_ID = 'model-selector-0-button';
const SWITCH_BUTTON_SELECTOR = 'button[role="switch"]';
const SHORTCUT = {
  key: ',',
  ctrlKey: true,
  altKey: false,
  shiftKey: false
};

// Load configuration and set up listeners
chrome.storage.sync.get(defaultConfig, (config) => {
  // Listen for keyboard events
  document.addEventListener('keydown', async function(event) {
    // Check if current URL matches the pattern
    const currentUrl = window.location.href;
    if (!currentUrl.match(new RegExp(config.urlPattern.replace(/\*/g, '.*')))) {
      return;
    }

    // Check for Control + , shortcut
    if (event.ctrlKey === SHORTCUT.ctrlKey &&
        event.altKey === SHORTCUT.altKey &&
        event.shiftKey === SHORTCUT.shiftKey &&
        event.key === SHORTCUT.key) {
      
      event.preventDefault(); // Prevent default browser behavior

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

      // First try to find the switch button if menu is already open
      if (findAndClickSwitchButton()) {
        return;
      }

      // If menu isn't open, try to find and click the model selector button
      const modelSelectorButton = document.getElementById(MODEL_SELECTOR_ID);
      if (!modelSelectorButton) {
        console.log('Model selector button not found');
        return;
      }

      // Click the model selector button
      modelSelectorButton.click();

      // Wait for the menu to appear and then try to click the switch
      let attempts = 0;
      const maxAttempts = 10;
      const checkInterval = setInterval(() => {
        if (findAndClickSwitchButton()) {
          clearInterval(checkInterval);
        } else if (++attempts >= maxAttempts) {
          console.log('Could not find switch button after menu opened');
          clearInterval(checkInterval);
        }
      }, 100); // Check every 100ms, up to 1 second total
    }
  });
});
