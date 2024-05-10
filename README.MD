# CensorNet: Profanity Detector

<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/xZzQJ5W.png" alt="Lorem ipsum" title="Lorem ipsum">
    </td>
    <td>
      <img src="https://i.imgur.com/MQ0rn4U.png" alt="Dolor sit" title="Dolor sit" style="max-width: 80%;">
    </td>
    <td>
      <img src="https://i.imgur.com/6PTb8O0.png" alt="Amet consectetur" title="Amet consectetur">
    </td>
  </tr>

  <tr>
    <td>Chrome Extension</td>
    <td>Loading Overlay</td>
    <td>Blurred Result</td>
  </tr>
</table>

## Introduction

CensorNet is a cutting-edge Chrome extension designed to enhance online browsing safety by detecting and blurring profane content on web pages. This project aims to protect users, especially children and sensitive audiences, from exposure to inappropriate language online. Utilizing advanced AI models, CensorNet offers a robust solution to the increasing use of profane language across digital platforms and its negative impact on user experience.

## Project Structure

The repository is divided into two main components:
- `./extension`: Contains all the files necessary for the Chrome extension.
- `./web`: Includes the Flask server that processes the text and determines the presence of profanity using AI models.

## Motivation

The motivation behind CensorNet is to provide a safer, cleaner browsing experience. Traditional profanity filters rely on static word lists, which can be subjective and often miss obfuscated or contextually specific profane language. CensorNet leverages the `pardonmyai-tiny` model, a lightweight version of a more complex AI, to dynamically identify and react to a vast array of offensive language.

## Technical Overview

### AI Model

CensorNet uses the `pardonmyai-tiny` model, based on Victor Zhou's profanity check approach but optimized with a distil-BERT-uncased model for faster performance and smaller size. This model excels in recognizing a broader range of offensive language through advanced natural language processing techniques.

**Performance Metrics:**
- **Accuracy:** 0.9633
- **Precision:** 0.9378
- **Recall:** 0.8746
- **F1 Score:** 0.9051

### Chrome Extension

The extension actively scans and processes text on web pages, sending it to the Flask server, which then returns results to blur offensive content dynamically.

### Flask Server

Hosted locally, the server uses the `pardonmyai-tiny` model to assess sentences for profanity. The server setup includes CORS to handle requests from the Chrome extension securely.

## Setup and Installation

Instructions for setting up and running CensorNet are provided in the respective folders:
- [Extension Setup](./extension/README.md)
- [Web Server Setup](./web/README.md)

## Business Context

Developed by Oscar Tluszcz, Giacomo Pedersoli, and Joaquin de Tod, CensorNet aims to address the gap in effective online profanity filtering. The development was inspired by the need for better tools to protect online discourse and enhance the browsing experience for all users.

## Model References

The AI model used in this project, `pardonmyai`, was developed by Tarek Ziade. More information can be found on the model's [GitHub page](https://github.com/tarekziade/pardonmyai) and on its [HuggingFace page](https://huggingface.co/tarekziade/pardonmyai).

## Demo

For a quick demonstration of the CensorNet capabilities, you can access the `/demo` endpoint on the Flask server, which illustrates how profane content is handled.