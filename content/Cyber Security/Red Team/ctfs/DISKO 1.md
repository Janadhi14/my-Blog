#Forensic #CTF #easy

For this CTF you will be required to locate a flag within a disk file so generally you will be provided a .dd file. 
- This stands for disk data.
- In Unix, the tool that copies raw data sector-by-sector is named **`dd`**.
- This file will be a raw disk image so this we need to mount it
	- What even is a raw disk image?
		- A **raw disk image** is essentially an exact, bit-for-bit copy of a storage device (like a hard drive, SSD, or USB stick) saved as a single file. It captures **all the data on the disk**, including:
			- The file system structure (FAT, NTFS, ext4, etc.)
			- All files and directories
			- Hidden data, deleted files, and free space
			- Boot sectors and partition tables

First lets download the file, following this use gunzip to open the zip as it wil be downlaoded as a .gzip extensions so the file will look like disko-XXX.dd.gzip
```bash
gunzip disko.dd.gz
```
- Now we will have a .dd file which is the raw disk image that we require

So we need to mount this drive into our file system on our virtual machine and to do so we can run:
```bash

```
