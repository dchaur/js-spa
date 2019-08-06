import Donuts from '../../donuts';
import { getRevenue } from '../../service';

const Visits = {
  async render(parentContainer) {
    const data = await getRevenue();
    const params = {
      title: 'REVENUE',
      data,
      isCurrency: true
    };

    Donuts.build(parentContainer, params);
  }
};

export default Visits;
