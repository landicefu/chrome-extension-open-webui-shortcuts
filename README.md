# Open WebUI Additional Shortcuts

A Chrome extension that adds a keyboard shortcut to toggle Temporary Chat mode in Open WebUI.

## Features

- Keyboard shortcut (Control + ,) to toggle Temporary Chat mode
- Configurable website URL patterns

## Default Configuration

By default, the extension is configured for Open WebUI:
- URL Pattern: `https://open-webui.lifehackers.tw/*`
- Keyboard Shortcut: `Control + ,` (not configurable)

## How to Configure

1. Click the extension icon in Chrome's toolbar to open the configuration popup
2. Enter the URL pattern where the shortcut should work
3. Click "Save" to apply your changes

## How to Use

1. Install the extension
2. Configure the website URL pattern using the popup menu
3. Visit your configured website
4. Use Control + , to toggle Temporary Chat mode

## URL Pattern Examples

You can customize the extension to work on different websites. Here are some examples:

### Single Website
- URL Pattern: `https://your-webapp.com/*`

### Multiple Domains
- URL Pattern: `*://*.example.com/*`

### Local Development
- URL Pattern: `http://localhost:*/*`

## Development

The extension uses:
- `manifest.json`: Extension configuration
- `content.js`: Handles keyboard shortcuts and DOM manipulation
