

const Footer = () => {
  return (
    <div className="bg-orange-500 py-3">
        <div className="containet mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-white font-bold tracking-tight">
                &copy; 2024 - Tasty Treats. All rights reserved.
            </span>

            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>privacy policy</span>
                <span>Terms of Services</span>
            </span>
        </div>
    </div>
  )
}

export default Footer