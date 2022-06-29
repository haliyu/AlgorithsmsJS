//// All wrong Challenge

function getWrongAnswers(N, C) {
    // Write your code here
      let ans = '';
  ans.concat('B');
    for(let i = 0; i < N; i++){
      if(C[i] == 'A'){
        ans+='B';
      }
      if(C[i] == 'B'){
        ans+='A';
      }
    }
    return ans;
  }
  
  const result = getWrongAnswers(11, 'BABBAABAAAB');
  
  console.log(result)