import {useState, useEffect} from 'react';

function About() {
    const [dataType, setDataType] = useState("post")
    const [data, setData] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setParsedData(json))
        /*let mounted = true;
        async function uploadData() {
            const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts');
            /*const response = await response.json();
            const json = JSON.stringify(response);
            console.log(json);

            const parseData = {
                
            }
            
            if(mounted) {
                setParsedData(fetchData);
            }
        }
        uploadData();

        return() => {
            mounted = false;
        };*/
    }, []);

    const setParsedData = (parseData) => {
        console.log("This is here");
        console.log(parseData);
        //const test = parseData[1].title;
        //console.log(parseData.length);
        var i;
        var dataArray = [];
        for(i=0; i<parseData.length; i++) {
            const modifiedData = { key: parseData[i].id, title: parseData[i].title };
            console.log(modifiedData);
            dataArray.push(modifiedData);
        }
        uploadData(dataArray);
    }

    const uploadData = (modifiedData) => {
        setData(JSON.stringify(modifiedData));
    }

    return(
        <div>
            About text
            <h3>{dataType}</h3>
            <p>{data}</p>
        </div>
    )
}

export default About;