import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,r as n,o as d,c as u,a as e,b as i,d as o,w as s,e as t}from"./app.76e30526.js";const p={},h=e("h2",{id:"download-macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-macos","aria-hidden":"true"},"#"),i(" Download (macOS)")],-1),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},g=t('<p><img src="'+r+'" alt="Uno screenshot dell&#39;applicazione checkra1n"></p><h2 id="installare-checkra1n" tabindex="-1"><a class="header-anchor" href="#installare-checkra1n" aria-hidden="true">#</a> Installare checkra1n</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se stai utilizzando un Mac Apple Silicon e un dispositivo A9X, ti verr\xE0 chiesto di scollegare e ricollegare il dispositivo durante il processo e sar\xE0 necessario farlo.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div>',4),b=e("li",null,[i("Apri il file "),e("code",null,"pongoOS.zip"),i(", seleziona "),e("code",null,"PongoConsolidated.bin"),i(" ed estrailo. "),e("ul",null,[e("li",null,"Prendi nota di dove lo estrai")])],-1),f=e("li",null,[i("Apri il terminale ed avvia checkra1n in modalit\xE0 CLI utilizzando il comando "),e("code",null,"/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [percorso di PongoConsolidated.bin]")],-1),v=e("li",null,"Collega il tuo dispositivo iOS al computer",-1),k=e("code",null,"Start",-1),y=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),z=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),S=t('<p>Il tuo dispositivo iOS dovrebbe adesso riavviarsi.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Anche se \xE8 possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:</p><ul><li>Le persone tendono generalmente ad avere pi\xF9 stabilit\xE0 utilizzando Odysseyra1n invece di Cydia</li><li>Alcune funzionalit\xE0 facili da usare (come shshd, che salva automaticamente i blobs mentre si \xE8 jailbroken) non sono disponibili</li><li>Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia</li></ul></div><p>Per installare Odysseyra1n, <u>non</u> aprire l&#39;app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.</p><h2 id="lo-script-di-odysseyra1n" tabindex="-1"><a class="header-anchor" href="#lo-script-di-odysseyra1n" aria-hidden="true">#</a> Lo script di Odysseyra1n</h2>',4),w={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"TIP",-1),O={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},x=e("ol",null,[e("li",null,"Apri l'app terminale sul tuo computer"),e("li",null,"Assicurati che il tuo computer sia autorizzato dal tuo dispositivo"),e("li",null,[i('Installa "homebrew" incollando ed eseguendo il seguente comando: '),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')]),e("li",null,[i('Installa "iproxy" incollando ed eseguendo il seguente comando: '),e("code",null,"brew install libusbmuxd")]),e("li",null,[i("Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: "),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"')])],-1),I=t('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function A(C,L){const a=n("ExternalLinkIcon"),l=n("router-link");return d(),u("div",null,[h,e("ul",null,[e("li",null,[i("L'ultima versione di "),e("a",m,[i("checkra1n"),o(a)])]),e("li",null,[i("La versione personalizzata di "),e("a",_,[i("pongoOS"),o(a)])])]),g,e("ol",null,[b,f,v,e("li",null,[i("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in "),o(l,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[i("modalit\xE0 DFU")]),_:1}),i(", clicca "),k,i(" per iniziare "),y]),z]),S,e("div",w,[q,e("p",null,[i("Se preferisci, invece di eseguire lo script sul tuo computer, puoi eseguire lo script Odysseyra1n utilizzando la "),e("a",O,[i("scorciatoia"),o(a)]),i(" aprendo questa pagina dal tuo dispositivo e poi cliccare il link della scorciatoia.")])]),x,e("p",null,[i("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),o(l,{to:"/faq/#what-are-tweaks"},{default:s(()=>[i("tweaks")]),_:1}),i(", themes, packages and more.")]),I])}var T=c(p,[["render",A],["__file","index.html.vue"]]);export{T as default};
