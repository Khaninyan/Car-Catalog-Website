import React ,{useState} from 'react'

import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {

const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [image, setImage] = useState('')

const createCar = e => {
e.preventDefault()
console.log({name,price,image})
}

return (
<form className={styles.form}>
    <input placeholder='Name' onChange={e=>setName(e.target.value)}
    />
    <br />
    <input placeholder='Price' onChange={e=>setPrice(e.target.value)}
    />
    <br />
    <input placeholder='Image' onChange={e=>setImage(e.target.value)}
    />
    <br />
    <button onClick={e=>createCar(e)}>Create</button>
</form>
)
}

export default CreateCarForm