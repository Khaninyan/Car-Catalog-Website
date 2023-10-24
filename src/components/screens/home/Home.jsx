import { useMemo } from 'react'
import CarItem from './car-item/CarItem.jsx'
import {cars} from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'


function Home() {
const filteredCars = useMemo(()=> cars.filter(car => car.price > 20000), [])


return (
<>
  <h1>
    Cars Catalog
  </h1>
  <CreateCarForm />
  <div>
    {
    filteredCars.length
    ?(filteredCars.map(car =>
    <CarItem key={car.id} car={car} />))
    :(<p> There are no cars</p>)
    }
  </div>
</>
)
}

export default Home