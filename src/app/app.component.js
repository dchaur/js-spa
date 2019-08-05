import AppLayout from './app.layout';
import StatsModule from './stats/stats.module';

const AppComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },

  render() {
    this.appElement.innerHTML = AppLayout();
    StatsModule.init();
  },
};

export default AppComponent;
