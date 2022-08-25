import { FootballTeam, stepMatch } from "@function/constant";
import { convertTotalFootball } from "@function/Funcion";
import { ConvertPath } from "helpers/functions";
import { useRouter } from "next/router";
import React from "react";

const Left = () => {
  const router = useRouter()
  return (
    <>
      <div className="detail-schedule-style-left-week">
        <div className="menu-nav">
            <span>LTĐ</span> {">"} <span className="link">Champions League</span>
           <p className="menu-item">
            <span>Champions League</span>
            - <span>25/08/2022</span>
           </p>
        </div>
      </div>
      <div className="detail-schedule-style-left-input">
          
          <div className="teamOne">
          <div className="parameter-total">
            {convertTotalFootball(FootballTeam.teamOne.total,FootballTeam.teamTwo.total)}
          </div>
            <div className="team">
                <div className="title">
                    <label>
                        {FootballTeam.teamOne.title}
                    </label>
                    <img className="logo" src={FootballTeam.teamOne.logo}/>
                </div>
            </div>
            </div>
            <div className="total">
            <div className="parameter-total">
          </div>
                <div className="title">
                aaa
                </div>
            </div>
            <div className="teamTwo">
            <div className="parameter-total">
        {convertTotalFootball(FootballTeam.teamTwo.total,FootballTeam.teamOne.total)}
          </div>
                <div className="title">
                </div>
            </div>
          </div>
      {stepMatch.map((val, idx) => {
        return (
          <div className="schedule-style-left-match" key={idx}>
            <div className="schedule-style-left-match-label">
              <div className="maxW-40">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                </svg>
              </div>
              <div>{val.tournaments}</div>
              <div className="maxW-40">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                </svg>
              </div>
            </div>
            <div className="schedule-style-left-match-list">
              {val.match
                ? val.match.map((vaz, idx) => {
                    return (
                      <div
                       
                        className="schedule-style-left-match-list-item"
                        key={idx}
                      >
                        <div className="schedule-style-left-div maxW-100">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>{" "}
                          Kết thúc
                        </div>
                        <div className="schedule-style-left-list-match">
                          {vaz.result.map((van,idx) => {
                            return (
                              <div  onClick={()=> router.push("/lich-thi-dau/"+ vaz.id ) } className="schedule-style-left-list-match-item">
                                <div>
                                  <img src={van.logo} />
                                </div>
                                <div>{van.name}</div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="schedule-style-left-div maxW-40">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                          </svg>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Left;
