export type TasksType = TaskItemType[];

export type TaskItemType = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

export type VisibilityType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export type PreloadStateType = {
  todos: TasksType;
  visibility: VisibilityType;
};
