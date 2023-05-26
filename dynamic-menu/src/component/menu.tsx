import { MouseEvent } from "react";

function Menu() {
  let techHeading = "Technologies we were working on";
  let technologies = [
    "React and .Net Developer",
    "Angular and Java Spring-boot",
    "PostGreSql",
    "Power BI",
  ];
  const handleClick = (event: MouseEvent) => console.log(event.target);
  return (
    <div>
      <h3>{techHeading}</h3>
      {technologies.length === 0 && <p>No Items is found in the list</p>}
      <ul>
        {technologies.map((item, index) => (
          <ol key={index} onClick={handleClick}>
            {index + 1 + ". " + item}
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
