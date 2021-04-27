import { useState } from "react"
import ClothingDetail from '@components/home/ClothingDetail'

const Carousel = ({ cards, amountCards }) => {

  let [selectedCard, setSelectedCard] = useState(0)
  // const [, setAmountCards] = useState(1)

  const changeSelectedCard = (i) => {  
  if(i < 0) return setSelectedCard(cards.length-1)
  i < cards.length
    ? setSelectedCard(i)
    : setSelectedCard(0)
  }

  return (
    <div className="relative">
      <div 
        onClick={()=>changeSelectedCard(--selectedCard)}
        className="cursor-pointer absolute left-0 top-1/2"
      >
        prev
      </div>
      <div 
        onClick={()=>changeSelectedCard(++selectedCard)}
        className="cursor-pointer absolute right-0 top-1/2"
      >
        next
      </div>
      {cards.length && <ClothingDetail clothing={cards[selectedCard]} />}
    </div>
  )
}


export default Carousel