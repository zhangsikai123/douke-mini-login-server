const forms = [];

exports.save = function(form){
  form['timestamp'] = new Date();
  form['id'] = forms.length;
  forms.push(form);
};

exports.findAll = function(form){
  return forms;
};

exports.findByID = function(id){
  return forms[id];
}
