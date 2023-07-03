import { Link } from "react-router-dom";

export default function CTA() {
    return(
        <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Some of our clients</span>
          <span className="block text-orange-button">Yo can be one of them.</span>
        </h2>
        <div className="inline-flex rounded-md shadow">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-button px-5 py-3 text-base font-medium text-white hover:bg-gray-900 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
        </div>
      </div>
      
    </div>
    )
}