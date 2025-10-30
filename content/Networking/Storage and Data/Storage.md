# Storage Hardware 

# RAID Storage
Raid stands for redundant array of independent disks
- Raid storage is used for fault tolerance. i.e: the data is stored in such a manner that ensures that the data doesn't corrupt if a disk goes down. 
- Tehrea re 5 commonly used types of raid.
	- 0 
	- 1
	- 5
	- 6
	- 10
There are many more types but these are the common.

## RAID 0 
Also called (Striping)

**How it works:** Data is split into blocks and written across multiple drives simultaneously. No redundancy is provided.

**Minimum drives:** 2

**Capacity:** Full capacity of all drives combined

**Performance:**
- Excellent read/write speed (scales with number of drives)
- Best performance of all RAID levels
- Each drive works in parallel

**Redundancy:** None - if any single drive fails, all data is lost

**Best for:** High-performance applications where speed matters more than data safety (video editing, gaming, temporary storage)

**Example:** With two 1TB drives, you get 2TB usable space with doubled performance, but zero fault tolerance.

## RAID 1 
Also called mirroring 

**How it works:** Data is written identically to two or more drives. Each drive contains an exact copy

**Minimum drives:** 2

**Capacity:** 50% of total drive capacity (half is used for the mirror)

**Performance:**

- Read performance can improve (data can be read from either drive)
- Write performance similar to single drive (data must be written to both)
- Excellent for read-heavy workloads

**Redundancy:** Can survive failure of all but one drive

**Best for:** Critical data that needs high availability (operating systems, databases, important documents)

**Example:** With two 1TB drives, you get 1TB usable space with full redundancy.


## RAID 5
Striping with parity 
**How it works:** Data is striped across drives with parity information distributed among all drives. Parity allows reconstruction of data if one drive fails.

**Minimum drives:** 3

**Capacity:** (n-1) drives worth of space (one drive's worth is used for parity)

**Performance:**

- Good read performance (data spread across multiple drives)
- Moderate write performance (parity must be calculated and written)
- Performance degrades significantly if a drive fails during rebuild

**Redundancy:** Can survive failure of exactly one drive

**Rebuild process:** When a drive fails, the array operates in "degraded mode" until a replacement drive is installed and rebuilt using parity data.

**Weakness:** Vulnerable during rebuild - if another drive fails during this time, all data is lost. Rebuild times can be very long with modern large drives.

**Best for:** File servers, NAS systems where you need both performance and some redundancy with good storage efficiency

**Example:** With four 1TB drives, you get 3TB usable space with single-drive fault tolerance.


## RAID 10 
Also called (1+0, Stripe of Mirrors)

Basically Raid 1 + 0 so you are using both Raid 0 strategy of splitting the data between two disks but also you are using raid 1 mechanism of duplicating the data.

**How it works:** Combines RAID 1 and RAID 0. Data is first mirrored (RAID 1), then the mirrors are striped (RAID 0).

**Minimum drives:** 4 (must be even number)

**Capacity:** 50% of total capacity

**Performance:**

- Excellent read performance (benefits from both striping and mirroring)
- Good write performance (better than RAID 5/6)
- No performance penalty during rebuilds
- Scales well with more drives

**Redundancy:** Can survive multiple drive failures as long as both drives in a mirror pair don't fail

**Rebuild speed:** Very fast because it only needs to copy data from the surviving mirror, not recalculate parity

**Best for:** High-performance databases, virtualization, applications requiring both speed and reliability

**Example:** With four 1TB drives, you get 2TB usable space. Can survive failure of up to 2 drives (if they're not in the same mirror pair).
  