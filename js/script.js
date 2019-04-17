import * as ko from "knockout";

function testViewModel() {
  // Data
  this.mData = ko.observable([]);
  this.startsWith = ko.observable('vacation');
  this.showNext = ko.observable(true);
  this.apiURL = ko.observable(`https://api.pexels.com/v1/search?query=${this.startsWith().split(' ').join('+')}&per_page=15&page=1`);
  this.nextUrl = ko.observable();

  this.refreshURL = ko.computed(() => {
      $('button').mousedown((e)=>{
          e.preventDefault();
          this.apiURL(this.nextUrl());
      })
    $.ajax({
      // url:
      //   "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
      //   this.startsWith() +
      //   "&apikey=7ae845fb26988972f985d85032b8e67f",
      // success: result => {
      //   console.log(result);
      //   this.mData(result.data.results);
      // }
        url:this.apiURL(),
      //   url: "./response.json",
        headers: {
            'Authorization': '563492ad6f91700001000001a17c30da828440c79fa4aa1a3acc19d8'
        },
        success: result=>{
            this.mData(result.photos);
            this.nextUrl(result.next_page);
            if(result.next_page){
                this.showNext(true);
            } else {
                this.showNext(false);
            }
        },
    });
  });
}
ko.applyBindings(new testViewModel());
//API KEY FOR MARVEL DEV: 7ae845fb26988972f985d85032b8e67f
