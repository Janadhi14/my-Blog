## What is PKI?
PKI stands for public key infrastructure and is a broad term that refers to policies, procedures, hardware, software and people that work with digital certificates and the creation, distribution, management, storage and revocation of these certificates 

## Symmetric encryption
 A form of encryption that uses the same key for encryption and decryption 
 - Little overheard 
 - Very fast
 - Doesn't scale well as it can be difficult to distribute keys secretly 
## Asymmetric encryption
A form of encryption that uses 2 or more keys that are mathematically related for encryption and decryption
- Both keys are made at the same time
- Private key - keeps this private 
- Public key can be seen and used by anyone 
- The private key cannot be derived using the public key due to the complex math
- Examples like GPG and PGP
	- **PGP (Pretty Good Privacy)** and **GPG (GNU Privacy Guard)** are two closely related tools used for securing data and communications through encryption and digital signatures.
	- PGP uses a symmetric cipher like AES and then encrypts the symmetric key with the recepients public key - 
	- PGP uses both asymmetric and symmetric
	- GPG uses a web of trust approach to validate public keys and uses assymetric 
	- GPG is free and opensource 

![[AsymmetricEncryptionDiagram.png]]

#### The key pair 
- The Key generation process only takes a few moments 
- The output is a public key and a private key
- Lots of randomization
- The Key generation program uses a large random number 
- Large prime numbers are used 

![[KeyGenerationDiagram.png|200]]

## Key escrow
- In large organisation it may be best to have a central location to keep the private keys so that if someone leaves the organisation you are able to decrypt their information even though you are not the one who encrypted it(you still have their key)
- Private Keys are stored locally in a centralized location
