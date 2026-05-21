function PinDeck() {
    return (
        <div className="mt-8">
            <h2 className = "font-bold text-xl mb-6">
                Pins Left
            </h2>
            <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">7</div>
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">8</div>
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">9</div>
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">10</div>
                    </div>
                <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">4</div>
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">5</div>
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">6</div>
                </div>
                <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">2</div>
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">3</div>
                </div>
                <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-md font-bold text-slate-700">1</div>
                </div>
            </div>
        </div>
    )
}

export default PinDeck