module.exports = {
    funcPrimeNumber:function(input_number){
        var max_prime = 0;
        for(var i =2;i<=input_number;i++){
        
            while(input_number%i==0){
                input_number/=i;
                if(max_prime<i) max_prime = i;
            }
        }
    return max_prime;
    }
}