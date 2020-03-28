import moment from "moment";

const getDateWithFormat = (value: string): string => {
  return moment(value).format();
};

export default {
  getDateWithFormat
};
