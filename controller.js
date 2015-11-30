var me = {
  name: 'jason',
  hobbies: ['kitten eating', 'donut making', 'slalom water skiing', 'potato picking'],
};

module.exports = {
  anything: function(req, res) {
    return res.send('it is working');
  },

  getName: function(req, res) {
    return res.json(me.name);
  },

  getHobbies: function(req, res) {
    if (req.query.order === 'desc') return res.json(me.hobbies.sort());
    if (req.query.order === 'asc') return res.json(me.hobbies.sort().reverse());
    return res.json(me.hobbies);
  },

  addHobbie: function(req, res) {
    console.log(11111, req.body);
    if (req.body.hobby) {
      me.hobbies.push(req.body.hobby);
      return res.send('hobby added');
    }

    return res.status(500).send('Gimme a hobby');
  },
};
