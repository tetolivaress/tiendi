import ClothingDetail from '@components/clothes/ClothingDetail'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef } from 'react'
import { useSwipeable } from 'react-swipeable'

const Carousel = ({ cards, cardsAmount }) => {

  let carousel = useRef(null)

  const refPassthrough = (el) => {
    handleSwipe.ref(el)
    carousel.current = el
  }

  const handleSwipe = useSwipeable({
    onSwipedLeft: ()=>carouselScroll(1),
    onSwipedRight: ()=>carouselScroll(-1)
  })

  const carouselScroll = (sign = 1) => {
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
        onClick={()=>carouselScroll(-1)}
    />
      <ChevronRightIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 right-2 cursor-pointer"
        onClick={()=>carouselScroll(1)}  
      />
      <div className="flex flex-nowrap overflow-hidden" {...handleSwipe} ref={refPassthrough}>
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