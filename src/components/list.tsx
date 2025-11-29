import type{ ItemData } from "./item";

import { Item } from "./item";

export type ListProps = {
    title: string;
    items: ItemData[];
}


export function List ({title, items}:ListProps) {

    return(
        <section>
            <h2>{title}</h2>

            {items.map (item => (
                <Item
                key = {item.title}
                title={item.title}
                description={item.description}
                done={item.done ?? false}
                />
            ))}



        </section>


        // <div>
        //     <ul>
        //         {items.map(item => (
        //             <li key={item.title}>
        //                 <h2>{item.title}</h2>
        //                 <p>{item.description}</p>
        //             </li>
        //         ))}
        //     </ul>

        // </div>
    )
}