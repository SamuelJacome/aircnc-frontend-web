import React, { useState } from 'react';

export default function New() {
    const [thumbnail, setThumbnail] = useState(null)
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    function handleSubmit() {

    }
    return (
        <form onSubmit={handleSubmit}>


            <label id="thumbnail">
            <input
                type="file" onChange={event => setThumbnail(event.target.files[0])}
            />
            {/* <img src={camera} alt='Select img'/> */}

            </label>
           

            <label htmlFor='company'>EMPRESA</label>
            <input
                id='company'
                placeholder='Sua empresa incrivel'
            />


            <label htmlFor='techs'>TECNOLOGIAS</label>
            <input
                id='techs'
                value={techs}
                placeholder='tecnologias'
                onChange={event => setTechs(event.target.value)}
            />


            <label htmlFor='price'>VALOR</label>
            <input
                id='price'
                value={techs}
                placeholder='Valor cobrado'
                onChange={event => setPrice(event.target.value)}
            />

            <button type='submit' className></button>


        </form>

    )
}