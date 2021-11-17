import {useState} from "react";

function MyList(info) {
    console.log("This is 'info' from MyList:" + info.item);
    console.log(info.item.header);
    console.log(info.item.items);
    console.log(info);
    /*const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ]);*/
    const head = info.item.header;
    const items = info.item.items;
    return(
        <div>
            <h1>{head}</h1>
            <ol>
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default MyList;