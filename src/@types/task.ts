export interface CreateTaskParams {
  name: string;
  description?: string;
  color: string;
}

export interface CreateSubTaskParams {
  name: string;
  deadLine: string;
}

export interface ITask {
  id: string;
  name: string;
  description?: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  done: boolean;
  subTasks: any[];
  userId: string;
}

export interface ISubTask {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deadLine: Date;
  done: boolean;
  points: number;
}
