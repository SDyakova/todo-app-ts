export interface TaskModel {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface AppStateModel {
  taskItems: TaskModel[];
  filteredItems: Array<TaskModel>;
  currentFilter: string;
}
