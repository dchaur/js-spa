import Donuts from '../../donuts';
import { getVisits } from '../../service';

const Visits = {
  async render(parentContainer) {
    try {
      const data = await getVisits();

      if (!data) {
        throw new Error('Failed retrieving visits');
      }

      const params = {
        title: 'VISITS',
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
