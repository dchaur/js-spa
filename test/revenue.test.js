import '@testing-library/jest-dom/extend-expect';
import Revenue from '../src/dashboard/components/revenue';

describe('Revenue component', () => {
  test('should build revenue donut correctly', async () => {
    document.body.innerHTML = '<section id="dash-container" class="stats"></section>';
    const dashContainer = document.getElementById('dash-container');
    await Revenue.render(dashContainer);
    expect(document.querySelector('#chart-REVENUE')).toBeInTheDocument();
  });
});
