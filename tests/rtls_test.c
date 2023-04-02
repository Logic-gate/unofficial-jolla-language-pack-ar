#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>

char *create_temp_file(void) {
    char *temp_file = malloc(sizeof(char) * 32);
    snprintf(temp_file, 32, "/tmp/rtls.XXXXXX");
    int fd = mkstemp(temp_file);
    close(fd);
    return temp_file;
}

void sum(char *file_path, char mode, char *action) {
    FILE *file = fopen(file_path, "r");
    if (file == NULL) {
        printf("Failed to open file: %s\n", file_path);
        exit(1);
    }

    char *hash_algorithm = "sha1sum";
    char *awk_cmd = "{ print $1 }";
    char *cmd = malloc(sizeof(char) * (strlen(hash_algorithm) + strlen(file_path) + strlen(awk_cmd) + 8));
    sprintf(cmd, "%s %s | awk '%s'", hash_algorithm, file_path, awk_cmd);

    char sha1[41];
    fgets(sha1, 41, popen(cmd, "r"));
    pclose(file);

    FILE *log_file = fopen("rtls.log", "a");
    if (log_file == NULL) {
        printf("Failed to open rtls.log\n");
        exit(1);
    }

    char *timestamp = malloc(sizeof(char) * 32);
    time_t raw_time;
    time(&raw_time);
    struct tm *time_info = localtime(&raw_time);
    strftime(timestamp, 32, "%a, %d %b %Y %T %z", time_info);

    fprintf(log_file, "%s::%c::%s %s %s\n", timestamp, mode, action, file_path, sha1);
    fclose(log_file);

    printf("%s --> %s\n", file_path, sha1);

    free(cmd);
    free(timestamp);
}

void check(char *pattern1, char *pattern2) {
    FILE *log_file = fopen("rtls.log", "r");
    if (log_file == NULL) {
        printf("Failed to open rtls.log\n");
        exit(1);
    }

    char line[256];
    while (fgets(line, 256, log_file) != NULL) {
        if (strstr(line, pattern1) != NULL && strstr(line, pattern2) != NULL) {
            printf("%s", line);
        }
    }

    fclose(log_file);
}

void append(char *files_path, char *rtlstring_path) {
    char *files_file = FILES;
    if (files_path != NULL) {
        printf("Overwriting default FILES file\n");
        files_file = files_path;
    }

    char *rtlstring_file = RTLSTRING;
    if (rtlstring_path != NULL) {
        printf("Overwriting default RTLSTRING file\n");
        rtlstring_file = rtlstring_path;
    }

    FILE *files = fopen(files_file, "r");
    if (files == NULL) {
        printf("Failed to open file: %s\n", files_file);
        exit(1);
    }

    FILE *rtlstring = fopen(rtlstring_file, "r");
    if (rtlstring == NULL) {
        printf("Failed to open file: %s\n", rtlstring_file);
        exit(1);
    }
