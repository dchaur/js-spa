import Donuts from '../../donuts';
import { getVisits } from '../../service';

const Visits = {
  async render(parentContainer) {
    const data = await getVisits();
    const params = {
      title: 'VISITS',
      data,
      isCurrency: false
    };

    Donuts.build(parentContainer, params);
  }
};

export default Visits;
