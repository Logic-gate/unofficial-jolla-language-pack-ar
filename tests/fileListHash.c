#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <openssl/sha.h>

#define MAX_FILENAME_LENGTH 256
#define MAX_HASH_LENGTH 64
#define MAX_FILE_SIZE 1024*1024

int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Usage: %s <input_file_list> <output_file>\n", argv[0]);
        return 1;
    }

    FILE *input_file_list = fopen(argv[1], "r");
    if (input_file_list == NULL) {
        printf("Error: could not open input file list '%s'\n", argv[1]);
        return 1;
    }


    FILE *output_file = fopen(argv[2], "w");
    if (output_file == NULL) {
        printf("Error: could not open output file '%s'\n", argv[2]);
        fclose(input_file_list);
        return 1;
    }

    char filename[MAX_FILENAME_LENGTH];
    char hash[MAX_HASH_LENGTH];
    unsigned char buffer[MAX_FILE_SIZE];
    size_t bytes_read;
    size_t total_bytes_read;
    SHA256_CTX sha256_ctx;
    unsigned char sha256_hash[SHA256_DIGEST_LENGTH];
    int i;

    while (fgets(filename, MAX_FILENAME_LENGTH, input_file_list) != NULL) {
      
        filename[strcspn(filename, "\n")] = '\0';

        FILE *file = fopen(filename, "rb");
        if (file == NULL) {
            printf("Error: could not open file '%s'\n", filename);
            continue;
        }

        SHA256_Init(&sha256_ctx);
        total_bytes_read = 0;
        while ((bytes_read = fread(buffer, 1, MAX_FILE_SIZE, file)) > 0) {
            SHA256_Update(&sha256_ctx, buffer, bytes_read);
            total_bytes_read += bytes_read;
        }
        SHA256_Final(sha256_hash, &sha256_ctx);
        fclose(file);


        for (i = 0; i < SHA256_DIGEST_LENGTH; i++) {
            sprintf(hash + (i * 2), "%02x", sha256_hash[i]);
        }

        fprintf(output_file, "%s,%s,%ld\n", filename, hash, total_bytes_read);
    }
  
    fclose(input_file_list);
    fclose(output_file);

    return 0;
}
