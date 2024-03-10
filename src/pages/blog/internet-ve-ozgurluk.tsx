import NewsList from "@/components/news-list";
import NewsParagraph from "@/components/news-paragraph";
import NewsLayout from "@/components/news_layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";


export default function Page(props: {

}) {
    return(
        <>
            <Head>
                <meta
                    property="image"
                    content={`https://i.redd.it/d504ls491fpb1.jpg`}
                />
            </Head>
            <NewsLayout
                author="egely"
                date="3/10/2024 1:56 PM UTC+3"
                title="İnternet ve Özgürlük"
            >
                <NewsParagraph
                    text={`Günümüz çağında internet, demokratik normları etkileyen (sivil medya, hükümet şeffaflığı gibi) bir değer olmuştur. Peki, internet ve onun platformları insanlık için iyi bir şey mi olmuştur?`}
                />  

                <NewsParagraph
                    text={`Hem evet hem hayır. İnternet toplum için iyi bir şeydir. Medyanın adem-i merkeziyetçi bir yöne doğru gitmesini sağlamıştır. Mevcutta bulunan medyaya güzel bir alternatif olmuştur. Sıradan insanların fikirlerinin önemsenmesini sağlamıştır.`}
                />

                <span className="news-text font-bold text-7xl mt-10 w-3/4">{`Ama her iyi bir şeyin yanetkisi vardır.`}</span>
                <NewsParagraph
                    text={`İnternet her ne kadar uzaktan dünya demokrasisine iyi gözükse de, insanları bir küre içine sıkıştırmıştır.
                    İnternet çağının başlarında her ne kadar demokrasiye katkı sağlamış olsa da, günümüzde İnternet yine bu büyük adam medyaları tarafından yönetilir.
                    Yanlış bilgi eskisinden de daha kolay yayılır. İnsanları eskisine göre daha radikalize edebilir ve yanlış yollara sürükleyebilir. Özellikle bu son dediğim daha çok üçüncü dünya ülkelerinde görülür. 
                    `}
                />

                <NewsParagraph
                    text={`Büyük sosyal medya platformları, insanların verilerini toplar, onları harmanlarlar. Ondan sonra hükümetlere bir grubu seçimde yönetmek için satabilirler.
                    `}
                />

                <span className="news-text font-bold text-7xl mt-10 w-3/4">{`Amaan benim verimi kim umursar ki 🫠`}</span>

                <NewsParagraph
                    text={`Evet, umursanırlar; sizin kişisel verileriniz, beğendiğiniz gönderiler, yorumlar; hepsi sizin kişiliğinizin bir yansımasıdır. Çıplak gözle bir insanın bu verilerine baktığınız zaman bile kime oy vereceğini dahi anlarsınız. Hatta Cambridge Analytica diye bir skandal bile vardır.`}
                />

                <div className="flex flex-col news-img mt-8">
                    <img
                        src="https://images.inc.com/uploaded_files/image/1920x1080/getty_935015144_351238.jpg"
                        className="mt-4 flex flex-col items-center"
                    />
                    <Link href={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inc.com%2Falyssa-satara%2Fif-you-dont-fully-understand-cambridge-analytica-scandal-read-this-simplified-version.html&psig=AOvVaw1InmfpBieNGYyk3X775OO6&ust=1710156336218000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC1iPnK6YQDFQAAAAAdAAAAABAE"} className="news-author self-center mt-2">{`Source: Inc. Magazine`}</Link>
                </div>

                <span className="news-text font-bold text-7xl mt-10 w-3/4">{`Kısaca Cambridge Analytica`}</span>
                
                <NewsParagraph
                    text={`Sizin verilerini satın alıp o verileri sizi seçimde manipüle etmek için kullanan Britanya merkezli bir şirkettir. Muhafazakar Parti'ye yakınlıkları ile bilinir.
                    Geçmişte Avustralya, Hindistan, Kenya, Malta, Birleşik Krallık, ABD (2 kere) gibi ülkelerin seçimlerine karışmışlardır.`}
                />

                <NewsParagraph
                    text={`Sonuç olarak, bir şeyin demokrasiye katkısı olup olmadığı tamamen topluma bağlıdır, Toplum eğer bilinçliyse, doğru şeyleri savunur ve demokratik olur. Değilse olmaz. Yine de İnternet çağımızın en güzel teknolojik gelişimlerinden biridir. İnterneti seviyoruz 💗`}
                />

            </NewsLayout>  
    </>
    )
}