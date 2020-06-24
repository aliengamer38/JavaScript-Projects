#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <ctype.h>
#include "main.h"
#include "paths.h"

int main()
{
    FILE *filePtr = fopen(FILE_PATH, "w+");
    fputs("This is a text", filePtr);
    rewind(filePtr);    
    char text[20], text2[20], text3[20], text4[20];
    fscanf(filePtr, "%s %s %s %s", text, text2, text3, text4);
    printf("%s %s %s %s\n", text, text2, text3, text4);
    fclose(filePtr);
    filePtr = NULL;
}

void print_wait()
{
    char str1[10], str2[10], str3[10];
   int year;
   FILE * fp;

   fp = fopen ("file.txt", "w+");
   fputs("We are in 2012", fp);
   
   rewind(fp);
   fscanf(fp, "%s %s %s %d", str1, str2, str3, &year);
   
   printf("Read String1 |%s|\n", str1 );
   printf("Read String2 |%s|\n", str2 );
   printf("Read String3 |%s|\n", str3 );
   printf("Read Integer |%d|\n", year );

   fclose(fp);
   fp = NULL;
   printf("Exiting...");
}

void changeString(char *str)
{
    
}
void getInformation(struct document *infoPtr)
{
    infoPtr->first_name = malloc(30);
    infoPtr->last_name = malloc(30);
    printf("Input first name: ");
    scanf("%s", infoPtr->first_name);
    printf("Input last name: ");
    scanf("%s", infoPtr->last_name);
}
void print_info(struct document *infoPtr)
{
    printf("First name: %s\n", infoPtr->first_name);
    printf("First name: %s\n", infoPtr->last_name);
}
