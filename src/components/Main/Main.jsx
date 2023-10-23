import React, { useEffect, useState } from "react";
import "./Main.css";
import profile from "../../assets/profile.png";
import icons from "../../assets/main_img";
import deg from "../../assets/degrees.svg";
import axios from "axios";
import Timer from "../timer/Timer";

function Main() {
  let [weather, setWeather] = useState();
  let [temperature, setTemperature] = useState();
  let [pressure, setPressure] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [ico, setIco] = useState();
  const mapio =
    "https://newsdata.io/api/1/news?apikey=pub_31005d3220e4fef573dbae1462ac80227c6fa&q=random%20news%20with%20image";
  let [news, setNews] = useState();
  let [location, setLocation] = useState("Chennai");
  var urlOne = "https://api.openweathermap.org/data/2.5/weather?q=";
  var urlTwo = "chennai";
  var urlThree = "&appid=";
  var urlFour = "d6eee8ecea7a744bd6e71af599323207&units=metric";
  var api = urlOne.concat(urlTwo, urlThree, urlFour);
  console.log(api);
  window.onload = async function fun() {
    const data = await axios.get(api);
    var climate = data.data.weather[0].main;
    var heat = data.data.main.temp;
    var pre = data.data.main.pressure;
    var humidity = data.data.main.humidity;
    var wind = data.data.wind.speed;
    var ico = data.data.weather[0].icon;
    setWeather(climate);
    setTemperature(heat);
    setPressure(pre);
    setHumidity(humidity);
    setWind(wind);
    setIco(ico);
    const input = await axios.get(mapio);
    setNews(input.data.results[1].content);
    console.log(input.data.results);
  };
  var cates = JSON.parse(localStorage.getItem("choiceList"));
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hr = date.getHours();
  var hour = hr % 12 === 0 ? 12 : hr % 12;
  var meridian = hr % 12 === 0 ? "AM" : "PM";
  var min = date.getMinutes();

  // const apiKey = "d6eee8ecea7a744bd6e71af599323207";
  // let [location, setLocation] = useState(null);
  // let [weatherData, setWeatherData] = useState(null);
  // async function fetch(){
  //   const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d6eee8ecea7a744bd6e71af599323207';
  //   const repsonse = await axios.get(apiUrl)
  //   .then(res => {
  //         console.log(res);
  //       })
  //   .then(err => {
  //       console.log(err);
  //   })
  // }
  // fetch();

  return (
    <div className="mainArea">
      <div className="section">
        <div className="lft">
          <div className="section1">
            <div className="inner_left">
              <div className="name_card">
                <img src={profile} alt="profile_img" className="proImg" />
                <div className="details">
                  <div className="userDetails">
                    <p className="realName">
                      {localStorage.getItem("realName")}
                    </p>
                    <p className="usrMail">{localStorage.getItem("email")}</p>
                    <p className="userName">
                      {localStorage.getItem("userName")}
                    </p>
                  </div>
                  <div className="catList">
                    {cates.map((thing, num) => (
                      <div key={num} className="cateEle">
                        {thing}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="weather">
                <div className="top">
                  <p className="date">
                    {day}-{month}-{year}
                  </p>
                  <p className="time">
                    {hour}:{min} {meridian}
                  </p>
                </div>
                <div className="bottom">
                  <div className="weather_box">
                    <div className="iconBox">
                      <img
                        src={`https://openweathermap.org/img/wn/${ico}@2x.png`}
                        alt=""
                        className="icimg"
                      />
                    </div>
                    <div className="weatherState">{weather}</div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="temp">
                  <div className="celBox">
                    <p className="cel">
                      {temperature}
                      <span className="joking">&#176;</span> c
                    </p>
                  </div>
                  <div className="pBox">
                    <img className="icon" src={icons.temp} alt="windIcon" />
                    <div className="pDetails">
                      <p>{pressure} mbar</p>
                      <p>Pressure</p>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="wh">
                    <div className="wind">
                      <img className="icon" src={icons.wind} alt="windIcon" />
                      <div className="windDeails">
                        <p>{wind} km/h</p>
                        <p>wind</p>
                      </div>
                    </div>
                    <div className="humidity">
                      <img
                        className="icon"
                        src={icons.humidity}
                        alt="humidityIcon"
                      />
                      <div className="humidityDetails">
                        <p>{humidity} %</p>
                        <p>Humidity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner_right">
              <div className="notes">
                <div className="notes_header">All notes</div>
                <div className="notes_section">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe totam doloribus voluptas impedit omnis ex, rerum, vitae
                  mollitia officia dolor hic. Quas sed culpa provident,
                  exercitationem asperiores dolores delectus nam reiciendis vel
                  doloribus. Ut aliquid repellat ipsam error architecto
                  corporis? Itaque repudiandae facere maxime enim, doloremque
                  temporibus officiis voluptatem eum assumenda aspernatur
                  accusantium culpa ipsam dolore minima aliquid nam asperiores
                  consectetur mollitia sequi laudantium aperiam id accusamus
                  beatae fugiat! Tenetur laudantium nam, consequuntur quae sunt
                  omnis beatae. Delectus labore quidem facilis ad explicabo amet
                  excepturi consectetur fugiat maxime, veniam pariatur atque
                  eligendi. Laborum, iusto. Consequuntur et eaque fuga
                  aspernatur necessitatibus!
                </div>
              </div>
            </div>
          </div>
          <Timer />
        </div>
        <div className="rght">
          <div className="news">
            <div className="newsImg">
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
                alt=""
              />
            </div>
            <div className="newsContent">
              <div>{news}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_section">
        <button className="browse_btn">Browse</button>
      </div>
      {/* <div className="lft">
        <div className="one">
          <img src={profile} alt="profile_img" className='proImg'/>
          <div className="details">
            <div className="userDetails"> 
            <p className="realName">{localStorage.getItem("realName")}</p>
            <p className='usrMail'>{localStorage.getItem("email")}</p>
            <p className='userName'>{localStorage.getItem("userName")}</p>
            </div>
            <div className='catList'>
            {cates.map((thing, num) =>(
                    <p key={num} className='cateEle'>{thing}</p>
                  ))}
            </div>
          </div>
        </div>
        <div className="two">
          
        </div>
      </div>
      <div className="rgt">
        <div className='newsImg'></div>
        <div className='newsContent'>{news}</div>
        <div>{news}</div>
      </div> */}
    </div>
  );
}

export default Main;
