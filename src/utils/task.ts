export const taskDoneTitleFormating = (
  subTasks: any[],
  subTaskslength: number
) => {
  if (!subTaskslength) return `${subTaskslength} tarefa`;
  const tasksDone = subTasks.filter(task => !!task.done);
  return `${tasksDone.length} de ${subTaskslength} tarefas`;
}

export const taskFinishedPercent = (subTasks: any[], total: number) => {
  const finished = subTasks.filter(s => s.done).length;

  return Math.floor(finished/total * 100);
}
