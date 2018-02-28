$(window).on("load", function() {
  $(".select").each(function() {
    var $select = $("select", this);
    var $selectValue = $(".select__value", this);
    $selectValue.text($select.find("option:selected").text());
    $select.on("change", function() {
      $selectValue.text($select.find("option:selected").text());
    });
  });
});
