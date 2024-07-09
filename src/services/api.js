import { learnLindoInstance } from "./instance";

export const getAllTeachers = async () => {
  const { data } = await learnLindoInstance.get(`/teacher`);

  return data.data;
};
