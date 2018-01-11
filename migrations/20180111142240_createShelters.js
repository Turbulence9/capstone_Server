exports.up = function(knex, Promise) {
  return knex.schema.createTable('shelters',(t) => {
  t.increments();
  t.text('shelterName');
  t.text('firstName');
  t.text('lastName');
  t.text('email');
  t.text('phoneNumber');
  t.text('hashedPassword');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shelters');
};