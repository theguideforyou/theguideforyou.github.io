interface Props {
  title: string;
  iconPath: string;
  detailBgColor: string;
  link: string;
}

export function Card({ title, iconPath, detailBgColor, link }: Props) {
  return (
    <a href={link} className='langCardAnchor'>
      <div className='langCardBox flex-1 bg-zinc-800 text-white rounded-2xl p-4 flex border border-red-500 items-center gap-4 cursor-pointer hover:bg-transparent transition-all'>
        <div className={`${detailBgColor} rounded-xl p-2 flex items-center justify-center`}>
          <img src={iconPath} alt={title} className="rounded-xl w-10 h-10" />
        </div>

        <span className='font-medium text-lg'>{title}</span>
      </div>
    </a>
  )
}