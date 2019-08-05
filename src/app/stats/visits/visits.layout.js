const VisitsLayout = ((model) => {
  let visitsBlock = '<section id="visits-block" class="pie">';
  visitsBlock += '<div id="visits-chart"></div>';
  visitsBlock += '<ul class="legend">';

  model.forEach((item) => {
    visitsBlock += '<li>';
    visitsBlock += `<span class="title" style="color: ${item.color}">${item.type}</span>`;
    visitsBlock += `<span class="percent">${item.percent}%</span>`;
    visitsBlock += `<span class="value">${item.value}</span>`;
    visitsBlock += '</li>';
  });

  visitsBlock += '</ul>';
  visitsBlock += '</section>';

  return visitsBlock;
});

export default VisitsLayout;
