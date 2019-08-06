import Dashboard from '../src/dashboard';
import Visits from '../src/dashboard/components/visits';

const mockData = [
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
];

jest.mock('../src/dashboard/service/', () => ({
  getRevenue: () => mockData,
  getImpressions: () => mockData,
  getVisits: () => mockData,
}));

describe('Dashboard component', () => {
  it('should build the dashboard correctly', async () => {
    document.body.innerHTML = '<section id="dash-container" class="stats"></section>'; 
    let renderVisits = jest.spyOn(Visits, 'render');
    Dashboard.init();   
    expect(renderVisits).toHaveBeenCalled();
  });
});
