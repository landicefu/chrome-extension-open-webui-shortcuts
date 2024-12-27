// Default configuration
const defaultConfig = {
  urlPattern: 'https://open-webui.lifehackers.tw/*'
};

// Load saved configuration
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(defaultConfig, function(config) {
    document.getElementById('urlPattern').value = config.urlPattern;
  });

  // Save configuration
  document.getElementById('saveConfig').addEventListener('click', function() {
    const config = {
      urlPattern: document.getElementById('urlPattern').value
    };

    chrome.storage.sync.set(config, function() {
      const status = document.getElementById('status');
      status.textContent = 'Configuration saved!';
      status.className = 'success';
      status.style.display = 'block';
      setTimeout(() => {
        status.style.display = 'none';
      }, 2000);
    });
  });
});
