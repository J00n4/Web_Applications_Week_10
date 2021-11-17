function ListOfItems({items}) {
    const listItems = items.map((items) =>
        <li>{items.text}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}
/*
ReactDOM.render(
    <ListOfItems header={header} items={items} />,
    document.getElementById('root')
);*/

/*
function MyList({item}) {
    console.log({item});
    const header = "Really epic list component";

    /*const items = [
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this" }
    ];
    return(
        <p>{item}</p>
        /*<div>
            <h1>{header}</h1>
            <ol>
                <li>
                    {items.text}
                </li>
            </ol>
        </div>
/*        <div>
            <h1>{header.text}</h1>
            <ol>
                <li>
                    {items.map((items) => (
                        <MyList key={items.id} item={items.text} />
                    ))}
                </li>
            </ol>
        </div>
    );
}

export default MyList;*/
export default ListOfItems;