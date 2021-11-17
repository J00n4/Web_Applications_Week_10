function MyList(info) {
    console.log("This is 'info' from MyList:" + info.item);
    console.log(info.item);
    console.log(info);
    const information = info.item;
    return(
        <div>
            <h1>{info.header}</h1>
            <ol>
                {information.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default MyList;