import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import your components
import Button from './components/Button';
import Card from './components/Card';
import Text from './components/Text';
import Label from './components/Label';
import HeroImage from './components/HeroImage';
import Img from './components/Img';
import Table from './components/Table';
import TableHeader from './components/Table/TableHeader';
import TableRow from './components/Table/TableRow';
import TableCell from './components/Table/TableCell';
import TableFooter from './components/Table/TableFooter';

// Navigation Component
const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/setup">Developer Setup</Link>
    </nav>
  );
};

// Home Page
const HomePage: React.FC = () => {
  return (
    <div>
      <HeroImage 
        src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" 
        alt="Portfolio Hero"
      >
        Tiffany Vanderploeg - Portfolio
      </HeroImage>
      
      <Card>
        <Label>Welcome to My Portfolio</Label>
        <Text>I am a web development student showcasing my skills and projects. Navigate through the pages to learn more about my work and experience.</Text>
        <Link to="/about">
          <Button>Learn More About Me</Button>
        </Link>
      </Card>
    </div>
  );
};

// About Page
const AboutPage: React.FC = () => {
  return (
    <Card>
      <Label>About Me</Label>
      <Text>Name: Tiffany Vanderploeg</Text>
      <Text>Email: tvanderploeg@rrc.ca</Text>
      <Text>Location: Winnipeg, Manitoba</Text>
      <Text>I am a student learning web development and building my skills in React, JavaScript, and modern web technologies. I have completed coursework in component library development, code quality practices, and full-stack development.</Text>
    </Card>
  );
};

// Work Page
const WorkPage: React.FC = () => {
  return (
    <div>
      <Card>
        <Label>My Work</Label>
        
        <Card>
          <Label>Component Library</Label>
          <Img src="https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg" alt="Component Library" />
          <Text>Built a reusable UI component library using React and TypeScript with Storybook documentation. Includes buttons, cards, tables, and form elements with comprehensive testing.</Text>
          <a href="https://github.com/tvanderploeg1/vanderploeg_tiffany_ui_garden" target="_blank" rel="noopener noreferrer">
          <Button>View Project</Button>
          </a>
          <Text>Technologies: React, TypeScript, Storybook, Styled Components, Jest</Text>
        </Card>
      </Card>
    </div>
  );
};

// Skills Page
const SkillsPage: React.FC = () => {
  return (
    <Card>
      <Label>Technical Skills</Label>
      <Text>I am developing expertise in modern web development with a focus on front-end technologies and best practices.</Text>
      
      <Table>
        <TableRow>
          <TableHeader>Category</TableHeader>
          <TableHeader>Technologies</TableHeader>
          <TableHeader>Proficiency</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>Languages</TableCell>
          <TableCell>JavaScript, TypeScript, HTML5, CSS3</TableCell>
          <TableCell>Intermediate</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Frameworks</TableCell>
          <TableCell>React, Node.js</TableCell>
          <TableCell>Intermediate</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tools</TableCell>
          <TableCell>Git, VS Code, Docker, npm, Storybook</TableCell>
          <TableCell>Intermediate</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Testing</TableCell>
          <TableCell>Jest, React Testing Library</TableCell>
          <TableCell>Beginner</TableCell>
        </TableRow>
        <TableRow>
          <TableFooter>Continuously learning and expanding skillset through coursework and projects</TableFooter>
        </TableRow>
      </Table>
    </Card>
  );
};

// Resources Page
const ResourcesPage: React.FC = () => {
  return (
    <div>
      <Card>
        <Label>Documentation</Label>
        <Img src="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg" alt="MDN" />
        <Text>MDN Web Docs - Comprehensive web development documentation and tutorials</Text>
        <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
          <Button>Visit MDN</Button>
        </a>
      </Card>

      <Card>
        <Label>Framework Resources</Label>
        <Img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg" alt="React" />
        <Text>React Documentation - Official React documentation with examples and best practices</Text>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <Button>Visit React Docs</Button>
        </a>
      </Card>

      <Card>
        <Label>Community Support</Label>
        <Img src="https://images.pexels.com/photos/9168798/pexels-photo-9168798.jpeg" alt="Stack Overflow" />
        <Text>Stack Overflow - Community-driven Q&A platform for programming questions</Text>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
          <Button>Visit Stack Overflow</Button>
        </a>
      </Card>
    </div>
  );
};

// Developer Setup Page
const SetupPage: React.FC = () => {
  return (
    <div>
      <Card>
        <Label>My Development Environment</Label>
        
        <Card>
          <Label>VS Code Configuration</Label>
          <Text>Extensions: ES7+ React/Redux/React-Native snippets, Prettier, ESLint, Auto Rename Tag, Bracket Pair Colorizer</Text>
          <Text>Theme: Dark+ (default dark)</Text>
          <Text>Settings: Auto-save enabled, format on save, integrated terminal</Text>
        </Card>

        <Card>
          <Label>Terminal Setup</Label>
          <Text>Terminal: VS Code integrated terminal with PowerShell/Bash</Text>
          <Text>Shell: Git integration with custom aliases</Text>
          <Text>Tools: npm, git, Docker CLI</Text>
        </Card>

        <Card>
          <Label>Preferred Typography</Label>
          <Text>Font Family: Fira Code (with ligatures)</Text>
          <Text>Font Size: 14px</Text>
          <Text>Font Weight: 400</Text>
          <Text>Line Height: 1.5</Text>
          <Text>Enables better code readability and reduces eye strain</Text>
        </Card>
      </Card>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/setup" element={<SetupPage />} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', marginTop: '40px' }}>
          <Text>© 2024 Tiffany Vanderploeg. All rights reserved.</Text>
        </footer>
      </div>
    </Router>
  );
};

export default App;