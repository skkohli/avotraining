var dataSingleton = (function () {
  var instance;
  function init() {
   function privateMethod(){
     console.log( "private" );
   }
   
   return {
     controlsData: {},
     setObject: function(ob){
     this.controlsList = ob;
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


