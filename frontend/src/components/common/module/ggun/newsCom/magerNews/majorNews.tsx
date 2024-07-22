'use client'

import MajorNewsSide from "./magerNewsSide";
import { useState } from "react";
import MajorHandle, { HandleICON } from "./majorHandle";
import MajorNewsSide2 from "./magerNewsSide2";
import MajorNewsSide3 from "./magerNewsSide3";
import NewImageCom from "../newsImageCom";
import { MajorCom1, MajorCom2 } from "../data/majorNewsData";

export default function MajorNews() {

    const [count, setCount] = useState(1)
    
    const handleNext = () => {
        if (count === 1) {
            setCount(2)
        } else if (count == 2) {
            setCount(3)
        } else if (count === 3) {
            setCount(1)
        }
    }
    const count3 = () =>{
        setCount(3)
    }
    const count2 =() =>{
        setCount(2)
    }
    const count1 =() =>{
        setCount(1)
    }
    return (<>
        
            <h2 className=" text-[2.2rem] font-bold">주요뉴스</h2>
            <div className="flex flex-row">
                <div className="relative">
                    <NewImageCom width="w-[50rem]" high="h-[25rem]" back={MajorCom1[1].background} />
                </div>
                <h2 className="absolute text-white top-[600px]">{MajorCom2[0].text}
                <div className="absolute top-[3rem] left-[0rem]">
                <MajorHandle handleNext={handleNext} onwrap3={count3} onwrap2={count2} onwrap1={count1}/>
                </div>
                </h2>
                <div className="ml-[2rem]">
                    {(count===1) ? <MajorNewsSide/> : (count===2) ? <MajorNewsSide2/> : (count===3) ? <MajorNewsSide3/> : <MajorNewsSide/>}
                </div>
            </div>

 

    </>)
}
