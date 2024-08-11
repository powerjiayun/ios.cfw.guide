import{_ as r}from"./Odysseyn1x.f106730e.js";import{_ as u,r as l,o as c,c as d,a as e,b as o,d as t,w as s,e as a}from"./app.76e30526.js";const h={},y=a('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This guide does not currently account for the Apple TV 4K (1st Generation) at this time.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div>',3),p=e("p",null,"Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking the Apple TV HD and Apple TV 4K (1st Generation) on firmwares 12.0 to 14.7.",-1),m=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),f=e("li",null,[o("A 256MB or greater USB Drive "),e("ul",null,[e("li",null,"If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive")])],-1),_={href:"https://github.com/raspberryenvoie/odysseyn1x/releases",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[o('For 64-bit computers, download the "AMD64" version '),e("ul",null,[e("li",null,`It doesn't matter if you have an AMD processor or not, "AMD64" is just the name of the architecture`)])],-1),g=e("li",null,'For 32-bit computers, download the "i686" version',-1),w=e("li",null,"An Apple TV Siri remote (any generation)",-1),k={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},x=a('<p><img src="'+r+'" alt="A screenshot of the Odysseyn1x menu"></p><h2 id="installing-ventoy" tabindex="-1"><a class="header-anchor" href="#installing-ventoy" aria-hidden="true">#</a> Installing Ventoy</h2><ol><li>Download and extract the contents of the <code>Ventoy.zip</code> file</li><li>Insert your USB drive if you have not already done so, and open the <code>Ventoy2Disk.exe</code> file</li><li>Select the USB drive you would like to boot Odysseyn1x from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Install</code> and confirm that you are ok erasing the USB drive <ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once it has installed, copy the Odysseyn1x iso file that you downloaded onto the USB drive</li></ol><h2 id="booting-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#booting-odysseyn1x" aria-hidden="true">#</a> Booting Odysseyn1x</h2><ol><li>Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li><li>Press enter once you see the Ventoy screen to boot into Odysseyn1x</li></ol><h2 id="running-checkra1n" tabindex="-1"><a class="header-anchor" href="#running-checkra1n" aria-hidden="true">#</a> Running checkra1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',7),S=e("li",null,[o("Once you have loaded odysseyn1x, select "),e("code",null,"checkra1n"),e("ul",null,[e("li",null,[o("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),o(", then enable the "),e("code",null,"Allow Untested Versions")])])],-1),B=e("li",null,[o("Click "),e("code",null,"Start"),o(" and follow all onscreen prompts")],-1),A=e("code",null,"Start",-1),D=e("ul",null,[e("li",null,"Follow the instructions until your device reboots to a black screen")],-1),U=e("li",null,"Once your device boots, you can quit checkra1n, but do not shut down your computer",-1),V=e("p",null,":::",-1),I=e("p",null,"You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.",-1);function O(C,N){const i=l("router-link"),n=l("ExternalLinkIcon");return c(),d("div",null,[y,e("p",null,[o("Odysseyra1n is a "),t(i,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:s(()=>[o("semi-tethered jailbreak")]),_:1}),o(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.")]),p,m,e("ul",null,[f,e("li",null,[o("The latest version of "),e("a",_,[o("Odysseyn1x"),t(n)]),e("ul",null,[e("li",null,[o("If you are on an A7 device, you should instead get the v2.12-checkra1n-0.10.1 release of "),e("a",b,[o("Odysseyn1x"),t(n)])]),v,g])]),w,e("li",null,[e("a",k,[o("Ventoy"),t(n)])])]),x,e("ol",null,[S,B,e("li",null,[o("You will now be presented with instructions in how to reboot your device into "),t(i,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[o("DFU mode")]),_:1}),o(", click "),A,o(" to begin "),D]),U]),V,I])}var R=u(h,[["render",O],["__file","index.html.vue"]]);export{R as default};
