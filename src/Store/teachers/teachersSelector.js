export const selectTeachers = (state) => {
  const result = [];
  for (const [key, value] of Object.entries(state.teachers.teachers)) {
    let newValue = { ...value, id: key };
    result.push(newValue);
  }
  return result;
};

export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectError = (state) => state.teachers.error;
