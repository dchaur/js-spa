import '@testing-library/jest-dom/extend-expect';
import Visits from '../src/dashboard/components/visits';

describe('Visits component', () => {
  test('should build visits donut correctly', async () => {
    document.body.innerHTML = '<section id="dash-container" class="stats"></section>';
    const dashContainer = document.getElementById('dash-container');
    await Visits.render(dashContainer);
    expect(document.querySelector('#chart-VISITS')).toBeInTheDocument();
  });
});
