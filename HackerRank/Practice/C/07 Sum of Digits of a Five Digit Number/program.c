#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
	
    int n,first,second,third,fourth,fifth,total;
    scanf("%d", &n);
    //Complete the code to calculate the sum of the five digits on n.
    first=n%10;
    second=(n%100)/10;
    third=(n%1000)/100;
    fourth=(n%10000)/1000;
    fifth=(n%100000)/10000;
    printf("%d",first+second+third+fourth+fifth);
    return 0;
}