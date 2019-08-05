import Donuts from '../../donuts';
import { getImpressions } from '../../service';

const Visits = {
  async render(parentContainer) {
    try {
      const data = await getImpressions();

      if (!data) {
        throw new Error('Failed retrieving visits');
      }

      const params = {
        title: 'IMPRESSIONS',
        data,
        isCurrency: false,
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
