export const formatRupee = (amount: number) => {
    // Return the formatted rupee amount
    return `₹${(amount).toLocaleString('en-IN')}`;
  };
  
export const roundToTwoDecimals = (value: number, decimalPlaces = 2) => {
  if (value < 0)
    return -roundToTwoDecimals(-value, decimalPlaces);
  var p = Math.pow(10, decimalPlaces);
  var n = value * p;
  var f = n - Math.floor(n);
  var e = Number.EPSILON * n;

  // Determine whether this fraction is a midpoint value.
  return (f >= .5 - e) ? Math.ceil(n) / p : Math.floor(n) / p;
}