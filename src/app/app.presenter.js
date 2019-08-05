import StatsModule from './stats/stats.loader';

const AppPresenter = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },

  render() {
    this.appElement.innerHTML = '<section class="app"></section>';
    StatsModule.init();
  },
};

export default AppPresenter;
