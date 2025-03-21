// import React, { useState } from "react";
// import GitHubCalendar from "react-github-calendar";
// import "./HomePage3.css"

// const HomePage3 = () => {
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default: Current Year

//   const years = [2025, 2024, 2023, 2022];

//   return (
//     <div className="github-section">
//       <h2 className="main-title">GitHub Contributions</h2>

//       {/* Year Selection Buttons */}
//       <div className="year-buttons">
//         {years.map((year) => (
//           <button
//             key={year}
//             className={`year-btn ${year === selectedYear ? "active" : ""}`}
//             onClick={() => setSelectedYear(year)}
//           >
//             {year}
//           </button>
//         ))}
//       </div>

//       {/* GitHub Contribution Graph */}
//       <div className="github-graph">
//         <GitHubCalendar username="prasxor" year={selectedYear} />
//       </div>
//     </div>
//   );
// };

// export default HomePage3;

import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./HomePage3.css";
import MainTitle from "../../Atoms/MainTitle/MainTitle";
import SkillTag from "../../Atoms/SkillTag/SkillTag";

const HomePage3 = () => {
  const years = [2025, 2024, 2023, 2022];
  const [selectedYear, setSelectedYear] = useState(years[0]); // Default year
  const [dataCache, setDataCache] = useState({});

  // Preload contribution data for all years
  useEffect(() => {
    const fetchData = async (year) => {
      const contributions = await fetchGitHubData(year);
      setDataCache((prev) => ({ ...prev, [year]: contributions }));
    };

    years.forEach((year) => fetchData(year));
  }, []);

  // Fetch GitHub contribution data
  const fetchGitHubData = async (year) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/github-contributions?username=prasxor&year=${year}`
      );

      return await response.json();
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      return null;
    }
  };

  return (
    <div className="github-section container">
      <MainTitle
        content={"Contribution Graph"}
        para={
          "Every commit tells a story—of learning, building, and solving problems. From small experiments to full-scale projects, my contributions reflect my growth as a developer."
        }
      />

      {/* Contribution Graph */}
      <div className="GithubSectionMainContent">
        <div className="github-graph">
          {dataCache[selectedYear] ? (
            <GitHubCalendar username="prasxor" year={selectedYear} />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Year Buttons */}
        <div className="year-buttons">
          {years.map((year) => (
            <button
              key={year}
              className={`year-btn ${year === selectedYear ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
           ))}
        </div>
      </div>

      {/* GitHub Profile Link */}
      <div>
        <a
          href="https://github.com/prasxor"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GITHUB ↗
        </a>
      </div>
    </div>
  );
};

export default HomePage3;
