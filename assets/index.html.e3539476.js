import{_ as e,o as i,c as o,e as a}from"./app.76e30526.js";const s={},l=a('<p>Se si desidera rimuovere palera1n, \xE8 possibile utilizzare i seguenti comandi su un PC/Mac mentre il dispositivo \xE8 connesso in DFU. Per rimuovere il jailbreak, <strong>non devi ripristinare</strong>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se sei su Linux, dovrai prima fare un altro passaggio. Apri un terminale ed esegui questi comandi:</p><p><code>sudo systemctl stop usbmuxd</code></p><p><code>sudo usbmuxd -f -p</code></p><p>Poi, apri un secondo terminale ed esegui i seguenti passaggi con l&#39;altra finestra del terminale.</p></div><ol><li>Clona la repo con <code>git clone -b legacy --recursive --depth=1 --shallow-submodules https://github.com/palera1n/palera1n &amp;&amp; cd palera1n</code><ul><li>Se hai gi\xE0 clonato la repo, esegui <code>cd palera1n</code></li></ul></li><li>Esegui <code>./palera1n.sh --restore-rootfs &lt;la tua versione di iOS&gt; --tweaks</code><ul><li>Se stai usando Linux, aggiungi <code>sudo</code> all&#39;inizio del prossimo comando</li><li>Se stai usando palera1n semi-tethered, aggiungi la flag <code>--semi-tethered</code> alla fine del comando</li><li>Se stai riscontrando un problema, aggiungi <code>--debug</code> alla fine e usa questi log per eseguire un analisi del problema</li></ul></li></ol><p>Il dispositivo dovrebbe avviarsi su iOS, ed \xE8 possibile utilizzare il telefono normalmente.</p>',4),n=[l];function r(t,d){return i(),o("div",null,n)}var u=e(s,[["render",r],["__file","index.html.vue"]]);export{u as default};
