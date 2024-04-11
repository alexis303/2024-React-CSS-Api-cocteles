import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Profile = () => {
  // www.thecocktaildb.com/api/json/v1/1/random.php
  // "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  const [arrayCocteles, setArrayCocteles] = useState([])
  const [inputBuscar, setInputBuscar] = useState("")
  useEffect(() => {
    const fetchData =  async() => {
      if (inputBuscar === "") {
        try {
          const array:any =[]
          for (let i = 0; i < 20; i++) {
            const response =  await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            array.push(response.data.drinks[0])
          }
          setArrayCocteles(array)
  
        } catch (error) {
          console.log("error", error)
        }
      }else{
        try {
          const array:any =[]
          const response =  await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputBuscar}`)
          console.log("jhewq0", response.data.drinks)
          array.push(response.data.drinks)
          setArrayCocteles(array[0]=== null ? [] : array[0])
        } catch (error) {
          console.log("error", error)
        }
      }
    }
    fetchData()
  },[inputBuscar])

  return (
    <div className='containerHome'>
      <div className='containerBuscardor'>
        <input className='inputBuscador' type="text" placeholder='Buscar' onChange={(text) => setInputBuscar(text.target.value)}/>
      </div>
      
      <div className='containerCocteles'>
        {
          arrayCocteles.map((item:any, index) => (
            <div key={index} className='cardCoctelContainer'>
            <div className='cardCoctelCara1'>
              <img src={item.strDrinkThumb} alt="" />
              <h1>{item.strDrink}</h1>
            </div>
            <div className='cardCoctelCara2'>
            
              <h1>{item.strDrink}</h1>
              <div className='lineaDivision2'></div>
              <h2>{item.strCategory}</h2>
              <div className='lineaDivision'></div>
              <h2>Ingredientes</h2>
              <h3>{item.strIngredient1=== null ? null : "- "+item.strIngredient1}</h3>
              <h3>{item.strIngredient2=== null ? null : "- "+item.strIngredient2}</h3>
              <h3>{item.strIngredient3=== null ? null : "- "+item.strIngredient3}</h3>
              <h3>{item.strIngredient4=== null ? null : "- "+item.strIngredient4}</h3>
              <h3>{item.strIngredient5=== null ? null : "- "+item.strIngredient5}</h3>
              <h3>{item.strIngredient6=== null ? null : "- "+item.strIngredient6}</h3>
              <h3>{item.strIngredient7=== null ? null : "- "+item.strIngredient7}</h3>
              <h3>{item.strIngredient8=== null ? null : "- "+item.strIngredient8}</h3>
              <h3>{item.strIngredient9=== null ? null : "- "+item.strIngredient9}</h3>
              <h3>{item.strIngredient10=== null ? null : "- "+item.strIngredient10}</h3>
              <h3>{item.strIngredient11=== null ? null : "- "+item.strIngredient11}</h3>
              <h3>{item.strIngredient12=== null ? null : "- "+item.strIngredient12}</h3>
              <h3>{item.strIngredient13=== null ? null : "- "+item.strIngredient13}</h3>
              <h3>{item.strIngredient14=== null ? null : "- "+item.strIngredient14}</h3>
              <h3>{item.strIngredient15=== null ? null : "- "+item.strIngredient15}</h3>

              <div className='lineaDivision'></div>
              <h2>Instrucciones</h2>
              <h3>{item.strInstructionsES=== null ? item.strInstructions :item.strInstructionsES}</h3>
              
            </div>
          </div>
          ))
        }
      </div>  
    </div>
  )
}

export default Profile