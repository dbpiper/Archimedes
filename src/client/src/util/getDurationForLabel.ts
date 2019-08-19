import moment from 'moment';

/**
 * A utility function to help with getting a nice human-friendly string for
 * the difference between two DateTimes, and generally just between the current
 * time and when some item was posted (message, comment, etc.).
 *
 * @param itemDateTime The ISO 8601 formatted DateTime string for
 * when the item was posted (message, comment, etc.).
 * @param comparisonDateTime The ISO 8601 formatted DateTime string for
 * when you are wanting to compare against, this is optional and would generally
 * be the current DateTime (right now).
 */
export const getDurationForLabel = (
  itemDateTime: string,
  comparisonDateTime?: string,
) => {
  const _comparisonDateTime = comparisonDateTime
    ? comparisonDateTime
    : moment.utc().toISOString();

  const itemMoment = moment.utc(itemDateTime).local();
  const comparisonMoment = moment.utc(_comparisonDateTime).local();

  return itemMoment.from(comparisonMoment);
};
