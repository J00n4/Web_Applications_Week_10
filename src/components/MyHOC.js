const MyHOC = (OriginalComponent, props) => {

        return(
            <div className="wrapper">
                <div>
                    <OriginalComponent name={props.name} />
                </div>
            </div>
        )
}

export default MyHOC