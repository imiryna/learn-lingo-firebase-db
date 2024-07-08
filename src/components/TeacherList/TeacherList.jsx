import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//selector
import { selectTeachers } from "Store/teachers/teachersSelector";
import { getAllTeachersThunk } from "Store/teachers/teachersThunk";

//components & style
import { TeacherCard } from "components/TeacherCard/TeacherCard";

export const TeacherList = () => {
  const teacherCard = useSelector(selectTeachers);
  console.log(teacherCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeachersThunk());
  }, [dispatch]);

  return (
    <div>
      {teacherCard && teacherCard.length > 0 ? (
        teacherCard.map((item) => (
          <ul key={item.id}>
            <TeacherCard cardInfo={item} />
          </ul>
        ))
      ) : (
        <p>No teachers available</p>
      )}
    </div>
  );
};
