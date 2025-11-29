
import { useState } from 'react'
import type React from 'react'
import './Form.css'

export type FormData = {
    title: string;
    description: string;
}

export function Form () {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('odesláno')
        console.log(formData)
    }

    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData ({
            ...formData,
            [e.target.name]:e.target.value
        })
    }


    return(
        <>
        <h2>Zadej úkol</h2>
        <form onSubmit={handleSubmit} className='tasks_input' action="">
            <label >Název úkolu</label>
            <input onChange={handleChange} value={formData.title} type="text" name='title' id='title' />
            <label >Popis úkolu</label>
            <textarea onChange={handleChange} value={formData.description} name="description" id="description"></textarea>
            <button type='submit'>Přidat</button>
        </form>
        </>
    )
}