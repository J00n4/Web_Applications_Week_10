import MyList from './MyList';
import ListOfItems from './MyList';

const List = ({items}) => {
    const header = "Really epic list component";//<h1>{header}</h1>
    return(
        <div>
            <h1>{header}</h1>
            <ListOfItems items={items} />
            
        </div>
    )
}

export default List;