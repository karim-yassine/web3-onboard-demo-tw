"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9234],{99234:(e,r,n)=>{n.r(r),n.d(r,{getED25519Key:()=>s});var t=n(45429),f=n.n(t),a=n(48834).Buffer;const o=f().lowlevel;function s(e){let r;r="string"==typeof e?a.from(e,"hex"):e;const n=new Uint8Array(64),t=[o.gf(),o.gf(),o.gf(),o.gf()],f=new Uint8Array([...new Uint8Array(r),...new Uint8Array(32)]),s=new Uint8Array(32);o.crypto_hash(n,f,32),n[0]&=248,n[31]&=127,n[31]|=64,o.scalarbase(t,n),o.pack(s,t);for(let e=0;e<32;e+=1)f[e+32]=s[e];return{sk:a.from(f),pk:a.from(s)}}}}]);