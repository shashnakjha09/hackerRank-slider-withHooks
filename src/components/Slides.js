import React, { useState } from 'react'
import "./style.css"
function Slides() {
    const dataSet = [
        {
            title:"first Special Title",
            subTitle : "With supporting text below as a natural lead-in to additional content111"
        },
        {
            title:"second Special Title",
            subTitle : "With supporting text below as a natural lead-in to additional content222"
        },
        {
            title:"Third Special Title",
            subTitle : "With supporting text below as a natural lead-in to additional content333"
        }
    ]

    const[data , setData] = useState(dataSet);
    const [activeSlideNo, setActiveSlideNo] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(data[0]);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledRestart, setDisabledRestart] = useState(true);
         
        const onClickRestart  = () => {
            setActiveSlideNo(0);
            setCurrentSlide(data[0]);
            setDisabledPrev(true);
            setDisabledNext(false);
            setDisabledRestart(true);
        }

        const onClickNext = () => {
            var curSlideNo = activeSlideNo;
            
            if(curSlideNo < data.length-1) {
              curSlideNo ++;
              setActiveSlideNo(curSlideNo);
              setCurrentSlide(data[curSlideNo]);
              setDisabledPrev(false);
              setDisabledRestart(false);
            }
      
            if(curSlideNo === data.length-1) {
              setDisabledNext(true);
            }
          }


          const onClickPrev = () => {
            var curSlideNo = activeSlideNo;
            
            if(curSlideNo > 0) {
              curSlideNo --;
              setActiveSlideNo(curSlideNo);
              setCurrentSlide(data[curSlideNo]);
              setDisabledNext(false);
            } 
            if(curSlideNo === 0) {
              setDisabledPrev(true);
              setDisabledRestart(true);
            }
          }

    return (
        <>
            <div className="buttons">
                <button type="button" onClick={onClickRestart} disabled={disabledRestart} >Reset</button>
                <button type="button" onClick={onClickPrev } disabled={disabledPrev} >Prev</button>
                <button type="button" onClick={onClickNext} disabled={disabledNext} >Next</button>
            </div>
             
            <div className="card-content">
                <div className="forBorder">
                    <div><h2>{currentSlide.title}</h2></div>
                    <div><p id="para">{currentSlide.subTitle}</p></div>
                </div>
            </div>

        </>
    )
}

export default Slides
