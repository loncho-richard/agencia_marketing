function ServicesCard({ data, index }){
    return(
        <div 
        onMouseEnter={()=>{
            const title_element = document.getElementById(index);
            title_element.classList.add("text-orange-button");
            title_element.classList.remove('text-gray-900');
            
        }}

        onMouseLeave={()=>{
            const title_element = document.getElementById(index);
            title_element.classList.remove('text-orange-button');
            title_element.classList.add('text-gray-900');

        }}
        className="w-full relative p-6 h-96 lg:h-[160pm] bg-white hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full">
                <img src={data.img} className="w-12 h-12" alt="" />
                <h2 className="text-xl font-semibold text-gray-900">{data.title}</h2>
                <p className="text-lg font-normal text-gray-700 pt-4">{data.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
                <h2 id={index} className="items-end-1 text-xl font-semibold text-gray-900">Learn More</h2>
            </div>
        </div>
    )
}

export default ServicesCard;