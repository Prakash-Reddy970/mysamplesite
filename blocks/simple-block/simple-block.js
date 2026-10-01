const cellContent = [
  'Plan', 'Build', 'Test', 'Launch',
  'Discover', 'Design', 'Develop', 'Review',
  'Measure', 'Learn', 'Improve', 'Share',
  'Focus', 'Create', 'Connect', 'Grow',
];

export default function decorate(block) {
  const grid = document.createElement('div');
  grid.className = 'simple-block-grid';
  grid.setAttribute('role', 'grid');
  grid.setAttribute('aria-label', 'Project stages');

  cellContent.forEach((content) => {
    const cell = document.createElement('div');
    cell.className = 'simple-block-cell';
    cell.setAttribute('role', 'gridcell');
    cell.textContent = content;
    grid.append(cell);
  });

  block.replaceChildren(grid);
}
