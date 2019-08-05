import Stats from './stats';

const Dashboard = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },

  render() {
    this.appElement.innerHTML = '<section class="app"></section>';
    Stats.init();
  },
};

export default Dashboard;
