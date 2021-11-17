import MyList from './MyList';
import {useState} from "react";

function List() {
    const [header, setHeader] = useState("Really epic list component");

    const [items, setItems] = useState([
        {id: "1", text: "This is an item", clicked: false},
        {id: "2", text: "Also this", clicked: false}
    ]);

    const updateItem = (id) => {
        console.log("Here" + id);
        console.log(items);
        const test = document.getElementById(id);
        console.log(test);
        test.style.textDecoration = "line-through";
        console.log(test);
        /*var i = 0;
        for(i=0; i<items.length; i++) {
            console.log(items[i]);
            console.log(items[i].id);
            if(items[i].id === id && items[i].clicked === false) {
                items[i].clicked = true;
                test.text.style.textDecoration = "line-through";
                console.log("Working");
            } else {
                items[i].clicked = false;
                test.text.style.textDecoration = "none";
                console.log("Working");
            }
        }*/
    }

    const AddItem = () => {
        const addArea = document.getElementById("textarea");
        const newItem = {id: (items.length+1).toString(), text: document.getElementById("textarea").value, clicked: false};
        console.log(newItem);
        setItems([...items, newItem]);
    }
    return(
        <div>
            <MyList updateItem={updateItem} header={header} items={items} />
            <textarea id="textarea"></textarea>
            <button onClick={AddItem}>Add item</button>
        </div>
    )
}

export default List;