import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Experience() {
  let currentCard = 1;
  const iconSize = '3.5em'; // Adjust the size as per your requirement
  const url = process.env.REACT_APP_API_URL;
  function showCard(direction) {
    if (direction === "left") {
      currentCard = 1;
    } else if (direction === "right") {
      currentCard = 2;
    }

    document.querySelector(".card1").style.display =
      currentCard === 1 ? "block" : "none";
    document.querySelector(".card2").style.display =
      currentCard === 2 ? "block" : "none";
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${url}/api/experience`
        );
        const experiences = response.data;
        const data = experiences.map((experience) => ({
          companyName: experience.company_name,
          jobTitle: experience.job_title,
          startDate: experience.start_date,
          endDate: experience.end_date,
          accomplishments: experience.accomplishments,
        }));
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div>
      <h1>EXPERIENCE</h1>
  
      <div className="left-right">
  
        {data.map((experience, index) => (
          <div
            key={index}
            className={`card${index + 1}`}
            style={{ display: currentCard === index + 1 ? "block" : "none" }}
          >
            <div className="card">
              <div className="container2">
                <div className="titles">
                  <div className="title">
                    <div className="title-flex">
                      <h2 className="date">{experience.companyName}</h2>
                      <h2 className="date">{experience.startDate}</h2>
                      <h2 className="date">{experience.endDate}</h2>
                    </div>
                  </div>
                </div>
                <ul key={index}>
                  {experience.accomplishments.map((item, index) => (
                    <li key={index}>{item}</li>  
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
  
      </div>
      <div className="arrow-container">
        <div className="left-arrow arrow" onClick={() => showCard("left")}>
          <ArrowCircleLeftIcon style={{ color: "#89CFF0", fontSize: iconSize }} />
        </div>
        <div className="right-arrow arrow" onClick={() => showCard("right")}>
          <ArrowCircleRightIcon style={{ color: "#89CFF0", fontSize: iconSize }} />
        </div>
      </div>
    </div>
  );
  


}

export default Experience;
