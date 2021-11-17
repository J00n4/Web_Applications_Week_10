import MyList from './MyList';

const List = ({items}) => {
    const header = "Really epic list component";
    return(
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li><MyList key={item.id} item={item.text} /></li>
                ))}
            </ol>
        </div>
    )
}

export default List;