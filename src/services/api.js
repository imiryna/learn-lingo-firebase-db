import { learnLindoInstance } from "./instance";

export const getAllTeachers = async () => {
  const { data } = await learnLindoInstance.get(`/teachers`);
  console.log(data);
  return data;
};
