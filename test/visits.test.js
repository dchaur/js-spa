import Visits from '../src/dashboard/components/visits';

jest.mock('../src/dashboard/service/', () => ({
  getVisits: () => [
    {
      "value": 480000000,
      "percent": 80,
      "type": "tablet",
      "color": "#F4C136"
    },
    {
      "value": 120000000,
      "percent": 20,
      "type": "smartphone",
      "color": "#BF561D"
    }
  ]
}));

describe('Visits component', () => {
  it('should build visits donut correctly', async () => {
    document.body.innerHTML = '<section id="dash-container" class="stats"></section>';
    const dashContainer = document.getElementById('dash-container');
    await Visits.render(dashContainer);
    expect(Visits.render).toHaveBeenCalledTimes(1);
  });
});
