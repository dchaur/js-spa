import * as d3 from 'd3';
import VisitsModel from './visits.model';
import VisitsLayout from './visits.layout';

const VisitsComponent = {
  render() {
    return VisitsLayout(VisitsModel);
  },

  afterRender() {
    const chartTitle = 'VISITS';
    const total = this.formatNumber(VisitsModel.reduce((a, b) => a + b.value, 0));

    const width = 160;
    const height = 160;
    const thickness = 10;

    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(['#F4C136', '#BF561D']);

    // Append SVG attributes and append g to the SVG
    const svg = d3.select('#visits-chart')
      .append('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Determine size of arcs
    const arc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    // Create the donut pie chart layout
    const pie = d3.pie()
      .value(d => d.percent)
      .sort(null);

    // Calculate SVG paths and fill in the colors
    const path = g.selectAll('path')
      .data(pie(VisitsModel))
      .enter()
      .append('g');

    // Append the path to each g
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
  },

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  },

};

export default VisitsComponent;
