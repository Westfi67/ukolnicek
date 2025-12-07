
import { useState } from 'react'
import type React from 'react'
import './Form.css'

export type FormData = {
    title: string;
    description: string;
}

type FormProps = {
  onFormSubmit: (newTask: FormData) => void

}

export function Form ({onFormSubmit}:FormProps) {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log('odesláno')
        console.log('odeslání formuláře',formData)
        // send data to app
        onFormSubmit(formData)
        //empty form
        setFormData({
            title:'',
            description:'',
        })
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

        console.log(formData)
    }


    return(
        <>
        <h2>Zadej úkol</h2>
        <form onSubmit={handleSubmit} className='tasks_input' action="">
            <label htmlFor='title' >Název úkolu</label>
            <input 
                value={formData.title} 
                type="text" 
                name='title' 
                id='title' 
                onChange={handleChange} 
            />
            <label htmlFor='description'>Popis úkolu</label>
            <textarea 
                name="description" 
                id="description"
                rows={3}
                value={formData.description} 
                onChange={handleChange} 
                />

            <button 
            type='submit'

            >Přidat</button>
        </form>
        </>
    )
}