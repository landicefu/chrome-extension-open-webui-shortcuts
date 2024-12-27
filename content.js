// Listen for keyboard events
document.addEventListener('keydown', async function(event) {
  // Check for Control + , shortcut
  if (event.ctrlKey && event.key === ',') {
    event.preventDefault(); // Prevent default browser behavior

    // Function to find and click the switch button in the menu
    const findAndClickSwitchButton = () => {
      const menuDiv = document.querySelector('div[role="menu"]');
      if (!menuDiv) return false;

      const switchButton = menuDiv.querySelector('button[role="switch"]');
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
    const modelSelectorButton = document.getElementById('model-selector-0-button');
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
