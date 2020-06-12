#include <stdio.h>

int main() {
    int word[3];
    printf("Please type in a word: ");
    scanf("%s", word);
    printf("word[0] = %d\n", word[0]);
    printf("word[1] = %d\n", word[1]);
    printf("word[2] = %d\n", word[2]);
    printf("word[3] = %d\n", word[3]);
    printf("word = %s", word);
}