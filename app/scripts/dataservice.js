var dataSingleton = (function () {
  var instance;
  function init() {
   function privateMethod(){
     console.log( "private" );
   }
   return {
     controlsList: [{label:"asdf1"},{label:"asfdasdf1"}],
    setObject: function(ob){
     this.controlsList = ob;
    },
    getData : function (key) {
      return this.controlsList[key];
    },
    setData: function (key,val) {
      this.controlsList[key] = val;
      return this;
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


