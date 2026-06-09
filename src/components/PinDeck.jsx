function PinDeck({standingPins, setStandingPins}) {
    function handlePinClick(pin){
        if (standingPins.includes(pin)){
            setStandingPins(
                standingPins.filter(
                    p => p !== pin 
                )
            )
        }
        else {
            setStandingPins([
                ...standingPins, pin
            ])
        }
    }
    const pinRows = [
        [7,8,9,10],
        [4,5,6],
        [2,3],
        [1]
    ]
    return (
        <div className="mt-8">
            <h2 className = "font-bold text-xl text-slate-700 mb-6">
                Pins Left
            </h2>
            <div className="flex flex-col items-center gap-4">
               {pinRows.map((row, index)=>(
                <div key={index} className="flex gap-2 justify-center">
                    {row.map((pin)=>(
                        <div key={pin} onClick ={() => handlePinClick(pin)} className={standingPins.includes(pin) ? "w-10 h-10 rounded-full bg-[#880011] border flex items-center justify-center text-md font-bold text-white" : "w-10 h-10 rounded-full bg-[#D3902F] border flex items-center justify-center text-md font-bold text-slate-700 transition-all duration-200 scale-95"}>
                    {pin}
                    </div>
                    ))}
                </div>
               ))}
        </div>
        </div>
    )
}

export default PinDeck