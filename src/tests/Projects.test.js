// Projects.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Projects from './Projects';

// Mock projects data
const mockProjects = [
  {
    title: 'Project 1',
    deployedUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/user/project1',
    screenshotUrl: 'project1.png'
  },
  {
    title: 'Project 2',
    deployedUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/user/project2',
    screenshotUrl: 'project2.png'
  }
];

test('renders projects with correct information', () => {
  const { getByText, getAllByRole, getByAltText } = render(<Projects projects={mockProjects} />);

  // Check if Projects title is rendered
  expect(getByText('Projects')).toBeInTheDocument();

  // Check if each project title, deployed link, GitHub link, and screenshot is rendered
  mockProjects.forEach(project => {
    expect(getByText(project.title)).toBeInTheDocument();
    expect(getByText(`Deployed version: ${project.deployedUrl}`)).toBeInTheDocument();
    expect(getByText(`GitHub repository: ${project.githubUrl}`)).toBeInTheDocument();
    expect(getByAltText(project.title)).toBeInTheDocument();
  });

  // Check if there are the correct number of project items
  const projectItems = getAllByRole('listitem');
  expect(projectItems.length).toBe(mockProjects.length);
});
