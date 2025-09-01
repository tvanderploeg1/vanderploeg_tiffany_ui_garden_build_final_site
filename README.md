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

The portfolio is a multi-page website that showcases my component library:

- **Home**: Welcome page with hero image and navigation
- **About**: Basic information and personal details  
- **Work**: Project showcase using Card, Button, Label, and Img components
- **Skills**: Technical skills displayed in a Table with headers and cells
- **Resources**: Development resources using Card and Button components with external links
- **Developer Setup**: Development environment preferences and setup details

## Navigation

The portfolio includes a navigation bar that allows users to browse between different pages, demonstrating reasonably complex page navigation as required.

## Components Used

From my component library:
- Button (with external links)
- Card (for layout and content organization)
- Text (for paragraphs and descriptions)
- Label (for headings and titles)  
- HeroImage (for main portfolio banner)
- Img (for project screenshots)
- Table, TableRow, TableCell, TableHeader, TableFooter (for skills display)

## Technologies Used

- React 20 + TypeScript
- React Router (for multi-page navigation)
- Component Library (from Assignments 12/13)
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