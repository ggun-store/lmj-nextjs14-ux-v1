import { MajorSideCom, MajorSideCom3 } from "../data/majorNewsData";
import NewImageCom from "../newsImageCom";

export default function MajorNewsSide3() {
    return (<>
        <div className=" flex flex-col">
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom3[0].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[0].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[25rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom3[1].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[1].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom3[2].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[2].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom3[3].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[3].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom3[4].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[4].background} />
                </div>
            </a>
        </div>

    </>)
}