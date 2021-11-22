const wrappedWithName = (OriginalComponent) => {
    const NewComponent = (props) => {


        return(
            <div className="wrapper">
                <OriginalComponent name={props} />
            </div>
        )
    }
    return NewComponent;
}

export default wrappedWithName;