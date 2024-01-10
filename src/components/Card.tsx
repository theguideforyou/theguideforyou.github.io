interface Props {
  title: string;
  iconPath: string;
  library: string;
  bgColor: string;
  textColor: string;
  link: string;
}

export function Card({ title, iconPath, library, bgColor, textColor, link }: Props) {
  return (
    <a href={link} className='langCardAnchor'>
      <div className='langCardBox flex-1 bg-[#1d1d1d] text-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-transparent transition-all'>
        <div className={`${bgColor} rounded-xl p-2 flex items-center justify-center`}>
          <img src={iconPath} alt={title} className='rounded-lg w-10 h-10 min-w-10 min-h-10' />
        </div>
        <div className='flex flex-col items-start justify-center h-full mb-2 truncate'>
          <span className='font-medium text-lg text-ellipsis'>{title}</span>
          <span className={`text-sm ${textColor}`}>{library}</span>
        </div>
      </div>
    </a>
  )
}