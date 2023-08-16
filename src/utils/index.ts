/**
 * @param array
 * @param size number of arrays you want it to split into
 * @returns array of arrays
 */
export const chunk = <T>(array: T[], size: number = 2): T[][] => {
  if (!Array.isArray(array) || !array.length) return [];
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, (index += size)));
  }

  return result;
};
