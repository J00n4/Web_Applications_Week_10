const wrappedWithName = (OriginalComponent) => {
    const NewComponent = (props) => {


        return(
            <div class="wrapper">
                <OriginalComponent name={props} />
            </div>
        )
    }
    return NewComponent;
}

export default wrappedWithName;