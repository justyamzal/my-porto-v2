import HamburgerLineElement from '../elements/HamburgerLineElement'

export default function MobileToggleFragment({ open, onToggle }) {
  return (
    <button type="button" onClick={onToggle} aria-label="Toggle menu" className="relative z-[100] h-5 w-7 md:hidden">
      <HamburgerLineElement className={open ? 'top-[9px] rotate-[135deg]' : 'top-0'} />
      <HamburgerLineElement className={open ? 'top-[9px] -translate-x-8 opacity-0' : 'top-[9px]'} />
      <HamburgerLineElement className={open ? 'top-[9px] -rotate-[135deg]' : 'top-[18px]'} />
    </button>
  )
}
