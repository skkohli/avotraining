var dataSingleton = (function () {
  var instance;
  function init() {
   function privateMethod(){
     console.log( "private" );
   }
   
   return {
     controlsList: {},
     setObject: function(ob){
      console.log( "i will set object data" );
    },
    getData : function (key) {
      console.log( "i will fetch data" );
    },
    setData: function (key,val) {
      return privateRandomNumber;
    },

  };
}
return {
  getInstance: function () {
    if ( !instance ) {
      instance = init();
    }
    return instance;
  }
};

})();

var dataServiceOb = dataSingleton.getInstance();
var dataServiceObOne = dataSingleton.getInstance();
console.log(dataServiceOb === dataServiceObOne);
dataServiceOb.getData('asdf');
