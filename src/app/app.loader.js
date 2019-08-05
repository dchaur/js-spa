import AppPresenter from './app.presenter';

const AppLoader = {
  init() {
    this.initPresenter();
  },

  initPresenter() {
    AppPresenter.init();
  },
};

export default AppLoader;
