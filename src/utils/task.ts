export const taskDoneTitleFormating = (
  subTasks: any[],
  subTaskslength: number
) => {
  if (!subTaskslength) return `${subTaskslength} tarefa`;
  const tasksDone = subTasks.filter(task => !!task.done);
  return `${tasksDone.length} de ${subTaskslength} tarefas`;
}
