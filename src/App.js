import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState ([
    { 
        id: 1,
        text: 'Doctor Appt',
        day: 'Oct 5th at 2:30pm',
        reminder: true,
    },
    { 
        id: 2,
        text: 'Go shopping',
        day: 'Oct 5th at 3:30pm',
        reminder: true,
    },{ 
        id: 3,
        text: 'paint house',
        day: 'Oct 5th at 4:30pm',
        reminder: false,
    }
])

  return (
    <div className="container">
    <Header />  
    <Tasks tasks={tasks}/>    
    </div>
  );
}

export default App;
