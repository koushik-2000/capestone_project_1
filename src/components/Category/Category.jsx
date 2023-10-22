import React,{useState} from 'react'
import './Category.css'
import images from '../../assets/cat_img'

function Category() {
  let [item, setItem] = useState([]);
  const toggle = (e)=>{
    var x = e.target.id;
    const bor = document.getElementById(x);
    if(!item.includes(x)){
      setItem([...item, x]);
      bor.classList.add("selected");
      bor.classList.remove("nope");
    }
    }
    const nxtPage = ()=>{
      var warn = document.getElementById("error");
      if(item.length >= 3){
        console.log('success');
        warn.classList.add("hide");
        var choices = JSON.stringify(item);
        localStorage.setItem("choiceList", choices);
      }
      else{
        warn.classList.remove("hide");
        console.log("fail");
      }
    }
    function cancel(e) {
      var tar = e.target.id;
      // var rem = document.getElementById(tar);
      let tata = document.getElementsByClassName(tar)[0];
      var x = item.filter(jam => jam !== tar);
      console.log(tar)
      setItem(x);
      tata.classList.add("nope");
    }
  return (
    <div className='main'>
        <div className="container">
            <div className='lefte'>
              <div className='banner'>
                  <h3 className='logo'>super app</h3>
                  <p className='caption'> Choose your <br />entertainment <br /> category</p>
              </div>
                <div className='choice'>
                  {item.map((element, index) =>(
                    <p key={index} id={element} className='neon'>{element} <img src={images.cross} alt="x" className='cross' onClick={(e)=>{cancel(e)}} id={element}/></p>
                  ))}
                </div>
                <div className='errorBox' >
                  <div className='hide' id='error'>
                    <img src={images.warn} alt='warning' className='warnImg'/>
                    <p className='inLine'>Minimum 3 category required </p>
                  </div>
                </div>
            </div>
            <div className="right">
                <div className='catImg'>
                    <div className="catItem action" id='action' onClick={toggle} >
                      <h3 className='title' id='action' onClick={toggle}>action</h3>
                      <img className='act' id='action' src={images.action} alt="action" onClick={toggle} />
                    </div>
                  <div className="catItem drama" id='drama' onClick={toggle}>
                    <h3 className='title' id='drama' onClick={toggle}>drama</h3>
                    <img className='act' src={images.drama} alt="action" id='drama' onClick={toggle}/>
                  </div>
                  <div className="catItem romance" id='romance' onClick={toggle}>
                    <h3 className='title' id='romance' onClick={toggle}>romance</h3>
                    <img className='act' src={images.romance} alt="action" id='romance' onClick={toggle} />
                  </div>
                  <div className="catItem thriller" id='thriller' onClick={toggle}>
                  <h3 className='title' id='thriller' onClick={toggle}>thriller</h3>
                    <img className='act' src={images.thriller} alt="action" id='thriller' onClick={toggle}/>
                  </div>
                  <div className="catItem western" id='western' onClick={toggle}>
                    <h3 className='title' id='western' onClick={toggle}>western</h3>
                    <img className='act' src={images.western} alt="action" id='western' onClick={toggle}/>
                  </div>
                  <div className="catItem horror" id='horror' onClick={toggle}>
                    <h3 className='title' id='horror' onClick={toggle}>horror</h3>
                    <img className='act' src={images.horror} alt="action" id='horror' onClick={toggle}/>
                  </div>
                  <div className="catItem fantasy" id='fantasy' onClick={toggle}>
                    <h3 className='title' id='fantasy' onClick={toggle}>fantasy</h3>
                    <img className='act' src={images.fantasy} alt="action" id='fantasy' onClick={toggle}/>
                  </div>
                  <div className="catItem music" id='music' onClick={toggle}>
                    <h3 className='title' id='music' onClick={toggle}>music</h3>
                    <img className='act' src={images.music} alt="action" id='music' onClick={toggle}/>
                  </div>
                  <div className="catItem fiction" id='fiction' onClick={toggle}>
                    <h3 className='title' id='fiction' onClick={toggle}>fiction</h3>
                    <img className='act' src={images.fiction} alt="action" id='fiction' onClick={toggle}/>
                  </div>
                </div>
                <div className="btn">
                  <button className='nxtPage' onClick={nxtPage}>next page</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category