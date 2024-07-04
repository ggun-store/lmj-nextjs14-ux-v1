import { centerTitle } from "./data/main";


type CenterTitle = {
    title : string;
}


function CenCOM(props:CenterTitle) {
    return (<>
        <button className="border-4 border-double border-[--color-pebble-1] w-[9.5vw] h-[20vh] hover:border-[--color-pebble-hover] text-[1.5rem] text-[--color-pebble-2] hover:text-[--color-pebble-hover] font-bold">
            {props.title}
        </button>

    </>
    )
}

export default function CenterCom() {
    return (
        <>
       <CenCOM title={centerTitle[0].title}></CenCOM>
       <CenCOM title={centerTitle[1].title}></CenCOM>
       <CenCOM title={centerTitle[2].title}></CenCOM>
        </>
    )
}