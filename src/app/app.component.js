import AppLayout from './app.layout';
import AppModel from './app.model';
import StatsModule from './stats/stats.module';

const AppComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.loadApp();
    this.render();
  },

  loadApp() {
    this.appElement.addEventListener('click', (evt) => {
      if (evt.target.id === 'btn-load-stats') {
        StatsModule.init();
      }
    });
  },

  render() {
    this.appElement.innerHTML = AppLayout(AppModel);
  },
};

export default AppComponent;
