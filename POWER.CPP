#include <iostream>
#include <math.h>
using namespace std;
int main(){
    int n = 199;
    int i = 1;
    int ans = 0;
    int res = 0;
    int prev = 0;
    while(i<4){
        double r = pow(10, i);
        res = ans-res;
        ans = n % int(r) ;
        i++;
        cout<<ans - prev<<" ";
        prev = ans;
    }    
}