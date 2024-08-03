import CarouselHomePage from "../../Components/Carousel/CarouselHome"
import Information from "../../Components/Information/Information"
import GallerySample from "../../Components/Samples/GallerySample"
import ProductsSample from "../../Components/Samples/ProductsSample"
import Special from "../../Components/Special/Special"

const HomePage = () => {
  return (
    <div>
      <CarouselHomePage/>
      <Information/>
      <Special/>
      <GallerySample/>
      <ProductsSample/>
    </div>
  )
}

export default HomePage