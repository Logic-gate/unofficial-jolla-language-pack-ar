<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE TS>
<TS version="2.1" language="en_GB">
<context>
    <name></name>
    <message id="sailfish_crypto-generate_stored_key-la-message">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="508"></location>
        <source>An application wants to store a new key named %1 within collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase from which a key will be derived. %1 is the key name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>An app wants to store a new key named %1 within collection %2 in plugin %3.</translation>
    </message>
    <message id="sailfish_crypto-generate_stored_key-la-enter_key_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="513"></location>
        <source>Enter a passphrase from which the key will be derived.</source>
        <translation>Enter a passphrase from which the key will be derived</translation>
    </message>
    <message id="sailfish_crypto-generate_stored_key-la-repeat_key_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="515"></location>
        <source>Repeat the passphrase from which the key will be derived.</source>
        <translation>Repeat the passphrase from which the key will be derived</translation>
    </message>
    <message id="sailfish_crypto-import_key-la-message">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="728"></location>
        <source>A passphrase is required in order to import the key %1 into collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase to import a key. %1 is the key name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>Passphrase is required to import the key %1 into collection %2 in plugin %3.</translation>
    </message>
    <message id="sailfish_crypto-import_key-la-enter_import_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="733"></location>
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="746"></location>
        <source>Enter the key import passphrase.</source>
        <translation>Enter key import passphrase</translation>
    </message>
    <message id="sailfish_crypto-import_key-la-enter_application_import_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="743"></location>
        <source>A passphrase is required in order to import a key with plugin %1 which will then be returned to the application</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase to import a key which will then be returned to the application. %1 is the plugin name.</extracomment>
        <translation>Passphrase is required to import a key with plugin %1 which will then be returned to the app</translation>
    </message>
    <message id="sailfish_secrets-no-datacorruption_summary">
        <location filename="SecretsImpl/secrets.cpp" line="2670"></location>
        <source>Corrupted secrets data</source>
        <extracomment>Notification summary text that tells the user that their secrets data is corrupted and needs to be reset.</extracomment>
        <translation>Corrupted secrets data</translation>
    </message>
    <message id="sailfish_secrets-no-datacorruption_body">
        <location filename="SecretsImpl/secrets.cpp" line="2675"></location>
        <source>Data corruption detected. Please reset your secrets data.</source>
        <extracomment>Notification body text that tells the user that their secrets data is corrupted and needs to be reset.</extracomment>
        <translation>Data corruption detected. Reset your secrets data.</translation>
    </message>
    <message id="sailfish_secrets-no-datacorruption_appname">
        <location filename="SecretsImpl/secrets.cpp" line="2680"></location>
        <source>Sailfish OS</source>
        <extracomment>Notification application name for the data corruption notification</extracomment>
        <translation>Sailfish OS</translation>
    </message>
    <message id="sailfish_secrets-create_customlock_collection-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="468"></location>
        <source>%1 wants to create a new secrets collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase which will be used to encrypt a collection. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 wants to create a new secret collection %2 in plugin %3.</translation>
    </message>
    <message id="sailfish_secrets-create_customlock_collection-la-enter_new_collection_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="471"></location>
        <source>Enter the passphrase which will be used to encrypt the collection.</source>
        <translation>Enter passphrase which will be used to encrypt the collection</translation>
    </message>
    <message id="sailfish_secrets-create_customlock_collection-la-repeat_new_collection_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="473"></location>
        <source>Repeat the passphrase which will be used to encrypt the collection.</source>
        <translation>Repeat passphrase which will be used to encrypt the collection</translation>
    </message>
    <message id="sailfish_secrets-delete_collection-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="764"></location>
        <source>%1 wants to delete collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a lock code which will be used to unlock a collection for deletion. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 wants to delete collection %2 in plugin %3.</translation>
    </message>
    <message id="sailfish_secrets-delete_collection-la-enter_collection_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="767"></location>
        <source>Enter the lock code which will be used to unlock the collection for deletion.</source>
        <translation>Enter lock code which will be used to unlock the collection for deletion</translation>
    </message>
    <message id="sailfish_secrets-unlock_collection-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1111"></location>
        <source>%1 wants to read key identifiers from collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a lock code which will be used to unlock a collection to read key identifiers. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 wants to read key identifiers from collection %2 in plugin %3.</translation>
    </message>
    <message id="sailfish_secrets-unlock_collection-la-enter_collection_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1114"></location>
        <source>Enter the lock code which will be used to unlock the collection.</source>
        <translation>Enter lock code which will be used to unlock the collection</translation>
    </message>
    <message id="sailfish_secrets-user_input-la-data_request">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1351"></location>
        <source>An application %1 is requesting input which will be returned to the application: %2</source>
        <extracomment>Inform the user that the application is requesting data. %1 is the application name, %2 is the prompt text supplied by the application.</extracomment>
        <translation>%1 is requesting input which will be returned to the app: %2</translation>
    </message>
    <message id="sailfish_secrets-set_collection_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1509"></location>
        <source>%1 wants to store a new secret named %2 into collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the secret data which will be stored. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 wants to store a new secret named %2 into collection %3 in plugin %4.</translation>
    </message>
    <message id="sailfish_secrets-set_collection_secret-la-enter_secret_data">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1515"></location>
        <source>Enter the confidential data which will be stored.</source>
        <translation>Enter confidential data which will be stored</translation>
    </message>
    <message id="sailfish_secrets-set_collection_secret-la-collection_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1565"></location>
        <source>%1 wants to store a new secret named %2 into collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in which a new secret will be stored. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 wants to store a new secret named %2 into collection %3 in plugin %4.</translation>
    </message>
    <message id="sailfish_secrets-la-enter_collection_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1571"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2596"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3386"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3886"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5146"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5566"></location>
        <source>Enter the collection lock code to unlock the collection.</source>
        <translation>Enter collection lock code to unlock the collection</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2068"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2300"></location>
        <source>%1 wants to store a new standalone secret named %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the standalone secret data which will be stored. %1 is the application name, %2 is the secret name, %3 is the plugin name.</extracomment>
        <translation>%1 wants to store a new standalone secret named %2 in plugin %3.</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-enter_secret_data">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2073"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2305"></location>
        <source>Enter the confidential data which will be stored.</source>
        <translation>Enter confidential data which will be stored</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-enter_secret_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2355"></location>
        <source>Enter the passphrase which will be used to encrypt the secret.</source>
        <translation>Enter passphrase which will be used to encrypt the secret</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-repeat_secret_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2357"></location>
        <source>Repeat the passphrase which will be used to encrypt the secret.</source>
        <translation>Repeat passphrase which will be used to encrypt the secret</translation>
    </message>
    <message id="sailfish_secrets-get_collection_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2590"></location>
        <source>%1 wants to retrieve secret %2 from collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in order to retrieve a secret. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 wants to retrieve secret %2 from collection %3 in plugin %4.</translation>
    </message>
    <message id="sailfish_secrets-get_standalone_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3042"></location>
        <source>%1 wants to retrieve standalone secret %2 from plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the standalone secret in order to retrieve it. %1 is the application name, %2 is the standalone secret name, %3 is the plugin name.</extracomment>
        <translation>%1 wants to retrieve standalone secret %2 from plugin %3.</translation>
    </message>
    <message id="sailfish_secrets-get_standalone_secret-la-enter_secret_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3048"></location>
        <source>Enter the passphrase to unlock the secret.</source>
        <translation>Enter passphrase to unlock the secret</translation>
    </message>
    <message id="sailfish_secrets-find_collection_secrets-la-app_search">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3381"></location>
        <source>%1 wants to search for secrets within collection %2 from plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in order to filter secrets within it. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 wants to search for secrets within collection %2 from plugin %3.</translation>
    </message>
    <message id="sailfish_secrets-delete_collection_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3880"></location>
        <source>%1 wants to delete secret %2 within collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in order to delete a secret within it. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 wants to delete secret %2 within collection %3 in plugin %4.</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-message_old_plugin">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4434"></location>
        <source>%1 wants to change the lock code for plugin %2.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the old lock code to unlock the extension plugin in order to change its lock code. %1 is the application name, %2 is the plugin name.</extracomment>
        <translation>%1 wants to change the lock code for plugin %2.</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_old_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4437"></location>
        <source>Enter the old lock code to unlock the plugin.</source>
        <translation>Enter the old lock code to unlock the plugin</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-message_old_master">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4444"></location>
        <source>%1 wants to change the secrets service master lock code.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the old lock code to unlock the secrets service in order to change the master lock code. %1 is the application name.</extracomment>
        <translation>%1 wants to change the secrets service master lock code.</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_old_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4447"></location>
        <source>Enter the old master lock code.</source>
        <translation>Enter the old master lock code</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-new_plugin_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4511"></location>
        <source>%1 wants to change the lock code for plugin %2.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the new lock code for the plugin. %1 is the application name, %2 is the plugin name.</extracomment>
        <translation>%1 wants to change the lock code for plugin %2.</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_new_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4514"></location>
        <source>Enter the new lock code for the plugin.</source>
        <translation>Enter new lock code for the plugin</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-repeat_new_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4516"></location>
        <source>Repeat the new lock code for the plugin.</source>
        <translation>Repeat new lock code for the plugin</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-new_master_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4523"></location>
        <source>%1 wants to change the secrets service master lock code.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the new master lock code for the secrets service. %1 is the application name.</extracomment>
        <translation>%1 wants to change the secrets service master lock code.</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_new_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4526"></location>
        <source>Enter the new master lock code.</source>
        <translation>Enter new master lock code</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-repeat_new_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4528"></location>
        <source>Repeat the new master lock code.</source>
        <translation>Repeat new master lock code</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-message_plugin">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4781"></location>
        <source>%1 wants to use plugin %2.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the extension plugin. %1 is the application name, %2 is the plugin name.</extracomment>
        <translation>%1 wants to use plugin %2.</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-enter_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4784"></location>
        <source>Enter the lock code to unlock the plugin.</source>
        <translation>Enter lock code to unlock the plugin</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-message_master">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4791"></location>
        <source>%1 wants to use the secrets service.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the secrets service. %1 is the application name.</extracomment>
        <translation>%1 wants to use the secrets service.</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-enter_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4794"></location>
        <source>Enter the master lock code to unlock the secrets service.</source>
        <translation>Enter master lock code to unlock the secrets service</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-sign_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5101"></location>
        <source>%1 wants to use plugin %2 to sign data using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to sign data. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>%1 wants to use plugin %2 to sign data using the key named %3 from collection %4 in plugin %5.</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-verify_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5109"></location>
        <source>%1 wants to use plugin %2 to verify a signature using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to verify a signature. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>%1 wants to use plugin %2 to verify a signature using the key named %3 from collection %4 in plugin %5.</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-encrypt_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5117"></location>
        <source>%1 wants to use plugin %2 to encrypt data using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to encrypt data. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>%1 wants to use plugin %2 to encrypt data using the key named %3 from collection %4 in plugin %5.</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-decrypt_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5125"></location>
        <source>%1 wants to use plugin %2 to decrypt data using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to decrypt data. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>%1 wants to use plugin %2 to decrypt data using the key named %3 from collection %4 in plugin %5.</translation>
    </message>
    <message id="sailfish_secrets-set_collection_key_precheck-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5560"></location>
        <source>%1 wants to store a new key named %2 into collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection prior to key storage. %1 is the application name, %2 is the key name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 wants to store a new key named %2 into collection %3 in plugin %4.</translation>
    </message>
</context>
</TS>
