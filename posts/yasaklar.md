---
title: 'yasaklar'
date: '2024-10-12'
author: 'egely'
---

*"Biz yola çıkarken 3Y ile mücadele dedik; yolsuzluk, yoksulluk ve yasaklar. Yolsuzluğa 11 yıl boyunca asla müsamaha göstermedik, göstermeyiz"*

-Recep Tayyip Erdoğan, Türkiye'nin 12. Cumhurbaşkanı-


![](https://billtrack50.s3-us-west-2.amazonaws.com/cdn/wp-content/uploads/2017/02/internet-censorship-world-map.png)

günler geçiyor geçmesine, türkiye'de bir platforma daha y(asak) koyuluyor. kaldı ki hiçbirimiz aktif kullandığımız bir internet platformunun engellenmesini istemeyiz değil mi?  

evet dostum, bu blog postu senin için. bu postta otoriter bir devletin internet yasaklarının nasıl üstesinden gelirsin onu anlatacağım.

türkiye'deki mevcut yasakları aşmanın bir sürü yolu var, onları sırasıyla saymak istersek:
+ vpn
+ dns over tls
+ dpi (deep packet inspection) bypass

gibi yöntemler örnek gösterilebilir, bu blog postunda ise bu yöntemleri bilale anlatır gibiden en zora doğru sıralayacağım.


# 1. Cloudflare 1.1.1.1
![](https://one.one.one.one/media/social-share.png)

1.1.1.1 bir halka açık dns çözümleyicisidir. bir site domaini yazdığınız zaman (instagram.com gibi) bu sitenin ip adresini dns sunucusundan alırsınız, cloudflare da burada devreye girer. sitenin ip adresini kendi ispnizden almak yerine cloduflaredan alırsınız, böylelikle isp yasaklı internet sitesine girdiğinizi anlayıp bağlantınızı kapatamaz.

## Nasıl kullanılır?
öncelikle [_bu adrese_](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/download-warp/) tıklayarak cloudflare'in sitesine gidin. ardından "**Windows Release Builds**" butonuna tıklayarak microsoft store'dan warp'ı indirin ve çalıştırın.
c
rdından sistem tepsisine gelin ve cloudflare ikonuna tıklayın. o kısımdan da sunucuya bağlanın ve özgürlüğünüze sahip olun.
# 2. GoodbyeDPI
![](https://opengraph.githubassets.com/7cc05cd5a602a88bfa370f0fc55974e46b856e56246ee2b67a25f1fa220c8d54/ValdikSS/GoodbyeDPI)
goodbyedpi yazılımı, otoriter internet servis sağlayıcınızın belirli web sitelerine erişmek isteyen derin paket inceleme (deep packet inspection) sistemlerini atlatmak için kullanılan bir yazılımdır.

## Nasıl kullanılır?
öncelikle <ins><span style="color:blue"></ins>[_bu adrese_]</span>(https://github.com/ValdikSS/GoodbyeDPI/releases) gidin ve zip arşivinden çıkartıp sisteminize göre x86 ve x86_64 klasöründeki goodbyedpi.exe'yi yönetici izni vererek çalıştırın. bu adımları tamamladığınızda bir konsol ekranı geldiyse işlemleri başarıyla gerçekleştirmişsiniz demektir.