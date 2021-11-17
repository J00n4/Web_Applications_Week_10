function MyList(info) {
    console.log("This is 'info' from MyList:" + info.items);
    console.log(info.items);
    console.log(info);
    const information = info.items;
    return(
        <div>
            <h1>{info.header}</h1>
            <ol>
                {information.map((item) => (
                    <li id={item.id} onClick={() => info.updateItem(item.id)}>{item.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default MyList;