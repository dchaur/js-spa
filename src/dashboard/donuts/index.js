import * as d3 from 'd3';
import Template from './template';

const formatNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

const Donuts = {

  build(container, params) {
    const view = this.createView(params);
    container.appendChild(view);

    this.buildChart(params);
  },

  createView(params) {
    const chartSection = document.createElement('section');

    chartSection.setAttribute('class', 'pie-block ');
    params.data.forEach(el => formatNumber(el.value));
    params.data.map(el => formatNumber(el.value));
    chartSection.innerHTML = Template(params);
    return chartSection;
  },

  buildChart(params) {
    const chartTitle = params.title;
    const model = params.data;
    let total = formatNumber(model.reduce((a, b) => a + b.value, 0));

    if (params.isCurrency) {
      total += '€';
    }

    const donutColors = model.map(item => item.color);
    const width = 160;
    const height = 160;
    const thickness = 10;
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(donutColors);

    const svg = d3.select(`#visits-chart-${chartTitle}`)
      .append('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    const pie = d3.pie()
      .value(d => d.percent)
      .sort(null);

    const path = g.selectAll('path')
      .data(pie(model))
      .enter()
      .append('g');

    path.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    g.append('text')
      .attr('dy', '-0.5em')
      .style('text-anchor', 'middle')
      .attr('class', 'inner-circle')
      .attr('fill', '#C1C1C1')
      .text(() => chartTitle);

    g.append('text')
      .attr('dy', '1.0em')
      .style('text-anchor', 'middle')
      .style('font-weight', '500')
      .attr('class', 'inner-circle')
      .attr('fill', '#333333')
      .text(() => total);
  }
};

export default Donuts;
