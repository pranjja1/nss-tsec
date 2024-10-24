import React, { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

const Todo = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newPosition, setNewPosition] = useState('');
  const [newEvents, setNewEvents] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState('');
  const [currentEditedItem, setCurrentEditedItem] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos, newTodoItem];
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    // Clear input fields after adding
    setNewTitle('');
    setNewDescription('');
    setNewPosition('');
    setNewEvents('');
  };

  const handleDeleteTodo = index => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = index => {
    let now = new Date();
    let completedOn = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...completedTodos, filteredItem];
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = index => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditedItem(prev => ({ ...prev, title: value }));
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem(prev => ({ ...prev, description: value }));
  };

  const handleUpdateToDo = () => {
    let newToDo = [...allTodos];
    newToDo[currentEdit] = currentEditedItem;
    setTodos(newToDo);
    setCurrentEdit('');
  };

  // Filtered todos based on search query
  const filteredTodos = allTodos.filter(todo => 
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.app}>
      <h1>Volunteer Event List</h1>

      <div style={styles.todoWrapper}>
        <div style={styles.todoInput}>
          <div style={styles.todoInputItem}>
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Name of volunteer"
              style={styles.input}
            />
          </div>
          <div style={styles.todoInputItem}>
            <label>Position</label>
            <input
              type="text"
              value={newPosition}
              onChange={e => setNewPosition(e.target.value)}
              placeholder="Position of student in committee"
              style={styles.input}
            />
            <label>Number of events attended</label>
            <input
              type="text"
              value={newEvents}
              onChange={e => setNewEvents(e.target.value)}
              placeholder="Number of events attended"
              style={styles.input}
            />
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              placeholder="Description"
              style={styles.input}
            />
          </div>
          <div style={styles.todoInputItem}>
            <button
              type="button"
              onClick={handleAddTodo}
              style={styles.primaryBtn}
            >
              Add
            </button>
          </div>
        </div>

        <div style={styles.searchWrapper}>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by title"
            style={styles.input}
          />
        </div>

        <div style={styles.btnArea}>
          <button
            style={{ ...styles.secondaryBtn, ...(isCompleteScreen ? {} : styles.active) }}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            style={{ ...styles.secondaryBtn, ...(isCompleteScreen ? styles.active : {}) }}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div style={styles.todoList}>
          {isCompleteScreen === false &&
            filteredTodos.map((item, index) => {
              if (currentEdit === index) {
                return (
                  <div style={styles.editWrapper} key={index}>
                    <input 
                      placeholder='Updated Title' 
                      onChange={(e) => handleUpdateTitle(e.target.value)} 
                      value={currentEditedItem.title}  
                      style={styles.input}
                    />
                    <textarea 
                      placeholder='Updated Description' 
                      rows={4}
                      onChange={(e) => handleUpdateDescription(e.target.value)} 
                      value={currentEditedItem.description}  
                      style={styles.input}
                    />
                    <button
                      type="button"
                      onClick={handleUpdateToDo}
                      style={styles.primaryBtn}
                    >
                      Update
                    </button>
                  </div> 
                );
              } else {
                return (
                  <div style={styles.todoListItem} key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div>
                      <AiOutlineDelete
                        style={styles.icon}
                        onClick={() => handleDeleteTodo(index)}
                        title="Delete?"
                      />
                      <BsCheckLg
                        style={styles.checkIcon}
                        onClick={() => handleComplete(index)}
                        title="Complete?"
                      />
                      <AiOutlineEdit
                        style={styles.checkIcon}
                        onClick={() => handleEdit(index, item)}
                        title="Edit?" 
                      />
                    </div>
                  </div>
                );
              }
            })}

          {isCompleteScreen === true &&
            completedTodos.map((item, index) => {
              return (
                <div style={styles.todoListItem} key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><small>Completed on: {item.completedOn}</small></p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      style={styles.icon}
                      onClick={() => handleDeleteCompletedTodo(index)}
                      title="Delete?"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    backgroundColor: '#1f1e1e',
    color: 'white',
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  todoWrapper: {
    background: '#353434',
    padding: '2%',
    width: 'fit-content',
    margin: '3% auto',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 5px 7px rgb(27, 27, 27)',
  },
  todoInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgb(78, 78, 78)',
    paddingBottom: '25px',
    marginBottom: '25px',
  },
  todoInputItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: '25px',
  },
  input: {
    padding: '8px',
    border: 'none',
    width: '250px',
    marginBottom: '10px',
  },
  primaryBtn: {
    backgroundColor: 'rgb(0,230,122)',
    color: 'white',
    border: 'none',
    borderRadius: '0px',
    marginTop: '25px',
    padding: '10px',
    width: '60px',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: 'rgb(71, 71, 71)',
    color: 'white',
    border: 'none',
    borderRadius: '0px',
    marginTop: '25px',
    padding: '10px',
    cursor: 'pointer',
  },
  active: {
    backgroundColor: 'rgb(0,230,122)',
  },
  todoList: {
    display: 'flex',
    flexDirection: 'column',
  },
  btnArea: {
    marginBottom: '15px',
  },
  todoListItem: {
    backgroundColor: '#414040',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px',
    marginBottom: '10px',
    boxShadow: '0px 3px 5px rgb(43, 42, 42)',
  },
  icon: {
    fontSize: '35px',
    cursor: 'pointer',
  },
  checkIcon: {
    fontSize: '25px',
    marginLeft: '10px',
    color: 'rgb(0,230,122)',
    cursor: 'pointer',
  },
  editWrapper: {
    backgroundColor: '#414040',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Todo;
