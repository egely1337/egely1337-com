import NewsParagraph from "@/components/news-paragraph";
import NewsLayout from "@/components/news_layout";
import React from "react";


export default function Page(props: {

}) {
    return(
        <NewsLayout
            title="İfade Özgürlüğü Nedir?"
            author="egely1337"
            date="12/7/2023 UTC+3"
        >
            <NewsParagraph
                text="
                    Gelişmiş ve arşa çıkmış ülkelerde ifade özgürlüğü büyük bir yer kaplar.
                    Gelişmiş ülkeler geldiği bu noktaya ifade özgürlüğü ve kendi haklarını savunarak gelmiştir.
                "
            />

            <img src="https://i.redd.it/d504ls491fpb1.jpg" className="mt-4 news-img"/>

            <NewsParagraph
                text="
                Bu ülkelerde devlet görevlileri kutsallaştırılmaz. Onlar bir ikon değildir, aksine bir görevlidir. Protesto kültürü ve özgürlüğü vardır.
                "
            />
            <NewsParagraph
                text="
                    Örnek olarak eski Amerika Birleşik Devletleri başkanı Donald J. Trump'tan örnek verebiliriz.
                    Kendisinin ne maskotunun yapılmadığı kaldı, ne de yemediği küfürler kaldı. Haklı mıdır haksız mıdır tartışılabilir, ama konumuz değil.
                    Ayrıca şunu eklemek gerekir, bu yapılanların hepsinin devlet güvencesi vardır, evet Donald Trump'ın yönettiği devletin güvencesi vardır.
                    Çünkü Trump, bir devlet değildir. Sadece yönetmekle yükümlü olan basit bir devlet memurudur. Devlet kuralları ve devlet yönetimi ne istiyorsa, onu uygulamak zorundadır.
                "
            />

            <NewsParagraph
                text="
                    Daha fazla örnek vermek gerekirse;
                "
            />

            <img 
                src="https://www.middleeasteye.net/sites/default/files/styles/max_2600x2600/public/images-story/Tunisia%20Sfax_18Feb.jpg?itok=HMHp3mNF" 
                className="mt-4 news-img"
            />

            <div className="flex flex-col news-img">
                <img
                    src="https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-28T154314Z_161597118_RC2R14A19HQZ_RTRMADP_3_ISRAEL-PALESTINIANS-ITALY-PROTEST-1698561953.jpg"
                    className="mt-4 flex flex-col items-center"
                />
                <span className="news-author self-center mt-2">{`Devletleri İsrail'i desteklemesi bir yana, Filistin için protesto düzenleyebiliyorlar.`}</span>
            </div>

            <NewsParagraph
                text="Fikir ve konuşma bir suç değildir, Suç olmamalıdır."
            />
        </NewsLayout>
    )
}