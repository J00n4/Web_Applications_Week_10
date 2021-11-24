import { ListItem } from '@mui/material';
import {useState, useEffect} from 'react';

function About() {
    const [dataType, setDataType] = useState("post")
    const [data, setData] = useState("")

    const information = [];

    console.log(information);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))/*(
            information.push(json)
        ))*/
            
    /*console.log("test log");
    var i;
    for(i=0; i<data.length; i++) {
        information.push(data[i]);
        console.log("This is inside the loop");
        console.log(information);
        console.log(data);
    }

    console.log("This is information2 ->");
    console.log(information);*/
            /*{

            var i;
            for(i=0; i<json.length; i++) {
                information.push(json[i]);
            }

        })*/

        //console.log("This is information ->");
        //console.log(information);


        /*const setParsedData = (parseData) => {
            console.log("This is here");
            console.log(parseData);
            //const test = parseData[1].title;
            //console.log(parseData.length);
            var i;
            var dataArray = [];
            for(i=0; i<parseData.length; i++) {
                console.log(parseData[i].title);
                const modifiedData = { key: parseData[i].id, title: parseData[i].title };
                //console.log(modifiedData);
                //setData([...data, modifiedData]);
                //dataArray.push(modifiedData);
            }
            //uploadData(dataArray);
        }*/

        /*const uploadData = (modifiedData) => {
            var i;
            for(i=0; i<modifiedData.length; i++) {
                console.log(modifiedData[i])
                const inputData = modifiedData[i];
                setData([...data, inputData]);
            }
        }*/


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
        };
        
        
        {modifiedData.map((data) => (
                     <li key={data.key}>{data.title}</li>
                ))}
        
            {information.map((listItem) => (
                    <li key={listItem.id}>{listItem.title}</li>
                ))}

        */
    }, []);

    return(
        <div>
            <ul>
                {data.map((listItem) => (
                    <li key={listItem.id}>{listItem.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default About;