( function (theGlobal) { 

    var obj =  {
        add: function add(a, b){
            return a + b;
        }
    }
    theGlobal.calculator = obj;    
} (window) )