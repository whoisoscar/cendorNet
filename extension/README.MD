# CensorNet: Chrome Extension

## Overview

The CensorNet Chrome Extension is designed to enhance browsing safety by detecting and blurring profane content on web pages. It interfaces with a Flask web server to analyze text content and apply blurring to identified offensive language.

## Installation

### Load the Extension into Chrome

1. **Open Chrome**: Open the Google Chrome browser on your computer.
2. **Access Extensions**: Navigate to `chrome://extensions/` in your Chrome browser to open the Extensions page.
3. **Enable Developer Mode**: At the top right of the extensions page, toggle the "Developer mode" switch to enable it.
4. **Load Unpacked Extension**: Click on the "Load unpacked" button and select the directory where the CensorNet extension files are located.

### Dependencies

Ensure that the Flask server is running as the extension requires the server to process the text for profanity checks.

## Usage

Once installed, the extension will automatically scan text content on all web pages you visit. Offensive sentences will be blurred based on the analysis received from the Flask server.

## Customization

You can customize the extension's behavior by modifying the source code:
- Change the style of the blurring effect (`./syle.css`).
- Update the list of elements (tags) scanned by the extension (`./content.js`).

## Contributing

We welcome contributions to enhance the extension's features or improve its performance. Please submit your contributions via pull requests, adhering to the project's coding standards.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
