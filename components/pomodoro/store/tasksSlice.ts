import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  text: string;
  completed: boolean;
  id: number;
}

export interface TasksUpdate {
  tasks: Task[];
  lastID: number;
}

interface TaskChange {
  id: number;
  completed: boolean;
}

export interface TasksSlice {
  adding: boolean;
  tasks: Task[];
  lastId: number;
}

const initialState: TasksSlice = {
  adding: false,
  tasks: [],
  lastId: 0,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addingTask: (state, action: PayloadAction<boolean>) => {
      state.adding = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        text: action.payload,
        completed: false,
        id: state.lastId + 1,
      };
      state.lastId++;
      state.tasks = [...state.tasks, newTask];
    },
    taskChange: (state, action: PayloadAction<TaskChange>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[taskIndex] = {
        ...state.tasks[taskIndex],
        completed: action.payload.completed,
      };
    },
    updateTasks: (state, action: PayloadAction<TasksUpdate>) => {
      state.tasks = action.payload.tasks;
      state.lastId = action.payload.lastID;
    },
    updateLocalStorage: (state) => {
      const data: TasksUpdate = {
        tasks: state.tasks,
        lastID: state.lastId,
      };
      localStorage.setItem("tasks", JSON.stringify(data));
    },
  },
});

export const {
  addingTask,
  addTask,
  taskChange,
  updateTasks,
  updateLocalStorage,
} = tasksSlice.actions;

export default tasksSlice.reducer;
