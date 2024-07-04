

import { leftBotTitle } from "../data/main"
import { leftBot } from "../types/main"


function LeftbottomCom(props: leftBot) {
    return (
        <>
            <a href="#" className="w-[15rem] h-[12rem] bg-[--color-pebble-3] flex justify-center items-center font-bold text-[1.5rem] text-white"> {props.title}
            </a>
        </>
    )
}

export default function LeftBottomBarT() {
    return (
        <>
            <LeftbottomCom title={leftBotTitle[0].title}></LeftbottomCom>
            <LeftbottomCom title={leftBotTitle[1].title}></LeftbottomCom>
            <LeftbottomCom title={leftBotTitle[2].title}></LeftbottomCom>
            <LeftbottomCom title={leftBotTitle[3].title}></LeftbottomCom>
            <LeftbottomCom title={leftBotTitle[4].title}></LeftbottomCom>
            <LeftbottomCom title={leftBotTitle[5].title}></LeftbottomCom>
        </>
    )
}