export interface CreateTaskParams {
  name: string;
  description?: string;
  color: string;
}

export interface ITask {
  id: string;
  name: string;
  description?: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}
