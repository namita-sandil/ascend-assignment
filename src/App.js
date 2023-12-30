import {DragDropContext , Droppable , Draggable} from 'react-beautiful-dnd'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const DATA= [
  {             id : "item1" ,
                content: "Apple",
  },
  
  {
    id : "item2" ,
    content: "Banana" ,
  },
  
  {
    id : "item3" ,
    content: "Orange" ,
  },
  
  {
    id : "item4" ,
    content: "Pineapple" ,
  },
  
  {
    id : "item5" ,
    content: "CustardApple" ,
  },
  
  ];

  

function App()  {
  const [stores, setStores] = useState(DATA);
  
  return (
    
    <div className="Layout__wrapper">
          <div className="card">
            <DragDropContext 
            onDragEnd={() => {
                   console.log("drag drop event occured");
            }}>
            <div className="header">
              <h1>Shopping List</h1>
            </div>
             <Droppable droppableId='ROOT' type="group">
           
              {(provided) => (
                <div>
                {stores.map((store) => (
                <div>
                  <div className="store-container">
                    <h3>{store.id}</h3>
                  </div>
                </div>
              ))}
                </div>
              )}
              </Droppable>
            </DragDropContext>
          </div>
    </div>
  );
};


export default App;
