import Donuts from './donuts';
import StatsModel from './model';

const Stats = {

  init() {
    this.appElement = document.querySelector('#app');
    this.visitsParams = {};
    this.render();
  },

  render() {
    this.visitsParams = {
      title: 'VISITS',
      data: StatsModel.visits,
    };

    this.revenueParams = {
      title: 'REVENUE',
      data: StatsModel.revenue,
    };

    this.impressionsParams = {
      title: 'IMPRESSIONS',
      data: StatsModel.impressions,
    };

    let statsHTMLContainer = '<section class="stats">';
    statsHTMLContainer += Donuts.render(this.revenueParams);
    statsHTMLContainer += Donuts.render(this.impressionsParams);
    statsHTMLContainer += Donuts.render(this.visitsParams);
    statsHTMLContainer += '</section>';
    this.appElement.innerHTML = statsHTMLContainer;

    this.afterRender();
  },

  afterRender() {
    Donuts.afterRender(this.revenueParams);
    Donuts.afterRender(this.impressionsParams);
    Donuts.afterRender(this.visitsParams);
  },
};

export default Stats;
