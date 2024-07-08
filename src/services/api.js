import { learnLindoInstance } from "./instance";

export const getAllTeachers = async () => {
  const { data } = await learnLindoInstance.get(`/teacher`);
  console.log(data);
  return data.data;
};
