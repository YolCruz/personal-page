import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  text: string;
  id: number;
  completed: boolean;
  edit: boolean;
}

export interface TasksUpdate {
  tasks: Task[];
  lastID: number;
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
        id: state.lastId,
        completed: false,
        edit: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    taskChange: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index] = {
        ...action.payload,
      };
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    updateTasks: (state, action: PayloadAction<TasksUpdate>) => {
      state.tasks = action.payload.tasks;
      state.lastId = action.payload.lastID;
    },
    updateLastIndex: (state) => {
      let last = 0;
      state.tasks.forEach((task) => {
        if (task.id > last) last = task.id;
      });
      state.lastId = last + 1;
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
  deleteTask,
  taskChange,
  updateTasks,
  updateLocalStorage,
  updateLastIndex,
} = tasksSlice.actions;

export default tasksSlice.reducer;
