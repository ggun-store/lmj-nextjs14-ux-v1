import Header from "@/components/common/module/ggun/main/header";
import Hotnews from "@/components/common/module/ggun/newsCom/hotnews/hotnews";
import MajorNews from "@/components/common/module/ggun/newsCom/magerNews/majorNews";
import UpNews from "@/components/common/module/ggun/newsCom/upnews/upNews";



export default function News(){
    return(<>
    <Header></Header>
    <div className="mt-28 flex items-center flex-col justify-center">
    <MajorNews></MajorNews>
    <Hotnews></Hotnews>
    <UpNews></UpNews>
    </div>
    </>)
}