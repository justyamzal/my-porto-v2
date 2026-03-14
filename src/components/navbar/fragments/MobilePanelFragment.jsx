import { Nav_Links } from '../../terms/navbar.terms'
import NavLinkElement from '../elements/NavLinkElement'

export default function MobilePanelFragment({ open, floating, activeSection, onClose }) {
  if (!open) return null

  return (
    <nav
      className={`absolute left-0 right-0 top-[110%] rounded-2xl border p-4 backdrop-blur-xl md:hidden ${
        floating ? 'border-violet-400/30 bg-white/95' : 'border-white/10 bg-slate-900/95'
      }`}
    >
      <div className="flex flex-col">
        {Nav_Links.map((link, i) => (
          <div key={link.id} className={i < Nav_Links.length - 1 ? 'border-b border-white/10 py-3' : 'py-3'}>
            <div className="group">
              <NavLinkElement
                href={link.href}
                label={link.label}
                active={activeSection === link.id}
                floating={floating}
                onClick={onClose}
              />
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
