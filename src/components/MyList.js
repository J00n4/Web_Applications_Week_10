function MyList(info) {
    console.log("This is 'info' from MyList:" + info.item);
    console.log(info.item);
    console.log(info);
    return(
        <ol>
            {info.item.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ol>
    );
}

export default MyList;