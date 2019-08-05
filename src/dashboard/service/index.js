import visits from './mocks/visits.json';
import revenue from './mocks/revenue.json';
import impressions from './mocks/impressions.json';

async function getStatsData(type) {
  return Promise.resolve(type);
}

export async function getVisits() {
  return getStatsData(visits);
}

export async function getRevenue() {
  return getStatsData(revenue);
}

export async function getImpressions() {
  return getStatsData(impressions);
}
