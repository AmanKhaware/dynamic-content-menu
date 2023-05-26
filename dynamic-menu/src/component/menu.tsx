function Menu() {
  let techHeading = "Technologies we were working on";
  let technologies = [
    "React and .Net Developer",
    "Angular and Java Spring-boot",
    "PostGreSql",
    "Power BI",
  ];
  return (
    <div>
      <h3>{techHeading}</h3>
      <ul>
        {technologies.map((item, index) => (
          <ol key={index}>{index + 1 + ". " + item}</ol>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
