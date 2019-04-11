function testViewModel() {
  // Data
  this.mData = ko.observable();
  this.startsWith = ko.observable();

  this.refreshURL = ko.computed(() => {
    $.ajax({
      url:
        "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
        this.startsWith() +
        "&apikey=7ae845fb26988972f985d85032b8e67f",
      success: result => {
        console.log(result);
        this.mData(result.data.results);
      }
    });
  });
}
ko.applyBindings(new testViewModel());

//API KEY FOR MARVEL DEV: 7ae845fb26988972f985d85032b8e67f
