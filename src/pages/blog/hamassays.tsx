import NewsLayout from "@/components/news_layout";
import React from "react";


export default function Page(){
    return(
        <>
            <NewsLayout>
                <span className="font-bold text-2xl lg:text-3xl mb-4">Hamas says it frees two hostages, a U.S. mother and daughter</span>  
                <span className="text-opacity-80 font-bold text-sm mb-4">by egely1337</span>
                <img src="https://image.cnbcfm.com/api/v1/image/107320559-1697786760455-gettyimages-1734345770-AFP_33YN3FJ.jpeg?v=1697805974&w=929&h=523&vtcrop=y" className="rounded-md mb-8 mt-8 w-full lg:w-3/5"/>
                
                <p className="mb-4">
                    {`GAZA/JERUSALEM, Oct 20 (Reuters) - The Islamist group Hamas said on Friday it had released two U.S. hostages - a mother and daughter - for what it called "humanitarian reasons" following Qatari mediation efforts.`}
                </p>
                <p>
                    {`Hamas armed wing spokesman Abu Ubaida issued a statement announcing the release, the first since gunmen from the Islamist militant group burst into Israel on Oct. 7, killing 1,400 people, mainly civilians, and taking around 200 hostages.`}
                </p>
                <p className="mt-4">
                    {`Israel's Channel 13 News said Israel had confirmed the release of two hostages but gave no further details.`}
                </p>
                <p className="mt-4">
                    {`Israel levelled a northern Gaza district earlier on Friday after giving families a half-hour warning to escape and hit an Orthodox Christian church where others had been sheltering.`}
                </p>

                <p className="mt-4">
                    {`Israel has vowed to wipe out Hamas, which rules Gaza, relentlessly pounding the strip with air strikes, putting the enclave's 2.3 million people under a total siege and banning shipments of food, fuel and medical supplies.`}
                </p>

                <img src="https://static.jewishnews.co.uk/jewishnews/uploads/2023/06/2R5GDMK.jpg" className="rounded-md mb-8 mt-8 w-full lg:w-3/5"/>

                <p className="mt-4">
                    {`The secretary-general of the United Nations visited the crossing between the besieged Gaza Strip and Egypt, and said humanitarian aid must be allowed across as soon as possible.`}
                </p>

                <p className="mt-4">
                    {`At least 4,137 Palestinians have been killed, including hundreds of children, and 13,000 wounded in Gaza, the Palestinian health ministry said.`}
                </p>

                <p className="mt-4">
                    {`The U.N. says more than a million have been made homeless.`}
                </p>

                <p className="mt-4">
                    {`Israeli Defence Minister Yoav Gallant said on Friday that achieving Israel's objectives would not be quick or easy.`}
                </p>

                <span className="text-opacity-80 mt-8">{`Edited on: 10/20/2023 8:51 PM`}</span>
            </NewsLayout>
        </>
    )
}