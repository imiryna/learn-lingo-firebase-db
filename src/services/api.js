import { learnLindoInstance } from "./instance";

export const getAllTeachers = async () => {
  console.log(learnLindoInstance);
  const { data } = await learnLindoInstance.get(`/teachers`);
  console.log(data);
  return data;
};
