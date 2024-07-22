

export type NewImageCom = {
    width: string;
    high: string;
    back: string;
}


export default function NewImageCom({ width, high, back }: NewImageCom) {
    return (<>
        <div className={` rounded-[16px]`}>
            <img className={`${width} ${high} rounded-[16px]`} src={`${back}`} alt="안나옴" />
            
        </div>
    </>
    )
}