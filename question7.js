function sorting(ar){
    var i = 0, j; 
      
    while (i < ar.length) { 
        j = i + 1; 
        while (j < ar.length) {
              
            if (ar[j] < ar[i]) {
                var temp = ar[i]; 
                ar[i] = ar[j]; 
                ar[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    } 
}
