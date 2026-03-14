export default function BrandFragment({ hideOnFloating }) {
  return (
    <a
      href="#about"
      className={`${hideOnFloating ? 'hidden md:block' : 'block'} text-[1.15rem] font-bold tracking-[0.04em]`}
    >
      <span className="text-violet-500">Yadri</span>{' '}
      <span className="text-violet-500">Amtsal</span>
    </a>
  )
}
