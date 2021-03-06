import {useEffect, useState} from "react";
import {Container, CssBaseline, ThemeProvider} from '@material-ui/core';
import theme from "./theme";
import Header from './components/Header'
import Haikus from "./components/Haikus";
import Background from "./components/Background";
import Footer from './components/Footer'
import axios from "axios";

function App() {
    const [haikus, setHaikus] = useState([])

    useEffect(() => {
        try {
            axios
                .get("/all")
                .then(response => {
                    const data = response.data
                    const haikus = data.haikus
                    const order = data.configs.order
                    setHaikus(haikus.sort( ( a, b ) => { return order.indexOf( a.id ) - order.indexOf( b.id )}))
                })
        }
        catch (e) { return e }
    }, []);


    const putHaiku = async ( replacement, replaceID ) => {
        try {
            return await axios
                .put(`/haikus/${replaceID}`, replacement )
                .then( (r) => { return r } )
                .catch( (e) => { return e } )
        }
        catch (e) { return e }
    }

    const patchHaikuIndices = async ( haikuList ) => {
        let indexList = []
        haikuList.forEach( h => indexList.push(parseInt(h.id)) )
        try {
            return await axios.patch('/configs/order', { "order": `${indexList}`} )
        }
        catch (e) { return e }
    }

    const addHaiku = async ( newHaiku ) => {
        const lastHaikuId = haikus.slice(-1)[0].id
        newHaiku.id = lastHaikuId
        const updatedHaikus = [ newHaiku, ...haikus.filter( h => h.id !== lastHaikuId) ]
        try {
            return await putHaiku( newHaiku, lastHaikuId )
                .then( () => {
                    (async () => setHaikus( updatedHaikus ))()
                        .then( () => patchHaikuIndices( updatedHaikus ))
                })
        }
        catch (e) { return e }
    }

    const handleOnDragEnd = ( result ) => {
        if ( !result.destination ) return;
        const previousState = haikus
        const items = Array.from( haikus );
        const [reorderedItem] = items.splice( result.source.index, 1 );
        items.splice( result.destination.index, 0, reorderedItem );
        setHaikus( items )
        patchHaikuIndices( items )
            .catch( () => setHaikus( previousState ) )
    }

    return (
        <ThemeProvider theme={ theme } >
            <CssBaseline />
            <Background />
            <Container maxWidth="xs">
                <Header onAdd={ addHaiku } />
                <Haikus haiku={ haikus } onDragEnd={ handleOnDragEnd }/>
                <Footer />
            </Container>
        </ThemeProvider>
  )
}

export default App;
