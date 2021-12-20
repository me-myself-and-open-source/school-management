function InputWithIcon({ type = 'text', icon, value = '', placeholder = '', onChange = {} }) {
    return (
        <div className="relative flex items-center text-gray-900 ">

            <span className="flex w-8 h-full absolute pointer-events-none items-center rounded-l-lg justify-center" >
                <span className="w-4 h-4">
                    {icon}
                </span>
            </span>

            <input type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                className="w-full pr-3 pl-10 py-2 font-semibold bg-slate-100 placeholder-gray-500 text-black rounded-lg border-none " />
        </div>
    )
}

export default InputWithIcon
