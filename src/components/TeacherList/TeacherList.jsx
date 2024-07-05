import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//selector
import { selectTeachers } from "Store/teachers/teachersSelector";
import { getAllTeachersThunk } from "Store/teachers/teachersThunk";

export const TeacherList = () => {
  const teacherCard = useSelector(selectTeachers);
  console.log(teacherCard);
  const dispatcher = useDispatch();

  dispatcher(getAllTeachersThunk);

  return (
    <div>
      {teacherCard.map((item) => (
        <ul key={item.id}>
          <li cardInfo={item}></li>
        </ul>
      ))}
    </div>
  );
};
