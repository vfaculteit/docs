import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Button from '../components/Button';
import Image from '../components/Image';

import classes from './index.module.css';

export default function Hello() {
  return (
    <Layout title="Vastgoed Faculteit" style={{ position: 'relative' }}>
      <img alt="" src="/img/homepage/hero-bg.svg" class={classes.heroBg} />

      <div class={`${classes.main} ${classes.container}`}>
        <h1>Uw Financiën - eenvoudig gemaakt</h1>
        <p class={classes.heroText}>
          Consumeer Bewust is een supersnelle en privacygerichte app voor het beheren van uw financiën.
          Het hart van de app is de beproefde en geliefde methode van Envelope Budgetteren.
          <br />
          <strong>U bezit uw gegevens</strong> en kunt ermee doen wat u wilt.
          Met synchronisatie op meerdere apparaten, optionele end-to-end encryptie en nog veel meer.
        </p>
        <div>
          <Button primary to="https://financetracker-beta.vastgoedfaculteit.be/">
            Probeer onze demo.
          </Button>
        </div>
        <div class={classes.heroImage}>
          <Image
            img={require('../../static/img/homepage/actual-main-budget.png')}
            alt="Consumeer Bewust"
          />
        </div>

        <MediumFeature
          title="Maak doordachte financiële beslissingen."
          src="/img/homepage/superpowers.svg"
        >
          Geautomatiseerde financiële tools zijn geweldig, behalve wanneer ze dat niet zijn.
          Wij bieden u een tool die snel te gebruiken is, maar uiteindelijk heeft <strong>u de controle</strong>.
          Wij helpen u te leren in plaats van te zeggen wat u moet doen.
        </MediumFeature>

        <MediumFeature
          flip
          title="Zorgvuldig ontworpen voor snelheid."
          media={
            <video
              loop
              muted="muted"
              autoplay=""
              playsinline=""
              src="/img/homepage/design.mp4"
              style={{ width: '100%' }}
            />
          }
        >
          Een <strong>prachtig ontworpen interface</strong> die nauwkeurig afgestemd is om u zo min mogelijk te hinderen
          en het beheer van uw financiën zo snel mogelijk te maken.
        </MediumFeature>

        <MediumFeature
          title="Unabashedly local-first software."
          src="/img/homepage/local-first.svg"
        >
          <strong>Consumeer Bewust is een lokale app.</strong>
          Uw gegevens worden op de achtergrond gesynchroniseerd zodat al uw apparaten toegang hebben,
          maar de app werkt ongeacht uw netwerkverbinding.
          Dit stelt ons ook in staat om{' '}
          <Link to="/docs/getting-started/sync#end-to-end-encryption">
            end-to-end versleuteling
          </Link>{' '}
          te gebruiken om uw data veilig te houden.
        </MediumFeature>

        <div id="features" />
        <BigFeature
          title="Budgetteren eenvoudig gemaakt."
          src="/img/homepage/actual-main-budget.png"
        >
          <strong>
            Bespaar (minstens!) honderden euro's per jaar door uw uitgaven bij te houden.
          </strong>{' '}
          Gebaseerd op beproefde methoden is ons budgetteringssysteem gebaseerd op uw werkelijke inkomen in plaats van verzonnen cijfers. Hierdoor wordt u geconfronteerd met uw werkelijke uitgaven en wordt duidelijk weergegeven hoeveel u elke maand bespaart. We maken dit proces zo eenvoudig mogelijk.
          {' '}
          <Link to="/docs/budgeting/">Meer&nbsp;informatie</Link>
        </BigFeature>

        <BigFeature
          title="De snelste manier om transacties te beheren."
          src="/img/homepage/actual-main-transaction.png"
        >
          Beheer uw transacties moeiteloos en werk ze eenvoudig bij met een gestroomlijnde, minimalistische interface.
          Het correct categoriseren van uw transacties is belangrijk en we hebben dit proces geoptimaliseerd.
          Beheer gesplitste transacties en overboekingen allemaal in dezelfde editor.
        </BigFeature>

        <BigFeature
          title="Oh nee, rapporten"
          src="/img/homepage/actual-report-cash-flow.png"
        >
          Intuïtieve rapporten geven u een snelle manier om meer te weten te komen over uw financiën. Standaard zijn er rapporten beschikbaar over netto waarde en kasstroom, maar binnenkort kunt u ook uw eigen rapporten maken. U kunt zelfs aangepaste rapporten downloaden van anderen.
        </BigFeature>
      </div>

      <div class={classes.featuresSection}>
        <img
          alt=""
          src="/img/homepage/features-bg.svg"
          class={classes.featuresBg}
        />

        <h2 class={`${classes.featuresSectionHeader} serif-header`}>
          Zo veel functies
        </h2>
        <div class={`${classes.smallFeaturesGrid} ${classes.container}`}>
          <SmallFeature
            title="Alles op één plek."
            icon={icons.smileyBlessedAlternate}
            learnMore="/docs/accounts/"
          >
            Voeg al uw rekeningen toe en houd alles bij op één plek.
            Krijg nuttige informatie, zoals de totale waarde van al uw rekeningen.
          </SmallFeature>
          <SmallFeature
            title="Betrokken partijen"
            icon={icons.shopCashierWoman}
            learnMore="/docs/transactions/payees"
          >
            Beheer makkelijk betrokken partijen.
            Voeg ze samen, stel aangepaste regels in voor hoe ze worden gematcht
            en gebruik standaard categorieën om transacties automatisch te categoriseren.
          </SmallFeature>
          <SmallFeature
            title="Splits transacties"
            icon={icons.diagramSplitVertical}
          >
            Gebruik gesplitste transacties om een enkele uitgave op te splitsen in meerdere categorieën. Een inline editor maakt dit naadloos mogelijk.
          </SmallFeature>
          <SmallFeature
            title="Budgetteren"
            icon={icons.wallet}
            learnMore="/docs/budgeting/"
          >
            Houd uw uitgaven bij met budgetten. U kunt alleen budgetteren met het geld dat u daadwerkelijk beschikbaar heeft, waardoor uw budget realistisch blijft en u geen cijfers verzint.
          </SmallFeature>
          <SmallFeature
            title="Overboekingen"
            icon={icons.dataTransferHorizontal}
            learnMore="/docs/transactions/transfers"
          >
            Beheer overboekingen eenvoudig door overboekingstransacties aan te maken. Consumeer bewust zal de transacties aan beide kanten koppelen en ze samen bijwerken.
          </SmallFeature>
          <SmallFeature
            title="Transacties importeren"
            icon={icons.commonFileDownload}
            learnMore="/docs/transactions/importing"
          >
            Importeer transacties vanuit de meest populaire financiële bestanden: QIF, OFX, QFX en CSV. Binnenkort zullen we bank synchronisatie lanceren om transacties automatisch te downloaden.
          </SmallFeature>
          <SmallFeature
            title="Ongedaan maken en opnieuw doen."
            icon={icons.rotateBack}
            learnMore="/docs/getting-started/tipstricks#undoredo"
          >
            Een robuust systeem voor ongedaan maken stelt u in staat om wijzigingen terug te draaien en ze indien gewenst opnieuw uit te voeren. Maak u nooit meer zorgen over het maken van fouten.
          </SmallFeature>
        </div>
        <div class={`${classes.ownYourDataSection} ${classes.container}`}>
          <h3 class="serif-header">U bent de eigenaar van uw gegevens</h3>
          <div class={classes.ownYourDataContent}>
            {icons.shieldLock}
            <div>
              Consumeer bewust stelt u in staat om moeiteloos wijzigingen te synchroniseren tussen apparaten via onze cloud.
              Onze end-to-end encryptie zorgt ervoor dat uw gegevens onleesbaar blijven, zelfs voor ons.
              U kunt overal toegang krijgen tot budget met gemoedsrust.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function SmallFeature({ title, icon, learnMore, children }) {
  return (
    <div class={classes.smallFeature}>
      <div class={classes.smallFeatureIcon}>{icon}</div>
      <div class={classes.smallFeatureContent}>
        <h3 class={classes.smallFeatureTitle}>{title}</h3>
        <p class={classes.smallFeatureText}>
          {children}{' '}
          {learnMore ? <Link to={learnMore}>Meer&nbsp;informatie</Link> : null}
        </p>
      </div>
    </div>
  );
}

function MediumFeature({ title, media, src, flip, children }) {
  return (
    <div
      class={`${classes.mediumFeature} ${
        flip ? classes.mediumFeature_flip : ''
      }`}
    >
      <div class={classes.mediumFeatureContent}>
        <h2 class="serif-header">{title}</h2>
        {children}
      </div>
      {media ? (
        <div class={classes.mediumFeatureMedia}>{media}</div>
      ) : (
        <img src={src} alt="" class={classes.mediumFeatureMedia} />
      )}
    </div>
  );
}

function BigFeature({ title, media, src, flip, children }) {
  return (
    <div class={classes.bigFeature}>
      <h2 class="serif-header">{title}</h2>
      <div class={classes.bigFeatureContent}>{children}</div>
      {media ? (
        <div class={classes.bigFeatureMedia}>{media}</div>
      ) : (
        <img src={src} alt="" class={classes.bigFeatureMedia} />
      )}
    </div>
  );
}

const icons = {
  smileyBlessedAlternate: (
    <svg viewBox="0 0 24 24">
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M16.561,14.5H7.438a.432.432,0,0,0-.379.25.557.557,0,0,0,0,.5A5.62,5.62,0,0,0,12,18.5a5.622,5.622,0,0,0,4.941-3.25.557.557,0,0,0,0-.5A.431.431,0,0,0,16.561,14.5Z" />
      <path d="M10.916,8.9a1,1,0,0,0-1.832-.8,1.5,1.5,0,0,1-2.751,0A1,1,0,0,0,4.5,8.9a3.5,3.5,0,0,0,6.415,0Z" />
      <path d="M18.983,7.584a1,1,0,0,0-1.316.516,1.5,1.5,0,0,1-2.751,0,1,1,0,1,0-1.832.8,3.5,3.5,0,0,0,6.415,0A1,1,0,0,0,18.983,7.584Z" />
    </svg>
  ),
  synchronizeArrows1: (
    <svg viewBox="0 0 24 24">
      <path d="M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z" />
      <path d="M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z" />
    </svg>
  ),
  shopCashierWoman: (
    <svg viewBox="0 0 24 24">
      <path d="M6.359,10.442a1,1,0,0,0,1.382-.3A5.6,5.6,0,0,0,8.2,9.273a.249.249,0,0,1,.407-.08,4.8,4.8,0,0,0,6.788,0,.249.249,0,0,1,.407.08,5.6,5.6,0,0,0,.458.872A1,1,0,0,0,17.938,9.06,4.576,4.576,0,0,1,17.3,6.548V5.3A5.3,5.3,0,1,0,6.7,5.3V6.548A4.576,4.576,0,0,1,6.062,9.06,1,1,0,0,0,6.359,10.442ZM12,8.6A2.787,2.787,0,0,1,9.212,5.938V5.926a.157.157,0,0,1,.112-.159,5.7,5.7,0,0,0,2.5-1.531A.254.254,0,0,1,12,4.159a.249.249,0,0,1,.181.078,5.726,5.726,0,0,0,2.5,1.531.156.156,0,0,1,.111.159v.011A2.787,2.787,0,0,1,12,8.6Z" />
      <path d="M5.489,17H18.511a.75.75,0,0,0,.7-1.02,7.713,7.713,0,0,0-14.422,0,.75.75,0,0,0,.7,1.02Z" />
      <path d="M23,18H1a1,1,0,0,0,0,2h.25a.25.25,0,0,1,.25.25V23a1,1,0,0,0,1,1h19a1,1,0,0,0,1-1V20.25a.25.25,0,0,1,.25-.25H23a1,1,0,0,0,0-2Z" />
    </svg>
  ),
  diagramSplitVertical: (
    <svg viewBox="0 0 24 24">
      <path d="M23.576,3.3,20.7.422A1.44,1.44,0,0,0,18.24,1.44V2.63a.25.25,0,0,1-.25.25h-.05A7.359,7.359,0,0,0,12.2,5.646a.249.249,0,0,1-.39,0A7.359,7.359,0,0,0,6.06,2.88H6.01a.25.25,0,0,1-.25-.25V1.44A1.44,1.44,0,0,0,3.3.422L.424,3.3a1.439,1.439,0,0,0,0,2.04L3.3,8.218A1.439,1.439,0,0,0,5.76,7.2V6.01a.25.25,0,0,1,.25-.25h.05a4.506,4.506,0,0,1,4.5,4.5v12.3a1.44,1.44,0,0,0,2.88,0v-12.3a4.506,4.506,0,0,1,4.5-4.5h.05a.25.25,0,0,1,.25.25V7.2A1.44,1.44,0,0,0,20.7,8.218L23.576,5.34a1.439,1.439,0,0,0,0-2.04Z" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 20 20">
      <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  ),
  dataTransferHorizontal: (
    <svg viewBox="0 0 24 24">
      <path d="M6,10.231a1,1,0,0,0,1-1V7.981a.25.25,0,0,1,.25-.25H17.358a1.5,1.5,0,0,0,0-3H7.25A.25.25,0,0,1,7,4.481V3.231a1,1,0,0,0-1.515-.857l-5,3a1,1,0,0,0,0,1.715l5,3A1,1,0,0,0,6,10.231Z" />
      <path d="M23.515,16.911l-5-3A1,1,0,0,0,17,14.769v1.25a.25.25,0,0,1-.25.25H6.642a1.5,1.5,0,1,0,0,3H16.75a.249.249,0,0,1,.25.25v1.25a1,1,0,0,0,1.515.857l5-3a1,1,0,0,0,0-1.715Z" />
    </svg>
  ),
  commonFileDownload: (
    <svg viewBox="0 0 24 24">
      <path d="M23.414,3,21,.586A2,2,0,0,0,19.585,0H8A2,2,0,0,0,6,2V9.275a.248.248,0,0,0,.242.25c.366.006,1.038.033,1.485.083A.246.246,0,0,0,8,9.36V2.5A.5.5,0,0,1,8.5,2H19.379a.5.5,0,0,1,.353.146l2.122,2.122A.5.5,0,0,1,22,4.621V18a.5.5,0,0,1-.5.5H14.642a.245.245,0,0,0-.241.21,7.956,7.956,0,0,1-.364,1.458.244.244,0,0,0,.228.331H22a2,2,0,0,0,2-2V4.414A2,2,0,0,0,23.414,3Z" />
      <path d="M6.5,11A6.5,6.5,0,1,0,13,17.5,6.508,6.508,0,0,0,6.5,11Zm2.391,7.312-2,2.5a.5.5,0,0,1-.782,0l-2-2.5A.5.5,0,0,1,4.5,17.5h.875a.126.126,0,0,0,.125-.124V14.5a1,1,0,0,1,2,0v2.875a.125.125,0,0,0,.124.125H8.5a.5.5,0,0,1,.391.812Z" />
    </svg>
  ),
  rotateBack: (
    <svg viewBox="0 0 24 24">
      <path d="M11.919,4a.243.243,0,0,1-.172-.414l1.879-1.879A1,1,0,1,0,12.212.293l-4,4a1,1,0,0,0,0,1.416l4,4a1,1,0,1,0,1.414-1.414L11.747,6.414A.243.243,0,0,1,11.919,6a8,8,0,0,1,0,16,1,1,0,1,0,0,2,10,10,0,0,0,0-20Z" />
      <path d="M8.827,21.381A8.008,8.008,0,0,1,7.1,20.39a1,1,0,0,0-1.206,1.6,10.036,10.036,0,0,0,2.156,1.24,1,1,0,0,0,.773-1.845Z" />
      <path d="M4.063,15.523a1,1,0,1,0-1.963.382,10.079,10.079,0,0,0,.844,2.507,1,1,0,0,0,1.8-.883A7.961,7.961,0,0,1,4.063,15.523Z" />
      <path d="M4.438,8.891a1,1,0,0,0-1.352.415,10.019,10.019,0,0,0-.939,2.573A1,1,0,0,0,4.1,12.3a8.012,8.012,0,0,1,.752-2.062A1,1,0,0,0,4.438,8.891Z" />
    </svg>
  ),
  realEstateTruckHouse: (
    <svg viewBox="0 0 24 24">
      <path d="M23.832,7.126,16.664.752h0a1,1,0,0,0-1.327,0L8.168,7.126A.5.5,0,0,0,8.5,8h2a.5.5,0,0,1,.5.5v5a1,1,0,0,0,1,1h2a.5.5,0,0,0,.5-.5V11.5a1.5,1.5,0,0,1,3,0V14a.5.5,0,0,0,.5.5h2a1,1,0,0,0,1-1v-5a.5.5,0,0,1,.5-.5h2A.5.5,0,0,0,23.832,7.126Z" />
      <path d="M23,16a.5.5,0,0,0-.5-.5h-12a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5H21a.5.5,0,0,1,.5.5v.75a.75.75,0,0,0,1.5,0V16Z" />
      <path d="M8,11.5H4.877a1,1,0,0,0-.962.726L3.14,14.94a.5.5,0,0,1-.257.31L.552,16.414A1,1,0,0,0,0,17.309V21.5a1,1,0,0,0,1,1H2.535a.5.5,0,0,0,.5-.57A3,3,0,0,1,8.143,19.4.5.5,0,0,0,9,19.053V12.5A1,1,0,0,0,8,11.5Z" />
      <circle cx="6" cy="21.5" r="2"></circle>
      <path d="M10.5,19.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h4.539a.5.5,0,0,0,.5-.579,2.884,2.884,0,0,1,.261-1.7.5.5,0,0,0-.45-.718Z" />
      <circle cx="18.5" cy="21.5" r="2"></circle>
    </svg>
  ),
  hierarchy1: (
    <svg viewBox="0 0 24 24">
      <path d="M21,0a3,3,0,0,0-3,3,2.971,2.971,0,0,0,.876,2.1.25.25,0,0,1,.05.279l-2.7,5.979a.25.25,0,0,1-.233.147,2.9,2.9,0,0,0-1.945.726.251.251,0,0,1-.276.035l-2.651-1.327a.249.249,0,0,1-.138-.244A2.993,2.993,0,1,0,5.8,12.531a.251.251,0,0,1,.04.281L3.328,17.875a.25.25,0,0,1-.235.139A2.993,2.993,0,1,0,6,21a2.978,2.978,0,0,0-.8-2.032.251.251,0,0,1-.04-.281l2.513-5.064a.25.25,0,0,1,.234-.139,2.9,2.9,0,0,0,2.049-.716.25.25,0,0,1,.275-.035l2.652,1.326a.251.251,0,0,1,.138.244,2.993,2.993,0,1,0,5.98.2,2.969,2.969,0,0,0-.876-2.1.251.251,0,0,1-.05-.28l2.7-5.983a.252.252,0,0,1,.23-.147A2.995,2.995,0,1,0,21,0Z" />
    </svg>
  ),
  shieldLock: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="11.994" r="1.5"></circle>
      <path d="M12,4.744a1.752,1.752,0,0,0-1.75,1.75v1.25a.5.5,0,0,0,.5.5h2.5a.5.5,0,0,0,.5-.5V6.494A1.752,1.752,0,0,0,12,4.744Z"></path>
      <path d="M24,1.953A1.959,1.959,0,0,0,22.043.006H1.959A1.958,1.958,0,0,0,.012,1.965L0,9.306A15.146,15.146,0,0,0,11.861,23.975a1,1,0,0,0,.4,0A15.145,15.145,0,0,0,23.988,9.2ZM17,14.744a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1v-5.5a1,1,0,0,1,1-1h.25a.5.5,0,0,0,.5-.5V6.494a3.25,3.25,0,0,1,6.5,0v1.25a.5.5,0,0,0,.5.5H16a1,1,0,0,1,1,1Z"></path>
    </svg>
  ),
};
