import { useState, useEffect } from "react";
import { WraperCardCss } from "./TeacherCard.styled";
import { getAllTeachers } from "../../services/api";

export const TeacherCard = () => {
  const [teachers, setTeachears] = useState([]);

  useEffect(() => {
    const getTeachersList = async () => {
      try {
        const { data } = await getAllTeachers;
        setTeachears(data);
      } catch (error) {
        console.error(error.message);
      }
    };
  }, []);

  return (
    <>
      <WraperCardCss>
        <div>Lorem, ipsum dolor sit amet consectetur tempore.</div>
        <div>
          <div>
            <div>Languages</div>
            <div>{teachers.map((item) => item.name)}</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div>#A1 Beginner</div>
            <div>#A2 Elementary</div>
            <div>#B1 Intermediate</div>
            <div>#B1 Intermediate</div>
          </div>
        </div>
      </WraperCardCss>
    </>
  );
};
