import MyList from './MyList';

const List = (params) => {
    //const header = "Really epic list component";
    console.log("This is from MyContainer:" + params.items);
    console.log(params.items);
    return(
        <div>
            <h1>{params.header}</h1>
            <MyList item={params.items}/*key={params.items.id} item={params.items.text}*/ />
        </div>
    )
}

export default List;