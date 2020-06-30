#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Complete the following function.


void calculate_the_maximum(int n, int k) {
  int a,b,var1=0,var2=0,var3=0;

    for (a=1; a<n; a++) {
    for (b=a+1; b<=n; b++) {
        
    if (var1 < (a&b) && (a&b) < k) {
    var1 = a&b;
    }

    if (var2 < (a|b) && (a|b) < k) {
    var2 = a|b;
    }

    if (var3 < (a^b) && (a^b) < k) {
    var3 = a^b;
    }

    }
    }
    printf("%d\n%d\n%d",var1,var2,var3);
}

int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
 
    return 0;
}
