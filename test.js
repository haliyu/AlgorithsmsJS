function getWrongAnswers(N, C) {
    // Write your code here
      var ans ='';
  
    for(let i = 0; i < C.length; i++)  
      if(C[i] == 'A')
        ans +='B';
      else
        ans += 'A';
      
    return ans;
  }

//   function letterCapitalize(str) { 
//     var output = "";
//     for (var i=0; i<str.length; i++)
//         if (i == 0 || str.charAt(i-1) == " ")
//             output += str.charAt(i).toUpperCase();
//         else
//             output += str.charAt(i);
//     return output;
// }
// const resultx = letterCapitalize("hello world");
  
  const result = getWrongAnswers(3, 'ABA');
  
  console.log(result);