import type{ ItemProps } from "./item";

type ListProps = {
    // title: string;
    items: ItemProps[];
}


export function List ({items}:ListProps) {

    return(
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.title}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}