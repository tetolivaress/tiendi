import ClothingDetail from '@components/home/ClothingDetail'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef } from 'react'

const Carousel = ({ cards, cardsAmount }) => {

  let carousel = useRef(null)

  const rScroll = () => {
    const { current: { scrollLeft,scrollWidth, clientWidth }} = carousel
    carousel.current.scrollLeft = scrollLeft == (scrollWidth - clientWidth)
      ? 0
      : scrollLeft + clientWidth / cardsAmount
  }

  const lSscroll = () => {
    const { current: { scrollLeft, clientWidth, scrollWidth } } = carousel
    carousel.current.scrollLeft = scrollLeft
      ? scrollLeft - clientWidth / cardsAmount
      : scrollWidth
  }

  return (
    <div className="relative">
      <ChevronLeftIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 left-2 cursor-pointer"
        onClick={lSscroll}
    />
      <ChevronRightIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 right-2 cursor-pointer"
        onClick={rScroll}  
      />
      <div className="flex flex-nowrap overflow-hidden" ref={carousel}>
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