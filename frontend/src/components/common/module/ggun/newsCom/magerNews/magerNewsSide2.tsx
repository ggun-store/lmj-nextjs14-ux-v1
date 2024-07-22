import { MajorSideCom, MajorSideCom2 } from "../data/majorNewsData";
import NewImageCom from "../newsImageCom";


export default function MajorNewsSide2() {
    return (<>
        <div className=" flex flex-col">
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom2[0].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[0].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[25rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom2[1].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[1].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom2[2].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[2].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom2[3].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[3].background} />
                </div>
            </a>
            <a href="#" className="flex flex-row w-[20rem]">
                <h2 className="w-[15rem] h-[5rem]">{MajorSideCom2[4].text}</h2>
                <div className="flex flex-col">
                    <NewImageCom width="w-[5rem]" high="h-[5rem]" back={MajorSideCom[4].background} />
                </div>
            </a>
        </div>

    </>)
}