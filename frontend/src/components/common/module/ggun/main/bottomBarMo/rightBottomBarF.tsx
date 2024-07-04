

import { rightBotTitle } from "../data/main"
import { rightBot } from "../types/main"



function RightbottomCom(props: rightBot) {
    return (
        <>
            <a href="#" className="w-[15rem] h-[12rem] bg-[--color-pebble-hover] flex justify-center items-center font-bold text-[1.5rem] text-white"> {props.title}
            </a>
        </>
    )
}

export default function RightBottomBarF() {
    return (
        <>
            <RightbottomCom title={rightBotTitle[0].title}></RightbottomCom>
            <RightbottomCom title={rightBotTitle[1].title}></RightbottomCom>
            <RightbottomCom title={rightBotTitle[2].title}></RightbottomCom>
            <RightbottomCom title={rightBotTitle[3].title}></RightbottomCom>
            <RightbottomCom title={rightBotTitle[4].title}></RightbottomCom>
            <RightbottomCom title={rightBotTitle[5].title}></RightbottomCom>
        </>
    )
}