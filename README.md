# Angular Item List Application

This project is a simple Angular application that fetches a list of items from a public API and displays them with sorting and filtering options. The app uses **Angular Standalone Components**, **Bootstrap** for styling, and **HttpClient** for API requests.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Development](#development)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Fetches a list of items from a public API.
- Allows sorting items alphabetically.
- Provides a text-based filter to search through items.
- Responsive design using Bootstrap and ng-bootstrap.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Angular CLI](https://angular.io/cli) (v16 or later)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/avisekraj/chainNetworkAssignment.git
   cd chainNetworkAssignment

2. **Install dependencies:**:
    ```bash
    npm install

3. **Run the application:**:
    ```bash
    ng serve

    The application should now be running at http://localhost:4200.

## Project Structure

Here’s an overview of the project’s main structure:

```plaintext
src/
├── app/
│   ├── item-list/
│   │   ├── item-list.component.ts        # Main component logic
│   │   ├── item-list.component.html      # Component HTML template
│   │   ├── item-list.component.css       # Component CSS
|   |   ├── item-list.component.spec.ts
│   ├── app.component.ts                  # Root component
│   ├── app.component.html                # Root component template
│   └── app.component.css                 # Root component CSS


