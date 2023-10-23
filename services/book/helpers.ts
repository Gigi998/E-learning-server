export const availableFilter = (available: string) => {
  if (available === "true") {
    return { Student: { none: {} } };
  }
  return {};
};
