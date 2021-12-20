function SideLogo() {
    return (
        <div className="flex items-center gap-2 text-slate-900 cursor-pointer">
            <div className="text-5xl font-semibold">ROOM</div>
            <div className="flex w-20 h-20 text-3xl flex-col border-4 border-l-0 border-r-indigo-500 border-t-indigo-500 border-b-indigo-500">
                <span className="px-5">40</span>
                <span className="px-5 border-l-4 border-l-indigo-500">10</span>
            </div>
        </div>
    )
}

export default SideLogo
