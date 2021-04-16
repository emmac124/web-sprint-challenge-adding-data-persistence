
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "this is the first task", task_notes: "lets work on this first task", task_completed: 0, project_id: 1},
        {task_description: "this is the second task", task_notes: "lets work on this second task", task_completed: 1, project_id: 2},
        {task_description: "this is the third task", task_notes: "lets work on the third task", task_completed: 0, project_id: 3},
      ]);
    });
};
