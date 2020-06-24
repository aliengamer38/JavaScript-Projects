struct document
{
    char *first_name;
    char *last_name;
};


void getInformation(struct document *infoPtr);
void print_info(struct document *infoPtr);
void changeString(char *str);
void print_wait();