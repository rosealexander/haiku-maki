import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Grid } from "@material-ui/core";
import Haiku from "./Haiku";

const Haikus = (props ) => {
    return (
        <DragDropContext onDragEnd={ props.onDragEnd }>
            <Droppable droppableId='haikus' >
                {( provided ) => (
                    <Grid container
                          direction='column'
                          className='haikus'
                          spacing={2}
                          { ...provided.droppableProps }
                          ref={ provided.innerRef }
                    >
                        { props.haiku.map( ( haiku, index ) => (
                            <Draggable key={ haiku.id } draggableId={ `${ haiku.id }` } index={ index } >
                                {( provided ) => (
                                    <Grid item
                                          ref={ provided.innerRef }
                                          { ...provided.draggableProps }
                                          { ...provided.dragHandleProps }
                                    >
                                        <Haiku key={ haiku.id }
                                               haiku={ haiku }
                                               onDelete={ props.onDelete }
                                               onToggle={ props.onToggle }
                                        />
                                    </Grid>
                                )}
                            </ Draggable>
                        )) }
                        { provided.placeholder }
                    </Grid>
                )}
            </Droppable>
        </ DragDropContext>
    );
}

export default Haikus;
