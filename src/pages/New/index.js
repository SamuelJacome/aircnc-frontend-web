import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg'
import './styles.css';
import api from '../../services/api';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null)
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')


    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail): null;
    }, [thumbnail])
    async function handleSubmit(event) {
        event.preventDefault()


        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)
        await api.post('http://localhost:3333/spots', data,{
            headers:{user_id}
        
        })
        history.push('/dashboard')
    }
    return (
        <>
        <form onSubmit={handleSubmit}>


            <label id="thumbnail" style = {{ backgroundImage: `url(${preview})`}}
            className={ thumbnail ? 'has-thumbnail' : ''}
            >
            <input
                type="file" 
                onChange={event => setThumbnail(event.target.files[0])}/>
            <img src={camera} alt='Select img'/>

            </label>
           

            <label htmlFor='company'>EMPRESA</label>
            <input
                id='company'
                placeholder='Sua empresa incrivel'
                value = {company}
                onChange={event => setCompany(event.target.value)}
            />


            <label htmlFor='techs'>TECNOLOGIAS * <span>separadas por virgula</span></label>
            <input
                id='techs'
                value={techs}
                placeholder='tecnologias'
                onChange={event => setTechs(event.target.value)}
            />


            <label htmlFor='price'>VALOR* <span>em branco para gratuito</span></label>
            <input
                id='price'
                value={price}
                placeholder='Valor cobrado'
                onChange={event => setPrice(event.target.value)}
            />

            <button type='submit' className="btn" >Cadastrar</button>


        </form>
        </>

    )
}