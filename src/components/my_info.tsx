import React from "react";
import Image from "next/image";
import avatar from '../../public/egely-avatar.jpg';

export default function MyInfo() {
    return(
        <div className="header flex flex-col">
            <div className="flex items-center gap-4">
                <Image
                    src={avatar}
                    width={82}
                    height={82}
                    alt="egely-avatar"
                    blurDataURL="LOE{tY.m%#.S_2S~ozxv9uMxI9R5"
                    placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCACdAJ0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC5SGlpDQQNNNNPNMNADDTTTzTDSGNooNFAwpwptKKBjhS0gpaAFooooAQ00040hoAYaYaeaaaljGGkpTSVIzTpDTqQ1qZDDTTTzTTQBGaYakNRmkMaaSlNJSKFpRTacKAHClFNFOFMBaKKKAENIadTTQMYaaaeaYalgMNJTjSVIzVpCKdikNamQw0w1IaYaBkRphqRqjakMYabSmm1JQtOFMpwoAeKcKYKcKYDqKKKYBTTTqaaQDTTDTzTDSGNNJSmkpDNekNOpDWhiMNRtUhpjUDImqNqkao2qWUiM000rUw1LKQtOFMzThRcY8U8UwU4UxDhS0gpaYgpppaQ0ANNNNONMNIoaaSlNJSGbFIaWkNaGAw0xqeajagZG1RNUrVE1Sy0RtUZp7VGahloM08Go804GpTBkopwqMU8VoiR4paaKWmIWkNFIaAGmmmnGmGkUhppKU02kUbNIaM0hNaHONNManE0xjQURtUTVI1RNUspEbVGae1RmokWgpwplOFShskFPFRing1aIY8UtNBpc1QhaQ0ZppNAAaYTSk0wmgpCE0maCabmpKNnNITTc0hNaHOBNMY0pNMJoGNY1E1PY1ExpFIY1RmntTDUNFoSnCmU4Ukhkgp4NRinA1RLJAaM03NGaYh2aQmkzTSaAAmmE0pNMJoKQhNJmmk03NSUjazSE0zNITWhzik00mgmmE0DEY1GxpxNRk0DQ00w04000rFXEpRSUopWHceKcDUYpwNMkfmjNNzRmgB2aaTSE00mgAJpjGhjUTNUspAzU3NNJpM07F3NrNJmm5pM1RzjiaYTQTTSaAAmmE0pNMJpjENNNKabQO4UtJS0WC4opc02lpBcdmjNNzSE0CuKTTSaQmmM1ILgzVCzZNKxplCRSYZooopga+aTNFJQZgTTSaU000wENNNKaaaBiGkpTSUwCikpaAFopKKQC00mlppoEITUbGnmo2pMEMbrSUHrRQaBRRRQB//Z"
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-mono text-2xl font-bold">egely</span>
                    <span className="font-mono mt-1">{'tarih' + ': ' + `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getFullYear()}`}</span>
                    <span className="font-mono">{'konu: biyografi'}</span>
                </div>
            </div>
        </div>
    )
}