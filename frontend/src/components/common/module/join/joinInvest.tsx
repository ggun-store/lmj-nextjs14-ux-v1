'use client'

import { useState } from "react"

export default function JoinInvest() {

    const [invest1, setInvest1] = useState(false)
    const [invest2, setInvest2] = useState(false)
    const [invest3, setInvest3] = useState(false)
    const [invest4, setInvest4] = useState(false)
    const [invest5, setInvest5] = useState(false)

    const handleInvest1 = () => {
        setInvest1(true)
        setInvest2(false)
        setInvest3(false)
        setInvest4(false)
    }
    const handleInvest2 = () => {
        setInvest1(false)
        setInvest2(true)
        setInvest3(false)
        setInvest4(false)
    }
    const handleInvest3 = () => {
        setInvest1(false)
        setInvest2(false)
        setInvest3(true)
        setInvest4(false)
    }
    const handleInvest4 = () => {
        setInvest1(false)
        setInvest2(false)
        setInvest3(false)
        setInvest4(true)
    }
    const handleInvest5 = () => {
        setInvest1(false)
        setInvest2(false)
        setInvest3(false)
        setInvest4(false)
        setInvest5(true)
    }

    return (
        <>
            <div className="flex justify-center items-center gap-[2rem] flex-row">
                <button type="button" className="w-[2rem] h-[2rem] bg-red-300" onClick={handleInvest1}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-purple-300" onClick={handleInvest2}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-blue-300" onClick={handleInvest3}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-amber-200" onClick={handleInvest4}>
                </button>
                <button type="button" className="w-[2rem] h-[2rem] bg-green-300" onClick={handleInvest5}>
                </button>
            </div>
            <div className="flex justify-center items-center flex-col">
                {
                    invest1 == true ?
                        <div className="w-[23rem] h-[8rem] flex justify-center items-center flex-col">
                            <h2 className=" font-semibold text-red-500">공격투자형
                            </h2>
                            <h3 className="mt-2 text-white">시장평균 수익률을 훨씬 넘어서는 높은 수준의 투자수익을 추구하며, 위험자산에 투자할 수 있는 투자성향입니다.</h3>
                        </div> : (invest2 == true) ? <div className="w-[23rem] h-[8rem] flex justify-center items-center    flex-col">
                            <h2 className="text-purple-500 font-semibold ">적극투자형
                            </h2>
                            <h3 className="mt-2 text-white">투자원금의 보존보다는 위험을 감내하더라도 높은 수준의 투자수익 실현을 추구하며, 위험자산에 투자할 수 있는 투자성향입니다.</h3>
                        </div> :
                            (invest3 == true) ? <div className="w-[23rem] h-[8rem] flex justify-center items-center    flex-col">
                                <h2 className="text-blue-500 font-semibold">위험중립형
                                </h2>
                                <h3 className="mt-2 text-white">투자에는 그에 상응하는 투자위험이 있음을 충분히 인식하고 있으며, 예적금보다 높은 수익을 기대할 수 있다면 일정수준의 손실위험을 감수할 수 있는 투자성향입니다.</h3>
                            </div> : (invest4 == true) ? <div className="w-[23rem] h-[8rem] flex justify-center items-center    flex-col">
                                <h2 className="text-yellow-500 font-semibold">안정추구형
                                </h2>
                                <h3 className="text-white">투자원금의 손실위험은 최소화하고 이자소득이나 배당소득 수준의 안정적인 투자를 목표로 하며 수익을 위해 단기적인 손실을 수용할 수 있으며 예적금보다 높은 수익을 기대할 수 있다면 일정수준의 손실위험을 감수할 수 있는 투자성향입니다.</h3>
                            </div> : (invest5 == true) ? <div className="w-[23rem] h-[8rem] flex justify-center items-center    flex-col">
                                <h2 className="text-green-500 font-semibold">안정형
                                </h2>
                                <h3 className="mt-2 text-white">예적금 수준의 수익률을 기대하며, 투자원금에 손실이 발생하는 것을 원치 않는 투자성향입니다.</h3>
                            </div> : <h2>당신의 투자성향 컬러를 선택해주세요</h2>
                }
            </div>


        </>
    )
}