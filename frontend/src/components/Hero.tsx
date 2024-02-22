import hero from "../assets/background-food.jpg"

const Hero = () => {
  return (
    <div>
        <img src={hero} className="w-full max-h-[400px] object-cover "/>
    </div>
  )
}

export default Hero