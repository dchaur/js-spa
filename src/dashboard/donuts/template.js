const Template = ((params) => {
  let donutSection = `<div id="chart-${params.title}"></div>`;
  const currency = (params.isCurrency) ? '€' : '';

  donutSection += '<ul >';

  params.data.forEach((item) => {
    donutSection += '<li class="legend-box">';
    donutSection += `<span class="title" style="color: ${item.color}">${item.type}</span>`;
    donutSection += `<span class="percent">${item.percent}%</span>`;
    donutSection += `<span class="value">${item.value} ${currency}</span>`;
    donutSection += '</li>';
  });

  donutSection += '</ul>';
  return donutSection;
});

export default Template;
