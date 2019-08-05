import Donuts from '../../donuts';
import { getRevenue } from '../../service';

const Visits = {
  async render(parentContainer) {
    try {
      const data = await getRevenue();

      if (!data) {
        throw new Error('Failed retrieving visits');
      }

      const params = {
        title: 'REVENUE',
        data,
        isCurrency: true,
      };

      const view = Donuts.createView(params);
      parentContainer.appendChild(view);
      Donuts.buildChart(params);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default Visits;
