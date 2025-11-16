import './item.css'


type ItemProps = {
    name: string;
    description: string;
    done: boolean;
}

export function Item ({name, description,done}:ItemProps) {

    return(
        <div className= {done ? 'task done' : 'task'} >
            <p className='title'><strong>{name}</strong></p>
            <p>{description}</p>
        </div>
    )
}

