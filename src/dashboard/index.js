import Impressions from './components/impressions';
import Revenue from './components/revenue';
import Visits from './components/visits';

export default {
  init() {
    this.dashContainer = document.getElementById('dash-container');
    this.render();
  },

  async render() {
    await Promise.all([
      Revenue.render(this.dashContainer),
      Impressions.render(this.dashContainer),
      Visits.render(this.dashContainer)
    ]);
  }
};
