# Tiffany Vanderploeg Portfolio

This is my portfolio website built with React using my component library from Assignment 13.

## Instructions to Run

1. **Build the Docker container:**
   ```bash
   docker build -t vanderploeg_tiffany_coding_assignment14 .
   ```

2. **Run the container:**
   ```bash
   docker run -p 5575:5575 --name vanderploeg_tiffany_coding_assignment14 vanderploeg_tiffany_coding_assignment14
   ```

3. **Access the website:**
   Open your browser and go to: `http://localhost:5575` or `http://127.0.0.1:5575`

## Development

This project includes all the code quality checks from Assignment 13:

- **Husky pre-commit hooks**
- **Prettier code formatting**
- **ESLint code linting** 
- **Automated testing**
- **GitHub Actions CI/CD**

To develop locally:
```bash
npm install
npm start
```

## File Structure

```
├── Dockerfile
├── README.md
├── package.json
├── .husky/                    # Pre-commit hooks
├── .github/workflows/         # GitHub Actions
├── src/
│   ├── components/           # Component library from Assignment 12/13
│   ├── App.tsx              # Portfolio using the components (TypeScript)
│   ├── App.test.tsx         # Tests (TypeScript)
│   ├── App.css
│   └── index.tsx            # Main entry point (TypeScript)
└── .storybook/              # Storybook configuration
```/workflows/         # GitHub Actions
├── src/
│   ├── components/           # Component library from Assignment 12/13
│   ├── App.js               # Portfolio using the components
│   ├── App.css
│   └── index.js
└── .storybook/              # Storybook configuration
```

## Features

The portfolio showcases my component library by using the actual components I built:

- **Basic Information**: Using Text and Card components
- **Work**: Using Card, Button, Label, and Img components  
- **Skills**: Using Table components with headers, rows, and cells
- **Resources**: Using Card and Button components with links
- **Developer Setup**: Using nested Card components for organization

## Components Used

From my component library:
- Button
- Card  
- Text
- Label
- HeroImage
- Img
- Table (Header, Row, Cell, Footer)

## Technologies Used

- React 20 + TypeScript
- Component Library (Assignment 12/13)
- Styled Components
- Storybook
- Husky + Pre-commit hooks
- Prettier + ESLint
- GitHub Actions
- Docker

## Docker Details

- **Container Name**: `vanderploeg_tiffany_coding_assignment14`
- **Working Directory**: `/vanderploeg_tiffany_final_site`
- **Port**: 5575
- **Build**: Production build with code quality checks