function createDigimon (
  rank = 'A',
  name = '',
  form = 'Rookie',
  hp = 0,
  ds = 0,
  at = 0,
  as = 0,
  ct = 0,
  ht = 0,
  de = 0,
  ev = 0,
  attribute = 'None',
  elementalAttribute = 'Neutral',
) {
  return {
    rank,
    name,
    form,
    hp,
    ds,
    at,
    as,
    ct,
    ht,
    de,
    ev,
    attribute,
    elementalAttribute,
    dps: getDps(at, as),
  }
}

function getDps(at, as) {
  const stringValue = (at / as).toFixed(3);

  return parseFloat(stringValue);
}

export { createDigimon };
