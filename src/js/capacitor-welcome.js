import { SplashScreen } from "@capacitor/splash-screen";
import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";

window.customElements.define(
    "capacitor-welcome",
    class extends HTMLElement {
        constructor() {
            super();
            SplashScreen.hide();
            const root = this.attachShadow({ mode: "open" });
            root.innerHTML = `
              <main>
                <h1>Capacitor App</h1>
                <button id="scanButton">Scan</button>
                <button id="closeButton" style="visibility: visible">Close</button>
              </main>
            `;
            this.shadowRoot.getElementById("scanButton").onclick = () => {
                this.startScan();
            };
            this.shadowRoot.getElementById("closeButton").onclick = () => {
                this.stopScan();
            };
        }

        async startScan() {
            document.querySelector("body")?.classList.add("barcode-scanner-active");
            await BarcodeScanner.addListener("barcodesScanned", async (result) => {
                console.log(result);
            });

            await BarcodeScanner.startScan({ lensFacing: "BACK", formats: ["QR_CODE", "AZTEC", "DATA_MATRIX", "PDF_417"] });
        }

        async stopScan() {
            document.querySelector("body")?.classList.remove("barcode-scanner-active");
            await BarcodeScanner.stopScan();
        }
    }
);
