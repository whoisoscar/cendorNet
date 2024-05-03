# CensorNet: Flask Web Server

## Overview

This Flask web server is an integral part of the CensorNet profanity detection system. It processes requests from the Chrome extension, analyzing text for profanity using the `pardonmyai-tiny` model, and responds with the analysis results. This document provides setup instructions and usage guidelines.

## Setup

### Creating a Virtual Environment

To isolate and manage the package dependencies, create a virtual environment:

```bash
python3 -m venv ./prof
```

## Activating the Virtual Environment
Before working on the project, activate the virtual environment:

```bash
source ./prof/bin/activate
```
## Install Required Modules
Install all the necessary Python modules specified in requirements.txt:

```bash
pip install -r requirements.txt
```

## Usage
To use the web server, follow these steps each time:

### 1. Activate the Virtual Environment:
```bash
source ./prof/bin/activate
```

### 2. Run the Web Server:
```bash
python3 main.py
```
The server will start and begin listening for requests from the Chrome extension. Make sure the extension is configured to point to the correct URL for your local server.

## Testing
To test if the server is running properly, you can navigate to http://127.0.0.1:5000/demo in your web browser. This should display a sample output, demonstrating how the server handles profane content.