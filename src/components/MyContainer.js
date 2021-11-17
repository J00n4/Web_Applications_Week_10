import MyList from './MyList';

const List = (params) => {
    console.log("This is from MyContainer:" + params.items);
    console.log(params.items);
    //const head = params.header;
    //const list = params.items;
    return(
        <MyList item={params} />
    )
}

export default List;