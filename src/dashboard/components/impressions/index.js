import Donuts from '../../donuts';
import { getImpressions } from '../../service';

const Visits = {
  async render(parentContainer) {
    const data = await getImpressions();
    const params = {
      title: 'IMPRESSIONS',
      data,
      isCurrency: false
    };

    Donuts.build(parentContainer, params);
  }
};

export default Visits;
