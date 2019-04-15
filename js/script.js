import * as ko from "knockout";

function testViewModel() {
  // Data
  this.mData = ko.observable([]);
  this.startsWith = ko.observable('vacation');

  this.refreshURL = ko.computed(() => {
    $.ajax({
      // url:
      //   "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
      //   this.startsWith() +
      //   "&apikey=7ae845fb26988972f985d85032b8e67f",
      // success: result => {
      //   console.log(result);
      //   this.mData(result.data.results);
      // }
      //   url:`https://api.pexels.com/v1/search?query=${this.startsWith().split(' ').join('+')}&per_page=15&page=1`,
        url: "./response.json",
        headers: {
            'Authorization': '563492ad6f91700001000001a17c30da828440c79fa4aa1a3acc19d8'
        },
        success: result=>{
            console.log(result);
            this.mData(result.photos);
        },
    });
  });
}
ko.applyBindings(new testViewModel());
//API KEY FOR MARVEL DEV: 7ae845fb26988972f985d85032b8e67f
