# cURL Command Builder

A modern, beautiful web application that helps you build cURL commands with a user-friendly interface. Built with React, TypeScript, and Material-UI, featuring a stunning glassmorphism design.

![cURL Command Builder Screenshot](screenshot.png)

## Features

- 🚀 Interactive UI with real-time cURL command generation
- 🎨 Modern glassmorphism design
- 💪 Built with TypeScript for type safety
- 📝 Support for all HTTP methods (GET, POST, PUT, DELETE, PATCH)
- 🔧 Custom headers management
- 📦 JSON content type toggle
- 🔒 Self-signed certificate acceptance option
- 📋 One-click command copying
- 🔍 Verbose mode toggle
- 📱 Responsive design for all screen sizes

## Live Demo

[View Live Demo](#) <!-- Add your deployed app URL here -->

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sourav-dev/SimpleCurlBuilder-.git
cd SimpleCurlBuilder-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- Emotion (for styled components)

## Project Structure

```
SimpleCurlBuilder-/
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Usage

1. Select the HTTP method from the dropdown
2. Enter the target URL
3. Add request body (if needed)
4. Add custom headers using the "Add Header" button
5. Toggle options as needed:
   - JSON Content Type
   - Accept Self-Signed Certificate
   - Verbose Mode
6. Copy the generated cURL command using the copy button

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Sourav Das

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Support

If you find this project helpful, please give it a ⭐️ on GitHub - [SimpleCurlBuilder-](https://github.com/sourav-dev/SimpleCurlBuilder-.git)
