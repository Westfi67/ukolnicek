import './item.css'


export type ItemProps = {
    title: string;
    description: string;
    done?: boolean;
}

export type ItemData = ItemProps

export function Item ({title, description,done}:ItemProps) {

    return(
        <div className= {done ? 'task done' : 'task'} >
            <p className='title'><strong>{title}</strong></p>
            <p>{description}</p>
        </div>
    )
}

