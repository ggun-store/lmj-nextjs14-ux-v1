export default function CenterCom() {
    return (
        <div className="flex items-center flex-col w-[10vw] h-[60vh]">
            <button className="border-4 border-double border-[--color-pebble-1] w-[9.5vw] h-[20vh] hover:border-[--color-pebble-hover] text-[1.5rem] text-[--color-pebble-2] hover:text-[--color-pebble-hover] font-bold">
                시장지수
            </button>
            <button className="border-4 border-double border-[--color-pebble-1] w-[9.5vw] h-[20vh] hover:border-[--color-pebble-hover] text-[1.5rem] text-[--color-pebble-2] hover:text-[--color-pebble-hover] font-bold">
                국내투자
            </button>
            <button className="border-4 border-double border-[--color-pebble-1] w-[9.5vw] h-[20vh] hover:border-[--color-pebble-hover] text-[1.5rem] text-[--color-pebble-2] hover:text-[--color-pebble-hover] font-bold">
                해외투자
            </button>
        </div>
    )
}