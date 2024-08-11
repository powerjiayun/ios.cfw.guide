import{_ as l,r as n,o as s,c,a as e,b as t,d as o,w as h,e as i}from"./app.76e30526.js";const d={},u=e("p",null,"Patchstick is capable of untether jailbreaking the Apple TV 1 on Apple TV Software 1.0 to 3.0.2.",-1),p=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),t(" Requirements")],-1),f=e("ul",null,[e("li",null,"A computer with at least one free USB-A port"),e("li",null,"A USB-A flash drive with a capacity between 1GB and 64GB"),e("li",null,"macOS 10.8 to 10.13")],-1),w=e("h2",{id:"creating-the-patchstick",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-the-patchstick","aria-hidden":"true"},"#"),t(" Creating the Patchstick")],-1),m={href:"https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/cgUwDb5S",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.iclarified.com/970/appletv-firmware-download-locations",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/M1kWwbia",target:"_blank",rel:"noopener noreferrer"},g=i("<li>Unzip ATV USB Creator and drag it to /Applications</li><li>Open Terminal and run the command <code>sudo /Applications/atvusb-creator.app/Contents/MacOS/atvusb-creator</code> to open the application. Enter your user password when prompted.</li><li>In ATV USB Creator, click Choose a DMG and then select your downloaded TV Software DMG.</li><li>Ensure that your chosen USB flash drive is selected in the &quot;USB Target Device&quot; dropdown. It will not show the drive&#39;s name, only its location in /dev. <ul><li>To ensure that it is the correct drive, open Disk Utility, select your flash drive, and make sure that the Device listing matches up with ATV USB Creator&#39;s selected device.</li><li>This will erase all data on the flash drive.</li></ul></li><li>Make sure that <code>ssh tools</code> and <code>bin tools</code> is enabled under the Installation Options dropdown. You may enable the other options, but they are not required.</li><li>Click the <code>Create Using -&gt;</code> button and wait. The process will take a few minutes.</li>",6),b=i('<h2 id="installing-the-patchstick" tabindex="-1"><a class="header-anchor" href="#installing-the-patchstick" aria-hidden="true">#</a> Installing the Patchstick</h2><ol><li>Unplug the power cable from your Apple TV.</li><li>Plug your newly created Patchstick into the USB port on the back of your Apple TV.</li><li>Plug the power cable back in.</li><li>Wait a few minutes. You will see an Apple TV 1 logo with Tux sitting on it for about 30 seconds, and then a lot of text will scroll down the screen.</li><li>Once you see the line <code>penbuntu login: _</code> at the bottom, unplug the Apple TV, unplug the USB flash drive, and plug your Apple TV back in.</li></ol><p>:::</p><p>You should now be jailbroken with the Software Menu added to your home screen. You can use this menu to manage your Apple TV. SSH is available via the command <code>ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-dss frontrow@ip.of.apple.tv</code>, the password is <code>frontrow</code>. To mount / as read-write, run the command <code>sudo mount -t hfs -o rw /dev/disk0s3 /</code>.</p>',4);function v(T,A){const r=n("router-link"),a=n("ExternalLinkIcon");return s(),c("div",null,[u,e("p",null,[t("Patchstick is an "),o(r,{to:"/types-of-jailbreak/#untethered-jailbreaks"},{default:h(()=>[t("untethered")]),_:1}),t(" jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes or Finder (macOS Catalina and newer).")]),p,f,w,e("ol",null,[e("li",null,[t("Download the Apple TV software's restore DMG corresponding to the TV Software version that your Apple TV is running from "),e("a",m,[t("here"),o(a)]),t(". "),e("a",k,[t("This link"),o(a)]),t(" will tell you which DMG corresponds to what TV Software version")]),e("li",null,[t("Download the latest version of "),e("a",_,[t("ATV USB Creator"),o(a)])]),g]),b])}var S=l(d,[["render",v],["__file","index.html.vue"]]);export{S as default};
