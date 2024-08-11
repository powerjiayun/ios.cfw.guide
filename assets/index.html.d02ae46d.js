import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,r as l,o as d,c as u,a as e,b as i,d as o,w as t,e as n}from"./app.76e30526.js";const p={},h=n('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>I dispositivi A7 probabilmente falliranno nell&#39;eseguire il jailbreak con checkra1n su Linux, di conseguenza, dovrai usare una versione di checkra1n pi\xF9 vecchia e scollegare e ricollegare rapidamente il tuo dispositivo una volta che vedrai l&#39;avviso <code>Right Before Trigger</code></p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Questa \xE8 una pagina guida altamente sperimentale, possono essere presenti cose non direttamente menzionate che devono essere eseguite per seguire questa guida. Di conseguenza, si consiglia vivamente di usare un altro tipo di computer se possibile.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Devi aver abilitato la modalit\xE0 sviluppatore sul tuo dispositivo ChromeOS per seguire questa guida</p></div><h2 id="download-chromeos" tabindex="-1"><a class="header-anchor" href="#download-chromeos" aria-hidden="true">#</a> Download (ChromeOS)</h2>',6),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},v={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},_={href:"https://checkra.in/releases/0.10.1-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},g=n('<p><img src="'+r+'" alt="Uno screenshot dell&#39;applicazione checkra1n"></p><h2 id="consentire-l-esecuzione-di-checkra1n" tabindex="-1"><a class="header-anchor" href="#consentire-l-esecuzione-di-checkra1n" aria-hidden="true">#</a> Consentire l&#39;esecuzione di checkra1n</h2><ol><li>Sposta il binary di checkra1n che viene scaricato su <code>/usr/local/bin</code><ul><li>Ci\xF2 pu\xF2 essere fatto facendo quanto segue: <ul><li>premi <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>esegui <code>shell</code></li><li>esegui <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Esegui il seguente comando nel terminale: <code>sudo mount -o remount,exec /tmp</code><ul><li>Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS</li></ul></li><li>Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, \xE8 necessario collegare il dispositivo e entrare in modalit\xE0 di recupero manualmente.</li></ol><h2 id="installare-checkra1n" tabindex="-1"><a class="header-anchor" href="#installare-checkra1n" aria-hidden="true">#</a> Installare checkra1n</h2>',4),b=n("<li>Esegui il file binary di <code>checkra1n</code> nel terminale usando <code>TERM=linux sudo checkra1n</code><ul><li>Potrebbe essere necessario eseguire <code>sudo chmod a+x /usr/local/bin/checkra1n</code> se il file binary non viene eseguito</li><li>Se sei su un dispositivo A11, dovrai andare su <code>Options</code> e poi abilitare l&#39;opzione <code>Skip A11 BPR Check</code></li><li>Se sei su iOS 14.6 o successivo, dovrai andare su <code>Options</code> e abilitare l&#39;opzione <code>Allow Untested Versions</code></li><li>Se sei su un dispositivo A8X o A9X con iOS da 14.4 a 14.4.2, dovrai andare su <code>Options</code> e abilitare l&#39;opzione <code>Allow Untested Versions</code></li></ul></li><li>Clicca <code>Start</code> e segui le istruzioni a schermo</li>",2),f=e("code",null,"Start",-1),k=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),z=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),S=e("p",null,"Il tuo dispositivo iOS dovrebbe adesso riavviarsi.",-1),C=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Anche se \xE8 possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:"),e("ul",null,[e("li",null,"Le persone tendono generalmente ad avere pi\xF9 stabilit\xE0 utilizzando Odysseyra1n invece di Cydia"),e("li",null,"Alcune funzionalit\xE0 facili da usare (come shshd, che salva automaticamente i blobs mentre si \xE8 jailbroken) non sono disponibili"),e("li",null,"Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia")])],-1),w=e("h2",{id:"lo-script-di-odysseyra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lo-script-di-odysseyra1n","aria-hidden":"true"},"#"),i(" Lo script di Odysseyra1n")],-1),A=e("li",null,"Apri questa pagina (ios.cfw.guide/installing-odysseyra1n-chromeos) sul tuo dispositivo digitando questo URL su Safari",-1),y={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"Ottieni scorciatoia",-1),x=e("ul",null,[e("li",null,"Se necessario, scarica l'app ComandiRapidi.")],-1),I=e("li",null,[i("Quando richiesto, scegli "),e("code",null,"Apri")],-1),R=e("li",null,[i("Se necessario, premi l'icona "),e("code",null,"Procursus Bootstraper"),i(" e clicca sull'icona Esegui.")],-1),q=e("li",null,"Dai OK a tutti gli avvisi che vengono visualizzati",-1),U=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[i("Se vieni avvisato circa un Comando Rapido non attendibile, esegui un altro Comando Rapido, quindi apri "),e("code",null,"Impostazioni"),i(", vai su "),e("code",null,"Comandi Rapidi"),i(", e attiva "),e("code",null,"Consenti Comandi Rapidi non attendibili")])],-1);function D(N,B){const a=l("ExternalLinkIcon"),s=l("router-link");return d(),u("div",null,[h,e("ul",null,[e("li",null,[i("L'ultima versione di "),e("a",m,[i("checkra1n"),o(a)]),e("ul",null,[e("li",null,[i("Se sei su un dispositivo A8X o A9X, dovresti utilizzare la versione 0.12.2 di "),e("a",v,[i("checkra1n"),o(a)])]),e("li",null,[i("Se sei su un dispositivo A7, dovresti utilizzare la versione 0.10.1 di "),e("a",_,[i("checkra1n"),o(a)])])])])]),g,e("ol",null,[b,e("li",null,[i("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in "),o(s,{to:"/faq/#what-is-dfu-mode"},{default:t(()=>[i("modalit\xE0 DFU")]),_:1}),i(", clicca "),f,i(" per iniziare "),k]),z]),S,C,w,e("ol",null,[A,e("li",null,[i("Clicca su "),e("a",y,[i("questo hyperlink"),o(a)]),i(" sul tuo dispositivo e premi "),O,x]),I,R,q]),U,e("p",null,[i("Adesso dovresti essere jailbroken con Sileo installato nella home screen. \xC8 possibile utilizzare Sileo per installare "),o(s,{to:"/faq/#what-are-tweaks"},{default:t(()=>[i("tweaks")]),_:1}),i(", temi, pacchtti e altro ancora.")])])}var P=c(p,[["render",D],["__file","index.html.vue"]]);export{P as default};
