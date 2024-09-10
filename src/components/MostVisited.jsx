import React from 'react'
import Card from './Card'

const MostVisited = () => {

   let destinations = [
      {image:`https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` , name:'Bora Bora' , city:'New Zealand', price:700},
      {image:`https://th.bing.com/th/id/OIP.kqj97k4nSYxid6qEl-zmvQHaE8?rs=1&pid=ImgDetMain` , name:'Machu Picchu' , city:'Peru', price:600},
      {image:`https://th.bing.com/th/id/OIP.b4k4DR4BrlJOQ_ld1pMHqgHaEl?rs=1&pid=ImgDetMain` , name:'Great Barrier Reef' , city:'Australia', price:700},
      {image:`https://th.bing.com/th/id/R.23f49b078f22f53759ff2d327994c4dc?rik=3HFup1bx4IZJ9w&riu=http%3a%2f%2fstatic.thousandwonders.net%2fCappadocia.original.3081.jpg&ehk=8ZOGnx3ccX0cVcJbO%2beYNNM%2fAjjlgg9ohiUHd%2b4dIag%3d&risl=&pid=ImgRaw&r=0` , name:'Cappadocia' , city:'Turkey', price:800},
      {image:`https://th.bing.com/th/id/OIP.yqWVCZNkp7I1TYHG_DD0OgHaE8?rs=1&pid=ImgDetMain` , name:'Guanajuato' , city:'Mexico', price:1100},
      {image:`https://th.bing.com/th/id/OIP.S8zBiBeytZKlWala3H6VowHaE7?rs=1&pid=ImgDetMain` , name:'Cinque Terre' , city:'Italy', price:840},
      {image:`https://th.bing.com/th/id/OIP.VhLWn4mH205ujX-9k9BAMAHaE8?rs=1&pid=ImgDetMain` , name:'Angkor Wat' , city:'Cambodia', price:790},
      {image:`https://th.bing.com/th/id/OIP.MNd02FVHCBVYfL0rS9DtDgHaE7?rs=1&pid=ImgDetMain` , name:'Taj Mahal' , city:'India', price:900},
      {image:`https://thepointsguy.global.ssl.fastly.net/us/originals/2020/05/GettyImages-1145042281-scaled.jpg` , name:'Bali Island' , city:'Indonesia', price:500},
   ]

   return (
      <nav className='container mx-auto py-10'>
         <h1 className='text-neutral-700 font-bold text-3xl mb-5'>Most Visited Destinations</h1>
         <div className="cards grid gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {destinations.map((element , index) => {
               return <Card key={index} element={element} />
            })}
         </div>
      </nav>
   )
}

export default MostVisited
