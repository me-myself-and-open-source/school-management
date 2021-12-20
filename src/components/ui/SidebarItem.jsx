function SidebarItem({ icon, text }) {
    return (
        <div className="flex items-center py-3 ml-4 mr-8 px-4 rounded-full font-bold cursor-pointer hover:bg-indigo-50 text-slate-800 hover:text-indigo-600">
            <span className="w-4 h-4">{icon}</span>
            <span className="ml-2">{text}</span>
        </div>
    )
}

export default SidebarItem
