import '@testing-library/jest-dom/extend-expect';
import Impressions from '../src/dashboard/components/impressions';

describe('Impressions component', () => {
  test('should build impressions donut correctly', async () => {
    document.body.innerHTML = '<section id="dash-container" class="stats"></section>';
    const dashContainer = document.getElementById('dash-container');
    await Impressions.render(dashContainer);
    const chart = document.querySelector('#chart-IMPRESSIONS');
    expect(document.querySelector('.pie-block')).toContainElement(chart);
  });
});
