#include <iostream>
#include <unistd.h>

int main(){
    
    if(fork() || fork()) fork(); 
    printf("1");
    return 0;
}