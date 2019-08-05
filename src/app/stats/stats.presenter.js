import DonutsPresenter from './donuts/donuts.presenter';
import StatsModel from './stats.model';

const StatsPresenter = {

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
    statsHTMLContainer += DonutsPresenter.render(this.revenueParams);
    statsHTMLContainer += DonutsPresenter.render(this.impressionsParams);
    statsHTMLContainer += DonutsPresenter.render(this.visitsParams);
    statsHTMLContainer += '</section>';
    this.appElement.innerHTML = statsHTMLContainer;

    this.afterRender();
  },

  afterRender() {
    DonutsPresenter.afterRender(this.revenueParams);
    DonutsPresenter.afterRender(this.impressionsParams);
    DonutsPresenter.afterRender(this.visitsParams);
  },
};

export default StatsPresenter;
