import landingimage from "../assets/mobile-app (2).jpg"
import appImage from "../assets/app.jpg"
import playImage from "../assets/play.jpg"
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Order Tasty & Fresh Foods Anytime
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingimage}  />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order Takeaway Even Faster
                </span>
                <span>
                    Download our app and enjoy the convenience of ordering food online. Our app allows you to place orders, track the status of your order, and even get your food delivered to your doorstep
                    With our app, you can place your order in just minutes.
                </span>
                <div className="grid md:grid-cols-2 gap-5 ">
                    <img src={appImage} className="border"/>
                    <img src={playImage} className="border" />
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default HomePage