import{_ as a}from"./hostshield.c228a1dc.js";import{_ as h,r,o as u,c,a as e,b as t,d as o,w as n,e as d}from"./app.76e30526.js";const p={},_=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),t(" Requisiti")],-1),m={href:"https://store.arduino.cc/products/arduino-uno-rev3",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.aliexpress.com/w/wholesale-MAX3421E-USB-host-shield.html",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"A soldering iron",-1),y=e("li",null,"0.5mm solder",-1),w=e("li",null,"Solder flux (Optional)",-1),b=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Following this guide is a difficult task and requires moderate soldering and computer terminal skills. Proceed with caution.")],-1),A=e("h2",{id:"preparing-the-host-shield",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preparing-the-host-shield","aria-hidden":"true"},"#"),t(" Preparing the host shield")],-1),k=e("p",null,"Your host shield can arrive in two states - with headers, and without. If it is with headers, it will have pins and pin sockets already soldered to it, allowing you to connect it to an Arduino by simply placing it on top. If it has headers, your job is much easier.",-1),S=e("p",null,"You will need to solder three pads on your USB host shield. The pads to solder are circled in this image:",-1),v=e("p",null,[e("img",{src:a,alt:"Where to solder to your host shield",style:{display:"block","margin-inline":"auto","max-width":"30em"}})],-1),U=e("ol",null,[e("li",null,"Plug in your soldering iron so it starts to heat up"),e("li",null,"Once it has heated up, place your USB host shield near a good source of light"),e("li",null,"Get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip"),e("li",null,"Touch this ball of solder to the pad that you have chosen - make sure it touches both sides of the pad"),e("li",null,"Repeat steps 3-4 until all three pads have been bridged")],-1),D=e("p",null,"You will need to solder five sets of headers and bridge three pads on your USB host shield. The pads to solder are circled in this image:",-1),T=e("p",null,[e("img",{src:a,alt:"Where to solder to your host shield",style:{display:"block","margin-inline":"auto","max-width":"30em"}})],-1),x=e("ol",null,[e("li",null,"Plug in your soldering iron so it starts to heat up"),e("li",null,"Once it has heated up, place your USB host shield near a good source of light"),e("li",null,[t("Insert the first header into the holes on the board "),e("ul",null,[e("li",null,"For the single-row headers, ensure the sockets face towards the side with the ICs and USB port"),e("li",null,"For the dual-row header, ensure the sockets face on the opposite side of the board.")])]),e("li",null,"Get a medium-sided length of solder and form it into a straight wire shape"),e("li",null,"Touch it to a pin on the header - it's easiest to work from one edge and work your way to the other"),e("li",null,"Then, touch the soldering iron to the solder slightly away from the board, so that a short length of it is separated"),e("li",null,[t("This should form itself around the pin, securing the pin to the board "),e("ul",null,[e("li",null,"If it doesn't, remelt the solder and move it to the proper place")])]),e("li",null,[t("Repeat step 4 until all 34 pins are properly affixed "),e("ul",null,[e("li",null,"Ensure none of the pins are bridged (solder connecting two or more pins together)")])]),e("li",null,"Once the headers are soldered, get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip"),e("li",null,"Touch this ball of solder to the pad that you have chosen - make sure it touches both sides of the pad"),e("li",null,"Repeat steps 6-7 until all three pads have been bridged.")],-1),I=e("h2",{id:"installing-git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-git","aria-hidden":"true"},"#"),t(" Installing Git")],-1),P=e("p",null,"To use checkm8-a5, you'll need Git. Depending on what version of macOS you're on, the steps are different.",-1),B={href:"https://sourceforge.net/projects/git-osx-installer/files/",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"Open and run the installer",-1),M=e("li",null,[t("Once it is installed, open Terminal and run "),e("code",null,"git --version"),t(" to verify it has installed properly")],-1),E=e("ol",null,[e("li",null,[t("Install Brew, if you don't have it installed already, by opening a terminal window and running the command: "),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')]),e("li",null,[t("Enter your user password when prompted "),e("ul",null,[e("li",null,"Installing brew can take up to half an hour to complete")])]),e("li",null,[t("Once Brew is installed, run the command "),e("code",null,"brew install git"),t(" in terminal")]),e("li",null,[t("Once it is complete, run the command "),e("code",null,"git --version"),t(" to verify it has installed properly")])],-1),O=d('<h2 id="patching-the-usb-host-shield-2-0-library" tabindex="-1"><a class="header-anchor" href="#patching-the-usb-host-shield-2-0-library" aria-hidden="true">#</a> Patching the USB Host Shield 2.0 Library</h2><ol><li>Open a new Terminal window and run the command <code>git clone https://github.com/felis/USB_Host_Shield_2.0.git</code></li><li>Run the command <code>git clone https://github.com/synackuk/checkm8-a5.git</code></li><li>Run the command <code>cd USB_Host_Shield_2.0 &amp;&amp; git apply ~/checkm8-a5/usb_host_library.patch/</code></li></ol><h2 id="preparing-the-script" tabindex="-1"><a class="header-anchor" href="#preparing-the-script" aria-hidden="true">#</a> Preparing the Script</h2>',3),V={href:"https://www.arduino.cc/en/software",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,"While it is installing, connect your MAX3421E USB host shield to the Arduino",-1),R=e("li",null,"The pins and sockets on the bottom of the host shield will line up with the pins and sockets on the Arduino",-1),N=e("li",null,"Connect your Arduino to your computer",-1),C=e("li",null,[t("Once the Arduino IDE is installed, open Finder, press Command+Shift+G, and type in "),e("code",null,"~/checkm8-a5")],-1),G=e("li",null,[t("Open the file named "),e("code",null,"checkm8-a5.ino")],-1),L=e("li",null,[t("In the same Terminal window as before, run "),e("code",null,"cp -r ~/USB_Host_Shield_2.0 ~/Documents/Arduino/libraries/USB_Host_Shield_Library_2.0")],-1),W=e("h2",{id:"running-the-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-the-script","aria-hidden":"true"},"#"),t(" Running the Script")],-1),q=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"It may take a few tries to get your device into DFU. Be patient and ensure you follow the steps exactly.")],-1),Y=e("li",null,"Connect your iPhone or iPad to your computer",-1),X={href:"https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,"Disconnect your device from your computer and connect it to your USB host shield.",-1),$=e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected",-1),z=e("li",null,[t("In the checkm8_a5 script, find the line that reads "),e("code",null,"#define A5_8942"),t(" and change it to "),e("code",null,"#define A5-8940")],-1),J=e("li",null,"Again under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino",-1),K=e("li",null,"Serial Monitor will begin displaying a log of what the script is doing",-1),Q=e("li",null,[t("Once it displays "),e("code",null,"Done!"),t(", disconnect your device from the Arduino and proceed to the next steps")],-1),Z=e("li",null,"Connect your iPhone, iPad, or iPod to your computer",-1),ee={href:"https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode",target:"_blank",rel:"noopener noreferrer"},te=e("li",null,"Disconnect your device from your computer and connect it to your USB host shield",-1),oe=e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected",-1),ne=e("li",null,"Again under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino",-1),ie=e("li",null,"Serial Monitor will begin displaying a log of what the script is doing",-1),le=e("li",null,[t("Once it displays "),e("code",null,"Done!"),t(", disconnect your device from the Arduino and proceed to the next steps")],-1),se=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"On the iPad 3, success rate is much lower compared to other devices. It is not uncommon for it to take upwards of 10 tries to successfully exploit.")],-1),re=e("li",null,"Connect your iPhone, iPad, or iPod to your computer",-1),ae={href:"https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode",target:"_blank",rel:"noopener noreferrer"},de=e("li",null,"Disconnect your device from your computer and connect it to your USB host shield",-1),he=e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected",-1),ue=e("li",null,[t("In the checkm8_a5 script, find the line that reads "),e("code",null,"#define A5_8942"),t(" and change it to "),e("code",null,"#define A5-8945"),t(".")],-1),ce=e("li",null,"Again under the Tools menu, open Serial Monitor",-1),pe=e("li",null,"Set the baud rate is set to 115200, then upload the sketch to the Arduino",-1),_e=e("li",null,"Serial Monitor will begin displaying a log of what the script is doing",-1),me=e("li",null,[t("Once it displays "),e("code",null,"Done!"),t(", disconnect your device from the Arduino and proceed to the next steps")],-1),fe=e("ol",null,[e("li",null,"Connect your Apple TV to a computer with a MicroUSB cable"),e("li",null,"You will most likely need to disconnect the HDMI cable"),e("li",null,[t("Enter DFU mode by completing the following steps: "),e("ol",null,[e("li",null,"Hold Menu and Down until the LED on the Apple TV flashes rapidly."),e("li",null,"Let go, then hold Menu and Play/Pause until the LED on the Apple TV flashes rapidly")])])],-1),ge=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("If iTunes or Finder says "),e("code",null,"n/a"),t(" when listing the serial number when reporting it detected an Apple TV in recovery or DFU mode, it has successfully entered DFU.")]),e("p",null,"If it displays the serial number, try the steps again - it entered Recovery Mode instead.")],-1),ye=e("ol",{start:"4"},[e("li",null,"Disconnect your Apple TV from your computer and connect it to your USB host shield"),e("li",null,"Under the Tools menu, select Port and ensure your Arduino is selected"),e("li",null,"Also under the Tools menu, open Serial Monitor"),e("li",null,"Set the baud rate is set to 115200, then upload the sketch to the Arduino"),e("li",null,"Serial Monitor will begin displaying a log of what the script is doing"),e("li",null,[t("Once it displays "),e("code",null,"Done!"),t(", disconnect your Apple TV from the Arduino")])],-1),we=d('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>At this step, there are many errors you may see. A list of the most common, with fixes, are as follows:</p><ul><li><code>usb init failed</code>: This means you did not solder the USB host shield correctly. Double-check everything is soldered properly and there are no bridges between pins.</li><li><code>Non Apple DFU found (vendorID: 0, productId: 0</code>: This means the exploit failed. Force reboot the Apple TV, reenter DFU, and try the script again.</li><li><code>heap_feng_shui_req: setup status = 0, data status = 4</code> on loop: This is usually not an error. If it goes on for more than two minutes, force reboot the device and try the process again - otherwise, it should proceed to sending the line <code>2. set global state</code>.</li><li><code>heap_feng_shui_req: setup status = D, data status = 5</code> on loop <em>is</em> an error, but easily fixable - simply reupload the script to the Arduino and it should work. If it still doesn&#39;t, reenter DFU and try the process again.</li></ul></div><p>If checkm8-a5 printed out <code>Done!</code>, your A5 device is now successfully pwned. You may return to whatever guide you were following previously, if any.</p>',2);function be(Ae,ke){const l=r("ExternalLinkIcon"),i=r("Tab"),s=r("Tabs");return u(),c("div",null,[_,e("ul",null,[e("li",null,[t("An "),e("a",m,[t("Arduino Uno"),o(l)])]),e("li",null,[t("A "),e("a",f,[t("MAX3421E USB host shield"),o(l)]),t(", and USB-A to USB-B cable")]),g,y,w]),b,A,k,o(s,{tabs:"",id:"headers"},{default:n(()=>[o(i,{tab:"",name:"With Headers",default:!0},{default:n(()=>[S,v,U]),_:1}),o(i,{tab:"",name:"Without Headers"},{default:n(()=>[D,T,x]),_:1})]),_:1}),I,P,o(s,{tabs:"",id:"git"},{default:n(()=>[o(i,{tab:"",name:"OS X 10.9 to macOS 10.12",default:!0},{default:n(()=>[e("ol",null,[e("li",null,[t("Download the Git installer from "),e("a",B,[t("this link"),o(l)])]),F,M])]),_:1}),o(i,{tab:"",name:"macOS 10.13+"},{default:n(()=>[E]),_:1})]),_:1}),O,e("ol",null,[e("li",null,[t("Download and install the "),e("a",V,[t("Arduino IDE"),o(l)])]),H,R,N,C,G,L]),W,q,o(s,{tabs:"",id:"device"},{default:n(()=>[o(i,{tab:"",name:"iPhone 4s and iPad 2 (non-2012 model)",default:!0},{default:n(()=>[e("ol",null,[Y,e("li",null,[t("Enter DFU using "),e("a",X,[t("this guide"),o(l)])]),j,$,z,J,K,Q])]),_:1}),o(i,{tab:"",name:"iPad 2 (2012), iPad mini 1, iPod touch 5"},{default:n(()=>[e("ol",null,[Z,e("li",null,[t("Enter DFU using "),e("a",ee,[t("this guide"),o(l)])]),te,oe,ne,ie,le])]),_:1}),o(i,{tab:"",name:"iPad 3"},{default:n(()=>[se,e("ol",null,[re,e("li",null,[t("Enter DFU using "),e("a",ae,[t("this guide"),o(l)])]),de,he,ue,ce,pe,_e,me])]),_:1}),o(i,{tab:"",name:"Apple TV 3 (A1427)"},{default:n(()=>[fe,ge,ye]),_:1})]),_:1}),we])}var Ue=h(p,[["render",be],["__file","index.html.vue"]]);export{Ue as default};
