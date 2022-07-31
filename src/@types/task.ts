export interface CreateTaskParams {
  name: string;
  description?: string;
}

export interface ITask {
  id: string;
  name: string;
  description?: string;
}
