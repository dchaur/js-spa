const Template = ((params) => {
  let donutSection = '<section id="visits-block" class="pie">';
  donutSection += `<div id="visits-chart-${params.title}"></div>`;
  donutSection += '<ul class="legend">';

  params.data.forEach((item) => {
    donutSection += '<li>';
    donutSection += `<span class="title" style="color: ${item.color}">${item.type}</span>`;
    donutSection += `<span class="percent">${item.percent}%</span>`;
    donutSection += `<span class="value">${item.value}</span>`;
    donutSection += '</li>';
  });

  donutSection += '</ul>';
  donutSection += '</section>';

  return donutSection;
});

export default Template;
