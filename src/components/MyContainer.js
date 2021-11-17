import MyList from './MyList';
import {useState} from "react";

const List = (params) => {
    console.log("This is from MyContainer:" + params.items);
    console.log(params.items);
    const [header, setHeader] = useState("Really epic list component");

    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ]);
    return(
        <div>
            <h1>{header}</h1>
            <MyList item={items} />
        </div>
    )
}

export default List;