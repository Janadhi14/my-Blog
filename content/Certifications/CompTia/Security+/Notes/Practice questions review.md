## PKI
- public 
## Digital Certificates
Digital certificate =. public key and digital signature

## Gap Analysis
Study of where we are compared to where we want to be and this might require extensive research which can take a long time to gather the information. 

Before the Gap analysis - get a baseline


## Common Threat Vectors


## Encryption and Hashing
**ECDSA (Elliptic Curve Digital Signature Algorithm)**

- Specifically designed for generating and verifying digital signatures using elliptic curve cryptography.
- Offers similar security to RSA or DSA with shorter key lengths.
- Used for digital signatures and doesn't have encryption functionality 

**RSA** One of the earliest public-key algorithms, widely used for both encryption and digital signatures

**DSA** Designed by the National Security Agency (NSA) for digital signature generation and verification
- created specifically for creating and verifying digital signatures
- Not suited for encryption



**ECDHE** is used for securely exchanging cryptographic keys over an insecure channel
**GPG/PGP**:
- GPG is GNU privacy guard 
- PGP is Pretty good privacy 
- These are _tools/software implementations_ and standards that _use_ various underlying cryptographic algorithms (like RSA, ECDSA, etc.) for encryption and signing.


**MD5** is a hash function that was used previously but is not not in uses due to it being cryptographically broken as there are collisions 
- collisions are when 2 different cipher inputs generate the same hash value 

**RSA** is an Asymmetric encryption algorithm that s used for secure data transmission, digital signatures and key exchange 

**SHA (Secure Hash Algorithm)** is a family of cryptographic hash functions designed to ensure data integrity, authentication, and security across a wide range of applications. Developed by the National Security Agency (NSA) and published by the National Institute of Standards and Technology (NIST), the SHA family has evolved through multiple iterations to address emerging security challenges and advancements in cryptographic research
- **SHA-1:** Once widely adopted but now deprecated due to security vulnerabilities.
- **SHA-2:** Currently the standard for secure hashing, offering robust security with variants catering to different needs.
- **SHA-3:** Introduces a fundamentally different construction, providing an alternative path for secure hashing and complementing SHA-2.

**AES (Advanced Encryption Standard)** is a widely adopted symmetric encryption algorithm used to secure data across various applications and industries. Established as a federal standard in the United States, AES has become the cornerstone of modern cryptographic practices, ensuring data confidentiality and integrity in everything from secure communications to data storage

**PKCS**. is a collection of standards for public key cryptography that uses various protocols and algorithms for encryption, digital signatures and other cryptographic operations

**HMAC (Hash-Based Message Authentication Code)** is a specific construction for creating a message authentication code (MAC) involving a cryptographic hash function and a secret cryptographic key. It is widely used to **verify both the data integrity and the authenticity of a message**



**RIPEMD-160 (RACE Integrity Primitives Evaluation Message Digest 160-bit)** is a cryptographic hash function designed to provide data integrity and security in various applications. Developed as part of the RIPEMD family, RIPEMD-160 offers a 160-bit hash output, making it more secure against collision attacks compared to its predecessor, RIPEMD-128.


**CRC (Cyclic Redundancy Check)** is a widely used error-detecting code designed to detect accidental changes to raw data in digital networks and storage devices. Unlike cryptographic hash functions, CRCs are not intended for security purposes but are highly effective for ensuring data integrity during transmission and storage


Cryptographic Algorithms Based on DLP
1. Diffie-Hellman Key Exchange
2. Digital Signature Algorithm (DSA)
3. ElGamal Encryption
4. Elliptic Curve Cryptography (ECC)

## Digital Certificates
RA -  registration authority in PKI who is responsible for verifying the identity of a user of device registration a digital verification 

### Certificate Authority (CA)

**Definition:** A Certificate Authority is a trusted entity responsible for issuing, managing, revoking, and validating digital certificates. It serves as the cornerstone of PKI by binding public keys to the identities of entities (such as individuals, organizations, or devices) through digital certificates.
### Registration Authority (RA)
**Definition:** A Registration Authority acts as an intermediary between users seeking certificates and the Certificate Authority. Its primary role is to **handle the initial validation of entities requesting digital certificates**, ensuring that only legitimate and verified entities receive certificates from the CA.

**OCSP** - **Online certificate status protocol** is an Internet protocol that determines if a digital certificate is valid or has been revoked and is the fastest way to check the validity of a single digital certificate 


**DN**- **Distinguished name** is a unique identifier in X.059 certificates to name entities 



A **self-signed certificate** is a digital certificate that is signed by the same entity whose identity it certifies,
