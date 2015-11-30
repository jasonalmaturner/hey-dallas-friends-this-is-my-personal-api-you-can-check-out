module.exports = {
  addHeader: function(req, res, next) {
    res.set({
      'does jacob eat poo': 'true',
    });
    next();
  },
};
