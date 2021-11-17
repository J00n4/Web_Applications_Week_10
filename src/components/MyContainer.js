import MyList from './MyList';
import {useState} from "react";

function List() {
    const [header, setHeader] = useState("Really epic list component");

    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ]);
    return(
        <MyList header={header} item={items} />
    )
}

export default List;