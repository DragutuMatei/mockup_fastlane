import React, { useEffect, useState } from "react";
import "../assets/style/page.scss";
import { IoIosClose } from "react-icons/io";
import { BsDiscord, BsMapFill, BsTwitter } from "react-icons/bs";
import { FaEdit, FaTelegramPlane } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import json from "../utils/Projects.json";
import { IoDiamondOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Side from "../components/Side";
import { MdBarChart } from "react-icons/md";

function Home() {
  const [display, setDisplay] = useState(false);
  const [proiect, setProiect] = useState(null);
  const discover = (proiect) => {
    setProiect(proiect);
    setDisplay(true);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setDisplay(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <Side />

      <div className="ok">
        {display && proiect && (
          <div
            className="overlay"
            onClick={(e) => {
              if (e.target.className === "overlay") {
                setDisplay(false);
              }
            }}
          >
            <div className="discover but3">
              <IoIosClose
                id="close"
                onClick={() => {
                  setDisplay(false);
                }}
              />
              <div className="top">
                <h3 className="h3">
                  {proiect.title} <span id="once">ONCE</span>{" "}
                </h3>
              </div>
              <div className="bottom">
                <div className="left">
                  {/* <Link to={"/auth"} className="button but1">
                    <h4 className="button">Login</h4>
                  </Link> */}
                  <h4 className="buton">
                    connected with <span className="green_text">@demo</span>
                  </h4>
                  <h3 className="title">MISSION 🎯</h3>
                  <p className="p1">{proiect.description}</p>
                  {proiect.list1 && (
                    <ol>
                      {proiect.list1.map((list, i) => {
                        return (
                          <li>
                            <p className="bold_p">{list}</p>
                          </li>
                        );
                      })}
                    </ol>
                  )}
                  {proiect.desc2 && <h3 className="h3">{proiect.desc2}</h3>}
                  {proiect.list2 && (
                    <ul>
                      {proiect.list2.map((list) => {
                        return (
                          <li>
                            <p className="bold_p">{list}</p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {proiect.link && (
                    <a href={proiect.link} className="green_text">
                      {proiect.link}
                    </a>
                  )}
                  <h3 className="title" style={{ marginTop: 50 }}>
                    SUBMISSION 📝
                  </h3>
                  <p className="p1">Upload a screenshot as a proof</p>
                  <div className="send">
                    <BiUserCircle />
                    <input type="text" placeholder="@Pintswap0x" />
                    <h4 className="buton">Follow</h4>
                  </div>
                  <div className="line"></div>{" "}
                  <p className="p1" style={{ textAlign: "center" }}>
                    ⚠︎ After completion, it can take up to 10s before your claim
                    succeeds.
                  </p>
                  <h4 className="claim">Claim FS Token</h4>
                </div>
                <div className="right">
                  <h3 className="h3">Reward</h3>
                  <h3 className="title">
                    <IoDiamondOutline />
                    {proiect.reward}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <Nav /> */}
        <div className="page">
          <header>
            <img src={require("../assets/images/user.png")} alt="" />
            <div className="titles">
              <h1 className="h1">Fast Lane</h1>
              <p className="p1">
                Explore our vision for a rewarding tomorrow, where engagement
                ignites innovation and collaboration leads the way. Join us as
                we forge a new path, shaping the future of community
                interaction, one task at a time.
              </p>
              <div className="l">
                <a href="">
                  <BsTwitter />
                </a>
                <a href="">
                  <BsDiscord />
                </a>
                <a href="">
                  <FaTelegramPlane />
                </a>
                <a href="">
                  <GiWallet />
                </a>
              </div>
              <div className="l">
                <Link to={"/"} className="longl">
                  <BsMapFill id="map" />
                  <h3 className="p1">Quests</h3>
                </Link>
                <Link to={"/liderboard"} className="longl">
                  <MdBarChart id="chart" />
                  <h3 className="p1">Leaderboard</h3>
                </Link>
                <Link to={"#"} className="longl" id="blur">
                  <FaEdit id="map" />
                  <h3 className="bold_p">Request access</h3>
                </Link>
              </div>
            </div>
          </header>
          <div className="line"></div>
          <div className="proiecte">
            {json.projects.map((proiect) => {
              return (
                <div className="proiect">
                  <h3 className="title">{proiect.title}</h3>
                  <p className="p1">{proiect.description}</p>
                  <div className="long">
                    <div
                      href=""
                      className="button but2"
                      onClick={() => discover(proiect)}
                    >
                      <h4 className="button">Complete task</h4>
                    </div>
                    <div className="button but1" id="xp">
                      <h4 className="button">{proiect.reward}FS</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
