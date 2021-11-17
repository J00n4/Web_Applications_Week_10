import MyList from './MyList';
import {useState} from "react";

function List() {
    const [header, setHeader] = useState("Really epic list component");

    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ]);
    console.log(items.length);
    const AddItem = () => {
        const addArea = document.getElementById("textarea");
        const newItem = {id: (items.length+1).toString(), text: document.getElementById("textarea").value};
        console.log(newItem);
        setItems([...items, newItem]);
    }
    return(
        <div>
            <MyList header={header} items={items} />
            <textarea id="textarea"></textarea>
            <button onClick={AddItem}>Add item</button>
        </div>
    )
}

export default List;