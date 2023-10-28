import React, {useState } from "react";
import "./Main.css";
import profile from "../../assets/profile.png";
import icons from "../../assets/main_img";
import axios from "axios";
import Timer from "../timer/Timer";
import alter from "../../assets/alt.jpg"
import {useNavigate} from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  let [weather, setWeather] = useState();
  let [temperature, setTemperature] = useState();
  let [pressure, setPressure] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [ico, setIco] = useState();
  let [newsImg, setNewsImg] = useState(alter); 
  let [newsTitle, setNewsTitle] = useState();
  const mapio =
    "https://newsdata.io/api/1/news?apikey=pub_31005d3220e4fef573dbae1462ac80227c6fa&q=random%20news%20with%20image";
  let [news, setNews] = useState();
  let [location, setLocation] = useState("Chennai");
  var urlOne = "https://api.openweathermap.org/data/2.5/weather?q=";
  var urlTwo = location;
  var urlThree = "&appid=";
  var urlFour = "4a531710598d1e8c156301b701107a80&units=metric";
  var api = urlOne.concat(urlTwo, urlThree, urlFour);
  let [sw, setSw] = useState(true);
  async function fun() {
    if(sw == true){
    setSw(false);
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
    var x = Math.floor(Math.random() * 10);
    console.log(x);
    setNews(input.data.results[x].content);
    if(input.data.results[x].image_url === undefined){
      setNewsImg(alter);
    }
    else{
      setNewsImg(input.data.results[2].image_url);
    }
    setNewsTitle(input.data.results[2].title);
  }
  }
  fun();
  var cates = JSON.parse(localStorage.getItem("choiceList"));
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hr = date.getHours();
  var hour = hr % 12 === 0 ? 12 : hr % 12;
  var meridian = hr % 12 === 0 ? "AM" : "PM";
  var min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  // nxt page 
  const bucket = ()=> {
    navigate('/Movie');
  }
  //location fetch
  window.onload = async function local(){
    var target = await axios.get("https://ipapi.co/json");
    setLocation(target.data.city)
  }
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
                      <img src={`https://openweathermap.org/img/wn/${ico}@2x.png`} className="icimg"/>
                    </div>
                    <div className="weatherState">{weather}</div>
                </div>
                <div className="line"></div>
                <div className="temp">
                  <div className="celBox">
                    <p className="cel">
                      {Math.round(temperature)}
                      <span className="joking">&#176;</span> c
                    </p>
                  </div>
                  <div className="pBox">
                    <img className="iconTemp" src={icons.temp} alt="pressureICon" />
                    <div className="pDetails">
                      <p>{pressure} mbar</p>
                      <p>Pressure</p>
                    </div>
                  </div>
                </div>
                  <div className="line"></div>
                  <div className="wh">
                    <div className="wind">
                      <img className="windIcon" src={icons.wind} alt="windIcon" />
                      <div className="windDeails">
                        <p>{wind} km/h</p>
                        <p>wind</p>
                      </div>
                    </div>
                    <div className="humidity">
                      <img className="humIcon" src={icons.humidity} alt="humidityIcon"/>
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
                <textarea className="notes_section"></textarea>
              </div>
            </div>
          </div>
          <div className="timeBox">
            <Timer />
          </div>
        </div>
        <div className="rght">
          <div className="news">
            <div className="newsImg">
            <div className="opBox">
              <div className="newsTitle">{newsTitle} <br />
              <div className="miniDT">
                {day}-{month}-{year} <span className="space"></span>{hour}:{min} {meridian}
              </div>
              </div>
            </div>
              <img src={newsImg} alt="newsImg"/>
            </div>
            <div className="newsContent">
              <div>{news}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_section">
        <button className="browse_btn" onClick={bucket}>Browse</button>
      </div>
    </div>
  );
}

export default Main;
// main page