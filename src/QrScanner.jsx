import { useEffect, useState } from 'react'
import React from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
export default function QrScanner() {

    const [scanResult,setScanResult] = useState (null) ; 
    useEffect (() => {
        
        const scanner = new Html5QrcodeScanner ('reader', {
            qrbox : {
                width : 250 , 
                height : 250 ,
            },
            fps : 5 ,
        });
        scanner.render(success,error) ;
        function success(result) {
            scanner.clear();
            setScanResult(result);
        }
        function error(err) {
            console.log(err);
        }

    },[]);

  return (<>
    {scanResult ? <div>{scanResult}</div> : <div id='reader'></div>
         
        
        }
    </>
  )
}
