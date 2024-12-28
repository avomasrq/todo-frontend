import React, { useState } from "react";
import Title from "./components/Title";
import Motion from "./components/Motion";
import Section from "./components/Section";
import ItemList from "./components/ItemList";
import PlusButton from "./components/PlusButton";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
   const [tasks, setTasks] = useState([]);
   const [activeButton, setActiveButton] = useState("todo");
   const [showAddDialog, setShowAddDialog] = useState(false);

   const updateTask = (taskText, updates) => {
       setTasks((prevTasks) =>
           prevTasks.map((task) =>
               task.text === taskText ? { ...task, ...updates } : task
           )
       );
   };

   const handleAddTask = (taskText) => {
       setTasks((prevTasks) => [
           ...prevTasks,
           { text: taskText, isCompleted: false, isTrash: false },
       ]);
   };

   return (
       <div>
           <Title />
           <Motion activeButton={activeButton} setActiveButton={setActiveButton} />
           <Section activeButton={activeButton} />
           <ItemList
               tasks={tasks}
               activeButton={activeButton}
               updateTask={updateTask}
           />
           <PlusButton onClick={() => { 
               console.log("PlusButton clicked!"); 
               setShowAddDialog(true); 
           }} />
          {showAddDialog && (
           <Modal
                onClose={() => setShowAddDialog(false)}
                onAddTask={handleAddTask}
            />  
           )}
           <Footer />
       </div>
   );
}