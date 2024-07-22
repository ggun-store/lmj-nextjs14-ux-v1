import { HotImage } from "../data/hotNewsData";
import HotnewsCom from "./hotnewsCom";

export default function Hotnews(){
    return(<>
    <div className="mt-20">
    <h2>지금 사람들이 많이 보는 뉴스</h2>
    </div>
    <div className="flex flex-row gap-[3rem] mr-[4.8rem]">
    <HotnewsCom url={HotImage[0].url} text={HotImage[0].text} src={HotImage[0].background}></HotnewsCom>
    <HotnewsCom url={HotImage[1].url} text={HotImage[1].text} src={HotImage[1].background}></HotnewsCom>
    <HotnewsCom url={HotImage[2].url} text={HotImage[2].text} src={HotImage[2].background}></HotnewsCom>
    <HotnewsCom url={HotImage[3].url} text={HotImage[3].text} src={HotImage[3].background}></HotnewsCom>
    </div>
    <div className="flex flex-row gap-[3rem] mr-[4.8rem]">
    <HotnewsCom url={HotImage[4].url} text={HotImage[4].text} src={HotImage[4].background}></HotnewsCom>
    <HotnewsCom url={HotImage[5].url} text={HotImage[5].text} src={HotImage[5].background}></HotnewsCom>
    <HotnewsCom url={HotImage[6].url} text={HotImage[6].text} src={HotImage[6].background}></HotnewsCom>
    <HotnewsCom url={HotImage[7].url} text={HotImage[7].text} src={HotImage[7].background}></HotnewsCom>
    </div>
    </>)
}