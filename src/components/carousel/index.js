import ClothingDetail from '@components/home/ClothingDetail'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef } from 'react'

const Carousel = ({ cards, cardsAmount }) => {

  let carousel = useRef(null)

  const carouseScroll = (sign = 1) => {
    const { current: { scrollLeft, scrollWidth, clientWidth }} = carousel
    const x = clientWidth / cardsAmount * Math.sign(sign)
    const target = scrollLeft === (scrollWidth - clientWidth)
      ? 0
      : scrollLeft + x
    carousel.current.scrollTo({left: target, behavior: 'smooth'})
  }

  return (
    <div className="relative">
      <ChevronLeftIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 left-2 cursor-pointer"
        onClick={()=>carouseScroll(-1)}
    />
      <ChevronRightIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 right-2 cursor-pointer"
        onClick={()=>carouseScroll(1)}  
      />
      <div className="flex flex-nowrap overflow-hidden " ref={carousel}>
        {
          cards.length && cards.map((card, i) => (
            <div className={cardsAmount > 1 ? `min-w-1/${cardsAmount}` : 'min-w-full'}>
              <ClothingDetail clothing={cards[i]} cardsAmount={1} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Carousel