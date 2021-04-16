
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "project 1", project_description: "this is the first project", project_completed: 0},
        {project_name: "project 2", project_description: "this is the second project", project_completed: 1},
        {project_name: "project 3", project_description: "this is the third project", project_completed: 0},
      ]);
    });
};
