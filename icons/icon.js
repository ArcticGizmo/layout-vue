function separateUnit(unitStr) {
  const num = parseInt(unitStr);
  const unit = unitStr.slice(`${num}`.length);
  return [num, unit];
}

export default function scale(unitStr, factor) {
  const [num, unit] = separateUnit(unitStr);
  const numScaled = num * factor;
  const measure = `${numScaled}${unit}`
  return measure;
}
