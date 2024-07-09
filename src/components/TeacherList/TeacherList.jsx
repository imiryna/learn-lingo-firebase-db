import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//selector
import { selectTeachers } from "Store/teachers/teachersSelector";
import { getAllTeachersThunk } from "Store/teachers/teachersThunk";

//components & style
import { TeacherCard } from "components/TeacherCard/TeacherCard";
import { ContainerTeacherHome } from "./TeacherList.styled";

export const TeacherList = () => {
  const teacherCard = useSelector(selectTeachers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeachersThunk());
  }, [dispatch]);

  return (
    <ContainerTeacherHome>
      {teacherCard && teacherCard.length > 0 ? (
        teacherCard.map((item) => (
          <ul key={item.id}>
            <TeacherCard cardInfo={item} />
          </ul>
        ))
      ) : (
        <p>No teachers available</p>
      )}
    </ContainerTeacherHome>
  );
};
