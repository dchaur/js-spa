// import StatsLayout from './stats.layout';
import VisitsComponent from './visits/visits.component';

const StatsComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },

  render() {
    let statsHTMLContainer = '<section class="stats">';
    statsHTMLContainer += VisitsComponent.render();
    statsHTMLContainer += '</section>';
    this.appElement.innerHTML = statsHTMLContainer;

    this.afterRender();
  },

  afterRender() {
    VisitsComponent.afterRender();
  },
};

export default StatsComponent;
