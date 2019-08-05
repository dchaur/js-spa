import StatsPresenter from './stats.presenter';

const StatsLoader = {
  init() {
    this.initPresenter();
  },

  initPresenter() {
    StatsPresenter.init();
  },
};

export default StatsLoader;
