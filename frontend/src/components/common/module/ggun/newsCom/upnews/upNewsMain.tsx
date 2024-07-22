import NewImageCom from "../newsImageCom";

export default function UpNewsMain({back,logo,text}:any ){
    return(<>
    <div className="flex flex-col">
    <NewImageCom width="w-[25rem]" high="h-[15rem]" back={back}></NewImageCom>
    <a className="w-[25rem] h-[4rem]" href="">
        <img src={logo} alt="이미지오류" />
    </a>
    <h2>{text}</h2>
    </div>
    </>)
  
}