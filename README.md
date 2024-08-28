# Rate-My-Professor

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Overview
**Rate-My-Professor** is a web application designed to help students rate, review, and find the best professors for their learning journey. It includes a chatbot assistant to help users navigate the platform.

## Features
- **Hero Section:** Introduces the platform with a visually appealing background and a call to action.
- **Chatbot Assistant:** A built-in chatbot to assist users with queries and provide guidance.
- **FAQ Section:** Answers common questions about the platform.
- **Responsive Design:** Works across various devices, providing a seamless user experience.

## Technologies Used
- **Next.js:** Framework for server-side rendering and building static websites.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **DaisyUI:** Tailwind CSS components for a fast and beautiful UI.
- **TypeScript:** Superset of JavaScript that adds static types.
- **Material-UI:** React Component Library.

## Getting Started

### Prerequisites
- Node.js (v14.x or later)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/rate-my-professor.git
   cd rate-my-professor
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project
1. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Project Structure
```
/app
  ├── components        # React components
  ├── layout.tsx        # Layout component
  ├── page.tsx          # Main page component
  ├── api               # Backend API routes
/public
  ├── hero-bg.jpg       # Background image for the Hero section
  └── favicon.ico       # Favicon
/tailwind.config.js     # Tailwind CSS configuration file
/package.json           # Project metadata and dependencies
/README.md              # Project documentation
```

## Customization
To customize the theme colors, update the `tailwind.config.js` file under the `daisyui` section.

```js
daisyui: {
  themes: [
    {
      mytheme: {
        primary: '#6A1B9A',
        secondary: '#FFFFFF',
        accent: '#6A1B9A',
        neutral: '#3D4451',
        'base-100': '#FFFFFF',
      },
    },
  ],
},
```

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits
- **[Ashfinn](https://Github.com/Ashfinn):** Designed and developed the landing page.
- **F:** Created the chatbot assistant.