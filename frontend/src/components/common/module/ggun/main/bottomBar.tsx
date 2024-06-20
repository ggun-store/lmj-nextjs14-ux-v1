import LeftBottomBarT from "./bottomBarMo/leftBottomBarT";
import RightBottomBarF from "./bottomBarMo/rightBottomBarF";

export default function BottomBar() {
    return (
        <>  
            <div className="flex">
            <LeftBottomBarT></LeftBottomBarT>
            <div className="w-[0px] h-[0px] bg-[--color-pebble-3] border-[--color-pebble-hover] border-r-[0px] border-l-[12rem] border-b-[12rem] border-l-[transparent]">
            </div>
            <RightBottomBarF></RightBottomBarF>
            </div>
        </>
    )
}