export default function HamburgerLineElement({ className = '' }) {
  return (
    <span
      className={`absolute left-0 h-[2px] w-full rounded bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-200 ${className}`}
    />
  )
}
