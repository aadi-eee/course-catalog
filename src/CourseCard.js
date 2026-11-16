function CourseCard({ title, instructor, credits, required }) {
  return (
    <div className="course-card">
      <span className={required ? "badge required" : "badge optional"}>
        {required ? "필수" : "선택"}
      </span>
      <h2>{title}</h2>
      <p>{instructor}</p>
      <p>{credits} credits</p>
    </div>
  );
}

export default CourseCard;