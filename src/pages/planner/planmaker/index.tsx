import { useState } from 'react';
import style from './.module.scss';

interface Task {
  name: string;
  dateTime: string;
  amount: number;
  color: string;
}

const Planner = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [amount, setAmount] = useState(0);
  const [color, setColor] = useState('#888');

  const handleAddTask = () => {
    if (inputValue.trim() !== '' && dateTime.trim() !== '') {
      const newTask = { name: inputValue, dateTime, amount, color };
      setTasks([...tasks, newTask]);
      setInputValue('');
      setDateTime('');
      setAmount(0);
      setColor('#888');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleIncreaseAmount = () => {
    setAmount(amount + 1);
  };

  const handleDecreaseAmount = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  return (
    <div className={style.cont}>
    <div className={style.planner}>
      <h2>Add new Schedule</h2>
      <div className={style.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter medicine name..."
        />
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <div className={style.amountContainer}>
          <button onClick={handleDecreaseAmount}>-</button>
          <span>{amount}</span>
          <button onClick={handleIncreaseAmount}>+</button>
        </div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          title="Choose pill color"
        />
        <button onClick={handleAddTask}>Save</button>
      </div>
      </div>

      <div className={style.scheduleSection}>
        <h3>Today</h3>
        <ul className={style.taskList}>
          {tasks.filter(task => new Date(task.dateTime).toDateString() === new Date().toDateString()).map((task, index) => (
            <li key={index}>
              <div className={style.taskDate}>{new Date(task.dateTime).toLocaleDateString()}</div>
              <div className={style.taskContent}>
                <div className={style.taskColor} style={{ backgroundColor: task.color }}></div>
                <div className={style.taskName}>Take {task.amount} of {task.name}</div>
                <div className={style.taskTime}>{new Date(task.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <h3>Next Schedule</h3>
        <ul className={style.taskList}>
          {tasks.filter(task => new Date(task.dateTime).toDateString() !== new Date().toDateString()).map((task, index) => (
            <li key={index}>
              <div className={style.taskDate}>{new Date(task.dateTime).toLocaleDateString()}</div>
              <div className={style.taskContent}>
                <div className={style.taskColor} style={{ backgroundColor: task.color }}></div>
                <div className={style.taskName}>Take {task.amount} of {task.name}</div>
                <div className={style.taskTime}>{new Date(task.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planner;
