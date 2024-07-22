import UpNewsMain from "./upNewsMain";


export default function UpNews(){
    return(<>
    <h2 className="mt-20">급상승 주식뉴스</h2>
    <div className="flex flex-row gap-[5rem]">
   <UpNewsMain back="https://img.etoday.co.kr/pto_db/2024/07/20240722105057_2054435_600_400.jpg" logo="./images/버튼왼쪽.png" text="가가가가"></UpNewsMain>
   <UpNewsMain back="https://img.etoday.co.kr/pto_db/2024/07/20240722105057_2054435_600_400.jpg" logo="./images/버튼왼쪽.png" text="가가가가"></UpNewsMain>
   <UpNewsMain back="https://img.etoday.co.kr/pto_db/2024/07/20240722105057_2054435_600_400.jpg" logo="./images/버튼왼쪽.png" text="가가가가"></UpNewsMain>
   </div>
    </>)
  
}