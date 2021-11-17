import MyList from './MyList';

const List = (params) => {
    //const header = "Really epic list component";
    return(
        <div>
            <h1>{params.header}</h1>
            <ol>
                {params.items.map((item) => (
                    <li><MyList key={item.id} item={item.text} /></li>
                ))}
            </ol>
        </div>
    )
}

export default List;