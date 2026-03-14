export default function NavLinkElement({href, label, active, floating, onClick}) {
    const textClass = floating ? active
                                ?'text-white-900'
                                :'text-slate-600 hover:text-slate-900'
                                : active
                                ? 'text-white'
                                : 'text-slate-300 hover:text-slate hover:text-white'
    return (
        <a href={href} className={textClass} onClick={onClick}>
            {label}
            <span className={`absolute left-0 -bottom-[7px] h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
        </a>
    )
}