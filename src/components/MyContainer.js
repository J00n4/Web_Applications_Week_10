import MyList from './MyList';

const List = (params) => {
    console.log("This is from MyContainer:" + params.items);
    console.log(params.items);
    const head = params.header;
    const list = params.items;
    return(
        <div>
            <h1>{head}</h1>
            <MyList item={list} />
        </div>
    )
}

export default List;