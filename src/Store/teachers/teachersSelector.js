export const selectTeachers = (state) => {
  return state.teachers.teachers;
};
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectError = (state) => state.teachers.error;
