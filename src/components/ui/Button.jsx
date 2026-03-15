export default function Button({
    href = '#',
    children,
    variant = "primary",
    target,
    rel,
}) {
    const baseClass = "inline-flex item-center rouded-full px-5 py-3 text-sm font-semibold transition duration-300";
    const variants = {
        primary: "bg-violet-500 text-white hover:bg-violet-600 shadow-lg shadow-violet-500/20",
        secondary: "border border-white/15 bg-white text-white hover:bg-white/10",
    };
    return(
        <a href={href} target={target} rel={rel} className={`${baseClass} ${variants[variant]}`}>
            {children}
        </a>
    )
}