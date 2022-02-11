<template>
    <div>
        <Dashboard />
        <div class="buttons">
            <input class="uvtbtn" type="button" @click="uvt" @dblclick="uvf" value="Understanding Variants">
            <input class="dvtbtn" type="button" @click="dvt" @dblclick="dvf" value="Delta Variant">
            <input class="ovtbtn" type="button" @click="ovt" @dblclick="ovf" value="Omicron Variant">
        </div>
        <div class="textcontainer">
        <div v-if="value" class="intro">
            <p>
                Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
            </p>
            <h3>How It Spreads</h3>
            <p>
                The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
            </p>
            <p>
                You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
            </p>
        </div>
        <div v-if="value1" class="understandingvariants">
            <p class="firstpara">
                The virus that causes COVID-19 is constantly changing, and new variants of the virus are expected to occur. Sometimes new variants emerge and disappear. Other times, new variants persist. Numerous variants of the virus that causes COVID-19 are being tracked in the United States and globally during this pandemic.
            </p>
            <div class="variant">
            <h3>How Variants Work</h3>
            <p>
                If you think about a virus like a tree growing and branching out; each branch on the tree is slightly different than the others. By comparing the branches, scientists can label them according to the differences. These small differences, or variants, have been studied and identified since the beginning of the pandemic.
                Some variations allow the virus to spread more easily or make it resistant to treatments or vaccines. Those variants must be monitored more carefully.
            </p>
            </div>
            <h3>How Variants Change</h3>
            <p>
                As the virus spreads, it has new opportunities to change and may become more difficult to stop. These changes can be monitored by comparing differences in physical traits (such as resistance to treatment) or changes in genetic code (mutations) from one variant to another.
            </p>
            <span>Reference: <a href="https://www.cdc.gov/coronavirus/2019-ncov/variants/understanding-variants.html">CDC</a></span>
        </div>
        <div v-if="value2" class="deltav">
            <p>
                Delta is currently the predominant variant of the virus in the United States. Below is a high-level summary of what CDC scientists have recently learned about the Delta variant. More information will be made available when more data are published or released in other formats.
            </p>
            <p>
                On July 27, 2021, CDC released updated guidance on the need for urgently increasing COVID-19 vaccination coverage and a recommendation for everyone in areas of substantial or high transmission to wear a mask in public indoor places, even if they are fully vaccinated. CDC issued this new guidance due to several concerning developments and newly emerging data signals.
            </p>
            <p>
                First, a significant increase in new cases reversed what had been a steady decline since January 2021. In the days leading up to our guidance update, CDC saw a rapid and alarming rise in the COVID-19 case and hospitalization rates around the country.
            </p>
            <p>
                Second, new data began to emerge that the Delta variant was more infectious and was leading to increased transmissibility when compared with other variants, even in some vaccinated individuals. This includes recently published data from CDC and our public health partners, unpublished surveillance data that will be publicly available in the coming weeks, information included in CDC’s updated Science Brief on COVID-19 Vaccines and Vaccination, and ongoing outbreak investigations linked to the Delta variant.
            </p>
            <h2>Infections and Spread</h2>
            <ul>
                <li>
                    <b>The Delta variant is more contagious:</b> The Delta variant is highly contagious, more than 2x as contagious as previous variants.
                </li>
                <li>
                    <b>Some data suggest the Delta variant might cause more severe illness than previous variants in unvaccinated people.</b> In two different studies from Canada and Scotland, patients infected with the Delta variant were more likely to be hospitalized than patients infected with Alpha or the original virus that causes COVID-19. Even so, the vast majority of hospitalization and death caused by COVID-19 are in unvaccinated people.
                </li>
                <li>
                    <b>Unvaccinated people remain the greatest concern:</b> The greatest risk of transmission is among unvaccinated people who are much more likely to get infected, and therefore transmit the virus. Fully vaccinated people get COVID-19 (known as breakthrough infections) less often than unvaccinated people. People infected with the Delta variant, including fully vaccinated people with symptomatic breakthrough infections, can transmit the virus to others. CDC is continuing to assess data on whether fully vaccinated people with asymptomatic breakthrough infections can transmit the virus.
                </li>
                <li>
                    <b>Fully vaccinated people with Delta variant breakthrough infections can spread the virus to others. However, vaccinated people appear to spread the virus for a shorter time:</b> For prior variants, lower amounts of viral genetic material were found in samples taken from fully vaccinated people who had breakthrough infections than from unvaccinated people with COVID-19. For people infected with the Delta variant, similar amounts of viral genetic material have been found among both unvaccinated and fully vaccinated people. However, like prior variants, the amount of viral genetic material may go down faster in fully vaccinated people when compared to unvaccinated people. This means fully vaccinated people will likely spread the virus for less time than unvaccinated people.
                </li>
            </ul>
            <span>Reference: <a href="https://www.cdc.gov/coronavirus/2019-ncov/variants/delta-variant.html">CDC</a></span>
        </div>
        <div v-if="value3" class="omicronv">
            <p>
                On 26 November 2021, WHO designated the variant B.1.1.529 a variant of concern, named Omicron, on the advice of WHO’s Technical Advisory Group on Virus Evolution (TAG-VE).  This decision was based on the evidence presented to the TAG-VE that Omicron has several mutations that may have an impact on how it behaves, for example, on how easily it spreads or the severity of illness it causes. Here is a summary of what is currently known.
            </p>
            <h4>Current knowledge about Omicron</h4>
            <p>
                Researchers in South Africa and around the world are conducting studies to better understand many aspects of Omicron and will continue to share the findings of these studies as they become available.
            </p>
            <p>
                <b>Transmissibility:</b> It is not yet clear whether Omicron is more transmissible (e.g., more easily spread from person to person) compared to other variants, including Delta. The number of people testing positive has risen in areas of South Africa affected by this variant, but epidemiologic studies are underway to understand if it is because of Omicron or other factors.
            </p>
            <p>
                <b>Severity of disease:</b> It is not yet clear whether infection with Omicron causes more severe disease compared to infections with other variants, including Delta.  Preliminary data suggests that there are increasing rates of hospitalization in South Africa, but this may be due to increasing overall numbers of people becoming infected, rather than a result of specific infection with Omicron.  There is currently no information to suggest that symptoms associated with Omicron are different from those from other variants.  Initial reported infections were among university students—younger individuals who tend to have more mild disease—but understanding the level of severity of the Omicron variant will take days to several weeks.  All variants of COVID-19, including the Delta variant that is dominant worldwide, can cause severe disease or death, in particular for the most vulnerable people, and thus prevention is always key. 
            </p>
            <h4>Recommended actions for countries</h4>
            <p>
                As Omicron has been designated a Variant of Concern, there are several actions WHO recommends countries to undertake, including enhancing surveillance and sequencing of cases;  sharing genome sequences on publicly available databases, such as GISAID; reporting initial cases or clusters to WHO; performing field investigations and laboratory assessments to better understand if Omicron has different transmission or disease characteristics, or impacts effectiveness of vaccines, therapeutics, diagnostics or public health and social measures.  More detail in the announcement from 26 November.
            </p>
            <p>
                Countries should continue to implement the effective public health measures to reduce COVID-19 circulation overall, using a risk analysis and science-based approach. They should increase some public health and medical capacities to manage an increase in cases.  WHO is providing countries with support and guidance for both readiness and response.  

                In addition, it is vitally important that inequities in access to COVID-19 vaccines are urgently addressed to ensure that vulnerable groups everywhere, including health workers and older persons, receive their first and second doses, alongside equitable access to treatment and diagnostics. 
            </p>
            <h4>Recommended actions for people</h4>
            <p>
                The most effective steps individuals can take to reduce the spread of the COVID-19 virus is to keep a physical distance of at least 1 metre from others; wear a well-fitting mask; open windows to improve ventilation; avoid poorly ventilated or crowded spaces; keep hands clean; cough or sneeze into a bent elbow or tissue; and get vaccinated when it’s their turn.
            
                WHO will continue to provide updates as more information becomes available, including following meetings of the TAG-VE. In addition, information will be available on WHO’s digital and social media platforms. <br>
            <span>Reference: <a href="https://www.who.int/news/item/28-11-2021-update-on-omicron">WHO</a></span>
            </p>
        </div>
        </div>
    </div>
</template>

<script>

import Dashboard from './Dashboard.vue'
export default {
    name:'Variants',
    data () {
        return {
            value1: false,
            value2: false,
            value3: false,
            value: true
        }
    },
    components: {
        Dashboard
    },
    methods: {
        uvt () {
            this.value = 0;
            this.value2 = 0;
            this.value1 = 1;
            this.value3 = 0;
        },
        uvf () {
            this.value1 = 0;
            this.value = 1;
        },
        dvt () {
            this.value = 0;
            this.value2 = 1;
            this.value1 = 0;
            this.value3 = 0;
        },
        dvf () {
            this.value2 = 0;
            this.value = 1;
        },
        ovt () {
            this.value = 0;
            this.value2 = 0;
            this.value1 = 0;
            this.value3 = 1;
        },
        ovf () {
            this.value3 = 0;
            this.value = 1;
        }
    }
}
</script>

<style scoped>
.buttons {
    width: 250px;
    display: grid;
    background-color: salmon;
    height: 600px;
    float: left;
    /* margin-left: 50px; */
    margin-top: 10px;
    align-items: center;
}
.uvtbtn {
    height: 50px;
    width: 90%;
    font-size: 20px;
    color: white;
    margin-left: 10px;
    border: none;
    background-color: blueviolet;
}
.uvtbtn:hover {
    cursor: pointer;
    background-color: rgb(98, 23, 168);
}
.dvtbtn {
    height: 50px;
    width: 90%;
    font-size: 20px;
    color: white;
    margin-left: 10px;
    border: none;
    background-color: violet;
}
.dvtbtn:hover {
    cursor: pointer;
    background-color: rgb(235, 55, 235);
}
.ovtbtn {
    height: 50px;
    width: 90%;
    font-size: 20px;
    color: white;
    margin-left: 10px;
    border: none;
    background-color: rgb(62, 62, 240);
}
.ovtbtn:hover {
    cursor: pointer;
    background-color: blue;
}
.textcontainer {
    background-color: rgb(222, 224, 121);
    display: flex;
    justify-content: center;
    height: 600px;
    float: center;
    margin-left: 275px;
    /* margin-right: 50px; */
    margin-top: 10px;
    align-items: center;
}
.omicronv {
    margin-left: 5px;
    font-size: 16px;
}
.deltav {
    margin-left: 5px;
    font-size: 18px;
}
.understandingvariants {
    margin-left: 5px;
    font-size: 20px;
}
.intro {
    margin-left: 5px;
    font-size: 25px;
}
ul {
    font-size: 17px;
}
</style>