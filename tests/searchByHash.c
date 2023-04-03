#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <openssl/sha.h>

#define MAX_PATH_LEN 1024
#define SHA256_DIGEST_LENGTH 32

void sha256(const char *path, unsigned char hash[SHA256_DIGEST_LENGTH]) {
    int fd = open(path, O_RDONLY);
    if (fd == -1) {
        perror("open");
        return;
    }

    SHA256_CTX ctx;
    SHA256_Init(&ctx);

    char buffer[4096];
    ssize_t nread;
    while ((nread = read(fd, buffer, sizeof(buffer))) > 0) {
        SHA256_Update(&ctx, buffer, nread);
    }

    SHA256_Final(hash, &ctx);

    close(fd);
}

int main(int argc, char **argv) {
    if (argc != 3) {
        fprintf(stderr, "Usage: %s <path> <hash>\n", argv[0]);
        return 1;
    }

    char *path = argv[1];
    char *hash_str = argv[2];

    unsigned char hash[SHA256_DIGEST_LENGTH];
    int i;
    for (i = 0; i < SHA256_DIGEST_LENGTH; i++) {
        sscanf(&hash_str[i * 2], "%02x", &hash[i]);
    }

    DIR *dir = opendir(path);
    if (!dir) {
        perror("opendir");
        return 1;
    }

    struct dirent *entry;
    while ((entry = readdir(dir))) {
        if (entry->d_type != DT_REG) {
            continue;
        }

        char filepath[MAX_PATH_LEN];
        snprintf(filepath, sizeof(filepath), "%s/%s", path, entry->d_name);

        unsigned char filehash[SHA256_DIGEST_LENGTH];
        sha256(filepath, filehash);

        if (memcmp(filehash, hash, SHA256_DIGEST_LENGTH) == 0) {
            printf("%s %s\n", filepath, hash_str);
        }
    }

    closedir(dir);

    return 0;
}
