export const formatTitle = (template = "", values = {}) => {
  return template.replace(/{(.*?)}/g, (match, key) => values[key] || "");
};
