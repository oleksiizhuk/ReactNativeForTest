

export const mergeTestId = (testId: string, id?: string) => {
  return id ? `${testId}-${id}` : testId;
};
