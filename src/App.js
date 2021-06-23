import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom'
import Header from './components/page/Header'
import Footer from './components/page/Footer'
//import Tasks from './components/Tasks'
//import AddTask from './components/AddTask'
import About from './components/page/About'
import Game from './components/game/Game'
import Home from './components/page/Home'
import Login from './components/accounts/Login'
import Reg from './components/accounts/Reg'
import Forgot from './components/accounts/Forgot'
import Profile from './components/accounts/Profile'
import Error from './components/page/Error'

const App = () => {

  const [title, setTitle] = useState("BlackJack Game");
  // const [userId, setUserId] = useState("");
  // const [username, setUsername] = useState("");
  // const [cash, setCash] = useState("");
  // const [moneyType, setMoneyType] = useState("");
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address_line_1, setAddress_line_1] = useState("");
  // const [address_line_2, setAddress_line_2] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip_code, setZip_code] = useState("");
  // const [bio, setBio] = useState("");
  // const [user_image, setUser_image] = useState("");


  const [user, setUser] = useState("");
  const [loggedInStatus, setLoggedInStatus] = useState("");
  const [token, setToken] = useState("");



  // useEffect(() => {

  //   })
  // }, [])


  // ---------------------------
  //  const [showAddTask, setShowAddTask] = useState(false)
  //const [tasks, setTasks] = useState([])


  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // }, [])

  // // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  // // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // // Add Task
  // const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   })

  //   const data = await res.json()

  //   setTasks([...tasks, data])

  //   // const id = Math.floor(Math.random() * 10000) + 1
  //   // const newTask = { id, ...task }
  //   // setTasks([...tasks, newTask])
  // }

  // // Delete Task
  // const deleteTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'DELETE',
  //   })
  //   //We should control the response status to decide if we will change the state or not.
  //   res.status === 200
  //     ? setTasks(tasks.filter((task) => task.id !== id))
  //     : alert('Error Deleting This Task')
  // }

  // // Toggle Reminder
  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchTask(id)
  //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(updTask),
  //   })

  //   const data = await res.json()

  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: data.reminder } : task
  //     )
  //   )
  // }

  return (
    <Router>

      <Header
        // onAdd={() => setShowAddTask(!showAddTask)}
        // showAdd={showAddTask}
        setLoggedInStatus={setLoggedInStatus}
        setUser={setUser}
        user={user}
        loggedInStatus={loggedInStatus}
        title={title}
      />


      <Switch>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {/* {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )} */}
              <Home
                setLoggedInStatus={setLoggedInStatus}
                setUser={setUser}
                user={user}
                loggedInStatus={loggedInStatus}
              ></Home>

            </>
          )}
        />
        <Route path='/about' component={About} />
        <Route path="/game">
          <Game
            setLoggedInStatus={setLoggedInStatus}
            setUser={setUser}
            user={user}
            token={token}
            loggedInStatus={loggedInStatus} />
        </Route>
        <Route path="/login">
          <Login setLoggedInStatus={setLoggedInStatus}
            setUser={setUser}
            user={user}
            loggedInStatus={loggedInStatus}
            token={token}
            setToken={setToken}
          />
        </Route>
        <Route path="/reg">
          <Reg setLoggedInStatus={setLoggedInStatus}
            setUser={setUser}
            user={user}
            loggedInStatus={loggedInStatus}
            token={token}
            setToken={setToken} />
        </Route>
        <Route path="/forgot">
          <Forgot user="user" />
        </Route>
        <Route path="/profile/">
          <Profile setLoggedInStatus={setLoggedInStatus}
            setUser={setUser}
            user={user}
            loggedInStatus={loggedInStatus}
            token={token} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
        {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
      </Switch>
      <Footer title={title} />

    </Router>
  )
}

export default App
