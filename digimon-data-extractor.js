import { createDigimon } from "./digimon.js";

const statsMap = {
  rank: { start: '|rank=', end: '\n', type: 'string' },
  name: { start: '|japname=', end: '\n', type: 'string' },
  form: { start: '|form=', end: '\n', type: 'string' },
  hp: { start: '|base hp=', end: '|', type: 'number' },
  ds: { start: '|base ds=', end: '|', type: 'number' },
  at: { start: '|base at=', end: '|', type: 'number' },
  as: { start: '|as=', end: '|', type: 'number' },
  ct: { start: '|base ct=', end: '|', type: 'number' },
  ht: { start: '|ht=', end: '|', type: 'number' },
  de: { start: '|base de=', end: '}}', type: 'number' },
  ev: { start: '|ev=', end: '|', type: 'number' },
  attribute: { start: '|attribute=', end: '\n', type: 'string' },
  elementalAttribute: { start: '|naturalattribute=', end: '\n', type: 'string' },
};

function getStringStats(rawData, statsName) {
  return getTextBetweenString(rawData, statsMap[statsName].start, statsMap[statsName].end);
}

function getTextBetweenString(rawString, start, end) {
  const startIndex = rawString.indexOf(start) + start.length;
  const endIndex = rawString.substring(startIndex).indexOf(end) + startIndex;

  return rawString.substring(startIndex, endIndex);
}

function getNumericStats(rawData, statsName) {
  let data = getTextBetweenString(rawData, statsMap[statsName].start, statsMap[statsName].end);

  if (data.endsWith('%')) {
    data = data.slice(0, -1);
  }

  return (data.includes('.')) ? parseFloat(data) : parseInt(data, 10);
}

function instantiateDigimonFromWikitext(rawData) {
  const statsRawData = rawData.wikitext['*'];
  return createDigimon(
    getStringStats(statsRawData, 'rank'),
    rawData.title,
    getStringStats(statsRawData, 'form'),
    getNumericStats(statsRawData, 'hp'),
    getNumericStats(statsRawData, 'ds'),
    getNumericStats(statsRawData, 'at'),
    getNumericStats(statsRawData, 'as'),
    getNumericStats(statsRawData, 'ct'),
    getNumericStats(statsRawData, 'ht'),
    getNumericStats(statsRawData, 'de'),
    getNumericStats(statsRawData, 'ev'),
    getStringStats(statsRawData, 'attribute'),
    getStringStats(statsRawData, 'elementalAttribute'),
  );
};

export { instantiateDigimonFromWikitext };
