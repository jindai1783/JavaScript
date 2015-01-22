var t = {
  tem: 20,
  temUp: function() {
    this.tem++;
  },
  temDown: function() {
    this.tem--;
  }
};

$(function() {
  $('#increase').on('click', function() {
    t.temUp();
    update();
  });
  $('#decrease').on('click', function() {
    t.temDown();
    update();
  });
});

function update() {
  var elTem = document.getElementById('temperature');
  elTem.textContent = t.tem;
};