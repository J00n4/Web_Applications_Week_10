import {useState} from "react";

function MyList(info) {
    console.log("This is 'info' from MyList:" + info.item);
    console.log(info.item);
    console.log(info);
    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ]);
    return(
        <ol>
            {items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ol>
    );
}

export default MyList;