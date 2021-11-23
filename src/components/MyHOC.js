const MyHOC = (OriginalComponent, props) => {

        return(
            <div class="wrapper">
                <div>
                    <OriginalComponent name={props.name} />
                </div>
            </div>
        )
}

export default MyHOC