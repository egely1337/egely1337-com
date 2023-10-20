import React from "react";

import NewsLayout from "@/components/news_layout";

export default function Blog(props: {

}) {
    return(
        <>
            <NewsLayout>
                <span className="text-gray-300 font-bold text-2xl lg:text-3xl mb-4">2023 İsrail-Hamas Savaşı Neden Çıktı?</span>  
                <span className="text-gray-300 text-opacity-80 font-bold text-sm mb-4">by egely1337</span>
                <img src="https://image.hurimg.com/i/hurriyet/75/750x422/6523bc5d4e3fe0129c31bc13.jpg" className="rounded-md mb-8 mt-8 w-full lg:w-2/5"/>
                
                <p className="text-gray-300">
                    {`İsrail-Filistin çatışmasının bir parçası olarak Gazze Şeridi’nde devam ediyor. Bu çatışmanın nedenleri karmaşık ve tarihsel bir arka plana sahip. Özetle:`}
                </p>
                <div className="lg:w-3/4 w-full flex flex-col gap-4 font-semibold p-4 text-gray-300 mb-8">
                    <p>
                        {`1. Gazze Şeridi’nin Kontrolü: 2005’te İsrail, Gazze Şeridi’nden çekildi. Ancak 2006 seçimlerinde Hamas, Gazze Şeridi’nin kontrolünü ele geçirdi. Bu durum, İsrail ile Hamas arasındaki gerilimi artırdı.`}
                    </p>
                    <p>
                        {`2. Yerleşim Sorunu: İsrail ile Filistinliler arasında anlaşmazlık nedeni olan birçok konu var. Bunlar arasında Filistinli mültecilere ne olacağı, işgal altındaki Batı Şeria’da Yahudi yerleşimlerinin kalıp kalmayacağı, Kudüs’ün paylaşılması ve İsrail yanında bir Filistin devletinin kurulup kurulmayacağı gibi sorunlar bulunuyor`}
                    </p>
                    <p>
                        {`3. Mescid-i Aksa Olayları: İsrail polisinin Ramazan ayında Mescid-i Aksa’ya baskın düzenlemesi ve Doğu Kudüs’teki Filistinli ailelerin evlerinden zorla çıkarılma planı, Filistinliler arasında büyük tepki yarattı`}
                    </p>
                </div>

                <span className="text-gray-300">{`Bu çatışma, tarih boyunca birçok faktörün birleşimiyle şekillendi ve hala devam ediyor. Olaylar geliştikçe bilgiler de değişebilir, bu nedenle güncel ve güvenilir kaynaklara dikkat etmek önemlidir.`}</span>
                <span className="text-gray-300 text-opacity-80 mt-8">{`Edited on: 10/20/2023 8:51 PM`}</span>
            </NewsLayout>
        </>
    )
}