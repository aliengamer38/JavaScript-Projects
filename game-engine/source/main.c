#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "main.h"
#include <string.h>
#include <ctype.h>

#define RATE  0.1  
#define TAX_PAY  300
#define SIZE 10


int findMax(int numLength, int *nums)
{
    int max = nums[0];
    for (int i = 1; i < numLength; i++)
    {
        if (nums[i] > max)
        {
            max = nums[i];
        }
    }
    return max;
}

void printArrChars(int length, char *word)
{
    for (int i = 0; i < length; i++)
    {        
        printf("word[%d] = %d or %c\n", i, word[i], word[i]);
        if (word[i] == '\0')
            return;
    }
}

char* convert_to_upper(char *word)
{    
    for (int i = 0; i < 1000; i++)
    {
        word[i] = toupper(word[i]);        
        if (!word[i])
            break;
    }
    return word;
}
char findLength(char *word)
{
    char count = 0;
    for (char i = 0; i < 255; i++)
    {
        if (word[i])
            break;
        count++;        
    }
    return count;
}
int main(int argc, char *argv[]) 
{
    char num[] = "98.517";
    double numVal = atoi(num);
    printf("%.2f", numVal);
}

void null_string()
{
    char word[] = "words";
    char text[] = "word";
    
    if (strncmp(word, text, 5) == 0)
        printf("The two phrase are equal");
    
}

void printMessage()
{
    printf("This is a message");
}

void grades()
{
    int gradeLen;
    printf("How many grades are there? ");
    scanf("%d", &gradeLen);
    printf("Length of grades: %d\n", gradeLen);
    int grades[gradeLen];
    int sum = 0;
    for (int i = 0; i < gradeLen; i++)
    {
        int grade;
        printf("Input a grade: ");
        scanf("%d", &grade);
        sum += grade;
        grades[i] = grade;
    }
    for (int i = 0; i < gradeLen; i++) {
        printf("grades[%d] = %d\n", i, grades[i]);        
    }
    printf("Average of grades = %.3lf", (double)sum / gradeLen);
}

void guessingGame()
{
    int answer = 102;
    int guess;
    int maxGuessCount;
    printf("Type in max number of guess: ");
    scanf("%d", &maxGuessCount);
    printf("You have %d number of guesses\n", maxGuessCount);
    printf("Guess a number! ");
    scanf("%d", &guess);
    while (guess != answer)
    {
        if (guess > answer)
            printf("Your guess is higher\n");
        else        
            printf("Your guess is lower\n");
        maxGuessCount--;
        printf("You have %d guesses left\n", maxGuessCount);
        if (maxGuessCount > 0) {
            printf("Guess another number: ");
            scanf("%d", &guess);
        } else {
            break;
        }
    }
    if (maxGuessCount > 0)    
        printf("Your guess is correct!\n");    
    else
        printf("You ran out of guesses\n");
}
