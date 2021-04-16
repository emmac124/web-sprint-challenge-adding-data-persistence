
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "resource 1", resource_description: "this is the first resource"},
        {resource_name: "resource 2", resource_description: "this is the second resource"},
        {resource_name: "resource 3", resource_description: "this is the third resource"},
      ]);
    });
};
